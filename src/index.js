import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import LoginPage from './containers/LogIn/LoginPage'
import RegisterPage from './containers/Register/RegisterPage'
import LeaderBoard from './containers/LeaderBoeard/LeaderBoeard'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LeaderBoard/>, document.getElementById('root'));
registerServiceWorker();
