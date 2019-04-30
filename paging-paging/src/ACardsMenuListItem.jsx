import React, { Component } from 'react';

class ACardsMenuListItem extends Component {
  constructor(props) {
    super(props)

    console.log(this.props)

    let listItemTitle = [
      ['封面', 'Back To Top'],
      ['曉島遊', 'About Island'],
      // ['教育學院', 'COE'],
      // ['大腦三態', 'Inabcway'],
      // ['每個地方', 'Megatify'],
      // ['OIVITA app', ''],
      // ['計程車 app', 'Taxi'],
      // ['時間表 app', 'Timesheet'],
      // ['喬美', 'Chao-Mei'],
      // ['樂遊Bike', 'Bike App'],
      ['關於我', 'About Me']
    ]


    this.state = {
      listItemStyles: {},
      listItemValues: listItemTitle,
      currentLocation: this.props.getCurrentLocation
    }
  }

  bCardsMoveFinished = ([state, from, to]) => {
    console.log('ACardsMenuListItem bCardsMoveFinished' + [state, from, to]);
  }

  aCardsMoveFinished = ([state, from, to]) => {
    console.log('ACardsMenuListItem aCardsMoveFinished' + [state, from, to]);
  }

  bCardsMoveStart = ([state, from, to]) => {
    console.log('ACardsMenuListItem bCardsMoveStart' + [state, from, to]);
  }

  aCardsMoveStart = ([state, from, to]) => {
    console.log('ACardsMenuListItem aCardsMoveStart' + [state, from, to]);
  }

  onMoveFinished = ([state, from, to]) => {
    if (from[0] === to[0]) {
      this.bCardsMoveFinished([state, from, to])
    } else {
      this.aCardsMoveFinished([state, from, to])
    }
  }

  onMoveStart = ([state, from, to]) => {
    if (from[0] === to[0]) {
      this.bCardsMoveStart([state, from, to])
    } else {
      this.aCardsMoveStart([state, from, to])
    }
    this.setState({ currentLocation: [state, from, to] }, () => {
      console.log(this.state.currentLocation);
    })
  }

  moveCheck = ''

  checkAnimationMoveState = ([state, from, to]) => {
    if (this.moveCheck !== 'come' && this.moveCheck !== 'leave' && this.moveCheck !== 'move start') {
      if (state === 'come' || state === 'leave' || state === 'move start') {
        this.onMoveStart([state, from, to])
      }
      this.moveCheck = state
    } else if (this.moveCheck !== 'came' && this.moveCheck !== 'left' && this.moveCheck !== 'move finished') {
      if (state === 'came' || state === 'left' || state === 'move finished') {
        this.onMoveFinished([state, from, to])
      }
      this.moveCheck = state
    }
  }

  componentDidMount = () => {
  }

  menuItemFactory = (currentLocation) => {

  }

