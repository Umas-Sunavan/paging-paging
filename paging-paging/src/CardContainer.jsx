import React, { Component } from 'react';
import ACard from './ACard';
import './CardContainer.css';

let lastSrollTime = 0
let lastSucesScreenMovedTime = new Date().getTime();
let currentDeltaY = undefined
let lastTouchLocationY = undefined
// isScrollDirestionUp and lastTouchLocationY:  0 is no scroll, 1 is scroll up, -1 is scroll down
let isScrollDirestionUp = 0

class CardContainer extends Component {

  componentWillMount = () => {
    this.preventScroll()
  }

  constructor(props) {
    super(props)
    this.state = {
      animationTime: 1200,
      scrollQuietPeriod: 0,
      touchQuietPeriod: 0,
      touchStableConstantNumber: 2,
      handleJumpCardRequest: this.props.getJumpACardTargetIndex,
      animationMoveState: ['', '', '']
    }
  }

  preventScroll = () => {
    let containerClass = this
    window.addEventListener('wheel', function (event) {
      event.preventDefault()
      containerClass.stablizeScroll(event)
    })
    window.addEventListener('touchmove', function (event) {
      event.preventDefault()
      containerClass.stablizeScreenTouch(event)
    }, { passive: false })
  }

  stablizeScroll = (event) => {
    let timeNow = new Date().getTime();
    let enableScrolling = Boolean(timeNow - lastSrollTime < (this.state.touchQuietPeriod + this.state.animationTime));
    if (!enableScrolling) {
      currentDeltaY = event.deltaY
      lastSrollTime = timeNow
      this.onStableScroll()
    }
  }

  stablizeScreenTouch = (event) => {
    let timeNow = new Date().getTime()
    let currentTouchedY = event.changedTouches.item(0).clientY
    let distence = currentTouchedY - lastTouchLocationY
    let timeToMove = Boolean(timeNow - lastSucesScreenMovedTime > (this.state.scrollQuietPeriod + this.state.animationTime))
    if (distence >= this.state.touchStableConstantNumber || distence <= -this.state.touchStableConstantNumber) {
      if (timeToMove) {
        this.onStableScreenTouch((distence < 0) ? -1 : 1)
        lastSucesScreenMovedTime = timeNow
      }
    }
    if (timeToMove) {
      lastTouchLocationY = currentTouchedY
    } else {
      lastTouchLocationY = undefined
    }
  }

  setParentCardActiveStatus = (newActiveStatus, callbackFunc) => {
    this.props.setCardActiveStatus(newActiveStatus, callbackFunc)
  }

  setUpCardActiveStatus = (cardLocationList, callBackFunc) => {
    let cardActiveStatus = cardLocationList.map((ACardLocation) => {
      if (ACardLocation[0] !== undefined) {
        return 0
      } else {
        throw new Error('A A-Card has no child!')
      }
    })
    this.setParentCardActiveStatus(cardActiveStatus, () => {
      console.log(this.props.getCardActiveStatus)
      this.updateCardActiveStatus(cardActiveStatus, this.getCurrentLocation(), callBackFunc)
    })
  }

  updateCardActiveStatus = (cardActiveStatus, toActivateLocation, callBackFunc = () => { }) => {
    let newStatus = cardActiveStatus
    newStatus[toActivateLocation[0]] = toActivateLocation[1]
    this.setParentCardActiveStatus(newStatus, () => {
      console.log('car active status updated: ' + this.props.getCardActiveStatus)
      callBackFunc()
    })
  }

  onStableScreenTouch = (touchMoveIsUp) => {
    console.log(touchMoveIsUp)
    this.moveNextLocation(touchMoveIsUp)
  }

  onStableScroll = () => {
    isScrollDirestionUp = this.getIsDirectionUp()
    this.moveNextLocation(isScrollDirestionUp)
  }

  setAnimationState = (from, to) => {
    this.setState({ animationMoveState: ['move start', from, to] }, () => {
      this.onAnimationMoveStart(from, to)
      this.props.setAnimationState(['move start', from, to])
      setTimeout(() => {
        this.setState({ animationMoveState: ['move finished', from, to] }, () => {          
          this.onAnimationMoveFinished(from, to)
          this.props.setAnimationState(['move finished', from, to])
        })
      }, this.state.animationTime)
    })
  }

