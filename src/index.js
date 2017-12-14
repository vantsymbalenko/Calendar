import React from 'react';
import ReactDOM from 'react-dom';
import Days from './containers/index';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

let store = configureStore();

ReactDOM.render(
    <Provider store = {store }>
        <Days/>
    </Provider> ,
    document.getElementById('root'));