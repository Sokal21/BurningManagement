import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteNpc, changeComp, copyNpc, changeNpc } from '../Actions';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';

import NPCdrawer from './NPCdrawer'

class NavigationBar extends Component {

  constructor(props) {
    super(props);
    this.state = {open: true};
    this.handleOpen = this.handleOpen.bind(this);
    this.handleChangeHome = this.handleChangeHome.bind(this);
    this.handleChangeCreate = this.handleChangeCreate.bind(this);
    this.handleChangeBattle = this.handleChangeBattle.bind(this);
  }

  handleOpen(event) {
    event.preventDefault();
    this.setState({open: !this.state.open});
  }

  handleChangeHome(event) {
    event.preventDefault();
    this.props.changeComp('home');
  }


  handleChangeCreate(event) {
    event.preventDefault();
    this.props.changeComp('createNPC');
  }

  handleChangeBattle(event) {
    event.preventDefault();
    this.props.changeComp('battle');
  }

  render() {
    return(
      <div className="NavigationBar">
        <h1>Burning Management</h1>
        <NPCdrawer open={this.state.open}
                npcs={this.props.npcs}
                deleteNpc={this.props.deleteNpc}
                copyNpc={this.props.copyNpc}
                changeNpc={this.props.changeNpc}/>
        <Toolbar>
          <ToolbarGroup firstChild={true} lastChild={true}>
            <FlatButton onTouchTap={this.handleChangeHome} label="HOME"/>
            <ToolbarSeparator />
            <FlatButton onTouchTap={this.handleOpen} label="SHOW NPC's"/>
            <ToolbarSeparator />
            <FlatButton onTouchTap={this.handleChangeCreate} label="CREATE NPC"/>
            <ToolbarSeparator />
            <FlatButton onTouchTap={this.handleChangeBattle} label="BATTLE"/>
          </ToolbarGroup>
        </Toolbar>
      </div>
    )
  }
};

export default connect(state => {return {npcs: state.npcs}},
                       dispatch => {return {deleteNpc: index => dispatch(deleteNpc(index)),
                                            changeComp: comp => dispatch(changeComp(comp)),
                                            copyNpc: index => dispatch(copyNpc(index)),
                                            changeNpc: index => dispatch(changeNpc(index))}})(NavigationBar);
