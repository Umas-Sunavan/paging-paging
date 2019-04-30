import CoverPageCcard1 from "./index-page-docs/CoverPageCcard1.jsx";
import CoverPageCcard2 from "./index-page-docs/CoverPageCcard2.jsx";
import React from 'react';
import ACardCoverPrototype1 from "./a-card-cover-prototype/ACardCoverPrototype1.jsx";
import ACardCoverPrototype2 from "./a-card-cover-prototype/ACardCoverPrototype2.jsx";
import ACardContentPrototype1 from "./a-card-content-prototype/ACardContentPrototype1.jsx";
import ACardContentPrototype2 from "./a-card-content-prototype/ACardContentPrototype2.jsx";
import AbIlndBeginContentCard from "./a-card-content-prototype/AbIlndBeginContentCard.jsx";
import AboutMeLeft from "./a-card-about-me-C-card/AboutMeLeft.jsx";
import AboutMeRight from "./a-card-about-me-C-card/AboutMeRight.jsx";
import AboutIslandMockupCcard from "./about-island-C-card/AboutIslandMockupCcard.jsx";
import AboutIslandWireframeCcard from "./about-island-C-card/AboutIslandWireframeCcard .jsx";
import AboutIslandExhibitionCcard from "./about-island-C-card/AboutIslandExhibitionCcard.jsx";
import AboutIslandGoogleplayCcard from "./about-island-C-card/AboutIslandGoogleplayCcard.jsx";

function createRawCardDataList(bCardOuterHeight) {
  const cardList = _createCardList(bCardOuterHeight)
  console.log(cardList)
  return cardList
}

const _createCardList = (bCardOuterHeight) => {
  let cardList = []
  cardList.push({ ACardAttr: { style: { transform: 'translate3d(0px,0vh,0px)' } }, BCardContainerAttr: { style: { transform: 'translate3d(0px,0vh,0px)' } }, ACardChild: _createCoverBcard(bCardOuterHeight) })
  cardList.push({ ACardAttr: { style: { transform: 'translate3d(0px,0vh,0px)' } }, BCardContainerAttr: { style: { transform: 'translate3d(0px,0vh,0px)' } }, ACardChild: _createAbIlndBcard(bCardOuterHeight) })
  // cardList.push({ ACardAttr: { style: { transform: 'translate3d(0px,0vh,0px)' } }, BCardContainerAttr: { style: { transform: 'translate3d(0px,0vh,0px)' } }, ACardChild: _putBCardInACard(bCardOuterHeight) })
  // cardList.push({ ACardAttr: { style: { transform: 'translate3d(0px,0vh,0px)' } }, BCardContainerAttr: { style: { transform: 'translate3d(0px,0vh,0px)' } }, ACardChild: _putBCardInACard(bCardOuterHeight) })
  // cardList.push({ ACardAttr: { style: { transform: 'translate3d(0px,0vh,0px)' } }, BCardContainerAttr: { style: { transform: 'translate3d(0px,0vh,0px)' } }, ACardChild: _putBCardInACard(bCardOuterHeight) })
  // cardList.push({ ACardAttr: { style: { transform: 'translate3d(0px,0vh,0px)' } }, BCardContainerAttr: { style: { transform: 'translate3d(0px,0vh,0px)' } }, ACardChild: _putBCardInACard(bCardOuterHeight) })
  // cardList.push({ ACardAttr: { style: { transform: 'translate3d(0px,0vh,0px)' } }, BCardContainerAttr: { style: { transform: 'translate3d(0px,0vh,0px)' } }, ACardChild: _putBCardInACard(bCardOuterHeight) })
  // cardList.push({ ACardAttr: { style: { transform: 'translate3d(0px,0vh,0px)' } }, BCardContainerAttr: { style: { transform: 'translate3d(0px,0vh,0px)' } }, ACardChild: _putBCardInACard(bCardOuterHeight) })
  // cardList.push({ ACardAttr: { style: { transform: 'translate3d(0px,0vh,0px)' } }, BCardContainerAttr: { style: { transform: 'translate3d(0px,0vh,0px)' } }, ACardChild: _putBCardInACard(bCardOuterHeight) })
  // cardList.push({ ACardAttr: { style: { transform: 'translate3d(0px,0vh,0px)' } }, BCardContainerAttr: { style: { transform: 'translate3d(0px,0vh,0px)' } }, ACardChild: _putBCardInACard(bCardOuterHeight) })
  cardList.push({ ACardAttr: { style: { transform: 'translate3d(0px,0vh,0px)' } }, BCardContainerAttr: { style: { transform: 'translate3d(0px,0vh,0px)' } }, ACardChild: _createAboutMeBCard(bCardOuterHeight) })
  return cardList
}

