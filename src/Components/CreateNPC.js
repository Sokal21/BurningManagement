import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { addNewNpc } from '../Actions';

import AddIcon from 'material-ui/svg-icons/content/add-circle-outline';

let styleInjuries = {width: '40px',
                     margin: '-35px 20px 0px'};
let styleDamage = {width: '90px',
                   margin: '-35px 20px 0px'}
let styleWeapon = {width: '120px',
                   margin: '-10px 20px 0px'};
let styleArmor = {margin: '0px 20px 0px'};
let styleData = {margin: '0px 20px 0px'};
let styleValues = {margin: '-15px 20px 0px'};
let styleSubmit = {margin: '40px 0px 30px'};

class NPCreator extends Component {

  constructor(props) {
    super(props);
    this.handleChangeArmor = this.handleChangeArmor.bind(this);
    this.state = {armor: 1,
                  weapon: 1,
                  trained: false,
                  blocknstrike: false,
                  speed: 0,
                  power: 0,
                  reflexes: 0,
                  armorQuality: 1,
                  weaponSkill: 0,
                  weaponSpeed: 0,
                  weaponLength: 1,
                  incidental: 0,
                  battle: undefined,
                  mark: 0,
                  superb: 0,
                  name: 'no name',
                  su: 0,
                  li: 0,
                  mi: 0,
                  se: 0,
                  tr: 0,
                  mo: 0,
                  description: ''};
    this.checkArmored = this.checkArmored.bind(this);
    this.handleChangeArmorQuality = this.handleChangeArmorQuality.bind(this);
    this.handleChangeWeapongLength = this.handleChangeWeapongLength.bind(this);
    this.handleChangeIncidental = this.handleChangeIncidental.bind(this);
    this.handleChangeMark = this.handleChangeMark.bind(this);
    this.handleChangeSuperb = this.handleChangeSuperb.bind(this);
    this.handleChangeWeaponSkill = this.handleChangeWeaponSkill.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.submit = this.submit.bind(this);
    this.checkBlocknStrike = this.checkBlocknStrike.bind(this);
    this.handleChangeReflexes = this.handleChangeReflexes.bind(this);
    this.handleChangeSpeed = this.handleChangeSpeed.bind(this);
    this.handleChangePower = this.handleChangePower.bind(this);
    this.handleChangeSu = this.handleChangeSu.bind(this);
    this.handleChangeLi = this.handleChangeLi.bind(this);
    this.handleChangeMi = this.handleChangeMi.bind(this);
    this.handleChangeSe = this.handleChangeSe.bind(this);
    this.handleChangeTr = this.handleChangeTr.bind(this);
    this.handleChangeMo = this.handleChangeMo.bind(this);
  }

  handleChangeSu(event,value) {
   this.setState({su: value});
  }

  handleChangeLi(event,value) {
   this.setState({li: value});
  }

  handleChangeMi(event,value) {
   this.setState({mi: value});
  }

  handleChangeSe(event,value) {
   this.setState({se: value});
  }

  handleChangeTr(event,value) {
   this.setState({tr: value});
  }

  handleChangeMo(event,value) {
   this.setState({mo: value});
  }

  handleChangePower(event,value) {
    this.setState({power: value});
  }

  handleChangeSpeed(event,value) {
    this.setState({speed: value});
  }

  handleChangeReflexes(event,value) {
    this.setState({reflexes: value});
  }

  checkBlocknStrike(event) {
    this.setState({blocknstrike: !this.state.blocknstrike});
  }

  handleChangeIncidental(event,value) {
    this.setState({incidental: value});
  }

  handleChangeMark(event,value) {
    this.setState({mark: value});
  }

  handleChangeSuperb(event,value) {
    this.setState({superb: value});
  }

  handleChangeArmor(event,index,value) {
    this.setState({armor: value});
  }

  checkArmored(event) {
    this.setState({trained: !this.state.trained})
  }

  handleChangeArmorQuality(event,index,value) {
    this.setState({armorQuality: value});
  }

  handleChangeWeapongLength(event,index,value) {
    this.setState({weaponLength: value});
  }

  handleChangeWeaponSkill(event,value) {
    this.setState({weaponSkill: value});
  }

  handleChangeName(event,value) {
    this.setState({name: value});
  }

  handleChangeDescription(event,value) {
    this.setState({description: value});
  }

  submit(event) {
    event.preventDefault();
    this.props.addNewNpc(this.state);
  }