  onAnimationMoveStart = (from, to) => {
    if (from[0] === 0) {
      console.log('leaving from Coverpage!');
      this.props.requestShouldHideACardsMenu(false)
    }
    if (to[0] === 0) {
      console.log('comming to Coverpage!');
      this.props.requestShouldHideACardsMenu(true)
    }
  }

  onAnimationMoveFinished = (from, to) => {

  }

  getIsDirectionUp = () => {
    return (currentDeltaY !== 0) ? ((currentDeltaY < 0) ? 1 : -1) : 0
  }

  getCurrentLocation = () => {
    if (this.props.getCurrentLocationFromParent() === undefined) {
      return [0, 0, 0]
    } else {
      return this.props.getCurrentLocationFromParent()
    }
  }

  setCurrentLocationToParent = (newLocation) => {
    this.props.setCurrentLocationToParent(newLocation)
  }

  moveNextLocation = (isUp) => {
    let isDown = isUp * -1
    let current = this.getCurrentLocation()
    console.log('origionalCardActiveStatus: ' + this.props.getCardActiveStatus)
    // 確認上/下一張B卡存在並設定當前位置
    if (this.isLocationExists([current[0], (current[1] + isDown)])) {
      console.log('上/下一張B卡存在 ')
      // 上/下一張B卡存在 
      this.onMoveWithinACard(current, isUp, isDown)
      // 上/下一張B卡不存在，確認往上或往下
    } else if (isUp === 1 && this.isLocationExists([(current[0] + isDown), 0])) {
      console.log('上一張B卡不存在，若往上且上一A張卡存在，切上一張A卡並移到最後一張B卡')
      // 上一張B卡不存在，若往上且上一A張卡存在，切上一張A卡並移到最後一張B卡
      this.onMoveToLastACard(current, isUp, isDown)
    } else if (isUp === -1 && this.isLocationExists([(current[0] + isDown), 0])) {
      console.log('下一張B卡不存在，若往下且下一A張卡存在，切下一張A卡並移到第0張B卡')
      // 下一張B卡不存在，若往下且下一A張卡存在，切下一張A卡並移到第0張B卡
      this.onMoveToNextACard(current, isUp, isDown)
    } else {
      console.log(this.props.getCardLocationList)
      // 上/下一張B卡不存在，上/下一A張卡不存在
      if (current[0] === 0 && current[1] === 0 && isUp === 1) {
        // 意圖往上，且已是第一張卡
        console.log('you reach the top!')
      } else if (current[0] === this.props.getCardLocationList.length - 1 && current[1] === this.props.getCardLocationList[this.props.getCardLocationList.length - 1].length - 1 && isUp === -1) {
        // 意圖往下，且已是最後一張卡
        console.log('you reach the bottom!')
      } else {
        throw new Error('moveNextLocation: you may encounter a logic problem')
      }
    }
  }

  onMoveWithinACard = (current, isUp, isDown) => {
    this.setAnimationState(current, [current[0], (current[1] + isDown)])
    this.setCurrentLocationToParent([current[0], (current[1] + isDown), current[2]])
    this.moveNextBCardInContainer(isUp, current)
    this.handleUpdateCardActiveStatus()
  }

  onMoveToNextACard = (current, isUp, isDown) => {
    // 先取得有效的activeStatus
    this.setAnimationState(current, [(current[0] + isDown), 0, 0])
    let checkedActiveStatus = this.makeCardActiveStatusExists(this.props.getCardActiveStatus)
    this.setCurrentLocationToParent([(current[0] + isDown), 0, 0])
    this.moveNextACardInContainer(isUp)
    console.log(`(current[0] + isDown): ${(current[0] + isDown)}, origionalCardActiveStatus:${checkedActiveStatus}`)
    this.jumpBCardsInACard([(current[0] + isDown),
    checkedActiveStatus[(current[0] + isDown)]],
      [(current[0] + isDown), 0])
    this.handleUpdateCardActiveStatus()
  }

