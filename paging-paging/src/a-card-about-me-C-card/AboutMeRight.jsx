import React, { Component } from 'react';
import ExpandingButton from '../folding-button/ExpandingButton';
import './AboutMeStyle.css';


class AboutMeRight extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animationMoveInfo: this.props.getAnimationMoveInfo,
      itemClicked: undefined,
    }
  }

  moveCheck = ''

  onThisCCardCome = () => {
    console.log('C-card ' + this.props.cardIndex + ' come');
    var aboutMeRightPartDOMParent = document.getElementById('c-card-0-1-0')
    if (aboutMeRightPartDOMParent !== undefined && aboutMeRightPartDOMParent !== null) {
      var aboutMeRightPartDOM = aboutMeRightPartDOMParent.getElementsByClassName('about-me-right-part')[0]
      if (aboutMeRightPartDOM !== undefined && aboutMeRightPartDOM !== null) {
        aboutMeRightPartDOM.setAttribute('class', 'about-me-right-part about-me-right-part-came')
      }
    }
  }

  onThisCCardCame = () => {
    console.log('C-card ' + this.props.cardIndex + ' came');
  }

  onThisCCardLeave = () => {
    var aboutMeRightPartDOMParent = document.getElementById('c-card-0-1-0')
    console.log('C-card ' + this.props.cardIndex + ' leave');
    if (aboutMeRightPartDOMParent !== undefined && aboutMeRightPartDOMParent !== null) {
      var aboutMeRightPartDOM = aboutMeRightPartDOMParent.getElementsByClassName('about-me-right-part')[0]
      if (aboutMeRightPartDOM !== undefined && aboutMeRightPartDOM !== null) {
        aboutMeRightPartDOM.setAttribute('class', 'about-me-right-part')
      }
    }
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

  reportClicked = (index) => {
    this.setState({ itemClicked: index })
  }

  cancelExpanding = () => {
    this.setState({ itemClicked: undefined })
  }


  render() {
    this.checkAnimationMoveState(this.props.getAnimationMoveInfo)
    let showExpandingBtnBg = (this.state.itemClicked !== undefined) ? ' expandingbtn-bg-svg-show' : ' expandingbtn-bg-svg-hide'
    let personalBgContainerClass = (this.state.itemClicked !== undefined) ? 'personal-bg-container' : 'personal-bg-container personal-bg-container-justify-content'
    return (
      <div className="about-me-right-part">

        <div id="personal-bg-container">
          <div id="education-section">
            <div id="title-section">
              <p className="en-title">EDUCATION</p>
              <p className="cn-text-lg">學歷</p>
            </div>
            <hr id="hr"></hr>
            <div id="content-section">
              <ExpandingButton
                majorTitle={'Information and Communication'}
                majorSubitle={'資訊傳播學系'}
                minorTitle={'Major'}
                minorSubitle={'主修'}
                hrefName={'#ICDetail'}
                reportClicked={this.reportClicked}
                commandClicked={this.state.itemClicked}
                index='1'
                organizationSection={undefined}
                listSection={{
                  titleEn:undefined,
                  titleCn:undefined,
                  listEn:['Media Literacy', 'Image Digitizing', 'Communication Theories', 'Information Psychology', 'User Studies', 'Information Marketing', 'Media Competencies', 'Media Planning and Message Design', 'Web-page Design', 'Internet Content Design', 'Introduction to Programming Language', 'Designing of Interactive Procedure', 'Markup Language', 'Database Management System', 'Fundamental Data Analysis', 'System Analysis'],
                  listCn:['媒體識讀','資訊心理學','使用者研究','資訊行銷','傳播技能','訊息設計','網路內容設計','程式設計概論','互動程式設計','標示語言','資料庫系統','基礎資料分析','系統分析','網頁設計'],
                  contentMinor1:'32 relative credits/',contentMinor2:'176 totall'}}
                extraSection={{titleEn:'Grade Point Average (GPA)',titleCn:'平均分數',contentClass:undefined,content:'3.7'}}
              />
              <ExpandingButton
                majorTitle={'Graphic Communications and Digital Publishing'}
                majorSubitle={'圖文傳播暨數位出版學系'}
                minorTitle={'Minor'}
                minorSubitle={'輔修'}
                hrefName={'#GCDPDetail'}
                reportClicked={this.reportClicked}
                commandClicked={this.state.itemClicked}
                index='2'
                organizationSection={undefined}
                listSection={{
                  titleEn:undefined,
                  titleCn:undefined,
                  listEn:['Chromatics', 'Intro to Studies in Visual Communication', 'Electronic Prepress System', 'Print Production', 'Publishing', 'Digital Printing', 'Digital Graphic design', 'Digital Photography', 'Documentary Photography', 'Creative Digital Photography', 'Digital Image Processing', 'Community e-commerce', 'The Building and Application of Digital Content Management System'],
                  listCn:['色彩學','視覺傳播概論','印前理論與實務','印刷理論與實務','出版學','數位印刷','數位設計','數位攝影','攝影學','數位攝影創作','數位影像處理','社群電子商務','數位內容管理'],
                  contentMinor1:'32 relative credits/',contentMinor2:'176 totall'}}
                extraSection={{titleEn:'Grade Point Average (GPA)',titleCn:'平均分數',contentClass:undefined,content:'3.7'}}
              />
              <ExpandingButton
                majorTitle={'Digital Multimedia Arts'}
                majorSubitle={'數位多媒體設計學系'}
                minorTitle={'Program'}
                minorSubitle={'學程'}
                hrefName={'#DMADetail'}
                reportClicked={this.reportClicked}
                commandClicked={this.state.itemClicked}
                index='3'
                organizationSection={undefined}
                listSection={{
                  titleEn:undefined,
                  titleCn:undefined,
                  listEn:['Intro to Animation', 'Intro to Computer Animation', 'Storyboarding', 'Computer Animation', '2D Character Animaion', 'Animation Design in Computer Game', 'Dynamics in Computer Animation', 'Game Prototype Development', 'Virtual Reality', 'Sound Effect'],
                  listCn:['動畫導論','電腦動畫概論','分鏡設計','電腦動畫','平面動畫','電腦遊戲動畫','電腦遊戲動畫','動力學','遊戲雛形製作','虛擬實境','音效配樂設計'],
                  contentMinor1:'32 relative credits/',contentMinor2:'176 totall'}}
                extraSection={{titleEn:'Grade Point Average (GPA)',titleCn:'平均分數',contentClass:undefined,content:'3.7'}}
              />
              <ExpandingButton
                majorTitle={'Saginaw Valley State University International Student'}
                majorSubitle={'薩吉諾谷州立大學國際學生'}
                minorTitle={'Exchange Program'}
                minorSubitle={'國際交換生'}
                hrefName={'#SVSUDetail'}
                reportClicked={this.reportClicked}
                commandClicked={this.state.itemClicked}
                index='4'
                organizationSection={{
                  nameEn:'Saginaw Valley State University',
                  nameCn:'薩吉諾谷州立大學',
                  descEn:'A State University Located in Bay Area, Michigan',
                  descCn:'座落於美國密西根中部的州立大學。',
                  minorClass:undefined,
                  minorText:['Aug. 2018 -','Dec. 2018']}}
                listSection={{
                  titleEn:undefined,
                  titleCn:undefined,
                  listEn:['Intro to Graphic Design', 'Intro to Sketch', 'Web Design', 'Art Appreciation'],
                  listCn:['基礎平面設計','基礎素描','網頁設計','藝術鑑賞'],
                  contentMinor1:'32 relative credits/',contentMinor2:'176 totall'}}
                extraSection={{titleEn:'Grade Point Average (GPA)',titleCn:'平均分數',contentClass:undefined,content:'3.85'}}
              />
            </div>

          </div>
          <div id="experience-section">
            <div id="title-section">
              <p className="en-title">EXPERIENCES</p>
              <p className="cn-text-lg">工作經驗</p>
            </div>
            <hr id="hr"></hr>
            <div id="content-section">
              <ExpandingButton
                majorTitle={'Interns In Cardinal Solution'}
                majorSubitle={'薩吉諾谷平面設計實習'}
                minorTitleln={['Sep. 2018', 'Oct. 2018']}
                reportClicked={this.reportClicked}
                hrefName={'#CardinalSolutionDetail'}
                commandClicked={this.state.itemClicked}
                index='5'
                organizationSection={{
                  nameEn:'Cardinal Solution',
                  nameCn:'鳳頭鳥行銷解決方案',
                  descEn:'An interdisciplinary faculty/student team that works directly with local businesses and non-profits to develop marketing solutions at Saginaw Valley State University.',
                  descCn:'為社區企業提供行銷解決方案並由教授帶領學生的實習團隊',
                  minorClass:'en-text-sm',
                  minorText:['Address: 7400 Bay Road, University Center, Michigan, U.S.A.']}}
                listSection={{
                  titleEn:'Responsibilities',
                  titleCn:'工作職責',
                  listEn:["Designs website mockup based on the client's demand and user studies.", "Develops responsive prototype with the same visual style in official website svsu.edu", "Communicates with the client to figure out the best solution"],
                  listCn:['依據客戶需求以及使用者研究結果設計視覺搞','開發與學校官方網站風格相同的響應式網站','與客戶不斷溝通以得到最好的解決方案'],
                  contentMinor1:' ',
                  contentMinor2:' '}}
                extraSection={{titleEn:' ',titleCn:' ',contentClass:undefined,content:' '}}
              />
              <ExpandingButton
                majorTitle={'Interns In User Interface Design'}
                majorSubitle={'使用者介面實習設計師'}
                minorTitleln={['Apr. 2017', 'Jul.2018']}
                reportClicked={this.reportClicked}
                hrefName={'#UIIternDetail'}
                commandClicked={this.state.itemClicked}
                index='6'
                organizationSection={{
                  nameEn:'Taiwan Red Soul',
                  nameCn:'台灣赤魂',
                  descEn:'a organization not only provides application design and development solutions for client but also develops own applications on iOS platform. Most of its members are experienced in Australia.',
                  descCn:'不僅提供企業網路行銷與應用程式開發解決方案，還自行開發應用程式上架，位於新北板橋的資訊科技公司',
                  minorClass:'en-text-sm',
                  minorText:['Address: No. 20, Alley 9, Lane 33, Section 3, Xianmin Boulevard, Banqiao District, New Taipei City, 220']}}
                  listSection={{
                  titleEn:'Responsibilities',
                  titleCn:'工作職責',
                  listEn:['User interface and user experience design', 'Produces prototypes.', 'Produces user flow, script, images.', "Communicates with co-workers and ensuring the feasibility of applications.","Refines the usability and using flow based on the users' feedback.", "Other responsibilities related to graphic design.","Being a UI engineer to develop custom views or widgets if needed"],
                  listCn:['使用者介面設計','設計產品原形','設計使用流程、設計搞、圖像','與設計師、工程師溝通以達到最大的產品易用性','依據使用者回饋來優化易用性及產品使用流程','其他有關平面設計的支援',"依照專案需求編制成介面工程師開發客製元件"],
                  contentMinor1:' ',contentMinor2:' '}}
                extraSection={{titleEn:'Participated Projects',titleCn:'參與專案',contentClass:'en-text-sm',content:'Opcom Farm(Android), Megafity(iOS), Time Sheet(iOS), OpenData(Android), One Cards(iOS), Opcom Care(iOS), Check In App(iOS).Develops applications by coding with Swift, for instance, Oivita (iOS).'}}
              />
              <ExpandingButton
                majorTitle={'Part-Time In Designing Graphic Materials'}
                majorSubitle={'文宣設計工讀生'}
                minorTitle={['Sep. 2014', ' Jan. 2017']}
                reportClicked={this.reportClicked}
                hrefName={'#GDDetail'}
                commandClicked={this.state.itemClicked}
                index='7'
                organizationSection={{
                  nameEn:'Information & Communication Department, Shih Hsin University',
                  nameCn:'世新大學資訊傳播系辦公室',
                  descEn:'More than 20 visual identities of the events on the department and more than 100 graphic elements had been designed when I was in charge.',
                  descCn:'在職期間已負責設計超過20個主視覺以及超過100個平面設計作品。',
                  minorClass:'en-text-sm',
                  minorText:['Address: No. 1, Ln. 17, Sec. 1, Muzha Rd., Wenshan Dist., Taipei City 116, Taiwan']}}
                  listSection={{
                  titleEn:'Responsibilities',
                  titleCn:'工作職責',
                  listEn:['Designs the layouts of flyer, poster, and other publications', 'Assists program with recruitment activities.', 'Photograph educational programs and activities of the department.', 'Records and Edits videos.', 'Prepares correspondence and maintains files and answers phones.'],
                  listCn:['設計大型布幕、海報、宣傳單、資料夾等平面作品','協助學生入學活動','擔任系上活動攝影','攝影並剪輯影片','傳播技能','文件處理與辦公室雜物'],
                  contentMinor1:' ',contentMinor2:' '}}
                extraSection={{titleEn:' ',titleCn:' ',contentClass:' ',content:' '}}
              />
            </div>

          </div>
        </div>
        <svg onClick={this.cancelExpanding} className={'expandingbtn-bg-svg' + showExpandingBtnBg} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="expandingbtn-bg-gradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="80" y2="80">
              <stop offset="0" style={{ 'stopColor': '#C0FBD7' }} />
              <stop offset="1" style={{ 'stopColor': '#6DE2FB' }} />
            </linearGradient>
          </defs>
          <rect className="expandingbtn-bg-rect" fill="url(#expandingbtn-bg-gradient)" height="100" width="100"></rect>
        </svg>
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

export default AboutMeRight;
