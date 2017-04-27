'use strict';

console.log("IN INDEX.JS");
const {ipcRenderer} = require('electron');
// console.log(ipcRenderer.sendSync('synchronous-message', 'ping SYNC')); // prints "pong" from main.js, sends "ping SYNC" 

ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(arg, "in asynchronous-reply", new Date()); // prints "pong"
  // ipcRenderer.send('asynchronous-message', 'ping ASYNC'); // will send ping/pong back and forth forever
});
ipcRenderer.send('asynchronous-message', 'ping ASYNC');

var closeEl = document.querySelector('#close-button');

closeEl.addEventListener('click', function () {
    window.close();
});
