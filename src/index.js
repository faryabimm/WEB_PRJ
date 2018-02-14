import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import store, {history} from './store'
import App from './containers/App';

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App/>
        </div>
    </Provider>
    , document.getElementById('root'));