// Cover Page section

const _createCoverBcard = (aCardOuterHeight) => {
  let bCard1 = {}
  bCard1 = {
    BCardAttr: {
      style: {

      }
    }, BCardChild: _createCoverCcard()
  }
  return [bCard1]
}

const _createCoverCcard = () => {
  let cCard1 = {
    style: {},
    valueFunc: (that) => {
      return <CoverPageCcard1
        getAnimationMoveInfo={that.props.getAnimationMoveInfoFromBCard}
        cardIndex={that.props.cardIndex} />
    }
  }
  let cCard2 = {
    style: {},
    valueFunc: (that) => {
      return <CoverPageCcard2
        getAnimationMoveInfo={that.props.getAnimationMoveInfoFromBCard}
        serMoveNextLocationInCC={that.props.serMoveNextLocationInB}
        cardIndex={that.props.cardIndex} />
    }
  }
  return [cCard1, cCard2]
}

// About Island section - B Card

const _createAbIlndBcard = (bCardOuterHeight) => {
  let cover = { BCardAttr: { style: { height: bCardOuterHeight + 'vh' } }, BCardChild: _createAbIlndCoverCcard() }
  let begin = { BCardAttr: { style: { height: bCardOuterHeight + 'vh' } }, BCardChild: _createAbIlndBeginCcard() }
  let wireframe = { BCardAttr: { style: { height: bCardOuterHeight + 'vh' } }, BCardChild: _createAboutIlndWireframeCcard() }
  let mockup = { BCardAttr: { style: { height: bCardOuterHeight + 'vh' } }, BCardChild: _createAboutIlndMockupCcard() }
  let exhibition = { BCardAttr: { style: { height: bCardOuterHeight + 'vh' } }, BCardChild: _createAboutIlndExhibitionCcard() }
  let googlePlay = { BCardAttr: { style: { height: bCardOuterHeight + 'vh' } }, BCardChild: _createAboutIlndGooglePlayCcard() }
  return [googlePlay, cover, wireframe, begin, mockup, exhibition]
}

const _menuArrayText = [
  ['專案封面', 'Project Cover'],
  ['初期', 'In the beginning'],
  ['線框稿', 'Wireframe'],
  ['視覺稿', 'Mockups'],
  ['畢業展覽', 'Exhibition'],
  ['產品上架', 'Google Play']]

// About Island section - C Card

const _createAbIlndCoverCcard = () => {
  let abouIldCard1 = {
    style: {},
    valueFunc: (that) => {
      return <ACardCoverPrototype1
        getAnimationMoveInfo={that.props.getAnimationMoveInfoFromBCard}
        cardIndex={that.props.cardIndex}
        cnFeatureArrayText={['透過即時資料庫讓在地居民及觀光客遊歷詩詞景點。', '讓使用者能夠透過Google Map API發現附近的詩詞景點。', '使用者能夠對任何景點題詩，並且跟其他玩家互動。', '透政府開放資料庫讓使用者能夠了解景點中詩的背景。']}
        enFeatureArrayText={['Helps both locals and tourists to explore attractions with classic poems and user made poems in our real-time database.', 'Allows users to know if there is an adjacent location mentioned in a poem by introducing google map API.', "Users can upload the poem they made for any location, interacting with other user's poems in real-time.", "Users can know the background story of classic poems with the help of the open data."]}
        cnAgencyText={'自行開發'}
        enAgencyText={'Internal Product'}
        cnMyRoleText={'系統工程與設計師'}
        enMyRoleText={'System Developer/Designer'}
      />
    },
    className: 'a-card-cover-prototype1',
    isBCardIndexTarget: true,
    isProjectCoverPage: true
  }
  let abouIldCard2 = {
    style: {},
    valueFunc: (that) => {
      return <ACardCoverPrototype2
        getAnimationMoveInfo={that.props.getAnimationMoveInfoFromBCard}
        serMoveNextLocationInCC={that.props.serMoveNextLocationInB}
        getJumpBCardRequest={that.props.getJumpBCardRequest}
        getBCardDataList={that.props.getBCardDataList}
        useSideMenu={true}
        cardIndex={that.props.cardIndex}
        menuArrayText={_menuArrayText}
        cnAgencyText={'自行開發'}
        enAgencyText={'Internal Product'}
        cnMyRoleText={'系統工程與設計師'}
        enMyRoleText={'System Developer/Designer'}
      />
    },
    className: 'a-card-cover-prototype2'
  }
  return [abouIldCard1, abouIldCard2]
}

