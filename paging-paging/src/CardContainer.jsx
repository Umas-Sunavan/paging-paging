import React, { Component } from 'react';
import ACard from './ACard';
import './CardContainer.css';

let lastSrollTime = 0
let lastSucesScreenMovedTime  = new Date().getTime();
let currentDeltaY = undefined
let lastTouchLocationY = undefined
let enableTouchMoving = undefined
// isScrollDirestionUp and lastTouchLocationY:  0 is no scroll, 1 is scroll up, -1 is scroll down
let isScrollDirestionUp = 0
let timeNow

class CardContainer extends Component {

  componentWillMount = () => {
    this.preventScroll()
  }

  componentDidMount = () => {    
  }

  componentWillUnmount = () => {
  }
  
  constructor(props) {
    super(props)
    this.state = {
      animationTime:1200,
      scrollQuietPeriod:0,
      touchQuietPeriod:0,
      touchStableConstantNumber:2,
    }
  }
  
  preventScroll = () => {
    let containerClass = this
    window.addEventListener('wheel',function(event) {
      event.preventDefault()
      containerClass.stablizeScroll(event)
    })
    window.addEventListener('touchmove',function(event) {
      containerClass.stablizeScreenTouch(event)
    })
  }

  stablizeScroll = (event) => {
    let timeNow = new Date().getTime();
    let enableScrolling = Boolean(timeNow - lastSrollTime < (this.state.touchQuietPeriod + this.state.animationTime));
    if(!enableScrolling) {
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
    if (distence>=this.state.touchStableConstantNumber||distence <= -this.state.touchStableConstantNumber) {
      if (timeToMove) {
        this.onStableScreenTouch((distence<0)?-1:1)
        lastSucesScreenMovedTime = timeNow
      }
    }
    if (timeToMove) {
      lastTouchLocationY = currentTouchedY
    } else {
      lastTouchLocationY = undefined
    }
  }

  setParentCardActiveStatus = (newActiveStatus,callbackFunc) => {
    this.props.setCardActiveStatus(newActiveStatus,callbackFunc)
  }

  setUpCardActiveStatus = (cardLocationList,callBackFunc) => {
    let cardActiveStatus = cardLocationList.map((ACardLocation)=>{
      if (ACardLocation[0] !== undefined ) {
        return 0
      } else {
        throw new Error('A A-Card has no child!')
      }
    })
    this.setParentCardActiveStatus(cardActiveStatus,() => {
      this.updateCardActiveStatus(cardActiveStatus,this.getCurrentLocation(),callBackFunc)  
    })
  }

  updateCardActiveStatus = (cardActiveStatus,toActivateLocation,callBackFunc = ()=>{}) => {
    let newStatus = cardActiveStatus
    newStatus[toActivateLocation[0]] = toActivateLocation[1]
    this.setParentCardActiveStatus(newStatus,()=>{
      console.log('car active status updated: '+this.props.getCardActiveStatus)
      console.log(callBackFunc)
      callBackFunc()
    })
  }

  onStableScreenTouch = (touchMoveIsUp) => {
    console.log(touchMoveIsUp)    
    this.moveNextLocation(touchMoveIsUp)
  }

  onStableScroll = () => {
    isScrollDirestionUp = this.getIsDirectionUp()
    console.log(isScrollDirestionUp)
    this.moveNextLocation(isScrollDirestionUp)
  } 

  getIsDirectionUp = () => {
    return (currentDeltaY !== 0)? ( (currentDeltaY < 0)? 1 : -1 ) : 0
  }

  getCurrentLocation = () => {
    console.log(this.props.getCurrentLocationFromParent())    
    if (this.props.getCurrentLocationFromParent() === undefined) {
      return [0,0,0]
    } else {
      return this.props.getCurrentLocationFromParent()
    }
  }

  setCurrentLocationToParent = (newLocation) => {
    this.props.setCurrentLocationToParent(newLocation)
  }

  moveNextLocation = (isUp) => {
    let isDown = isUp * -1
    console.log(this.getCurrentLocation())    
    let current = this.getCurrentLocation()
    let origionalCardActiveStatus = this.props.getCardActiveStatus
    console.log('current: ' + [current[0],current[1]])
    console.log('origionalCardActiveStatus: ' + origionalCardActiveStatus)
    
    // 確認上/下一張B卡存在並設定當前位置
    if (this.isLocationExists([current[0],(current[1] + isDown)])) {
      console.log('上/下一張B卡存在 ')
      // 上/下一張B卡存在 
      this.setCurrentLocationToParent([current[0],(current[1] + isDown),current[2]])
      this.moveNextBCardInContainer(isUp,current)
      this.handleUpdateCardActiveStatus()
      // 上/下一張B卡不存在，確認往上或往下
    } else if (isUp === 1 && this.isLocationExists([(current[0] + isDown),0])) {
      console.log('上一張B卡不存在，若往上且上一A張卡存在，切上一張A卡並移到最後一張B卡')
      // 上一張B卡不存在，若往上且上一A張卡存在，切上一張A卡並移到最後一張B卡
      this.setCurrentLocationToParent([(current[0] + isDown),(this.props.getCardLocationList[current[0]+isDown].length-1),0])
      this.moveNextACardInContainer(isUp)
      this.handleUpdateCardActiveStatus()
    } else if (isUp === -1 && this.isLocationExists([(current[0] + isDown),0])) {
      console.log('下一張B卡不存在，若往下且下一A張卡存在，切下一張A卡並移到第0張B卡')
      // 下一張B卡不存在，若往下且下一A張卡存在，切下一張A卡並移到第0張B卡
      this.setCurrentLocationToParent([(current[0] + isDown),0,0])
      this.moveNextACardInContainer(isUp)
      console.log(`(current[0] + isDown): ${(current[0] + isDown)}, origionalCardActiveStatus:${origionalCardActiveStatus}`)        
      this.jumpBCardsInACard([(current[0] + isDown),origionalCardActiveStatus[(current[0] + isDown)]],[(current[0] + isDown),0])
      this.handleUpdateCardActiveStatus()
    } else {
      console.log(this.props.getCardLocationList)
      // 上/下一張B卡不存在，上/下一A張卡不存在
      if (current[0]===0&&current[1]===0&&isUp===1) {
        // 意圖往上，且已是第一張卡
        console.log('you reach the top!')        
      } else if (current[0]===this.props.getCardLocationList.length-1 && current[1]===this.props.getCardLocationList[this.props.getCardLocationList.length-1].length-1&&isUp===-1) {
        // 意圖往下，且已是最後一張卡
        console.log('you reach the bottom!')
      } else {
        throw new Error('moveNextLocation: you may encounter a logic problem')
      }
    }

    console.log('cardActiveStatus: ' + this.props.getCardActiveStatus)
  }

  moveNextACardInContainer = (isUp) => {
    this.props.setContainerTransformY(this.props.getContainerTransformY + (this.props.getACardOuterHeight * isUp))
  }

  moveNextBCardInContainer = (isUp,targetACardLocation) => {
    this.props.rawMoveBCard(targetACardLocation[0],(1 * isUp))
  }

  rawMoveNext = (isUp) => {
    console.log(this.state.transformY)    
    this.props.setContainerTransformY(this.props.getContainerTransformY + (this.props.getACardOuterHeight * isUp))
    console.log(((isUp === 0)? '(raw move) no move' : (isUp < 0)? 'raw move down' : 'raw move up'));
    this.handleUpdateCardActiveStatus()
  }

  onJumpLocation = (fromLocation,toLocation) => {
    // check move type 
    console.log(fromLocation,toLocation)
    if (fromLocation[0]===toLocation[0]) {
      if (fromLocation[1]===toLocation[1]) {
        // the same A-card
      } else {
        // jump B Cards In ACard
        this.setCurrentLocationToParent([toLocation[0],toLocation[1],toLocation[2]])
        this.jumpBCardsInACard(fromLocation,toLocation)
      }
    } else {    
      // jump A Cards In Container
      // 設定activate Location
      let BCardInNewACardToInactivate
      this.handleUpdateCardActiveStatus(()=>{ 
        BCardInNewACardToInactivate = this.props.getCardActiveStatus[toLocation[0]]
        console.log(`fromLocation: ${fromLocation} ,toLocation: ${toLocation}, BCardInNewACardToInactivate: ${BCardInNewACardToInactivate} `) 
        // 更新Location
        this.setCurrentLocationToParent([toLocation[0],toLocation[1],toLocation[2]])
        // 處理新A卡中的跳轉
        console.log(`fromACardLocation: ${[toLocation[0],BCardInNewACardToInactivate]}, toLocation: ${toLocation}, BCardInNewACardToInactivate: ${BCardInNewACardToInactivate}`)      
        this.jumpBCardsInACard([toLocation[0],BCardInNewACardToInactivate],toLocation)      
        // 處理A卡的跳轉
        this.jumpACardsInContainer(fromLocation[0],toLocation[0])  
      })
    }
    console.log('cardActiveStatus: ' + this.props.getCardActiveStatus)
  }

  jumpACardsInContainer = (formACardLocation,toACardLocation) => {
    let distance = formACardLocation - toACardLocation
    console.log(`jumpACardsInContainer:forACardLocation: ${formACardLocation} - toACardLocation: ${toACardLocation} = distance: ${distance} (getACardOuterHeight: ${this.props.getACardOuterHeight})`)    
    this.props.setContainerTransformY(this.props.getContainerTransformY + (this.props.getACardOuterHeight * distance))
    this.handleUpdateCardActiveStatus()
  }

  jumpBCardsInACard = (formBCardLocation,toBCardLocation) => {
    let distance = formBCardLocation[1] - toBCardLocation[1]
    console.log(`jumpBCardsInACard:formBCardLocation[1]: ${formBCardLocation[1]} - toBCardLocation[1]: ${toBCardLocation[1]} = distance: ${distance}`)    
    this.props.rawMoveBCard(formBCardLocation[0],distance)
    this.handleUpdateCardActiveStatus()
  }

  handleUpdateCardActiveStatus = (callBackFunc) => {
    if (this.props.getCardActiveStatus === undefined) {
      this.setUpCardActiveStatus(this.props.getCardLocationList,callBackFunc)
    } else {
      this.updateCardActiveStatus(this.props.getCardActiveStatus,this.getCurrentLocation(),callBackFunc)
    }
  }

  isLocationExists = (assumedNext) => {
    try {
      if (this.props.getCardLocationList[assumedNext[0]][assumedNext[1]] === undefined) {
        console.log([assumedNext[0],assumedNext[1]] + 'not exists! ')        
        // not exists
        return false
      } else if  (this.props.getCardLocationList[assumedNext[0]][assumedNext[1]] !== undefined) {
        console.log([assumedNext[0],assumedNext[1]] + 'exists! ')
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
      let ACardLocation = +(event.target.value.slice(0,1))
      let BCardLocation = +(event.target.value.slice(1,2))
      console.log(ACardLocation, BCardLocation)
      console.log(this.getCurrentLocation())      
      if (this.isLocationExists([ACardLocation,BCardLocation,0])) {
        this.onJumpLocation(this.getCurrentLocation(),[ACardLocation,BCardLocation,0])
      } else {
        console.log('No this number!')        
      }
    }  
  }

  render() {
    
    
    let style = {
      transform:"translate3d(0px," + this.props.getContainerTransformY + "vh,0px)"
    } 
    return (
    [<div id="card-container" style={style} ref={this.refHandler}>
      {    
        this.props.cardListData.map((aCardItem,aCardIndex)=>{
          return <ACard key={aCardIndex} child={aCardItem.ACardChild} style={aCardItem.ACardAttr.style} containerStyle={aCardItem.BCardContainerAttr.style} className="a-card"></ACard>
        })
      }
    </div>
    ,<div style={{height: '50px',width: '100%',position:' fixed',top: '0px',backgroundColor: 'cadetblue'}}>
    <form style={{position:'fixed', zIndex: '100'}}>
      A-Card: <input type="text" name="onepage"/>
      B-Card: <input type="text" name="subpage" onKeyPress={(event)=>{this.handleOnButtonKeyPress(event)}}/>
    </form>
    </div>]
    
    )
  }

}

export default CardContainer;