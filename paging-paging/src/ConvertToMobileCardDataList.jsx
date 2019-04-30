function convertToMobileCardDataList(rawCardDataList) {
  return _convertCardList(rawCardDataList)
}

const _convertCardList = (rawCardDataList) => {
  let mobileCardDataList = []

  rawCardDataList.map((listChild,aCardIndex)=>{
    mobileCardDataList.push({ACardAttr:listChild.ACardAttr,ACardChild:[],BCardContainerAttr:listChild.BCardContainerAttr})
    let mobileACardChildren = _createBCard(listChild.ACardChild,aCardIndex)
    mobileCardDataList[aCardIndex].ACardChild = mobileACardChildren
    return true
  })

  return mobileCardDataList
}

const _createBCard = (aCardChildren,aCardIndex) => {
  let mobileACardChildren = []

  aCardChildren.map((bCardItem,bCardIndex)=>{
    _createBCardWithOneCCard(bCardItem.BCardChild,bCardIndex,bCardItem,mobileACardChildren)
    return true
  })

  return mobileACardChildren
}

const _createBCardWithOneCCard = (bCardChildren,bCardIndex,bCardItem,mobileACardChild) => {
  bCardChildren.map((cCardItem,cCardIndex)=>{
    let mobileBCardItem = {BCardAttr:bCardItem.BCardAttr,BCardChild:[cCardItem]}
    mobileACardChild.push(mobileBCardItem)
    return true
  })
}

export default convertToMobileCardDataList;