import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectedTapEventPlugin from 'react-tap-event-plugin';
import { Provider, connect } from 'react-redux';

import NPCreator from './Components/CreateNPC';
import NavigationBar from './Components/NavigationBar';
import Home from './Components/Home';
import Battle from './Components/Battle'

import './App.css';

injectedTapEventPlugin();

class App extends Component {

  render() {
    let currentComp = this.props.store.getState().currentComp;
    let display = null;
    if(currentComp === 'createNPC') {
      display = <NPCreator/>;
    } else if(currentComp === 'home') {
      display = <Home/>;
    } else if(currentComp === 'battle') {
      display = <Battle/>;
    };
    return (
      <Provider store={this.props.store}>
        <MuiThemeProvider>
          <div className="Main">
            <NavigationBar/>
            {display}
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default connect(state => {return state},dispatch => {return {}})(App);
