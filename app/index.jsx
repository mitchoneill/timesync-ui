//import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import alt from './libs/alt';
import App from './components/App.jsx';

main();

function main() {
  const app = document.createElement('div');

  document.body.appendChild(app);

  ReactDOM.render(<App />, app);
}
