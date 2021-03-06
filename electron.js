// ./main.js
const PICKER_ENV = ['dev', 'prod']
const { app, BrowserWindow } = require('electron')
var url = require('url')
const path = require('path');

var envVal = PICKER_ENV[0]

let win = null;

app.on('ready', function () {

  // Initialize the window to our specified dimensions
  win = new BrowserWindow({ width: 1200, height: 800 });

  // Specify entry point to default entry point of vue.js
  if(envVal == 'dev') {
    win.loadURL('http://localhost:8080');
  }

  if(envVal == 'prod') {
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  }

  // Remove window once app is closed
  win.on('closed', function () {
    win = null;
  });

});
//create the application window if the window variable is null
app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
//quit the app once closed
app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
