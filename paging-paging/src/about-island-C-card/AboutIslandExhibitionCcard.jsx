import React, { Component } from 'react';
import './AboutIslandExhibitionCcard.css';
import ButtonNormal from '../Button';
import BCardMenuListItem from '../BCardMenuListItem';

class AboutIslandExhibitionCcard extends Component {
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
      return (this.props.screenType === 'mobile phone') ? this.getSVG('mobile phone') : this.getSVG('pc')
    } else {
      return false
    }
  }

  svgExpand = () => {
  }

  svgRecover = () => {
  }

  getSVG = (screenType) => {
    let viewbox
    return (
      <svg id="exhibition-big-svg" viewBox="0 0 1143 999" xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
          <rect id="slideDown" height="0" width="222">
            <animate attributeName="height" calcMode="spline" repeatCount="1" keySplines=".8,.01,0,1" keyTimes="0; 1"
              dur="1.2s" begin="1s" fill="freeze" values="0; 666"></animate>
          </rect>
          <rect id="slideUp" height="0" width="222">
            <animate attributeName="height" calcMode="spline" repeatCount="1" keySplines=".8,.01,0,1" keyTimes="0; 1"
              dur="1.2s" begin="1s" fill="freeze" values="0; 666"></animate>
            <animate attributeName="y" calcMode="spline" repeatCount="1" keySplines=".8,.01,0,1" keyTimes="0; 1"
              dur="1.2s" begin="1s" fill="freeze" values="666; 00"></animate>
          </rect>
          <clipPath id="sliding1">
            <use xlinkHref="#slideDown" x="255"></use>
          </clipPath>
          <clipPath id="sliding2">
            <use xlinkHref="#slideUp" x="477"></use>
          </clipPath>
          <clipPath id="sliding3">
            <use xlinkHref="#slideDown" x="699"></use>
          </clipPath>
          <clipPath id="sliding4">
            <use xlinkHref="#slideUp" x="921"></use>
          </clipPath>
          <clipPath id="sliding5">
            <rect id="mdSlideDown" height="222" width="222" x="255" y="699">
            </rect>
          </clipPath>
          <clipPath id="sliding6">
            <rect id="mdSlideUp" height="0" width="222" x="477" y="699">
              <animate attributeName="height" calcMode="spline" repeatCount="1" keySplines=".8,.01,0,1" keyTimes="0; 1"
                dur="1.2s" begin="1s" fill="freeze" values="0; 222"></animate>
            </rect>
          </clipPath>
          <clipPath id="sliding7">
            <rect id="mdSlideUp" height="0" width="222" x="0" y="444">
              <animate attributeName="height" calcMode="spline" repeatCount="1" keySplines=".8,.01,0,1" keyTimes="0; 1"
                dur="1.2s" begin="1s" fill="freeze" values="0; 222"></animate>
            </rect>
          </clipPath>
          <clipPath id="sliding8">
            <rect id="mdSlideUp" height="0" width="222" x="0" y="666">
              <animate attributeName="height" calcMode="spline" repeatCount="1" keySplines=".8,.01,0,1" keyTimes="0; 1"
                dur="1.2s" begin="1s" fill="freeze" values="0; 222"></animate>
              <animate attributeName="y" calcMode="spline" repeatCount="1" keySplines=".8,.01,0,1" keyTimes="0; 1"
                dur="1.2s" begin="1s" fill="freeze" values="888; 666"></animate>
            </rect>
          </clipPath>
          <filter id="urldata-team-tile-all">
            <feImage id="urldata-team-tile-all-feImage" result="urlpict01" x="0"
              xlinkHref="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewbox='0 0 888 666' height='666' width='888'%3E%3Cdefs%3E%3CradialGradient id='url-r' cx='.5' cy='.5' r='.8'%3E%3Cstop offset='0' stop-color='%23000'%3E%3C/stop%3E%3Cstop offset='.1' stop-color='%23f00'%3E%3C/stop%3E%3Cstop offset='.2' stop-color='%23000'%3E%3C/stop%3E%3Cstop offset='.3' stop-color='%23f00'%3E%3C/stop%3E%3Cstop offset='.4' stop-color='%23000'%3E%3C/stop%3E%3Cstop offset='.5' stop-color='%23f00'%3E%3C/stop%3E%3Cstop offset='.6' stop-color='%23000'%3E%3C/stop%3E%3Cstop offset='.7' stop-color='%23f00'%3E%3C/stop%3E%3Cstop offset='.8' stop-color='%23000'%3E%3C/stop%3E%3Cstop offset='.9' stop-color='%23f00'%3E%3C/stop%3E%3C/radialGradient%3E%3C/defs%3E%3Crect height='999' width='1143' y='0' x='0' fill='url(%23url-r)' %3E%3C/rect%3E%3C/svg%3E" />
            <feDisplacementMap scale="5" xChannelSelector="R" yChannelSelector="R" in2="urlpict01" in="SourceGraphic">
              <animate id="displacement-map-animate" attributeName="scale" calcMode="spline" repeatCount="1"
                keySplines=".8,.01,0,1" keyTimes="0; 1" dur="1.4s" begin="1s" fill="remove" values="10; 0"
              />
            </feDisplacementMap>

          </filter>
        </defs>
        <g filter=" url(#urldata-team-tile-all)" >
          <image width="222" height="666" x="255" xlinkHref="./images/exhibition/team-bg-01.jpg"
            clipPath="url(#sliding1)" >
            <animate attributeName="y" calcMode="spline" repeatCount="1" keySplines=".8,.01,0,1" keyTimes="0; 1"
              dur="1.2s" begin="1s" fill="freeze" values="-100; 0" />
            <animateTransform attributeName="transform" attributeType="XML" type="scale" from="1.1" to="1" dur="1.2s"
              calcMode="spline" keySplines=".8,.01,0,1" keyTimes="0; 1" repeatCount="1" />
          </image>
          <image  width="222" height="666" x="477" xlinkHref="./images/exhibition/team-bg-02.jpg"
            clipPath="url(#sliding2)">
            <animate attributeName="y" calcMode="spline" repeatCount="1" keySplines=".8,.01,0,1" keyTimes="0; 1"
              dur="1.2s" begin="1s" fill="freeze" values="100; 0" />
            <animateTransform attributeName="transform" attributeType="XML" type="scale" from="1.1" to="1" dur="1.2s"
              calcMode="spline" keySplines=".8,.01,0,1" keyTimes="0; 1" repeatCount="1" />
          </image>
          <image  width="222" height="666" x="699" xlinkHref="./images/exhibition/team-bg-03.jpg"
            clipPath="url(#sliding3)">
            <animate attributeName="y" calcMode="spline" repeatCount="1" keySplines=".8,.01,0,1" keyTimes="0; 1"
              dur="1.2s" begin="1s" fill="freeze" values="-100; 0" />
            <animateTransform attributeName="transform" attributeType="XML" type="scale" from="1.1" to="1" dur="1.2s"
              calcMode="spline" keySplines=".8,.01,0,1" keyTimes="0; 1" repeatCount="1" />
          </image>
          <image  width="222" height="666" x="921" xlinkHref="./images/exhibition/team-bg-04.jpg"
            clipPath="url(#sliding4)">
            <animate attributeName="y" calcMode="spline" repeatCount="1" keySplines=".8,.01,0,1" keyTimes="0; 1"
              dur="1.2s" begin="1s" fill="freeze" values="100; 0" />
            <animateTransform attributeName="transform" attributeType="XML" type="scale" from="1.1" to="1" dur="1.2s"
              calcMode="spline" keySplines=".8,.01,0,1" keyTimes="0; 1" repeatCount="1" />
          </image>
          <image  width="222" height="222" x="255" xlinkHref="./images/exhibition/team-md-01.jpg"
            clipPath="url(#sliding5)">
            <animate attributeName="y" calcMode="spline" repeatCount="1" keySplines=".8,.01,0,1" keyTimes="0; 1"
              dur="1.2s" begin="1s" fill="freeze" values="999; 699" />
            <animateTransform attributeName="transform" attributeType="XML" type="scale" from="1.1" to="1" dur="1.2s"
              calcMode="spline" keySplines=".8,.01,0,1" keyTimes="0; 1" repeatCount="1" />
          </image>
          <image  width="222" height="222" x="477" y="699" xlinkHref="./images/exhibition/team-md-02.jpg"
            clipPath="url(#sliding6)">
            <animateTransform attributeName="transform" attributeType="XML" type="scale" from="1.1" to="1" dur="1.2s"
              calcMode="spline" keySplines=".8,.01,0,1" keyTimes="0; 1" repeatCount="1" />
          </image>
          <image  width="222" height="222" x="0" xlinkHref="./images/exhibition/team-sm-01.jpg"
            clipPath="url(#sliding7)">
            <animate attributeName="y" calcMode="spline" repeatCount="1" keySplines=".8,.01,0,1" keyTimes="0; 1"
              dur="1.2s" begin="1s" fill="freeze" values="666; 444" />
            <animateTransform attributeName="transform" attributeType="XML" type="scale" from="1.1" to="1" dur="1.2s"
              calcMode="spline" keySplines=".8,.01,0,1" keyTimes="0; 1" repeatCount="1" />
          </image>

          <image  width="222" height="222" x="0" y="666" xlinkHref="./images/exhibition/team-sm-02.jpg"
            clipPath="url(#sliding8)">
            <animateTransform attributeName="transform" attributeType="XML" type="scale" from="1.1" to="1" dur="1.2s"
              calcMode="spline" keySplines=".8,.01,0,1" keyTimes="0; 1" repeatCount="1" />
          </image>
        </g>
      </svg>


    )
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

  mouseMove = (event) => {
    let svg = document.getElementById('exhibition-big-svg')
    if (svg !== null) {
      let svgStyle = getComputedStyle(document.getElementById('exhibition-big-svg'))
      let svgToTop = svgStyle.top.slice(0, svgStyle.top.length - 2)
      let svgToLeft = svgStyle.left.slice(0, svgStyle.left.length - 2)
      let SvgMouseX = event.clientX - svgToTop
      let SvgMouseY = event.clientY - svgToLeft
      let leftPartWidth = getComputedStyle(document.getElementById('c-card-1-0-0')).width
      let leftPartWidthNumber = leftPartWidth.slice(0, leftPartWidth.length - 2)
      let rightPartTop = getComputedStyle(document.getElementById('a-card-1')).marginTop
      let leftPartTopNumber = rightPartTop.slice(0, rightPartTop.length - 2)
      let filterCenterX = SvgMouseX - (svgStyle.width.slice(0, svgStyle.height.length - 3) / 2) - leftPartWidthNumber
      let filterCenterY = SvgMouseY - (svgStyle.height.slice(0, svgStyle.height.length - 3) / 2) - leftPartTopNumber
      console.log(filterCenterX,SvgMouseX, svgStyle.width, svgStyle.width.slice(0, svgStyle.height.length - 3) );
      
      this.SvgRotateUpdate(event.clientX, filterCenterX)
      this.setState({
        filterCenterX: filterCenterX,
        filterCenterY: filterCenterY
      }, () => {
        window.requestAnimationFrame(this.animateOffset);
      })
    } else {

    }

  }

  // loadSVG = (event) => {
  //   let overrittenDOM = event.target.parentNode.parentNode
  //   console.log(overrittenDOM.getAttribute('class'))
  //   if (overrittenDOM.getAttribute('class').includes('card-item-init')) {
  //     overrittenDOM.setAttribute('class', overrittenDOM.getAttribute('class').replace('card-item-init','') + ' card-item-comming')
  //     console.log("includes('card-item-init')")
  //   } else if (overrittenDOM.getAttribute('class').includes('card-item-comming')) {
  //     console.log("includes('card-item-comming')")
  //   } else {
  //     overrittenDOM.setAttribute('class', overrittenDOM.getAttribute('class') + ' card-item-comming')
  //     console.log("includes nothing")
  //   }    
  // }

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
    let svg = this.checkShouldPresentSVG()
    return (
      <div className="about-ialand-exhibition-right-part">
        <div className="onepage-pagination-group" onMouseOut={this.svgRecover} onMouseOver={this.svgExpand} onMouseMove={(event) => { this.mouseMove(event) }}>
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
        <div id="about-ialand-exhibition-svg-container" onMouseMove={(event) => { this.mouseMove(event) }}>
          {svg}
        </div>
      </div>
    )
  }
}

export default AboutIslandExhibitionCcard;


