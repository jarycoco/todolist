



module.exports = class CList {
    constructor(index, name, comment){
      this.index = index
      this.name = name
      this.comment = comment
    }
    getHTML(){
      return '<a href="#" class="list-group-item list-group-item-action row toggle"\
              id="dropdown-detail-'+this.index+'" data-toggle="detail-'+this.index+'" onclick="toggle('+this.index+')"><button type="button" class="btn btn-default\
              btn-circle" onclick="alert('+this.index+')"></button>'+this.name+'</a>' + this.getCommentHTML()
    }
    getCommentHTML(){
      var html = '\
      <div id ="detail-'+this.index+'"> \
      <div class = "container">\
      <div class = "fluid-row">'

      for(var comment of this.comment){
        html = html + '<div>' + comment +'</div>'

        // console.log(comment)
      }

      html = html +'</div></div></div>'

      return html

    }
  }


  //  const {ipcRenderer} = require('electron')

  // ipcRenderer.send('test','good')

  // var zxc = ipcRenderer.sendSync('zxc')

  // console.log(JSON.stringify(zxc))

  // var $myDiv = $("#test" + indexProject)
  
  //     var index = 0
  //     for(var todolist of zxc.project[indexProject].todolist){
  //       console.log(indexProject)
  //       var l = new list(index,todolist.name, todolist.comment)
  //       $myDiv.append(l.getHTML())
  //       index++
  //     }

  //     $('[id^=detail-]').hide();




        

  // ipcRenderer.on('good', (event, arg) => {
  //   var $myDiv = $("#test" + indexProject)

  //   var index = 0
  //   for(var todolist of arg.project[indexProject].todolist){
  //     console.log(indexProject)
  //     var l = new list(index,todolist.name, todolist.comment)
  //     $myDiv.append(l.getHTML())
  //     index++
  //     // console.log(comment)
  //   }

    


  //   // arg.project[indexProject].todolist.forEach(function(todolist,index) {
  //   //   console.log(arg.project[indexProject])
  //   //   var l = new list(index,todolist.name, todolist.comment)
  //   //   $myDiv.append(l.getHTML())
  //   // })

  //   $('[id^=detail-]').hide();

    

  // })


