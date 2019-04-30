import React, { Component } from 'react';
import CardContainer from './CardContainer';
import createRawCardDataList from './CreateRawCardDataList';
import convertToMobileCardDataList from './ConvertToMobileCardDataList';
import createCardLocationList from './CreateCardLocationList';
import ACardsMenuListItem from './ACardsMenuListItem';
import './globalStyle.css';
import './ACardsMenuListItem.css';
import './portfolio-style.css';

class CardApp extends Component {
  constructor(props) {
    super(props)
    const aCardHeight = 100
    const bCardHeight = 90
    const bCardHightForTest = 110
    let cardList = this.makeCardDataList(this.getScreenType(document.getElementById('card-app').clientWidth), bCardHeight)

    this.state = {
      bCardOuterHeight: bCardHeight,
      cardLocationList: createCardLocationList(cardList),
      containerWidth: document.getElementById('card-app').clientWidth,
      screenType: this.getScreenType(document.getElementById('card-app').clientWidth),
      cardDataList: cardList,
      aCardOuterHeight: aCardHeight,
      cardActiveStatus: undefined,
      currentLocation: [0, 0, 0],
      transformY: 0,
      jumpACardTargetIndex: undefined,
      isACArdsMenuHide: true,
      animationState: 'papaya'
    }
    window.addEventListener("resize", this.onUpdateWidthNew)
  }

  makeCardDataList = (screenType, bCardHeight) => {
    console.log('makeCardDataList')
    switch (screenType) {
      case 'mobile phone':
        return convertToMobileCardDataList(createRawCardDataList(bCardHeight))
      case 'tablet':
      case 'laptop':
      case 'PC screens and bigger':
        return createRawCardDataList(bCardHeight)
      default:
        throw new Error('Scree Type Error')
    }
  }

  onUpdateWidthNew = () => {
    let newWidth = document.getElementById('card-app').clientWidth
    let newScreenType = this.getScreenType(newWidth)
    let newCardDataList = this.makeCardDataList(newScreenType, this.state.bCardOuterHeight)
    if (this.state.screenType !== newScreenType) {
      this.setState({ containerWidth: newWidth, screenType: newScreenType, cardDataList: newCardDataList, cardLocationList: createCardLocationList(newCardDataList) })
      this.resetDataListAndLocation(newCardDataList)
    }
  }

  resetDataListAndLocation = (newCardDataList) => {
    newCardDataList.map((ACardItem, ACardIndex) => {
      this.moveBCardToStartPoint(ACardIndex)
      this.moveACardToStartPoint(ACardIndex)
      this.setLocationToStartPoint()
      this.setCardActiveStatusToUndefined()
      return true
    })
  }

  getScreenType = (width) => {
    if (width <= 480) {
      console.log('mobile phone, width: ' + width)
      return 'mobile phone'
    } else if (width <= 1024) {
      console.log('tablet, width: ' + width)
      return 'tablet'
    } else if (width <= 1600) {
      console.log('laptop, width: ' + width)
      return 'laptop'
    } else {
      console.log('PC screens and bigger' + width)
      return 'PC screens and bigger'
    }
  }

  setContainerRef = (element) => {
    this.containerElement = element
  }

  rawMoveBCard = (ACardIndex, distance) => {
    let origionalCardDataList = this.state.cardDataList
    let origionalTransformY = this.getOrigionalTransformY(ACardIndex)
    console.log(`origionalTransformY: ${origionalTransformY}, distance: ${distance}, to: ${origionalTransformY + (this.state.bCardOuterHeight * distance)}` );
    
    origionalCardDataList[ACardIndex].BCardContainerAttr = { style: { transform: 'translate3d(0px,' + (origionalTransformY + (this.state.bCardOuterHeight * distance)) + 'vh,0px)' } }
    this.setState({ cardDataList: origionalCardDataList })
  }

  moveACardToStartPoint = (ACardIndex) => {
    this.setTransformY(0)
  }

  moveBCardToStartPoint = (ACardIndex) => {
    let origionalCardDataList = this.state.cardDataList
    origionalCardDataList[ACardIndex].BCardContainerAttr = { style: { transform: 'translate3d(0px,' + 0 + 'vh,0px)' } }
    this.setState({ cardDataList: origionalCardDataList })
  }

