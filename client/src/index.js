import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';//-------------
import reducers from './reducers';//-------------
import { Provider } from 'react-redux';//-------------
import reduxThunk from 'redux-thunk';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));//-------------

ReactDOM.render(
  
  <BrowserRouter>
    <Provider store={store}><App /></Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