  render() {
    return (
      <div className="NPCreator">

        <h3>Create a new NPC</h3>

        <div className="Data">
          <TextField hintText="NPC's name..." onChange={this.handleChangeName}
          style={styleData}/>
          <br/>
          <TextField hintText="Additional information..." onChange={this.handleChangeDescription}
          style={styleData}
          multiLine={true}
          rowsMax={4}/>
          <br/>
        </div>

        <div className="Armor">
          <h4>Armor</h4>
            <Checkbox label="Armor trained" onCheck={this.checkArmored}
            style={styleArmor}/>
            <SelectField value={this.state.armor}
                         onChange={this.handleChangeArmor}
                         floatingLabelText="Type"
                         style={styleArmor}>
              <MenuItem value={1} primaryText="Gambeson"/>
              <MenuItem value={2} primaryText="Reinforced leather"/>
              <MenuItem value={3} primaryText="Light mail"/>
              <MenuItem value={4} primaryText="Heavy mail"/>
              <MenuItem value={5} primaryText="Plated mail"/>
              <MenuItem value={6} primaryText="Full plate"/>
            </SelectField>
            <SelectField value={this.state.armorQuality}
                         onChange={this.handleChangeArmorQuality}
                         floatingLabelText="Quality"
                         style={styleArmor}>
              <MenuItem value={1} primaryText="Poor quality"/>
              <MenuItem value={2} primaryText="Run of the mill"/>
              <MenuItem value={3} primaryText="Superior quality"/>
            </SelectField>
        </div>

        <div className="Weapons">
          <h4>Weapons</h4>
            <SelectField value={this.state.weaponLength}
                         onChange={this.handleChangeWeapongLength}
                         floatingLabelText="Length"
                         style={styleWeapon}>
              <MenuItem value={1} primaryText="Shortest"/>
              <MenuItem value={2} primaryText="Short"/>
              <MenuItem value={3} primaryText="Long"/>
              <MenuItem value={4} primaryText="Longest"/>
            </SelectField>
            <br/>
            <TextField floatingLabelText="Weapon skill"
                       type="number" onChange={this.handleChangeWeaponSkill}
                       style={styleWeapon}/>
            <br/>
            <TextField floatingLabelText="Weapon speed"
                       type="number" onChange={this.handleChangeSuperb}
                       style={styleWeapon}/>
          </div>

          <div className="Damage">
            <h4>Damage</h4>
              <TextField floatingLabelText="Incidental"
                         type="number" onChange={this.handleChangeIncidental}
                         style={styleDamage}/>
              |
              <TextField floatingLabelText="Mark"
                         type="number" onChange={this.handleChangeMark}
                         style={styleDamage}/>
              |
              <TextField floatingLabelText="Superb"
                         type="number" onChange={this.handleChangeSuperb}
                         style={styleDamage}/>
          </div>

          <div className="Injuries">
            <h4>Injuries</h4>
              <TextField floatingLabelText="Su"
                         type="number" onChange={this.handleChangeSu}
                         style={styleInjuries}/>
              |
              <TextField floatingLabelText="Li"
                         type="number" onChange={this.handleChangeLi}
                         style={styleInjuries}/>
              |
              <TextField floatingLabelText="Mi"
                         type="number" onChange={this.handleChangeMi}
                         style={styleInjuries}/>
              |
              <TextField floatingLabelText="Se"
                         type="number" onChange={this.handleChangeSe}
                         style={styleInjuries}/>
              |
              <TextField floatingLabelText="Tr"
                         type="number" onChange={this.handleChangeTr}
                         style={styleInjuries}/>
              |
              <TextField floatingLabelText="Mo"
                         type="number" onChange={this.handleChangeMo}
                         style={styleInjuries}/>
          </div>

          <div className="Values">
            <h4>Character values</h4>
              <TextField floatingLabelText="Reflexes"
                         type="number" onChange={this.handleChangeReflexes}
                         style={styleValues}/>
               <br/>
              <TextField floatingLabelText="Speed"
                         type="number" onChange={this.handleChangeSpeed}
                         style={styleValues}/>
               <br/>
               <TextField floatingLabelText="Power"
                          type="number" onChange={this.handleChangePower}
                          style={styleValues}/>
               <br/>
               <Checkbox label="Block and strike requirements" onCheck={this.checkBlocknStrike}
                         style={{margin: '10px 20px 0px'}}/>
           </div>
           <RaisedButton label="SUBMIT" icon={<AddIcon/>} onTouchTap={this.submit}
                         style={styleSubmit}/>

      </div>
    );
  }
}

export default connect(state => {return {}},
                       dispatch => {return {addNewNpc: npc => dispatch(addNewNpc(npc))}})(NPCreator)
