import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import First from './First';
import Header from './Header';
import Footer from './Footer';
import Display from './Display';
// import Footer1 from './Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
 <App></App>

</div>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
