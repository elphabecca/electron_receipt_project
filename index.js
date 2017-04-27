'use strict';

console.log("IN INDEX.JS");
const {ipcRenderer} = require('electron');
// console.log(ipcRenderer.sendSync('synchronous-message', 'ping SYNC')); // prints "pong"

ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(arg, "in asynchronous-reply", new Date()); // prints "pong"
  ipcRenderer.send('asynchronous-message', 'ping ASYNC');
});
ipcRenderer.send('asynchronous-message', 'ping ASYNC');

var closeEl = document.querySelector('#close-button');

closeEl.addEventListener('click', function () {
    window.close();
});
