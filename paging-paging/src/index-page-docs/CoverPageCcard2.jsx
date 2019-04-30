import React, { Component } from 'react';
import './indexCardStyle.css';
import ButtonNormal from '../Button';

class CoverPageCcard2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animationMoveInfo: this.props.getAnimationMoveInfo
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
    return (
      <div className="landingpage-right-part">
        <div className="onepage-pagination-group">
          <svg viewBox="0 0 10 10" id="onepage-pagination-item-prototype">
            <defs>
              <rect id="onepage-pagination-item-shape" height="10" width="10" y="0" x="0"></rect>
            </defs>
          </svg>
          <div className="onepage-pagination-item">
            <svg className="" viewBox="0 0 10 10">
              <use x="0" y="0" href="#onepage-pagination-item-shape" />
            </svg>
          </div>
          <div className="onepage-pagination-item">
            <svg className="" viewBox="0 0 10 10">
              <use x="0" y="0" href="#onepage-pagination-item-shape" />
            </svg>
          </div>
          <div className="onepage-pagination-item">
            <svg className="" viewBox="0 0 10 10">
              <use x="0" y="0" href="#onepage-pagination-item-shape" />
            </svg>
          </div>
          <div className="onepage-pagination-item">
            <svg className="" viewBox="0 0 10 10">
              <use x="0" y="0" href="#onepage-pagination-item-shape" />
            </svg>
          </div>
          <div className="onepage-pagination-item">
            <svg className="" viewBox="0 0 10 10">
              <use x="0" y="0" href="#onepage-pagination-item-shape" />
            </svg>
          </div>
          <div className="onepage-pagination-item">
            <svg className="" viewBox="0 0 10 10">
              <use x="0" y="0" href="#onepage-pagination-item-shape" />
            </svg>
          </div>
          <div className="onepage-pagination-item">
            <svg className="" viewBox="0 0 10 10">
              <use x="0" y="0" href="#onepage-pagination-item-shape" />
            </svg>
          </div>
          <div className="onepage-pagination-item">
            <svg className="" viewBox="0 0 10 10">
              <use x="0" y="0" href="#onepage-pagination-item-shape" />
            </svg>
          </div>
          <div className="onepage-pagination-item">
            <svg className="" viewBox="0 0 10 10">
              <use x="0" y="0" href="#onepage-pagination-item-shape" />
            </svg>
          </div>
        </div>
        <div className="landingpage-buttons">
          <ButtonNormal hyperLink="https://www.facebook.com/profile.php?id=100000648980790" cnTitle="履歷" enTitle="Resume" />
          <ButtonNormal hyperLink="https://www.facebook.com/profile.php?id=100000648980790" cnTitle="其他作品集" enTitle="Other eportfolio" />
          <ButtonNormal hyperLink="https://www.facebook.com/profile.php?id=100000648980790" cnTitle="聯絡我" enTitle="Contact" customId="contact" importantBtn />
        </div>
        <div className="gallery-group">
          <div className="vertical-scroll-area">
            <div className="gallery-item">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"     x="0px" y="0px" viewBox="0 0 676 666" enable-background="new 0 0 676 666">       
                  <clipPath id="SVGID_2_">
                    <path id="SVGID_1_" d="M625.1,608H50.9C22.8,608,0,585.2,0,557.1V50.9C0,22.8,22.8,0,50.9,0h582.6C657,0,676,19,676,42.4v514.6
                    C676,585.2,653.2,608,625.1,608z"/>
                  </clipPath>
                  <g transform="translate(0,501)" >
                    <path opacity="0.14" fill="#4B4441" enable-background="new    " d="M676,0H0v52.7c0,27.8,34.3,60.9,79,66.3s100,6,141.8,15.2
                      c83.7,18.4,71,29.8,118.2,29.8s40.2-15.2,137.7-32.5c42.7-7.6,86.3-9.9,121.7-14.3c45.4-5.6,77.5-37.5,77.5-64.6L676,0z"/>
                    <path opacity="0.14" fill="#4B4441" enable-background="new    " d="M0.1,0v53.7c0,55.5,137.1,40,220.8,58.4S291.8,164,339,164
                      s40.3-37.4,137.8-54.6S676,101.8,676,53.7V0H0.1z"/>
                  </g>
                  <image overflow="visible" clip-path="url(#SVGID_2_)" width="676" height="608" xlinkHref="./images/leave background-01.jpg">
                  </image>
                  <g transform="translate(111,137)" >
                    <path fill="#FFFFFF" d="M10.5,209.7v-197c0-4.2-0.6-6.8-1.9-7.7S4.5,3.4,0.1,3.3L0,0h37v3.3h-3.7c-3.5,0-5.8,0.5-6.7,1.5
                      c-1,1-1.4,3.4-1.4,7.1v212.3c0,7.7,2.5,14,7.4,18.9c4.9,4.8,11.3,7.3,19.1,7.3c9.9,0,17.3-3.1,22.2-9.2c4.8-6.1,7.3-15.5,7.3-28
                      V16.6c0-5.2-0.8-8.7-2.3-10.6s-4.2-2.8-7.9-2.8h-3V0h29.4v3.3h-2.6c-3.4,0-5.8,0.9-7.2,2.8c-1.4,1.9-2.1,5.4-2.2,10.6v198
                      c0,13.3-3.1,23.2-9.2,29.7c-6.2,6.5-15.5,9.8-28.1,9.8c-8.1,0-15.1-1.4-20.9-4.1s-9.9-6.6-12.3-11.6c-1.6-3.4-2.7-7-3.3-10.8
                      C10.8,221.8,10.4,215.7,10.5,209.7z"/>
                    <path fill="#FFFFFF" d="M161.6,0v3.3h-2.9c-3.7,0-6.2,0.5-7.2,1.5s-1.6,3.4-1.6,7.2v228.4c0,4,0.5,6.4,1.5,7.4
                      c1,0.9,3.6,1.4,7.8,1.4h2.4v3.3h-38.4v-3.3h2c4.3,0,7-0.5,8.1-1.5c1.2-1,1.7-3.4,1.7-7.3V11.9c0-3.9-0.5-6.4-1.5-7.3
                      c-1-0.9-3.5-1.4-7.6-1.4h-2.7V0H161.6z"/>
                    <path fill="#FFFFFF" d="M424.3,106.6c2.4-8.7,10.1-10.6,17.5-10.6v-3.3H428l0,0h-4.4h-16.4V96c4.1,0.3,8,0.5,9.7,1.2
                      c2.7,1.2,3.3,3.6,3.4,5.9c-0.2,2.6-0.8,5.1-1.6,7.6l0,0l-24.1,89.1l-22.8-97.2c0-0.2-0.1-0.4-0.1-0.6c-0.3-1.8,0.4-3.6,1.9-4.7
                      c1.9-1,3.9-1.4,6-1.3h4.7v-3.3h-43V96c3.1-0.1,6.2,0.4,9.1,1.7c3.2,1.7,5.7,4.6,7,8l0,0l29.3,123.8L359.1,332l0,0
                      c-1.9,6.4-5.1,8.1-7.9,9.3c-3.1,1.3-6.5,2-9.8,2.2v3.3h34.3v-3.3c-3.5-0.2-6.9-0.8-10.2-1.9c-2.2-0.7-2.9-3.2-2.9-5.8
                      c0-0.5,0.1-0.9,0.2-1.4l1.8-6.7l0,0l24.1-89.6l19.9,84.3c0.5,2,1.7,7.5,2.4,10.2l0.7,3c0.2,1,0.2,2-0.1,3c-0.5,1.4-1.6,2.5-3,3.1
                      c-3,1.1-6.3,1.8-9.5,1.8v3.3h42.5v-3.3c-6.6-0.2-12.9-1.5-15.8-12.1l-3.7-15.6l0,0l-25.4-107.5L424.3,106.6z"/>
                    <path fill="#FFFFFF" d="M251.4,302.4v-197c0-4.2-0.6-6.8-1.9-7.7c-1.3-0.9-4.1-1.5-8.6-1.6l-0.1-3.3h37V96h-3.7
                      c-3.5,0-5.7,0.5-6.7,1.5c-1,1-1.4,3.4-1.4,7.1v212.3c0,7.7,2.5,14,7.4,18.9c4.9,4.8,11.3,7.3,19.1,7.3c9.9,0,17.3-3.1,22.2-9.2
                      c4.8-6.1,7.3-15.5,7.3-28V109.4c0-5.2-0.8-8.7-2.3-10.6c-1.5-1.9-4.2-2.8-7.9-2.8h-3v-3.3h29.4V96h-2.6c-3.4,0-5.8,0.9-7.2,2.8
                      c-1.4,1.9-2.1,5.4-2.1,10.6v198c0,13.3-3.1,23.2-9.2,29.7c-6.2,6.5-15.5,9.8-28.1,9.8c-8.1,0-15.1-1.4-20.9-4.1
                      c-5.8-2.7-9.9-6.6-12.3-11.5c-1.6-3.4-2.7-7-3.3-10.8C251.7,314.5,251.3,308.4,251.4,302.4z"/>
                    <polygon fill="#FFFFFF" points="218,128.5 187.3,219.5 183.3,217.6 213.9,127.1 		"/>
                  </g>
                
                <a id="godown-btn" href="#papata" onClick={this.props.serMoveNextLocationInCC}>
                  <circle fill="#49423D" cx="338" cy="607.5" r="58"/>
                  <path fill="#FFFFFF" d="M357,594.5c2.2,0,4,1.9,3.9,4.1c0,0.9-0.3,1.7-0.8,2.4l-19,24.1c-1.4,1.7-3.9,2-5.6,0.6
                c-0.2-0.2-0.4-0.4-0.6-0.6l-19-24.1c-1.3-1.8-1-4.3,0.7-5.6c0.7-0.5,1.5-0.8,2.4-0.8H357z"/>
                </a>
              </svg>
                
                </div>
            <div className="gallery-item">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"     x="0px" y="0px" viewBox="0 0 676 666" enable-background="new 0 0 676 666">       
                  <clipPath id="SVGID_2_">
                    <path id="SVGID_1_" d="M625.1,608H50.9C22.8,608,0,585.2,0,557.1V50.9C0,22.8,22.8,0,50.9,0h582.6C657,0,676,19,676,42.4v514.6
                    C676,585.2,653.2,608,625.1,608z"/>
                  </clipPath>
                  <g transform="translate(0,501)" >
                    <path opacity="0.14" fill="#4B4441" enable-background="new    " d="M676,0H0v52.7c0,27.8,34.3,60.9,79,66.3s100,6,141.8,15.2
                      c83.7,18.4,71,29.8,118.2,29.8s40.2-15.2,137.7-32.5c42.7-7.6,86.3-9.9,121.7-14.3c45.4-5.6,77.5-37.5,77.5-64.6L676,0z"/>
                    <path opacity="0.14" fill="#4B4441" enable-background="new    " d="M0.1,0v53.7c0,55.5,137.1,40,220.8,58.4S291.8,164,339,164
                      s40.3-37.4,137.8-54.6S676,101.8,676,53.7V0H0.1z"/>
                  </g>
                  <image overflow="visible" clip-path="url(#SVGID_2_)" width="676" height="608" xlinkHref="./images/leave background-01.jpg">
                  </image>
                  <g transform="translate(111,137)" >
                    <path fill="#FFFFFF" d="M10.5,209.7v-197c0-4.2-0.6-6.8-1.9-7.7S4.5,3.4,0.1,3.3L0,0h37v3.3h-3.7c-3.5,0-5.8,0.5-6.7,1.5
                      c-1,1-1.4,3.4-1.4,7.1v212.3c0,7.7,2.5,14,7.4,18.9c4.9,4.8,11.3,7.3,19.1,7.3c9.9,0,17.3-3.1,22.2-9.2c4.8-6.1,7.3-15.5,7.3-28
                      V16.6c0-5.2-0.8-8.7-2.3-10.6s-4.2-2.8-7.9-2.8h-3V0h29.4v3.3h-2.6c-3.4,0-5.8,0.9-7.2,2.8c-1.4,1.9-2.1,5.4-2.2,10.6v198
                      c0,13.3-3.1,23.2-9.2,29.7c-6.2,6.5-15.5,9.8-28.1,9.8c-8.1,0-15.1-1.4-20.9-4.1s-9.9-6.6-12.3-11.6c-1.6-3.4-2.7-7-3.3-10.8
                      C10.8,221.8,10.4,215.7,10.5,209.7z"/>
                    <path fill="#FFFFFF" d="M161.6,0v3.3h-2.9c-3.7,0-6.2,0.5-7.2,1.5s-1.6,3.4-1.6,7.2v228.4c0,4,0.5,6.4,1.5,7.4
                      c1,0.9,3.6,1.4,7.8,1.4h2.4v3.3h-38.4v-3.3h2c4.3,0,7-0.5,8.1-1.5c1.2-1,1.7-3.4,1.7-7.3V11.9c0-3.9-0.5-6.4-1.5-7.3
                      c-1-0.9-3.5-1.4-7.6-1.4h-2.7V0H161.6z"/>
                    <path fill="#FFFFFF" d="M424.3,106.6c2.4-8.7,10.1-10.6,17.5-10.6v-3.3H428l0,0h-4.4h-16.4V96c4.1,0.3,8,0.5,9.7,1.2
                      c2.7,1.2,3.3,3.6,3.4,5.9c-0.2,2.6-0.8,5.1-1.6,7.6l0,0l-24.1,89.1l-22.8-97.2c0-0.2-0.1-0.4-0.1-0.6c-0.3-1.8,0.4-3.6,1.9-4.7
                      c1.9-1,3.9-1.4,6-1.3h4.7v-3.3h-43V96c3.1-0.1,6.2,0.4,9.1,1.7c3.2,1.7,5.7,4.6,7,8l0,0l29.3,123.8L359.1,332l0,0
                      c-1.9,6.4-5.1,8.1-7.9,9.3c-3.1,1.3-6.5,2-9.8,2.2v3.3h34.3v-3.3c-3.5-0.2-6.9-0.8-10.2-1.9c-2.2-0.7-2.9-3.2-2.9-5.8
                      c0-0.5,0.1-0.9,0.2-1.4l1.8-6.7l0,0l24.1-89.6l19.9,84.3c0.5,2,1.7,7.5,2.4,10.2l0.7,3c0.2,1,0.2,2-0.1,3c-0.5,1.4-1.6,2.5-3,3.1
                      c-3,1.1-6.3,1.8-9.5,1.8v3.3h42.5v-3.3c-6.6-0.2-12.9-1.5-15.8-12.1l-3.7-15.6l0,0l-25.4-107.5L424.3,106.6z"/>
                    <path fill="#FFFFFF" d="M251.4,302.4v-197c0-4.2-0.6-6.8-1.9-7.7c-1.3-0.9-4.1-1.5-8.6-1.6l-0.1-3.3h37V96h-3.7
                      c-3.5,0-5.7,0.5-6.7,1.5c-1,1-1.4,3.4-1.4,7.1v212.3c0,7.7,2.5,14,7.4,18.9c4.9,4.8,11.3,7.3,19.1,7.3c9.9,0,17.3-3.1,22.2-9.2
                      c4.8-6.1,7.3-15.5,7.3-28V109.4c0-5.2-0.8-8.7-2.3-10.6c-1.5-1.9-4.2-2.8-7.9-2.8h-3v-3.3h29.4V96h-2.6c-3.4,0-5.8,0.9-7.2,2.8
                      c-1.4,1.9-2.1,5.4-2.1,10.6v198c0,13.3-3.1,23.2-9.2,29.7c-6.2,6.5-15.5,9.8-28.1,9.8c-8.1,0-15.1-1.4-20.9-4.1
                      c-5.8-2.7-9.9-6.6-12.3-11.5c-1.6-3.4-2.7-7-3.3-10.8C251.7,314.5,251.3,308.4,251.4,302.4z"/>
                    <polygon fill="#FFFFFF" points="218,128.5 187.3,219.5 183.3,217.6 213.9,127.1 		"/>
                  </g>
                
                <a id="godown-btn" href="#papata" onClick={this.props.serMoveNextLocationInCC}>
                  <circle fill="#49423D" cx="338" cy="607.5" r="58"/>
                  <path fill="#FFFFFF" d="M357,594.5c2.2,0,4,1.9,3.9,4.1c0,0.9-0.3,1.7-0.8,2.4l-19,24.1c-1.4,1.7-3.9,2-5.6,0.6
                c-0.2-0.2-0.4-0.4-0.6-0.6l-19-24.1c-1.3-1.8-1-4.3,0.7-5.6c0.7-0.5,1.5-0.8,2.4-0.8H357z"/>
                </a>
              </svg>
                
                </div>
         </div>
        </div>
        <div className="social-media-button-group">
          <a className="social-media-button" href="https://www.facebook.com/profile.php?id=100000648980790"> </a>
          <a className="social-media-button" href="https://www.facebook.com/profile.php?id=100000648980790"> </a>
          <a className="social-media-button" href="https://www.facebook.com/profile.php?id=100000648980790"> </a>
          <h3 id="cover-page-year-stemp" className="en-text-lg">Dec 2018</h3>
        </div>
      </div>
    )
  }
}

export default CoverPageCcard2;
