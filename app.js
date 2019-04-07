
'use strict';

var Name = prompt ('Let\'s play a game. First of all let us become aquainted. I\'m Brad. What is your name?');
alert ('It\'s a pleasure to meet you ' + Name + '. Would you like to know a little more about me?');

//Start game
var answerOne = prompt ('Please answer either Yes OR No.').toLowerCase();
if (answerOne === 'yes' || answerOne === 'y') {
  alert ('Perfect ' + Name + ', let\'s play!!');
} else if (answerOne === 'no' || answerOne === 'n') {
  alert ('Too bad '+ Name + '! We are already on our way down this rabbit hole.....so brace yourself.....here we go!');
} else {
  alert (Name + ' you should have answered Yes OR No. Try again.');
}
//States lived
var statesLived = prompt ('Which city did I move from? A. San Diego, CA / B. New York City / C. Washington DC ').toLowerCase();
if (statesLived === 'a' || statesLived === 'san diego, ca') {
  prompt ('Sorry ' + Name + ', try again. '); 
} else if (statesLived === 'b' || statesLived === 'new york city') {
  prompt ('Getting warmer, but you are still so cold. Try again!');
} else {
  alert ('Nice job ' + Name + '! That is correct.');
} 