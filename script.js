

// global variables

var pairsLeft = 0;
// var matching = document.getElementById("matching");
var message = document.getElementById("message");
var numberOfClicks = 1;
var cardOne = {
  id: null,
  name: null
};

var cardTwo = {
  id: null,
  name: null
};
var attempts = 0;


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
name: 'Staryu',
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

      cardBack.setAttribute('onclick', 'clickCard(this.id);')
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


function flipCard(cardText,clickedID){
  var variable = parseInt(clickedID)-1;
  var card = document.getElementById(clickedID);
  var cardImageUrl = "url('"+cardObjects[variable].url+"')";


  card.style.backgroundImage = cardImageUrl;

  // card text
  var cardName = cardObjects[variable].name;
  cardText.innerHTML = cardName;
  return cardName;
}

function playSound(clickedID){
  var variable = parseInt(clickedID)-1;
  var mp3Url = cardObjects[variable].mp3;
  var oggUrl = cardObjects[variable].ogg;
  var audio = document.getElementById('audio');

  var sourceOgg = document.getElementById('oggSource').setAttribute('src', oggUrl);
  var sourceMp3 = document.getElementById('mp3Source').setAttribute('src', mp3Url);

  audio.load(); //call this to just preload the audio without playing
  audio.play(); //call this to play the song right away
}

function resetDialog(){

}

function gameCompletion(){
  var container = document.getElementById('container');
  // kill all children elements
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  var newTitle = document.createElement('h1');
  newTitle.innerHTML = 'Congratulations, you have completed the game!';
  document.getElementById('container').appendChild(newTitle);
  // play victory sound
  var mp3Url = "assets/sounds/victory_music.mp3";
  var oggUrl = "assets/sounds/victory_music.ogg";
  var audio = document.getElementById('audio');

  var sourceOgg = document.getElementById('oggSource').setAttribute('src', oggUrl);
  var sourceMp3 = document.getElementById('mp3Source').setAttribute('src', mp3Url);

  audio.load();
  audio.play();
}

function evaluate(){
  var firstPick = document.getElementById("first-pick");
  var secondPick = document.getElementById("second-pick");

  if (cardOne.name == cardTwo.name){
    pairsLeft -= 1;
    document.getElementById("pairs-left").innerHTML = pairsLeft;

    firstPick.className = "correct";
    secondPick.className = "correct";

  } else {
    // incorrect!
    firstPick.className = "incorrect";
    secondPick.className = "incorrect";

    setTimeout(function(){
    document.getElementById(cardOne.id).style.backgroundImage = "url('assets/images/pokeball.jpg')";
    document.getElementById(cardTwo.id).style.backgroundImage = "url('assets/images/pokeball.jpg')";
    document.getElementById('matching-1').innerHTML = '';
    document.getElementById('matching-2').innerHTML = '';
    firstPick.className = "";
    secondPick.className = "";
    }, 1000);

  }

  // check if player completed the game
  if (pairsLeft == 0){
    // something
    gameCompletion();
  }

}



function clickCard(clickedID){

  // first card
  if (numberOfClicks%2 == 1){
  document.getElementById('matching-2').innerHTML = '';
  document.getElementById("first-pick").className = '';
  document.getElementById("second-pick").className = '';
  var firstCardText = document.getElementById('matching-1');
  cardOne.name = flipCard(firstCardText, clickedID);
  playSound(clickedID);
  numberOfClicks += 1;
  cardOne.id = clickedID;

  } else {
  // put some code that doesn't allow the user to pick the same first card. ////////////////
  // second card
  var secondCardText = document.getElementById('matching-2');
  cardTwo.name = flipCard(secondCardText, clickedID);
  playSound(clickedID);
  numberOfClicks += 1;
  cardTwo.id = clickedID;
  attempts += 1;
  document.getElementById('attempts').innerHTML = attempts;
  evaluate();
  }

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
  // kill audio
  var audio = document.getElementById('audio');
  var sourceOgg = document.getElementById('oggSource').setAttribute('src', '');
  var sourceMp3 = document.getElementById('mp3Source').setAttribute('src', '');
  audio.load();
  audio.play();

  var select = document.getElementById('grid-type');
  var gridValue = parseInt(select.value);
  var totalCards = gridValue*gridValue;

  createCols(gridValue);
  createCards(gridValue);

  setCards(gridValue*gridValue);

  // doubles array for matching purposes
  cardObjects = cardObjects.concat(cardObjects);
  shuffle(cardObjects);

  pairsLeft = (totalCards/2);
  document.getElementById("pairs-left").innerHTML = pairsLeft;

  select.style.display = 'none'; // hide select box
}




window.onload = function(){
  // play music
  alert('Please enable audio for full gaming effect.');
  var mp3Url = "assets/sounds/opening-screen.mp3";
  var oggUrl = "assets/sounds/opening-screen.ogg";
  var audio = document.getElementById('audio');

  var sourceOgg = document.getElementById('oggSource').setAttribute('src', oggUrl);
  var sourceMp3 = document.getElementById('mp3Source').setAttribute('src', mp3Url);

  audio.load();
  audio.play();
}
