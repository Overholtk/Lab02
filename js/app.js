'use strict';

var userName=prompt('Welcome! What is your name?');

alert('Nice to meet you, ' + userName);
console.log('Username: ' + userName);

alert('Pop quiz! Lets see what you know about me!');

var userAnswer1 = prompt('Is my name Kaya?')

var getChar = userAnswer1.charAt(0);
var finalChar = getChar.toUpperCase();

if(finalChar == 'Y') {
    // console.log('You are correct!');
    alert('You are correct!');
}if(finalChar == 'N'){
    // console.log('Hey, didn\'t you navigate here from my canvas page... with my name on it?');
    alert('Hey, didn\'t you navigate here from my canvas page... with my name on it?');
} else {
    alert('That\'s not a real answer!');
}

var userAnswer2 = prompt('Is it true that I have run 4th edition D&D professionally?');

getChar = userAnswer2.charAt(0);
finalChar = getChar.toUpperCase();

if(finalChar == 'Y') {
    // console.log('Not quite! I only did 3.5 and 5.');
    alert('Not quite! I only did 3.5 and 5.');
}if(finalChar == 'N'){
    // console.log('Good job!');
    alert('Good job!');
} else {
    alert('That\'s not a real answer!');
}


var userAnswer3 = prompt('Do I play animal crossing?');

getChar = userAnswer3.charAt(0);
finalChar = getChar.toUpperCase();

if(finalChar == 'Y') {
    // console.log('Correct!');
    alert('Correct!')
}if(finalChar == 'N'){
    // console.log('Well..Does 400+ hours of gameplay count...? If so you\'re wrong, sorry.');
    alert('Well... does 400+ hours of gameplay count...? If so you\'re wrong, sorry.');
} else {
    alert('That\'s not a real answer!');
}


var userAnswer4 = prompt('Was I once a musical theatre major?');

getChar = userAnswer4.charAt(0);
finalChar = getChar.toUpperCase();

if(finalChar == 'Y') {
    // console.log('Listen, I made mistakes okay?');
    alert('Listen, I made mistakes okay?');
}if(finalChar == 'N'){
    // console.log('Incorrect, sorry!');
    alert('Incorrect, sorry!');
} else {
    alert('That\'s not a real answer!');
}
