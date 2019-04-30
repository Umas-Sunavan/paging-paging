import React, { Component } from 'react';
import './skillBar.css';

class SkillBar extends Component {
  constructor(props) {
    super(props)
    var isMobile = (document.getElementsByTagName('html')[0].clientWidth < 480)
    var isMobileRotate = (document.getElementsByTagName('html')[0].clientHeight < 480 && document.getElementsByTagName('html')[0].clientWidth > 480 )
    var myWindow = document.getElementsByTagName('html')[0]
    var constant
    // var plus = (document.getElementsByTagName('html')[0].clientWidth < 480)?document.getElementsByTagName('html')[0].clientWidth*0.5 :document.getElementsByTagName('html')[0].clientWidth*0.3 - 170
    // var constant = plus 
    if (!isMobile && !isMobileRotate) {
      constant = myWindow.clientWidth * 0.3 - 170
    } else if (!isMobileRotate) {
      constant = myWindow.clientWidth * 0.5
    } else {
      constant = myWindow.clientWidth * 0.3 + 100
    }
    console.log(constant);
    console.log(isMobileRotate);
    
    this.state = {
      isSafari: navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
      navigator.userAgent &&
      navigator.userAgent.indexOf('CriOS') === -1 &&
      navigator.userAgent.indexOf('FxiOS') === -1,
      barId:this.props.barIndex,
      iconSrc:this.props.iconSrc,
      volume:Number(this.props.volume),
      barVisibleVolumeByPx:(301 + constant) * Number(this.props.volume),
      barSubstractedVolumeByPx:(301 + constant) * (1 - Number(this.props.volume)),
      constant: constant,
    }    
  }

  onChange = (event) => {
    console.log(event.target.parentNode.childNodes[1]);
    
    
    if (!this.state.isSafari) {
      var shadowFloat = event.target.parentNode.childNodes[1].childNodes[4]
      var concreteFloat = event.target.parentNode.childNodes[2].childNodes[0].childNodes[6]
      var shadowFlat = event.target.parentNode.childNodes[1].childNodes[5]
      var concreteFlat = event.target.parentNode.childNodes[2].childNodes[0].childNodes[5]
      if (event.type === 'mouseenter') {
        // document.getElementById('shadow-float').beginElement();
        // document.getElementById('concrete-float').beginElement();
        shadowFloat.beginElement();
        concreteFloat.beginElement();
      } else if (event.type === 'mouseout') {
        // document.getElementById('shadow-flat').beginElement();
        // document.getElementById('concrete-flat').beginElement();
        shadowFlat.beginElement();
        concreteFlat.beginElement();
      }
    } else {
      var shadowNode = document.getElementById('shadow-' + this.state.barId)
      console.log(document.getElementById('shadow-' + this.state.barId));
      if (shadowNode !== null) shadowNode.remove()
      
    }
  }

  explode = (event,barId) => {
    var currentId = event.target.id
    console.log(event.target.id);
    console.log(event.target.id.slice(6));
    console.log('svg-' + event.target.id.slice(6));
    
    var explodeBar = document.getElementById('svg-' + event.target.id.slice(6))
    console.log(explodeBar);
    var explodeBarWidth = explodeBar.clientWidth
    // console.log(`explodeBarWidth ${explodeBarWidth} - ( this.state.barSubstractedVolumeByPx: ${this.state.barSubstractedVolumeByPx} X 0.2 - (explodeBarWidth * 0.4) + 50 ) = ${explodeBarWidth - (this.state.barSubstractedVolumeByPx * 0.2) - (explodeBarWidth * 0.4) + 50}`);
    console.log(`explodeBarWidth ${explodeBarWidth} - ( this.state.barSubstractedVolumeByPx: ${this.state.barSubstractedVolumeByPx} X 0.2 ) = ${explodeBarWidth - (this.state.barSubstractedVolumeByPx * 0.2)}`);

    
    // var left = explodeBarWidth - (this.state.barSubstractedVolumeByPx * 0.2) - (explodeBarWidth * 0.4) + 50
    console.log(explodeBarWidth);
    var b = this.state.barSubstractedVolumeByPx * 0.2
    console.log(b);
    var c = explodeBarWidth * 0.25
    console.log(c);
    var d = -115
    console.log(d);

    
    var left = explodeBarWidth - this.state.barSubstractedVolumeByPx * 0.2 + c + d
    console.log(left);
    

  //   var style = 'top: ' + (Number(currentId.slice(6)%8)*35 + 65) + 'px;left:' + left + 'px;'
  //  document.getElementById('exploder-' + this.state.barId).setAttribute('style',style)
  //  setTimeout(()=>{
  //   style = style + 'height:36px;width:36px;'
  //   document.getElementById('exploder-' + this.state.barId).setAttribute('style',style)
  //   console.log('time up');
    
  //  },3000)
  }
  

