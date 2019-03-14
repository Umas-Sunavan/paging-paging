import React, { Component } from 'react';
import CardContainer from './CardContainer';
import createRawCardDataList from './CreateRawCardDataList';
import convertToMobileCardDataList from './ConvertToMobileCardDataList'
import createCardLocationList from './CreateCardLocationList'

let appWidth

class CardApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      containerWidth:document.getElementById('card-app').clientWidth,
      screenType:'',
      cardDataList:[],
      cardLocationList:[],
      bCardOuterHeight:90,
      aCardOuterHeight:100,
      cardActiveStatus: undefined,
      currentLocation:[0,0,0],
      transformY:0
    }    
  }

  componentWillMount = () => {
    window.addEventListener("resize", this.updateWidth)
  }  

  componentDidMount = () => {
    this.updateWidth()
  }

  updateWidth = () => {
    appWidth = document.getElementById('card-app').clientWidth
    this.setState({containerWidth:appWidth,screenType:this.getScreenType()},()=>{   
      this.createCardList(this.resetDataListAndLocation)
    })
    
  }

  resetDataListAndLocation = () =>{
    this.state.cardDataList.map((ACardItem,ACardIndex)=>{
      console.log(this.state.cardDataList[ACardIndex])
      this.moveBCardToStartPoint(ACardIndex)
      this.moveACardToStartPoint(ACardIndex)
      this.setLocationToStartPoint()
      this.setCardActiveStatusToUndefined()
    })
  }

  createCardList = (callBackFunc) => {
    console.log(this.state.screenType)
    switch (this.state.screenType) {
      case 'mobile phone':
        this.adaptMobileScreen(callBackFunc)
        break;
      case 'tablet':
      case 'laptop':
      case 'PC screens and bigger':
        this.adaptLaptopScreen(callBackFunc)     
        break;
      default:
        throw new Error('Scree Type Error')
    }   
  }

  adaptMobileScreen = (callBackFunc) => {
    let newDataList = convertToMobileCardDataList(createRawCardDataList(this.state.bCardOuterHeight))
    this.setState({cardDataList:newDataList},this.setCardLocationList(newDataList,callBackFunc))    
  }
  
  adaptLaptopScreen = (callBackFunc) => {
    let newDataList = createRawCardDataList(this.state.bCardOuterHeight)
    this.setState({cardDataList:newDataList},this.setCardLocationList(newDataList,callBackFunc))
  }

  setCardLocationList = (newDataList,callBackFunc = () =>{}) => {
    this.setState({cardLocationList:createCardLocationList(newDataList)},()=>{
      console.log(this.state.cardDataList)
      console.log(this.state.cardLocationList)
      callBackFunc()
    })
  }

  getScreenType = () => {
    let width = this.state.containerWidth
    if (width <= 480) {
      console.log('mobile phone')
      return 'mobile phone'
    } else if (width <= 1024) {
      console.log('tablet')
      return 'tablet'
    } else if (width <=1600) {
      console.log('laptop')
      return 'laptop'
    } else {
      console.log('PC screens and bigger')
      return 'PC screens and bigger'
    }
  }

  setContainerRef = (element) => {
    this.containerElement = element
  }

  rawMoveBCard = (ACardIndex,distance) => {
    let origionalCardDataList = this.state.cardDataList
    let origionalTransformY = this.getOrigionalTransformY(ACardIndex)
    origionalCardDataList[ACardIndex].BCardContainerAttr = {style:{transform:'translate3d(0px,' + (origionalTransformY + (this.state.bCardOuterHeight * distance)) +'vh,0px)'}}
    this.setState({cardDataList:origionalCardDataList})
  }

  moveACardToStartPoint = (ACardIndex) => {
    this.setTransformY(0)
  }

  moveBCardToStartPoint = (ACardIndex) => {
    let origionalCardDataList = this.state.cardDataList
    origionalCardDataList[ACardIndex].BCardContainerAttr = {style:{transform:'translate3d(0px,' + 0 +'vh,0px)'}}
    this.setState({cardDataList:origionalCardDataList})
  }

  setLocationToStartPoint = () => {
    this.setState({currentLocation:[0,0,0]})  
  }

  setCardActiveStatusToUndefined = () => {
    this.setState({cardActiveStatus:undefined},()=>{
    })
      
  }

  getOrigionalTransformY = (ACardIndex) => {
    let origionaltransform 
    (this.state.cardDataList[ACardIndex].BCardContainerAttr.style === undefined)? origionaltransform = 'translate3d(0px,0vh,0px)' : origionaltransform = this.state.cardDataList[ACardIndex].BCardContainerAttr.style.transform
    let yNumberEnd = origionaltransform.toString().lastIndexOf(',')
    origionaltransform = origionaltransform.slice(0,yNumberEnd-2)
    let yNumberStart = origionaltransform.lastIndexOf(',')
    let stringOrigionalTransformY = origionaltransform.slice(yNumberStart +1)
    return +stringOrigionalTransformY
  }

  setCardActiveStatus = (newCardStatus,callbackFunc) => {
    this.setState({cardActiveStatus:newCardStatus},callbackFunc)
  }

  getCurrentLocation = () => {
    return this.state.currentLocation
  }

  setCurrentLocation = (newLocation) => {
    this.setState({currentLocation:newLocation})
  }

  setTransformY = (newTransformY) =>{
    this.setState({transformY:newTransformY})
  }

  render() {
    return (<CardContainer 
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
    setCurrentLocationToParent={(newLocation)=>{this.setCurrentLocation(newLocation)}}
    getContainerTransformY={this.state.transformY}
    setContainerTransformY={(newTransformY)=>this.setTransformY(newTransformY)}></CardContainer>
    )
  }

}

export default CardApp;