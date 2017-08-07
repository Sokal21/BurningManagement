import React, { Component } from 'react';
import { connect } from 'react-redux';

class Battle extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    let npc = this.props.npc;
    if(npc){
      return (
        <div className="Battle">
          <h1>{npc.name}</h1>
          <p>{npc.description}</p>
        </div>
      )
    } else {
      return (
        <p>
          Yo haven't selected any NPC, please click in any of the name in the left bar. If there isn't any go to CREATE NPC and make one!
        </p>
      )
    }
  }
}

export default connect(state => {return {npc: state.npcs[state.currentNPCindex]}},
                       dispatch => {return {}})(Battle)
