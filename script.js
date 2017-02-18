

// global variables

var pairsLeft = document.getElementById("pairs-left");
var matching = document.getElementById("matching");
var message = document.getElementById("message");



// Initial Creation of Cards and Grids

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
      cardBack.style.backgroundImage = "url('assets/images/back_of_card.png')"
      colSelect.appendChild(cardBack);
      cardCount++;
    }

  }

}

// Randomly Set Cards
function setCard(numberOfCards){
  // set urls
  var blastoise = {
  name: 'Blastoise',
  url: "assets/images/blastoise.png"
  }

  var charizard = {
  name: 'Charizard',
  "assets/images/charizard.png"
  }

  var gengar = {
  name: 'Gengar',
  url: "assets/images/gengar.png"
  }

  var lugia = {
  name: 'Lugia',
  url: "assets/images/lugia.png"
  }

  var machamp = {
  name: 'Machamp',
  url: "assets/images/machamp.png"
  }

  var mewtwo = {
  name: 'Mewtwo',
  url: "assets/images/mewtwo.png"
  }

  var moltres = {
  name: 'Moltres',
  url: "assets/images/moltres.png"
  }

  var pikachu = {
  name: 'Pikachu',
  url: "assets/images/pikachu.png"
  }

  var pinsur = {
  name: 'Pinsur',
  url: "assets/images/pinsur.png"
  }

  var venusaur = {
  name: 'Venusaur',
  url: "assets/images/venusaur.png"
  }

}


// Start Game

function startGame(){

  var select = document.getElementById('grid-type');
  var gridValue = parseInt(select.value);

  createCols(gridValue);
  createCards(gridValue);

  select.style.display = 'none'; // hide select box
}
