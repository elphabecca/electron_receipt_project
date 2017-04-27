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

var constraints = {
  audio: false,
video: {
  width: {
    ideal: 400
  },
  height: {
    ideal: 200
  }
}
}

// https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
var video = document.querySelector('video')
// Play stream in <video> element
video.srcObject = stream
}).catch(function (error) {
console.error(error)
})
