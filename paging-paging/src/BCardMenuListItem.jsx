import React, { Component } from 'react';
import './BCardMenuListItem.css';

class BCardMenuListItem extends Component {
  constructor(props) {
    super(props)
    let listItemTitle = [
      ['a專案封面', 'Project Cover'],
      ['初期', 'In the beginning'],
      ['應用工具', 'Applied Tools'],
      ['手稿', 'Refined Manuscript'],
      ['線框稿', 'Refined Wireframe'],
      ['視覺稿', 'Mockups'],
      ['介面製作', 'UI Engineering'],
      ['畢業展覽', 'Exhibition'],
      ['產品上架', 'Google Play']
    ]

    listItemTitle = this.props.listItemTitle

    this.state = {
      listItemStyles: {},
      listItemValues: listItemTitle,
      hasListDecorations: this.props.hasListDecorations,
      focusCurrentPage: this.props.focusCurrentPage,
      screenType: this.props.screenType
    }

  }

  componentDidMount = () => {
  }

  setItemFocusStyle = (bCardIndex) => {
    let distanceBetweenMenuAndCover = (this.state.screenType === 'mobile phone')?1:0
      if ((this.props.currentLocation[1] - distanceBetweenMenuAndCover) === bCardIndex) {
        return ' menu-item-focused'
      } else {
        return ' menu-item-secondary'
      }
  }

  render() {
    let bulletDisplay
    (this.state.hasListDecorations) ? bulletDisplay = {} : bulletDisplay = { "backgroundImage": "none" };
    let iteratorIndex = -1
    
    return (
      this.props.getBCardDataList.map((bCardItem, bCardIndex) => {
        if (bCardItem.BCardChild[0].isBCardIndexTarget) {
          iteratorIndex += 1
          if (this.state.listItemValues[iteratorIndex] !== undefined) {
            let shouldFocusStyle = (this.state.focusCurrentPage)?this.setItemFocusStyle(bCardIndex):''
            return (
              <li className="b-card-menu-list-item a-card-coverpage" key={bCardIndex}>
                <a href="#/" style={bulletDisplay} onClick={() => { this.props.getJumpBCardRequest(bCardIndex) }}>
                  <p className={'cn-text-sm' + shouldFocusStyle}>{this.state.listItemValues[iteratorIndex][0]}</p>
                  <p className={'cn-text-sm' + shouldFocusStyle}>{this.state.listItemValues[iteratorIndex][1]}</p>
                </a>
              </li>
            )

          } else {
            console.warn("there's a B card menu has no link assigned!")
            return <a href="./index.html" key={bCardIndex}>new A-Card</a>
          }
        }


      })
    )
  }

}

export default BCardMenuListItem;