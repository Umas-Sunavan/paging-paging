import React, { Component } from 'react';

class CCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animationMoveInfoFromCCard: this.props.getAnimationMoveInfoFromBCard
    }
  }

  render() {    
    return (
      <div
        style={this.props.style}
        key={() => 'cCard'}
        id={'c-card-' + this.props.cardIndex[0] + '-' + this.props.cardIndex[1] + '-' + this.props.cardIndex[2]}
        sidemenu={this.props.sidemenu + ''}
        getanimationmoveinfofromccard={this.props.getAnimationMoveInfoFromBCard}
        className={this.props.className + " c-card"}
      >
        {this.props.valueFunc(this)}
      </div>
    )


  }

}

export default CCard;