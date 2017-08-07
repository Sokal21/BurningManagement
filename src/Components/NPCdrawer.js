import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

import DeleteIcon from 'material-ui/svg-icons/content/clear';
import CopyIcon from 'material-ui/svg-icons/content/content-copy';


class NPCinterface extends Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCopy = this.handleCopy.bind(this);
  }

  handleCopy(event) {
    event.preventDefault();
    this.props.copyNpc(this.props.index);
  }

  handleDelete(event) {
    event.preventDefault();
    this.props.deleteNpc(this.props.index);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.changeNpc(this.props.index);
  }

  render() {
    let npc=this.props.npc;
    return(
      <div>
        <MenuItem onTouchTap={this.handleClick}>
          {npc.name}
          <IconButton className="DeleteButton" onTouchTap={this.handleDelete}>
            <DeleteIcon/>
          </IconButton>
          <IconButton className="DeleteButton" onTouchTap={this.handleCopy}>
            <CopyIcon/>
          </IconButton>
        </MenuItem>
      </div>
    )
  }
}

class NPCdrawer extends Component {

  render() {
    return(
      <div className="NPCdrawer">
        <Drawer open={this.props.open}>
          {this.props.npcs.map((npc,i) => <NPCinterface npc={npc} key={i}
                                                        deleteNpc={this.props.deleteNpc}
                                                        copyNpc={this.props.copyNpc}
                                                        changeNpc={this.props.changeNpc}
                                                        index={i}/>)}
        </Drawer>
      </div>
    )
  }
};

export default NPCdrawer
