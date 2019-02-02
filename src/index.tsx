import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import VideoApp from './components/Pages/VideoApp/VideoApp';
import store from './redux/store';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <VideoApp />
  </Provider>,
  document.getElementById('root')
);
