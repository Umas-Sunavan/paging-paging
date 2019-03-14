import React, { Component } from 'react';
import './BCard.css'
import CCard from './CCard';

class BCard extends Component {
  constructor(props) {
    super(props)
    this.state = {}    
  }

  render() {
    return (
    <div style={this.props.style} child={this.props.child} className="b-card">
      {this.props.child.map((cCardItem,cCardIndex)=>{
        return (<CCard key={cCardIndex} value={cCardItem.value}></CCard>)
      })}
    </div>
    )
  }

}

export default BCard;