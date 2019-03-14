function createRawCardDataList(aCardOuterHeight) {
  const cardList = _createCardList(aCardOuterHeight)
  console.log(cardList)  
  return cardList
}

const _createCardList = (aCardOuterHeight) => {
  let cardList = []
  cardList.push({ACardAttr:{style:{transform:'translate3d(0px,0vh,0px)'}},BCardContainerAttr:{style:{transform:'translate3d(0px,0vh,0px)'}},ACardChild:_putBCardInACard(aCardOuterHeight)})
  cardList.push({ACardAttr:{style:{transform:'translate3d(0px,0vh,0px)'}},BCardContainerAttr:{style:{transform:'translate3d(0px,0vh,0px)'}},ACardChild:_putBCardInACard(aCardOuterHeight)})
  cardList.push({ACardAttr:{style:{transform:'translate3d(0px,0vh,0px)'}},BCardContainerAttr:{style:{transform:'translate3d(0px,0vh,0px)'}},ACardChild:_putBCardInACard(aCardOuterHeight)})
  return cardList
}

const _putBCardInACard = (aCardOuterHeight) => {
  let bCard1 = {}
  let bCard2 = {}
  let bCard3 = {}
  bCard1 = {BCardAttr:{style:{height:aCardOuterHeight - 10 + 'vh'}},BCardChild:_putCCard1InBCard()}
  bCard2 = {BCardAttr:{style:{height:aCardOuterHeight - 10 + 'vh'}},BCardChild:_putCCard2InBCard()}
  bCard3 = {BCardAttr:{style:{height:aCardOuterHeight - 10 + 'vh'}},BCardChild:_putCCard3InBCard()}
  return [bCard1,bCard2,bCard3]
}

const _putCCard1InBCard = () => {
  let cCard1 = {value:'cCard1'}
  let cCard2 = {value:'cCard2'}
  return [cCard1,cCard2]
}

const _putCCard2InBCard = () => {
  let cCard1 = {value:'cCard3'}
  let cCard2 = {value:'cCard4'} 
  return [cCard1,cCard2]
}

const _putCCard3InBCard = () => {
  let cCard1 = {value:'cCard5'}
  let cCard2 = {value:'cCard6'} 
  return [cCard1,cCard2]
}

export default createRawCardDataList;