import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { PupProvider } from './context/PupContext';

const Root = () => {
  return (
    <PupProvider>
      <App />
    </PupProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);