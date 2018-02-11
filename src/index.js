import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import LoginPage from './containers/LogIn/LoginPage'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LoginPage/>, document.getElementById('root'));
registerServiceWorker();
