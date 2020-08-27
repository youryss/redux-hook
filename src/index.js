import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StoreProvider } from './store/Store';
import { initialState, bookTableReducer } from './store/bookTableReducer';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider initialState={initialState} reducer={bookTableReducer}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
