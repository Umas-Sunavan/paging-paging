import React, { Component } from 'react';
import './BCard.css'
import CCard from './CCard';



class BCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  animationMoveInfoFromBCard = ['','','']

  onThisBCardCome = ([state, from, to]) => {
    console.log('B-card ' + this.props.cardIndex + ' come');
    this.animationMoveInfoFromBCard = ['come',from,to]
  }

  onThisBCardLeave = ([state, from, to]) => {
    console.log('B-card ' + this.props.cardIndex + ' leave');
    this.animationMoveInfoFromBCard = ['leave',from,to]
  }

  onThisBCardCame = ([state, from, to]) => {
    console.log('B-card ' + this.props.cardIndex + ' came');
    this.animationMoveInfoFromBCard = ['came',from,to]
  }

  onThisBCardLeft = ([state, from, to]) => {
    console.log('B-card ' + this.props.cardIndex + ' left');
    this.animationMoveInfoFromBCard = ['left',from,to]
  }


  onACardCome = () => {
    // console.log(this.props.cardIndex + 'onACardCome');
  }

  onACardLeave = () => {
    // console.log(this.props.cardIndex + 'onACardLeave');
  }

  InACardMoveStart = () => {
    // console.log(this.props.cardIndex + 'InACardMoveStart');
  }

  onACardCame = () => {
    // console.log(this.props.cardIndex + 'came');
  }

  onACardLeft = () => {
    // console.log(this.props.cardIndex + 'left');
  }

  InACardMoveFinished = () => {
    // console.log(this.props.cardIndex + 'inACardFinished');
  }

  compare = (indexToCompare, thisCardIndex) => {
    return (indexToCompare[0] === thisCardIndex[0] && indexToCompare[1] === thisCardIndex[1]) ? true : false
  }

  onMoveFinished = ([state, from, to]) => {
    // check is moving finished from or to this a-card  
    switch (state) {
      case 'came':
        this.onACardCame()
        break;
      case 'left':
        this.onACardLeft()
        break;
      case 'inACardFinished':
        this.InACardMoveFinished()
        break;
      default:
        console.warn('Unknown Moving State: ' + this.props.cardIndex);
        break;
    }

    // check is moved from or to this b-card  
    if (this.compare(from, this.props.cardIndex)) {
      this.onThisBCardLeft([state, from, to])
    } else if (this.compare(to, this.props.cardIndex)) {
      this.onThisBCardCame([state, from, to])
    }
  }

  onMoveStart = ([state, from, to]) => {
    // check is moving start from or to this a-card  
    switch (state) {
      case 'come':
        this.onACardCome()
        break;
      case 'leave':
        this.onACardLeave()
        break;
      case 'inACardStart':
        this.InACardMoveStart()
        break;
      default:
        console.warn('Unknown Moving State: ' + this.props.cardIndex);
        break;
    }
    // check is moved from or to this b-card  
    if (this.compare(from, this.props.cardIndex)) {
      this.onThisBCardLeave([state, from, to])
    } else if (this.compare(to, this.props.cardIndex)) {
      this.onThisBCardCome([state, from, to])
    }
  }

  moveCheck = ''

  checkAnimationMoveState = ([state, from, to]) => {
    if (this.moveCheck !== 'come' && this.moveCheck !== 'leave' && this.moveCheck !== 'inACardStart') {
      if (state === 'come' || state === 'leave' || state === 'inACardStart') {
        this.onMoveStart([state, from, to])
      }
      this.moveCheck = state
    } else if (this.moveCheck !== 'came' && this.moveCheck !== 'left' && this.moveCheck !== 'inACardFinished') {
      if (state === 'came' || state === 'left' || state === 'inACardFinished') {
        this.onMoveFinished([state, from, to])
      }
      this.moveCheck = state
    }
  }

  render() {
    this.checkAnimationMoveState(this.props.getAnimationMoveInfo)
    return (
      <div style={this.props.style} child={this.props.child} id={this.props.idFromParent} className={"b-card"}>
        {this.props.child.map((cCardItem, cCardIndex) => {
          return (<CCard
            key={cCardIndex}
            style={cCardItem.style}
            value={cCardItem.value}
            valueFunc={cCardItem.valueFunc}
            sidemenu={cCardItem.sidemenu}
            getJumpBCardRequest={this.props.getJumpBCardRequest}
            getBCardDataList={this.props.getBCardDataList}
            cardIndex={[this.props.cardIndex[0], this.props.cardIndex[1], cCardIndex]}
            getAnimationMoveInfoFromBCard={this.animationMoveInfoFromBCard}
            serMoveNextLocationInB={this.props.serMoveNextLocationInA}
            className={cCardItem.className}
            screenType={this.props.screenType}
          ></CCard>)
        })}
      </div>
    )
  }

}

export default BCard;