  render() {
  return (
        [<svg id={'svg-' + this.state.barId} className="skill-bar" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
          y="0px" viewBox="-40 -20 1270 260" enableBackground="new 0 0 960 560" xmlSpace="preserve"
          >
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="50%" style={{'stopColor':'#aaedfb','stopOpacity':1}} />
              <stop offset="100%" style={{'stopColor':'#e5fdef','stopOpacity':1}} />
            </linearGradient>
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="5" result="noisy" />
              <feColorMatrix in="noisy" type="saturate" values="0" result="colorChanged" />
              <feBlend in="SourceGraphic" in2="colorChanged" mode="multiply" result="blended" />
              <feComposite operator="in" in="blended" in2="SourceGraphic" />
              <feColorMatrix type="matrix" values="1 0 0 0 0
                      0 1.25 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0" />
            </filter>
          </defs>
          <path id={'shadow-' + this.state.barId } fill="#38719c" d="	">
            <animate xmlns="http://www.w3.org/2000/svg" begin={'sensor' + this.state.barId + '.click'} calcMode="linear"
              keySplines=".85 0 .51 1;.85 0 .51 1;.85 0 .51 1;.85 0 .51 1" attributeType="XML" attributeName="d"
              keyTimes="0 ;0.3; 0.6; 0.99; 1" dur="1.01s" repeatCount="1" fill="freeze" values={
                "M" + (548.5 + this.state.constant - this.state.barSubstractedVolumeByPx) + ",0c-17.9,0,-34.7,4.8,-49.3,12.8c-9.6,5.3,-40.2,5.9,-50.1,0.2c-14.6,-8.5,-31.6,-13,-49.6,-13h" + (-399.5 - this.state.constant + this.state.barSubstractedVolumeByPx) + "v202h" + (399.5 + this.state.constant - this.state.barSubstractedVolumeByPx) + "c18,0,35.1,-4.2,49.4,-12.9c11.9,-7.2,40.6,-7.2,50.1,-0.1c13.4,10.1,31.5,12.9,49.5,12.9c55.8,0,101,-45.2,101,-101s-45.2,-100.9,-101,-100.9z;M" + (619 + this.state.constant - this.state.barSubstractedVolumeByPx) + ",0c-24.9,0,-52.7,13.8,-75.4,31.6c-30.3,23.8,-41.8,23.7,-70.8,-0.2c-21.6,-17.7,-48.5,-31.4,-73.3,-31.4h" + (-399.5 - this.state.constant + this.state.barSubstractedVolumeByPx) + "v202h" + (399.5 + this.state.constant - this.state.barSubstractedVolumeByPx) + "c24.9,0,51.5,-14.5,73.5,-32c32.6,-26,40.6,-26.8,74.8,3.2c20.5,18,47.8,28.8,71.2,28.8c55.8,0,101,-45.2,101,-101s-45.3,-101,-101,-101z;M" + (669.2 + this.state.constant - this.state.barSubstractedVolumeByPx) + ",0.1c-26.9,0,-69.1,20.6,-89.8,53.9c-33,53,-69.2,42,-89,0.1c-17.2,-36.1,-64.3,-54.1,-90.9,-54.1h" + (-399.5 - this.state.constant + this.state.barSubstractedVolumeByPx) + "v202h" + (399.5 + this.state.constant - this.state.barSubstractedVolumeByPx) + "c27.7,0,71.9,-22,92.2,-56.8c28.3,-48.5,61.5,-48.8,87.1,2.9c17.7,35.6,63.9,54,90.3,54c55.8,0,101,-45.2,101,-101s-45.2,-101,-100.9,-101z;M" + (700.6 + this.state.constant - this.state.barSubstractedVolumeByPx) + ",0.1c-26.9,0,-69.4,19.1,-86.5,54.5c-31.7,66,-100.5,53.9,-120.8,0.3c-14.1,-37.4,-67.2,-54.9,-93.8,-54.9h" + (-399.5 - this.state.constant + this.state.barSubstractedVolumeByPx) + "v202h" + (399.5 + this.state.constant - this.state.barSubstractedVolumeByPx) + "c27.7,0,74.4,-20.7,92.2,-56.8c29.2,-59.1,88.5,-56.6,122.1,1.4c20.5,35.5,60.4,55.5,86.8,55.5c55.8,0,101,-45.2,101,-101s-45.2,-101,-101,-101z;M" + (797.7 + this.state.constant - this.state.barSubstractedVolumeByPx) + ",101.2c0,55.8,-45.2,101,-101,101s-101,-45.2,-101,-101s45.2,-101,101,-101s101,44.1,101,101zm" + (-797.7 - this.state.constant + this.state.barSubstractedVolumeByPx) + ",-101.2v202l" + (399.5 + this.state.constant - this.state.barSubstractedVolumeByPx) + ",0c55.8,0,101,-45.2,101,-101c0,-55.8,-45.2,-101,-101,-101"} />
            <animate xmlns="http://www.w3.org/2000/svg" begin={'sensor' + this.state.barId + '.mouseover'} calcMode="linear"
              keySplines=".64,.01,.67,.68;.64,.01,.67,.68;.64,.01,.67,.68;.64,.01,.67,.68;.41,.43,.02,.99" attributeType="XML" attributeName="d" keyTimes="0; 0.2;0.4;0.6;0.8;1"
              dur="0.8s" repeatCount="1" fill="freeze" values={
                "M" + (404.5 + this.state.constant - this.state.barSubstractedVolumeByPx) + ",0c-0.4,0,-1.8,0,-2.2,0c-0.4,0,-0.9,0,-1.4,0c-0.5,0,-1.1,0,-1.4,0h" + (-399.5 - this.state.constant + this.state.barSubstractedVolumeByPx) + "v202h" + (399.5 + this.state.constant - this.state.barSubstractedVolumeByPx) + "c0.3,0,1.5,0,1.8,0c0.4,0,0.9,0,1.3,0c0.4,0,1.6,0,1.9,0c55.8,0,101,-45.2,101,-101s-45.2,-101,-101,-101z;M" + (474.5 + this.state.constant - this.state.barSubstractedVolumeByPx) + ",0c-9.3,0,-18.5,1,-27,3.6c-6,1.9,-13.7,2.4,-19.9,0.3c-8.8,-2.9,-18.4,-4,-28.1,-4h" + (-399.5 - this.state.constant + this.state.barSubstractedVolumeByPx) + "v202h" + (399.5 + this.state.constant - this.state.barSubstractedVolumeByPx) + "c9.6,0,18.9,-1,27.6,-3.8c7.2,-2.3,13.4,-2,20.5,0.2c8.5,2.6,17.6,3.6,26.9,3.6c55.8,0,101,-45.2,101,-101s-45.2,-100.9,-101,-100.9z;M" + (548.5 + this.state.constant - this.state.barSubstractedVolumeByPx) + ",0c-17.9,0,-34.7,4.8,-49.3,12.8c-9.6,5.3,-40.2,5.9,-50.1,0.2c-14.6,-8.5,-31.6,-13,-49.6,-13h" + (-399.5 - this.state.constant + this.state.barSubstractedVolumeByPx) + "v202h" + (399.5 + this.state.constant - this.state.barSubstractedVolumeByPx) + "c18,0,35.1,-4.2,49.4,-12.9c11.9,-7.2,40.6,-7.2,50.1,-0.1c13.4,10.1,31.5,12.9,49.5,12.9c55.8,0,101,-45.2,101,-101s-45.2,-100.9,-101,-100.9z;M" + (619 + this.state.constant - this.state.barSubstractedVolumeByPx) + ",0c-24.9,0,-52.7,13.8,-75.4,31.6c-30.3,23.8,-41.8,23.7,-70.8,-0.2c-21.6,-17.7,-48.5,-31.4,-73.3,-31.4h" + (-399.5 - this.state.constant + this.state.barSubstractedVolumeByPx) + "v202h" + (399.5 + this.state.constant - this.state.barSubstractedVolumeByPx) + "c24.9,0,51.5,-14.5,73.5,-32c32.6,-26,40.6,-26.8,74.8,3.2c20.5,18,47.8,28.8,71.2,28.8c55.8,0,101,-45.2,101,-101s-45.3,-101,-101,-101z;M" + (669.2 + this.state.constant - this.state.barSubstractedVolumeByPx) + ",0.1c-26.9,0,-69.1,20.6,-89.8,53.9c-33,53,-69.2,42,-89,0.1c-17.2,-36.1,-64.3,-54.1,-90.9,-54.1h" + (-399.5 - this.state.constant + this.state.barSubstractedVolumeByPx) + "v202h" + (399.5 + this.state.constant - this.state.barSubstractedVolumeByPx) + "c27.7,0,71.9,-22,92.2,-56.8c28.3,-48.5,61.5,-48.8,87.1,2.9c17.7,35.6,63.9,54,90.3,54c55.8,0,101,-45.2,101,-101s-45.2,-101,-100.9,-101z;M" + (700.6 + this.state.constant - this.state.barSubstractedVolumeByPx) + ",0.1c-26.9,0,-69.4,19.1,-86.5,54.5c-31.7,66,-100.5,53.9,-120.8,0.3c-14.1,-37.4,-67.2,-54.9,-93.8,-54.9h" + (-399.5 - this.state.constant + this.state.barSubstractedVolumeByPx) + "v202h" + (399.5 + this.state.constant - this.state.barSubstractedVolumeByPx) + "c27.7,0,74.4,-20.7,92.2,-56.8c29.2,-59.1,88.5,-56.6,122.1,1.4c20.5,35.5,60.4,55.5,86.8,55.5c55.8,0,101,-45.2,101,-101s-45.2,-101,-101,-101z"} />
            <animate xmlns="http://www.w3.org/2000/svg" begin={'sensor' + this.state.barId + '.mouseout'} calcMode="linear"
              keySplines=".64,.01,.67,.68;.64,.01,.67,.68;.64,.01,.67,.68;.64,.01,.67,.68;..64,.01,.67,.68;.64,.01,.67,.68" attributeType="XML" attributeName="d" keyTimes="0;0.2;0.4;0.6; 0.8; 0.9999 ; 1"
              dur="0.81s" repeatCount="1" fill="freeze" values={"M" + (700.6 + this.state.constant - this.state.barSubstractedVolumeByPx) + ",0.1c-26.9,0,-69.4,19.1,-86.5,54.5c-31.7,66,-100.5,53.9,-120.8,0.3c-14.1,-37.4,-67.2,-54.9,-93.8,-54.9h" + (-399.5 - this.state.constant + this.state.barSubstractedVolumeByPx) + "v202h" + (399.5 + this.state.constant - this.state.barSubstractedVolumeByPx) + "c27.7,0,74.4,-20.7,92.2,-56.8c29.2,-59.1,88.5,-56.6,122.1,1.4c20.5,35.5,60.4,55.5,86.8,55.5c55.8,0,101,-45.2,101,-101s-45.2,-101,-101,-101z;M" + (669.2 + this.state.constant - this.state.barSubstractedVolumeByPx) + ",0.1c-26.9,0,-69.1,20.6,-89.8,53.9c-33,53,-69.2,42,-89,0.1c-17.2,-36.1,-64.3,-54.1,-90.9,-54.1h" + (-399.5 - this.state.constant + this.state.barSubstractedVolumeByPx) + "v202h" + (399.5 + this.state.constant - this.state.barSubstractedVolumeByPx) + "c27.7,0,71.9,-22,92.2,-56.8c28.3,-48.5,61.5,-48.8,87.1,2.9c17.7,35.6,63.9,54,90.3,54c55.8,0,101,-45.2,101,-101s-45.2,-101,-100.9,-101z;M" + (619 + this.state.constant - this.state.barSubstractedVolumeByPx) + ",0c-24.9,0,-52.7,13.8,-75.4,31.6c-30.3,23.8,-41.8,23.7,-70.8,-0.2c-21.6,-17.7,-48.5,-31.4,-73.3,-31.4h" + (-399.5 - this.state.constant + this.state.barSubstractedVolumeByPx) + "v202h" + (399.5 + this.state.constant - this.state.barSubstractedVolumeByPx) + "c24.9,0,51.5,-14.5,73.5,-32c32.6,-26,40.6,-26.8,74.8,3.2c20.5,18,47.8,28.8,71.2,28.8c55.8,0,101,-45.2,101,-101s-45.3,-101,-101,-101z;M" + (548.5 + this.state.constant - this.state.barSubstractedVolumeByPx) + ",0c-17.9,0,-34.7,4.8,-49.3,12.8c-9.6,5.3,-40.2,5.9,-50.1,0.2c-14.6,-8.5,-31.6,-13,-49.6,-13h" + (-399.5 - this.state.constant + this.state.barSubstractedVolumeByPx) +  "v202h" + (399.5 + this.state.constant - this.state.barSubstractedVolumeByPx) + "c18,0,35.1,-4.2,49.4,-12.9c11.9,-7.2,40.6,-7.2,50.1,-0.1c13.4,10.1,31.5,12.9,49.5,12.9c55.8,0,101,-45.2,101,-101s-45.2,-100.9,-101,-100.9z;M" + (474.5 + this.state.constant - this.state.barSubstractedVolumeByPx) +  ",0c-9.3,0,-18.5,1,-27,3.6c-6,1.9,-13.7,2.4,-19.9,0.3c-8.8,-2.9,-18.4,-4,-28.1,-4h" + (-399.5 - this.state.constant + this.state.barSubstractedVolumeByPx) +  "v202h" + (399.5 + this.state.constant - this.state.barSubstractedVolumeByPx) +  "c9.6,0,18.9,-1,27.6,-3.8c7.2,-2.3,13.4,-2,20.5,0.2c8.5,2.6,17.6,3.6,26.9,3.6c55.8,0,101,-45.2,101,-101s-45.2,-100.9,-101,-100.9z;M" + (404.5 + this.state.constant - this.state.barSubstractedVolumeByPx) +  ",0c-0.4,0,-1.8,0,-2.2,0c-0.4,0,-0.9,0,-1.4,0c-0.5,0,-1.1,0,-1.4,0h" + (-399.5 - this.state.constant + this.state.barSubstractedVolumeByPx) +  "v202h" + (404.5 + this.state.constant - this.state.barSubstractedVolumeByPx) +  "c0.3,0,1.5,0,1.8,0c0.4,0,0.9,0,1.3,0c0.4,0,1.6,0,1.9,0c55.8,0,101,-45.2,101,-101s-45.2,-101,-101,-101z;M0,0z"} />
            <animate id="tail-init" xmlns="http://www.w3.org/2000/svg" begin="2s" calcMode="linear"
            attributeType="XML" attributeName="opacity" keyTimes="0; 1" dur="0.1s"
            repeatCount="1" fill="freeze" values="0;1"/>
            <animateTransform id="shadow-float" attributeName="transform" attributeType="XML" begin="" type="translate"
            from="0 0" to="-30 30" dur="0.6s" repeatCount="1" fill="freeze" calcMode="spline" keySplines="0,.72,.37,1"
            keyTimes="0; 1" />
            <animateTransform id="shadow-flat" attributeName="transform" attributeType="XML" begin="" type="translate"
            from="-30 30" to="0 0" dur="0.6s" repeatCount="1" fill="freeze" calcMode="spline" keySplines="0,.72,.37,1"
            keyTimes="0; 1" />
          </path>
          <g id="concrete">
            <g id={"bar-" + this.state.barId } data-foo="">
              <g id="metaBalls" transform="translate(300 0) scale(1 1)"  filter="url(#noise)">
                <circle id="detached" fill="#e5fdef" cx="101" cy="101" r="0">
                  <animate id="detached-click" xmlns="http://www.w3.org/2000/svg" begin={'sensor' + this.state.barId + '.click'} calcMode="linear"
                    keySplines=".85 0 .51 1;.85 0 .51 1" attributeType="XML" attributeName="cx" keyTimes="0; 0.5; 1" dur="1s"
                    repeatCount="1" fill="freeze" values="250;370.7;398.2" />
                  <animate xmlns="http://www.w3.org/2000/svg" begin={'sensor' + this.state.barId + '.mouseover'} calcMode="linear"
                    keySplines=".64,.01,.67,.68;.64,.01,.67,.68;.64,.01,.67,.68;.41,.43,.02,.99" attributeType="XML" attributeName="cx" keyTimes="0; 0.25; 0.5; 0.75; 1"
                    dur="0.8s" repeatCount="1" fill="freeze" values="106;176;250;370.7;398.2" />
                  <animate xmlns="http://www.w3.org/2000/svg" begin={'sensor' + this.state.barId + '.mouseout'} calcMode="linear"
                    keySplines=".64,.01,.67,.68;.64,.01,.67,.68;.64,.01,.67,.68;.41,.43,.02,.99" attributeType="XML" attributeName="cx" keyTimes="0; 0.25; 0.5; 0.75; 1"
                    dur="0.8s" repeatCount="1" fill="freeze" values="398.2;370.7;250;176;106" />
                  <animate xmlns="http://www.w3.org/2000/svg" begin="0s" calcMode="linear"
                    attributeType="XML" attributeName="r" keyTimes="0; 0.99; 1"
                    dur="1.01s" repeatCount="1" fill="freeze" values={'0;0;101'} />
                </circle>
                <circle id="head" fill="#e5fdef" cx="101" cy="101" r="0">
                    <animate xmlns="http://www.w3.org/2000/svg" begin="0s" calcMode="linear"
                    attributeType="XML" attributeName="r" keyTimes="0; 0.99; 1"
                    dur="1.01s" repeatCount="1" fill="freeze" values={'0;0;101'} />
                </circle>
                <path id="metaConnection" fill="#e5fdef">
                  <animate xmlns="http://www.w3.org/2000/svg" begin={'sensor' + this.state.barId + '.mouseout'} calcMode="linear"
                    keySplines=".64,.01,.67,.68;.64,.01,.67,.68;.64,.01,.67,.68;.41,.43,.02,.99" attributeType="XML" attributeName="d" keyTimes="0; 0.25; 0.5; 0.75; 1"
                    dur="0.8s" repeatCount="1" fill="freeze" values="
                    M198.6,74.3c-19.1-47-12.1,83.8-1.1,56.8c15.8-38.9,87.3-35.8,104.3,0c15.7,33.1,12.5-93.2-1.1-56.4C286.2,113.8,213.2,110.3,198.6,74.3z
                    ;M190.6,54.3c-26.8-43.1-16.7,117.1,0,93.3c35.8-50.9,57.8-51.2,90.3-0.1c19.7,30.9,22.8-125.3,0.2-93.2C248.7,100.4,218.5,99.1,190.6,54.3z
                  
                  ;M150.7,13c-37.7-13.6-27.6,186.3-0.3,176.1c20.3-7.5,27.8-7.6,50.1,0c34.7,11.7,37.6-188,0.2-176.2C180.9,19.1,170.3,20.1,150.7,13z
                  ;M127.5,3.5c-37.9-13.2-27.9,203.2,0,195c9.3-2.7,12-2.7,21.5-0.1c35.4,9.4,37.8-206.3,0.3-195C140,6.2,135.6,6.3,127.5,3.5z
                  ;M99.5,0.5c-1,0-1.4,200.7,1,200.7c1.6,0-3.7-0.3,0-0.2c3.2,0.1,0-200.9-0.8-200.9C99,0.1,101.1,0.5,99.5,0.5z" />
                  <animate xmlns="http://www.w3.org/2000/svg" begin={'sensor' + this.state.barId + '.click'} calcMode="linear"
                    keySplines=".85 0 .51 1;.85 0 .51 1;.85 0 .51 1" attributeType="XML" attributeName="d"
                    keyTimes="0; 0.5; 0.99; 1" dur="1.01s" repeatCount="1" fill="freeze" values="
                  M150.7,13c-37.7-13.6-27.6,186.3-0.3,176.1c20.3-7.5,27.8-7.6,50.1,0c34.7,11.7,37.6-188,0.2-176.2C180.9,19.1,170.3,20.1,150.7,13z
                  ;M190.6,54.3c-26.8-43.1-16.7,117.1,0,93.3c35.8-50.9,57.8-51.2,90.3-0.1c19.7,30.9,22.8-125.3,0.2-93.2C248.7,100.4,218.5,99.1,190.6,54.3z
                  ;M198.6,74.3c-19.1-47-12.1,83.8-1.1,56.8c15.8-38.9,87.3-35.8,104.3,0c15.7,33.1,12.5-93.2-1.1-56.4C286.2,113.8,213.2,110.3,198.6,74.3z
                  ;M198.6,74.3z" />
                  <animate xmlns="http://www.w3.org/2000/svg" begin={'sensor' + this.state.barId + '.mouseover'} calcMode="linear"
                    keySplines=".64,.01,.67,.68;.64,.01,.67,.68;.64,.01,.67,.68;.41,.43,.02,.99" attributeType="XML" attributeName="d" keyTimes="0; 0.25; 0.5; 0.75; 1"
                    dur="0.8s" repeatCount="1" fill="freeze"
                    values="
                  M99.5,0.5c-1,0-1.4,200.7,1,200.7c1.6,0-3.7-0.3,0-0.2c3.2,0.1,0-200.9-0.8-200.9C99,0.1,101.1,0.5,99.5,0.5z
                  ;M127.5,3.5c-37.9-13.2-27.9,203.2,0,195c9.3-2.7,12-2.7,21.5-0.1c35.4,9.4,37.8-206.3,0.3-195C140,6.2,135.6,6.3,127.5,3.5z
                  ;M150.7,13c-37.7-13.6-27.6,186.3-0.3,176.1c20.3-7.5,27.8-7.6,50.1,0c34.7,11.7,37.6-188,0.2-176.2C180.9,19.1,170.3,20.1,150.7,13z
                  ;M190.6,54.3c-26.8-43.1-16.7,117.1,0,93.3c35.8-50.9,57.8-51.2,90.3-0.1c19.7,30.9,22.8-125.3,0.2-93.2C248.7,100.4,218.5,99.1,190.6,54.3z
                  ;M198.6,74.3c-19.1-47-12.1,83.8-1.1,56.8c15.8-38.9,87.3-35.8,104.3,0c15.7,33.1,12.5-93.2-1.1-56.4C286.2,113.8,213.2,110.3,198.6,74.3z
                  "/>

                </path>
                <animateTransform id="bar-init" attributeName="transform" attributeType="XML" begin="1s" type="translate"
                from="0 0" to={ (300 + this.state.constant - this.state.barSubstractedVolumeByPx) + " 0"} dur="1s" repeatCount="1" fill="freeze" calcMode="spline" keySplines="0,.72,.37,1"
                keyTimes="0; 1" />
              </g>
              <path id={"tail-" + this.state.barId } fill="url(#grad)" d=""  filter="url(#noise)">
                <animate id="tail-init" xmlns="http://www.w3.org/2000/svg" begin="1s" calcMode="spline"
                keySplines="0,.72,.37,1" attributeType="XML" attributeName="d" keyTimes="0; 1" dur="1s"
                repeatCount="1" fill="freeze" values={'M100,0v202h100v-202z;M' + (101 + this.state.barVisibleVolumeByPx) + ',0v202h-' + (0 + this.state.barVisibleVolumeByPx) + 'v-202z'} />
              </path>
              <g id="animation-controller-on"  filter="url(#noise)">
                <g></g>
              </g>
              <g id="animation-controller-out"  filter="url(#noise)">
                <g></g>
              </g>
              {/* <path id="icon-area" fill="#4f809d" d="M0,0h202v202h-202z"> */}
              <image xlinkHref={this.state.iconSrc} x="-20" y="-20" height="244" width="244"/>

              {/* </path> */}
              <animateTransform id="concrete-flat" attributeName="transform" attributeType="XML" begin="" type="translate"
                from="15 -15" to="0 0" dur="0.6s" repeatCount="1" fill="freeze" calcMode="spline" keySplines="0,.72,.37,1"
                keyTimes="0; 1" />
              <animateTransform id="concrete-float" attributeName="transform" attributeType="XML" begin="" type="translate"
                from="0 0" to="15 -15" dur="0.6s" repeatCount="1" fill="freeze" calcMode="spline" keySplines="0,.72,.37,1"
                keyTimes="0; 1" />

            </g>

          </g>
          <path id={'sensor' + this.state.barId} className="sensor" onClick={(event)=>{this.explode(event)}} onMouseEnter={(event)=>{this.onChange(event)}} onMouseOut={(event)=>{this.onChange(event)}} fill="#ffffff" style={{opacity:0}} d={"M" + (399.5 + this.state.constant - this.state.barSubstractedVolumeByPx) + ",0c56,0,101,45,101,101c0,56 -45,101 -101,101h" + (-399.5 - this.state.constant - this.state.barSubstractedVolumeByPx) + "v-202z"}>
            </path>
      </svg>
      // ,<div className="textDiv" id={'exploder-' + this.state.barId}></div>
      ]
  )
  }
}

export default SkillBar;
