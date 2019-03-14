import React, { Component } from 'react';
import './ACard.css'
import BCard from './BCard';

class ACard extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }    
  }

  render() {
    return (
    <div style={this.props.style} child={this.props.child} className="a-card">
      <div className="b-card-container" style={this.props.containerStyle}>
      {this.props.child.map((bCardItem,bCardIndex) => {
        return (<BCard child={bCardItem.BCardChild} style={bCardItem.BCardAttr.style} key={bCardIndex}></BCard>)
      })}
      </div>
    </div>
    )
  }

}

export default ACard;