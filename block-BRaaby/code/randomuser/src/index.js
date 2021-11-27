import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// {"results":[
//   {"gender":"female",
//   "name":{"title":"Mrs"
//   ,"first":"Amelia",
//   "last":"Vincent"},
//   "location":{"street":{"number":8494,"name":"Rue du 8 Mai 1945"},"city":"Aix-En-Provence","state":"Nord","country":"France","postcode":80296,"coordinates":{"latitude":"-3.4973","longitude":"156.2943"},
//   "timezone":{"offset":"+5:45","description":"Kathmandu"}},
//   "email":"amelia.vincent@example.com",
//   "login":{"uuid":"1f8cdc0b-cda7-4dda-acb4-300e4f734710","username":"crazyduck101","password":"reeves","salt":"1NC2ZMkV","md5":"449f31aad80c545112a23217591c99c5","sha1":"b6250f7cb97f4e600ac2083ac4651376f9706cd8","sha256":"70c3ed3b03273612113279923340e2d036ecb26c925e9941f3884be77672912a"},
//   "dob":{"date":"1946-10-28T18:23:24.581Z","age":75},
//   "registered":{"date":"2017-11-29T17:44:02.458Z","age":4},
//   "phone":"05-41-24-00-60","cell":"06-77-32-35-36","id":{"name":"INSEE","value":"2NNaN43010682 53"},
//   "picture":{"large":"https://randomuser.me/api/portraits/women/27.jpg","medium":"https://randomuser.me/api/portraits/med/women/27.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/27.jpg"},"nat":"FR"}],
//   "info":{"seed":"764c3e36e7654b68","results":1,"page":1,"version":"1.3"}}