  setLocationToStartPoint = () => {
    this.setState({ currentLocation: [0, 0, 0] })
  }

  setCardActiveStatusToUndefined = () => {
    this.setState({ cardActiveStatus: undefined }, () => {
    })

  }

  getOrigionalTransformY = (ACardIndex) => {
    let origionaltransform
    (this.state.cardDataList[ACardIndex].BCardContainerAttr.style === undefined) ? origionaltransform = 'translate3d(0px,0vh,0px)' : origionaltransform = this.state.cardDataList[ACardIndex].BCardContainerAttr.style.transform
    let yNumberEnd = origionaltransform.toString().lastIndexOf(',')
    origionaltransform = origionaltransform.slice(0, yNumberEnd - 2)
    let yNumberStart = origionaltransform.lastIndexOf(',')
    let stringOrigionalTransformY = origionaltransform.slice(yNumberStart + 1)
    return +stringOrigionalTransformY
  }

  setCardActiveStatus = (newCardStatus, callbackFunc) => {
    this.setState({ cardActiveStatus: newCardStatus }, callbackFunc)
  }

  getCurrentLocation = () => {
    return this.state.currentLocation
  }

  setCurrentLocation = (newLocation) => {
    this.setState({ currentLocation: newLocation })
  }

  setTransformY = (newTransformY) => {
    this.setState({ transformY: newTransformY })
  }

  getDataListString = () => {
    return (this.state.cardDataList[0] === undefined) ? 'hahahahaahah' : this.state.cardDataList[0].ACardAttr.style.transform
  }

  handleJumpACardRequest = (aCardIdex) => {
    console.log('did handleJumpCardRequest 1: ' + aCardIdex)
    this.setState({ jumpACardTargetIndex: aCardIdex }, () => {
      console.log('did handleJumpCardRequest 2: ' + this.state.jumpACardTargetIndex)
    })
  }

  requestShouldHideACardsMenu = (shouldHide) => {
    this.setState({ isACArdsMenuHide: shouldHide }, () => {
      console.log('isACArdsMenuHide: ' + shouldHide + '!');
    })
  }

  shouldACardsMenuHide = (shouldHide) => {
    return (shouldHide) ? ' hide-left' : ' a'
  }

  getAnimationState = () => {
    return this.state.animationState
  }

  setAnimationState = (stateFromContainer) => {
    this.setState({animationState: stateFromContainer})
  }

  render() {
    return ([
      <CardContainer
        key="CardContainer"
        getCardLocationList={this.state.cardLocationList}
        getBCardOuterHeight={this.state.bCardOuterHeight}
        getACardOuterHeight={this.state.aCardOuterHeight}
        cardListData={this.state.cardDataList}
        rawMoveBCard={this.rawMoveBCard}
        refHandler={this.setContainerRef}
        screenType={this.state.screenType}
        setCardActiveStatus={this.setCardActiveStatus}
        getCardActiveStatus={this.state.cardActiveStatus}
        getCurrentLocationFromParent={this.getCurrentLocation}
        setCurrentLocationToParent={(newLocation) => { this.setCurrentLocation(newLocation) }}
        getContainerTransformY={this.state.transformY}
        setContainerTransformY={(newTransformY) => this.setTransformY(newTransformY)}
        getJumpACardTargetIndex={this.state.jumpACardTargetIndex}
        setJumpACardTargetIndexUndefined={() => { this.setState({ jumpACardTargetIndex: undefined }) }}
        requestShouldHideACardsMenu={(shouldHide) => this.requestShouldHideACardsMenu(shouldHide)}
        setAnimationState={(stateFromContainer) => {this.setAnimationState(stateFromContainer)}}
      ></CardContainer>
      ,
      <div
        key={() => 'menuListContainer'}
        className={'a-card-menu-list' + this.shouldACardsMenuHide(this.state.isACArdsMenuHide)}>
        <ACardsMenuListItem
          getCardDataList={this.state.cardDataList}
          getJumpACardRequest={(index) => { this.handleJumpACardRequest(index) }}
          getCurrentLocation={this.state.currentLocation}
          passAnimationMoveState={this.getAnimationState()}
          key={() => 'menuList'}></ACardsMenuListItem>
      </div>
    ])
  }
}

export default CardApp;