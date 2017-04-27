'use strict';

console.log("IN INDEX.JS");
const {ipcRenderer} = require('electron');
console.log(ipcRenderer.sendSync('synchronous-message', 'ping')); // prints "pong"

ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(arg, "in asynchronous-reply"); // prints "pong"
});
ipcRenderer.send('asynchronous-message', 'ping');

var closeEl = document.querySelector('#close-button');

closeEl.addEventListener('click', function () {
    window.close();
});
