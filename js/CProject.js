
module.exports = class CProject {
    constructor(index, name){
      this.index = index
      this.name = name
    }
    getHTML(){
      return '<button class="tablinks" onclick="openCity(event, \'test'+this.index+'\')">'+this.name+'</button>'
    }
    getTabContentHTML(){
        return '<div id="test'+this.index+'"class="tabcontent" ></div>'
    }

  
  }
  


//   ipcRenderer.send('a','a')
  
//   ipcRenderer.on('a', (event, arg) => {
//     var $myDiv = $("#tab")
//     var $project = $("#project")
//     arg.project.forEach(function(project,index) {
//       var p = new Project(index,project.name)
//       $myDiv.append(p.getHTML())
//       $project.append(p.getTabContentHTML())
//     })
// })
  