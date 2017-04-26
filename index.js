'use strict';

console.log("IN INDEX.JS")
const {ipcRenderer} = require('electron');
var closeEl = document.querySelector('#close-button');

closeEl.addEventListener('click', function () {
    window.close();
});
