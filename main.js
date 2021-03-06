
var electron = require('electron'); // http://electron.atom.io/docs/api
var path = require('path');         // https://nodejs.org/api/path.html
var url = require('url');           // https://nodejs.org/api/url.html
const {ipcMain} = require('electron');

var window = null

// Wait until the app is ready
electron.app.once('ready', function () {
  // Create a new window
  window = new electron.BrowserWindow({
    // Set the initial width to 400px
    width: 400,
    // Set the initial height to 400px
    height: 600,
    // Don't show the window until it ready (prevents any flickering)
    show: false,
    // Don't allow the window to be resized.
    resizable: true,
    // For window dragging
    transparent: true,
    // Take away the frame so it "hovers"
    frame: false
  });

  // Load a URL in the window to the local index.html path
  window.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  console.log("You are @main.js");

  window.openDevTools();

  // Show window when page is ready
  window.once('ready-to-show', function () {
    window.show();
  });

  ipcMain.on('asynchronous-message', (event, arg) => {
  console.log(arg, 'in asynchronous-message', new Date());  // prints "ping" from index.js
  event.sender.send('asynchronous-reply', 'pong ASYNC'); // sends "pong ASYNC" to index.js
  });

  // ipcMain.on('synchronous-message', (event, arg) => {
  // console.log(arg, 'in synchronous-message', new Date());  // prints "ping"
  // event.returnValue = 'pong SYNC in synchronous message' + new Date ();
  // });

  });
