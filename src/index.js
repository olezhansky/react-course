import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let dialogsData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Valera'},
    {id: 6, name: 'Serhy'},
  ]
  
  let messagesData = [
    {id: 1, message: 'Hello 1'},
    {id: 2, message: 'Hello 2'},
    {id: 3, message: 'Hello 3'},
    {id: 4, message: 'Hello 4'},
    {id: 5, message: 'Hello 5'},
    {id: 6, message: 'Hello 6'},
  ]

  let posts = [
    {id: 1, message: 'post 1', like: "like 1"},
    {id: 2, message: 'post 2', like: "like 2"}
  ]

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