  onMoveToLastACard = (current, isUp, isDown) => {
    // 先取得有效的activeStatus
    this.setAnimationState(current, [(current[0] + isDown), (this.props.getCardLocationList[current[0] + isDown].length - 1), 0])
    let checkedActiveStatus = this.makeCardActiveStatusExists(this.props.getCardActiveStatus)
    console.log(checkedActiveStatus[1]);
    this.setCurrentLocationToParent([(current[0] + isDown), (this.props.getCardLocationList[current[0] + isDown].length - 1), 0])
    this.moveNextACardInContainer(isUp)
    console.log(this.props.getCardActiveStatus);

    console.log(`from [${(current[0] + isDown)} , ${checkedActiveStatus[(current[0] + isDown)]}] to [${(current[0] + isDown)} , ${(this.props.getCardLocationList[current[0] + isDown].length - 1)}]`)
    this.jumpBCardsInACard([(current[0] + isDown), checkedActiveStatus[(current[0] + isDown)]], [(current[0] + isDown), this.props.getCardLocationList[current[0] + isDown].length - 1])
    this.handleUpdateCardActiveStatus()
  }

  moveNextACardInContainer = (isUp) => {
    console.log(`getContainerTransformY: ${this.props.getContainerTransformY}`);
    this.props.setContainerTransformY(this.props.getContainerTransformY + (this.props.getACardOuterHeight * isUp))
  }

  moveNextBCardInContainer = (isUp, targetACardLocation) => {
    this.props.rawMoveBCard(targetACardLocation[0], (1 * isUp))
  }

  onJumpLocation = (fromLocation, toLocation) => {
    // check move type 
    console.log(fromLocation, toLocation)
    if (fromLocation[0] === toLocation[0]) {
      if (fromLocation[1] === toLocation[1]) {
        console.log('the same A-card')
        // the same A-card
      } else {
        console.log('jump B Cards In ACard')
        // jump B Cards In ACard
        console.log(this.props.getCardActiveStatus);
        console.log(toLocation);


        this.setCurrentLocationToParent([toLocation[0], toLocation[1], toLocation[2]])
        this.jumpBCardsInACard(fromLocation, toLocation)
        this.setAnimationState(fromLocation, toLocation)

        this.betterHandleUpdateCardActiveStatus(() => { }, toLocation)

      }
    } else {
      console.log('jump A Cards In Container')
      // jump A Cards In Container
      // 設定activate Location
      let BCardInNewACardToInactivate
      this.handleUpdateCardActiveStatus(() => {
        BCardInNewACardToInactivate = this.props.getCardActiveStatus[toLocation[0]]
        console.log(`fromLocation: ${fromLocation} ,toLocation: ${toLocation}, BCardInNewACardToInactivate: ${BCardInNewACardToInactivate} `)
        // 更新Location
        this.setCurrentLocationToParent([toLocation[0], toLocation[1], toLocation[2]])
        // 處理新A卡中的跳轉
        console.log(`fromACardLocation: ${[toLocation[0], BCardInNewACardToInactivate]}, toLocation: ${toLocation}, BCardInNewACardToInactivate: ${BCardInNewACardToInactivate}`)
        this.jumpBCardsInACard([toLocation[0], BCardInNewACardToInactivate], toLocation)
        // 處理A卡的跳轉
        this.jumpACardsInContainer(fromLocation[0], toLocation[0])
        // 處理動畫狀態
        this.setAnimationState(fromLocation, toLocation)
        console.log('cardActiveStatus: ' + this.props.getCardActiveStatus)
      })
    }

  }

  jumpACardsInContainer = (formACardLocation, toACardLocation) => {
    let distance = formACardLocation - toACardLocation
    console.log(`jumpACardsInContainer:forACardLocation: ${formACardLocation} - toACardLocation: ${toACardLocation} = distance: ${distance} (getACardOuterHeight: ${this.props.getACardOuterHeight})`)
    this.props.setContainerTransformY(this.props.getContainerTransformY + (this.props.getACardOuterHeight * distance))
    this.handleUpdateCardActiveStatus()
  }

  jumpBCardsInACard = (formBCardLocation, toBCardLocation) => {
    let distance = formBCardLocation[1] - toBCardLocation[1]
    console.log(`jumpBCardsInACard:formBCardLocation[1]: ${formBCardLocation[1]} - toBCardLocation[1]: ${toBCardLocation[1]} = distance: ${distance}`)
    this.props.rawMoveBCard(formBCardLocation[0], distance)
    this.handleUpdateCardActiveStatus()
  }

