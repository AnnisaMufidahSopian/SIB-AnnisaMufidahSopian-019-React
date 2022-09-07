import React from 'react';
import ReactDOM from 'react-dom/client'; //react 18
//import ReactDOM from 'react-dom'; react 17
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

//react 17

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


//react 18
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, 
document.getElementById('root')
)
*/
