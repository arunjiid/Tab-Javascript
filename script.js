// Code goes here
function tabswitch(tabid, tab_content){

var x = document.getElementsByClassName("tab_content");

var i ;

for ( i = 0; i < x.length; i++){
  
  x[i].style.display='none';
  
}

document.getElementById(tab_content).style.display='block';


var x = document.getElementsByClassName("tabmenu");

var i ;

for (i =0; i < x.length; i++){
  
  
 x[i].ClassName='tabmenu'; 
  
}
document.getElementById(tabid).ClassName='tabmenu active';
  
}
