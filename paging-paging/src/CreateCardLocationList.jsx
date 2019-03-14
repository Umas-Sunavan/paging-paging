function createCardLocationList(cardDataList) {
  const cardLocationList = []
  cardDataList.map((aCardItem,aCardIndex)=>{
    const aCardLocationList = []
    aCardItem.ACardChild.map((bCardItem,bCardIdex)=>{
      const bCardLocationList = []
      bCardItem.BCardChild.map((cCardItem,cCardIndex)=>{
        bCardLocationList.push(0)
        return true
      })
      aCardLocationList.push(bCardLocationList)
      return true
    })
    cardLocationList.push(aCardLocationList)
    return true
  })
  console.log(cardLocationList)  
  return cardLocationList
}

export default createCardLocationList;