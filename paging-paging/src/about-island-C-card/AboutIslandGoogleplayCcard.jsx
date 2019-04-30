import React, { Component } from 'react';
import './AboutIslandGoogleplayCcard.css';
import ButtonNormal from '../Button';
import BCardMenuListItem from '../BCardMenuListItem';

class AboutIslandGoogleplayCcard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animationMoveInfo: this.props.getAnimationMoveInfo,
      shouldPresentSVG: false,
      svgToTop: undefined,
      svgToLeft: undefined,
      displacementRedSet: ['4', '6', '8', 'b', 'f', 'f', 'f', 'f', 'e', 'd', 'c', 'c', 'b', 'b', 'a', 'a', '9', '9', '7', '7'],
      filterCenterX: undefined,
      filterCenterY: undefined,
      rotateStrengh: 5,
    }

  }

  displacement = 0;
  speed = 1
  moveCheck = ''

  onThisCCardCome = () => {
    console.log('C-card ' + this.props.cardIndex + ' come');
    this.setState({ shouldPresentSVG: true })
  }

  onThisCCardCame = () => {
    console.log('C-card ' + this.props.cardIndex + ' came');
  }

  onThisCCardLeave = () => {
    console.log('C-card ' + this.props.cardIndex + ' leave');
  }

  onThisCCardLeft = () => {
    console.log('C-card ' + this.props.cardIndex + ' left');
    this.setState({ shouldPresentSVG: false })
  }

  onMoveFinished = ([state, from, to]) => {
    if (state === 'came') {
      this.onThisCCardCame()
    } else if (state === 'left') {
      this.onThisCCardLeft()
    }
  }

  onMoveStart = ([state, from, to]) => {
    if (state === 'come') {
      this.onThisCCardCome()
    } else if (state === 'leave') {
      this.onThisCCardLeave()
    }
  }

  checkAnimationMoveState = ([state, from, to]) => {
    if (this.moveCheck !== 'come' && this.moveCheck !== 'leave') {
      if (state === 'come' || state === 'leave') {
        this.onMoveStart([state, from, to])
      }
      this.moveCheck = state
    } else if (this.moveCheck !== 'came' && this.moveCheck !== 'left') {
      if (state === 'came' || state === 'left') {
        this.onMoveFinished([state, from, to])
      }
      this.moveCheck = state
    }
  }

  buttonSet = undefined

  checkShouldPresentSVG = () => {
    if (this.state.shouldPresentSVG) {
      console.log(this.props.screenType);
      
      let googlePlayRightPartHeight = document.getElementsByClassName('about-ialand-googleplay-right-part')[0].clientHeight
      let googlePlayRightPartWidth = document.getElementsByClassName('about-ialand-googleplay-right-part')[0].clientWidth
      if (this.props.screenType === 'mobile phone') {
        return this.getSVG('mobile phone')
      } else if(this.props.screenType !== 'mobile phone' && googlePlayRightPartHeight < 900 && googlePlayRightPartWidth > 500) {
        return this.getSVG('pc')
      } else if(this.props.screenType !== 'mobile phone' && googlePlayRightPartHeight < 900 && googlePlayRightPartWidth <= 500) {
      return this.getSVG('mobileRotate')
      } else if (this.props.screenType !== 'mobile phone' && googlePlayRightPartHeight >= 900 && googlePlayRightPartWidth <= 761) {
        return this.getSVG('mobile phone')
      } else if (this.props.screenType !== 'mobile phone' && googlePlayRightPartHeight >= 900 && googlePlayRightPartWidth <= 761) {
        return this.getSVG('large pc')
      } else {
        console.warn("can't find correct screen type!");
        
      }
      console.log(this.props.screenType, googlePlayRightPartHeight, googlePlayRightPartWidth);
      } else {
      return false
    }
  }

  getSVG = (screenType) => {
    console.log(screenType);
    if (screenType === 'mobile phone') {
      return (
        <div id="about-ialand-phonedisplay-container" class="showcase-container-mobile-phone">
          <ButtonNormal hyperLink="https://www.facebook.com/profile.php?id=100000648980790" cnTitle="下載應用程式" enTitle="Download APK" />
          <div class="phone-container">
            <div id="ai-showcase-screen">
              <iframe title="about island showcase video" id="screen" width="168" height="288" src="https://www.youtube.com/embed/OSvGHYmCoDk?rel=0&amp;showinfo=0&autoplay=1&loop=1&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <img id="phone-background" src="./images/googleplay/phone.svg" alt="phone-background" />
          </div>
        </div>)
    } else if (screenType === 'pc') {
      return (
        <div id="about-ialand-phonedisplay-container" class="showcase-container-pc">
          <ButtonNormal hyperLink="https://www.facebook.com/profile.php?id=100000648980790" cnTitle="下載應用程式" enTitle="Download APK" />
          <div class="phone-container">
            <div id="ai-showcase-screen">
              <iframe title="about island showcase video" id="screen" width="280" height="480" src="https://www.youtube.com/embed/OSvGHYmCoDk?rel=0&amp;showinfo=0&autoplay=1&loop=1&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <img id="phone-background" src="./images/googleplay/phone.svg" alt="phone-background" />
          </div>
          <img id="app-category" src="./images/googleplay/app-category.svg" alt="app-categories" />
        </div>)
    } else {
      return (
      <div id="about-ialand-phonedisplay-container" class="showcase-container-large-pc">
        <ButtonNormal hyperLink="https://www.facebook.com/profile.php?id=100000648980790" cnTitle="下載應用程式" enTitle="Download APK" />
        <div class="phone-container">
          <div id="ai-showcase-screen">    
            <iframe title="about island showcase video" id="screen" width="420" height="720" src ="https://www.youtube.com/embed/OSvGHYmCoDk?rel=0&amp;showinfo=0&autoplay=1&loop=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <img id="phone-background" src="./images/googleplay/phone.svg" alt="phone-background" />
        </div> 
        <img id="app-category" src="./images/googleplay/app-category.svg" alt="app-categories"/>
      </div>
    )
    }
    
  }

  SvgRotateUpdate = (eventX, filterCenterX) => {
    let XpercentToCenter = (eventX / window.innerHeight - 0.5) * 100
    document.getElementById('about-ialand-exhibition-svg-container').setAttribute('style', 'transform: perspective(1000px) translate3d(0px, 0px, 0px) rotate3d(0, 1, 0, ' + ((filterCenterX < 0) ? XpercentToCenter / this.state.rotateStrengh * -1 : XpercentToCenter / this.state.rotateStrengh) + 'deg);')
  }

  setXlinkHref = (filterCenterX, filterCenterY) => {
    var xlinkHref = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewbox='0 0 888 666' height='666' width='888'%3E%3Cdefs%3E%3CradialGradient id='url-r' cx='.5' cy='.5' r='.8'%3E";
    for (var i = 0; i < 6; i++) {
      xlinkHref += `%3Cstop offset='${(i - 2) * 10 + this.displacement}%25' stop%2Dcolor='%23${i % 2 === 0 ? this.state.displacementRedSet[this.displacement] + "00" : "000"}'%3E%3C/stop%3E`;
    }
    xlinkHref += "%3C/radialGradient%3E%3C/defs%3E%3Crect height='666' width='888' y='" + filterCenterY + "' x='" + filterCenterX + "' fill='url(%23url-r)' %3E%3C/rect%3E%3C/svg%3E";
    return xlinkHref;
  }

  animateOffset = () => {
    if (document.getElementById('exhibition-big-svg') !== null) {
      let xlink = "http://www.w3.org/1999/xlink";
      let xlinkHref = this.setXlinkHref(this.state.filterCenterX, this.state.filterCenterY);
      document.getElementById('urldata-team-tile-all-feImage').setAttributeNS(xlink, "href", xlinkHref);
      (this.displacement <= 20) ? this.displacement += this.speed : this.displacement = 0
    }
  }

  loadSVG = (event) => {
    let overrittenDOM = event.target.parentNode.parentNode
    console.log(overrittenDOM.getAttribute('class'))
    if (overrittenDOM.getAttribute('class').includes('card-item-init')) {
      overrittenDOM.setAttribute('class', overrittenDOM.getAttribute('class').replace('card-item-init', '') + ' card-item-comming')
      console.log("includes('card-item-init')")
    } else if (overrittenDOM.getAttribute('class').includes('card-item-comming')) {
      console.log("includes('card-item-comming')")
    } else {
      overrittenDOM.setAttribute('class', overrittenDOM.getAttribute('class') + ' card-item-comming')
      console.log("includes nothing")
    }
  }

  render() {
    this.checkAnimationMoveState(this.props.getAnimationMoveInfo)
    if (this.moveCheck !== 'came' && this.props.getAnimationMoveInfo[0] !== '') {
      this.buttonSet = ''
    } else {
      this.buttonSet =
        (<div className="landingpage-buttons">
    <ButtonNormal hyperLink="https://www.facebook.com/profile.php?id=100000648980790" cnTitle="履歷" enTitle="Resume" />
          <ButtonNormal hyperLink="https://www.facebook.com/profile.php?id=100000648980790" cnTitle="其他作品集" enTitle="Other eportfolio" />
  <ButtonNormal hyperLink="https://www.facebook.com/profile.php?id=100000648980790" cnTitle="聯絡我" enTitle="Contact" customId="contact" importantBtn />
        </div>)
    }
    let appDisplay = this.checkShouldPresentSVG()
    return (
      
      <div className="about-ialand-googleplay-right-part">
        
        <div className="onepage-pagination-group">
          <ul className="b-card-menu-ul">
            <BCardMenuListItem
              getJumpBCardRequest={this.props.getJumpBCardRequest}
              getBCardDataList={this.props.getBCardDataList}
              currentLocation={this.props.cardIndex}
              listItemTitle={this.props.menuArrayText || []}
              hasListDecorations={false}
              focusCurrentPage={true}
              screenType={this.props.screenType}
            ></BCardMenuListItem>
          </ul>
        </div>
        
          {appDisplay}

      </div>
    )
  }
}

export default AboutIslandGoogleplayCcard;


