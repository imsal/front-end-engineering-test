// initializing functions

function init(){

  // for DRY principles, turn this into a function later..
  for (i = 1; i < 17; i++) {
    document.getElementById("card-" + i + "-front").style.display = 'none';
  }

}

window.onload = init;

// global variables

var pairsLeft = document.getElementById("pairs-left");
var matching = document.getElementById("matching");
var message = document.getElementById("message");
