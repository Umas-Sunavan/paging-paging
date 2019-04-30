import React, { Component } from 'react';
import './AboutIslandWireframeCcard .css';
import ButtonNormal from '../Button';
import BCardMenuListItem from '../BCardMenuListItem';

class AboutIslandWireframeCcard  extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animationMoveInfo: this.props.getAnimationMoveInfo,
      shouldPresentSVG:false
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

  mouseMoveHandler = (event) => {
    let svgContainer = document.getElementById('about-ialand-wireframe-svg-container')
    let y = ((event.clientY/svgContainer.clientHeight) * 100) -50
    let x = ((event.clientX/svgContainer.clientWidth) * 100) -50  

    const setAttr = (id,xPrecent,yPercent,distance,isXover50,shouldRotate) => {
      let setMinor = (isXover50)?1:-1
      let rotate = (shouldRotate)? 'rotate3d(' + -setMinor*yPercent + ', 1, ' + setMinor*xPrecent/4 + ', ' + xPrecent/4 + 'deg)':' '
      document.getElementById(id).setAttribute('style','transform: perspective(500px) translate3d(' + xPrecent*2 + 'px, ' + yPercent*2 + 'px, ' + distance + 'px) scale(1.5) translate(0px, 0px) ' + rotate + ';')
    }
    if (x > 0) {
      setAttr('layer1',x,y,-150,true,true)
      setAttr('layer2',x,y,-50,true,true)
      setAttr('layer3',x,y,0,true,true)
      setAttr('layer4',x,y,30,true,true)
      setAttr('layer5',x,y,200,true,true)
    } else {
      setAttr('layer1',x,y,-150,false,true)
      setAttr('layer2',x,y,-50,false,true)
      setAttr('layer3',x,y,0,false,true)
      setAttr('layer4',x,y,30,false,true)
      setAttr('layer5',x,y,200,false,true)
    }
      
  }

  checkShouldPresentSVG = () => {
    if (this.state.shouldPresentSVG) {
      return (this.props.screenType === 'mobile phone')?this.getSVG('mobile phone'):this.getSVG('pc')
    }
  }
  getSVG = (viewboxFor) => {
    let bgViewbox
    let fgViewBox
    if(viewboxFor === 'mobile phone') {
      bgViewbox='300 100 766 1068'
      fgViewBox='300 100 766 1068'
    } else if (viewboxFor === 'pc') {
      bgViewbox='-500 -500 1866 1268'
      fgViewBox='0 0 1366 768'
    }
    return (
      <div id="about-ialand-wireframe-svg-container" onMouseMove={(event)=>{return this.mouseMoveHandler(event)}}>
          <svg>
            <defs>
              <filter id="color-filter">
                <feColorMatrix values="
                    1 0 0 0 0
                    0 1.2 0 0 0
                    0 0 1.6 0 0
                    0 0 0 1 0">
                  <animate
                    xmlns="http://www.w3.org/2000/svg"  
                    calcMode="linear" 
                    attributeType="XML" 
                    attributeName="values" 
                    keyTimes="0; 0.5; 1"
                    dur="3s" 
                    repeatCount="indefinite" 
                    fill="freeze" 
                    values="
                    1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 1 0
                    ;
                    1 0 0 0 0
                    0 1 0 0 0
                    0 0 1.2 0 0
                    0 0 0 1 0
                    ;
                    1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 1 0
                    ;"></animate>  
                </feColorMatrix>
                <feBlend in="SourceGraphic" mode="multiply"></feBlend>
              </filter>
            </defs>
          </svg>
          <div className="layer" id="layer1">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox={bgViewbox} enableBackground="new 0 0 1366 768" xmlSpace="preserve">
              <g filter="url(#color-filter)">
                <polygon fillRule="evenodd" clipRule="evenodd" fill="#ECECEC" points="504.7,652.9 693,678 504.7,703.1 504.8,791 768.3,678 
                        504.8,565 	" />
                <g transform="scale(0.3)">
                  <g>
                    <defs>
                      <circle id="SVGID_633_" cx="1070" cy="35" r="246" />
                    </defs>
                    <use xlinkHref="#SVGID_633_" overflow="visible" fillRule="evenodd" clipRule="evenodd" fill="#ECECEC" />
                    <clipPath id="SVGID_634_">
                      <use xlinkHref="#SVGID_633_" overflow="visible" />
                    </clipPath>
                    <circle clipPath="url(#SVGID_634_)" fill="#ECECEC" cx="1070" cy="35" r="246" />
                  </g>
                  <g>
                    <defs>
                      <polygon id="SVGID_635_" points="1131.5,26.2 1078.8,26.2 1078.8,-26.5 1061.2,-26.5 1061.2,26.2 1008.5,26.2 1008.5,43.8 
                              1061.2,43.8 1061.2,96.5 1078.8,96.5 1078.8,43.8 1131.5,43.8 				" />
                    </defs>
                    <clipPath id="SVGID_636_">
                      <use xlinkHref="#SVGID_635_" overflow="visible" />
                    </clipPath>
                    <g clipPath="url(#SVGID_636_)">
                      <defs>
                        <rect id="SVGID_637_" x="964.6" y="-70.4" width="210.9" height="210.9" />
                      </defs>
                      <clipPath id="SVGID_638_">
                        <use xlinkHref="#SVGID_637_" overflow="visible" />
                      </clipPath>
                      <rect x="964.6" y="-70.4" clipPath="url(#SVGID_638_)" fill="#FFFFFF" width="210.9" height="210.9" />
                    </g>
                  </g>
                </g>
                <path fillRule="evenodd" clipRule="evenodd" fill="#ECECEC" d="M476,436.1c-1.1-2.7-4-4.7-7.1-4.7c-4,0-7.1,3-7.1,7.1
                        c0,5.5,6,9.8,14.1,18.1c8.2-8.2,14.1-12.5,14.1-18.1c0-4-3.1-7.1-7.1-7.1C480,431.4,477.1,433.4,476,436.1z" />
                <polygon fillRule="evenodd" clipRule="evenodd" fill="#ECECEC" points="1070.4,401 1054.8,416.6 1058.4,420.2 1070.4,408.3 
                        1082.4,420.2 1086,416.6 	" />
                <path fillRule="evenodd" clipRule="evenodd" fill="#ECECEC" d="M528.5,45v2.3h21V45H528.5z M528.5,53.2h21v-2.3h-21V53.2z
                        M528.5,59h21v-2.3h-21V59z" />
              </g>
            </svg>
          </div>
          <div className="layer" id="layer2">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox={fgViewBox} enableBackground="new 0 0 1366 768" xmlSpace="preserve">
              <g filter="url(#color-filter)">
                <g>
                  <defs>
                    <rect id="SVGID_639_" x="773" y="175" width="126.3" height="224.4" />
                  </defs>
                  <clipPath id="SVGID_640_">
                    <use xlinkHref="#SVGID_639_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_640_)">
                    <defs>
                      <rect id="SVGID_641_" x="773" y="120.5" width="126.3" height="278.8" />
                    </defs>
                    <clipPath id="SVGID_642_">
                      <use xlinkHref="#SVGID_641_" overflow="visible" />
                    </clipPath>
                    <rect x="771.5" y="173.1" clipPath="url(#SVGID_642_)" fill="#CACACA" width="129.3" height="228.2" />
                  </g>
                </g>
                <g>
                  <defs>
                    <rect id="SVGID_643_" x="626.3" y="420.2" width="126.3" height="224.5" />
                  </defs>
                  <clipPath id="SVGID_644_">
                    <use xlinkHref="#SVGID_643_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_644_)">
                    <defs>
                      <rect id="SVGID_645_" x="626.3" y="365.7" width="126.3" height="279" />
                    </defs>
                    <clipPath id="SVGID_646_">
                      <use xlinkHref="#SVGID_645_" overflow="visible" />
                    </clipPath>
                    <rect x="624.8" y="418.3" clipPath="url(#SVGID_646_)" fill="#CACACA" width="129.3" height="228.3" />
                  </g>
                </g>
                <rect x="773.1" y="420.4" fill="#EFEFEF" width="126.3" height="224.4" />
                <rect x="626.5" y="175" fill="#EFEFEF" width="126.3" height="224.4" />
                <path fillRule="evenodd" clipRule="evenodd" fill="#ECECEC" d="M1195.8,368.3l-8.1,3.2l-2.1-5.4l-9.4-4.1l21.5-8.5l-4.1,9.4
                      L1195.8,368.3z M1184.6,351.7c2.4-0.9,5-0.4,6.7,1.2l-10.8,4.3C1180.7,354.8,1182.2,352.7,1184.6,351.7z M1197.7,350.4l-2.8,1.1
                      c-2.7-3.4-7.4-4.8-11.7-3.1c-4.3,1.7-6.7,5.9-6.3,10.3l-2.8,1.1c-0.9-5.9,2.3-11.8,8.1-14.1C1188,343.4,1194.4,345.5,1197.7,350.4z
                      " />
              </g>
            </svg>
          </div>
          <div className="layer" id="layer3">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox={fgViewBox} enableBackground="new 0 0 1366 768" xmlSpace="preserve">
              <g  filter="url(#color-filter)" >
                <path fillRule="evenodd" clipRule="evenodd" fill="#ECECEC"
                  d="M933.8,622l-3,3v-6L933.8,622z M930.8,607l3,3l-3,3V607z
                      M938.2,609.5l-8.8-8.5H928v11.4l-7.1-6.9l-2.1,2.1l8.6,8.4l-8.6,8.4l2.1,2.1l7.1-6.9V631h1.5l8.8-8.5l-6.6-6.5L938.2,609.5z" />
                <g>
                  <defs>
                    <rect id="SVGID_647_" x="773.1" y="420.4" width="126.3" height="27.6" />
                  </defs>
                  <clipPath id="SVGID_648_">
                    <use xlinkHref="#SVGID_647_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_648_)">
                    <defs>
                      <rect id="SVGID_649_" x="773.1" y="420.4" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_650_">
                      <use xlinkHref="#SVGID_649_" overflow="visible" />
                    </clipPath>
                    <rect x="771.5" y="418.9" clipPath="url(#SVGID_650_)" fill="#D8D8D8" width="129.3" height="30.6" />
                  </g>
                </g>
                <g>
                  <defs>
                    <rect id="SVGID_651_" x="773.1" y="448" width="126.3" height="16.2" />
                  </defs>
                  <clipPath id="SVGID_652_">
                    <use xlinkHref="#SVGID_651_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_652_)">
                    <defs>
                      <rect id="SVGID_653_" x="773.1" y="420.4" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_654_">
                      <use xlinkHref="#SVGID_653_" overflow="visible" />
                    </clipPath>
                    <rect x="771.5" y="446.5" clipPath="url(#SVGID_654_)" fill="#D8D8D8" width="129.3" height="19.3" />
                  </g>
                </g>
                <g>
                  <defs>
                    <rect id="SVGID_655_" x="773.1" y="464.2" width="126.2" height="14.7" />
                  </defs>
                  <clipPath id="SVGID_656_">
                    <use xlinkHref="#SVGID_655_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_656_)">
                    <defs>
                      <rect id="SVGID_657_" x="773.1" y="420.4" width="374.2" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_658_">
                      <use xlinkHref="#SVGID_657_" overflow="visible" />
                    </clipPath>
                    <rect x="768.5" y="462.7" clipPath="url(#SVGID_658_)" fill="#D6D6D6" width="135.3" height="17.8" />
                  </g>
                </g>
                <g>
                  <defs>
                    <rect id="SVGID_659_" x="626.3" y="420.4" width="126.3" height="27.6" />
                  </defs>
                  <clipPath id="SVGID_660_">
                    <use xlinkHref="#SVGID_659_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_660_)">
                    <defs>
                      <rect id="SVGID_661_" x="626.3" y="420.4" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_662_">
                      <use xlinkHref="#SVGID_661_" overflow="visible" />
                    </clipPath>
                    <rect x="624.8" y="418.9" clipPath="url(#SVGID_662_)" fill="#D8D8D8" width="129.3" height="30.6" />
                  </g>
                </g>
                <rect x="626.3" y="420.4" fill="none" width="126.3" height="224.4" />
                <rect x="626.3" y="448" fillRule="evenodd" clipRule="evenodd" fill="#C5C5C5" width="126.3" height="16.2" />
                <g>
                  <defs>
                    <rect id="SVGID_663_" x="773" y="175" width="126.3" height="27.6" />
                  </defs>
                  <clipPath id="SVGID_664_">
                    <use xlinkHref="#SVGID_663_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_664_)">
                    <defs>
                      <rect id="SVGID_665_" x="773" y="175" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_666_">
                      <use xlinkHref="#SVGID_665_" overflow="visible" />
                    </clipPath>
                    <rect x="771.5" y="173.5" clipPath="url(#SVGID_666_)" fill="#D8D8D8" width="129.3" height="30.6" />
                  </g>
                </g>
                <rect x="773" y="175" fill="none" width="126.3" height="224.4" />
                <rect x="773" y="202.6" fillRule="evenodd" clipRule="evenodd" fill="#C5C5C5" width="126.3" height="16.2" />
                <g>
                  <defs>
                    <rect id="SVGID_667_" x="626.5" y="175" width="126.3" height="27.6" />
                  </defs>
                  <clipPath id="SVGID_668_">
                    <use xlinkHref="#SVGID_667_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_668_)">
                    <defs>
                      <rect id="SVGID_669_" x="626.5" y="175" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_670_">
                      <use xlinkHref="#SVGID_669_" overflow="visible" />
                    </clipPath>
                    <rect x="625" y="173.5" clipPath="url(#SVGID_670_)" fill="#D8D8D8" width="129.3" height="30.6" />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path id="SVGID_671_" d="M1093.2,655.2c-4,0-7.2,3.2-7.2,7.2v115.3c0,4,3.2,7.2,7.2,7.2h320.5c4,0,7.2-3.2,7.2-7.2V662.4
                            c0-4-3.2-7.2-7.2-7.2H1093.2z" />
                    </defs>
                    <use xlinkHref="#SVGID_671_" overflow="visible" fillRule="evenodd" clipRule="evenodd" fill="#ECECEC" />
                    <clipPath id="SVGID_672_">
                      <use xlinkHref="#SVGID_671_" overflow="visible" />
                    </clipPath>
                    <rect x="1068" y="637.2" clipPath="url(#SVGID_672_)" fill="#ECECEC" width="371" height="165.7" />
                  </g>
                  <g>
                    <path fill="#FFFFFF" d="M1179,700.6h15.6c4.3,0,7.3,1.3,9.1,3.8c1.1,1.5,1.6,3.2,1.6,5.2c0,2.3-0.6,4.2-1.9,5.6
                          c-0.7,0.8-1.6,1.5-2.9,2.1c1.9,0.7,3.2,1.5,4.2,2.4c1.6,1.6,2.4,3.8,2.4,6.5c0,2.3-0.7,4.4-2.2,6.3c-2.2,2.8-5.7,4.2-10.5,4.2
                          H1179V700.6z M1192.8,715.8c2.1,0,3.7-0.3,4.9-0.9c1.8-0.9,2.7-2.5,2.7-4.9c0-2.4-1-4-2.9-4.8c-1.1-0.5-2.7-0.7-4.9-0.7h-8.8
                          v11.2H1192.8z M1194.5,732.5c3,0,5.2-0.9,6.5-2.6c0.8-1.1,1.2-2.4,1.2-4c0-2.6-1.2-4.4-3.6-5.4c-1.3-0.5-2.9-0.8-5-0.8h-9.8v12.7
                          H1194.5z" />
                    <path fill="#FFFFFF" d="M1218.4,710.4v17.5c0,1.3,0.2,2.4,0.6,3.3c0.8,1.6,2.2,2.4,4.3,2.4c3,0,5.1-1.4,6.1-4.1
                          c0.6-1.5,0.9-3.5,0.9-6.1v-13h4.4v26.4h-4.2l0-3.9c-0.6,1-1.3,1.8-2.1,2.5c-1.7,1.4-3.7,2.1-6,2.1c-3.7,0-6.2-1.3-7.5-3.8
                          c-0.7-1.3-1.1-3.1-1.1-5.4v-17.9H1218.4z" />
                    <path fill="#FFFFFF" d="M1244.7,703h4.5v7.4h4.2v3.6h-4.2v17.2c0,0.9,0.3,1.5,0.9,1.8c0.3,0.2,0.9,0.3,1.7,0.3c0.2,0,0.4,0,0.7,0
                          c0.2,0,0.5,0,0.9-0.1v3.5c-0.5,0.1-1,0.3-1.6,0.3c-0.6,0.1-1.1,0.1-1.8,0.1c-2.1,0-3.5-0.5-4.2-1.6c-0.7-1.1-1.1-2.4-1.1-4.1V714
                          h-3.6v-3.6h3.6V703z" />
                    <path fill="#FFFFFF" d="M1260.4,703h4.5v7.4h4.2v3.6h-4.2v17.2c0,0.9,0.3,1.5,0.9,1.8c0.3,0.2,0.9,0.3,1.7,0.3c0.2,0,0.4,0,0.7,0
                          c0.2,0,0.5,0,0.9-0.1v3.5c-0.5,0.1-1,0.3-1.6,0.3c-0.6,0.1-1.1,0.1-1.8,0.1c-2.1,0-3.5-0.5-4.2-1.6c-0.7-1.1-1.1-2.4-1.1-4.1V714
                          h-3.6v-3.6h3.6V703z" />
                    <path fill="#FFFFFF"
                      d="M1294.4,713c2.3,2.3,3.5,5.6,3.5,10c0,4.2-1,7.8-3.1,10.5c-2.1,2.8-5.2,4.2-9.6,4.2
                          c-3.6,0-6.5-1.2-8.6-3.7s-3.2-5.7-3.2-9.9c0-4.4,1.1-8,3.3-10.6c2.2-2.6,5.2-3.9,9-3.9C1289.2,709.6,1292.1,710.7,1294.4,713z
                          M1291.7,730.5c1.1-2.2,1.6-4.7,1.6-7.4c0-2.5-0.4-4.5-1.2-6c-1.2-2.4-3.4-3.6-6.4-3.6c-2.7,0-4.6,1-5.8,3.1
                          c-1.2,2.1-1.8,4.6-1.8,7.5c0,2.8,0.6,5.1,1.8,7c1.2,1.9,3.1,2.8,5.8,2.8C1288.6,733.8,1290.6,732.7,1291.7,730.5z" />
                    <path fill="#FFFFFF" d="M1305.1,710.4h4.2v3.7c1.2-1.5,2.6-2.7,4-3.3c1.4-0.7,2.9-1,4.7-1c3.7,0,6.3,1.3,7.6,3.9
                          c0.7,1.4,1.1,3.5,1.1,6.1v16.9h-4.5v-16.6c0-1.6-0.2-2.9-0.7-3.9c-0.8-1.6-2.2-2.5-4.3-2.5c-1.1,0-1.9,0.1-2.6,0.3
                          c-1.2,0.4-2.3,1.1-3.2,2.2c-0.7,0.9-1.2,1.8-1.4,2.7c-0.2,0.9-0.3,2.3-0.3,4v13.8h-4.4V710.4z" />
                  </g>
                </g>
                <path fillRule="evenodd" clipRule="evenodd" fill="#ECECEC" d="M602.9,126.8l-7.8-7.5l2.2-2.1l5.6,5.4l11.8-11.4l2.2,2.1
                      L602.9,126.8z M616.9,105h-21.8c-1.7,0-3.1,1.4-3.1,3.1v21.8c0,1.7,1.4,3.1,3.1,3.1h21.8c1.7,0,3.1-1.4,3.1-3.1v-21.8
                      C620,106.4,618.6,105,616.9,105z" />
                <g>
                  <defs>
                    <rect id="SVGID_673_" x="773" y="175" width="126.3" height="7.7" />
                  </defs>
                  <clipPath id="SVGID_674_">
                    <use xlinkHref="#SVGID_673_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_674_)">
                    <defs>
                      <rect id="SVGID_675_" x="773" y="175" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_676_">
                      <use xlinkHref="#SVGID_675_" overflow="visible" />
                    </clipPath>
                    <rect x="771.5" y="173.5" clipPath="url(#SVGID_676_)" fill="#BFBFBF" width="129.3" height="10.7" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_677_"
                      d="M778.5,190v0.9h8.6V190H778.5z M778.5,193.4h8.6v-0.9h-8.6V193.4z M778.5,195.5h8.6v-0.9h-8.6V195.5z" />
                  </defs>
                  <clipPath id="SVGID_678_">
                    <use xlinkHref="#SVGID_677_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_678_)">
                    <defs>
                      <rect id="SVGID_679_" x="774.9" y="184.8" width="15.9" height="15.9" />
                    </defs>
                    <clipPath id="SVGID_680_">
                      <use xlinkHref="#SVGID_679_" overflow="visible" />
                    </clipPath>
                    <rect x="777" y="188.5" clipPath="url(#SVGID_680_)" fill="#FFFFFF" width="11.6" height="8.6" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_681_" d="M816.9,186h38.6c3.6,0,6.4,2.9,6.4,6.4c0,3.6-2.9,6.4-6.4,6.4h-38.6c-3.6,0-6.4-2.9-6.4-6.4
                          C810.4,188.9,813.3,186,816.9,186z" />
                  </defs>
                  <clipPath id="SVGID_682_">
                    <use xlinkHref="#SVGID_681_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_682_)">
                    <defs>
                      <rect id="SVGID_683_" x="773" y="175" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_684_">
                      <use xlinkHref="#SVGID_683_" overflow="visible" />
                    </clipPath>
                    <rect x="808.9" y="184.5" clipPath="url(#SVGID_684_)" fill="#A9A9A9" width="54.6" height="15.9" />
                  </g>
                </g>
                <g>
                  <defs>
                    <rect id="SVGID_685_" x="626.5" y="175" width="126.3" height="7.7" />
                  </defs>
                  <clipPath id="SVGID_686_">
                    <use xlinkHref="#SVGID_685_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_686_)">
                    <defs>
                      <rect id="SVGID_687_" x="626.5" y="175" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_688_">
                      <use xlinkHref="#SVGID_687_" overflow="visible" />
                    </clipPath>
                    <rect x="625" y="173.5" clipPath="url(#SVGID_688_)" fill="#BFBFBF" width="129.3" height="10.7" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_689_"
                      d="M632,190v0.9h8.6V190H632z M632,193.4h8.6v-0.9H632V193.4z M632,195.5h8.6v-0.9H632V195.5z" />
                  </defs>
                  <clipPath id="SVGID_690_">
                    <use xlinkHref="#SVGID_689_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_690_)">
                    <defs>
                      <rect id="SVGID_691_" x="628.4" y="184.8" width="15.9" height="15.9" />
                    </defs>
                    <clipPath id="SVGID_692_">
                      <use xlinkHref="#SVGID_691_" overflow="visible" />
                    </clipPath>
                    <rect x="630.5" y="188.5" clipPath="url(#SVGID_692_)" fill="#FFFFFF" width="11.6" height="8.6" />
                  </g>
                </g>
                <g>
                  <defs>
                    <rect id="SVGID_693_" x="626.5" y="175" width="126.3" height="224.4" />
                  </defs>
                  <clipPath id="SVGID_694_">
                    <use xlinkHref="#SVGID_693_" overflow="visible" />
                  </clipPath>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_695_" d="M670.4,186H709c3.6,0,6.4,2.9,6.4,6.4c0,3.6-2.9,6.4-6.4,6.4h-38.6c-3.6,0-6.4-2.9-6.4-6.4
                          C663.9,188.9,666.8,186,670.4,186z" />
                  </defs>
                  <clipPath id="SVGID_696_">
                    <use xlinkHref="#SVGID_695_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_696_)">
                    <defs>
                      <rect id="SVGID_697_" x="626.5" y="175" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_698_">
                      <use xlinkHref="#SVGID_697_" overflow="visible" />
                    </clipPath>
                    <rect x="662.4" y="184.5" clipPath="url(#SVGID_698_)" fill="#A9A9A9" width="54.6" height="15.9" />
                  </g>
                </g>
                <g>
                  <path fill="#787878"
                    d="M821.1,190.5l1.6,4.2h-0.7l-0.4-1h-1.7l-0.4,1h-0.7l1.6-4.2H821.1z M821.3,193l-0.7-1.8h0L820,193H821.3z" />
                  <path fill="#787878" d="M823.7,190.4v1.6c0.2-0.3,0.5-0.5,0.9-0.5c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.3,0.7,0.3,1.1
                        c0,0.5-0.1,0.8-0.3,1.1c-0.3,0.3-0.6,0.5-1,0.5c-0.4,0-0.7-0.1-0.9-0.4v0.3H823v-4.2H823.7z M823.9,192.3
                        c-0.2,0.2-0.2,0.4-0.2,0.8v0c0,0.3,0.1,0.5,0.2,0.7c0.1,0.2,0.3,0.3,0.6,0.3c0.3,0,0.5-0.1,0.6-0.3c0.1-0.2,0.2-0.4,0.2-0.8
                        c0-0.3-0.1-0.6-0.2-0.7c-0.1-0.2-0.4-0.3-0.7-0.3C824.2,192.1,824,192.1,823.9,192.3z" />
                  <path fill="#787878" d="M829,192c0.3,0.3,0.4,0.7,0.4,1.1c0,0.5-0.1,0.8-0.4,1.1c-0.3,0.3-0.7,0.5-1.1,0.5c-0.5,0-0.8-0.2-1.1-0.5
                        c-0.3-0.3-0.4-0.7-0.4-1.1c0-0.5,0.1-0.8,0.4-1.1c0.3-0.3,0.6-0.4,1.1-0.4C828.4,191.5,828.7,191.7,829,192z M827.3,192.4
                        c-0.1,0.2-0.2,0.4-0.2,0.7s0.1,0.5,0.2,0.7c0.2,0.2,0.4,0.3,0.6,0.3c0.3,0,0.5-0.1,0.6-0.3c0.1-0.2,0.2-0.4,0.2-0.7
                        c0-0.3-0.1-0.5-0.2-0.7c-0.2-0.2-0.4-0.3-0.6-0.3C827.6,192.1,827.4,192.2,827.3,192.4z" />
                  <path fill="#787878" d="M830.7,191.6v1.8c0,0.2,0,0.4,0.2,0.5c0.1,0.1,0.3,0.2,0.5,0.2c0.1,0,0.3-0.1,0.4-0.2
                        c0.1-0.1,0.2-0.3,0.3-0.5v-1.8h0.7v3H832v-0.4c-0.3,0.3-0.6,0.5-0.9,0.5c-0.7,0-1.1-0.4-1.1-1.2v-1.9H830.7z" />
                  <path fill="#787878" d="M834.3,191.6h0.7v0.5h-0.7v1.7c0,0.1,0,0.1,0,0.2c0,0,0.1,0.1,0.2,0.1h0.4v0.5h-0.5
                        c-0.3,0-0.5-0.1-0.6-0.2c-0.1-0.1-0.2-0.3-0.2-0.6v-1.7h-0.5v-0.5h0.5v-0.7l0.7-0.3V191.6z" />
                  <path fill="#787878" d="M838.2,190.5v4.2h-0.7v-4.2H838.2z" />
                  <path fill="#787878" d="M841.4,192.5h-0.6c0-0.2-0.1-0.3-0.2-0.3c-0.1-0.1-0.2-0.1-0.5-0.1c-0.2,0-0.3,0-0.4,0.1
                        c-0.1,0.1-0.2,0.1-0.2,0.3c0,0.1,0.1,0.2,0.2,0.3c0.1,0,0.3,0.1,0.6,0.2c0.3,0.1,0.6,0.2,0.8,0.3c0.2,0.2,0.4,0.4,0.4,0.6
                        c0,0.6-0.5,1-1.4,1c-0.8,0-1.3-0.4-1.4-1.1h0.6c0,0.2,0.1,0.3,0.2,0.4c0.1,0.1,0.3,0.1,0.5,0.1c0.5,0,0.7-0.1,0.7-0.4
                        c0-0.1-0.1-0.3-0.3-0.3c-0.1,0-0.3-0.1-0.6-0.2c-0.4-0.1-0.6-0.2-0.8-0.3c-0.2-0.1-0.3-0.3-0.3-0.6c0-0.3,0.1-0.5,0.3-0.6
                        c0.2-0.2,0.5-0.2,0.9-0.2C840.9,191.5,841.3,191.8,841.4,192.5z" />
                  <path fill="#787878" d="M842.7,190.4v4.2H842v-4.2H842.7z" />
                  <path fill="#787878" d="M845.8,191.9c0.2,0.2,0.3,0.5,0.3,0.8v1.9h-0.6v-0.4c-0.1,0.2-0.3,0.3-0.4,0.3c-0.2,0.1-0.4,0.1-0.7,0.1
                        c-0.3,0-0.6-0.1-0.7-0.2c-0.2-0.2-0.3-0.4-0.3-0.6c0-0.3,0.1-0.6,0.4-0.8c0.2-0.2,0.6-0.3,1-0.3l0.7,0v-0.1c0-0.4-0.2-0.6-0.6-0.6
                        c-0.2,0-0.3,0-0.4,0.1c-0.1,0.1-0.2,0.2-0.3,0.4l-0.7-0.1c0.1-0.3,0.2-0.6,0.5-0.7c0.2-0.1,0.5-0.2,0.9-0.2
                        C845.3,191.5,845.6,191.6,845.8,191.9z M844.8,193.3c-0.5,0-0.8,0.2-0.8,0.6c0,0.1,0,0.2,0.1,0.3c0.1,0.1,0.2,0.1,0.4,0.1
                        c0.3,0,0.5-0.1,0.6-0.2c0.2-0.2,0.3-0.3,0.3-0.6v-0.2L844.8,193.3z" />
                  <path fill="#787878" d="M849.5,192.8v1.9h-0.7v-1.8c0-0.5-0.2-0.7-0.7-0.7c-0.2,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.3-0.2,0.6v1.8
                        h-0.7v-3h0.7v0.4c0.1-0.1,0.2-0.3,0.4-0.3c0.2-0.1,0.3-0.1,0.5-0.1C849.1,191.5,849.5,191.9,849.5,192.8z" />
                  <path fill="#787878" d="M853,190.4v4.2h-0.6v-0.3c-0.2,0.3-0.5,0.4-0.9,0.4c-0.4,0-0.8-0.2-1-0.5c-0.2-0.3-0.3-0.7-0.3-1.1
                        c0-0.4,0.1-0.8,0.3-1.1c0.2-0.3,0.6-0.5,1-0.5c0.3,0,0.6,0.2,0.9,0.5v-1.6H853z M850.9,192.4c-0.1,0.2-0.2,0.4-0.2,0.7
                        c0,0.3,0.1,0.6,0.2,0.8c0.1,0.2,0.3,0.3,0.6,0.3c0.3,0,0.5-0.1,0.6-0.3c0.1-0.2,0.2-0.4,0.2-0.7v0c0-0.3-0.1-0.6-0.2-0.8
                        c-0.1-0.2-0.3-0.3-0.5-0.3C851.3,192.1,851.1,192.2,850.9,192.4z" />
                </g>
                <g>
                  <path fill="#787878" d="M674.6,190.5l1.6,4.2h-0.7l-0.4-1h-1.7l-0.4,1h-0.7l1.6-4.2H674.6z M674.8,193l-0.7-1.8h0l-0.7,1.8H674.8z
                        " />
                  <path fill="#787878" d="M677.2,190.4v1.6c0.2-0.3,0.5-0.5,0.9-0.5c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.3,0.7,0.3,1.1
                        c0,0.5-0.1,0.8-0.3,1.1c-0.3,0.3-0.6,0.5-1,0.5c-0.4,0-0.7-0.1-0.9-0.4v0.3h-0.6v-4.2H677.2z M677.4,192.3
                        c-0.2,0.2-0.2,0.4-0.2,0.8v0c0,0.3,0.1,0.5,0.2,0.7c0.1,0.2,0.3,0.3,0.6,0.3c0.3,0,0.5-0.1,0.6-0.3c0.1-0.2,0.2-0.4,0.2-0.8
                        c0-0.3-0.1-0.6-0.2-0.7c-0.1-0.2-0.4-0.3-0.7-0.3C677.7,192.1,677.5,192.1,677.4,192.3z" />
                  <path fill="#787878" d="M682.5,192c0.3,0.3,0.4,0.7,0.4,1.1c0,0.5-0.1,0.8-0.4,1.1c-0.3,0.3-0.7,0.5-1.1,0.5
                        c-0.5,0-0.8-0.2-1.1-0.5c-0.3-0.3-0.4-0.7-0.4-1.1c0-0.5,0.1-0.8,0.4-1.1c0.3-0.3,0.6-0.4,1.1-0.4
                        C681.9,191.5,682.2,191.7,682.5,192z M680.8,192.4c-0.1,0.2-0.2,0.4-0.2,0.7s0.1,0.5,0.2,0.7c0.2,0.2,0.4,0.3,0.6,0.3
                        c0.3,0,0.5-0.1,0.6-0.3c0.1-0.2,0.2-0.4,0.2-0.7c0-0.3-0.1-0.5-0.2-0.7c-0.2-0.2-0.4-0.3-0.6-0.3
                        C681.1,192.1,680.9,192.2,680.8,192.4z" />
                  <path fill="#787878" d="M684.2,191.6v1.8c0,0.2,0,0.4,0.2,0.5c0.1,0.1,0.3,0.2,0.5,0.2c0.1,0,0.3-0.1,0.4-0.2
                        c0.1-0.1,0.2-0.3,0.3-0.5v-1.8h0.7v3h-0.7v-0.4c-0.3,0.3-0.6,0.5-0.9,0.5c-0.7,0-1.1-0.4-1.1-1.2v-1.9H684.2z" />
                  <path fill="#787878" d="M687.8,191.6h0.7v0.5h-0.7v1.7c0,0.1,0,0.1,0,0.2c0,0,0.1,0.1,0.2,0.1h0.4v0.5h-0.5
                        c-0.3,0-0.5-0.1-0.6-0.2c-0.1-0.1-0.2-0.3-0.2-0.6v-1.7h-0.5v-0.5h0.5v-0.7l0.7-0.3V191.6z" />
                  <path fill="#787878" d="M691.7,190.5v4.2H691v-4.2H691.7z" />
                  <path fill="#787878" d="M694.9,192.5h-0.6c0-0.2-0.1-0.3-0.2-0.3c-0.1-0.1-0.2-0.1-0.5-0.1c-0.2,0-0.3,0-0.4,0.1
                        c-0.1,0.1-0.2,0.1-0.2,0.3c0,0.1,0.1,0.2,0.2,0.3c0.1,0,0.3,0.1,0.6,0.2c0.3,0.1,0.6,0.2,0.8,0.3c0.2,0.2,0.4,0.4,0.4,0.6
                        c0,0.6-0.5,1-1.4,1c-0.8,0-1.3-0.4-1.4-1.1h0.6c0,0.2,0.1,0.3,0.2,0.4c0.1,0.1,0.3,0.1,0.5,0.1c0.5,0,0.7-0.1,0.7-0.4
                        c0-0.1-0.1-0.3-0.3-0.3c-0.1,0-0.3-0.1-0.6-0.2c-0.4-0.1-0.6-0.2-0.8-0.3c-0.2-0.1-0.4-0.3-0.4-0.6c0-0.3,0.1-0.5,0.3-0.6
                        c0.2-0.2,0.5-0.2,0.9-0.2C694.4,191.5,694.8,191.8,694.9,192.5z" />
                  <path fill="#787878" d="M696.2,190.4v4.2h-0.7v-4.2H696.2z" />
                  <path fill="#787878" d="M699.3,191.9c0.2,0.2,0.3,0.5,0.3,0.8v1.9H699v-0.4c-0.1,0.2-0.3,0.3-0.4,0.3c-0.2,0.1-0.4,0.1-0.7,0.1
                        c-0.3,0-0.6-0.1-0.7-0.2c-0.2-0.2-0.3-0.4-0.3-0.6c0-0.3,0.1-0.6,0.4-0.8c0.2-0.2,0.6-0.3,1-0.3l0.7,0v-0.1c0-0.4-0.2-0.6-0.6-0.6
                        c-0.2,0-0.3,0-0.4,0.1c-0.1,0.1-0.2,0.2-0.3,0.4l-0.7-0.1c0.1-0.3,0.2-0.6,0.5-0.7c0.2-0.1,0.5-0.2,0.9-0.2
                        C698.8,191.5,699.1,191.6,699.3,191.9z M698.3,193.3c-0.5,0-0.8,0.2-0.8,0.6c0,0.1,0,0.2,0.1,0.3c0.1,0.1,0.2,0.1,0.4,0.1
                        c0.3,0,0.5-0.1,0.6-0.2c0.2-0.2,0.3-0.3,0.3-0.6v-0.2L698.3,193.3z" />
                  <path fill="#787878" d="M703,192.8v1.9h-0.7v-1.8c0-0.5-0.2-0.7-0.7-0.7c-0.2,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.3-0.2,0.6v1.8
                        h-0.7v-3h0.7v0.4c0.1-0.1,0.2-0.3,0.4-0.3c0.2-0.1,0.3-0.1,0.5-0.1C702.6,191.5,703,191.9,703,192.8z" />
                  <path fill="#787878" d="M706.5,190.4v4.2h-0.6v-0.3c-0.2,0.3-0.5,0.4-0.9,0.4c-0.4,0-0.8-0.2-1-0.5c-0.2-0.3-0.3-0.7-0.3-1.1
                        c0-0.4,0.1-0.8,0.3-1.1c0.2-0.3,0.6-0.5,1-0.5c0.3,0,0.6,0.2,0.9,0.5v-1.6H706.5z M704.4,192.4c-0.1,0.2-0.2,0.4-0.2,0.7
                        c0,0.3,0.1,0.6,0.2,0.8c0.1,0.2,0.3,0.3,0.6,0.3c0.3,0,0.5-0.1,0.6-0.3c0.1-0.2,0.2-0.4,0.2-0.7v0c0-0.3-0.1-0.6-0.2-0.8
                        c-0.1-0.2-0.3-0.3-0.5-0.3C704.8,192.1,704.6,192.2,704.4,192.4z" />
                </g>
                <g>
                  <defs>
                    <rect id="SVGID_699_" x="773.1" y="420.4" width="126.3" height="7.7" />
                  </defs>
                  <clipPath id="SVGID_700_">
                    <use xlinkHref="#SVGID_699_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_700_)">
                    <defs>
                      <rect id="SVGID_701_" x="773.1" y="420.4" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_702_">
                      <use xlinkHref="#SVGID_701_" overflow="visible" />
                    </clipPath>
                    <rect x="771.5" y="418.9" clipPath="url(#SVGID_702_)" fill="#BFBFBF" width="129.3" height="10.7" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_703_"
                      d="M778.6,435.4v0.9h8.6v-0.9H778.6z M778.6,438.8h8.6v-0.9h-8.6V438.8z M778.6,440.9h8.6V440h-8.6V440.9z" />
                  </defs>
                  <clipPath id="SVGID_704_">
                    <use xlinkHref="#SVGID_703_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_704_)">
                    <defs>
                      <rect id="SVGID_705_" x="774.9" y="430.2" width="15.9" height="15.9" />
                    </defs>
                    <clipPath id="SVGID_706_">
                      <use xlinkHref="#SVGID_705_" overflow="visible" />
                    </clipPath>
                    <rect x="777" y="433.9" clipPath="url(#SVGID_706_)" fill="#FFFFFF" width="11.6" height="8.6" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_707_" d="M820,431.4h38.6c3.6,0,6.4,2.9,6.4,6.4s-2.9,6.4-6.4,6.4H820c-3.6,0-6.4-2.9-6.4-6.4
                          S816.4,431.4,820,431.4z" />
                  </defs>
                  <clipPath id="SVGID_708_">
                    <use xlinkHref="#SVGID_707_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_708_)">
                    <defs>
                      <rect id="SVGID_709_" x="773.1" y="420.4" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_710_">
                      <use xlinkHref="#SVGID_709_" overflow="visible" />
                    </clipPath>
                    <rect x="812" y="429.9" clipPath="url(#SVGID_710_)" fill="#A9A9A9" width="54.6" height="15.9" />
                  </g>
                </g>
                <g enableBackground="new    ">
                  <g>
                    <g opacity="0.87">
                      <path fill="#ADADAD" d="M824.2,435.9l1.6,4.2H825l-0.4-1h-1.7l-0.4,1h-0.7l1.6-4.2H824.2z M824.4,438.4l-0.7-1.8h0l-0.7,1.8
                            H824.4z" />
                      <path fill="#ADADAD" d="M826.8,435.8v1.6c0.2-0.3,0.5-0.5,0.9-0.5c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.3,0.7,0.3,1.1
                            c0,0.5-0.1,0.8-0.3,1.1c-0.3,0.3-0.6,0.5-1,0.5c-0.4,0-0.7-0.1-0.9-0.4v0.3h-0.6v-4.2H826.8z M827,437.7
                            c-0.2,0.2-0.2,0.4-0.2,0.8v0c0,0.3,0.1,0.5,0.2,0.7c0.1,0.2,0.3,0.3,0.6,0.3c0.3,0,0.5-0.1,0.6-0.3c0.1-0.2,0.2-0.4,0.2-0.8
                            s-0.1-0.6-0.2-0.7c-0.1-0.2-0.4-0.3-0.7-0.3C827.3,437.5,827.1,437.5,827,437.7z" />
                      <path fill="#ADADAD" d="M832.1,437.4c0.3,0.3,0.4,0.7,0.4,1.1c0,0.5-0.1,0.8-0.4,1.1c-0.3,0.3-0.7,0.5-1.1,0.5
                            c-0.5,0-0.8-0.2-1.1-0.5c-0.3-0.3-0.4-0.7-0.4-1.1c0-0.5,0.1-0.8,0.4-1.1c0.3-0.3,0.6-0.4,1.1-0.4
                            C831.5,436.9,831.8,437.1,832.1,437.4z M830.4,437.8c-0.1,0.2-0.2,0.4-0.2,0.7s0.1,0.5,0.2,0.7c0.2,0.2,0.4,0.3,0.6,0.3
                            c0.3,0,0.5-0.1,0.6-0.3c0.1-0.2,0.2-0.4,0.2-0.7c0-0.3-0.1-0.5-0.2-0.7c-0.2-0.2-0.4-0.3-0.6-0.3
                            C830.7,437.5,830.5,437.6,830.4,437.8z" />
                      <path fill="#ADADAD" d="M833.8,437v1.8c0,0.2,0,0.4,0.2,0.5c0.1,0.1,0.3,0.2,0.5,0.2c0.1,0,0.3-0.1,0.4-0.2
                            c0.1-0.1,0.2-0.3,0.3-0.5V437h0.7v3h-0.7v-0.4c-0.3,0.3-0.6,0.5-0.9,0.5c-0.7,0-1.1-0.4-1.1-1.2V437H833.8z" />
                      <path fill="#ADADAD" d="M837.4,437h0.7v0.5h-0.7v1.7c0,0.1,0,0.1,0,0.2c0,0,0.1,0.1,0.2,0.1h0.4v0.5h-0.5
                            c-0.3,0-0.5-0.1-0.6-0.2c-0.1-0.1-0.2-0.3-0.2-0.6v-1.7h-0.5V437h0.5v-0.7l0.7-0.3V437z" />
                      <path fill="#ADADAD" d="M841.3,435.9v4.2h-0.7v-4.2H841.3z" />
                      <path fill="#ADADAD" d="M844.5,437.9h-0.6c0-0.2-0.1-0.3-0.2-0.3c-0.1-0.1-0.3-0.1-0.5-0.1c-0.2,0-0.3,0-0.4,0.1
                            c-0.1,0.1-0.2,0.1-0.2,0.3c0,0.1,0.1,0.2,0.2,0.3c0.1,0,0.3,0.1,0.6,0.2c0.3,0.1,0.6,0.2,0.8,0.3c0.2,0.2,0.4,0.4,0.4,0.6
                            c0,0.6-0.5,1-1.4,1c-0.8,0-1.3-0.4-1.4-1.1h0.6c0,0.2,0.1,0.3,0.2,0.4c0.1,0.1,0.3,0.1,0.5,0.1c0.5,0,0.7-0.1,0.7-0.4
                            c0-0.1-0.1-0.2-0.3-0.3c-0.1,0-0.3-0.1-0.6-0.2c-0.4-0.1-0.6-0.2-0.8-0.3c-0.2-0.1-0.4-0.4-0.4-0.6c0-0.3,0.1-0.5,0.3-0.6
                            c0.2-0.2,0.5-0.2,0.9-0.2C844,436.9,844.4,437.2,844.5,437.9z" />
                      <path fill="#ADADAD" d="M845.8,435.8v4.2h-0.7v-4.2H845.8z" />
                      <path fill="#ADADAD" d="M848.9,437.3c0.2,0.2,0.3,0.5,0.3,0.8v1.9h-0.6v-0.4c-0.1,0.2-0.3,0.3-0.4,0.3c-0.2,0.1-0.4,0.1-0.7,0.1
                            c-0.3,0-0.6-0.1-0.7-0.2c-0.2-0.2-0.3-0.4-0.3-0.6c0-0.3,0.1-0.6,0.4-0.8c0.2-0.2,0.6-0.3,1-0.3l0.7,0v-0.1
                            c0-0.4-0.2-0.6-0.6-0.6c-0.2,0-0.3,0-0.4,0.1c-0.1,0.1-0.2,0.2-0.3,0.3l-0.7-0.1c0.1-0.3,0.2-0.6,0.5-0.7
                            c0.2-0.1,0.5-0.2,0.9-0.2C848.4,436.9,848.7,437,848.9,437.3z M847.9,438.7c-0.5,0-0.8,0.2-0.8,0.6c0,0.1,0,0.2,0.1,0.3
                            c0.1,0.1,0.2,0.1,0.4,0.1c0.3,0,0.5-0.1,0.6-0.2c0.2-0.2,0.3-0.3,0.3-0.6v-0.2L847.9,438.7z" />
                      <path fill="#ADADAD" d="M852.6,438.2v1.9h-0.7v-1.8c0-0.5-0.2-0.7-0.7-0.7c-0.2,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.3-0.2,0.6v1.8
                            h-0.7v-3h0.7v0.3c0.1-0.1,0.3-0.2,0.4-0.3c0.2-0.1,0.3-0.1,0.5-0.1C852.2,436.9,852.6,437.3,852.6,438.2z" />
                      <path fill="#ADADAD" d="M856.1,435.8v4.2h-0.6v-0.3c-0.2,0.3-0.5,0.4-0.9,0.4c-0.4,0-0.8-0.2-1-0.5c-0.2-0.3-0.3-0.7-0.3-1.1
                            c0-0.4,0.1-0.8,0.3-1.1c0.2-0.3,0.6-0.5,1-0.5c0.3,0,0.6,0.2,0.9,0.5v-1.6H856.1z M854,437.8c-0.1,0.2-0.2,0.4-0.2,0.7
                            s0.1,0.6,0.2,0.8c0.1,0.2,0.4,0.3,0.6,0.3c0.3,0,0.5-0.1,0.6-0.3c0.1-0.2,0.2-0.4,0.2-0.7v0c0-0.3-0.1-0.6-0.2-0.8
                            c-0.1-0.2-0.3-0.3-0.5-0.3C854.4,437.5,854.2,437.6,854,437.8z" />
                    </g>
                  </g>
                </g>
                <g>
                  <defs>
                    <rect id="SVGID_711_" x="626.3" y="420.4" width="126.3" height="7.7" />
                  </defs>
                  <clipPath id="SVGID_712_">
                    <use xlinkHref="#SVGID_711_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_712_)">
                    <defs>
                      <rect id="SVGID_713_" x="626.3" y="420.4" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_714_">
                      <use xlinkHref="#SVGID_713_" overflow="visible" />
                    </clipPath>
                    <rect x="624.8" y="418.9" clipPath="url(#SVGID_714_)" fill="#BFBFBF" width="129.3" height="10.7" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_715_" d="M670.1,431.4h38.6c3.6,0,6.4,2.9,6.4,6.4s-2.9,6.4-6.4,6.4h-38.6c-3.6,0-6.4-2.9-6.4-6.4
                          S666.6,431.4,670.1,431.4z" />
                  </defs>
                  <clipPath id="SVGID_716_">
                    <use xlinkHref="#SVGID_715_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_716_)">
                    <defs>
                      <rect id="SVGID_717_" x="626.3" y="420.4" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_718_">
                      <use xlinkHref="#SVGID_717_" overflow="visible" />
                    </clipPath>
                    <rect x="662.2" y="429.9" clipPath="url(#SVGID_718_)" fill="#A9A9A9" width="54.6" height="15.9" />
                  </g>
                </g>
                <g>
                  <path fill="#787878" d="M674.3,435.9l1.6,4.2h-0.7l-0.4-1h-1.7l-0.4,1H672l1.6-4.2H674.3z M674.6,438.4l-0.7-1.8h0l-0.7,1.8H674.6
                        z" />
                  <path fill="#787878" d="M676.9,435.8v1.6c0.2-0.3,0.5-0.5,0.9-0.5c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.3,0.7,0.3,1.1
                        c0,0.5-0.1,0.8-0.3,1.1c-0.3,0.3-0.6,0.5-1,0.5c-0.4,0-0.7-0.1-0.9-0.4v0.3h-0.6v-4.2H676.9z M677.1,437.7
                        c-0.2,0.2-0.2,0.4-0.2,0.8v0c0,0.3,0.1,0.5,0.2,0.7c0.1,0.2,0.3,0.3,0.6,0.3c0.3,0,0.5-0.1,0.6-0.3c0.1-0.2,0.2-0.4,0.2-0.8
                        s-0.1-0.6-0.2-0.7c-0.1-0.2-0.4-0.3-0.7-0.3C677.5,437.5,677.3,437.5,677.1,437.7z" />
                  <path fill="#787878" d="M682.3,437.4c0.3,0.3,0.4,0.7,0.4,1.1c0,0.5-0.1,0.8-0.4,1.1c-0.3,0.3-0.7,0.5-1.1,0.5
                        c-0.5,0-0.8-0.2-1.1-0.5c-0.3-0.3-0.4-0.7-0.4-1.1c0-0.5,0.1-0.8,0.4-1.1c0.3-0.3,0.6-0.4,1.1-0.4
                        C681.6,436.9,682,437.1,682.3,437.4z M680.5,437.8c-0.1,0.2-0.2,0.4-0.2,0.7s0.1,0.5,0.2,0.7c0.2,0.2,0.4,0.3,0.6,0.3
                        c0.3,0,0.5-0.1,0.6-0.3c0.1-0.2,0.2-0.4,0.2-0.7c0-0.3-0.1-0.5-0.2-0.7c-0.2-0.2-0.4-0.3-0.6-0.3
                        C680.9,437.5,680.7,437.6,680.5,437.8z" />
                  <path fill="#787878" d="M683.9,437v1.8c0,0.2,0,0.4,0.2,0.5c0.1,0.1,0.3,0.2,0.5,0.2c0.1,0,0.3-0.1,0.4-0.2
                        c0.1-0.1,0.2-0.3,0.3-0.5V437h0.7v3h-0.7v-0.4c-0.3,0.3-0.6,0.5-0.9,0.5c-0.7,0-1.1-0.4-1.1-1.2V437H683.9z" />
                  <path fill="#787878" d="M687.6,437h0.7v0.5h-0.7v1.7c0,0.1,0,0.1,0,0.2c0,0,0.1,0.1,0.2,0.1h0.4v0.5h-0.5c-0.3,0-0.5-0.1-0.6-0.2
                        c-0.1-0.1-0.2-0.3-0.2-0.6v-1.7h-0.5V437h0.5v-0.7l0.7-0.3V437z" />
                  <path fill="#787878" d="M691.5,435.9v4.2h-0.7v-4.2H691.5z" />
                  <path fill="#787878" d="M694.6,437.9H694c0-0.2-0.1-0.3-0.2-0.3c-0.1-0.1-0.3-0.1-0.5-0.1c-0.2,0-0.3,0-0.4,0.1
                        c-0.1,0.1-0.2,0.1-0.2,0.3c0,0.1,0.1,0.2,0.2,0.3c0.1,0,0.3,0.1,0.6,0.2c0.3,0.1,0.6,0.2,0.8,0.3c0.2,0.2,0.4,0.4,0.4,0.6
                        c0,0.6-0.5,1-1.4,1c-0.8,0-1.3-0.4-1.4-1.1h0.6c0,0.2,0.1,0.3,0.2,0.4c0.1,0.1,0.3,0.1,0.5,0.1c0.5,0,0.7-0.1,0.7-0.4
                        c0-0.1-0.1-0.2-0.3-0.3c-0.1,0-0.3-0.1-0.6-0.2c-0.4-0.1-0.6-0.2-0.8-0.3c-0.2-0.1-0.3-0.4-0.3-0.6c0-0.3,0.1-0.5,0.3-0.6
                        c0.2-0.2,0.5-0.2,0.9-0.2C694.1,436.9,694.6,437.2,694.6,437.9z" />
                  <path fill="#787878" d="M696,435.8v4.2h-0.7v-4.2H696z" />
                  <path fill="#787878" d="M699.1,437.3c0.2,0.2,0.3,0.5,0.3,0.8v1.9h-0.6v-0.4c-0.1,0.2-0.3,0.3-0.4,0.3c-0.2,0.1-0.4,0.1-0.7,0.1
                        c-0.3,0-0.6-0.1-0.7-0.2c-0.2-0.2-0.3-0.4-0.3-0.6c0-0.3,0.1-0.6,0.4-0.8c0.2-0.2,0.6-0.3,1-0.3l0.7,0v-0.1c0-0.4-0.2-0.6-0.6-0.6
                        c-0.2,0-0.3,0-0.4,0.1c-0.1,0.1-0.2,0.2-0.2,0.3l-0.7-0.1c0.1-0.3,0.2-0.6,0.5-0.7c0.2-0.1,0.5-0.2,0.9-0.2
                        C698.6,436.9,698.9,437,699.1,437.3z M698.1,438.7c-0.5,0-0.8,0.2-0.8,0.6c0,0.1,0,0.2,0.1,0.3c0.1,0.1,0.2,0.1,0.4,0.1
                        c0.3,0,0.5-0.1,0.6-0.2c0.2-0.2,0.3-0.3,0.3-0.6v-0.2L698.1,438.7z" />
                  <path fill="#787878" d="M702.8,438.2v1.9h-0.7v-1.8c0-0.5-0.2-0.7-0.7-0.7c-0.2,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.3-0.2,0.6v1.8
                        h-0.7v-3h0.7v0.3c0.1-0.1,0.3-0.2,0.4-0.3c0.2-0.1,0.3-0.1,0.5-0.1C702.4,436.9,702.8,437.3,702.8,438.2z" />
                  <path fill="#787878" d="M706.3,435.8v4.2h-0.6v-0.3c-0.2,0.3-0.5,0.4-0.9,0.4c-0.4,0-0.8-0.2-1-0.5c-0.2-0.3-0.4-0.7-0.4-1.1
                        c0-0.4,0.1-0.8,0.3-1.1c0.2-0.3,0.6-0.5,1-0.5c0.3,0,0.6,0.2,0.9,0.5v-1.6H706.3z M704.2,437.8c-0.1,0.2-0.2,0.4-0.2,0.7
                        s0.1,0.6,0.2,0.8c0.1,0.2,0.4,0.3,0.6,0.3c0.3,0,0.5-0.1,0.6-0.3c0.1-0.2,0.2-0.4,0.2-0.7v0c0-0.3-0.1-0.6-0.2-0.8
                        c-0.1-0.2-0.3-0.3-0.5-0.3C704.6,437.5,704.3,437.6,704.2,437.8z" />
                </g>
                <rect x="672" y="433.9" fill="none" width="34.9" height="8" />
                <g>
                  <defs>
                    <rect id="SVGID_719_" x="773" y="202.6" width="126.3" height="196.8" />
                  </defs>
                  <clipPath id="SVGID_720_">
                    <use xlinkHref="#SVGID_719_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_720_)">
                    <defs>
                      <rect id="SVGID_721_" x="773" y="-131.6" width="126.3" height="2717.6" />
                    </defs>
                    <clipPath id="SVGID_722_">
                      <use xlinkHref="#SVGID_721_" overflow="visible" />
                    </clipPath>
                    <rect x="771.5" y="184" clipPath="url(#SVGID_722_)" fill="#D8D8D8" width="129.3" height="233.9" />
                  </g>
                </g>
                <g>
                  <defs>
                    <rect id="SVGID_723_" x="626.5" y="202.6" width="126.3" height="16.2" />
                  </defs>
                  <clipPath id="SVGID_724_">
                    <use xlinkHref="#SVGID_723_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_724_)">
                    <defs>
                      <rect id="SVGID_725_" x="626.5" y="175" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_726_">
                      <use xlinkHref="#SVGID_725_" overflow="visible" />
                    </clipPath>
                    <rect x="625" y="201.1" clipPath="url(#SVGID_726_)" fill="#D8D8D8" width="129.3" height="19.3" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_727_" d="M864.8,208.7h26.4c1.6,0,2.9,1.3,2.9,2.9c0,1.6-1.3,2.9-2.9,2.9h-26.4c-1.6,0-2.9-1.3-2.9-2.9
                          C861.9,210,863.2,208.7,864.8,208.7z" />
                  </defs>
                  <clipPath id="SVGID_728_">
                    <use xlinkHref="#SVGID_727_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_728_)">
                    <defs>
                      <rect id="SVGID_729_" x="773" y="175" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_730_">
                      <use xlinkHref="#SVGID_729_" overflow="visible" />
                    </clipPath>
                    <rect x="860.4" y="207.2" clipPath="url(#SVGID_730_)" fill="#B4B4B4" width="35.2" height="8.9" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_731_" d="M780.5,208.7h26.4c1.6,0,2.9,1.3,2.9,2.9c0,1.6-1.3,2.9-2.9,2.9h-26.4c-1.6,0-2.9-1.3-2.9-2.9
                          C777.6,210,778.9,208.7,780.5,208.7z" />
                  </defs>
                  <clipPath id="SVGID_732_">
                    <use xlinkHref="#SVGID_731_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_732_)">
                    <defs>
                      <rect id="SVGID_733_" x="773" y="175" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_734_">
                      <use xlinkHref="#SVGID_733_" overflow="visible" />
                    </clipPath>
                    <rect x="776.1" y="207.2" clipPath="url(#SVGID_734_)" fill="#B4B4B4" width="35.2" height="8.9" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_735_" d="M634,208.7h26.4c1.6,0,2.9,1.3,2.9,2.9c0,1.6-1.3,2.9-2.9,2.9H634c-1.6,0-2.9-1.3-2.9-2.9
                          C631.1,210,632.4,208.7,634,208.7z" />
                  </defs>
                  <clipPath id="SVGID_736_">
                    <use xlinkHref="#SVGID_735_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_736_)">
                    <defs>
                      <rect id="SVGID_737_" x="626.5" y="175" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_738_">
                      <use xlinkHref="#SVGID_737_" overflow="visible" />
                    </clipPath>
                    <rect x="629.6" y="207.2" clipPath="url(#SVGID_738_)" fill="#B4B4B4" width="35.2" height="8.9" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_739_" d="M676.2,208.7h26.4c1.6,0,2.9,1.3,2.9,2.9c0,1.6-1.3,2.9-2.9,2.9h-26.4c-1.6,0-2.9-1.3-2.9-2.9
                          C673.3,210,674.6,208.7,676.2,208.7z" />
                  </defs>
                  <clipPath id="SVGID_740_">
                    <use xlinkHref="#SVGID_739_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_740_)">
                    <defs>
                      <rect id="SVGID_741_" x="626.5" y="175" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_742_">
                      <use xlinkHref="#SVGID_741_" overflow="visible" />
                    </clipPath>
                    <rect x="671.7" y="207.2" clipPath="url(#SVGID_742_)" fill="#B4B4B4" width="35.2" height="8.9" />
                  </g>
                </g>
                <g>
                  <defs>
                    <rect id="SVGID_743_" x="626.3" y="448" width="126.3" height="196.8" />
                  </defs>
                  <use xlinkHref="#SVGID_743_" overflow="visible" fillRule="evenodd" clipRule="evenodd" fill="#CACACA" />
                  <clipPath id="SVGID_744_">
                    <use xlinkHref="#SVGID_743_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_744_)">
                    <defs>
                      <rect id="SVGID_745_" x="626.3" y="113.9" width="126.3" height="2717.6" />
                    </defs>
                    <use xlinkHref="#SVGID_745_" overflow="visible" fill="#CACACA" />
                    <clipPath id="SVGID_746_">
                      <use xlinkHref="#SVGID_745_" overflow="visible" />
                    </clipPath>
                    <rect x="624.8" y="429.4" clipPath="url(#SVGID_746_)" fill="#CACACA" width="129.3" height="233.9" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_747_" d="M633.8,454.1h26.4c1.6,0,2.9,1.3,2.9,2.9s-1.3,2.9-2.9,2.9h-26.4c-1.6,0-2.9-1.3-2.9-2.9
                          S632.2,454.1,633.8,454.1z" />
                  </defs>
                  <clipPath id="SVGID_748_">
                    <use xlinkHref="#SVGID_747_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_748_)">
                    <defs>
                      <rect id="SVGID_749_" x="626.3" y="420.4" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_750_">
                      <use xlinkHref="#SVGID_749_" overflow="visible" />
                    </clipPath>
                    <rect x="629.4" y="452.6" clipPath="url(#SVGID_750_)" fill="#B4B4B4" width="35.2" height="8.9" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_751_" d="M718.1,454.1h26.4c1.6,0,2.9,1.3,2.9,2.9s-1.3,2.9-2.9,2.9h-26.4c-1.6,0-2.9-1.3-2.9-2.9
                          S716.5,454.1,718.1,454.1z" />
                  </defs>
                  <clipPath id="SVGID_752_">
                    <use xlinkHref="#SVGID_751_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_752_)">
                    <defs>
                      <rect id="SVGID_753_" x="626.3" y="420.4" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_754_">
                      <use xlinkHref="#SVGID_753_" overflow="visible" />
                    </clipPath>
                    <rect x="713.7" y="452.6" clipPath="url(#SVGID_754_)" fill="#B4B4B4" width="35.2" height="8.9" />
                  </g>
                </g>
                <g>
                  <defs>
                    <rect id="SVGID_755_" x="773.1" y="464.2" width="126.3" height="180.5" />
                  </defs>
                  <clipPath id="SVGID_756_">
                    <use xlinkHref="#SVGID_755_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_756_)">
                    <defs>
                      <rect id="SVGID_757_" x="773.1" y="-73.6" width="126.3" height="2753" />
                    </defs>
                    <clipPath id="SVGID_758_">
                      <use xlinkHref="#SVGID_757_" overflow="visible" />
                    </clipPath>
                    <rect x="771.5" y="445.4" clipPath="url(#SVGID_758_)" fill="#CACACA" width="129.3" height="218.1" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_759_" d="M822.7,468.8h26.4c1.6,0,2.9,1.3,2.9,2.9s-1.3,2.9-2.9,2.9h-26.4c-1.6,0-2.9-1.3-2.9-2.9
                          S821.1,468.8,822.7,468.8z" />
                  </defs>
                  <use xlinkHref="#SVGID_759_" overflow="visible" fillRule="evenodd" clipRule="evenodd" fill="#B4B4B4" />
                  <clipPath id="SVGID_760_">
                    <use xlinkHref="#SVGID_759_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_760_)">
                    <defs>
                      <rect id="SVGID_761_" x="773.1" y="420.4" width="126.3" height="224.4" />
                    </defs>
                    <use xlinkHref="#SVGID_761_" overflow="visible" fill="#B4B4B4" />
                    <clipPath id="SVGID_762_">
                      <use xlinkHref="#SVGID_761_" overflow="visible" />
                    </clipPath>
                    <rect x="818.3" y="467.3" clipPath="url(#SVGID_762_)" fill="#B4B4B4" width="35.2" height="8.9" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_763_" d="M864.9,468.8h26.4c1.6,0,2.9,1.3,2.9,2.9s-1.3,2.9-2.9,2.9h-26.4c-1.6,0-2.9-1.3-2.9-2.9
                          S863.2,468.8,864.9,468.8z" />
                  </defs>
                  <use xlinkHref="#SVGID_763_" overflow="visible" fillRule="evenodd" clipRule="evenodd" fill="#B4B4B4" />
                  <clipPath id="SVGID_764_">
                    <use xlinkHref="#SVGID_763_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_764_)">
                    <defs>
                      <rect id="SVGID_765_" x="773.1" y="420.4" width="126.3" height="224.4" />
                    </defs>
                    <use xlinkHref="#SVGID_765_" overflow="visible" fill="#B4B4B4" />
                    <clipPath id="SVGID_766_">
                      <use xlinkHref="#SVGID_765_" overflow="visible" />
                    </clipPath>
                    <rect x="860.4" y="467.3" clipPath="url(#SVGID_766_)" fill="#B4B4B4" width="35.2" height="8.9" />
                  </g>
                </g>
                <g>
                  <path fill="#787878" d="M873.8,471.4h-0.5c0-0.1-0.1-0.2-0.2-0.3c-0.1,0-0.2-0.1-0.4-0.1c-0.1,0-0.2,0-0.3,0.1
                        c-0.1,0-0.1,0.1-0.1,0.2c0,0.1,0.1,0.1,0.2,0.2c0.1,0,0.2,0.1,0.5,0.1c0.3,0.1,0.5,0.1,0.6,0.2c0.2,0.1,0.3,0.3,0.3,0.5
                        c0,0.5-0.4,0.8-1.1,0.8c-0.7,0-1-0.3-1.1-0.8h0.5c0,0.2,0.1,0.3,0.2,0.3c0.1,0.1,0.2,0.1,0.4,0.1c0.4,0,0.6-0.1,0.6-0.3
                        c0-0.1-0.1-0.2-0.2-0.3c-0.1,0-0.2-0.1-0.5-0.1c-0.3-0.1-0.5-0.1-0.6-0.2c-0.2-0.1-0.3-0.3-0.3-0.5c0-0.2,0.1-0.4,0.3-0.5
                        c0.2-0.1,0.4-0.2,0.7-0.2C873.4,470.7,873.7,470.9,873.8,471.4z" />
                  <path fill="#787878" d="M876.2,471.1c0.2,0.2,0.3,0.6,0.3,1h-1.8c0,0.2,0.1,0.4,0.2,0.5c0.1,0.1,0.2,0.2,0.4,0.2
                        c0.2,0,0.3,0,0.4-0.1c0.1-0.1,0.1-0.2,0.2-0.3h0.5c-0.1,0.2-0.2,0.4-0.3,0.6c-0.2,0.2-0.5,0.3-0.8,0.3c-0.4,0-0.6-0.1-0.8-0.3
                        c-0.2-0.2-0.3-0.5-0.3-0.9c0-0.4,0.1-0.6,0.3-0.9c0.2-0.2,0.5-0.4,0.8-0.4C875.7,470.7,876,470.8,876.2,471.1z M874.9,471.3
                        c-0.1,0.1-0.2,0.2-0.2,0.4h1.2c0-0.4-0.3-0.6-0.6-0.6C875.1,471.1,875,471.2,874.9,471.3z" />
                  <path fill="#787878" d="M877.6,470.7h0.5v0.4h-0.5v1.3c0,0.1,0,0.1,0,0.1c0,0,0.1,0,0.1,0h0.3v0.4h-0.4c-0.2,0-0.4-0.1-0.5-0.2
                        c-0.1-0.1-0.1-0.2-0.1-0.4v-1.3h-0.4v-0.4h0.4v-0.6l0.5-0.2V470.7z" />
                  <path fill="#787878" d="M879.3,470.7h0.5v0.4h-0.5v1.3c0,0.1,0,0.1,0,0.1c0,0,0.1,0,0.1,0h0.3v0.4h-0.4c-0.2,0-0.4-0.1-0.5-0.2
                        c-0.1-0.1-0.1-0.2-0.1-0.4v-1.3h-0.4v-0.4h0.4v-0.6l0.5-0.2V470.7z" />
                  <path fill="#787878" d="M880.8,469.9c0.1,0.1,0.1,0.1,0.1,0.2c0,0.1,0,0.2-0.1,0.3c-0.1,0.1-0.2,0.1-0.3,0.1c-0.1,0-0.2,0-0.3-0.1
                        c-0.1-0.1-0.1-0.2-0.1-0.3c0-0.1,0-0.2,0.1-0.2c0.1-0.1,0.2-0.1,0.3-0.1C880.7,469.8,880.7,469.8,880.8,469.9z M880.8,470.7v2.4
                        h-0.5v-2.4H880.8z" />
                  <path fill="#787878" d="M883.6,471.7v1.5h-0.5v-1.4c0-0.4-0.2-0.6-0.5-0.6c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.2,0.2-0.2,0.4v1.4
                        h-0.5v-2.4h0.5v0.3c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.2-0.1,0.4-0.1C883.3,470.7,883.6,471,883.6,471.7z" />
                  <path fill="#787878" d="M885.8,471v-0.3h0.5v2.2c0,0.7-0.4,1.1-1.1,1.1c-0.3,0-0.6-0.1-0.8-0.2c-0.2-0.1-0.3-0.3-0.3-0.6h0.5
                        c0,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.2,0.1,0.4,0.1c0.4,0,0.6-0.2,0.6-0.6v-0.3c-0.2,0.2-0.4,0.4-0.7,0.4c-0.3,0-0.6-0.1-0.8-0.3
                        c-0.2-0.2-0.3-0.5-0.3-0.9s0.1-0.6,0.3-0.9c0.2-0.2,0.5-0.3,0.8-0.3C885.4,470.7,885.7,470.8,885.8,471z M884.7,471.3
                        c-0.1,0.1-0.2,0.3-0.2,0.6c0,0.2,0,0.4,0.1,0.5c0.1,0.2,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.2-0.3,0.2-0.6
                        c0-0.2-0.1-0.4-0.2-0.6c-0.1-0.1-0.3-0.2-0.5-0.2S884.9,471.2,884.7,471.3z" />
                </g>
                <g enableBackground="new    ">
                  <g>
                    <defs>
                      <rect id="SVGID_767_" x="830.4" y="468.2" width="9.8" height="6.4" />
                    </defs>
                    <clipPath id="SVGID_768_">
                      <use xlinkHref="#SVGID_767_" overflow="visible" />
                    </clipPath>
                    <g clipPath="url(#SVGID_768_)">
                      <g opacity="0.87">
                        <path fill="#ADADAD" d="M832.7,471.1c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.2-0.1,0.4-0.1c0.2,0,0.4,0.1,0.6,0.2
                              c0.2,0.2,0.2,0.4,0.2,0.6v1.6h-0.5v-1.5c0-0.2,0-0.3-0.1-0.4c-0.1-0.1-0.2-0.1-0.4-0.1c-0.1,0-0.2,0-0.3,0.1
                              c-0.1,0.1-0.1,0.2-0.1,0.4v1.5h-0.5v-1.5c0-0.4-0.2-0.5-0.5-0.5c-0.2,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.1,0.2-0.1,0.4v1.4h-0.5
                              v-2.4h0.5v0.2c0.2-0.2,0.4-0.3,0.6-0.3C832.3,470.7,832.6,470.8,832.7,471.1z" />
                        <path fill="#ADADAD" d="M836.7,470.9c0.1,0.2,0.2,0.4,0.2,0.7v1.5h-0.5v-0.3c-0.1,0.1-0.2,0.2-0.3,0.3
                              c-0.2,0.1-0.3,0.1-0.5,0.1c-0.2,0-0.4-0.1-0.6-0.2c-0.1-0.1-0.2-0.3-0.2-0.5c0-0.3,0.1-0.5,0.3-0.6c0.2-0.1,0.5-0.2,0.8-0.2
                              l0.5,0v-0.1c0-0.3-0.2-0.5-0.5-0.5c-0.1,0-0.3,0-0.3,0.1c-0.1,0.1-0.2,0.2-0.2,0.3l-0.5,0c0.1-0.3,0.2-0.5,0.4-0.6
                              c0.2-0.1,0.4-0.2,0.7-0.2C836.3,470.7,836.6,470.8,836.7,470.9z M836,472.1c-0.4,0-0.6,0.2-0.6,0.4c0,0.1,0,0.2,0.1,0.2
                              c0.1,0.1,0.2,0.1,0.3,0.1c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.2-0.3,0.2-0.5V472L836,472.1z" />
                        <path fill="#ADADAD" d="M839.5,471.1c0.2,0.2,0.3,0.5,0.3,0.9c0,0.3-0.1,0.6-0.3,0.9c-0.2,0.2-0.5,0.4-0.8,0.4
                              c-0.3,0-0.5-0.1-0.7-0.4v1.2h-0.5v-3.3h0.5v0.3c0.2-0.2,0.4-0.3,0.7-0.3C839.1,470.7,839.3,470.8,839.5,471.1z M838.2,471.4
                              c-0.1,0.1-0.1,0.3-0.1,0.6v0c0,0.2,0.1,0.5,0.2,0.6c0.1,0.1,0.2,0.2,0.4,0.2c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.1-0.3,0.1-0.6
                              s0-0.5-0.1-0.6c-0.1-0.2-0.3-0.2-0.5-0.2C838.4,471.1,838.3,471.2,838.2,471.4z" />
                      </g>
                    </g>
                  </g>
                  <rect x="830.1" y="468.5" fill="none" width="12.6" height="5.8" />
                </g>
              </g>
            </svg>
          </div>
          <div className="layer" id="layer4">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox={fgViewBox} enableBackground="new 0 0 1366 768" xmlSpace="preserve">
              <g filter="url(#color-filter)" >
                <rect x="626.3" y="464.2" fill="#CACACA" width="126.3" height="180.5" />
                <rect x="773.1" y="478.9" fill="#EFEFEF" width="126.3" height="143.9" />
                <rect x="626.5" y="218.7" fill="#EFEFEF" width="126.1" height="136" />
                <g>
                  <defs>
                    <path id="SVGID_769_" d="M824.5,483.2h40.8c1.6,0,2.9,1.3,2.9,2.9c0,1.6-1.3,2.9-2.9,2.9h-40.8c-1.6,0-2.9-1.3-2.9-2.9
                          C821.6,484.5,822.9,483.2,824.5,483.2z" />
                  </defs>
                  <clipPath id="SVGID_770_">
                    <use xlinkHref="#SVGID_769_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_770_)">
                    <defs>
                      <rect id="SVGID_771_" x="773.1" y="420.4" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_772_">
                      <use xlinkHref="#SVGID_771_" overflow="visible" />
                    </clipPath>
                    <rect x="820.1" y="481.7" clipPath="url(#SVGID_772_)" fill="#C0C0C0" width="49.7" height="8.9" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_773_" d="M824.5,512h40.8c1.6,0,2.9,1.3,2.9,2.9s-1.3,2.9-2.9,2.9h-40.8c-1.6,0-2.9-1.3-2.9-2.9
                          S822.9,512,824.5,512z" />
                  </defs>
                  <clipPath id="SVGID_774_">
                    <use xlinkHref="#SVGID_773_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_774_)">
                    <defs>
                      <rect id="SVGID_775_" x="773.1" y="420.4" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_776_">
                      <use xlinkHref="#SVGID_775_" overflow="visible" />
                    </clipPath>
                    <rect x="820.1" y="510.5" clipPath="url(#SVGID_776_)" fill="#C0C0C0" width="49.7" height="8.9" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_777_" d="M823.3,490.9h48.1c0.9,0,1.7,0.8,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7h-48.1c-0.9,0-1.7-0.8-1.7-1.7
                          C821.6,491.7,822.4,490.9,823.3,490.9z" />
                  </defs>
                  <clipPath id="SVGID_778_">
                    <use xlinkHref="#SVGID_777_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_778_)">
                    <defs>
                      <rect id="SVGID_779_" x="773.1" y="420.4" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_780_">
                      <use xlinkHref="#SVGID_779_" overflow="visible" />
                    </clipPath>
                    <rect x="820.1" y="489.4" clipPath="url(#SVGID_780_)" fill="#D6D6D6" width="54.6" height="6.4" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_781_" d="M823.3,519.7h48.1c0.9,0,1.7,0.8,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7h-48.1c-0.9,0-1.7-0.8-1.7-1.7
                          C821.6,520.5,822.4,519.7,823.3,519.7z" />
                  </defs>
                  <clipPath id="SVGID_782_">
                    <use xlinkHref="#SVGID_781_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_782_)">
                    <defs>
                      <rect id="SVGID_783_" x="773.1" y="420.4" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_784_">
                      <use xlinkHref="#SVGID_783_" overflow="visible" />
                    </clipPath>
                    <rect x="820.1" y="518.2" clipPath="url(#SVGID_784_)" fill="#D6D6D6" width="54.6" height="6.4" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_785_" d="M823.3,495.2h48.1c0.9,0,1.7,0.8,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7h-48.1c-0.9,0-1.7-0.8-1.7-1.7
                          C821.6,495.9,822.4,495.2,823.3,495.2z" />
                  </defs>
                  <clipPath id="SVGID_786_">
                    <use xlinkHref="#SVGID_785_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_786_)">
                    <defs>
                      <rect id="SVGID_787_" x="773.1" y="420.4" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_788_">
                      <use xlinkHref="#SVGID_787_" overflow="visible" />
                    </clipPath>
                    <rect x="820.1" y="493.7" clipPath="url(#SVGID_788_)" fill="#D6D6D6" width="54.6" height="6.4" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_789_" d="M823.3,524h48.1c0.9,0,1.7,0.8,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7h-48.1c-0.9,0-1.7-0.8-1.7-1.7
                          C821.6,524.8,822.4,524,823.3,524z" />
                  </defs>
                  <clipPath id="SVGID_790_">
                    <use xlinkHref="#SVGID_789_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_790_)">
                    <defs>
                      <rect id="SVGID_791_" x="773.1" y="420.4" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_792_">
                      <use xlinkHref="#SVGID_791_" overflow="visible" />
                    </clipPath>
                    <rect x="820.1" y="522.5" clipPath="url(#SVGID_792_)" fill="#D6D6D6" width="54.6" height="6.4" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_793_" d="M823.3,499.8h37.1c0.9,0,1.7,0.8,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7h-37.1c-0.9,0-1.7-0.8-1.7-1.7
                          C821.6,500.5,822.4,499.8,823.3,499.8z" />
                  </defs>
                  <clipPath id="SVGID_794_">
                    <use xlinkHref="#SVGID_793_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_794_)">
                    <defs>
                      <rect id="SVGID_795_" x="773.1" y="420.4" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_796_">
                      <use xlinkHref="#SVGID_795_" overflow="visible" />
                    </clipPath>
                    <rect x="820.1" y="498.3" clipPath="url(#SVGID_796_)" fill="#D6D6D6" width="43.5" height="6.4" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_797_" d="M823.3,528.6h37.1c0.9,0,1.7,0.8,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7h-37.1c-0.9,0-1.7-0.8-1.7-1.7
                          C821.6,529.4,822.4,528.6,823.3,528.6z" />
                  </defs>
                  <clipPath id="SVGID_798_">
                    <use xlinkHref="#SVGID_797_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_798_)">
                    <defs>
                      <rect id="SVGID_799_" x="773.1" y="420.4" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_800_">
                      <use xlinkHref="#SVGID_799_" overflow="visible" />
                    </clipPath>
                    <rect x="820.1" y="527.1" clipPath="url(#SVGID_800_)" fill="#D6D6D6" width="43.5" height="6.4" />
                  </g>
                </g>
                <line fill="none" stroke="#CACACA" strokeMiterlimit="10" x1="899.3" y1="507.6" x2="777.7" y2="507.6" />
                <line fill="none" stroke="#CACACA" strokeMiterlimit="10" x1="899.3" y1="536.4" x2="777.7" y2="536.4" />
                <g>
                  <defs>
                    <polygon id="SVGID_801_"
                      points="889.8,492.7 890.3,492.3 892.3,494.3 890.3,496.3 889.8,495.8 891.4,494.3 			" />
                  </defs>
                  <clipPath id="SVGID_802_">
                    <use xlinkHref="#SVGID_801_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_802_)">
                    <defs>
                      <rect id="SVGID_803_" x="864.4" y="488.1" width="32.8" height="12.6" />
                    </defs>
                    <clipPath id="SVGID_804_">
                      <use xlinkHref="#SVGID_803_" overflow="visible" />
                    </clipPath>
                    <rect x="888.3" y="490.8" opacity="0.25" clipPath="url(#SVGID_804_)" width="5.5" height="7" />
                  </g>
                </g>
                <g>
                  <defs>
                    <polygon id="SVGID_805_"
                      points="889.8,521.6 890.3,521.1 892.3,523.1 890.3,525.1 889.8,524.6 891.4,523.1 			" />
                  </defs>
                  <clipPath id="SVGID_806_">
                    <use xlinkHref="#SVGID_805_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_806_)">
                    <defs>
                      <rect id="SVGID_807_" x="864.4" y="517" width="32.8" height="12.6" />
                    </defs>
                    <clipPath id="SVGID_808_">
                      <use xlinkHref="#SVGID_807_" overflow="visible" />
                    </clipPath>
                    <rect x="888.3" y="519.6" opacity="0.25" clipPath="url(#SVGID_808_)" width="5.5" height="7" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_809_" d="M824.5,540.9h40.8c1.6,0,2.9,1.3,2.9,2.9s-1.3,2.9-2.9,2.9h-40.8c-1.6,0-2.9-1.3-2.9-2.9
                          S822.9,540.9,824.5,540.9z" />
                  </defs>
                  <clipPath id="SVGID_810_">
                    <use xlinkHref="#SVGID_809_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_810_)">
                    <defs>
                      <rect id="SVGID_811_" x="773.1" y="420.4" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_812_">
                      <use xlinkHref="#SVGID_811_" overflow="visible" />
                    </clipPath>
                    <rect x="820.1" y="539.3" clipPath="url(#SVGID_812_)" fill="#C0C0C0" width="49.7" height="8.9" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_813_" d="M823.3,548.5h48.1c0.9,0,1.7,0.8,1.7,1.7s-0.8,1.7-1.7,1.7h-48.1c-0.9,0-1.7-0.8-1.7-1.7
                          S822.4,548.5,823.3,548.5z" />
                  </defs>
                  <clipPath id="SVGID_814_">
                    <use xlinkHref="#SVGID_813_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_814_)">
                    <defs>
                      <rect id="SVGID_815_" x="773.1" y="420.4" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_816_">
                      <use xlinkHref="#SVGID_815_" overflow="visible" />
                    </clipPath>
                    <rect x="820.1" y="547" clipPath="url(#SVGID_816_)" fill="#D6D6D6" width="54.6" height="6.4" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_817_" d="M823.3,552.8h48.1c0.9,0,1.7,0.8,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7h-48.1c-0.9,0-1.7-0.8-1.7-1.7
                          C821.6,553.6,822.4,552.8,823.3,552.8z" />
                  </defs>
                  <clipPath id="SVGID_818_">
                    <use xlinkHref="#SVGID_817_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_818_)">
                    <defs>
                      <rect id="SVGID_819_" x="773.1" y="420.4" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_820_">
                      <use xlinkHref="#SVGID_819_" overflow="visible" />
                    </clipPath>
                    <rect x="820.1" y="551.3" clipPath="url(#SVGID_820_)" fill="#D6D6D6" width="54.6" height="6.4" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_821_" d="M823.3,557.4h37.1c0.9,0,1.7,0.8,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7h-37.1c-0.9,0-1.7-0.8-1.7-1.7
                          C821.6,558.2,822.4,557.4,823.3,557.4z" />
                  </defs>
                  <clipPath id="SVGID_822_">
                    <use xlinkHref="#SVGID_821_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_822_)">
                    <defs>
                      <rect id="SVGID_823_" x="773.1" y="420.4" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_824_">
                      <use xlinkHref="#SVGID_823_" overflow="visible" />
                    </clipPath>
                    <rect x="820.1" y="555.9" clipPath="url(#SVGID_824_)" fill="#D6D6D6" width="43.5" height="6.4" />
                  </g>
                </g>
                <line fill="none" stroke="#CACACA" strokeMiterlimit="10" x1="899.3" y1="565.2" x2="777.7" y2="565.2" />
                <g>
                  <defs>
                    <polygon id="SVGID_825_"
                      points="889.8,550.4 890.3,549.9 892.3,551.9 890.3,553.9 889.8,553.4 891.4,551.9 			" />
                  </defs>
                  <clipPath id="SVGID_826_">
                    <use xlinkHref="#SVGID_825_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_826_)">
                    <defs>
                      <rect id="SVGID_827_" x="864.4" y="545.8" width="32.8" height="12.6" />
                    </defs>
                    <clipPath id="SVGID_828_">
                      <use xlinkHref="#SVGID_827_" overflow="visible" />
                    </clipPath>
                    <rect x="888.3" y="548.4" opacity="0.25" clipPath="url(#SVGID_828_)" width="5.5" height="7" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_829_" d="M824.5,569.7h40.8c1.6,0,2.9,1.3,2.9,2.9s-1.3,2.9-2.9,2.9h-40.8c-1.6,0-2.9-1.3-2.9-2.9
                          S822.9,569.7,824.5,569.7z" />
                  </defs>
                  <clipPath id="SVGID_830_">
                    <use xlinkHref="#SVGID_829_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_830_)">
                    <defs>
                      <rect id="SVGID_831_" x="773.1" y="420.4" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_832_">
                      <use xlinkHref="#SVGID_831_" overflow="visible" />
                    </clipPath>
                    <rect x="820.1" y="568.1" clipPath="url(#SVGID_832_)" fill="#C0C0C0" width="49.7" height="8.9" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_833_" d="M823.3,577.3h48.1c0.9,0,1.7,0.8,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7h-48.1c-0.9,0-1.7-0.8-1.7-1.7
                          C821.6,578.1,822.4,577.3,823.3,577.3z" />
                  </defs>
                  <clipPath id="SVGID_834_">
                    <use xlinkHref="#SVGID_833_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_834_)">
                    <defs>
                      <rect id="SVGID_835_" x="773.1" y="420.4" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_836_">
                      <use xlinkHref="#SVGID_835_" overflow="visible" />
                    </clipPath>
                    <rect x="820.1" y="575.8" clipPath="url(#SVGID_836_)" fill="#D6D6D6" width="54.6" height="6.4" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_837_" d="M823.3,581.6h48.1c0.9,0,1.7,0.8,1.7,1.7s-0.8,1.7-1.7,1.7h-48.1c-0.9,0-1.7-0.8-1.7-1.7
                          S822.4,581.6,823.3,581.6z" />
                  </defs>
                  <clipPath id="SVGID_838_">
                    <use xlinkHref="#SVGID_837_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_838_)">
                    <defs>
                      <rect id="SVGID_839_" x="773.1" y="420.4" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_840_">
                      <use xlinkHref="#SVGID_839_" overflow="visible" />
                    </clipPath>
                    <rect x="820.1" y="580.1" clipPath="url(#SVGID_840_)" fill="#D6D6D6" width="54.6" height="6.4" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_841_" d="M823.3,586.2h37.1c0.9,0,1.7,0.8,1.7,1.7s-0.8,1.7-1.7,1.7h-37.1c-0.9,0-1.7-0.8-1.7-1.7
                          S822.4,586.2,823.3,586.2z" />
                  </defs>
                  <clipPath id="SVGID_842_">
                    <use xlinkHref="#SVGID_841_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_842_)">
                    <defs>
                      <rect id="SVGID_843_" x="773.1" y="420.4" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_844_">
                      <use xlinkHref="#SVGID_843_" overflow="visible" />
                    </clipPath>
                    <rect x="820.1" y="584.7" clipPath="url(#SVGID_844_)" fill="#D6D6D6" width="43.5" height="6.4" />
                  </g>
                </g>
                <line fill="none" stroke="#CACACA" strokeMiterlimit="10" x1="899.3" y1="594" x2="777.7" y2="594" />
                <g>
                  <defs>
                    <polygon id="SVGID_845_"
                      points="889.8,579.2 890.3,578.7 892.3,580.7 890.3,582.7 889.8,582.2 891.4,580.7 			" />
                  </defs>
                  <clipPath id="SVGID_846_">
                    <use xlinkHref="#SVGID_845_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_846_)">
                    <defs>
                      <rect id="SVGID_847_" x="864.4" y="574.6" width="32.8" height="12.6" />
                    </defs>
                    <clipPath id="SVGID_848_">
                      <use xlinkHref="#SVGID_847_" overflow="visible" />
                    </clipPath>
                    <rect x="888.3" y="577.2" opacity="0.25" clipPath="url(#SVGID_848_)" width="5.5" height="7" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_849_" d="M824.5,598.5h40.8c1.6,0,2.9,1.3,2.9,2.9c0,1.6-1.3,2.9-2.9,2.9h-40.8c-1.6,0-2.9-1.3-2.9-2.9
                          C821.6,599.8,822.9,598.5,824.5,598.5z" />
                  </defs>
                  <clipPath id="SVGID_850_">
                    <use xlinkHref="#SVGID_849_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_850_)">
                    <defs>
                      <rect id="SVGID_851_" x="773.1" y="420.4" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_852_">
                      <use xlinkHref="#SVGID_851_" overflow="visible" />
                    </clipPath>
                    <rect x="820.1" y="596.9" clipPath="url(#SVGID_852_)" fill="#C0C0C0" width="49.7" height="8.9" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_853_" d="M823.3,606.1h48.1c0.9,0,1.7,0.8,1.7,1.7s-0.8,1.7-1.7,1.7h-48.1c-0.9,0-1.7-0.8-1.7-1.7
                          S822.4,606.1,823.3,606.1z" />
                  </defs>
                  <clipPath id="SVGID_854_">
                    <use xlinkHref="#SVGID_853_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_854_)">
                    <defs>
                      <rect id="SVGID_855_" x="773.1" y="420.4" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_856_">
                      <use xlinkHref="#SVGID_855_" overflow="visible" />
                    </clipPath>
                    <rect x="820.1" y="604.6" clipPath="url(#SVGID_856_)" fill="#D6D6D6" width="54.6" height="6.4" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_857_" d="M823.3,610.4h48.1c0.9,0,1.7,0.8,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7h-48.1c-0.9,0-1.7-0.8-1.7-1.7
                          C821.6,611.2,822.4,610.4,823.3,610.4z" />
                  </defs>
                  <clipPath id="SVGID_858_">
                    <use xlinkHref="#SVGID_857_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_858_)">
                    <defs>
                      <rect id="SVGID_859_" x="773.1" y="420.4" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_860_">
                      <use xlinkHref="#SVGID_859_" overflow="visible" />
                    </clipPath>
                    <rect x="820.1" y="608.9" clipPath="url(#SVGID_860_)" fill="#D6D6D6" width="54.6" height="6.4" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_861_" d="M823.3,615h37.1c0.9,0,1.7,0.8,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7h-37.1c-0.9,0-1.7-0.8-1.7-1.7
                          C821.6,615.8,822.4,615,823.3,615z" />
                  </defs>
                  <clipPath id="SVGID_862_">
                    <use xlinkHref="#SVGID_861_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_862_)">
                    <defs>
                      <rect id="SVGID_863_" x="773.1" y="420.4" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_864_">
                      <use xlinkHref="#SVGID_863_" overflow="visible" />
                    </clipPath>
                    <rect x="820.1" y="613.5" clipPath="url(#SVGID_864_)" fill="#D6D6D6" width="43.5" height="6.4" />
                  </g>
                </g>
                <g>
                  <defs>
                    <polygon id="SVGID_865_"
                      points="889.8,608 890.3,607.5 892.3,609.5 890.3,611.5 889.8,611.1 891.4,609.5 			" />
                  </defs>
                  <clipPath id="SVGID_866_">
                    <use xlinkHref="#SVGID_865_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_866_)">
                    <defs>
                      <rect id="SVGID_867_" x="864.4" y="603.4" width="32.8" height="12.6" />
                    </defs>
                    <clipPath id="SVGID_868_">
                      <use xlinkHref="#SVGID_867_" overflow="visible" />
                    </clipPath>
                    <rect x="888.3" y="606" opacity="0.25" clipPath="url(#SVGID_868_)" width="5.5" height="7" />
                  </g>
                </g>
                <line fill="none" stroke="#CACACA" strokeMiterlimit="10" x1="899.3" y1="622.8" x2="777.7" y2="622.8" />
                <g enableBackground="new    ">
                  <g>
                    <defs>
                      <rect id="SVGID_869_" x="830.4" y="482.9" width="34.6" height="5.8" />
                    </defs>
                    <clipPath id="SVGID_870_">
                      <use xlinkHref="#SVGID_869_" overflow="visible" />
                    </clipPath>
                    <g clipPath="url(#SVGID_870_)">
                      <defs>
                        <rect id="SVGID_871_" x="830.7" y="482.6" width="31.6" height="6.4" />
                      </defs>
                      <clipPath id="SVGID_872_">
                        <use xlinkHref="#SVGID_871_" overflow="visible" />
                      </clipPath>
                      <g clipPath="url(#SVGID_872_)">
                        <g opacity="0.87">
                          <path fill="#ADADAD" d="M833,485.4c0.1,0.2,0.2,0.4,0.2,0.7v1.5h-0.5v-0.3c-0.1,0.1-0.2,0.2-0.3,0.3c-0.2,0.1-0.3,0.1-0.5,0.1
                                c-0.2,0-0.4-0.1-0.6-0.2c-0.1-0.1-0.2-0.3-0.2-0.5c0-0.3,0.1-0.5,0.3-0.6c0.2-0.1,0.5-0.2,0.8-0.2l0.5,0V486
                                c0-0.3-0.2-0.5-0.5-0.5c-0.1,0-0.3,0-0.3,0.1c-0.1,0.1-0.2,0.2-0.2,0.3l-0.5,0c0.1-0.3,0.2-0.5,0.4-0.6
                                c0.2-0.1,0.4-0.2,0.7-0.2C832.6,485.1,832.9,485.2,833,485.4z M832.2,486.5c-0.4,0-0.6,0.2-0.6,0.4c0,0.1,0,0.2,0.1,0.2
                                c0.1,0.1,0.2,0.1,0.3,0.1c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.2-0.3,0.2-0.5v-0.1L832.2,486.5z" />
                          <path fill="#ADADAD" d="M834.5,485.2h0.5v0.4h-0.5v1.3c0,0.1,0,0.1,0,0.1c0,0,0.1,0,0.1,0h0.3v0.4h-0.4
                                c-0.2,0-0.4-0.1-0.5-0.2c-0.1-0.1-0.1-0.2-0.1-0.4v-1.3h-0.4v-0.4h0.4v-0.6l0.5-0.2V485.2z" />
                          <path fill="#ADADAD" d="M836.2,485.2h0.5v0.4h-0.5v1.3c0,0.1,0,0.1,0,0.1c0,0,0.1,0,0.1,0h0.3v0.4h-0.4
                                c-0.2,0-0.4-0.1-0.5-0.2c-0.1-0.1-0.1-0.2-0.1-0.4v-1.3h-0.4v-0.4h0.4v-0.6l0.5-0.2V485.2z" />
                          <path fill="#ADADAD" d="M838.5,485.1v0.5c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.3-0.2,0.5v1.3h-0.5
                                v-2.4h0.5v0.3c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.2-0.1,0.4-0.1C838.4,485.1,838.5,485.1,838.5,485.1z" />
                          <path fill="#ADADAD" d="M840.7,485.4c0.1,0.2,0.2,0.4,0.2,0.7v1.5h-0.5v-0.3c-0.1,0.1-0.2,0.2-0.3,0.3
                                c-0.2,0.1-0.3,0.1-0.5,0.1c-0.2,0-0.4-0.1-0.6-0.2c-0.1-0.1-0.2-0.3-0.2-0.5c0-0.3,0.1-0.5,0.3-0.6c0.2-0.1,0.5-0.2,0.8-0.2
                                l0.5,0V486c0-0.3-0.2-0.5-0.5-0.5c-0.1,0-0.3,0-0.3,0.1c-0.1,0.1-0.2,0.2-0.2,0.3l-0.5,0c0.1-0.3,0.2-0.5,0.4-0.6
                                c0.2-0.1,0.4-0.2,0.7-0.2C840.3,485.1,840.5,485.2,840.7,485.4z M839.9,486.5c-0.4,0-0.6,0.2-0.6,0.4c0,0.1,0,0.2,0.1,0.2
                                c0.1,0.1,0.2,0.1,0.3,0.1c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.2-0.3,0.2-0.5v-0.1L839.9,486.5z" />
                          <path fill="#ADADAD" d="M843.3,485.3c0.2,0.1,0.3,0.4,0.4,0.7h-0.5c0-0.2-0.1-0.3-0.2-0.3c-0.1-0.1-0.2-0.1-0.4-0.1
                                c-0.2,0-0.3,0.1-0.5,0.2c-0.1,0.1-0.2,0.3-0.2,0.6c0,0.3,0,0.5,0.2,0.6c0.1,0.1,0.3,0.2,0.5,0.2c0.3,0,0.5-0.2,0.6-0.5h0.5
                                c-0.1,0.3-0.2,0.6-0.4,0.7c-0.2,0.2-0.4,0.2-0.7,0.2c-0.4,0-0.7-0.1-0.9-0.4c-0.2-0.2-0.3-0.5-0.3-0.9c0-0.4,0.1-0.7,0.3-0.9
                                c0.2-0.2,0.5-0.4,0.9-0.4C842.8,485.1,843.1,485.2,843.3,485.3z" />
                          <path fill="#ADADAD" d="M844.8,485.2h0.5v0.4h-0.5v1.3c0,0.1,0,0.1,0,0.1c0,0,0.1,0,0.1,0h0.3v0.4h-0.4
                                c-0.2,0-0.4-0.1-0.5-0.2c-0.1-0.1-0.1-0.2-0.1-0.4v-1.3h-0.4v-0.4h0.4v-0.6l0.5-0.2V485.2z" />
                          <path fill="#ADADAD"
                            d="M846.3,484.3c0.1,0.1,0.1,0.1,0.1,0.2c0,0.1,0,0.2-0.1,0.3c-0.1,0.1-0.2,0.1-0.3,0.1s-0.2,0-0.3-0.1
                                c-0.1-0.1-0.1-0.2-0.1-0.3c0-0.1,0-0.2,0.1-0.2s0.2-0.1,0.3-0.1S846.3,484.2,846.3,484.3z M846.3,485.2v2.4h-0.5v-2.4H846.3z" />
                          <path fill="#ADADAD" d="M849,485.4c0.2,0.2,0.3,0.5,0.3,0.9c0,0.4-0.1,0.7-0.3,0.9c-0.2,0.2-0.5,0.4-0.9,0.4
                                c-0.4,0-0.7-0.1-0.9-0.4c-0.2-0.2-0.3-0.5-0.3-0.9c0-0.4,0.1-0.7,0.3-0.9c0.2-0.2,0.5-0.4,0.9-0.4
                                C848.4,485.1,848.7,485.2,849,485.4z M847.6,485.8c-0.1,0.1-0.2,0.3-0.2,0.6c0,0.2,0,0.4,0.2,0.6c0.1,0.2,0.3,0.3,0.5,0.3
                                c0.2,0,0.4-0.1,0.5-0.3c0.1-0.2,0.2-0.3,0.2-0.6c0-0.2-0.1-0.4-0.2-0.6c-0.1-0.2-0.3-0.3-0.5-0.3
                                C847.9,485.5,847.7,485.6,847.6,485.8z" />
                          <path fill="#ADADAD"
                            d="M851.9,486.1v1.5h-0.5v-1.4c0-0.4-0.2-0.6-0.5-0.6c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.2,0.2-0.2,0.4v1.4
                                h-0.5v-2.4h0.5v0.3c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.2-0.1,0.4-0.1C851.6,485.1,851.9,485.4,851.9,486.1z" />
                          <path fill="#ADADAD" d="M854.7,485.2h0.5v0.4h-0.5v1.3c0,0.1,0,0.1,0,0.1c0,0,0.1,0,0.1,0h0.3v0.4h-0.4
                                c-0.2,0-0.4-0.1-0.5-0.2c-0.1-0.1-0.1-0.2-0.1-0.4v-1.3h-0.4v-0.4h0.4v-0.6l0.5-0.2V485.2z" />
                          <path fill="#ADADAD"
                            d="M856.2,484.3c0.1,0.1,0.1,0.1,0.1,0.2c0,0.1,0,0.2-0.1,0.3c-0.1,0.1-0.2,0.1-0.3,0.1s-0.2,0-0.3-0.1
                                c-0.1-0.1-0.1-0.2-0.1-0.3c0-0.1,0-0.2,0.1-0.2s0.2-0.1,0.3-0.1S856.1,484.2,856.2,484.3z M856.2,485.2v2.4h-0.5v-2.4H856.2z" />
                          <path fill="#ADADAD" d="M857.6,485.2h0.5v0.4h-0.5v1.3c0,0.1,0,0.1,0,0.1c0,0,0.1,0,0.1,0h0.3v0.4h-0.4
                                c-0.2,0-0.4-0.1-0.5-0.2c-0.1-0.1-0.1-0.2-0.1-0.4v-1.3h-0.4v-0.4h0.4v-0.6l0.5-0.2V485.2z" />
                          <path fill="#ADADAD" d="M859.1,484.2v3.3h-0.5v-3.3H859.1z" />
                          <path fill="#ADADAD" d="M861.6,485.5c0.2,0.2,0.3,0.6,0.3,1h-1.8c0,0.2,0.1,0.4,0.2,0.5c0.1,0.1,0.2,0.2,0.4,0.2
                                c0.2,0,0.3,0,0.4-0.1c0.1-0.1,0.1-0.2,0.2-0.3h0.5c-0.1,0.2-0.2,0.4-0.3,0.6c-0.2,0.2-0.5,0.3-0.8,0.3c-0.4,0-0.6-0.1-0.8-0.3
                                c-0.2-0.2-0.3-0.5-0.3-0.9c0-0.4,0.1-0.6,0.3-0.9c0.2-0.2,0.5-0.4,0.8-0.4C861.1,485.1,861.4,485.2,861.6,485.5z M860.3,485.7
                                c-0.1,0.1-0.2,0.2-0.2,0.4h1.2c0-0.4-0.3-0.6-0.6-0.6C860.6,485.5,860.4,485.6,860.3,485.7z" />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
                <g opacity="0.87">
                  <path fill="#8A8A8A" d="M832.1,492.5c0.1,0.1,0.1,0.2,0.1,0.4v1H832v-0.2c-0.1,0.1-0.1,0.1-0.2,0.2c-0.1,0-0.2,0.1-0.4,0.1
                        c-0.2,0-0.3,0-0.4-0.1c-0.1-0.1-0.1-0.2-0.1-0.3c0-0.2,0.1-0.3,0.2-0.4c0.1-0.1,0.3-0.1,0.5-0.1l0.3,0v-0.1c0-0.2-0.1-0.3-0.3-0.3
                        c-0.1,0-0.2,0-0.2,0.1c-0.1,0-0.1,0.1-0.1,0.2l-0.3,0c0-0.2,0.1-0.3,0.3-0.4c0.1-0.1,0.3-0.1,0.5-0.1
                        C831.8,492.3,832,492.4,832.1,492.5z M831.6,493.2c-0.3,0-0.4,0.1-0.4,0.3c0,0.1,0,0.1,0.1,0.1c0,0,0.1,0.1,0.2,0.1
                        c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.3v-0.1L831.6,493.2z" />
                  <path fill="#8A8A8A" d="M833.1,492.4h0.4v0.3h-0.4v0.9c0,0,0,0.1,0,0.1c0,0,0,0,0.1,0h0.2v0.3h-0.3c-0.1,0-0.2,0-0.3-0.1
                        c-0.1-0.1-0.1-0.2-0.1-0.3v-0.9h-0.3v-0.3h0.3V492l0.3-0.1V492.4z" />
                  <path fill="#8A8A8A" d="M834.3,492.4h0.4v0.3h-0.4v0.9c0,0,0,0.1,0,0.1c0,0,0,0,0.1,0h0.2v0.3h-0.3c-0.1,0-0.2,0-0.3-0.1
                        c-0.1-0.1-0.1-0.2-0.1-0.3v-0.9h-0.3v-0.3h0.3V492l0.3-0.1V492.4z" />
                  <path fill="#8A8A8A" d="M835.8,492.4v0.3c-0.1,0-0.2,0-0.2,0c-0.1,0-0.2,0-0.2,0.1c-0.1,0.1-0.1,0.2-0.1,0.3v0.8h-0.3v-1.6h0.3
                        v0.2c0-0.1,0.1-0.1,0.2-0.2c0.1-0.1,0.2-0.1,0.3-0.1C835.7,492.3,835.8,492.3,835.8,492.4z" />
                  <path fill="#8A8A8A" d="M837.3,492.5c0.1,0.1,0.1,0.2,0.1,0.4v1h-0.3v-0.2c-0.1,0.1-0.1,0.1-0.2,0.2c-0.1,0-0.2,0.1-0.4,0.1
                        c-0.2,0-0.3,0-0.4-0.1c-0.1-0.1-0.1-0.2-0.1-0.3c0-0.2,0.1-0.3,0.2-0.4c0.1-0.1,0.3-0.1,0.5-0.1l0.3,0v-0.1c0-0.2-0.1-0.3-0.3-0.3
                        c-0.1,0-0.2,0-0.2,0.1c-0.1,0-0.1,0.1-0.1,0.2l-0.3,0c0-0.2,0.1-0.3,0.3-0.4c0.1-0.1,0.3-0.1,0.5-0.1
                        C837,492.3,837.1,492.4,837.3,492.5z M836.7,493.2c-0.3,0-0.4,0.1-0.4,0.3c0,0.1,0,0.1,0.1,0.1s0.1,0.1,0.2,0.1
                        c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.3v-0.1L836.7,493.2z" />
                  <path fill="#8A8A8A" d="M839,492.5c0.1,0.1,0.2,0.2,0.2,0.4h-0.3c0-0.1-0.1-0.2-0.1-0.2c-0.1,0-0.2-0.1-0.3-0.1
                        c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.4c0,0.2,0,0.3,0.1,0.4c0.1,0.1,0.2,0.1,0.3,0.1c0.2,0,0.4-0.1,0.4-0.3h0.3
                        c0,0.2-0.1,0.4-0.2,0.5c-0.1,0.1-0.3,0.2-0.5,0.2c-0.2,0-0.4-0.1-0.6-0.2c-0.1-0.2-0.2-0.4-0.2-0.6c0-0.2,0.1-0.4,0.2-0.6
                        c0.1-0.2,0.3-0.2,0.6-0.2C838.7,492.3,838.8,492.4,839,492.5z" />
                  <path fill="#8A8A8A" d="M840,492.4h0.4v0.3H840v0.9c0,0,0,0.1,0,0.1c0,0,0,0,0.1,0h0.2v0.3H840c-0.1,0-0.2,0-0.3-0.1
                        c-0.1-0.1-0.1-0.2-0.1-0.3v-0.9h-0.3v-0.3h0.3V492l0.3-0.1V492.4z" />
                  <path fill="#8A8A8A" d="M841,491.8c0,0,0.1,0.1,0.1,0.2s0,0.1-0.1,0.2c0,0-0.1,0.1-0.2,0.1s-0.1,0-0.2-0.1c0,0-0.1-0.1-0.1-0.2
                        s0-0.1,0.1-0.2s0.1-0.1,0.2-0.1S841,491.8,841,491.8z M841,492.4v1.6h-0.3v-1.6H841z" />
                  <path fill="#8A8A8A" d="M842.8,492.6c0.1,0.2,0.2,0.4,0.2,0.6c0,0.2-0.1,0.4-0.2,0.6c-0.1,0.2-0.3,0.2-0.6,0.2
                        c-0.2,0-0.4-0.1-0.6-0.2c-0.1-0.2-0.2-0.4-0.2-0.6c0-0.2,0.1-0.4,0.2-0.6c0.1-0.2,0.3-0.2,0.6-0.2
                        C842.4,492.3,842.6,492.4,842.8,492.6z M841.8,492.8c-0.1,0.1-0.1,0.2-0.1,0.4s0,0.3,0.1,0.4c0.1,0.1,0.2,0.2,0.3,0.2
                        c0.1,0,0.3-0.1,0.3-0.2c0.1-0.1,0.1-0.2,0.1-0.4c0-0.2,0-0.3-0.1-0.4c-0.1-0.1-0.2-0.2-0.3-0.2C842,492.6,841.9,492.7,841.8,492.8
                        z" />
                  <path fill="#8A8A8A" d="M844.7,493v1h-0.4V493c0-0.3-0.1-0.4-0.4-0.4c-0.1,0-0.2,0-0.2,0.1c-0.1,0.1-0.1,0.2-0.1,0.3v1h-0.3v-1.6
                        h0.3v0.2c0.1-0.1,0.1-0.1,0.2-0.2c0.1,0,0.2-0.1,0.3-0.1C844.5,492.3,844.7,492.6,844.7,493z" />
                  <path fill="#8A8A8A" d="M847.6,491.7v2.2h-0.3v-0.2c-0.1,0.1-0.3,0.2-0.5,0.2c-0.2,0-0.4-0.1-0.6-0.2c-0.1-0.2-0.2-0.4-0.2-0.6
                        c0-0.2,0.1-0.4,0.2-0.6c0.1-0.2,0.3-0.2,0.5-0.2c0.2,0,0.3,0.1,0.5,0.3v-0.9H847.6z M846.5,492.8c-0.1,0.1-0.1,0.2-0.1,0.4
                        s0,0.3,0.1,0.4c0.1,0.1,0.2,0.2,0.3,0.2c0.1,0,0.2-0.1,0.3-0.2c0.1-0.1,0.1-0.2,0.1-0.4v0c0-0.2,0-0.3-0.1-0.4
                        c-0.1-0.1-0.2-0.1-0.3-0.1C846.7,492.6,846.5,492.7,846.5,492.8z" />
                  <path fill="#8A8A8A" d="M849.2,492.6c0.1,0.2,0.2,0.4,0.2,0.7h-1.2c0,0.1,0.1,0.3,0.1,0.3c0.1,0.1,0.2,0.1,0.3,0.1
                        c0.1,0,0.2,0,0.3-0.1c0.1,0,0.1-0.1,0.1-0.2h0.3c0,0.1-0.1,0.3-0.2,0.4c-0.1,0.1-0.3,0.2-0.5,0.2c-0.2,0-0.4-0.1-0.6-0.2
                        c-0.1-0.2-0.2-0.4-0.2-0.6c0-0.2,0.1-0.4,0.2-0.6c0.1-0.2,0.3-0.2,0.6-0.2C848.9,492.3,849.1,492.4,849.2,492.6z M848.3,492.7
                        c-0.1,0.1-0.1,0.2-0.1,0.3h0.8c0-0.3-0.2-0.4-0.4-0.4C848.5,492.6,848.4,492.7,848.3,492.7z" />
                  <path fill="#8A8A8A" d="M850.9,492.8h-0.3c0-0.1-0.1-0.1-0.1-0.2c-0.1,0-0.1,0-0.2,0c-0.1,0-0.2,0-0.2,0c-0.1,0-0.1,0.1-0.1,0.1
                        c0,0,0,0.1,0.1,0.1c0.1,0,0.2,0.1,0.3,0.1c0.2,0,0.3,0.1,0.4,0.1c0.1,0.1,0.2,0.2,0.2,0.3c0,0.3-0.2,0.5-0.7,0.5
                        c-0.4,0-0.7-0.2-0.7-0.6h0.3c0,0.1,0.1,0.2,0.1,0.2c0.1,0,0.1,0.1,0.3,0.1c0.2,0,0.4-0.1,0.4-0.2c0-0.1,0-0.1-0.1-0.2
                        c0,0-0.2-0.1-0.3-0.1c-0.2,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.2-0.2-0.3c0-0.1,0.1-0.3,0.2-0.3c0.1-0.1,0.3-0.1,0.5-0.1
                        C850.7,492.3,850.9,492.5,850.9,492.8z" />
                  <path fill="#8A8A8A" d="M852.5,492.5c0.1,0.1,0.2,0.2,0.2,0.4h-0.3c0-0.1-0.1-0.2-0.1-0.2c-0.1,0-0.2-0.1-0.3-0.1
                        c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.4c0,0.2,0,0.3,0.1,0.4c0.1,0.1,0.2,0.1,0.3,0.1c0.2,0,0.4-0.1,0.4-0.3h0.3
                        c0,0.2-0.1,0.4-0.2,0.5c-0.1,0.1-0.3,0.2-0.5,0.2c-0.2,0-0.4-0.1-0.6-0.2c-0.1-0.2-0.2-0.4-0.2-0.6c0-0.2,0.1-0.4,0.2-0.6
                        c0.1-0.2,0.3-0.2,0.6-0.2C852.2,492.3,852.4,492.4,852.5,492.5z" />
                  <path fill="#8A8A8A" d="M853.9,492.4v0.3c-0.1,0-0.2,0-0.2,0c-0.1,0-0.2,0-0.2,0.1c-0.1,0.1-0.1,0.2-0.1,0.3v0.8H853v-1.6h0.3v0.2
                        c0-0.1,0.1-0.1,0.2-0.2c0.1-0.1,0.2-0.1,0.3-0.1C853.8,492.3,853.9,492.3,853.9,492.4z" />
                  <path fill="#8A8A8A" d="M854.5,491.8c0,0,0.1,0.1,0.1,0.2s0,0.1-0.1,0.2c0,0-0.1,0.1-0.2,0.1s-0.1,0-0.2-0.1c0,0-0.1-0.1-0.1-0.2
                        s0-0.1,0.1-0.2s0.1-0.1,0.2-0.1S854.5,491.8,854.5,491.8z M854.5,492.4v1.6h-0.3v-1.6H854.5z" />
                  <path fill="#8A8A8A" d="M856.3,492.6c0.1,0.2,0.2,0.3,0.2,0.6c0,0.2-0.1,0.4-0.2,0.6c-0.1,0.2-0.3,0.2-0.5,0.2
                        c-0.2,0-0.3-0.1-0.5-0.3v0.8H855v-2.2h0.3v0.2c0.1-0.1,0.3-0.2,0.5-0.2C856,492.3,856.2,492.4,856.3,492.6z M855.4,492.8
                        c-0.1,0.1-0.1,0.2-0.1,0.4v0c0,0.2,0,0.3,0.1,0.4c0.1,0.1,0.2,0.1,0.3,0.1c0.2,0,0.3-0.1,0.3-0.2c0.1-0.1,0.1-0.2,0.1-0.4
                        s0-0.3-0.1-0.4c-0.1-0.1-0.2-0.2-0.3-0.2C855.6,492.6,855.5,492.7,855.4,492.8z" />
                  <path fill="#8A8A8A" d="M857.3,492.4h0.4v0.3h-0.4v0.9c0,0,0,0.1,0,0.1c0,0,0,0,0.1,0h0.2v0.3h-0.3c-0.1,0-0.2,0-0.3-0.1
                        c-0.1-0.1-0.1-0.2-0.1-0.3v-0.9h-0.3v-0.3h0.3V492l0.3-0.1V492.4z" />
                  <path fill="#8A8A8A"
                    d="M858.3,491.8c0,0,0.1,0.1,0.1,0.2s0,0.1-0.1,0.2s-0.1,0.1-0.2,0.1c-0.1,0-0.1,0-0.2-0.1
                        c0,0-0.1-0.1-0.1-0.2s0-0.1,0.1-0.2c0,0,0.1-0.1,0.2-0.1C858.2,491.7,858.3,491.8,858.3,491.8z M858.3,492.4v1.6H858v-1.6H858.3z" />
                  <path fill="#8A8A8A" d="M860.1,492.6c0.1,0.2,0.2,0.4,0.2,0.6c0,0.2-0.1,0.4-0.2,0.6c-0.1,0.2-0.3,0.2-0.6,0.2
                        c-0.2,0-0.4-0.1-0.6-0.2c-0.1-0.2-0.2-0.4-0.2-0.6c0-0.2,0.1-0.4,0.2-0.6c0.1-0.2,0.3-0.2,0.6-0.2
                        C859.8,492.3,859.9,492.4,860.1,492.6z M859.2,492.8c-0.1,0.1-0.1,0.2-0.1,0.4s0,0.3,0.1,0.4c0.1,0.1,0.2,0.2,0.3,0.2
                        c0.1,0,0.3-0.1,0.3-0.2c0.1-0.1,0.1-0.2,0.1-0.4c0-0.2,0-0.3-0.1-0.4c-0.1-0.1-0.2-0.2-0.3-0.2
                        C859.4,492.6,859.3,492.7,859.2,492.8z" />
                  <path fill="#8A8A8A" d="M862,493v1h-0.4V493c0-0.3-0.1-0.4-0.4-0.4c-0.1,0-0.2,0-0.2,0.1c-0.1,0.1-0.1,0.2-0.1,0.3v1h-0.3v-1.6
                        h0.3v0.2c0.1-0.1,0.1-0.1,0.2-0.2c0.1,0,0.2-0.1,0.3-0.1C861.8,492.3,862,492.6,862,493z" />
                </g>
                <g>
                  <defs>
                    <path id="SVGID_873_"
                      d="M635.1,236.6h50.6c2.2,0,4,1.8,4,4s-1.8,4-4,4h-50.6c-2.2,0-4-1.8-4-4S632.9,236.6,635.1,236.6z" />
                  </defs>
                  <clipPath id="SVGID_874_">
                    <use xlinkHref="#SVGID_873_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_874_)">
                    <defs>
                      <rect id="SVGID_875_" x="626.5" y="175" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_876_">
                      <use xlinkHref="#SVGID_875_" overflow="visible" />
                    </clipPath>
                    <rect x="629.6" y="235.1" clipPath="url(#SVGID_876_)" fill="#CACACA" width="61.6" height="11" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_877_"
                      d="M635.1,259h50.6c2.2,0,4,1.8,4,4s-1.8,4-4,4h-50.6c-2.2,0-4-1.8-4-4S632.9,259,635.1,259z" />
                  </defs>
                  <clipPath id="SVGID_878_">
                    <use xlinkHref="#SVGID_877_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_878_)">
                    <defs>
                      <rect id="SVGID_879_" x="626.5" y="175" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_880_">
                      <use xlinkHref="#SVGID_879_" overflow="visible" />
                    </clipPath>
                    <rect x="629.6" y="257.4" clipPath="url(#SVGID_880_)" fill="#CACACA" width="61.6" height="11" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_881_"
                      d="M724.6,236.6h16.2c2.2,0,4,1.8,4,4s-1.8,4-4,4h-16.2c-2.2,0-4-1.8-4-4S722.4,236.6,724.6,236.6z" />
                  </defs>
                  <clipPath id="SVGID_882_">
                    <use xlinkHref="#SVGID_881_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_882_)">
                    <defs>
                      <rect id="SVGID_883_" x="626.5" y="175" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_884_">
                      <use xlinkHref="#SVGID_883_" overflow="visible" />
                    </clipPath>
                    <rect x="719.1" y="235.1" clipPath="url(#SVGID_884_)" fill="#D6D6D6" width="27.3" height="11" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_885_"
                      d="M724.6,259h16.2c2.2,0,4,1.8,4,4s-1.8,4-4,4h-16.2c-2.2,0-4-1.8-4-4S722.4,259,724.6,259z" />
                  </defs>
                  <clipPath id="SVGID_886_">
                    <use xlinkHref="#SVGID_885_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_886_)">
                    <defs>
                      <rect id="SVGID_887_" x="626.5" y="175" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_888_">
                      <use xlinkHref="#SVGID_887_" overflow="visible" />
                    </clipPath>
                    <rect x="719.1" y="257.4" clipPath="url(#SVGID_888_)" fill="#D6D6D6" width="27.3" height="11" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_889_"
                      d="M635.1,281.4h50.6c2.2,0,4,1.8,4,4s-1.8,4-4,4h-50.6c-2.2,0-4-1.8-4-4S632.9,281.4,635.1,281.4z" />
                  </defs>
                  <clipPath id="SVGID_890_">
                    <use xlinkHref="#SVGID_889_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_890_)">
                    <defs>
                      <rect id="SVGID_891_" x="626.5" y="175" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_892_">
                      <use xlinkHref="#SVGID_891_" overflow="visible" />
                    </clipPath>
                    <rect x="629.6" y="279.8" clipPath="url(#SVGID_892_)" fill="#CACACA" width="61.6" height="11" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_893_" d="M635.1,314.8h50.6c2.2,0,4,1.8,4,4c0,2.2-1.8,4-4,4h-50.6c-2.2,0-4-1.8-4-4
                          C631.1,316.5,632.9,314.8,635.1,314.8z" />
                  </defs>
                  <clipPath id="SVGID_894_">
                    <use xlinkHref="#SVGID_893_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_894_)">
                    <defs>
                      <rect id="SVGID_895_" x="626.5" y="175" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_896_">
                      <use xlinkHref="#SVGID_895_" overflow="visible" />
                    </clipPath>
                    <rect x="629.6" y="313.2" clipPath="url(#SVGID_896_)" fill="#CACACA" width="61.6" height="11" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_897_"
                      d="M635.1,336.8h50.6c2.2,0,4,1.8,4,4s-1.8,4-4,4h-50.6c-2.2,0-4-1.8-4-4S632.9,336.8,635.1,336.8z" />
                  </defs>
                  <clipPath id="SVGID_898_">
                    <use xlinkHref="#SVGID_897_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_898_)">
                    <defs>
                      <rect id="SVGID_899_" x="626.5" y="175" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_900_">
                      <use xlinkHref="#SVGID_899_" overflow="visible" />
                    </clipPath>
                    <rect x="629.6" y="335.3" clipPath="url(#SVGID_900_)" fill="#CACACA" width="61.6" height="11" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_901_" d="M724.6,314.8h16.2c2.2,0,4,1.8,4,4c0,2.2-1.8,4-4,4h-16.2c-2.2,0-4-1.8-4-4
                          C720.6,316.5,722.4,314.8,724.6,314.8z" />
                  </defs>
                  <clipPath id="SVGID_902_">
                    <use xlinkHref="#SVGID_901_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_902_)">
                    <defs>
                      <rect id="SVGID_903_" x="626.5" y="175" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_904_">
                      <use xlinkHref="#SVGID_903_" overflow="visible" />
                    </clipPath>
                    <rect x="719.1" y="313.2" clipPath="url(#SVGID_904_)" fill="#D6D6D6" width="27.3" height="11" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_905_"
                      d="M724.6,336.8h16.2c2.2,0,4,1.8,4,4s-1.8,4-4,4h-16.2c-2.2,0-4-1.8-4-4S722.4,336.8,724.6,336.8z" />
                  </defs>
                  <clipPath id="SVGID_906_">
                    <use xlinkHref="#SVGID_905_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_906_)">
                    <defs>
                      <rect id="SVGID_907_" x="626.5" y="175" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_908_">
                      <use xlinkHref="#SVGID_907_" overflow="visible" />
                    </clipPath>
                    <rect x="719.1" y="335.3" clipPath="url(#SVGID_908_)" fill="#D6D6D6" width="27.3" height="11" />
                  </g>
                </g>
                <g>
                  <defs>
                    <polygon id="SVGID_909_"
                      points="743.3,283.8 743.8,283.4 745.8,285.3 743.8,287.3 743.3,286.9 744.8,285.3 			" />
                  </defs>
                  <clipPath id="SVGID_910_">
                    <use xlinkHref="#SVGID_909_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_910_)">
                    <defs>
                      <rect id="SVGID_911_" x="717.9" y="279.2" width="32.8" height="12.6" />
                    </defs>
                    <clipPath id="SVGID_912_">
                      <use xlinkHref="#SVGID_911_" overflow="visible" />
                    </clipPath>
                    <rect x="741.8" y="281.8" opacity="0.25" clipPath="url(#SVGID_912_)" width="5.5" height="7" />
                  </g>
                </g>
                <g>
                  <path fill="#8E8E8E" d="M642.1,240.1c0.2,0.2,0.3,0.5,0.3,0.9c0,0.3-0.1,0.6-0.3,0.9c-0.2,0.2-0.5,0.4-0.8,0.4
                        c-0.3,0-0.5-0.1-0.7-0.4v1.2h-0.5v-3.3h0.5v0.3c0.2-0.2,0.4-0.3,0.7-0.3C641.6,239.7,641.9,239.8,642.1,240.1z M640.7,240.3
                        c-0.1,0.1-0.1,0.3-0.1,0.6v0c0,0.2,0.1,0.5,0.2,0.6c0.1,0.1,0.2,0.2,0.4,0.2c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.1-0.3,0.1-0.6
                        s0-0.5-0.1-0.6c-0.1-0.2-0.3-0.2-0.5-0.2C641,240.1,640.8,240.2,640.7,240.3z" />
                  <path fill="#8E8E8E" d="M643.4,239.7v1.4c0,0.2,0,0.3,0.1,0.4c0.1,0.1,0.2,0.1,0.4,0.1c0.1,0,0.2-0.1,0.3-0.1
                        c0.1-0.1,0.2-0.2,0.2-0.4v-1.5h0.5v2.4h-0.5v-0.3c-0.2,0.2-0.5,0.4-0.7,0.4c-0.6,0-0.9-0.3-0.9-1v-1.5H643.4z" />
                  <path fill="#8E8E8E" d="M647.4,240.4h-0.5c0-0.1-0.1-0.2-0.2-0.3c-0.1-0.1-0.2-0.1-0.4-0.1c-0.1,0-0.2,0-0.3,0.1
                        c-0.1,0-0.1,0.1-0.1,0.2c0,0.1,0.1,0.1,0.2,0.2c0.1,0,0.2,0.1,0.5,0.1c0.3,0.1,0.5,0.1,0.6,0.2c0.2,0.1,0.3,0.3,0.3,0.5
                        c0,0.5-0.4,0.8-1.1,0.8c-0.7,0-1-0.3-1.1-0.8h0.5c0,0.2,0.1,0.3,0.2,0.3c0.1,0.1,0.2,0.1,0.4,0.1c0.4,0,0.6-0.1,0.6-0.3
                        c0-0.1-0.1-0.2-0.2-0.3c-0.1,0-0.2-0.1-0.5-0.1c-0.3-0.1-0.5-0.1-0.6-0.2c-0.2-0.1-0.3-0.3-0.3-0.5c0-0.2,0.1-0.4,0.3-0.5
                        c0.2-0.1,0.4-0.2,0.7-0.2C647,239.7,647.4,239.9,647.4,240.4z" />
                  <path fill="#8E8E8E" d="M648.5,238.8v1.3c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.2-0.1,0.4-0.1c0.3,0,0.5,0.1,0.6,0.3
                        c0.1,0.2,0.2,0.4,0.2,0.7v1.5h-0.5v-1.4c0-0.2,0-0.4-0.1-0.5c-0.1-0.1-0.2-0.2-0.4-0.2c-0.2,0-0.3,0.1-0.4,0.2
                        c-0.1,0.1-0.1,0.3-0.1,0.5v1.3h-0.5v-3.3H648.5z" />
                  <path fill="#8E8E8E" d="M654.2,240.7v1.5h-0.5v-1.4c0-0.4-0.2-0.6-0.5-0.6c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.2,0.2-0.2,0.4v1.4
                        h-0.5v-2.4h0.5v0.3c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.2-0.1,0.4-0.1C653.9,239.7,654.2,240,654.2,240.7z" />
                  <path fill="#8E8E8E" d="M656.8,240c0.2,0.2,0.3,0.5,0.3,0.9c0,0.4-0.1,0.7-0.3,0.9c-0.2,0.2-0.5,0.4-0.9,0.4
                        c-0.4,0-0.7-0.1-0.9-0.4c-0.2-0.2-0.3-0.5-0.3-0.9c0-0.4,0.1-0.7,0.3-0.9c0.2-0.2,0.5-0.4,0.9-0.4
                        C656.3,239.7,656.5,239.8,656.8,240z M655.4,240.4c-0.1,0.1-0.2,0.3-0.2,0.6c0,0.2,0.1,0.4,0.2,0.6c0.1,0.2,0.3,0.3,0.5,0.3
                        c0.2,0,0.4-0.1,0.5-0.3c0.1-0.2,0.2-0.3,0.2-0.6c0-0.2-0.1-0.4-0.2-0.6c-0.1-0.2-0.3-0.3-0.5-0.3
                        C655.7,240.1,655.5,240.2,655.4,240.4z" />
                  <path fill="#8E8E8E" d="M658.3,239.7h0.5v0.4h-0.5v1.3c0,0.1,0,0.1,0,0.1c0,0,0.1,0,0.1,0h0.3v0.4h-0.4c-0.2,0-0.4-0.1-0.5-0.2
                        c-0.1-0.1-0.1-0.2-0.1-0.4v-1.3h-0.4v-0.4h0.4v-0.6l0.5-0.2V239.7z" />
                  <path fill="#8E8E8E" d="M661.2,240c0.2,0.2,0.3,0.5,0.3,0.9c0,0.4-0.1,0.7-0.3,0.9c-0.2,0.2-0.5,0.4-0.9,0.4
                        c-0.4,0-0.7-0.1-0.9-0.4c-0.2-0.2-0.3-0.5-0.3-0.9c0-0.4,0.1-0.7,0.3-0.9c0.2-0.2,0.5-0.4,0.9-0.4
                        C660.7,239.7,661,239.8,661.2,240z M659.8,240.4c-0.1,0.1-0.2,0.3-0.2,0.6c0,0.2,0.1,0.4,0.2,0.6c0.1,0.2,0.3,0.3,0.5,0.3
                        c0.2,0,0.4-0.1,0.5-0.3c0.1-0.2,0.2-0.3,0.2-0.6c0-0.2-0.1-0.4-0.2-0.6c-0.1-0.2-0.3-0.3-0.5-0.3
                        C660.1,240.1,659.9,240.2,659.8,240.4z" />
                  <path fill="#8E8E8E" d="M663.4,238.8v0.4H663c-0.1,0-0.1,0-0.2,0.1c0,0-0.1,0.1-0.1,0.2v0.2h1.5v2.4h-0.5v-1.9h-0.9v1.9h-0.5v-1.9
                        h-0.5v-0.4h0.5v-0.3c0-0.2,0.1-0.4,0.2-0.5c0.1-0.1,0.3-0.2,0.5-0.2H663.4z" />
                  <path fill="#8E8E8E" d="M666.6,239.9c0.2,0.1,0.3,0.4,0.4,0.7h-0.5c0-0.2-0.1-0.3-0.2-0.3c-0.1-0.1-0.2-0.1-0.4-0.1
                        c-0.2,0-0.3,0.1-0.5,0.2c-0.1,0.1-0.2,0.3-0.2,0.6c0,0.3,0.1,0.5,0.2,0.6c0.1,0.1,0.3,0.2,0.5,0.2c0.3,0,0.5-0.2,0.6-0.5h0.5
                        c-0.1,0.3-0.2,0.6-0.4,0.7c-0.2,0.2-0.4,0.2-0.7,0.2c-0.4,0-0.7-0.1-0.9-0.4c-0.2-0.2-0.3-0.5-0.3-0.9c0-0.4,0.1-0.7,0.3-0.9
                        c0.2-0.2,0.5-0.4,0.9-0.4C666.2,239.7,666.4,239.8,666.6,239.9z" />
                  <path fill="#8E8E8E" d="M669.3,239.9c0.1,0.2,0.2,0.4,0.2,0.7v1.5H669v-0.3c-0.1,0.1-0.2,0.2-0.3,0.3c-0.2,0.1-0.3,0.1-0.5,0.1
                        c-0.2,0-0.4-0.1-0.6-0.2c-0.1-0.1-0.2-0.3-0.2-0.5c0-0.3,0.1-0.5,0.3-0.6c0.2-0.1,0.5-0.2,0.8-0.2l0.5,0v-0.1
                        c0-0.3-0.2-0.5-0.5-0.5c-0.1,0-0.3,0-0.3,0.1c-0.1,0.1-0.2,0.2-0.2,0.3l-0.5,0c0.1-0.3,0.2-0.5,0.4-0.6c0.2-0.1,0.4-0.2,0.7-0.2
                        C668.8,239.7,669.1,239.8,669.3,239.9z M668.5,241.1c-0.4,0-0.6,0.2-0.6,0.4c0,0.1,0,0.2,0.1,0.2c0.1,0.1,0.2,0.1,0.3,0.1
                        c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.2-0.3,0.2-0.5V241L668.5,241.1z" />
                  <path fill="#8E8E8E" d="M670.8,239.7h0.5v0.4h-0.5v1.3c0,0.1,0,0.1,0,0.1c0,0,0.1,0,0.1,0h0.3v0.4h-0.4c-0.2,0-0.4-0.1-0.5-0.2
                        c-0.1-0.1-0.1-0.2-0.1-0.4v-1.3h-0.4v-0.4h0.4v-0.6l0.5-0.2V239.7z" />
                  <path fill="#8E8E8E"
                    d="M672.3,238.9c0.1,0.1,0.1,0.1,0.1,0.2s0,0.2-0.1,0.3s-0.2,0.1-0.3,0.1s-0.2,0-0.3-0.1
                        c-0.1-0.1-0.1-0.2-0.1-0.3s0-0.2,0.1-0.2c0.1-0.1,0.2-0.1,0.3-0.1S672.2,238.8,672.3,238.9z M672.3,239.7v2.4h-0.5v-2.4H672.3z" />
                  <path fill="#8E8E8E" d="M674.9,240c0.2,0.2,0.3,0.5,0.3,0.9c0,0.4-0.1,0.7-0.3,0.9c-0.2,0.2-0.5,0.4-0.9,0.4
                        c-0.4,0-0.7-0.1-0.9-0.4c-0.2-0.2-0.3-0.5-0.3-0.9c0-0.4,0.1-0.7,0.3-0.9c0.2-0.2,0.5-0.4,0.9-0.4
                        C674.4,239.7,674.7,239.8,674.9,240z M673.6,240.4c-0.1,0.1-0.2,0.3-0.2,0.6c0,0.2,0.1,0.4,0.2,0.6c0.1,0.2,0.3,0.3,0.5,0.3
                        c0.2,0,0.4-0.1,0.5-0.3c0.1-0.2,0.2-0.3,0.2-0.6c0-0.2-0.1-0.4-0.2-0.6c-0.1-0.2-0.3-0.3-0.5-0.3
                        C673.8,240.1,673.7,240.2,673.6,240.4z" />
                  <path fill="#8E8E8E" d="M677.8,240.7v1.5h-0.5v-1.4c0-0.4-0.2-0.6-0.5-0.6c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.2,0.2-0.2,0.4v1.4
                        h-0.5v-2.4h0.5v0.3c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.2-0.1,0.4-0.1C677.5,239.7,677.8,240,677.8,240.7z" />
                </g>
                <g>
                  <path fill="#8E8E8E" d="M642.1,261.8c0.2,0.2,0.3,0.5,0.3,0.9c0,0.3-0.1,0.6-0.3,0.9c-0.2,0.2-0.5,0.4-0.8,0.4
                        c-0.3,0-0.5-0.1-0.7-0.4v1.2H640v-3.3h0.5v0.3c0.2-0.2,0.4-0.3,0.7-0.3C641.6,261.4,641.9,261.6,642.1,261.8z M640.7,262.1
                        c-0.1,0.1-0.1,0.3-0.1,0.6v0c0,0.2,0.1,0.5,0.2,0.6c0.1,0.1,0.2,0.2,0.4,0.2c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.1-0.3,0.1-0.6
                        s0-0.5-0.1-0.6c-0.1-0.2-0.3-0.2-0.5-0.2C641,261.9,640.8,261.9,640.7,262.1z" />
                  <path fill="#8E8E8E" d="M644.8,261.8c0.2,0.2,0.3,0.5,0.3,0.9c0,0.4-0.1,0.7-0.3,0.9c-0.2,0.2-0.5,0.4-0.9,0.4
                        c-0.4,0-0.7-0.1-0.9-0.4c-0.2-0.2-0.3-0.5-0.3-0.9c0-0.4,0.1-0.7,0.3-0.9c0.2-0.2,0.5-0.4,0.9-0.4
                        C644.3,261.4,644.6,261.6,644.8,261.8z M643.4,262.1c-0.1,0.1-0.2,0.3-0.2,0.6c0,0.2,0.1,0.4,0.2,0.6c0.1,0.2,0.3,0.3,0.5,0.3
                        c0.2,0,0.4-0.1,0.5-0.3c0.1-0.2,0.2-0.3,0.2-0.6c0-0.2-0.1-0.4-0.2-0.6c-0.1-0.2-0.3-0.3-0.5-0.3
                        C643.7,261.9,643.5,262,643.4,262.1z" />
                  <path fill="#8E8E8E" d="M646.1,260.5v3.3h-0.5v-3.3H646.1z" />
                  <path fill="#8E8E8E"
                    d="M647.3,260.6c0.1,0.1,0.1,0.1,0.1,0.2s0,0.2-0.1,0.3s-0.2,0.1-0.3,0.1s-0.2,0-0.3-0.1
                        c-0.1-0.1-0.1-0.2-0.1-0.3s0-0.2,0.1-0.2c0.1-0.1,0.2-0.1,0.3-0.1S647.3,260.6,647.3,260.6z M647.3,261.5v2.4h-0.5v-2.4H647.3z" />
                  <path fill="#8E8E8E" d="M649.8,261.7c0.2,0.1,0.3,0.4,0.4,0.7h-0.5c0-0.2-0.1-0.3-0.2-0.3c-0.1-0.1-0.2-0.1-0.4-0.1
                        c-0.2,0-0.3,0.1-0.5,0.2c-0.1,0.1-0.2,0.3-0.2,0.6c0,0.3,0.1,0.5,0.2,0.6c0.1,0.1,0.3,0.2,0.5,0.2c0.3,0,0.5-0.2,0.6-0.5h0.5
                        c-0.1,0.3-0.2,0.6-0.4,0.7c-0.2,0.2-0.4,0.2-0.7,0.2c-0.4,0-0.7-0.1-0.9-0.4c-0.2-0.2-0.3-0.5-0.3-0.9c0-0.4,0.1-0.7,0.3-0.9
                        c0.2-0.2,0.5-0.4,0.9-0.4C649.4,261.4,649.6,261.5,649.8,261.7z" />
                  <path fill="#8E8E8E" d="M650.9,261.5l0.6,1.7l0.6-1.7h0.6l-1.3,3.3h-0.6l0.4-1l-0.9-2.3H650.9z" />
                </g>
                <g>
                  <path fill="#8E8E8E" d="M642,284.7c0.1,0.2,0.2,0.4,0.2,0.7v1.5h-0.5v-0.3c-0.1,0.1-0.2,0.2-0.3,0.3c-0.2,0.1-0.3,0.1-0.5,0.1
                        c-0.2,0-0.4-0.1-0.6-0.2c-0.1-0.1-0.2-0.3-0.2-0.5c0-0.3,0.1-0.5,0.3-0.6c0.2-0.1,0.5-0.2,0.8-0.2l0.5,0v-0.1
                        c0-0.3-0.2-0.5-0.5-0.5c-0.1,0-0.3,0-0.3,0.1c-0.1,0.1-0.2,0.2-0.2,0.3l-0.5,0c0.1-0.3,0.2-0.5,0.4-0.6c0.2-0.1,0.4-0.2,0.7-0.2
                        C641.6,284.4,641.8,284.5,642,284.7z M641.2,285.8c-0.4,0-0.6,0.2-0.6,0.4c0,0.1,0,0.2,0.1,0.2c0.1,0.1,0.2,0.1,0.3,0.1
                        c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.2-0.3,0.2-0.5v-0.1L641.2,285.8z" />
                  <path fill="#8E8E8E" d="M643.3,283.5v1.3c0.2-0.3,0.4-0.4,0.7-0.4c0.3,0,0.6,0.1,0.8,0.4c0.2,0.2,0.3,0.5,0.3,0.9
                        c0,0.4-0.1,0.7-0.3,0.9c-0.2,0.2-0.5,0.4-0.8,0.4c-0.3,0-0.6-0.1-0.7-0.3v0.3h-0.5v-3.3H643.3z M643.4,285.1
                        c-0.1,0.1-0.2,0.3-0.2,0.6v0c0,0.2,0,0.4,0.1,0.6c0.1,0.2,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.1-0.3,0.1-0.6
                        s-0.1-0.5-0.1-0.6c-0.1-0.2-0.3-0.2-0.5-0.2C643.7,284.9,643.6,284.9,643.4,285.1z" />
                  <path fill="#8E8E8E" d="M647.5,284.8c0.2,0.2,0.3,0.5,0.3,0.9c0,0.4-0.1,0.7-0.3,0.9c-0.2,0.2-0.5,0.4-0.9,0.4
                        c-0.4,0-0.7-0.1-0.9-0.4c-0.2-0.2-0.3-0.5-0.3-0.9c0-0.4,0.1-0.7,0.3-0.9c0.2-0.2,0.5-0.4,0.9-0.4
                        C647,284.4,647.3,284.5,647.5,284.8z M646.1,285.1c-0.1,0.1-0.2,0.3-0.2,0.6c0,0.2,0.1,0.4,0.2,0.6c0.1,0.2,0.3,0.3,0.5,0.3
                        c0.2,0,0.4-0.1,0.5-0.3c0.1-0.2,0.2-0.3,0.2-0.6c0-0.2-0.1-0.4-0.2-0.6c-0.1-0.2-0.3-0.3-0.5-0.3
                        C646.4,284.9,646.2,284.9,646.1,285.1z" />
                  <path fill="#8E8E8E" d="M648.8,284.5v1.4c0,0.2,0,0.3,0.1,0.4c0.1,0.1,0.2,0.1,0.4,0.1c0.1,0,0.2-0.1,0.3-0.1
                        c0.1-0.1,0.2-0.2,0.2-0.4v-1.5h0.5v2.4h-0.5v-0.3c-0.2,0.2-0.5,0.4-0.7,0.4c-0.6,0-0.9-0.3-0.9-1v-1.5H648.8z" />
                  <path fill="#8E8E8E" d="M651.7,284.5h0.5v0.4h-0.5v1.3c0,0.1,0,0.1,0,0.1c0,0,0.1,0,0.1,0h0.3v0.4h-0.4c-0.2,0-0.4-0.1-0.5-0.2
                        c-0.1-0.1-0.1-0.2-0.1-0.4v-1.3h-0.4v-0.4h0.4v-0.6l0.5-0.2V284.5z" />
                  <path fill="#8E8E8E" d="M654.7,284.5v1.4c0,0.2,0,0.3,0.1,0.4c0.1,0.1,0.2,0.1,0.4,0.1c0.1,0,0.2-0.1,0.3-0.1
                        c0.1-0.1,0.2-0.2,0.2-0.4v-1.5h0.5v2.4h-0.5v-0.3c-0.2,0.2-0.5,0.4-0.7,0.4c-0.6,0-0.9-0.3-0.9-1v-1.5H654.7z" />
                  <path fill="#8E8E8E" d="M658.7,285.2h-0.5c0-0.1-0.1-0.2-0.2-0.3c-0.1-0.1-0.2-0.1-0.4-0.1c-0.1,0-0.2,0-0.3,0.1
                        c-0.1,0-0.1,0.1-0.1,0.2c0,0.1,0.1,0.1,0.2,0.2c0.1,0,0.2,0.1,0.5,0.1c0.3,0.1,0.5,0.1,0.6,0.2c0.2,0.1,0.3,0.3,0.3,0.5
                        c0,0.5-0.4,0.8-1.1,0.8c-0.7,0-1-0.3-1.1-0.8h0.5c0,0.2,0.1,0.3,0.2,0.3c0.1,0.1,0.2,0.1,0.4,0.1c0.4,0,0.6-0.1,0.6-0.3
                        c0-0.1-0.1-0.2-0.2-0.3c-0.1,0-0.2-0.1-0.5-0.1c-0.3-0.1-0.5-0.1-0.6-0.2c-0.2-0.1-0.3-0.3-0.3-0.5c0-0.2,0.1-0.4,0.3-0.5
                        c0.2-0.1,0.4-0.2,0.7-0.2C658.3,284.4,658.7,284.7,658.7,285.2z" />
                </g>
                <g>
                  <path fill="#8E8E8E" d="M641.9,317.7c0.2,0.1,0.3,0.4,0.4,0.7h-0.5c0-0.2-0.1-0.3-0.2-0.3c-0.1-0.1-0.2-0.1-0.4-0.1
                        c-0.2,0-0.3,0.1-0.5,0.2c-0.1,0.1-0.2,0.3-0.2,0.6c0,0.3,0.1,0.5,0.2,0.6c0.1,0.1,0.3,0.2,0.5,0.2c0.3,0,0.5-0.2,0.6-0.5h0.5
                        c-0.1,0.3-0.2,0.6-0.4,0.7c-0.2,0.2-0.4,0.2-0.7,0.2c-0.4,0-0.7-0.1-0.9-0.4c-0.2-0.2-0.3-0.5-0.3-0.9c0-0.4,0.1-0.7,0.3-0.9
                        c0.2-0.2,0.5-0.4,0.9-0.4C641.4,317.5,641.7,317.6,641.9,317.7z" />
                  <path fill="#8E8E8E" d="M643.2,316.6v3.3h-0.5v-3.3H643.2z" />
                  <path fill="#8E8E8E" d="M645.7,317.9c0.2,0.2,0.3,0.6,0.3,1h-1.8c0,0.2,0.1,0.4,0.2,0.5c0.1,0.1,0.2,0.2,0.4,0.2
                        c0.2,0,0.3,0,0.4-0.1c0.1-0.1,0.1-0.2,0.2-0.3h0.5c-0.1,0.2-0.2,0.4-0.3,0.6c-0.2,0.2-0.5,0.3-0.8,0.3c-0.4,0-0.6-0.1-0.8-0.3
                        c-0.2-0.2-0.3-0.5-0.3-0.9c0-0.4,0.1-0.6,0.3-0.9c0.2-0.2,0.5-0.4,0.8-0.4C645.2,317.5,645.5,317.7,645.7,317.9z M644.4,318.1
                        c-0.1,0.1-0.2,0.2-0.2,0.4h1.2c0-0.4-0.3-0.6-0.6-0.6C644.7,318,644.5,318,644.4,318.1z" />
                  <path fill="#8E8E8E" d="M648.3,317.8c0.1,0.2,0.2,0.4,0.2,0.7v1.5H648v-0.3c-0.1,0.1-0.2,0.2-0.3,0.3c-0.2,0.1-0.3,0.1-0.5,0.1
                        c-0.2,0-0.4-0.1-0.6-0.2c-0.1-0.1-0.2-0.3-0.2-0.5c0-0.3,0.1-0.5,0.3-0.6c0.2-0.1,0.5-0.2,0.8-0.2l0.5,0v-0.1
                        c0-0.3-0.2-0.5-0.5-0.5c-0.1,0-0.3,0-0.3,0.1c-0.1,0.1-0.2,0.2-0.2,0.3l-0.5,0c0.1-0.3,0.2-0.5,0.4-0.6c0.2-0.1,0.4-0.2,0.7-0.2
                        C647.9,317.5,648.1,317.6,648.3,317.8z M647.5,318.9c-0.4,0-0.6,0.2-0.6,0.4c0,0.1,0,0.2,0.1,0.2c0.1,0.1,0.2,0.1,0.3,0.1
                        c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.2-0.3,0.2-0.5v-0.1L647.5,318.9z" />
                  <path fill="#8E8E8E" d="M651.2,318.5v1.5h-0.5v-1.4c0-0.4-0.2-0.6-0.5-0.6c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.2,0.2-0.2,0.4v1.4
                        h-0.5v-2.4h0.5v0.3c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.2-0.1,0.4-0.1C650.9,317.5,651.2,317.9,651.2,318.5z" />
                  <path fill="#8E8E8E" d="M653.8,316.6v1.3c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.2-0.1,0.4-0.1c0.3,0,0.5,0.1,0.6,0.3
                        c0.1,0.2,0.2,0.4,0.2,0.7v1.5h-0.5v-1.4c0-0.2,0-0.4-0.1-0.5c-0.1-0.1-0.2-0.2-0.4-0.2c-0.2,0-0.3,0.1-0.4,0.2
                        c-0.1,0.1-0.1,0.3-0.1,0.5v1.3h-0.5v-3.3H653.8z" />
                  <path fill="#8E8E8E"
                    d="M656.5,316.7c0.1,0.1,0.1,0.1,0.1,0.2s0,0.2-0.1,0.3s-0.2,0.1-0.3,0.1s-0.2,0-0.3-0.1
                        c-0.1-0.1-0.1-0.2-0.1-0.3s0-0.2,0.1-0.2c0.1-0.1,0.2-0.1,0.3-0.1S656.5,316.7,656.5,316.7z M656.5,317.6v2.4H656v-2.4H656.5z" />
                  <path fill="#8E8E8E" d="M659.1,318.3h-0.5c0-0.1-0.1-0.2-0.2-0.3c-0.1-0.1-0.2-0.1-0.4-0.1c-0.1,0-0.2,0-0.3,0.1
                        c-0.1,0-0.1,0.1-0.1,0.2c0,0.1,0.1,0.1,0.2,0.2c0.1,0,0.2,0.1,0.5,0.1c0.3,0.1,0.5,0.1,0.6,0.2c0.2,0.1,0.3,0.3,0.3,0.5
                        c0,0.5-0.4,0.8-1.1,0.8c-0.7,0-1-0.3-1.1-0.8h0.5c0,0.2,0.1,0.3,0.2,0.3c0.1,0.1,0.2,0.1,0.4,0.1c0.4,0,0.6-0.1,0.6-0.3
                        c0-0.1-0.1-0.2-0.2-0.3c-0.1,0-0.2-0.1-0.5-0.1c-0.3-0.1-0.5-0.1-0.6-0.2c-0.2-0.1-0.3-0.3-0.3-0.5c0-0.2,0.1-0.4,0.3-0.5
                        c0.2-0.1,0.4-0.2,0.7-0.2C658.7,317.5,659,317.8,659.1,318.3z" />
                  <path fill="#8E8E8E" d="M660.3,317.6h0.5v0.4h-0.5v1.3c0,0.1,0,0.1,0,0.1c0,0,0.1,0,0.1,0h0.3v0.4h-0.4c-0.2,0-0.4-0.1-0.5-0.2
                        c-0.1-0.1-0.1-0.2-0.1-0.4V318h-0.4v-0.4h0.4V317l0.5-0.2V317.6z" />
                  <path fill="#8E8E8E"
                    d="M663.2,317.9c0.2,0.2,0.3,0.5,0.3,0.9c0,0.4-0.1,0.7-0.3,0.9c-0.2,0.2-0.5,0.4-0.9,0.4
                        c-0.4,0-0.7-0.1-0.9-0.4c-0.2-0.2-0.3-0.5-0.3-0.9c0-0.4,0.1-0.7,0.3-0.9c0.2-0.2,0.5-0.4,0.9-0.4
                        C662.7,317.5,663,317.6,663.2,317.9z M661.8,318.2c-0.1,0.1-0.2,0.3-0.2,0.6c0,0.2,0.1,0.4,0.2,0.6c0.1,0.2,0.3,0.3,0.5,0.3
                        c0.2,0,0.4-0.1,0.5-0.3c0.1-0.2,0.2-0.3,0.2-0.6c0-0.2-0.1-0.4-0.2-0.6c-0.1-0.2-0.3-0.3-0.5-0.3C662.1,318,662,318,661.8,318.2z" />
                  <path fill="#8E8E8E" d="M665.4,317.6v0.5c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.3-0.2,0.5v1.3H664v-2.4
                        h0.5v0.3c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.2-0.1,0.4-0.1C665.2,317.5,665.3,317.6,665.4,317.6z" />
                  <path fill="#8E8E8E" d="M666,317.6l0.6,1.7l0.6-1.7h0.6l-1.3,3.3H666l0.4-1l-0.9-2.3H666z" />
                </g>
                <g>
                  <path fill="#8E8E8E" d="M641.8,339.8c0.2,0.1,0.3,0.4,0.4,0.7h-0.5c0-0.2-0.1-0.3-0.2-0.3c-0.1-0.1-0.2-0.1-0.4-0.1
                        c-0.2,0-0.3,0.1-0.5,0.2c-0.1,0.1-0.2,0.3-0.2,0.6c0,0.3,0.1,0.5,0.2,0.6c0.1,0.1,0.3,0.2,0.5,0.2c0.3,0,0.5-0.2,0.6-0.5h0.5
                        c-0.1,0.3-0.2,0.6-0.4,0.7c-0.2,0.2-0.4,0.2-0.7,0.2c-0.4,0-0.7-0.1-0.9-0.4c-0.2-0.2-0.3-0.5-0.3-0.9c0-0.4,0.1-0.7,0.3-0.9
                        c0.2-0.2,0.5-0.4,0.9-0.4C641.4,339.6,641.6,339.7,641.8,339.8z" />
                  <path fill="#8E8E8E" d="M643.1,338.7v1.3c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.2-0.1,0.4-0.1c0.3,0,0.5,0.1,0.6,0.3
                        c0.1,0.2,0.2,0.4,0.2,0.7v1.5h-0.5v-1.4c0-0.2,0-0.4-0.1-0.5c-0.1-0.1-0.2-0.2-0.4-0.2c-0.2,0-0.3,0.1-0.4,0.2
                        c-0.1,0.1-0.1,0.3-0.1,0.5v1.3h-0.5v-3.3H643.1z" />
                  <path fill="#8E8E8E" d="M647.1,339.9c0.1,0.2,0.2,0.4,0.2,0.7v1.5h-0.5v-0.3c-0.1,0.1-0.2,0.2-0.3,0.3c-0.2,0.1-0.3,0.1-0.5,0.1
                        c-0.2,0-0.4-0.1-0.6-0.2c-0.1-0.1-0.2-0.3-0.2-0.5c0-0.3,0.1-0.5,0.3-0.6c0.2-0.1,0.5-0.2,0.8-0.2l0.5,0v-0.1
                        c0-0.3-0.2-0.5-0.5-0.5c-0.1,0-0.3,0-0.3,0.1c-0.1,0.1-0.2,0.2-0.2,0.3l-0.5,0c0.1-0.3,0.2-0.5,0.4-0.6c0.2-0.1,0.4-0.2,0.7-0.2
                        C646.7,339.6,646.9,339.7,647.1,339.9z M646.3,341c-0.4,0-0.6,0.2-0.6,0.4c0,0.1,0,0.2,0.1,0.2c0.1,0.1,0.2,0.1,0.3,0.1
                        c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.2-0.3,0.2-0.5V341L646.3,341z" />
                  <path fill="#8E8E8E" d="M650,340.6v1.5h-0.5v-1.4c0-0.4-0.2-0.6-0.5-0.6c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.2,0.2-0.2,0.4v1.4h-0.5
                        v-2.4h0.5v0.3c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.2-0.1,0.4-0.1C649.7,339.6,650,339.9,650,340.6z" />
                  <path fill="#8E8E8E" d="M652.2,340v-0.3h0.5v2.2c0,0.7-0.4,1.1-1.1,1.1c-0.3,0-0.6-0.1-0.8-0.2c-0.2-0.1-0.3-0.3-0.3-0.6h0.5
                        c0,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.2,0.1,0.4,0.1c0.4,0,0.6-0.2,0.6-0.6v-0.3c-0.2,0.2-0.4,0.4-0.7,0.4c-0.3,0-0.6-0.1-0.8-0.3
                        c-0.2-0.2-0.3-0.5-0.3-0.9c0-0.4,0.1-0.6,0.3-0.9c0.2-0.2,0.5-0.3,0.8-0.3C651.8,339.6,652.1,339.7,652.2,340z M651.2,340.2
                        c-0.1,0.1-0.2,0.3-0.2,0.6c0,0.2,0,0.4,0.1,0.5c0.1,0.2,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.2-0.3,0.2-0.6
                        c0-0.2-0.1-0.4-0.2-0.6c-0.1-0.1-0.3-0.2-0.5-0.2S651.3,340.1,651.2,340.2z" />
                  <path fill="#8E8E8E" d="M655.2,340c0.2,0.2,0.3,0.6,0.3,1h-1.8c0,0.2,0.1,0.4,0.2,0.5c0.1,0.1,0.2,0.2,0.4,0.2
                        c0.2,0,0.3,0,0.4-0.1c0.1-0.1,0.1-0.2,0.2-0.3h0.5c-0.1,0.2-0.2,0.4-0.3,0.6c-0.2,0.2-0.5,0.3-0.8,0.3c-0.4,0-0.6-0.1-0.8-0.3
                        c-0.2-0.2-0.3-0.5-0.3-0.9c0-0.4,0.1-0.6,0.3-0.9c0.2-0.2,0.5-0.4,0.8-0.4C654.7,339.6,655,339.7,655.2,340z M653.9,340.2
                        c-0.1,0.1-0.2,0.2-0.2,0.4h1.2c0-0.4-0.3-0.6-0.6-0.6C654.2,340,654,340.1,653.9,340.2z" />
                  <path fill="#8E8E8E" d="M659.5,340c0.2,0.2,0.3,0.5,0.3,0.9c0,0.3-0.1,0.6-0.3,0.9c-0.2,0.2-0.5,0.4-0.8,0.4
                        c-0.3,0-0.5-0.1-0.7-0.4v1.2h-0.5v-3.3h0.5v0.3c0.2-0.2,0.4-0.3,0.7-0.3C659,339.6,659.3,339.7,659.5,340z M658.1,340.3
                        c-0.1,0.1-0.1,0.3-0.1,0.6v0c0,0.2,0.1,0.5,0.2,0.6c0.1,0.1,0.2,0.2,0.4,0.2c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.1-0.3,0.1-0.6
                        s0-0.5-0.1-0.6c-0.1-0.2-0.3-0.2-0.5-0.2C658.4,340,658.2,340.1,658.1,340.3z" />
                  <path fill="#8E8E8E" d="M662.1,339.9c0.1,0.2,0.2,0.4,0.2,0.7v1.5h-0.5v-0.3c-0.1,0.1-0.2,0.2-0.3,0.3c-0.2,0.1-0.3,0.1-0.5,0.1
                        c-0.2,0-0.4-0.1-0.6-0.2c-0.1-0.1-0.2-0.3-0.2-0.5c0-0.3,0.1-0.5,0.3-0.6c0.2-0.1,0.5-0.2,0.8-0.2l0.5,0v-0.1
                        c0-0.3-0.2-0.5-0.5-0.5c-0.1,0-0.3,0-0.3,0.1c-0.1,0.1-0.2,0.2-0.2,0.3l-0.5,0c0.1-0.3,0.2-0.5,0.4-0.6c0.2-0.1,0.4-0.2,0.7-0.2
                        C661.6,339.6,661.9,339.7,662.1,339.9z M661.3,341c-0.4,0-0.6,0.2-0.6,0.4c0,0.1,0,0.2,0.1,0.2c0.1,0.1,0.2,0.1,0.3,0.1
                        c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.2-0.3,0.2-0.5V341L661.3,341z" />
                  <path fill="#8E8E8E" d="M664.8,340.4h-0.5c0-0.1-0.1-0.2-0.2-0.3c-0.1-0.1-0.2-0.1-0.4-0.1c-0.1,0-0.2,0-0.3,0.1
                        c-0.1,0-0.1,0.1-0.1,0.2c0,0.1,0.1,0.1,0.2,0.2c0.1,0,0.2,0.1,0.5,0.1c0.3,0.1,0.5,0.1,0.6,0.2c0.2,0.1,0.3,0.3,0.3,0.5
                        c0,0.5-0.4,0.8-1.1,0.8c-0.7,0-1-0.3-1.1-0.8h0.5c0,0.2,0.1,0.3,0.2,0.3c0.1,0.1,0.2,0.1,0.4,0.1c0.4,0,0.6-0.1,0.6-0.3
                        c0-0.1-0.1-0.2-0.2-0.3c-0.1,0-0.2-0.1-0.5-0.1c-0.3-0.1-0.5-0.1-0.6-0.2c-0.2-0.1-0.3-0.3-0.3-0.5c0-0.2,0.1-0.4,0.3-0.5
                        c0.2-0.1,0.4-0.2,0.7-0.2C664.4,339.6,664.7,339.8,664.8,340.4z" />
                  <path fill="#8E8E8E" d="M667.2,340.4h-0.5c0-0.1-0.1-0.2-0.2-0.3c-0.1-0.1-0.2-0.1-0.4-0.1c-0.1,0-0.2,0-0.3,0.1
                        c-0.1,0-0.1,0.1-0.1,0.2c0,0.1,0.1,0.1,0.2,0.2c0.1,0,0.2,0.1,0.5,0.1c0.3,0.1,0.5,0.1,0.6,0.2c0.2,0.1,0.3,0.3,0.3,0.5
                        c0,0.5-0.4,0.8-1.1,0.8c-0.7,0-1-0.3-1.1-0.8h0.5c0,0.2,0.1,0.3,0.2,0.3c0.1,0.1,0.2,0.1,0.4,0.1c0.4,0,0.6-0.1,0.6-0.3
                        c0-0.1-0.1-0.2-0.2-0.3c-0.1,0-0.2-0.1-0.5-0.1c-0.3-0.1-0.5-0.1-0.6-0.2c-0.2-0.1-0.3-0.3-0.3-0.5c0-0.2,0.1-0.4,0.3-0.5
                        c0.2-0.1,0.4-0.2,0.7-0.2C666.8,339.6,667.1,339.8,667.2,340.4z" />
                  <path fill="#8E8E8E"
                    d="M668,339.7l0.5,1.8l0.5-1.8h0.5l0.5,1.8l0.5-1.8h0.6l-0.8,2.4h-0.5l-0.5-1.7l-0.5,1.7h-0.5l-0.8-2.4H668z" />
                  <path fill="#8E8E8E" d="M673.2,340c0.2,0.2,0.3,0.5,0.3,0.9c0,0.4-0.1,0.7-0.3,0.9c-0.2,0.2-0.5,0.4-0.9,0.4
                        c-0.4,0-0.7-0.1-0.9-0.4c-0.2-0.2-0.3-0.5-0.3-0.9c0-0.4,0.1-0.7,0.3-0.9c0.2-0.2,0.5-0.4,0.9-0.4
                        C672.7,339.6,673,339.7,673.2,340z M671.8,340.3c-0.1,0.1-0.2,0.3-0.2,0.6c0,0.2,0.1,0.4,0.2,0.6c0.1,0.2,0.3,0.3,0.5,0.3
                        c0.2,0,0.4-0.1,0.5-0.3c0.1-0.2,0.2-0.3,0.2-0.6c0-0.2-0.1-0.4-0.2-0.6c-0.1-0.2-0.3-0.3-0.5-0.3C672.1,340,672,340.1,671.8,340.3
                        z" />
                  <path fill="#8E8E8E" d="M675.4,339.7v0.5c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.3-0.2,0.5v1.3H674v-2.4
                        h0.5v0.3c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.2-0.1,0.4-0.1C675.2,339.6,675.3,339.6,675.4,339.7z" />
                  <path fill="#8E8E8E" d="M677.9,338.7v3.3h-0.5v-0.3c-0.2,0.2-0.4,0.3-0.7,0.3c-0.4,0-0.6-0.1-0.8-0.4c-0.2-0.2-0.3-0.5-0.3-0.9
                        c0-0.3,0.1-0.6,0.3-0.9c0.2-0.2,0.5-0.4,0.8-0.4c0.3,0,0.5,0.1,0.7,0.4v-1.3H677.9z M676.3,340.3c-0.1,0.1-0.1,0.3-0.1,0.6
                        s0,0.5,0.1,0.6c0.1,0.2,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.1-0.3,0.1-0.6v0c0-0.3-0.1-0.5-0.2-0.6
                        c-0.1-0.1-0.3-0.2-0.4-0.2C676.6,340,676.4,340.1,676.3,340.3z" />
                </g>
                <g>
                  <defs>
                    <rect id="SVGID_913_" x="626.5" y="218.5" width="126.3" height="11.6" />
                  </defs>
                  <use xlinkHref="#SVGID_913_" overflow="visible" fillRule="evenodd" clipRule="evenodd" fill="#CACACA" />
                  <clipPath id="SVGID_914_">
                    <use xlinkHref="#SVGID_913_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_914_)">
                    <defs>
                      <rect id="SVGID_915_" x="626.5" y="175" width="126.3" height="224.4" />
                    </defs>
                    <use xlinkHref="#SVGID_915_" overflow="visible" fill="#CACACA" />
                    <clipPath id="SVGID_916_">
                      <use xlinkHref="#SVGID_915_" overflow="visible" />
                    </clipPath>
                    <rect x="625" y="217" clipPath="url(#SVGID_916_)" fill="#CACACA" width="129.3" height="14.7" />
                  </g>
                </g>
                <g>
                  <defs>
                    <rect id="SVGID_917_" x="626.5" y="296.1" width="126.3" height="11.6" />
                  </defs>
                  <use xlinkHref="#SVGID_917_" overflow="visible" fillRule="evenodd" clipRule="evenodd" fill="#CACACA" />
                  <clipPath id="SVGID_918_">
                    <use xlinkHref="#SVGID_917_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_918_)">
                    <defs>
                      <rect id="SVGID_919_" x="626.5" y="175" width="126.3" height="224.4" />
                    </defs>
                    <use xlinkHref="#SVGID_919_" overflow="visible" fill="#CACACA" />
                    <clipPath id="SVGID_920_">
                      <use xlinkHref="#SVGID_919_" overflow="visible" />
                    </clipPath>
                    <rect x="625" y="294.5" clipPath="url(#SVGID_920_)" fill="#CACACA" width="129.3" height="14.7" />
                  </g>
                </g>
                <line fill="none" stroke="#D6D6D6" strokeMiterlimit="10" x1="752.6" y1="252.1" x2="630.9" y2="252.1" />
                <line fill="none" stroke="#D6D6D6" strokeMiterlimit="10" x1="752.6" y1="274.2" x2="630.9" y2="274.2" />
                <line fill="none" stroke="#D6D6D6" strokeMiterlimit="10" x1="752.6" y1="329.9" x2="630.9" y2="329.9" />
                <g>
                  <defs>
                    <path id="SVGID_921_" d="M635.3,297.9h23.9c2.3,0,4.1,1.9,4.1,4.1l0,0c0,2.3-1.9,4.1-4.1,4.1h-23.9c-2.3,0-4.1-1.9-4.1-4.1l0,0
                          C631.1,299.8,633,297.9,635.3,297.9z" />
                  </defs>
                  <clipPath id="SVGID_922_">
                    <use xlinkHref="#SVGID_921_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_922_)">
                    <defs>
                      <rect id="SVGID_923_" x="626.5" y="175" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_924_">
                      <use xlinkHref="#SVGID_923_" overflow="visible" />
                    </clipPath>
                    <rect x="629.6" y="296.4" clipPath="url(#SVGID_924_)" fill="#B1B1B1" width="35.2" height="11.3" />
                  </g>
                </g>
                <g>
                  <path fill="#7A7A7A" d="M642.1,300.9c0.2,0.2,0.3,0.5,0.3,0.9c0,0.3-0.1,0.6-0.3,0.9c-0.2,0.2-0.5,0.4-0.8,0.4
                        c-0.3,0-0.5-0.1-0.7-0.4v1.2h-0.5v-3.3h0.5v0.3c0.2-0.2,0.4-0.3,0.7-0.3C641.7,300.5,641.9,300.7,642.1,300.9z M640.8,301.2
                        c-0.1,0.1-0.1,0.3-0.1,0.6v0c0,0.2,0.1,0.5,0.2,0.6c0.1,0.1,0.2,0.2,0.4,0.2c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.1-0.3,0.1-0.6
                        s0-0.5-0.1-0.6c-0.1-0.2-0.3-0.2-0.5-0.2C641,301,640.9,301,640.8,301.2z" />
                  <path fill="#7A7A7A" d="M644.3,300.6v0.5c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.3-0.2,0.5v1.3h-0.5v-2.4
                        h0.5v0.3c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.2-0.1,0.4-0.1C644.1,300.5,644.2,300.5,644.3,300.6z" />
                  <path fill="#7A7A7A" d="M646.6,300.9c0.2,0.2,0.3,0.5,0.3,0.9c0,0.4-0.1,0.7-0.3,0.9c-0.2,0.2-0.5,0.4-0.9,0.4
                        c-0.4,0-0.7-0.1-0.9-0.4c-0.2-0.2-0.3-0.5-0.3-0.9c0-0.4,0.1-0.7,0.3-0.9c0.2-0.2,0.5-0.4,0.9-0.4
                        C646.1,300.5,646.4,300.6,646.6,300.9z M645.2,301.2c-0.1,0.1-0.2,0.3-0.2,0.6c0,0.2,0.1,0.4,0.2,0.6c0.1,0.2,0.3,0.3,0.5,0.3
                        c0.2,0,0.4-0.1,0.5-0.3c0.1-0.2,0.2-0.3,0.2-0.6c0-0.2-0.1-0.4-0.2-0.6c-0.1-0.2-0.3-0.3-0.5-0.3C645.5,301,645.3,301,645.2,301.2
                        z" />
                  <path fill="#7A7A7A" d="M648.8,299.7v0.4h-0.4c-0.1,0-0.1,0-0.2,0.1c0,0-0.1,0.1-0.1,0.2v0.2h1.5v2.4h-0.5V301h-0.9v1.9h-0.5V301
                        h-0.5v-0.4h0.5v-0.3c0-0.2,0.1-0.4,0.2-0.5c0.1-0.1,0.3-0.2,0.5-0.2H648.8z" />
                  <path fill="#7A7A7A" d="M650.8,299.6v3.3h-0.5v-3.3H650.8z" />
                  <path fill="#7A7A7A" d="M653.3,300.9c0.2,0.2,0.3,0.6,0.3,1h-1.8c0,0.2,0.1,0.4,0.2,0.5c0.1,0.1,0.2,0.2,0.4,0.2
                        c0.2,0,0.3,0,0.4-0.1c0.1-0.1,0.1-0.2,0.2-0.3h0.5c-0.1,0.2-0.2,0.4-0.3,0.6c-0.2,0.2-0.5,0.3-0.8,0.3c-0.4,0-0.6-0.1-0.8-0.3
                        c-0.2-0.2-0.3-0.5-0.3-0.9c0-0.4,0.1-0.6,0.3-0.9c0.2-0.2,0.5-0.4,0.8-0.4C652.8,300.5,653.1,300.7,653.3,300.9z M652,301.1
                        c-0.1,0.1-0.2,0.2-0.2,0.4h1.2c0-0.4-0.3-0.6-0.6-0.6C652.2,301,652.1,301,652,301.1z" />
                </g>
                <g>
                  <defs>
                    <rect id="SVGID_925_" x="773.1" y="478.9" width="44.7" height="28.5" />
                  </defs>
                  <clipPath id="SVGID_926_">
                    <use xlinkHref="#SVGID_925_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_926_)">
                    <defs>
                      <rect id="SVGID_927_" x="773.1" y="478.9" width="44.7" height="28.5" />
                    </defs>
                    <clipPath id="SVGID_928_">
                      <use xlinkHref="#SVGID_927_" overflow="visible" />
                    </clipPath>
                    <rect x="771.5" y="477.4" clipPath="url(#SVGID_928_)" fill="#C0C0C0" width="47.8" height="31.6" />
                  </g>
                </g>
                <g>
                  <defs>
                    <rect id="SVGID_929_" x="773.1" y="478.9" width="44.7" height="28.5" />
                  </defs>
                  <clipPath id="SVGID_930_">
                    <use xlinkHref="#SVGID_929_" overflow="visible" />
                  </clipPath>

                  <line clipPath="url(#SVGID_930_)" fill="none" stroke="#EAEAEA" strokeLinecap="square"
                    strokeMiterlimit="10" x1="780.4" y1="480.9" x2="810.6" y2="503.9" />

                  <line clipPath="url(#SVGID_930_)" fill="none" stroke="#EAEAEA" strokeLinecap="square"
                    strokeMiterlimit="10" x1="810.4" y1="480.5" x2="780.4" y2="504.7" />
                </g>
                <g>
                  <defs>
                    <rect id="SVGID_931_" x="773.1" y="507.8" width="44.7" height="28.5" />
                  </defs>
                  <clipPath id="SVGID_932_">
                    <use xlinkHref="#SVGID_931_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_932_)">
                    <defs>
                      <rect id="SVGID_933_" x="773.1" y="507.8" width="44.7" height="28.5" />
                    </defs>
                    <clipPath id="SVGID_934_">
                      <use xlinkHref="#SVGID_933_" overflow="visible" />
                    </clipPath>
                    <rect x="771.5" y="506.2" clipPath="url(#SVGID_934_)" fill="#C0C0C0" width="47.8" height="31.6" />
                  </g>
                </g>
                <g>
                  <defs>
                    <rect id="SVGID_935_" x="773.1" y="507.8" width="44.7" height="28.5" />
                  </defs>
                  <clipPath id="SVGID_936_">
                    <use xlinkHref="#SVGID_935_" overflow="visible" />
                  </clipPath>

                  <line clipPath="url(#SVGID_936_)" fill="none" stroke="#EAEAEA" strokeLinecap="square"
                    strokeMiterlimit="10" x1="780.4" y1="509.7" x2="810.6" y2="532.8" />

                  <line clipPath="url(#SVGID_936_)" fill="none" stroke="#EAEAEA" strokeLinecap="square"
                    strokeMiterlimit="10" x1="810.4" y1="509.3" x2="780.4" y2="533.5" />
                </g>
                <g>
                  <defs>
                    <rect id="SVGID_937_" x="773.1" y="536.6" width="44.7" height="28.5" />
                  </defs>
                  <clipPath id="SVGID_938_">
                    <use xlinkHref="#SVGID_937_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_938_)">
                    <defs>
                      <rect id="SVGID_939_" x="773.1" y="536.6" width="44.7" height="28.5" />
                    </defs>
                    <clipPath id="SVGID_940_">
                      <use xlinkHref="#SVGID_939_" overflow="visible" />
                    </clipPath>
                    <rect x="771.5" y="535" clipPath="url(#SVGID_940_)" fill="#C0C0C0" width="47.8" height="31.6" />
                  </g>
                </g>
                <g>
                  <defs>
                    <rect id="SVGID_941_" x="773.1" y="536.6" width="44.7" height="28.5" />
                  </defs>
                  <clipPath id="SVGID_942_">
                    <use xlinkHref="#SVGID_941_" overflow="visible" />
                  </clipPath>

                  <line clipPath="url(#SVGID_942_)" fill="none" stroke="#EAEAEA" strokeLinecap="square"
                    strokeMiterlimit="10" x1="780.4" y1="538.5" x2="810.6" y2="561.6" />

                  <line clipPath="url(#SVGID_942_)" fill="none" stroke="#EAEAEA" strokeLinecap="square"
                    strokeMiterlimit="10" x1="810.4" y1="538.1" x2="780.4" y2="562.3" />
                </g>
                <g>
                  <defs>
                    <rect id="SVGID_943_" x="773.1" y="565.4" width="44.7" height="28.5" />
                  </defs>
                  <clipPath id="SVGID_944_">
                    <use xlinkHref="#SVGID_943_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_944_)">
                    <defs>
                      <rect id="SVGID_945_" x="773.1" y="565.4" width="44.7" height="28.5" />
                    </defs>
                    <clipPath id="SVGID_946_">
                      <use xlinkHref="#SVGID_945_" overflow="visible" />
                    </clipPath>
                    <rect x="771.5" y="563.8" clipPath="url(#SVGID_946_)" fill="#C0C0C0" width="47.8" height="31.6" />
                  </g>
                </g>
                <g>
                  <defs>
                    <rect id="SVGID_947_" x="773.1" y="565.4" width="44.7" height="28.5" />
                  </defs>
                  <clipPath id="SVGID_948_">
                    <use xlinkHref="#SVGID_947_" overflow="visible" />
                  </clipPath>

                  <line clipPath="url(#SVGID_948_)" fill="none" stroke="#EAEAEA" strokeLinecap="square"
                    strokeMiterlimit="10" x1="780.4" y1="567.4" x2="810.6" y2="590.4" />

                  <line clipPath="url(#SVGID_948_)" fill="none" stroke="#EAEAEA" strokeLinecap="square"
                    strokeMiterlimit="10" x1="810.4" y1="566.9" x2="780.4" y2="591.1" />
                </g>
                <g>
                  <defs>
                    <rect id="SVGID_949_" x="773.1" y="594.2" width="44.7" height="28.5" />
                  </defs>
                  <clipPath id="SVGID_950_">
                    <use xlinkHref="#SVGID_949_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_950_)">
                    <defs>
                      <rect id="SVGID_951_" x="773.1" y="594.2" width="44.7" height="28.5" />
                    </defs>
                    <clipPath id="SVGID_952_">
                      <use xlinkHref="#SVGID_951_" overflow="visible" />
                    </clipPath>
                    <rect x="771.5" y="592.7" clipPath="url(#SVGID_952_)" fill="#C0C0C0" width="47.8" height="31.6" />
                  </g>
                </g>
                <g>
                  <defs>
                    <rect id="SVGID_953_" x="773.1" y="594.2" width="44.7" height="28.5" />
                  </defs>
                  <clipPath id="SVGID_954_">
                    <use xlinkHref="#SVGID_953_" overflow="visible" />
                  </clipPath>

                  <line clipPath="url(#SVGID_954_)" fill="none" stroke="#EAEAEA" strokeLinecap="square"
                    strokeMiterlimit="10" x1="780.4" y1="596.2" x2="810.6" y2="619.2" />

                  <line clipPath="url(#SVGID_954_)" fill="none" stroke="#EAEAEA" strokeLinecap="square"
                    strokeMiterlimit="10" x1="810.4" y1="595.7" x2="780.4" y2="619.9" />
                </g>
                <g>
                  <defs>
                    <path id="SVGID_955_" d="M781.3,448h107.9c2,0,3.7,1.6,3.7,3.7v4.6c0,2-1.6,3.7-3.7,3.7H781.3c-2,0-3.7-1.6-3.7-3.7v-4.6
                          C777.7,449.6,779.3,448,781.3,448z" />
                  </defs>
                  <clipPath id="SVGID_956_">
                    <use xlinkHref="#SVGID_955_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_956_)">
                    <defs>
                      <rect id="SVGID_957_" x="773.1" y="420.4" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_958_">
                      <use xlinkHref="#SVGID_957_" overflow="visible" />
                    </clipPath>
                    <rect x="776.1" y="446.5" clipPath="url(#SVGID_958_)" fill="#FFFFFF" width="118.3" height="15" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_959_"
                      d="M801.6,450.1h69.3c2.2,0,4,1.8,4,4s-1.8,4-4,4h-69.3c-2.2,0-4-1.8-4-4S799.4,450.1,801.6,450.1z" />
                  </defs>
                  <clipPath id="SVGID_960_">
                    <use xlinkHref="#SVGID_959_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_960_)">
                    <defs>
                      <rect id="SVGID_961_" x="773.1" y="420.4" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_962_">
                      <use xlinkHref="#SVGID_961_" overflow="visible" />
                    </clipPath>
                    <rect x="796" y="448.6" clipPath="url(#SVGID_962_)" fill="#E9E9E9" width="80.3" height="11" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_963_" d="M784.7,454.7c-0.8,0-1.5-0.7-1.5-1.5c0-0.8,0.7-1.5,1.5-1.5c0.8,0,1.5,0.7,1.5,1.5
                          C786.2,454,785.6,454.7,784.7,454.7z M786.7,454.7h-0.3l-0.1-0.1c0.3-0.4,0.5-0.9,0.5-1.4c0-1.2-1-2.2-2.2-2.2s-2.2,1-2.2,2.2
                          c0,1.2,1,2.2,2.2,2.2c0.5,0,1-0.2,1.4-0.5l0.1,0.1v0.3l1.7,1.7l0.5-0.5L786.7,454.7z" />
                  </defs>
                  <clipPath id="SVGID_964_">
                    <use xlinkHref="#SVGID_963_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_964_)">
                    <defs>
                      <rect id="SVGID_965_" x="777.7" y="446.2" width="15.9" height="15.9" />
                    </defs>
                    <clipPath id="SVGID_966_">
                      <use xlinkHref="#SVGID_965_" overflow="visible" />
                    </clipPath>
                    <rect x="781" y="449.5" clipPath="url(#SVGID_966_)" fill="#BCBABA" width="8.9" height="8.9" />
                  </g>
                </g>
                <g>
                  <defs>
                    <rect id="SVGID_967_" x="773.1" y="464.2" width="42.2" height="14.7" />
                  </defs>
                  <use xlinkHref="#SVGID_967_" overflow="visible" fillRule="evenodd" clipRule="evenodd" fill="#C0C0C0" />
                  <clipPath id="SVGID_968_">
                    <use xlinkHref="#SVGID_967_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_968_)">
                    <defs>
                      <rect id="SVGID_969_" x="731.4" y="435" width="125.1" height="224.4" />
                    </defs>
                    <use xlinkHref="#SVGID_969_" overflow="visible" fill="#C0C0C0" />
                    <clipPath id="SVGID_970_">
                      <use xlinkHref="#SVGID_969_" overflow="visible" />
                    </clipPath>
                    <rect x="771.5" y="462.6" clipPath="url(#SVGID_970_)" fill="#C0C0C0" width="45.3" height="17.8" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_971_" d="M780.6,468.8h26.4c1.6,0,2.9,1.3,2.9,2.9s-1.3,2.9-2.9,2.9h-26.4c-1.6,0-2.9-1.3-2.9-2.9
                          S779,468.8,780.6,468.8z" />
                  </defs>
                  <clipPath id="SVGID_972_">
                    <use xlinkHref="#SVGID_971_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_972_)">
                    <defs>
                      <rect id="SVGID_973_" x="773.1" y="420.4" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_974_">
                      <use xlinkHref="#SVGID_973_" overflow="visible" />
                    </clipPath>
                    <rect x="776.1" y="467.3" clipPath="url(#SVGID_974_)" fill="#C0C0C0" width="35.2" height="8.9" />
                  </g>
                </g>
                <g>
                  <defs>
                    <rect id="SVGID_975_" x="828.5" y="451.1" width="17.8" height="5.8" />
                  </defs>
                  <clipPath id="SVGID_976_">
                    <use xlinkHref="#SVGID_975_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_976_)">
                    <defs>
                      <rect id="SVGID_977_" x="828.8" y="450.7" width="14.7" height="6.4" />
                    </defs>
                    <clipPath id="SVGID_978_">
                      <use xlinkHref="#SVGID_977_" overflow="visible" />
                    </clipPath>
                    <g opacity="0.87" clipPath="url(#SVGID_978_)">
                      <path fill="#ADADAD" d="M831.1,454h-0.5c0-0.1-0.1-0.2-0.2-0.3c-0.1,0-0.2-0.1-0.4-0.1c-0.1,0-0.2,0-0.3,0.1
                            c-0.1,0-0.1,0.1-0.1,0.2c0,0.1,0.1,0.1,0.2,0.2c0.1,0,0.2,0.1,0.5,0.1c0.3,0.1,0.5,0.1,0.6,0.2c0.2,0.1,0.3,0.3,0.3,0.5
                            c0,0.5-0.4,0.8-1.1,0.8c-0.7,0-1-0.3-1.1-0.8h0.5c0,0.2,0.1,0.3,0.2,0.3c0.1,0.1,0.2,0.1,0.4,0.1c0.4,0,0.6-0.1,0.6-0.3
                            c0-0.1-0.1-0.2-0.2-0.3c-0.1,0-0.2-0.1-0.5-0.1c-0.3-0.1-0.5-0.1-0.6-0.2c-0.2-0.1-0.3-0.3-0.3-0.5c0-0.2,0.1-0.4,0.3-0.5
                            c0.2-0.1,0.4-0.2,0.7-0.2C830.7,453.2,831,453.5,831.1,454z" />
                      <path fill="#ADADAD" d="M833.5,453.6c0.2,0.2,0.3,0.6,0.3,1H832c0,0.2,0.1,0.4,0.2,0.5c0.1,0.1,0.2,0.2,0.4,0.2
                            c0.2,0,0.3,0,0.4-0.1c0.1-0.1,0.1-0.2,0.2-0.3h0.5c-0.1,0.2-0.2,0.4-0.3,0.6c-0.2,0.2-0.5,0.3-0.8,0.3c-0.4,0-0.6-0.1-0.8-0.3
                            c-0.2-0.2-0.3-0.5-0.3-0.9c0-0.4,0.1-0.6,0.3-0.9c0.2-0.2,0.5-0.4,0.8-0.4C833,453.2,833.3,453.3,833.5,453.6z M832.2,453.8
                            c-0.1,0.1-0.2,0.2-0.2,0.4h1.2c0-0.4-0.3-0.6-0.6-0.6C832.4,453.6,832.3,453.7,832.2,453.8z" />
                      <path fill="#ADADAD" d="M836,453.5c0.1,0.2,0.2,0.4,0.2,0.7v1.5h-0.5v-0.3c-0.1,0.1-0.2,0.2-0.3,0.3c-0.2,0.1-0.3,0.1-0.5,0.1
                            c-0.2,0-0.4-0.1-0.6-0.2c-0.1-0.1-0.2-0.3-0.2-0.5c0-0.3,0.1-0.5,0.3-0.6c0.2-0.1,0.5-0.2,0.8-0.2l0.5,0v-0.1
                            c0-0.3-0.2-0.5-0.5-0.5c-0.1,0-0.3,0-0.3,0.1c-0.1,0.1-0.2,0.2-0.2,0.3l-0.5,0c0.1-0.3,0.2-0.5,0.4-0.6c0.2-0.1,0.4-0.2,0.7-0.2
                            C835.6,453.2,835.9,453.3,836,453.5z M835.3,454.6c-0.4,0-0.6,0.2-0.6,0.4c0,0.1,0,0.2,0.1,0.2c0.1,0.1,0.2,0.1,0.3,0.1
                            c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.2-0.3,0.2-0.5v-0.1L835.3,454.6z" />
                      <path fill="#ADADAD" d="M838.2,453.3v0.5c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.3-0.2,0.5v1.3h-0.5
                            v-2.4h0.5v0.3c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.2-0.1,0.4-0.1C838.1,453.2,838.2,453.2,838.2,453.3z" />
                      <path fill="#ADADAD" d="M840.3,453.4c0.2,0.1,0.3,0.4,0.4,0.7h-0.5c0-0.2-0.1-0.3-0.2-0.3c-0.1-0.1-0.2-0.1-0.4-0.1
                            c-0.2,0-0.3,0.1-0.5,0.2c-0.1,0.1-0.2,0.3-0.2,0.6c0,0.3,0.1,0.5,0.2,0.6c0.1,0.1,0.3,0.2,0.5,0.2c0.3,0,0.5-0.2,0.6-0.5h0.5
                            c-0.1,0.3-0.2,0.6-0.4,0.7c-0.2,0.2-0.4,0.2-0.7,0.2c-0.4,0-0.7-0.1-0.9-0.4c-0.2-0.2-0.3-0.5-0.3-0.9c0-0.4,0.1-0.7,0.3-0.9
                            c0.2-0.2,0.5-0.4,0.9-0.4C839.9,453.2,840.2,453.3,840.3,453.4z" />
                      <path fill="#ADADAD" d="M841.6,452.3v1.3c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.2-0.1,0.4-0.1c0.3,0,0.5,0.1,0.6,0.3
                            c0.1,0.2,0.2,0.4,0.2,0.7v1.5h-0.5v-1.4c0-0.2,0-0.4-0.1-0.5c-0.1-0.1-0.2-0.2-0.4-0.2c-0.2,0-0.3,0.1-0.4,0.2
                            c-0.1,0.1-0.1,0.3-0.1,0.5v1.3h-0.5v-3.3H841.6z" />
                    </g>
                  </g>
                </g>
                <g>
                  <defs>
                    <rect id="SVGID_979_" x="668.3" y="448" width="42.6" height="16.2" />
                  </defs>
                  <use xlinkHref="#SVGID_979_" overflow="visible" fillRule="evenodd" clipRule="evenodd" fill="#C0C0C0" />
                  <clipPath id="SVGID_980_">
                    <use xlinkHref="#SVGID_979_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_980_)">
                    <defs>
                      <rect id="SVGID_981_" x="626.3" y="415.8" width="126.3" height="247.7" />
                    </defs>
                    <use xlinkHref="#SVGID_981_" overflow="visible" fill="#C0C0C0" />
                    <clipPath id="SVGID_982_">
                      <use xlinkHref="#SVGID_981_" overflow="visible" />
                    </clipPath>
                    <rect x="666.8" y="446.3" clipPath="url(#SVGID_982_)" fill="#C0C0C0" width="45.7" height="19.6" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_983_" d="M676,454.1h26.4c1.6,0,2.9,1.3,2.9,2.9s-1.3,2.9-2.9,2.9H676c-1.6,0-2.9-1.3-2.9-2.9
                          S674.3,454.1,676,454.1z" />
                  </defs>
                  <use xlinkHref="#SVGID_983_" overflow="visible" fillRule="evenodd" clipRule="evenodd" fill="#B1B1B1" />
                  <clipPath id="SVGID_984_">
                    <use xlinkHref="#SVGID_983_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_984_)">
                    <defs>
                      <rect id="SVGID_985_" x="626.3" y="420.4" width="126.3" height="224.4" />
                    </defs>
                    <use xlinkHref="#SVGID_985_" overflow="visible" fill="#B1B1B1" />
                    <clipPath id="SVGID_986_">
                      <use xlinkHref="#SVGID_985_" overflow="visible" />
                    </clipPath>
                    <rect x="671.5" y="452.6" clipPath="url(#SVGID_986_)" fill="#B1B1B1" width="35.2" height="8.9" />
                  </g>
                </g>
                <g>
                  <defs>
                    <rect id="SVGID_987_" x="661.9" y="540.2" width="59.2" height="11" />
                  </defs>
                  <clipPath id="SVGID_988_">
                    <use xlinkHref="#SVGID_987_" overflow="visible" />
                  </clipPath>
                  <path clipPath="url(#SVGID_988_)" fill="#ADADAD" d="M666.5,543.4c0.4,0.3,0.6,0.8,0.7,1.4h-0.9c-0.1-0.4-0.2-0.6-0.5-0.8
                        c-0.3-0.2-0.6-0.3-1-0.3c-0.5,0-0.9,0.2-1.2,0.5c-0.3,0.4-0.5,0.9-0.5,1.6c0,0.6,0.1,1.1,0.4,1.5c0.3,0.4,0.8,0.6,1.5,0.6
                        c0.3,0,0.5,0,0.7-0.1c0.2-0.1,0.4-0.1,0.6-0.3v-1.1h-1.4v-0.8h2.3v2.3c-0.3,0.2-0.6,0.4-1,0.5c-0.4,0.1-0.8,0.2-1.3,0.2
                        c-0.9,0-1.5-0.3-2-0.8c-0.5-0.5-0.7-1.2-0.7-2c0-0.8,0.2-1.5,0.7-2c0.5-0.6,1.1-0.8,1.9-0.8C665.5,542.9,666.1,543.1,666.5,543.4z
                        " />
                  <path clipPath="url(#SVGID_988_)" fill="#ADADAD" d="M671.4,545c0.4,0.4,0.5,0.9,0.5,1.5c0,0.6-0.2,1.1-0.5,1.5
                        c-0.4,0.4-0.9,0.6-1.5,0.6c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.5-0.9-0.5-1.5c0-0.6,0.2-1.1,0.5-1.5c0.4-0.4,0.8-0.6,1.4-0.6
                        C670.6,544.5,671.1,544.6,671.4,545z M669.1,545.6c-0.2,0.2-0.3,0.6-0.3,0.9c0,0.4,0.1,0.7,0.3,0.9c0.2,0.3,0.5,0.4,0.8,0.4
                        c0.4,0,0.6-0.1,0.8-0.4c0.2-0.3,0.3-0.6,0.3-0.9c0-0.4-0.1-0.7-0.3-0.9c-0.2-0.3-0.5-0.4-0.8-0.4
                        C669.6,545.2,669.3,545.3,669.1,545.6z" />
                  <path clipPath="url(#SVGID_988_)" fill="#ADADAD" d="M676,545c0.4,0.4,0.5,0.9,0.5,1.5c0,0.6-0.2,1.1-0.5,1.5
                        c-0.4,0.4-0.9,0.6-1.5,0.6c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.5-0.9-0.5-1.5c0-0.6,0.2-1.1,0.5-1.5c0.4-0.4,0.8-0.6,1.4-0.6
                        C675.2,544.5,675.7,544.6,676,545z M673.7,545.6c-0.2,0.2-0.3,0.6-0.3,0.9c0,0.4,0.1,0.7,0.3,0.9c0.2,0.3,0.5,0.4,0.8,0.4
                        c0.4,0,0.6-0.1,0.8-0.4c0.2-0.3,0.3-0.6,0.3-0.9c0-0.4-0.1-0.7-0.3-0.9c-0.2-0.3-0.5-0.4-0.8-0.4
                        C674.2,545.2,673.9,545.3,673.7,545.6z" />
                  <path clipPath="url(#SVGID_988_)" fill="#ADADAD"
                    d="M680.1,545v-0.5h0.9v3.7c0,1.2-0.6,1.9-1.9,1.9c-0.6,0-1-0.1-1.3-0.3
                        c-0.3-0.2-0.5-0.5-0.6-1h0.9c0,0.2,0.1,0.4,0.3,0.5c0.1,0.1,0.4,0.1,0.7,0.1c0.7,0,1-0.4,1-1.1v-0.6c-0.3,0.4-0.7,0.6-1.2,0.6
                        c-0.5,0-1-0.2-1.3-0.5c-0.3-0.4-0.5-0.8-0.5-1.4s0.2-1.1,0.5-1.4c0.3-0.4,0.8-0.6,1.3-0.6C679.5,544.5,679.9,544.6,680.1,545z
                        M678.3,545.5c-0.2,0.2-0.3,0.5-0.3,0.9c0,0.4,0.1,0.7,0.2,0.9c0.2,0.3,0.4,0.4,0.8,0.4c0.3,0,0.6-0.1,0.8-0.3
                        c0.2-0.2,0.3-0.5,0.3-0.9c0-0.4-0.1-0.7-0.3-0.9c-0.2-0.2-0.4-0.3-0.8-0.3C678.8,545.2,678.5,545.3,678.3,545.5z" />
                  <path clipPath="url(#SVGID_988_)" fill="#ADADAD" d="M682.9,542.9v5.6H682v-5.6H682.9z" />
                  <path clipPath="url(#SVGID_988_)" fill="#ADADAD" d="M687.1,545.1c0.3,0.4,0.5,1,0.5,1.7h-3c0,0.4,0.1,0.7,0.3,0.8
                        s0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.2c0.1-0.1,0.2-0.3,0.4-0.5h0.9c-0.1,0.4-0.3,0.7-0.6,0.9c-0.4,0.3-0.8,0.5-1.3,0.5
                        c-0.6,0-1.1-0.2-1.4-0.5c-0.4-0.4-0.6-0.9-0.6-1.5c0-0.6,0.2-1.1,0.5-1.5c0.3-0.4,0.8-0.6,1.4-0.6
                        C686.2,544.5,686.7,544.7,687.1,545.1z M684.9,545.4c-0.2,0.2-0.3,0.4-0.3,0.7h2c-0.1-0.6-0.4-1-1-1
                        C685.3,545.2,685.1,545.2,684.9,545.4z" />
                  <path clipPath="url(#SVGID_988_)" fill="#ADADAD" d="M691.9,543.1l1.9,4.3h0l1.9-4.3h1v5.5h-0.9v-3.8h0l-1.6,3.8h-0.8l-1.6-3.8h0
                        v3.8h-0.9v-5.5H691.9z" />
                  <path clipPath="url(#SVGID_988_)" fill="#ADADAD"
                    d="M700.8,544.9c0.2,0.3,0.4,0.6,0.4,1.1v2.5h-0.8V548
                        c-0.2,0.2-0.3,0.3-0.6,0.5c-0.3,0.1-0.6,0.2-0.9,0.2c-0.4,0-0.7-0.1-1-0.3c-0.2-0.2-0.4-0.5-0.4-0.8c0-0.4,0.2-0.8,0.5-1
                        c0.3-0.2,0.8-0.4,1.4-0.4l0.9,0v-0.2c0-0.5-0.3-0.8-0.9-0.8c-0.2,0-0.4,0-0.6,0.1c-0.2,0.1-0.3,0.3-0.3,0.5l-0.9-0.1
                        c0.1-0.4,0.3-0.8,0.6-1c0.3-0.2,0.7-0.3,1.2-0.3C700.1,544.5,700.5,544.6,700.8,544.9z M699.5,546.7c-0.7,0-1,0.3-1,0.7
                        c0,0.1,0.1,0.3,0.2,0.3c0.1,0.1,0.3,0.1,0.5,0.1c0.3,0,0.6-0.1,0.8-0.3c0.2-0.2,0.4-0.5,0.4-0.8v-0.2L699.5,546.7z" />
                  <path clipPath="url(#SVGID_988_)" fill="#ADADAD"
                    d="M705.5,545.1c0.3,0.4,0.5,0.9,0.5,1.5c0,0.6-0.2,1.1-0.5,1.4
                        c-0.3,0.4-0.8,0.6-1.3,0.6c-0.5,0-0.9-0.2-1.2-0.7v2.1h-0.9v-5.5h0.8v0.4c0.3-0.4,0.7-0.5,1.2-0.5
                        C704.7,544.5,705.1,544.7,705.5,545.1z M703.2,545.6c-0.2,0.2-0.2,0.6-0.2,1v0.1c0,0.4,0.1,0.8,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3
                        c0.4,0,0.7-0.1,0.9-0.4c0.2-0.2,0.2-0.6,0.2-1s-0.1-0.8-0.2-1c-0.2-0.3-0.5-0.4-0.8-0.4C703.6,545.2,703.4,545.3,703.2,545.6z" />
                  <path clipPath="url(#SVGID_988_)" fill="#ADADAD" d="M711.9,543.1l2.1,5.5h-1l-0.5-1.4h-2.3l-0.5,1.4h-1l2.1-5.5H711.9z
                        M712.3,546.4l-0.9-2.4h0l-0.9,2.4H712.3z" />
                  <path clipPath="url(#SVGID_988_)" fill="#ADADAD" d="M716.8,543.1c1.3,0,2,0.6,2,1.7c0,1.1-0.7,1.7-2,1.7h-1.4v2.1h-0.9v-5.5
                        H716.8z M715.4,545.7h1.3c0.4,0,0.7-0.1,0.9-0.2c0.2-0.1,0.3-0.4,0.3-0.7c0-0.3-0.1-0.6-0.3-0.7c-0.2-0.1-0.5-0.2-0.9-0.2h-1.3
                        V545.7z" />
                  <path clipPath="url(#SVGID_988_)" fill="#ADADAD" d="M720.4,543.1v5.5h-0.9v-5.5H720.4z" />
                </g>
                <g>
                  <defs>
                    <rect id="SVGID_989_" x="814.7" y="202.6" width="42.6" height="16.2" />
                  </defs>
                  <use xlinkHref="#SVGID_989_" overflow="visible" fillRule="evenodd" clipRule="evenodd" fill="#CACACA" />
                  <clipPath id="SVGID_990_">
                    <use xlinkHref="#SVGID_989_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_990_)">
                    <defs>
                      <rect id="SVGID_991_" x="773" y="170.4" width="126.3" height="247.7" />
                    </defs>
                    <use xlinkHref="#SVGID_991_" overflow="visible" fill="#CACACA" />
                    <clipPath id="SVGID_992_">
                      <use xlinkHref="#SVGID_991_" overflow="visible" />
                    </clipPath>
                    <rect x="813.2" y="200.9" clipPath="url(#SVGID_992_)" fill="#CACACA" width="45.7" height="19.6" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_993_" d="M822.7,208.7H849c1.6,0,2.9,1.3,2.9,2.9c0,1.6-1.3,2.9-2.9,2.9h-26.4c-1.6,0-2.9-1.3-2.9-2.9
                          C819.8,210,821.1,208.7,822.7,208.7z" />
                  </defs>
                  <clipPath id="SVGID_994_">
                    <use xlinkHref="#SVGID_993_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_994_)">
                    <defs>
                      <rect id="SVGID_995_" x="773" y="175" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_996_">
                      <use xlinkHref="#SVGID_995_" overflow="visible" />
                    </clipPath>
                    <rect x="818.2" y="207.2" clipPath="url(#SVGID_996_)" fill="#B4B4B4" width="35.2" height="8.9" />
                  </g>
                </g>
                <g>
                  <defs>
                    <rect id="SVGID_997_" x="710.2" y="204.1" width="42.6" height="14.7" />
                  </defs>
                  <use xlinkHref="#SVGID_997_" overflow="visible" fillRule="evenodd" clipRule="evenodd" fill="#CACACA" />
                  <clipPath id="SVGID_998_">
                    <use xlinkHref="#SVGID_997_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_998_)">
                    <defs>
                      <rect id="SVGID_999_" x="626.5" y="175" width="126.3" height="224.4" />
                    </defs>
                    <use xlinkHref="#SVGID_999_" overflow="visible" fill="#CACACA" />
                    <clipPath id="SVGID_1000_">
                      <use xlinkHref="#SVGID_999_" overflow="visible" />
                    </clipPath>
                    <rect x="708.7" y="202.6" clipPath="url(#SVGID_1000_)" fill="#CACACA" width="45.7" height="17.8" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_1001_" d="M718.3,208.7h26.4c1.6,0,2.9,1.3,2.9,2.9c0,1.6-1.3,2.9-2.9,2.9h-26.4c-1.6,0-2.9-1.3-2.9-2.9
                          C715.4,210,716.7,208.7,718.3,208.7z" />
                  </defs>
                  <clipPath id="SVGID_1002_">
                    <use xlinkHref="#SVGID_1001_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_1002_)">
                    <defs>
                      <rect id="SVGID_1003_" x="626.5" y="175" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_1004_">
                      <use xlinkHref="#SVGID_1003_" overflow="visible" />
                    </clipPath>
                    <rect x="713.9" y="207.2" clipPath="url(#SVGID_1004_)" fill="#B4B4B4" width="35.2" height="8.9" />
                  </g>
                </g>
                <polygon fillRule="evenodd" clipRule="evenodd" fill="#ECECEC" points="941,270.2 941,282.9 928.3,282.9 928.3,287.2 941,287.2 
                      941,299.9 945.3,299.9 945.3,287.2 958,287.2 958,282.9 945.3,282.9 945.3,270.2 	" />
                <g enableBackground="new    ">
                  <g>
                    <defs>
                      <rect id="SVGID_1005_" x="781.9" y="468.2" width="23.9" height="6.4" />
                    </defs>
                    <clipPath id="SVGID_1006_">
                      <use xlinkHref="#SVGID_1005_" overflow="visible" />
                    </clipPath>
                    <g clipPath="url(#SVGID_1006_)">
                      <g opacity="0.87">
                        <path fill="#ADADAD" d="M784.2,470.9c0.1,0.2,0.2,0.4,0.2,0.7v1.5h-0.5v-0.3c-0.1,0.1-0.2,0.2-0.3,0.3
                              c-0.2,0.1-0.3,0.1-0.5,0.1c-0.2,0-0.4-0.1-0.6-0.2c-0.1-0.1-0.2-0.3-0.2-0.5c0-0.3,0.1-0.5,0.3-0.6c0.2-0.1,0.5-0.2,0.8-0.2
                              l0.5,0v-0.1c0-0.3-0.2-0.5-0.5-0.5c-0.1,0-0.3,0-0.3,0.1c-0.1,0.1-0.2,0.2-0.2,0.3l-0.5,0c0.1-0.3,0.2-0.5,0.4-0.6
                              c0.2-0.1,0.4-0.2,0.7-0.2C783.8,470.7,784,470.8,784.2,470.9z M783.4,472.1c-0.4,0-0.6,0.2-0.6,0.4c0,0.1,0,0.2,0.1,0.2
                              c0.1,0.1,0.2,0.1,0.3,0.1c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.2-0.3,0.2-0.5V472L783.4,472.1z" />
                        <path fill="#ADADAD" d="M785.7,470.7h0.5v0.4h-0.5v1.3c0,0.1,0,0.1,0,0.1c0,0,0.1,0,0.1,0h0.3v0.4h-0.4c-0.2,0-0.4-0.1-0.5-0.2
                              c-0.1-0.1-0.1-0.2-0.1-0.4v-1.3h-0.4v-0.4h0.4v-0.6l0.5-0.2V470.7z" />
                        <path fill="#ADADAD" d="M787.4,470.7h0.5v0.4h-0.5v1.3c0,0.1,0,0.1,0,0.1c0,0,0.1,0,0.1,0h0.3v0.4h-0.4c-0.2,0-0.4-0.1-0.5-0.2
                              c-0.1-0.1-0.1-0.2-0.1-0.4v-1.3h-0.4v-0.4h0.4v-0.6l0.5-0.2V470.7z" />
                        <path fill="#ADADAD" d="M789.7,470.7v0.5c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.3-0.2,0.5v1.3h-0.5
                              v-2.4h0.5v0.3c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.2-0.1,0.4-0.1C789.5,470.7,789.6,470.7,789.7,470.7z" />
                        <path fill="#ADADAD" d="M791.9,470.9c0.1,0.2,0.2,0.4,0.2,0.7v1.5h-0.5v-0.3c-0.1,0.1-0.2,0.2-0.3,0.3
                              c-0.2,0.1-0.3,0.1-0.5,0.1c-0.2,0-0.4-0.1-0.6-0.2c-0.1-0.1-0.2-0.3-0.2-0.5c0-0.3,0.1-0.5,0.3-0.6c0.2-0.1,0.5-0.2,0.8-0.2
                              l0.5,0v-0.1c0-0.3-0.2-0.5-0.5-0.5c-0.1,0-0.3,0-0.3,0.1c-0.1,0.1-0.2,0.2-0.2,0.3l-0.5,0c0.1-0.3,0.2-0.5,0.4-0.6
                              c0.2-0.1,0.4-0.2,0.7-0.2C791.5,470.7,791.7,470.8,791.9,470.9z M791.1,472.1c-0.4,0-0.6,0.2-0.6,0.4c0,0.1,0,0.2,0.1,0.2
                              c0.1,0.1,0.2,0.1,0.3,0.1c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.2-0.3,0.2-0.5V472L791.1,472.1z" />
                        <path fill="#ADADAD" d="M794.5,470.9c0.2,0.1,0.3,0.4,0.4,0.7h-0.5c0-0.2-0.1-0.3-0.2-0.3c-0.1-0.1-0.2-0.1-0.4-0.1
                              c-0.2,0-0.3,0.1-0.5,0.2c-0.1,0.1-0.2,0.3-0.2,0.6c0,0.3,0.1,0.5,0.2,0.6c0.1,0.1,0.3,0.2,0.5,0.2c0.3,0,0.5-0.2,0.6-0.5h0.5
                              c-0.1,0.3-0.2,0.6-0.4,0.7c-0.2,0.2-0.4,0.2-0.7,0.2c-0.4,0-0.7-0.1-0.9-0.4c-0.2-0.2-0.3-0.5-0.3-0.9c0-0.4,0.1-0.7,0.3-0.9
                              c0.2-0.2,0.5-0.4,0.9-0.4C794,470.7,794.3,470.8,794.5,470.9z" />
                        <path fill="#ADADAD" d="M796,470.7h0.5v0.4H796v1.3c0,0.1,0,0.1,0,0.1c0,0,0.1,0,0.1,0h0.3v0.4H796c-0.2,0-0.4-0.1-0.5-0.2
                              c-0.1-0.1-0.1-0.2-0.1-0.4v-1.3H795v-0.4h0.4v-0.6l0.5-0.2V470.7z" />
                        <path fill="#ADADAD"
                          d="M797.5,469.9c0.1,0.1,0.1,0.1,0.1,0.2c0,0.1,0,0.2-0.1,0.3c-0.1,0.1-0.2,0.1-0.3,0.1s-0.2,0-0.3-0.1
                              c-0.1-0.1-0.1-0.2-0.1-0.3c0-0.1,0-0.2,0.1-0.2s0.2-0.1,0.3-0.1S797.4,469.8,797.5,469.9z M797.5,470.7v2.4H797v-2.4H797.5z" />
                        <path fill="#ADADAD" d="M800.1,471c0.2,0.2,0.3,0.5,0.3,0.9c0,0.4-0.1,0.7-0.3,0.9c-0.2,0.2-0.5,0.4-0.9,0.4
                              c-0.4,0-0.7-0.1-0.9-0.4c-0.2-0.2-0.3-0.5-0.3-0.9c0-0.4,0.1-0.7,0.3-0.9c0.2-0.2,0.5-0.4,0.9-0.4
                              C799.6,470.7,799.9,470.8,800.1,471z M798.8,471.4c-0.1,0.1-0.2,0.3-0.2,0.6c0,0.2,0.1,0.4,0.2,0.6c0.1,0.2,0.3,0.3,0.5,0.3
                              c0.2,0,0.4-0.1,0.5-0.3c0.1-0.2,0.2-0.3,0.2-0.6c0-0.2-0.1-0.4-0.2-0.6c-0.1-0.2-0.3-0.3-0.5-0.3
                              C799,471.1,798.9,471.2,798.8,471.4z" />
                        <path fill="#ADADAD" d="M803,471.7v1.5h-0.5v-1.4c0-0.4-0.2-0.6-0.5-0.6c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.2,0.2-0.2,0.4v1.4
                              h-0.5v-2.4h0.5v0.3c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.2-0.1,0.4-0.1C802.7,470.7,803,471,803,471.7z" />
                        <path fill="#ADADAD" d="M805.5,471.4H805c0-0.1-0.1-0.2-0.2-0.3c-0.1,0-0.2-0.1-0.4-0.1c-0.1,0-0.2,0-0.3,0.1
                              c-0.1,0-0.1,0.1-0.1,0.2c0,0.1,0.1,0.1,0.2,0.2c0.1,0,0.2,0.1,0.5,0.1c0.3,0.1,0.5,0.1,0.6,0.2c0.2,0.1,0.3,0.3,0.3,0.5
                              c0,0.5-0.4,0.8-1.1,0.8c-0.7,0-1-0.3-1.1-0.8h0.5c0,0.2,0.1,0.3,0.2,0.3c0.1,0.1,0.2,0.1,0.4,0.1c0.4,0,0.6-0.1,0.6-0.3
                              c0-0.1-0.1-0.2-0.2-0.3c-0.1,0-0.2-0.1-0.5-0.1c-0.3-0.1-0.5-0.1-0.6-0.2c-0.2-0.1-0.3-0.3-0.3-0.5c0-0.2,0.1-0.4,0.3-0.5
                              c0.2-0.1,0.4-0.2,0.7-0.2C805.1,470.7,805.5,470.9,805.5,471.4z" />
                      </g>
                    </g>
                  </g>
                  <rect x="781.6" y="468.5" fill="none" width="27.3" height="5.8" />
                </g>
                <g opacity="0.87">
                  <path fill="#929292" d="M727,211.2h-0.4c0-0.1-0.1-0.2-0.1-0.2c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.2,0-0.3,0.1
                        c-0.1,0-0.1,0.1-0.1,0.2c0,0.1,0.1,0.1,0.2,0.2c0.1,0,0.2,0.1,0.4,0.1c0.2,0.1,0.4,0.1,0.5,0.2c0.2,0.1,0.2,0.3,0.2,0.4
                        c0,0.4-0.3,0.7-0.9,0.7c-0.6,0-0.9-0.2-0.9-0.7h0.4c0,0.1,0.1,0.2,0.1,0.3c0.1,0,0.2,0.1,0.3,0.1c0.3,0,0.5-0.1,0.5-0.3
                        c0-0.1-0.1-0.2-0.2-0.2c-0.1,0-0.2-0.1-0.4-0.1c-0.2-0.1-0.4-0.1-0.5-0.2c-0.2-0.1-0.2-0.2-0.2-0.4c0-0.2,0.1-0.3,0.2-0.4
                        c0.2-0.1,0.4-0.2,0.6-0.2C726.7,210.6,727,210.8,727,211.2z" />
                  <path fill="#929292" d="M729.1,210.9c0.2,0.2,0.2,0.5,0.2,0.9h-1.5c0,0.2,0.1,0.3,0.2,0.4s0.2,0.2,0.4,0.2c0.1,0,0.2,0,0.3-0.1
                        c0.1-0.1,0.1-0.1,0.2-0.3h0.5c0,0.2-0.1,0.4-0.3,0.5c-0.2,0.2-0.4,0.2-0.7,0.2c-0.3,0-0.5-0.1-0.7-0.3c-0.2-0.2-0.3-0.5-0.3-0.8
                        c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.4-0.3,0.7-0.3C728.7,210.6,728.9,210.7,729.1,210.9z M728,211.1c-0.1,0.1-0.1,0.2-0.2,0.4h1.1
                          c0-0.3-0.2-0.5-0.5-0.5C728.2,211,728.1,211,728,211.1z" />
                    <path fill="#929292" d="M730.4,210.6h0.5v0.4h-0.5v1.2c0,0,0,0.1,0,0.1c0,0,0.1,0,0.1,0h0.3v0.4h-0.3c-0.2,0-0.3,0-0.4-0.1
                          c-0.1-0.1-0.1-0.2-0.1-0.4V211h-0.4v-0.4h0.4v-0.5l0.5-0.2V210.6z" />
                    <path fill="#929292" d="M731.8,210.6h0.5v0.4h-0.5v1.2c0,0,0,0.1,0,0.1c0,0,0.1,0,0.1,0h0.3v0.4h-0.3c-0.2,0-0.3,0-0.4-0.1
                          c-0.1-0.1-0.1-0.2-0.1-0.4V211H731v-0.4h0.4v-0.5l0.5-0.2V210.6z" />
                    <path fill="#929292"
                      d="M733.1,209.9c0.1,0.1,0.1,0.1,0.1,0.2s0,0.2-0.1,0.2c-0.1,0.1-0.1,0.1-0.2,0.1s-0.2,0-0.2-0.1
                          c-0.1-0.1-0.1-0.1-0.1-0.2s0-0.2,0.1-0.2c0.1-0.1,0.1-0.1,0.2-0.1S733.1,209.8,733.1,209.9z M733.1,210.6v2.1h-0.5v-2.1H733.1z" />
                    <path fill="#929292" d="M735.5,211.4v1.3h-0.5v-1.2c0-0.3-0.2-0.5-0.5-0.5c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.2,0.2-0.2,0.4v1.2
                          h-0.5v-2.1h0.5v0.2c0.1-0.1,0.2-0.2,0.3-0.2c0.1-0.1,0.2-0.1,0.3-0.1C735.3,210.6,735.5,210.9,735.5,211.4z" />
                    <path fill="#929292" d="M737.5,210.9v-0.3h0.5v1.9c0,0.6-0.3,1-1,1c-0.3,0-0.5-0.1-0.7-0.2c-0.2-0.1-0.2-0.3-0.3-0.5h0.5
                          c0,0.1,0.1,0.2,0.1,0.2c0.1,0,0.2,0.1,0.3,0.1c0.3,0,0.5-0.2,0.5-0.5v-0.3c-0.2,0.2-0.4,0.3-0.6,0.3c-0.3,0-0.5-0.1-0.7-0.3
                          c-0.2-0.2-0.3-0.4-0.3-0.7s0.1-0.6,0.3-0.8c0.2-0.2,0.4-0.3,0.7-0.3C737.1,210.6,737.3,210.7,737.5,210.9z M736.5,211.1
                          c-0.1,0.1-0.1,0.3-0.1,0.5c0,0.2,0,0.3,0.1,0.5c0.1,0.1,0.2,0.2,0.4,0.2c0.2,0,0.3-0.1,0.4-0.2c0.1-0.1,0.1-0.3,0.1-0.5
                          c0-0.2,0-0.4-0.1-0.5c-0.1-0.1-0.2-0.2-0.4-0.2C736.8,211,736.6,211,736.5,211.1z" />
                  </g>
                  <g>
                    <defs>
                      <path id="SVGID_1007_" d="M634,221.6h26.4c1.6,0,2.9,1.3,2.9,2.9c0,1.6-1.3,2.9-2.9,2.9H634c-1.6,0-2.9-1.3-2.9-2.9
                            C631.1,222.9,632.4,221.6,634,221.6z" />
                    </defs>
                    <use xlinkHref="#SVGID_1007_" overflow="visible" fillRule="evenodd" clipRule="evenodd" fill="#B1B1B1" />
                    <clipPath id="SVGID_1008_">
                      <use xlinkHref="#SVGID_1007_" overflow="visible" />
                    </clipPath>
                    <g clipPath="url(#SVGID_1008_)">
                      <defs>
                        <rect id="SVGID_1009_" x="626.5" y="175" width="126.3" height="224.4" />
                      </defs>
                      <use xlinkHref="#SVGID_1009_" overflow="visible" fill="#B1B1B1" />
                      <clipPath id="SVGID_1010_">
                        <use xlinkHref="#SVGID_1009_" overflow="visible" />
                      </clipPath>
                      <rect x="629.6" y="220.1" clipPath="url(#SVGID_1010_)" fill="#B1B1B1" width="35.2" height="8.9" />
                    </g>
                  </g>
                  <g>
                    <path fill="#7A7A7A" d="M642,223.1c0.1,0.2,0.2,0.4,0.2,0.7v1.5h-0.5V225c-0.1,0.1-0.2,0.2-0.3,0.3c-0.2,0.1-0.3,0.1-0.5,0.1
                          c-0.2,0-0.4-0.1-0.6-0.2c-0.1-0.1-0.2-0.3-0.2-0.5c0-0.3,0.1-0.5,0.3-0.6c0.2-0.1,0.5-0.2,0.8-0.2l0.5,0v-0.1
                          c0-0.3-0.2-0.5-0.5-0.5c-0.1,0-0.3,0-0.3,0.1c-0.1,0.1-0.2,0.2-0.2,0.3l-0.5,0c0.1-0.3,0.2-0.5,0.4-0.6c0.2-0.1,0.4-0.2,0.7-0.2
                          C641.5,222.8,641.8,222.9,642,223.1z M641.2,224.2c-0.4,0-0.6,0.2-0.6,0.4c0,0.1,0,0.2,0.1,0.2c0.1,0.1,0.2,0.1,0.3,0.1
                          c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.2-0.3,0.2-0.5v-0.1L641.2,224.2z" />
                    <path fill="#7A7A7A" d="M644.8,223.2c0.2,0.2,0.3,0.5,0.3,0.9c0,0.3-0.1,0.6-0.3,0.9c-0.2,0.2-0.5,0.4-0.8,0.4
                          c-0.3,0-0.5-0.1-0.7-0.4v1.2h-0.5v-3.3h0.5v0.3c0.2-0.2,0.4-0.3,0.7-0.3C644.3,222.8,644.6,223,644.8,223.2z M643.4,223.5
                          c-0.1,0.1-0.1,0.3-0.1,0.6v0c0,0.2,0.1,0.5,0.2,0.6c0.1,0.1,0.2,0.2,0.4,0.2c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.1-0.3,0.1-0.6
                          s0-0.5-0.1-0.6c-0.1-0.2-0.3-0.2-0.5-0.2C643.7,223.2,643.5,223.3,643.4,223.5z" />
                    <path fill="#7A7A7A" d="M647.5,223.2c0.2,0.2,0.3,0.5,0.3,0.9c0,0.3-0.1,0.6-0.3,0.9c-0.2,0.2-0.5,0.4-0.8,0.4
                          c-0.3,0-0.5-0.1-0.7-0.4v1.2h-0.5v-3.3h0.5v0.3c0.2-0.2,0.4-0.3,0.7-0.3C647.1,222.8,647.3,223,647.5,223.2z M646.2,223.5
                          c-0.1,0.1-0.1,0.3-0.1,0.6v0c0,0.2,0.1,0.5,0.2,0.6c0.1,0.1,0.2,0.2,0.4,0.2c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.1-0.3,0.1-0.6
                          s0-0.5-0.1-0.6c-0.1-0.2-0.3-0.2-0.5-0.2C646.4,223.2,646.3,223.3,646.2,223.5z" />
                  </g>
                  <g>
                    <g>
                      <defs>
                        <circle id="SVGID_1011_" cx="734.5" cy="627.3" r="11.3" />
                      </defs>
                      <clipPath id="SVGID_1012_">
                        <use xlinkHref="#SVGID_1011_" overflow="visible" />
                      </clipPath>
                      <g clipPath="url(#SVGID_1012_)">
                        <defs>
                          <rect id="SVGID_1013_" x="626.3" y="420.4" width="126.3" height="224.4" />
                        </defs>
                        <clipPath id="SVGID_1014_">
                          <use xlinkHref="#SVGID_1013_" overflow="visible" />
                        </clipPath>
                        <rect x="721.6" y="614.4" clipPath="url(#SVGID_1014_)" fill="#CCCCCC" width="25.7" height="25.7" />
                      </g>
                    </g>
                    <circle fill="none" stroke="#979797" strokeMiterlimit="10" cx="734.5" cy="627.3" r="4" />
                    <line fill="none" stroke="#979797" strokeLinecap="square" strokeMiterlimit="10" x1="740.3" y1="627.3"
                      x2="729" y2="627.3" />
                    <line fill="none" stroke="#979797" strokeLinecap="square" strokeMiterlimit="10" x1="734.6" y1="633"
                      x2="734.6" y2="621.6" />
                  </g>
                  <g>
                    <defs>
                      <path id="SVGID_1015_" d="M691.3,608.4c2.9-4,4.3-6.8,4.3-8.4c0-2.4-1.9-4.3-4.3-4.3s-4.3,1.9-4.3,4.3
                            C687,601.6,688.4,604.4,691.3,608.4z" />
                    </defs>
                    <clipPath id="SVGID_1016_">
                      <use xlinkHref="#SVGID_1015_" overflow="visible" />
                    </clipPath>
                    <g clipPath="url(#SVGID_1016_)">
                      <defs>
                        <rect id="SVGID_1017_" x="626.3" y="420.4" width="126.3" height="224.4" />
                      </defs>
                      <clipPath id="SVGID_1018_">
                        <use xlinkHref="#SVGID_1017_" overflow="visible" />
                      </clipPath>
                      <rect x="685.5" y="594.2" clipPath="url(#SVGID_1018_)" fill="#D8D8D8" width="11.6" height="15.8" />
                    </g>
                  </g>
                  <g>
                    <defs>
                      <path id="SVGID_1019_" d="M658.2,534.9c2.9-4,4.3-6.8,4.3-8.4c0-2.4-1.9-4.3-4.3-4.3c-2.4,0-4.3,1.9-4.3,4.3
                            C653.9,528,655.3,530.8,658.2,534.9z" />
                    </defs>
                    <clipPath id="SVGID_1020_">
                      <use xlinkHref="#SVGID_1019_" overflow="visible" />
                    </clipPath>
                    <g clipPath="url(#SVGID_1020_)">
                      <defs>
                        <rect id="SVGID_1021_" x="626.3" y="420.4" width="126.3" height="224.4" />
                      </defs>
                      <clipPath id="SVGID_1022_">
                        <use xlinkHref="#SVGID_1021_" overflow="visible" />
                      </clipPath>
                      <rect x="652.4" y="520.6" clipPath="url(#SVGID_1022_)" fill="#D8D8D8" width="11.6" height="15.8" />
                    </g>
                  </g>
                  <g>
                    <defs>
                      <path id="SVGID_1023_" d="M715.2,501.2c2.9-4,4.3-6.8,4.3-8.4c0-2.4-1.9-4.3-4.3-4.3s-4.3,1.9-4.3,4.3
                            C710.9,494.3,712.3,497.1,715.2,501.2z" />
                    </defs>
                    <clipPath id="SVGID_1024_">
                      <use xlinkHref="#SVGID_1023_" overflow="visible" />
                    </clipPath>
                    <g clipPath="url(#SVGID_1024_)">
                      <defs>
                        <rect id="SVGID_1025_" x="626.3" y="420.4" width="126.3" height="224.4" />
                      </defs>
                      <clipPath id="SVGID_1026_">
                        <use xlinkHref="#SVGID_1025_" overflow="visible" />
                      </clipPath>
                      <rect x="709.4" y="486.9" clipPath="url(#SVGID_1026_)" fill="#D8D8D8" width="11.6" height="15.8" />
                    </g>
                  </g>
                  <g>
                    <defs>
                      <path id="SVGID_1027_" d="M723.2,570.1c2.9-4,4.3-6.8,4.3-8.4c0-2.4-1.9-4.3-4.3-4.3c-2.4,0-4.3,1.9-4.3,4.3
                            C718.9,563.3,720.3,566.1,723.2,570.1z" />
                    </defs>
                    <clipPath id="SVGID_1028_">
                      <use xlinkHref="#SVGID_1027_" overflow="visible" />
                    </clipPath>
                    <g clipPath="url(#SVGID_1028_)">
                      <defs>
                        <rect id="SVGID_1029_" x="626.3" y="420.4" width="126.3" height="224.4" />
                      </defs>
                      <clipPath id="SVGID_1030_">
                        <use xlinkHref="#SVGID_1029_" overflow="visible" />
                      </clipPath>
                      <rect x="717.3" y="555.9" clipPath="url(#SVGID_1030_)" fill="#D8D8D8" width="11.6" height="15.8" />
                    </g>
                  </g>
                  <g>
                    <defs>
                      <circle id="SVGID_1031_" cx="881.2" cy="381.9" r="11.3" />
                    </defs>
                    <clipPath id="SVGID_1032_">
                      <use xlinkHref="#SVGID_1031_" overflow="visible" />
                    </clipPath>
                    <g clipPath="url(#SVGID_1032_)">
                      <defs>
                        <rect id="SVGID_1033_" x="773" y="175" width="126.3" height="224.4" />
                      </defs>
                      <clipPath id="SVGID_1034_">
                        <use xlinkHref="#SVGID_1033_" overflow="visible" />
                      </clipPath>
                      <rect x="868.3" y="369" clipPath="url(#SVGID_1034_)" fill="#CCCCCC" width="25.7" height="25.7" />
                    </g>
                  </g>
                  <g>
                    <defs>
                      <path id="SVGID_1035_" d="M836.2,353.2c2.9-4,4.3-6.8,4.3-8.4c0-2.4-1.9-4.3-4.3-4.3s-4.3,1.9-4.3,4.3
                            C831.9,346.4,833.3,349.2,836.2,353.2z" />
                    </defs>
                    <clipPath id="SVGID_1036_">
                      <use xlinkHref="#SVGID_1035_" overflow="visible" />
                    </clipPath>
                    <g clipPath="url(#SVGID_1036_)">
                      <defs>
                        <rect id="SVGID_1037_" x="773" y="175" width="126.3" height="224.4" />
                      </defs>
                      <clipPath id="SVGID_1038_">
                        <use xlinkHref="#SVGID_1037_" overflow="visible" />
                      </clipPath>
                      <rect x="830.3" y="339" clipPath="url(#SVGID_1038_)" fill="#D8D8D8" width="11.6" height="15.8" />
                    </g>
                  </g>
                  <g>
                    <defs>
                      <rect id="SVGID_1039_" x="781.6" y="257.8" width="109.1" height="69.6" />
                    </defs>
                    <clipPath id="SVGID_1040_">
                      <use xlinkHref="#SVGID_1039_" overflow="visible" />
                    </clipPath>
                    <g clipPath="url(#SVGID_1040_)">
                      <defs>
                        <rect id="SVGID_1041_" x="773" y="175" width="126.3" height="224.4" />
                      </defs>
                      <clipPath id="SVGID_1042_">
                        <use xlinkHref="#SVGID_1041_" overflow="visible" />
                      </clipPath>
                      <rect x="780.1" y="256.2" clipPath="url(#SVGID_1042_)" fill="#EDEDED" width="112.2" height="72.6" />
                    </g>
                  </g>
                  <g>
                    <defs>

                      <rect id="SVGID_1043_" x="831.1" y="322.3"
                        transform="matrix(0.7071 -0.7071 0.7071 0.7071 13.4997 687.0179)" width="9.8" height="9.8" />
                    </defs>
                    <clipPath id="SVGID_1044_">
                      <use xlinkHref="#SVGID_1043_" overflow="visible" />
                    </clipPath>
                    <g clipPath="url(#SVGID_1044_)">
                      <defs>
                        <rect id="SVGID_1045_" x="773" y="175" width="126.3" height="224.4" />
                      </defs>
                      <clipPath id="SVGID_1046_">
                        <use xlinkHref="#SVGID_1045_" overflow="visible" />
                      </clipPath>

                      <rect x="829.6" y="320.8" transform="matrix(0.7071 -0.7071 0.7071 0.7071 13.4996 687.0177)"
                        clipPath="url(#SVGID_1046_)" fill="#EDEDED" width="12.9" height="12.9" />
                    </g>
                  </g>
                  <g>
                    <defs>
                      <path id="SVGID_1047_" d="M795.2,298.2h48.1c0.9,0,1.7,0.8,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7h-48.1c-0.9,0-1.7-0.8-1.7-1.7
                            C793.6,299,794.3,298.2,795.2,298.2z" />
                    </defs>
                    <clipPath id="SVGID_1048_">
                      <use xlinkHref="#SVGID_1047_" overflow="visible" />
                    </clipPath>
                    <g clipPath="url(#SVGID_1048_)">
                      <defs>
                        <rect id="SVGID_1049_" x="773" y="175" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_1050_">
                      <use xlinkHref="#SVGID_1049_" overflow="visible" />
                    </clipPath>
                    <rect x="792" y="296.7" clipPath="url(#SVGID_1050_)" fill="#E1E1E1" width="54.6" height="6.4" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_1051_" d="M861.5,298.2h14.4c0.9,0,1.7,0.8,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7h-14.4c-0.9,0-1.7-0.8-1.7-1.7
                          C859.8,299,860.5,298.2,861.5,298.2z" />
                  </defs>
                  <clipPath id="SVGID_1052_">
                    <use xlinkHref="#SVGID_1051_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_1052_)">
                    <defs>
                      <rect id="SVGID_1053_" x="773" y="175" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_1054_">
                      <use xlinkHref="#SVGID_1053_" overflow="visible" />
                    </clipPath>
                    <rect x="858.2" y="296.7" clipPath="url(#SVGID_1054_)" fill="#E1E1E1" width="20.8" height="6.4" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_1055_" d="M795.2,302.5h48.1c0.9,0,1.7,0.8,1.7,1.7s-0.8,1.7-1.7,1.7h-48.1c-0.9,0-1.7-0.8-1.7-1.7
                          S794.3,302.5,795.2,302.5z" />
                  </defs>
                  <clipPath id="SVGID_1056_">
                    <use xlinkHref="#SVGID_1055_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_1056_)">
                    <defs>
                      <rect id="SVGID_1057_" x="773" y="175" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_1058_">
                      <use xlinkHref="#SVGID_1057_" overflow="visible" />
                    </clipPath>
                    <rect x="792" y="301" clipPath="url(#SVGID_1058_)" fill="#E1E1E1" width="54.6" height="6.4" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_1059_" d="M795.2,307.1h37.1c0.9,0,1.7,0.8,1.7,1.7s-0.8,1.7-1.7,1.7h-37.1c-0.9,0-1.7-0.8-1.7-1.7
                          S794.3,307.1,795.2,307.1z" />
                  </defs>
                  <clipPath id="SVGID_1060_">
                    <use xlinkHref="#SVGID_1059_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_1060_)">
                    <defs>
                      <rect id="SVGID_1061_" x="773" y="175" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_1062_">
                      <use xlinkHref="#SVGID_1061_" overflow="visible" />
                    </clipPath>
                    <rect x="792" y="305.6" clipPath="url(#SVGID_1062_)" fill="#E1E1E1" width="43.5" height="6.4" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_1063_" d="M797.2,315.4h16.6c2,0,3.7,1.6,3.7,3.7c0,2-1.6,3.7-3.7,3.7h-16.6c-2,0-3.7-1.6-3.7-3.7
                          C793.6,317,795.2,315.4,797.2,315.4z" />
                  </defs>
                  <clipPath id="SVGID_1064_">
                    <use xlinkHref="#SVGID_1063_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_1064_)">
                    <defs>
                      <rect id="SVGID_1065_" x="773" y="175" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_1066_">
                      <use xlinkHref="#SVGID_1065_" overflow="visible" />
                    </clipPath>
                    <rect x="792" y="313.8" clipPath="url(#SVGID_1066_)" fill="#D5D5D5" width="27" height="10.4" />
                  </g>
                </g>
                <g>
                  <defs>
                    <path id="SVGID_1067_" d="M857.3,315.4h16.6c2,0,3.7,1.6,3.7,3.7c0,2-1.6,3.7-3.7,3.7h-16.6c-2,0-3.7-1.6-3.7-3.7
                          C853.6,317,855.3,315.4,857.3,315.4z" />
                  </defs>
                  <clipPath id="SVGID_1068_">
                    <use xlinkHref="#SVGID_1067_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_1068_)">
                    <defs>
                      <rect id="SVGID_1069_" x="773" y="175" width="126.3" height="224.4" />
                    </defs>
                    <clipPath id="SVGID_1070_">
                      <use xlinkHref="#SVGID_1069_" overflow="visible" />
                    </clipPath>
                    <rect x="852.1" y="313.8" clipPath="url(#SVGID_1070_)" fill="#C9C9C9" width="27" height="10.4" />
                  </g>
                </g>
                <g>
                  <path fill="#8E8E8E" d="M861.8,318.2c0.2,0.2,0.3,0.5,0.3,0.9c0,0.3-0.1,0.6-0.3,0.9c-0.2,0.2-0.5,0.4-0.8,0.4
                        c-0.3,0-0.5-0.1-0.7-0.4v1.2h-0.5v-3.3h0.5v0.3c0.2-0.2,0.4-0.3,0.7-0.3C861.3,317.8,861.6,318,861.8,318.2z M860.4,318.5
                        c-0.1,0.1-0.1,0.3-0.1,0.6v0c0,0.2,0.1,0.5,0.2,0.6c0.1,0.1,0.2,0.2,0.4,0.2c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.1-0.3,0.1-0.6
                        s0-0.5-0.1-0.6c-0.1-0.2-0.3-0.2-0.5-0.2C860.7,318.3,860.5,318.3,860.4,318.5z" />
                <path fill="#8E8E8E" d="M864.5,318.2c0.2,0.2,0.3,0.5,0.3,0.9c0,0.4-0.1,0.7-0.3,0.9c-0.2,0.2-0.5,0.4-0.9,0.4
                      c-0.4,0-0.7-0.1-0.9-0.4c-0.2-0.2-0.3-0.5-0.3-0.9c0-0.4,0.1-0.7,0.3-0.9c0.2-0.2,0.5-0.4,0.9-0.4
                      C864,317.8,864.3,318,864.5,318.2z M863.1,318.5c-0.1,0.1-0.2,0.3-0.2,0.6c0,0.2,0.1,0.4,0.2,0.6c0.1,0.2,0.3,0.3,0.5,0.3
                      c0.2,0,0.4-0.1,0.5-0.3c0.1-0.2,0.2-0.3,0.2-0.6c0-0.2-0.1-0.4-0.2-0.6c-0.1-0.2-0.3-0.3-0.5-0.3
                      C863.4,318.3,863.3,318.3,863.1,318.5z" />
                <path fill="#8E8E8E" d="M867.2,318.2c0.2,0.2,0.3,0.6,0.3,1h-1.8c0,0.2,0.1,0.4,0.2,0.5c0.1,0.1,0.2,0.2,0.4,0.2
                      c0.2,0,0.3,0,0.4-0.1c0.1-0.1,0.1-0.2,0.2-0.3h0.5c-0.1,0.2-0.2,0.4-0.3,0.6c-0.2,0.2-0.5,0.3-0.8,0.3c-0.4,0-0.6-0.1-0.8-0.3
                      c-0.2-0.2-0.3-0.5-0.3-0.9c0-0.4,0.1-0.6,0.3-0.9c0.2-0.2,0.5-0.4,0.8-0.4C866.7,317.8,867,318,867.2,318.2z M865.9,318.4
                      c-0.1,0.1-0.2,0.2-0.2,0.4h1.2c0-0.4-0.3-0.6-0.6-0.6C866.1,318.3,866,318.3,865.9,318.4z" />
                <path fill="#8E8E8E" d="M869.8,318.2c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.2-0.1,0.4-0.1c0.2,0,0.4,0.1,0.6,0.2
                      c0.2,0.2,0.2,0.4,0.2,0.6v1.6h-0.5v-1.5c0-0.2,0-0.3-0.1-0.4c-0.1-0.1-0.2-0.1-0.4-0.1c-0.1,0-0.2,0-0.3,0.1
                      c-0.1,0.1-0.1,0.2-0.1,0.4v1.5h-0.5v-1.5c0-0.4-0.2-0.5-0.5-0.5c-0.2,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.1,0.2-0.1,0.4v1.4h-0.5v-2.4
                      h0.5v0.2c0.2-0.2,0.4-0.3,0.6-0.3C869.4,317.8,869.7,318,869.8,318.2z" />
              </g>
              <g>
                <path fill="#8E8E8E" d="M797,318.4c0.1,0.2,0.2,0.4,0.2,0.7v1.5h-0.5v-0.3c-0.1,0.1-0.2,0.2-0.3,0.3c-0.2,0.1-0.3,0.1-0.5,0.1
                      c-0.2,0-0.4-0.1-0.6-0.2c-0.1-0.1-0.2-0.3-0.2-0.5c0-0.3,0.1-0.5,0.3-0.6c0.2-0.1,0.5-0.2,0.8-0.2l0.5,0V319
                      c0-0.3-0.2-0.5-0.5-0.5c-0.1,0-0.3,0-0.3,0.1c-0.1,0.1-0.2,0.2-0.2,0.3l-0.5,0c0.1-0.3,0.2-0.5,0.4-0.6c0.2-0.1,0.4-0.2,0.7-0.2
                      C796.6,318.1,796.9,318.2,797,318.4z M796.2,319.5c-0.4,0-0.6,0.2-0.6,0.4c0,0.1,0,0.2,0.1,0.2s0.2,0.1,0.3,0.1
                      c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.2-0.3,0.2-0.5v-0.1L796.2,319.5z" />
                <path fill="#8E8E8E" d="M798.5,318.2h0.5v0.4h-0.5v1.3c0,0.1,0,0.1,0,0.1c0,0,0.1,0,0.1,0h0.3v0.4h-0.4c-0.2,0-0.4-0.1-0.5-0.2
                      c-0.1-0.1-0.1-0.2-0.1-0.4v-1.3h-0.4v-0.4h0.4v-0.6l0.5-0.2V318.2z" />
                <path fill="#8E8E8E" d="M800.2,318.2h0.5v0.4h-0.5v1.3c0,0.1,0,0.1,0,0.1c0,0,0.1,0,0.1,0h0.3v0.4h-0.4c-0.2,0-0.4-0.1-0.5-0.2
                      c-0.1-0.1-0.1-0.2-0.1-0.4v-1.3h-0.4v-0.4h0.4v-0.6l0.5-0.2V318.2z" />
                <path fill="#8E8E8E" d="M802.5,318.2v0.5c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.3-0.2,0.5v1.3h-0.5v-2.4
                      h0.5v0.3c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.2-0.1,0.4-0.1C802.4,318.1,802.5,318.2,802.5,318.2z" />
                <path fill="#8E8E8E" d="M804.7,318.4c0.1,0.2,0.2,0.4,0.2,0.7v1.5h-0.5v-0.3c-0.1,0.1-0.2,0.2-0.3,0.3c-0.2,0.1-0.3,0.1-0.5,0.1
                      c-0.2,0-0.4-0.1-0.6-0.2c-0.1-0.1-0.2-0.3-0.2-0.5c0-0.3,0.1-0.5,0.3-0.6c0.2-0.1,0.5-0.2,0.8-0.2l0.5,0V319
                      c0-0.3-0.2-0.5-0.5-0.5c-0.1,0-0.3,0-0.3,0.1c-0.1,0.1-0.2,0.2-0.2,0.3l-0.5,0c0.1-0.3,0.2-0.5,0.4-0.6c0.2-0.1,0.4-0.2,0.7-0.2
                      C804.3,318.1,804.5,318.2,804.7,318.4z M803.9,319.5c-0.4,0-0.6,0.2-0.6,0.4c0,0.1,0,0.2,0.1,0.2s0.2,0.1,0.3,0.1
                      c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.2-0.3,0.2-0.5v-0.1L803.9,319.5z" />
                <path fill="#8E8E8E" d="M807.3,318.4c0.2,0.1,0.3,0.4,0.4,0.7h-0.5c0-0.2-0.1-0.3-0.2-0.3c-0.1-0.1-0.2-0.1-0.4-0.1
                      c-0.2,0-0.3,0.1-0.5,0.2c-0.1,0.1-0.2,0.3-0.2,0.6c0,0.3,0,0.5,0.2,0.6c0.1,0.1,0.3,0.2,0.5,0.2c0.3,0,0.5-0.2,0.6-0.5h0.5
                      c-0.1,0.3-0.2,0.6-0.4,0.7c-0.2,0.2-0.4,0.2-0.7,0.2c-0.4,0-0.7-0.1-0.9-0.4c-0.2-0.2-0.3-0.5-0.3-0.9c0-0.4,0.1-0.7,0.3-0.9
                      c0.2-0.2,0.5-0.4,0.9-0.4C806.9,318.1,807.1,318.2,807.3,318.4z" />
                <path fill="#8E8E8E" d="M808.8,318.2h0.5v0.4h-0.5v1.3c0,0.1,0,0.1,0,0.1c0,0,0.1,0,0.1,0h0.3v0.4h-0.4c-0.2,0-0.4-0.1-0.5-0.2
                      c-0.1-0.1-0.1-0.2-0.1-0.4v-1.3h-0.4v-0.4h0.4v-0.6l0.5-0.2V318.2z" />
                <path fill="#8E8E8E"
                  d="M810.3,317.3c0.1,0.1,0.1,0.1,0.1,0.2s0,0.2-0.1,0.3c-0.1,0.1-0.2,0.1-0.3,0.1s-0.2,0-0.3-0.1
                      c-0.1-0.1-0.1-0.2-0.1-0.3s0-0.2,0.1-0.2c0.1-0.1,0.2-0.1,0.3-0.1S810.3,317.3,810.3,317.3z M810.3,318.2v2.4h-0.5v-2.4H810.3z" />
                <path fill="#8E8E8E" d="M813,318.5c0.2,0.2,0.3,0.5,0.3,0.9c0,0.4-0.1,0.7-0.3,0.9c-0.2,0.2-0.5,0.4-0.9,0.4
                      c-0.4,0-0.7-0.1-0.9-0.4c-0.2-0.2-0.3-0.5-0.3-0.9c0-0.4,0.1-0.7,0.3-0.9c0.2-0.2,0.5-0.4,0.9-0.4
                      C812.4,318.1,812.7,318.3,813,318.5z M811.6,318.8c-0.1,0.1-0.2,0.3-0.2,0.6c0,0.2,0,0.4,0.2,0.6c0.1,0.2,0.3,0.3,0.5,0.3
                      c0.2,0,0.4-0.1,0.5-0.3c0.1-0.2,0.2-0.3,0.2-0.6c0-0.2-0.1-0.4-0.2-0.6c-0.1-0.2-0.3-0.3-0.5-0.3
                      C811.9,318.6,811.7,318.7,811.6,318.8z" />
                <path fill="#8E8E8E" d="M815.9,319.1v1.5h-0.5v-1.4c0-0.4-0.2-0.6-0.5-0.6c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.2,0.2-0.2,0.4v1.4
                      h-0.5v-2.4h0.5v0.3c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.2-0.1,0.4-0.1C815.6,318.1,815.9,318.5,815.9,319.1z" />
              </g>
            </g>
          </svg>
        </div>
          <div className="layer" id="layer5">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox={fgViewBox} enableBackground="new 0 0 1366 768" xmlSpace="preserve">
          <g filter="url(#color-filter)" >
            <g>
              <g>
                <defs>
                  <path id="SVGID_1071_" d="M631.8,435.4v0.9h8.6v-0.9H631.8z M631.8,438.8h8.6v-0.9h-8.6V438.8z M631.8,440.9h8.6V440h-8.6V440.9
                          z" />
                </defs>
                <clipPath id="SVGID_1072_">
                  <use xlinkHref="#SVGID_1071_" overflow="visible" />
                </clipPath>
                <g clipPath="url(#SVGID_1072_)">
                  <defs>
                    <rect id="SVGID_1073_" x="628.1" y="430.2" width="15.9" height="15.9" />
                  </defs>
                  <clipPath id="SVGID_1074_">
                    <use xlinkHref="#SVGID_1073_" overflow="visible" />
                  </clipPath>
                  <rect x="630.3" y="433.9" clipPath="url(#SVGID_1074_)" fill="#FFFFFF" width="11.6" height="8.6" />
                </g>
              </g>
              <polygon fillRule="evenodd" clipRule="evenodd" fill="#ECECEC" points="884.7,382.2 880.5,386.5 891.8,397.8 917.3,373.8 
                      913,369.5 891.8,389.3 		" />
              <path fillRule="evenodd" clipRule="evenodd" fill="#ECECEC" d="M548.4,293h-18.9c-2.1,0-3.8,1.7-3.8,3.8V327l13.2-5.7l13.2,5.7
                      v-30.2C552.2,294.7,550.5,293,548.4,293z" />
              <path fillRule="evenodd" clipRule="evenodd" fill="#ECECEC" d="M623.8,545.2c-1.1-1.1-2.6-1.7-4.1-1.8l-4.5-17
                      c0.4-0.3,0.8-0.6,1.2-0.9s0.6-0.8,0.9-1.2l16.8,4.4c0.1,1.6,0.7,3.1,1.8,4.3c2.5,2.5,6.5,2.5,9,0c2.5-2.5,2.5-6.5,0-9
                      c-2.5-2.5-6.5-2.5-9,0c-0.4,0.4-0.6,0.8-0.9,1.2l-16.8-4.4c-0.1-1.6-0.7-3.1-1.8-4.3c-2.5-2.5-6.5-2.5-9,0c-2.5,2.5-2.5,6.5,0,9
                      c1.2,1.2,2.7,1.8,4.3,1.8l4.4,17c-0.4,0.2-0.8,0.5-1.1,0.9c-2.4,2.4-2.4,6.4,0,8.8s6.4,2.4,8.8,0
                      C626.2,551.6,626.2,547.7,623.8,545.2z" />
            </g>
          </g>
        </svg>
      </div>
        </div>
    )
  }

  

  buttonSet = undefined

  render() {
    let svg = this.checkShouldPresentSVG()
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

    return (
      <div className="about-ialand-wireframe-right-part" onMouseMove={(event)=>{return (this.state.shouldPresentSVG)?this.mouseMoveHandler(event):false}}>
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
        {svg}
      </div>
    )
  }
}

export default AboutIslandWireframeCcard ;
