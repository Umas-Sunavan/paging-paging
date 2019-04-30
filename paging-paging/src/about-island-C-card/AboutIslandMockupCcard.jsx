import React, { Component } from 'react';
import './AboutIslandMockupCcard.css';
import ButtonNormal from '../Button';
import BCardMenuListItem from '../BCardMenuListItem';

class AboutIslandMockupCcard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animationMoveInfo: this.props.getAnimationMoveInfo,
      shouldPresentSVG:false,
      tileGroupClassFocused:false,
    }

  }

  moveCheck = ''

  onThisCCardCome = () => {
    console.log('C-card ' + this.props.cardIndex + ' come');
    this.setState({shouldPresentSVG:true})
  }

  onThisCCardCame = () => {
    console.log('C-card ' + this.props.cardIndex + ' came');
  }

  onThisCCardLeave = () => {
    console.log('C-card ' + this.props.cardIndex + ' leave');
  }

  onThisCCardLeft = () => {
    console.log('C-card ' + this.props.cardIndex + ' left');
    this.setState({shouldPresentSVG:false})
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

  checkShouldPresentSVG = (isTileFocused) => {
    if(this.state.shouldPresentSVG) {
      return (this.props.screenType === 'mobile phone')?this.getSVG('mobile phone',isTileFocused):this.getSVG('pc',isTileFocused)
    } else {
      return false
    }
  }

  svgExpand = () => {
    this.setState({tileGroupClassFocused:true},()=>{console.log(this.state.tileGroupClassFocused)}
    )
  }

  svgRecover = () => {
    this.setState({tileGroupClassFocused:false},()=>{console.log(this.state.tileGroupClassFocused)})
  }

  getSVG = (screenType,isTileFocused) => {
    let viewbox
    let focusedClass1 = (isTileFocused)?' tile-group-focused-1':''
    let focusedClass2 = (isTileFocused)?' tile-group-focused-2':''
    let focusedClass3 = (isTileFocused)?' tile-group-focused-3':''
    let tileSvgClass = (isTileFocused)?' tile-svg-focused':''
    if (screenType === 'mobile phone') {  viewbox = '500 -50 800 1400'  
    } else if (screenType === 'pc') { viewbox = '400 -50 1100 1100' }
    return (
      <svg id='tile-svg' className={tileSvgClass} xmlns="http://www.w3.org/2000/svg" 
      xmlnsXlink="http://www.w3.org/1999/xlink" viewBox={viewbox}>
        <defs>
          <image id="three-tiles1" class="image" width="1791" height="304" xlinkHref="./images/mockupTiles/tile-asstes-04.png" />
          <image id="three-tiles2" class="image" width="1791" height="305" xlinkHref="./images/mockupTiles/tile-asstes-03.png" />
          <image id="three-tiles3" class="image" width="1791" height="305" xlinkHref="./images/mockupTiles/tile-asstes-02.png" />
        </defs>
        <rect x="200" y="-50" width="1400" height="1100" fill="#2d2d2d" />
        <g onMouseOver={this.svgExpand} id="canvas" onMouseOut={this.svgRecover}>
          <g id="tile1g" class={'tile-group' + focusedClass1}>
            <use id="tile1" xlinkHref="#three-tiles1" transform="translate(0 0)" />
          </g>
          <g id="tile2g" class={'tile-group' + focusedClass2}>
            <use id="tile2" xlinkHref="#three-tiles2" transform="translate(0 303)" />
          </g>
          <g id="tile3g" class={'tile-group' + focusedClass3}>
            <use id="tile3" xlinkHref="#three-tiles3" transform="translate(0 607)" />
          </g>
          <g id="tile4g" class={'tile-group' + focusedClass1}>
            <use id="tile4" xlinkHref="#three-tiles1" transform="translate(0 911)" />
          </g>
          <g id="tile5g" class={'tile-group' + focusedClass2}>
            <use id="tile5" xlinkHref="#three-tiles2" transform="translate(0 1214)" />
          </g>
          <g id="tile6g" class={'tile-group' + focusedClass3}>
            <use id="tile6" xlinkHref="#three-tiles3" transform="translate(0 1518)" />
          </g>
          <g id="tile7g" class={'tile-group' + focusedClass1}>
            <use id="tile7" xlinkHref="#three-tiles1" transform="translate(0 1821)" />
          </g>
          <g id="tile8g" class={'tile-group' + focusedClass2}>
            <use id="tile8" xlinkHref="#three-tiles2" transform="translate(0 2124)" />
          </g>
          <g id="tile9g" class={'tile-group' + focusedClass3}>
            <use id="tile9" xlinkHref="#three-tiles3" transform="translate(0 2428)" />
          </g>
          <g id="tile10g" class={'tile-group' + focusedClass1}>
            <use id="tile10" xlinkHref="#three-tiles1" transform="translate(0 2732)" />
          </g>
          <g id="tile11g" class={'tile-group' + focusedClass2}>
            <use id="tile11" xlinkHref="#three-tiles2" transform="translate(0 3016)" />
          </g>
          <g id="tile12g" class={'tile-group' + focusedClass3}>
            <use id="tile12" xlinkHref="#three-tiles3" transform="translate(0 3320)" />
          </g>
        </g>
      </svg>
    )
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
    let svg = this.checkShouldPresentSVG(this.state.tileGroupClassFocused)

    return (
      <div className="about-ialand-mockup-right-part">
        <div className="onepage-pagination-group" onMouseOut={this.svgRecover} onMouseOver={this.svgExpand} >
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
        <div id="about-ialand-mockup-svg-container">
        {svg}
        </div>
      </div>
    )
  }
}

export default AboutIslandMockupCcard;
