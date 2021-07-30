import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { userSlice } from './redux/user/userSlice';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {console.log(userSlice.actions, 'act')
      }
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);