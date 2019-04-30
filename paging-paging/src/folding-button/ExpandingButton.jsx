import React, { Component } from 'react';
import './ExpandingButton.css';

class ExpandingButton extends Component {
  constructor(props) {
    super(props)    

    const organizationSection = this.props.organizationSection || {}
    const listSection = this.props.listSection || {}
    const extraSection = this.props.extraSection || {}

    this.state = {
      majorTitle: this.props.majorTitle,
      majorSubitle: this.props.majorSubitle,
      minorTitle: this.props.minorTitle,
      minorSubitle: this.props.minorSubitle || '',
      minorTitleln: this.props.minorTitleln,
      hrefName: this.props.hrefName,
      index: this.props.index,
      organizationNameEn:organizationSection.nameEn || 'Shih Hsin University', 
      organizationNameCn:organizationSection.nameCn || '世新大學',
      organizationDescEn:organizationSection.descEn || 'The top journalism and communications institution in Taiwan',
      organizationDescCn:organizationSection.descCn || '以新聞傳播領域聞名的私立院校',
      organizationMinorClass:organizationSection.minorClass || 'en-text-md',
      organizationMinorText:organizationSection.minorText || ['Sep. 2014 -','Jan. 2017'],
      listSectionTitleEn:listSection.titleEn || 'Relevant Course Work',
      listSectionTitleCn:listSection.titleCn || '相關課程',
      listSectionListEn:listSection.listEn || ['Chromatics', 'Digital Graphic Design'],
      listSectionListCn:listSection.listCn || ['平面設計','使者互動平面設計','使用者'],
      listSectionContentMinor1:listSection.contentMinor1 || '12 relativecredits',
      listSectionContentMinor2:listSection.contentMinor2 || '182 totallcredits',
      extraSectionTitleEn:extraSection.titleEn || '',
      extraSectionTitleCn:extraSection.titleCn || '',
      extraSectionContentClass:extraSection.contentClass || 'en-title',
      extraSectionContent:extraSection.content || ''
    }
  }

  expand = (event) => {
    this.props.reportClicked(this.state.index)
  }

  btnStyle = undefined

  offsetTop

  render() {
    let height
    let secondLineMinorTitle = (this.props.minorTitleln !== undefined) ? <p className="en-text-md italic">{this.props.minorTitleln[0]}<br />{this.props.minorTitleln[1]}</p> : ''
    let btnState
    let btnClass
    let extensiveSectionClass
    switch (this.props.commandClicked) {
      case this.state.index:
        let experienceTitleHeight = (this.state.index === '5' || this.state.index === '6' || this.state.index === '7') ? ' - 33vh' : ' - 46px'
        btnState = 'expanding'
        this.offsetTop= (document.getElementById('expanding-' + this.state.index) !== null && this.offsetTop === undefined) ? document.getElementById('expanding-' + this.state.index).offsetTop : this.offsetTop
        btnClass = 'item item-expending'
        this.btnStyle = { 'bottom': 'calc(' + this.offsetTop + 'px' + experienceTitleHeight + ')', height: '' }
        extensiveSectionClass = 'extensive-section extensive-section-expanding';
        break;
      case undefined:
        btnState = 'folding'
        btnClass = 'item item-folding'
        extensiveSectionClass = 'extensive-section extensive-section-folding'
        this.btnStyle = {}
        break;
      default:
        btnState = 'hiding'
        btnClass = 'item item-hiding'
        this.btnStyle = {}
        extensiveSectionClass = 'extensive-section extensive-section-folding'
        break;
    }

    return (
      <a id={'expanding-' + this.state.index} className={btnClass} style={this.btnStyle} href={this.state.hrefName} onClick={this.expand}>
        <div className="simple-section">
          <div className="column-main">
            <p className="en-title">{this.state.majorTitle}</p>
            <p className="cn-text-lg">{this.state.majorSubitle}</p>
          </div>
          <div className="column-minor">
            <p className="en-text-md italic">{this.state.minorTitle}</p>
            {secondLineMinorTitle}
            <p className="cn-text-sm">{this.state.minorSubitle}</p>
          </div>
        </div>
        <div className={extensiveSectionClass}>
          <p className="en-text-lg in">in</p>
          <div className="column-container school">
            <div className="column-main">
              <p className="en-title">{this.state.organizationNameEn}</p>
              <p className="cn-text-lg">{this.state.organizationNamecn}</p>
              <p className="en-text-sm text-secondary">{this.state.organizationDescEn}</p>
              <p className="cn-text-sm text-secondary">{this.state.organizationDescCn}</p>
            </div>
            <div className="column-minor">
              <p className={this.state.organizationMinorClass + ' text-secondary italic'}><span>{this.state.organizationMinorText[0]}</span><br /><span>{this.state.organizationMinorText[1]}</span></p>
            </div>
          </div>
          <hr className="hr-sm"></hr>
          <div className="column-container course">
            <div className="column-main">
              <p className="en-text-md">{this.state.listSectionTitleEn}</p>
              <p className="cn-text-sm">{this.state.listSectionTitleCn}</p>
            </div>
            <div className="column-minor"></div>
          </div>
          <hr className="hr-sm"></hr>
          <div className="column-container course">
            <div className="column-main">
              <p className="en-text-sm text-secondary">
                {this.state.listSectionListEn.map((v)=>v+', ')}
              </p>
              <p className="cn-text-xs text-secondary">
                {this.state.listSectionListCn.map((v)=>v+', ')}
              </p>
            </div>
            <div className="column-minor">
              <p className="en-text-md">{this.state.listSectionContentMinor1}</p>
              <p className="en-text-sm text-secondary">{this.state.listSectionContentMinor2}</p>
            </div>
          </div>
          <hr className="hr-sm"></hr>
          <div className="column-container gpa">
            <div className="column-main">
              <p className="en-text-md">{this.state.extraSectionTitleEn}</p>
              <p className="cn-text-sm">{this.state.extraSectionTitleCn}</p>
              <p className={this.state.extraSectionContentClass}>{this.state.extraSectionContent}</p>
            </div>
            <div className="column-minor">
              <p className="en-text-lg">	　</p>
            </div>
          </div>
        </div>
      </a>
    )
  }

}

export default ExpandingButton;