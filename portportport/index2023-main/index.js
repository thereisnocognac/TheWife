



function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
      anotherFunction();
    } else {
      x.style.display = "block";
      anotherFunction();
    }; 
}

function anotherFunction() {
  var y = document.getElementById("explorer");
  if (y.textContent === "Let's see...") {
    y.textContent = "Explore"
  } else if (y.textContent === "Explore") {
    y.textContent = "Let's see..."
  }
}



window.addEventListener('resize', () =>{
  var x = document.getElementById("myLinks");

  if(window.screen.width >= 1024) 
  {
    x.style.display = "block";
  }

})



function darkMode() {
  var y = document.body;
  var z = document.getElementById("topNavBar");
  y.style.color = "white";
  y.style.background = "black"
  z.style.color ="white";
}

function lightMode() {
  var y = document.body;
  var z = document.getElementById("topNavBar");
  y.style.color = "black";
  y.style.background = "white";
  z.style.color ="black";
}






// var winWidth = $(window).width(); // you can get the window width from this
// var x = document.getElementById("myLinks");
// //Then check with the condtion(compare with your need ex :)



//   if(winWidth < 1024)
//    {
//     x.style.display = "none"
//   } else {
//      x.style.display = "block"
//    }

//    function myFunction() {
//     var x = document.getElementById("myLinks");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
// }

