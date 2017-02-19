

// global variables

var pairsLeft = document.getElementById("pairs-left");
var matching = document.getElementById("matching");
var message = document.getElementById("message");

// card objects
var blastoise = {
name: 'Blastoise',
url: "assets/images/blastoise.png"
};

var charizard = {
name: 'Charizard',
url: "assets/images/charizard.png"
};

var gengar = {
name: 'Gengar',
url: "assets/images/gengar.png"
};

var lugia = {
name: 'Lugia',
url: "assets/images/lugia.png"
};

var machamp = {
name: 'Machamp',
url: "assets/images/machamp.png"
};

var mewtwo = {
name: 'Mewtwo',
url: "assets/images/mewtwo.png"
};

var moltres = {
name: 'Moltres',
url: "assets/images/moltres.png"
};

var pikachu = {
name: 'Pikachu',
url: "assets/images/pikachu.png"
};

var pinsur = {
name: 'Pinsur',
url: "assets/images/pinsur.png"
};

var venusaur = {
name: 'Venusaur',
url: "assets/images/venusaur.png"
};

var cardObjects = [blastoise, charizard, gengar, lugia, machamp, mewtwo, moltres, pikachu, pinsur, venusaur];

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
      cardBack.style.backgroundImage = "url('assets/images/back_of_card.png')";
      colSelect.appendChild(cardBack);
      cardCount++;
    }

  }

}

// Knuth Shuffle
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// function doubleCardObjects(){
//   var cardObjectsClone = [];

//   for ( i = 0; i<cardObjects.length; i++){
//     cardObjectsClone.push(cardObjects[i]);
//   }

//   for ( i = 0; i<cardObjects.length; i++){
//     cardObjectsClone.push(cardObjects[i]);
//   }

//   return cardObjectsClone;
// }


// Create Multiple Variables accessed through an array
// function createMatchAssociations(numberOfCards){

//   // var cardObjectsClone = cardObjects.splice();
//   // cardObjectsClone.push()

//   var cardAssociations = [];

//   for (var i = 0; i <= numberOfCards; i++) {
//       cardAssociations[i] = ;
//   }

//   return cardAssociations;
// }





// Randomly Set Cards
function setCards(numberOfCards){

var numberOfMatches = numberOfCards / 2;

shuffle(cardObjects);

  // ensure that there are only as many card objects as nessasary
  while(cardObjects.length > numberOfMatches){
    cardObjects.pop();
  }

  shuffle(cardObjects);

}


// Start Game

function startGame(){

  var select = document.getElementById('grid-type');
  var gridValue = parseInt(select.value);

  createCols(gridValue);
  createCards(gridValue);

  setCards(gridValue*gridValue);
  cardObjects = cardObjects.concat(cardObjects);
  // doubleCardObjects();
  // createMatchAssociations(gridValue*gridValue);

  select.style.display = 'none'; // hide select box
}
