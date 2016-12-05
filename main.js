const electron = require('electron');

// controls the application's event life cycle
const {app} = electron;

// create and control browser windows
const {BrowserWindow} = electron;

// global browser window to prevent it from being
// closed on garbage collection
let win;

app.on('ready', () => {
    win = new BrowserWindow({width: 800, height: 400});
    win.webContents.loadURL(`file://${__dirname}/index.html`);
    win.on('closed', () => {
        win = null;
    }); 
});

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit();
    }   
});

modules.export.win = win;