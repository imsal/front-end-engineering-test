/*

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

*/


function createCols(gridSize){
  for ( var i=1; i<gridSize+1; i++){
    var col = document.createElement("div");
    col.className = "col";
    col.setAttribute('id', 'col-'+ i);
    document.getElementById("card-container").appendChild(col);
  }
}

function createCards(gridSize){

  var cardCount = 1;

  // loop through each row
  for ( var i=1; i<gridSize+1; i++){

    var colSelect = document.getElementById("col-"+i);
    var colNumber = i;

    // loop through each card
    for (var j=1; j<gridSize+1; j++){

      var cardBack = document.createElement('div');
      cardBack.className = "card";
      cardBack.setAttribute('id', "card-"+(cardCount)+'-back');
      colSelect.appendChild(cardBack);
      cardCount++;
    }

  }

}


function createGrid(){

  var select = document.getElementById('grid-type');
  var gridValue = parseInt(select.value);

  createCols(gridValue);
  createCards(gridValue);

  select.style.display = 'none'; // hide select box
}
