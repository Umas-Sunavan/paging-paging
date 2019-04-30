
import React, { Component } from 'react';

class ACardContentPrototype1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animationMoveInfo: this.props.getAnimationMoveInfo,
      newWidth: document.getElementById('card-app').clientWidth,
      newHeight: document.getElementById('card-app').clientHeight,
      cnFeatureArrayText: this.props.cnFeatureArrayText,
      enFeatureArrayText: this.props.enFeatureArrayText
    }
  }

  showDetailFeatureText = (event, language) => {
    let cCardDOMElement = event.target.parentNode.parentNode.parentNode


    if (cCardDOMElement !== null) {
      for (let childIndex in cCardDOMElement.children[0].children) {
        let item = cCardDOMElement.children[0].children[childIndex]
        switch (language) {
          case 'cn':
            if (item.className === 'detailed-feature-container cn') {
              item.className = item.className + ' detailed-feature-container-reveal'
              setTimeout(() => { item.setAttribute('style', 'opacity:1;') }, 0)
            }
            break;
          case 'en':
            if (item.className === 'detailed-feature-container en') {
              item.className = item.className + ' detailed-feature-container-reveal'
              setTimeout(() => { item.setAttribute('style', 'opacity:1;') }, 0)
            }
            break;
          default:
            break;
        }

      }
    }
  }

  hideDetailFeatureText = (event, language) => {
    let detailedContainer = event.target.parentNode.parentNode
    detailedContainer.setAttribute('style', 'opacity:0;')
    setTimeout((event) => {
      detailedContainer.className = 'detailed-feature-container ' + language
    }, 1200)
    console.warn('not properly set the time! the property of time in settimeout should be managed in the cardApp');

  }

  getEnFeatureArrayText = (key) => {
    return this.state.enFeatureArrayText.map((value, index) => {
      return  <span key={`content-feature-${key}-span-${index}`}>{value}<br/></span>
    })
  }

  getCnFeatureArrayText = (key) => {
    return this.state.cnFeatureArrayText.map((value, index) => {
      return  <span key={`content-feature-${key}-span-${index}`}>{value}<br/></span>
    })
  }

  render() {
    let enFeatureArrayText = (key) => this.getEnFeatureArrayText(key)
    let cnFeatureArrayText = (key) => this.getCnFeatureArrayText(key)
    return (
      <div className="a-card-contentprototype-left-part">
        <img className="about-island-site-logo" src="/images/about-island-typo.svg" alt="About Island Typograpgy" />
        <div className="content-feature-container">
          <p className="content-feature-text cn-text-sm">
            {cnFeatureArrayText(1)}
          </p>
          <a onClick={(event) => { this.showDetailFeatureText(event, 'cn') }} href="##" className="cn-text-sm">
            ...顯示更多
          </a>
          <p className="content-feature-text en-text-sm">
            {enFeatureArrayText(1)}
          </p>
          <a onClick={(event) => { this.showDetailFeatureText(event, 'en') }} href="##" className="en-text-md">...Show More</a>
        </div>
        <div className="detailed-feature-container cn">
          <p className="cn-text-sm">
            {cnFeatureArrayText(2)}  
          </p>
          <p>
            <a onClick={(event) => { this.hideDetailFeatureText(event, 'cn') }} href="##" className="cn-text-sm detailed-teature-cancel">關閉/Cancel</a><br />
          </p>
        </div>
        <div className="detailed-feature-container en">
          <p className="en-text-sm">
            {enFeatureArrayText(2)}
          </p>
          <p>
            <a onClick={(event) => { this.hideDetailFeatureText(event, 'en') }} href="##" className="en-text-sm detailed-teature-cancel">關閉/Cancel</a>
          </p>
        </div>
      </div>
    )
  }
}

export default ACardContentPrototype1;