  handleUpdateCardActiveStatus = (callBackFunc) => {
    if (this.props.getCardActiveStatus === undefined) {
      this.setUpCardActiveStatus(this.props.getCardLocationList, callBackFunc)
    } else {
      this.updateCardActiveStatus(this.props.getCardActiveStatus, this.getCurrentLocation(), callBackFunc)
    }
  }

  betterHandleUpdateCardActiveStatus = (callBackFunc, currentLocation) => {
    if (this.props.getCardActiveStatus === undefined) {
      this.setUpCardActiveStatus(this.props.getCardLocationList, callBackFunc)
    } else {
      this.updateCardActiveStatus(this.props.getCardActiveStatus, currentLocation, callBackFunc)
    }
  }

  isLocationExists = (assumedNext) => {
    try {
      if (this.props.getCardLocationList[assumedNext[0]][assumedNext[1]] === undefined) {
        console.log([assumedNext[0], assumedNext[1]] + 'not exists! ')
        // not exists
        return false
      } else if (this.props.getCardLocationList[assumedNext[0]][assumedNext[1]] !== undefined) {
        console.log([assumedNext[0], assumedNext[1]] + 'exists! ')
        // exists
        return true
      } else {
        throw new Error('isExists has an exception')
      }
    } catch (error) {
      return false
    }
  }

  refHandler = (element) => {
    this.containerElement = element
    this.props.refHandler()
  }

  handleOnButtonKeyPress = (event) => {
    if (event.target.value && event.key === "Enter") {
      let aCardIndex = +(event.target.value.slice(0, 1))
      let bCardIndex = +(event.target.value.slice(1, 2))
      console.log(aCardIndex, bCardIndex)
      console.log(this.getCurrentLocation())
      if (this.isLocationExists([aCardIndex, bCardIndex, 0])) {
        this.onJumpLocation(this.getCurrentLocation(), [aCardIndex, bCardIndex, 0])
      } else {
        console.log('No this number!')
      }
    }
  }

  makeCardActiveStatusExists = (cardActiveStatus) => {
    if (cardActiveStatus !== undefined) {
      return cardActiveStatus
    } else {
      return this.props.cardListData.map((item, index) => { return 0 })
    }
  }

  handleJumpACardRequestFromMenu = () => {
    let targetIndex = this.props.getJumpACardTargetIndex
    let current = this.getCurrentLocation()
    let activeStatus = this.props.getCardActiveStatus
    if (targetIndex !== undefined || this.props.getJumpACardTargetIndex !== current) {
      if (this.isLocationExists([targetIndex, 0, 0])) {
        let checkedCardActiveStatus = this.makeCardActiveStatusExists(activeStatus)
        console.log(checkedCardActiveStatus)
        this.onJumpLocation(current, [targetIndex, checkedCardActiveStatus[targetIndex], 0])
        this.props.setJumpACardTargetIndexUndefined()
      }
    }
  }

  handleJumpBCardRequestfFromMenu = (aCardIndex, bCardIndex, cCardIndex) => {
    let currentLocation = this.getCurrentLocation()
    this.onJumpLocation(currentLocation, [aCardIndex, bCardIndex, cCardIndex])
  }

  render() {
    this.handleJumpACardRequestFromMenu()
    let style = {
      transform: "translate3d(0px," + this.props.getContainerTransformY + "vh,0px)"
    }
    return (

      <div id="card-container" style={style} ref={this.refHandler}>
        {
          this.props.cardListData.map((aCardItem, aCardIndex) => {
            return <ACard
              key={aCardIndex}
              aCardIndex={aCardIndex}
              child={aCardItem.ACardChild}
              style={aCardItem.ACardAttr.style}
              containerStyle={aCardItem.BCardContainerAttr.style}
              className="a-card"
              getJumpBCardRequest={(bCardIndex) => this.handleJumpBCardRequestfFromMenu(aCardIndex, bCardIndex, 0)}
              id={'a-card-' + aCardIndex}
              passAnimationMoveState={this.state.animationMoveState}
              serMoveNextLocationInContainer={() => { this.moveNextLocation(-1) }}
              screenType={this.props.screenType}
            ></ACard>
          })
        }
      </div>
    )
  }

}

export default CardContainer;