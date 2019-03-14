import React, { Component } from 'react';

class CCard extends Component {
  constructor(props) {
    super(props)
    this.state = {}    
  }

  render() {    
    return (
    <div style={this.props.style}>{this.props.value}</div>
    )
  }

}

export default CCard;