const _createAbIlndBeginCcard = () => {
  let cCard1 = {
    valueFunc: (that) => {
      return <ACardContentPrototype1
        getAnimationMoveInfo={that.props.getAnimationMoveInfoFromBCard}
        serMoveNextLocationInCC={that.props.serMoveNextLocationInB}
        getJumpBCardRequest={that.props.getJumpBCardRequest}
        getBCardDataList={that.props.getBCardDataList}
        useSideMenu={true}
        cardIndex={that.props.cardIndex}
        cnFeatureArrayText={['我們從一位旅遊文學教授身上發現曉島遊這個點子－－讓旅遊文學成為新的城市探索方式、老師們戶外教學的助教。', '結合台灣景點詩的開放資料庫，詩與景點能夠隨身攜帶、隨時點閱、隨性探索。', '曉島遊被設計成為國語詩的戶外教學工具，教師、學生甚至社區居民都可以探索景點。', '讓旅遊文學不再只是教室裡課本上的東西，而是身歷其境的體驗。']}
        enFeatureArrayText={['It was inspired when a traveling literature professor was figuring out a new way to teach traveling literature.', "We put traveling literature and attractions together and It is a good solution for teachers to bring students out of the campus to teach literature.", "This app is designed to be a mobile textbook for both students and teachers, or sometimes neighbors nearby attractions.", "Students can explore an attraction to understand the feeling in the poem instead of assuming the feeling in their classrooms.", "With our real-time database, 'About Island' is a platform to interact with other poems, and you can be one of the poets!"]}
      />
    },
    className: 'a-card-content-prototype1',
    isBCardIndexTarget: true,
    isProjectCoverPage: false
  }
  let cCard2 = {
    valueFunc: (that) => {
      return <AbIlndBeginContentCard
        getAnimationMoveInfo={that.props.getAnimationMoveInfoFromBCard}
        serMoveNextLocationInCC={that.props.serMoveNextLocationInB}
        getJumpBCardRequest={that.props.getJumpBCardRequest}
        getBCardDataList={that.props.getBCardDataList}
        useSideMenu={true}
        cardIndex={that.props.cardIndex}
        screenType={that.props.screenType}
        menuArrayText={_menuArrayText}
      />
    }, isBCardIndexTarget: false,
    isProjectCoverPage: false,
    className: 'a-card-content-prototype2',
  }
  return [cCard1, cCard2]
}

const _createAboutIlndWireframeCcard = () => {
  let cCard1 = {
    valueFunc: (that) => {
      return <ACardContentPrototype1
        getAnimationMoveInfo={that.props.getAnimationMoveInfoFromBCard}
        serMoveNextLocationInCC={that.props.serMoveNextLocationInB}
        getJumpBCardRequest={that.props.getJumpBCardRequest}
        getBCardDataList={that.props.getBCardDataList}
        useSideMenu={true}
        cardIndex={that.props.cardIndex}
        cnFeatureArrayText={['使用者研究後我們對於研究結果繪製線框搞。', '許多UI flow是針對核心功能如尋找周遭詩詞景點、新增詩詞景點等設計。', '除此之外，如何讓相當重要的長輩族群能夠快速上手也是曉島遊UI設計的挑戰。']}
        enFeatureArrayText={['After conducted the user research, our team started drawing the wireframe.', "We tried to make the application fun and interesting rather than only a database app.", "Many of the UIs are aimed to provide an active and energetic experience, and the user flow was designed for users to browse nearby attraction faster and interactive."]}
      />
    },
    className: 'a-card-content-prototype1',
    isBCardIndexTarget: true,
    isProjectCoverPage: false
  }
  let cCard2 = {
    valueFunc: (that) => {
      return <AboutIslandWireframeCcard
        getAnimationMoveInfo={that.props.getAnimationMoveInfoFromBCard}
        serMoveNextLocationInCC={that.props.serMoveNextLocationInB}
        getJumpBCardRequest={that.props.getJumpBCardRequest}
        getBCardDataList={that.props.getBCardDataList}
        useSideMenu={true}
        cardIndex={that.props.cardIndex}
        screenType={that.props.screenType}
        menuArrayText={_menuArrayText}
      />
    }, isBCardIndexTarget: false,
    isProjectCoverPage: false,
    className: 'about-ialand-wireframe-ccard a-card-content-prototype2',
  }
  return [cCard1, cCard2]
}

