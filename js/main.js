$(document).ready(function(){
    // var tabcontent = document.getElementsByClassName("tabcontent");
    // for (i = 0; i < tabcontent.length; i++) {
    //     tabcontent[i].style.display = "none";
    // }

    // tabcontent[0].style.display = "block";


    $('.list-group-item').on('mouseover', function(event) {
		event.preventDefault();
		$(this).closest('li').addClass('open');
	});
      $('.list-group-item').on('mouseout', function(event) {
    	event.preventDefault();
		$(this).closest('li').removeClass('open');
    });



    $('[id^=detail-]').hide();
    $('.toggle').click(function() {
            $input = $( this );
            $target = $('#'+$input.attr('data-toggle'));
            $target.slideToggle();
    });


    //  $('#London').load("../view/list.html");

})

// var toggle = function(index){
//     console.log('test')
//     $input = $( this );
//     $target = $('#detail-'+index)
//     $target.slideToggle();
//   }


function openCity(evt, cityName) {

    console.log(cityName)
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


const {ipcRenderer} = require('electron')
const CProject = require('../js/CProject.js')
const CList = require('../js/CList.js')


    var data = ipcRenderer.sendSync('load')
    // console.log(data)

    var $tab = $("#tab")
    var $project = $("#project")
    
    var zz = 0

    data.project.forEach(function(project,index) {
      var p = new CProject(index,project.name)
      $tab.append(p.getHTML())
      $project.append(p.getTabContentHTML())
      var tabcontent = document.getElementsByClassName("tabcontent");
      tabcontent[index].style.display = "block";

      var indexProject = index
      var $myDiv = $("#test" + indexProject)
      
        
        for(var todolist of data.project[indexProject].todolist){
        console.log(indexProject)
        var l = new CList(zz,todolist.name, todolist.comment)
        $myDiv.append(l.getHTML())
        zz++
        }

        $('[id^=detail-]').hide();

    })

//   var tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//       require('../js/list.js')(i)
//       console.log(i)
//   }

//   tabcontent[0].style.display = "block";

  


//     var $myDiv = $("#test" + indexProject)
  
//       var index = 0
//       for(var todolist of zxc.project[indexProject].todolist){
//         console.log(indexProject)
//         var l = new list(index,todolist.name, todolist.comment)
//         $myDiv.append(l.getHTML())
//         index++
//       }

//       $('[id^=detail-]').hide();