  render() {
    this.checkAnimationMoveState(this.props.passAnimationMoveState)
    return (
      <ul className="menu-list-ul">
        {this.props.getCardDataList.map((aCardItem, ACardIdex) => {
          if (this.state.listItemValues[ACardIdex] !== undefined) {
              let svg
              let focusColorClass = ''
              /* console.log(ACardIdex, this.props.getCurrentLocation); */
              if (ACardIdex === this.props.passAnimationMoveState[2][0]) {
                focusColorClass = ' focus'
                svg = <svg className="menu-item-svg" version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px" y="0px" viewBox="0 0 100 100">
                  <defs>
                    <clipPath id="liquid-shape-present">
                      <path className="liquid-clip-path" d="M89.8,90.2c0,0-17.3,0-42.9,0s-38.6,0-38.6,0s-0.3-12.8,0-39.3c0.3-24.7,0-42.2,0-42.2s13.9,0,42.2,0c28.5,0,39.3,0,39.3,0s0,14,0,40.7S89.8,90.2,89.8,90.2z">
                        <animate attributeType="XML" attributeName="d" keyTimes="0; 0.25; 0.4; 0.8; 1" dur="1s" repeatCount='1' fill='freeze' values="M89.8,90.2c0,0-17.3,0-42.9,0s-38.6,0-38.6,0s-0.3-12.8,0-39.3c0.3-24.7,0-42.2,0-42.2s13.9,0,42.2,0c28.5,0,39.3,0,39.3,0s0,14,0,40.7S89.8,90.2,89.8,90.2z; M89.8,90.2c0,0-17.3,0-42.9,0s-38.6,0-38.6,0s-0.3-12.8,0-39.3c0.3-24.7,0-42.2,0-42.2s13.9,0,42.2,0c28.5,0,39.3,0,39.3,0s0,14,0,40.7S89.8,90.2,89.8,90.2z; M89.8,90.2c0,0-3.2,6.1-28.8,6.1S8.4,90.2,8.4,90.2s-0.3-12.8,0-39.3c0.3-24.7,0-42.2,0-42.2s13.9,0,42.2,0c28.5,0,39.3,0,39.3,0s6.4,22.7,6.4,49.5S89.8,90.2,89.8,90.2z; M89.6,90.2c0,0-14.8,4.1-40.4,4.1s-41-4.1-41-4.1s-4.7-5.8-4.4-32.3C4.1,33.2,8.1,8.7,8.1,8.7s21.2-4.1,49.5-4.9c27.6-0.9,32,4.9,32,4.9s4.7,15.4,4.7,42.2S89.6,90.2,89.6,90.2z; M89.8,90.2c0,0-17.3,0-42.9,0s-38.6,0-38.6,0s-0.3-12.8,0-39.3c0.3-24.7,0-42.2,0-42.2s13.9,0,42.2,0c28.5,0,39.3,0,39.3,0s0,14,0,40.7S89.8,90.2,89.8,90.2z" />
                      </path>
                    </clipPath>
                  </defs>
                  <path className={'container container-' + ACardIdex} d="M89.8,90.2c0,0-17.3,0-42.9,0s-38.6,0-38.6,0s-0.3-12.8,0-39.3c0.3-24.7,0-42.2,0-42.2s13.9,0,42.2,0c28.5,0,39.3,0,39.3,0s0,14,0,40.7S89.8,90.2,89.8,90.2z">
                    <animate attributeType="XML" attributeName="d" keyTimes="0; 0.25; 0.4; 0.8; 1" dur="1s" repeatCount='1' fill='freeze' values="M89.8,90.2c0,0-17.3,0-42.9,0s-38.6,0-38.6,0s-0.3-12.8,0-39.3c0.3-24.7,0-42.2,0-42.2s13.9,0,42.2,0c28.5,0,39.3,0,39.3,0s0,14,0,40.7S89.8,90.2,89.8,90.2z; M89.8,90.2c0,0-17.3,0-42.9,0s-38.6,0-38.6,0s-0.3-12.8,0-39.3c0.3-24.7,0-42.2,0-42.2s13.9,0,42.2,0c28.5,0,39.3,0,39.3,0s0,14,0,40.7S89.8,90.2,89.8,90.2z; M89.8,90.2c0,0-3.2,6.1-28.8,6.1S8.4,90.2,8.4,90.2s-0.3-12.8,0-39.3c0.3-24.7,0-42.2,0-42.2s13.9,0,42.2,0c28.5,0,39.3,0,39.3,0s6.4,22.7,6.4,49.5S89.8,90.2,89.8,90.2z; M89.6,90.2c0,0-14.8,4.1-40.4,4.1s-41-4.1-41-4.1s-4.7-5.8-4.4-32.3C4.1,33.2,8.1,8.7,8.1,8.7s21.2-4.1,49.5-4.9c27.6-0.9,32,4.9,32,4.9s4.7,15.4,4.7,42.2S89.6,90.2,89.6,90.2z; M89.8,90.2c0,0-17.3,0-42.9,0s-38.6,0-38.6,0s-0.3-12.8,0-39.3c0.3-24.7,0-42.2,0-42.2s13.9,0,42.2,0c28.5,0,39.3,0,39.3,0s0,14,0,40.7S89.8,90.2,89.8,90.2z" />
                  </path>
                  <path className={'liquid liquid-' + ACardIdex} clipPath="url(#liquid-shape-present)" d="M160.1,47.7L51.6,146.3c0,0-54,36.2-39.9,14.9c15.3-23,51.1-26.9,86.5-59.1c32.5-29.5,39.2-49.5,63.9-68.4C184,17.1,160.1,47.7,160.1,47.7z">
                    <animate calcMode="spline" keySplines=".85 0 .51 1;0 .54 1 .45" attributeType="XML" attributeName="d" keyTimes="0; 0.4; 1" dur="1s" repeatCount='1' fill='freeze' values="M160.1,47.7L51.6,146.3c0,0-54,36.2-39.9,14.9c15.3-23,51.1-26.9,86.5-59.1c32.5-29.5,39.2-49.5,63.9-68.4C184,17.1,160.1,47.7,160.1,47.7z; M160.1,47.7L51.6,146.3c0,0-68,47.1-67.8,9.9c0.1-24.5,11.1-80.4,72.5-122.4c36.7-25.1,61.4-17.1,89.9-30.9C182.3-14.5,160.1,47.7,160.1,47.7z; M160.1,47.7L51.6,146.3c0,0-176.2-40.5-160.8-76C-95.5,38.6-34.7,41.6-2.4-3.7c27.2-38.2-2.6-70.8,35.9-96.1C69.2-123.4,160.1,47.7,160.1,47.7z" />
                  </path>
                </svg>

              } else if (ACardIdex === this.props.passAnimationMoveState[1][0]) {
                svg =
                  <div>
                    <div>
                      <svg className="menu-item-svg" version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px" y="0px" viewBox="8 12 88 88">
                        <defs>
                          <clipPath id="liquid-shape-fade">
                            <path className="liquid-clip-path">
                              <animate calcMode="spline" keySplines="0,.72,.37,1; 0,.72,.37,1" attributeType="XML" attributeName="d" keyTimes="0; 0.5; 1" dur="1s" repeatCount="1" fill="freeze" values="M88,90.4c0,0-12.8-0.2-35,0s-35,0-35,0s0.2-10.8,0-35s0-35,0-35s5.5-0.2,35,0s35,0,35,0s0,12.5,0,35S88,90.4,88,90.4z;M87.5,89.9c0,0-13-2.8-35.3-2.5s-34.8,2.5-34.8,2.5s2.8-10.8,2.5-35s-2.5-35-2.5-35s13.5,2.2,35,2.5s35-2.5,35-2.5s-3,13.2-3,35.5S87.5,89.9,87.5,89.9z; M88,90.4c0,0-12.8-0.2-35,0s-35,0-35,0s0.2-10.8,0-35s0-35,0-35s5.5-0.2,35,0s35,0,35,0s0,12.5,0,35S88,90.4,88,90.4z" />
                            </path>
                          </clipPath>
                        </defs>
                        <path id="container" className={'container container-' + ACardIdex} d="M88,90.4c0,0-12.8-0.2-35,0s-35,0-35,0s0.2-10.8,0-35s0-35,0-35s5.5-0.2,35,0s35,0,35,0s0,12.5,0,35S88,90.4,88,90.4z">
                          <animate calcMode="spline" keySplines="0,.72,.37,1; 0,.72,.37,1" attributeType="XML" attributeName="d" keyTimes="0; 0.5; 1" dur="1s" repeatCount="1" fill="freeze" values="M88,90.4c0,0-12.8-0.2-35,0s-35,0-35,0s0.2-10.8,0-35s0-35,0-35s5.5-0.2,35,0s35,0,35,0s0,12.5,0,35S88,90.4,88,90.4z;M87.5,89.9c0,0-13-2.8-35.3-2.5s-34.8,2.5-34.8,2.5s2.8-10.8,2.5-35s-2.5-35-2.5-35s13.5,2.2,35,2.5s35-2.5,35-2.5s-3,13.2-3,35.5S87.5,89.9,87.5,89.9z; M88,90.4c0,0-12.8-0.2-35,0s-35,0-35,0s0.2-10.8,0-35s0-35,0-35s5.5-0.2,35,0s35,0,35,0s0,12.5,0,35S88,90.4,88,90.4z" />
                        </path>
                        <path id="liquid" className={'liquid liquid-' + ACardIdex} clipPath="url(#liquid-shape-fade)" d="M88,90.4c0,0-12.8-0.2-35,0s-35,0-35,0s0.2-10.8,0-35s0-35,0-35s5.5-0.2,35,0s35,0,35,0s0,12.5,0,35S88,90.4,88,90.4z">
                          <animate calcMode="spline" keySplines=" 0 .66 .7 .69;.48 .48 .35 1" attributeType="XML" attributeName="d" keyTimes="0; 0.2; 1" dur="1s" repeatCount="1" fill="freeze" values="M-69.5,77.3c-18.9,29.3,124.4,67.1,124.4,67.1l83.9-83.9c0,0-76.7-155.4-96.9-130.2c-28.3,35.3-7.2,43.6-28,83C-8.4,55.6-44.4,38.5-69.5,77.3z;M-31.5,88.3c-33.5-1.2,86.4,56.1,86.4,56.1l83.9-83.9c0,0-89.4-139.8-82.9-108.2c8.3,40.1,17.8,66.6-3,106C30.6,100.6,14.8,89.9-31.5,88.3z; M44.7,163.2c-12.6,31.1,17.9-25.9,17.9-25.9l83.9-83.9c0,0,43.5-26.1,15.1-10.7c-30.7,16.6-49.7,11.6-70.5,51C68.8,136,56.4,134.2,44.7,163.2z " />
                        </path>
                      </svg>
                    </div>
                  </div>
              } else {
                svg = <div>
                  <svg className="menu-item-svg" version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px" y="0px" viewBox="0 0 100 100">
                    <path className={'container container-' + ACardIdex} d="M89.8,90.2c0,0-17.3,0-42.9,0s-38.6,0-38.6,0s-0.3-12.8,0-39.3c0.3-24.7,0-42.2,0-42.2s13.9,0,42.2,0c28.5,0,39.3,0,39.3,0s0,14,0,40.7S89.8,90.2,89.8,90.2z" />
                  </svg>
                </div>
              }
              return (
                <div className="menu-item-container" key={ACardIdex}>
                  <div className="menu-item-svg-container" >
                    <a className="menu-item-a" href="#/" onClick={() => { this.props.getJumpACardRequest(ACardIdex) }} key={ACardIdex}>
                      {svg}
                    </a>
                  </div>
                  <p onClick={() => { this.props.getJumpACardRequest(ACardIdex) }} key={ACardIdex + 'cn'}>
                    <a href="#/" className={'cn-text-sm menu-item-text-cn' + focusColorClass}>{this.state.listItemValues[ACardIdex][0]}</a>
                    <br />
                    <a href="#/" className={'en-text-sm menu-item-text-en' + focusColorClass}>{this.state.listItemValues[ACardIdex][1]}</a>
                  </p>
                </div>
              )
          } else {
            console.warn('An A-Card has no assigned title!');
            return <a href="./index.html" key={ACardIdex}>new A-Card</a>
          }
        })}

      </ul>
    )
  }

}

export default ACardsMenuListItem;