// Get the container element
// var btnContainer = document.getElementByClassName("pill-nav");

// Get all buttons with class="btn" inside the container
// var btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace("active", "");
//     this.className += " active";
//   });
// }

// front.addEventListener('çlick',function(){
//   let f = document.getElementsById('fe').c;
  
// })

const hidden = function(one,two){
  const list1 = document.getElementById(one).classList;
  list1.add("d-none");
  const list = document.getElementById(two).classList;
  list.add("d-none");
}
function myFunction() {
  const list = document.getElementById("fe").classList;
  list.remove("d-none");
  hidden("be","ui"  );
}
function myFunction1() {
  const list2 = document.getElementById("be").classList;
  list2.remove("d-none");
  hidden('fe','ui');
}
function myFunction2() {
  const list2 = document.getElementById("ui").classList;
  list2.remove("d-none");
  hidden("fe","be");
}