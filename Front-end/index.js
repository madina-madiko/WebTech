import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
//import {render} from 'react-dom'
import App from './App.js';
import Restaurants from './Rest.js';
import New from './new.js';
import registerServiceWorker from './registerServiceWorker';
import Basket from './basket.js'
import Login from './login.js'

ReactDOM.render(<New />,
document.getElementById('root'));

registerServiceWorker();

