import React, { Component } from 'react';
import './ACardCoverPrototype.css';
import ButtonNormal from '../Button';
import BCardMenuListItem from '../BCardMenuListItem';

class ACardCoverPrototype2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animationMoveInfo: this.props.getAnimationMoveInfo,
      cnAgencyText: this.props.cnAgencyText,
      enAgencyText: this.props.enAgencyText,
      cnMyRoleText: this.props.cnMyRoleText,
      enMyRoleText: this.props.enMyRoleText
    }
  }

  moveCheck = ''

  onThisCCardCome = () => {
    console.log('C-card ' + this.props.cardIndex + ' come');
  }

  onThisCCardCame = () => {
    console.log('C-card ' + this.props.cardIndex + ' came');
  }

  onThisCCardLeave = () => {
    console.log('C-card ' + this.props.cardIndex + ' leave');
  }

  onThisCCardLeft = () => {
    console.log('C-card ' + this.props.cardIndex + ' left');
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

    return (
      <div className="a-card-coveroprototype-right-part">
        <div className="onepage-pagination-group">

          <ul className="b-card-menu-ul">
            <BCardMenuListItem
              getJumpBCardRequest={this.props.getJumpBCardRequest}
              getBCardDataList={this.props.getBCardDataList}
              currentLocation={this.props.cardIndex}
              listItemTitle={this.props.menuArrayText || []}
              hasListDecorations={true}
              screenType={this.props.screenType}
            ></BCardMenuListItem>
          </ul>
          <div className="project-meta">
            <small className="en-text-sm">Agency</small>
            <p className="cn-text-sm">{this.state.cnAgencyText}</p>
            <p className="en-text-sm">{this.state.enAgencyText}</p>
            <br />
            <small className="en-text-sm">My Role</small>
            <p className="cn-text-sm">{this.state.cnMyRoleText}</p>
            <p className="en-text-sm">{this.state.enMyRoleText}</p>
          </div>
        </div>
        {/* <div className="landingpage-buttons">
          <ButtonNormal hyperLink="https://www.facebook.com/profile.php?id=100000648980790" cnTitle="履歷" enTitle="Resume" />
          <ButtonNormal hyperLink="https://www.facebook.com/profile.php?id=100000648980790" cnTitle="其他作品集" enTitle="Other eportfolio" />
          <ButtonNormal hyperLink="https://www.facebook.com/profile.php?id=100000648980790" cnTitle="聯絡我" enTitle="Contact" customId="contact" importantBtn />
        </div> */}

      </div>
    )
  }
}

export default ACardCoverPrototype2;
