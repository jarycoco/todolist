const {remote} = require('electron');
const {Menu} = remote;
 
var onPrefsClicked1 = function() {
  alert('You clicked Prefs-1');
}
 
var onPrefsClicked2 = function() {
  alert('You clicked Prefs-2');
}
 
var onPrefsClicked3 = function() {
  alert('You clicked Prefs-3');
}
 
// define template
const template = [
  {
    label: '일정등록',
    submenu: [
      {
        label: '메롱',
        click: function() {
          onPrefsClicked1();
        },
        accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I'
      }
    ]
  },
  {
    label: '일정수정',
    submenu: [
      {
        label: 'Prefs-2',
        click: function() {
          onPrefsClicked2();
        }
      },
      {
        label: 'Prefs-3',
        click: function() {
          onPrefsClicked3();
        }
      }
    ]
  }
];
 
const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(null);
 