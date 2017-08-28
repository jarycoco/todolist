const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')
const {ipcMain} = require('electron')

// 디버그 모드
require('electron-debug')({showDevTools: true});

let win

function createWindow() {
   win = new BrowserWindow({width: 1000, height: 600})
   // 메뉴 없애기
   win.setMenu(null)
   win.loadURL(url.format({
      pathname: path.join(__dirname, './view/main.html'),
      protocol: 'file:',
      slashes: true
   }))
}

ipcMain.on('test', (event, arg) => {
    var k = require('./myjsonfile.json')
    console.dir(JSON.stringify(k))
    event.sender.send('good',k)
})

ipcMain.on('a', (event, arg) => {
    var k = require('./myjsonfile.json')
    console.dir(JSON.stringify(k))
    event.sender.send('a',k)
})

ipcMain.on('zxc', (event, arg) => {
    var k = require('./myjsonfile.json')
    console.dir(JSON.stringify(k))
    event.returnValue = k
})

ipcMain.on('load', (event, arg) => {
    var k = require('./myjsonfile.json')
    console.dir(JSON.stringify(k))
    event.returnValue = k
})

var fs = require('fs');

var obj = {
   table: []
};

// fs.exists('myjsonfile.json', function(exists){
//     if(exists){
//         console.log("yes file exists");
//         fs.readFile('myjsonfile.json', function readFileCallback(err, data){
//         if (err){
//             console.log(err);
//         } else {
//         obj = JSON.parse(data); 
//         for (i=0; i<5 ; i++){
//         obj.table.push({id: i, square:i*i});
//         }
//         var json = JSON.stringify(obj); 
//         fs.writeFile('myjsonfile.json', json); 
//         }});
//     } else {
//         console.log("file not exists")
//         for (i=0; i<5 ; i++){
//         obj.table.push({id: i, square:i*i});
//         }
//         var json = JSON.stringify(obj);
//         fs.writeFile('myjsonfile.json', json);
//         }
//     });

app.on('ready', createWindow)