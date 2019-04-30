import React, { Component } from 'react';
import './AboutMeStyle.css';
import ButtonNormal from '../Button';
import SkillBar from '../skillBar/skillBar';

class AboutMeLeft extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shouldPresentSkillBar: false,
    }
  }

  moveCheck = ''

  onThisCCardCome = () => {
    console.log('C-card ' + this.props.cardIndex + ' come');
    this.setState({ shouldPresentSkillBar: true })
  }

  onThisCCardCame = () => {
    console.log('C-card ' + this.props.cardIndex + ' came');
  }

  onThisCCardLeave = () => {
    console.log('C-card ' + this.props.cardIndex + ' leave');
  }

  onThisCCardLeft = () => {
    console.log('C-card ' + this.props.cardIndex + ' left');
    this.setState({ shouldPresentSkillBar: false })
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

  checkShouldPresentSkillBar = () => {
    return (this.state.shouldPresentSkillBar) ? this.getSkillBar() : false
  }

  getSkillBar = () => {
    return (
      <div id="skill-area">
        <div className="skill-column">
          <p className="en-text-sm">UI&Graphics/</p>
          <p className="cn-text-xs">UI與平面</p>
          <hr className="hr-sm"></hr>
          <SkillBar barIndex='1' volume="1" iconSrc="./images/tumblencedIcons/sketch.svg" key='SkillBar-1'></SkillBar>
          <SkillBar barIndex='2' volume="0.9" iconSrc="./images/tumblencedIcons/iconTextureFilterXD.svg" key='SkillBar-2'></SkillBar>
          <SkillBar barIndex='3' volume="0.8" iconSrc="./images/tumblencedIcons/iconTextureFilterAE.svg" key='SkillBar-3'></SkillBar>
          <SkillBar barIndex='4' volume="0.9" iconSrc="./images/tumblencedIcons/ai.svg" key='SkillBar-4'></SkillBar>
          <SkillBar barIndex='5' volume="0.7" iconSrc="./images/tumblencedIcons/ps.svg" key='SkillBar-5'></SkillBar>
          <SkillBar barIndex='6' volume="0.5" iconSrc="./images/tumblencedIcons/pr.svg" key='SkillBar-6'></SkillBar>
          <SkillBar barIndex='7' volume="0.3" iconSrc="./images/tumblencedIcons/dw.svg" key='SkillBar-7'></SkillBar>
          <SkillBar barIndex='8' volume="0.3" iconSrc="./images/tumblencedIcons/id.svg" key='SkillBar-8'></SkillBar>
        </div>
        <div className="skill-column">
          <p className="en-text-sm">UI Engineering/</p>
          <p className="cn-text-xs">介面工程</p>
          <hr className="hr-sm"></hr>
          <SkillBar barIndex='9' volume="0.7" iconSrc="./images/tumblencedIcons/svg.svg" key='SkillBar-9'></SkillBar>
          <SkillBar barIndex='10' volume="0.4" iconSrc="./images/tumblencedIcons/astudio.svg" key='SkillBar-10'></SkillBar>
          <SkillBar barIndex='11' volume="0.6" iconSrc="./images/tumblencedIcons/xcode.svg" key='SkillBar-11'></SkillBar>
          <SkillBar barIndex='12' volume="0.6" iconSrc="./images/tumblencedIcons/wp.svg" key='SkillBar-12'></SkillBar>
        </div>
        <div className="skill-column">
          <p className="en-text-sm">Front-end/</p>
          <p className="cn-text-xs">前端</p>
          <hr className="hr-sm"></hr>
          <SkillBar barIndex='17' volume="0.7" iconSrc="./images/tumblencedIcons/react.svg" key='SkillBar-17'></SkillBar>
          <SkillBar barIndex='18' volume="0.4" iconSrc="./images/tumblencedIcons/swift.svg" key='SkillBar-18'></SkillBar>
          <SkillBar barIndex='19' volume="0.7" iconSrc="./images/tumblencedIcons/java.svg" key='SkillBar-19'></SkillBar>
          <SkillBar barIndex='20' volume="0.9" iconSrc="./images/tumblencedIcons/jq.svg" key='SkillBar-20'></SkillBar>
          <SkillBar barIndex='21' volume="0.5" iconSrc="./images/tumblencedIcons/android.svg" key='SkillBar-21'></SkillBar>
          <SkillBar barIndex='22' volume="0.9" iconSrc="./images/tumblencedIcons/js.svg" key='SkillBar-22'></SkillBar>
          <SkillBar barIndex='23' volume="1" iconSrc="./images/tumblencedIcons/html.svg" key='SkillBar-23'></SkillBar>
          <SkillBar barIndex='24' volume="1" iconSrc="./images/tumblencedIcons/css.svg" key='SkillBar-24'></SkillBar>
        </div>
      </div>
    )
  }

  render() {
    this.checkAnimationMoveState(this.props.getAnimationMoveInfo)
    let svg = this.checkShouldPresentSkillBar()
    return (
      <div className="about-me-left-part">
        <div id="self-intro-section">
          <hr></hr>
          <p id="name-title">
            <span className="cn-title">蘇桓晨</span><br />
            <span className="en-text-lg">Umas</span>
          </p>
          <ButtonNormal hyperLink="https://www.facebook.com/profile.php?id=100000648980790" cnTitle="聯絡我" enTitle="Contact" />
          <p className="brif-biography">
            <span className="cn-text-md">現居台北推新有生接得，的成時起了親來到不飯家些新開中強必晚教看作轉！發育景古早話魚快地富要商際，去上縣我們。</span>
            <span className="en-text-md">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ips</span>
          </p>
        </div>

        {svg}


        <div id="click-hint-container">
          <hr className="hr-sm"></hr>
          <h3 className="en-text-sm">Click bars to show more.</h3>
        </div>
      </div>
    )
  }
}

export default AboutMeLeft;