const _createAboutIlndMockupCcard = () => {
  let cCard1 = {
    valueFunc: (that) => {
      return <ACardContentPrototype1
        getAnimationMoveInfo={that.props.getAnimationMoveInfoFromBCard}
        serMoveNextLocationInCC={that.props.serMoveNextLocationInB}
        getJumpBCardRequest={that.props.getJumpBCardRequest}
        getBCardDataList={that.props.getBCardDataList}
        useSideMenu={true}
        cardIndex={that.props.cardIndex}
        cnFeatureArrayText={['有了在台灣赤魂實習的經驗，我知道很多視覺稿往往會出現邏輯問題以及不食人間煙火的客製化的元件。', '透過使用安卓原生的元件如Tab Bar, Navigation Bar, Fragments, Google Map等，曉島遊能更有效率的開發並減少不必要的開發資源。']}
        enFeatureArrayText={["Thanks to the previous internship in UI/UX design, I noticed that there's a gap between mockup and UI engineering, so I avoided using custom element and extraordinary layout.", "For example, using the Android native tab bar, navigation bar, fragments, google map and so on can help reducing construction time. ", "In this way, we can focus on developing front-end and back-end researching."]}
      />
    },
    className: 'a-card-content-prototype1',
    isBCardIndexTarget: true,
    isProjectCoverPage: false
  }
  let cCard2 = {
    valueFunc: (that) => {
      return <AboutIslandMockupCcard
        getAnimationMoveInfo={that.props.getAnimationMoveInfoFromBCard}
        serMoveNextLocationInCC={that.props.serMoveNextLocationInB}
        getJumpBCardRequest={that.props.getJumpBCardRequest}
        getBCardDataList={that.props.getBCardDataList}
        useSideMenu={true}
        cardIndex={that.props.cardIndex}
        screenType={that.props.screenType}
        menuArrayText={_menuArrayText}
      />
    }, isBCardIndexTarget: false,
    isProjectCoverPage: false,
    className: 'about-ialand-mockup-ccard a-card-content-prototype2',
  }
  return [cCard1, cCard2]
}

const _createAboutIlndExhibitionCcard = () => {
  let cCard1 = {
    valueFunc: (that) => {
      return <ACardContentPrototype1
        getAnimationMoveInfo={that.props.getAnimationMoveInfoFromBCard}
        serMoveNextLocationInCC={that.props.serMoveNextLocationInB}
        getJumpBCardRequest={that.props.getJumpBCardRequest}
        getBCardDataList={that.props.getBCardDataList}
        useSideMenu={true}
        cardIndex={that.props.cardIndex}
        cnFeatureArrayText={['曉島遊在台北華山文創園區展出攤位，我們得到許多即時的回饋以及當地民眾的想法，這些想法是我們讓曉島遊變更好的動力。']}
        enFeatureArrayText={['We presented this product to the visitors in Huashan 1914 Creative Park in Taipei City and obtained a variety of feedbacks, which are our reason to make About Island better.']}
      />
    },
    className: 'a-card-content-prototype1',
    isBCardIndexTarget: true,
    isProjectCoverPage: false
  }
  let cCard2 = {
    valueFunc: (that) => {
      return <AboutIslandExhibitionCcard
        getAnimationMoveInfo={that.props.getAnimationMoveInfoFromBCard}
        serMoveNextLocationInCC={that.props.serMoveNextLocationInB}
        getJumpBCardRequest={that.props.getJumpBCardRequest}
        getBCardDataList={that.props.getBCardDataList}
        useSideMenu={true}
        cardIndex={that.props.cardIndex}
        screenType={that.props.screenType}
        menuArrayText={_menuArrayText}
      />
    }, isBCardIndexTarget: false,
    isProjectCoverPage: false,
    className: 'about-ialand-exhibition-ccard a-card-content-prototype2',
  }
  return [cCard1, cCard2]
}

