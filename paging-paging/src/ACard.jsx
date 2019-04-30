import React, { Component } from 'react';
import './ACard.css'
import BCard from './BCard';

let currentLeavingStateCheck = ''
let currentCommingStateCheck = ''
let currentInACardMoveStateCheck = ''
let currentMoveStateCheck = []
let currentIdleStateCheck = []

class ACard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  animationMoveInfoInACard = ['', '', '']

  onACardMoveCome = ([from, to]) => {
    this.animationMoveInfoInACard = ['Come', from, to]
    // console.log(this.props.aCardIndex + ' Card Start Comming!');
  }

  onACardMoveCame = ([from, to]) => {
    this.animationMoveInfoInACard = ['Came', from, to]
    // console.log(this.props.aCardIndex + ' Card Finished Comming!');
  }

  onACardMoveLeave = ([from, to]) => {
    this.animationMoveInfoInACard = ['Leave', from, to]
    // console.log(this.props.aCardIndex + ' Card Start Leaving!');
  }

  onACardMoveLeft = ([from, to]) => {
    this.animationMoveInfoInACard = ['Left', from, to]
    // console.log(this.props.aCardIndex + ' Card Finished Leaving!');
  }

  inACardFinished = ([from, to]) => {
    this.animationMoveInfoInACard = ['inACardFinished', from, to]
    // console.log(this.props.aCardIndex + ' Card Finished Moving (In-ACard-Move)!');
  }

  inACardStart = ([from, to]) => {
    this.animationMoveInfoInACard = ['inACardStart', from, to]
    // console.log(this.props.aCardIndex + ' Card Start Moving (In-ACard-Move)!');
  }

  onMoveStart = () => {
    // console.log('A-Card ' + this.props.aCardIndex + ' Card onMoveStart!');
  }

  onMoveFinished = () => {
    // console.log('A-Card ' + this.props.aCardIndex + ' Card onMoveFinished!');
  }

  onACardIdleStart = () => {
    // console.log('A-card ' + this.props.aCardIndex + ' Card onACardIdleStart!');
  }

  onACardIdleFinished = () => {
    // console.log('A-card ' + this.props.aCardIndex + ' Card onACardIdleFinished!');
  }

  setOnACardMoveLeft = ([state, from, to]) => {
    if (from[0] === this.props.aCardIndex) {
      // 有關連卡是Leaving
      if (state === 'move finished') {
        // Leaving卡結束Leaving
        this.onACardMoveLeft([from, to])
        this.animationMoveInfoInACard = ['left', from, to]
        // Leaving關聯卡設定完後不再設定其他呼叫的Leaving卡
        currentLeavingStateCheck = state
      }
    }
  }

  setOnACardMoveCame = ([state, from, to]) => {
    if (to[0] === this.props.aCardIndex) {
      // 有關連卡是Comming
      if (state === 'move finished') {
        // Comming卡結束Comming
        this.onACardMoveCame([from, to])
        this.animationMoveInfoInACard = ['came', from, to]
        // Comming關聯卡設定完後不再設定其他呼叫的Comming卡
        currentCommingStateCheck = state
      }
    }
  }

  setOnACardMoveLeave = ([state, from, to]) => {
    if (from[0] === this.props.aCardIndex) {
      // 有關連卡是Leaving
      if (state === 'move start') {
        // Leaving卡開始Leaving
        this.onACardMoveLeave([from, to])
        this.animationMoveInfoInACard = ['leave', from, to]
        // Leaving關聯卡設定完後不再設定其他呼叫的Leaving卡
        currentLeavingStateCheck = state
      }
    }
  }

  setOnACardMoveCome = ([state, from, to]) => {
    if (to[0] === this.props.aCardIndex) {
      // 有關連卡是Comming
      if (state === 'move start') {
        // Comming卡開始Comming
        this.onACardMoveCome([from, to])
        this.animationMoveInfoInACard = ['come', from, to]
        // Comming關聯卡設定完後不再設定其他呼叫的Comming卡
        currentCommingStateCheck = state
      }
    }
  }

  setOnMoveStart = ([state, from, to]) => {
    if (from[0] !== to[0]) {
      // 卡片間移動
      if (currentLeavingStateCheck !== state) {
        // 只有第一次呼叫所有卡時設定Leaving關聯卡
        this.setOnACardMoveLeave([state, from, to])
      }
      if (currentCommingStateCheck !== state) {
        // 只有第一次呼叫所有卡時設定Comming關聯卡
        this.setOnACardMoveCome([state, from, to])
      }
    } else {
      // 卡片內移動
      if (from[0] === this.props.aCardIndex || to[0] === this.props.aCardIndex) {
        // 只要我這張卡移動
        if (currentInACardMoveStateCheck !== 'start') {
          // 動作只觸發一次
          this.inACardStart([from, to])
          currentInACardMoveStateCheck = 'start'
        }
      }
    }
    if (from[0] === this.props.aCardIndex || to[0] === this.props.aCardIndex) {
      // 只要我這張卡移動
      let indexStartItemCheck = (this.props.aCardIndex + 'start')
      let indexFinishedCheck = (this.props.aCardIndex + 'finished')
      if (!currentMoveStateCheck.includes(indexStartItemCheck)) {
        // 動作只觸發一次
        this.onMoveStart()
        currentMoveStateCheck.push(indexStartItemCheck)
        if (currentMoveStateCheck.includes(indexFinishedCheck)) {
          let indexFinishedCheckIndex = currentMoveStateCheck.indexOf(indexFinishedCheck)
          currentMoveStateCheck.splice(indexFinishedCheckIndex, 1)
        }
      }


    } else {
      let indexStartCheck = (this.props.aCardIndex + 'start')
      let indexFinishedCheck = (this.props.aCardIndex + 'finished')
      let finishedIndexCheckIndex = currentIdleStateCheck.indexOf(indexFinishedCheck)
      if (!currentIdleStateCheck.includes(indexStartCheck)) {
        if (currentIdleStateCheck.includes(indexFinishedCheck)) { currentIdleStateCheck.splice(finishedIndexCheckIndex, 1)  }
        currentIdleStateCheck.push(indexStartCheck)
        this.onACardIdleStart()
      }
    }
  }

  setOnMovFinished = ([state, from, to]) => {
    if (from[0] !== to[0]) {
      // 卡片間移動
      if (currentLeavingStateCheck !== state) {
        // 只有第一次呼叫所有卡時設定Leaving關聯卡
        this.setOnACardMoveLeft([state, from, to])
      }
      if (currentCommingStateCheck !== state) {
        // 只有第一次呼叫所有卡時設定Comming關聯卡
        this.setOnACardMoveCame([state, from, to])
      }
    } else {
      // 卡片內移動
      if (from[0] === this.props.aCardIndex || to[0] === this.props.aCardIndex) {
        // 只要我這張卡移動
        if (currentInACardMoveStateCheck !== 'finished') {
          // 動作只觸發一次
          this.inACardFinished([from, to])
          currentInACardMoveStateCheck = 'finished'
        }
      }
    }
    if (from[0] === this.props.aCardIndex || to[0] === this.props.aCardIndex) {
      // 只要我這張卡移動
      let indexStartCheck = this.props.aCardIndex + 'start'
      let indexFinishedCheck = this.props.aCardIndex + 'finished'
      if (!currentMoveStateCheck.includes(indexFinishedCheck)) {
        // 動作只觸發一次
        this.onMoveFinished()
        currentMoveStateCheck.push(indexFinishedCheck)
        if (currentMoveStateCheck.includes(indexStartCheck)) {
          let indexStartCheckIndex = currentMoveStateCheck.indexOf(indexStartCheck)
          currentMoveStateCheck.splice(indexStartCheckIndex, 1)
        }
      }
    } else {
      let indexStartCheck = (this.props.aCardIndex + 'start')
      let indexFinishedCheck = (this.props.aCardIndex + 'finished')
      let indexStartCheckIndex = currentIdleStateCheck.indexOf(indexStartCheck)
      if (currentIdleStateCheck.includes(indexStartCheck)) {
        if (currentIdleStateCheck.includes(indexStartCheck)) {  currentIdleStateCheck.splice(indexStartCheckIndex, 1) }
        currentIdleStateCheck.push(indexFinishedCheck)
        this.onACardIdleFinished()
      }
    }
  }

  checkAnimationOnMove = ([state, from, to]) => {
    if (state === 'move start') {
      this.setOnMoveStart([state, from, to])
    } else if (state === 'move finished') {
      this.setOnMovFinished([state, from, to])
    }
  }

  render() {
    this.checkAnimationOnMove(this.props.passAnimationMoveState)
    return (
      <div style={this.props.style} child={this.props.child} className="a-card" id={this.props.id}>
        <div className="b-card-container" style={this.props.containerStyle}>
          {this.props.child.map((bCardItem, bCardIndex) => {
            return (<BCard
              child={bCardItem.BCardChild}
              style={bCardItem.BCardAttr.style}
              key={bCardIndex}
              getJumpBCardRequest={this.props.getJumpBCardRequest}
              getBCardDataList={this.props.child}
              idFromParent={'b-card-' + bCardIndex + '-in-' + this.props.id}
              getAnimationMoveInfo={this.animationMoveInfoInACard}
              cardIndex={[this.props.aCardIndex, bCardIndex]}
              serMoveNextLocationInA={this.props.serMoveNextLocationInContainer}
              screenType={this.props.screenType}
            ></BCard>)
          })}
        </div>
      </div>
    )
  }

}

export default ACard;