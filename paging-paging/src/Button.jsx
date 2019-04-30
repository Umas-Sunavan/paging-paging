import React, { Component } from 'react';
import './button-style.css';

class ButtonNormal extends Component {
  constructor(props) {
    super(props)
    if (this.props.importantBtn) {
      this.state = {
        btnBackgroundColor:"heavy-btn",
        cnFontColor:" text-white",
        enFontColor:" text-white"
      }
    } else {
      this.state = {
        btnBackgroundColor:'',
        colorClass:"light-btn",
        cnFontColor:"",
        enFontColor:""
      }
    }
  }

  render() {
    return (  
      <a href={this.props.hyperLink} id={this.props.customId} className={this.state.btnBackgroundColor + " btn"}>
        <h3 className={"en-text-lg" + this.state.enFontColor}>{this.props.enTitle}</h3>
        <h3 className={"cn-text-md" + this.state.cnFontColor}>{this.props.cnTitle}</h3>
      </a>
    )
  }

}

export default ButtonNormal;