const _createAboutIlndGooglePlayCcard = () => {
  let cCard1 = {
    valueFunc: (that) => {
      return <ACardContentPrototype1
        getAnimationMoveInfo={that.props.getAnimationMoveInfoFromBCard}
        serMoveNextLocationInCC={that.props.serMoveNextLocationInB}
        getJumpBCardRequest={that.props.getJumpBCardRequest}
        getBCardDataList={that.props.getBCardDataList}
        useSideMenu={true}
        cardIndex={that.props.cardIndex}
        cnFeatureArrayText={['我們最終在Google Play上架曉島遊免費下載，希望能讓更多人能夠探索詩詞並遊樂景點，達到寓教於樂的效果。']}
        enFeatureArrayText={['We eventually uploaded the application to Google play for all users in the globe to download for free, so the project can keep its best to contribute the users without any charge.', "Users can explore their neighborhood and know more about the island Taiwan."]}
      />
    },
    className: 'a-card-content-prototype1',
    isBCardIndexTarget: true,
    isProjectCoverPage: false
  }
  let cCard2 = {
    valueFunc: (that) => {
      return <AboutIslandGoogleplayCcard
        getAnimationMoveInfo={that.props.getAnimationMoveInfoFromBCard}
        serMoveNextLocationInCC={that.props.serMoveNextLocationInB}
        getJumpBCardRequest={that.props.getJumpBCardRequest}
        getBCardDataList={that.props.getBCardDataList}
        useSideMenu={true}
        cardIndex={that.props.cardIndex}
        screenType={that.props.screenType}
        menuArrayText={_menuArrayText}
      />
    }, isBCardIndexTarget: false,
    isProjectCoverPage: false,
    className: 'about-ialand-googleplay-ccard a-card-content-prototype2',
  }
  return [cCard1, cCard2]
}

// About Me section

const _createAboutMeBCard = (bCardOuterHeight) => {
  let bCard1 = { BCardAttr: { style: { height: bCardOuterHeight + 5 + 'vh' } }, BCardChild: _createAboutMeCcard() }
  return [bCard1]
}

const _createAboutMeCcard = () => {

  let leftCcard = {
    style: {},
    valueFunc: (that) => {
      return <AboutMeLeft
        getAnimationMoveInfo={that.props.getAnimationMoveInfoFromBCard}
        cardIndex={that.props.cardIndex} />
    }
  }
  let rightCcard = {
    style: {},
    valueFunc: (that) => {
      return <AboutMeRight
        getAnimationMoveInfo={that.props.getAnimationMoveInfoFromBCard}
        serMoveNextLocationInCC={that.props.serMoveNextLocationInB}
        cardIndex={that.props.cardIndex} />
    }
  }
  return [leftCcard, rightCcard]
}


const _putBCardInACard = (bCardOuterHeight) => {
  let bCard1 = {}
  let bCard2 = {}
  let bCard3 = {}
  bCard1 = { BCardAttr: { style: { height: bCardOuterHeight + 'vh' } }, BCardChild: _putCCard1InBCard() }
  bCard2 = { BCardAttr: { style: { height: bCardOuterHeight + 'vh' } }, BCardChild: _putCCard2InBCard() }
  bCard3 = { BCardAttr: { style: { height: bCardOuterHeight + 'vh' } }, BCardChild: _putCCard3InBCard() }
  return [bCard1, bCard2, bCard3, bCard2, bCard3]
}

const _putCCard1InBCard = () => {
  let cCard1 = { value: 'cCard3', valueFunc: () => { }, isBCardIndexTarget: true }
  let cCard2 = { value: 'cCard4', valueFunc: () => { } }
  return [cCard1, cCard2]
}

const _putCCard2InBCard = () => {
  let cCard1 = { value: 'cCard3', valueFunc: () => { }, isBCardIndexTarget: true }
  let cCard2 = { value: 'cCard4', valueFunc: () => { } }
  return [cCard1, cCard2]
}

const _putCCard3InBCard = () => {
  let cCard1 = { value: 'cCard5', valueFunc: () => { }, isBCardIndexTarget: true }
  let cCard2 = { value: 'cCard6', valueFunc: () => { } }
  return [cCard1, cCard2]
}

export default createRawCardDataList;