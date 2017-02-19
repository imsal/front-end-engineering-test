

// global variables

var pairsLeft = document.getElementById("pairs-left");
var matching = document.getElementById("matching");
var message = document.getElementById("message");

// card objects
var blastoise = {
name: 'Blastoise',
url: "assets/images/blastoise.png",
mp3: "assets/sounds/blastoise.mp3",
ogg: "assets/sounds/blastoise.ogg"
};

var charizard = {
name: 'Charizard',
url: "assets/images/charizard.png",
mp3: "assets/sounds/charizard.mp3",
ogg: "assets/sounds/charizard.ogg"
};

var gengar = {
name: 'Gengar',
url: "assets/images/gengar.png",
mp3: "assets/sounds/gengar.mp3",
ogg: "assets/sounds/gengar.ogg"
};

var lugia = {
name: 'Lugia',
url: "assets/images/lugia.png",
mp3: "assets/sounds/lugia.mp3",
ogg: "assets/sounds/lugia.ogg"
};

var machamp = {
name: 'Machamp',
url: "assets/images/machamp.png",
mp3: "assets/sounds/machamp.mp3",
ogg: "assets/sounds/machamp.ogg"
};

var mewtwo = {
name: 'Mewtwo',
url: "assets/images/mewtwo.png",
mp3: "assets/sounds/mewtwo.mp3",
ogg: "assets/sounds/mewtwo.ogg"
};

var moltres = {
name: 'Moltres',
url: "assets/images/moltres.png",
mp3: "assets/sounds/moltres.mp3",
ogg: "assets/sounds/moltres.ogg"
};

var pikachu = {
name: 'Pikachu',
url: "assets/images/pikachu.png",
mp3: "assets/sounds/pikachu.mp3",
ogg: "assets/sounds/pikachu.ogg"
};

var pinsur = {
name: 'Pinsur',
url: "assets/images/pinsur.png",
mp3: "assets/sounds/pinsur.mp3",
ogg: "assets/sounds/pinsur.ogg"
};

var venusaur = {
name: 'Venusaur',
url: "assets/images/venusaur.png",
mp3: "assets/sounds/venusaur.mp3",
ogg: "assets/sounds/venusaur.ogg"
};

var alakazam = {
name: 'Alakazam',
url: "assets/images/alakazam.png",
mp3: "assets/sounds/alakazam.mp3",
ogg: "assets/sounds/alakazam.ogg"
};

var geodude = {
name: 'Geodude',
url: "assets/images/geodude.png",
mp3: "assets/sounds/geodude.mp3",
ogg: "assets/sounds/geodude.ogg"
};

var golduck = {
name: 'Golduck',
url: "assets/images/golduck.png",
mp3: "assets/sounds/golduck.mp3",
ogg: "assets/sounds/golduck.ogg"
};

var ninetales = {
name: 'Ninetales',
url: "assets/images/ninetales.png",
mp3: "assets/sounds/ninetales.mp3",
ogg: "assets/sounds/ninetales.ogg"
};

var staryu = {
name: 'staryu',
url: "assets/images/staryu.png",
mp3: "assets/sounds/staryu.mp3",
ogg: "assets/sounds/staryu.ogg"
};

var dugtrio = {
name: 'Dugtrio',
url: "assets/images/dugtrio.png",
mp3: "assets/sounds/dugtrio.mp3",
ogg: "assets/sounds/dugtrio.ogg"
};

var ditto = {
name: 'Ditto',
url: "assets/images/ditto.png",
mp3: "assets/sounds/ditto.mp3",
ogg: "assets/sounds/ditto.ogg"
};

var raikou = {
name: 'Raikou',
url: "assets/images/raikou.png",
mp3: "assets/sounds/raikou.mp3",
ogg: "assets/sounds/raikou.ogg"
};

var vaporeon = {
name: 'Vaporeon',
url: "assets/images/vaporeon.png",
mp3: "assets/sounds/vaporeon.mp3",
ogg: "assets/sounds/vaporeon.ogg"
};

var cardObjects = [blastoise, charizard, gengar, lugia, machamp, mewtwo, moltres, pikachu, pinsur, venusaur, alakazam, geodude, golduck, ninetales, staryu, dugtrio, ditto, raikou, vaporeon];

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
      cardBack.setAttribute('id', cardCount);
      // cardBack.style.backgroundImage = "url('assets/images/back_of_card.png')";
      cardBack.style.backgroundImage = "url('assets/images/pokeball.jpg')";

      cardBack.setAttribute('onclick', 'checkIfMatch(this.id);')
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

function checkIfMatch(clickedID){
  var variable = parseInt(clickedID)-1;
  var firstCard = document.getElementById(clickedID);
  var cardUrl = "url('"+cardObjects[variable].url+"')";
  var mp3Url = cardObjects[variable].mp3;
  var oggUrl = cardObjects[variable].ogg;
  var cardName = cardObjects[variable].name;
  firstCard.style.backgroundImage = cardUrl;


  var audio = document.getElementById('audio');

  var sourceOgg = document.getElementById('oggSource').setAttribute('src', oggUrl);
  var sourceMp3 = document.getElementById('mp3Source').setAttribute('src', mp3Url);

  audio.load(); //call this to just preload the audio without playing
  audio.play(); //call this to play the song right away
}



// Removes extra cards & shuffles
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

  // doubles array for matching purposes
  cardObjects = cardObjects.concat(cardObjects);

  select.style.display = 'none'; // hide select box
}
