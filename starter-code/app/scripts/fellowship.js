console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');
// Part 1
  // create a section tag with an id of middle-earth
  //first define id middle earth //
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body 
function makeMiddleEarth() {

    var middleEarth = document.createElement('section');
    middleEarth.setAttribute('id', 'middleEarth');
    body.appendChild(middleEarth);
    //console.log(document.getElementById('middleEarth'));

    for (var i = 0; i < lands.length; i++) {
      var addLand = document.createElement('article');
      var addNewTag = document.createElement('h1');
      addLand.appendChild(addNewTag);
      middleEarth.appendChild(addLand);
      addNewTag.textContent = lands[i];
    }

}

makeMiddleEarth();

// Part 2
function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
  // 1. create for loop running through all hobbits name
  // 2. create unordered list of hobits
  // 3. add a ul to the shire article tag1
  // 4. assign a hobbit class to each hobbit
  // 5. append hobbits to document body
    var hobbitList = document.createElement('ul');

    for (var i = 0; i < hobbits.length; i++) {// this will loop through the hobbits
      var hobbit = document.createElement('li'); //add each hobbit to a ul
      hobbit.setAttribute('class', 'hobbit');
      hobbitList.appendChild(hobbit);
      hobbit.textContent = hobbits[i];
  }
    var theShire = document.getElementsByTagName('article')[0]; //get the article tag 1   
    theShire.appendChild(hobbitList);//append hobbits to the shire
}

makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  
  // add click event listener on the id theRing
  // add the nazal screech function to the ring id event listener
  //create frodo
  //create a div with an id of frodo
  // add the ring as a child of Frodo
   var theRing = document.createElement('div');
    theRing.setAttribute('id', 'the-ring');
    theRing.setAttribute('class', 'magic-imbued-jewelry');
    body.appendChild(theRing);
    console.log(theRing);

    document.getElementById('the-ring').addEventListener('click', function nazgulScreech(){          
      document.getElementById("nazgul-screech").play();
    });

    var frodo = document.getElementsByTagName('li')[0];
    frodo.appendChild(theRing);
}

keepItSecretKeepItSafe();
// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell

  var buddyTag = document.createElement('aside');//create aside tag
  body.appendChild(buddyTag);//append aside tag to body

  var addBuds = document.createElement('ul');  //create an unorderlist to add in buddies

    for (var i = 0; i < buddies.length; i++) {// this will loop through the buddies
      var buddyLi = document.createElement('li'); //add each buddy to an li
      buddyTag.appendChild(buddyLi);
      buddyLi.textContent = buddies[i];
  }
    var Rivendell = document.getElementsByTagName('article')[1]; //get the article tag 1   
    Rivendell.appendChild(buddyTag);//append hobbits to the shire
}

makeBuddies();


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  //strider is 3 in buddies li
  //cahnge the name to Aragon

  //get li 3 in buddies 
  var strider = document.getElementsByTagName('li')[7];
  strider.textContent = 'Aragon';
  //console.log(strider);


}

beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  // move hobbits from the shire and send them to Rivendale
  //hobbits are under hobbitList
  //var Rivendell = document.getElementsByTagName('article')[1];
  //Rivendale.appendChild(hobbitList);
  
}

leaveTheShire();

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
