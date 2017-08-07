import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import reducer from './Reducer';


let store = createStore(reducer);

console.log(store);

persistStore(store,{blacklist: ['currentComp']},() => {console.log("restored");});


ReactDOM.render(<App store={store}/>, document.getElementById('root'));
registerServiceWorker();
