'use strict' ;

let userPoints = 0;
alert('WELCOME TO GUESS ABOUT ME GAME ');
let userName = prompt('What is Your name ? ');

alert( 'HELLO ' + userName+ ' !');
// console.log('my name is Mousa , ' + 'HELLO ' + userName+ ' !');

let myJob = prompt('Am I an electrical engineer?');
while( myJob.toLowerCase() !== 'no' && myJob.toLowerCase() !== 'yes' && myJob.toLowerCase() !== 'n' && myJob.toLowerCase() !== 'y'){
  myJob = prompt('Am I an  Engineer?');
}
if ( myJob.toLowerCase()=== 'yes' || myJob.toLowerCase()=== 'y' ) {
  // console.log('You\'re right, I am an Electrical Power Engineer . Well done ^.^');
  alert('You\'re right, I am an Electrical Power Engineer . Well done ^.^');
  userPoints = userPoints + 10;
} else {
  // console.log('You are wrong , I am an Electrical Power Engineer ');
  alert('You are wrong , I am an Electrical Power Engineer ');
  userPoints = userPoints + 2;
}

let movies = prompt('Do you think I like Movies? yes/no');
while( movies.toLowerCase() !== 'no' && movies.toLowerCase() !== 'yes' && movies.toLowerCase() !== 'n' && movies.toLowerCase() !== 'y') {
  movies = prompt('Do you think I like Movies? yes/no');
}
if ( movies.toLowerCase()=== 'yes' || movies.toLowerCase()=== 'y' ) {
  // console.log('You\'re right, I like watching movies. Well done ^.^');
  alert('You\'re right, I like watching movies. Well done ^.^');
  userPoints = userPoints + 10;
} else {
  // console.log('I\'m sorry I really love watching movies Good luck with your next questions.');
  alert('I\'m sorry I really love watching movies Good luck with your next questions.');
  userPoints = userPoints + 4;
}

let gamerOrNot = prompt('Do you think I like Video Games? yes/no');
while( (gamerOrNot.toLowerCase() !== 'no') && (gamerOrNot.toLowerCase() !== 'yes') && (gamerOrNot.toLowerCase() !== 'n') && (gamerOrNot.toLowerCase() !== 'y')) {
  gamerOrNot = prompt('Do you think I like Video Games? yes/no');
}
if ( gamerOrNot.toLowerCase()=== 'yes' || gamerOrNot.toLowerCase()=== 'y' ) {
  // console.log('You\'re right, I am a gamer , i play "league of legends" ');
  alert('You\'re right, I am a gamer , i play "league of legends" ');
  userPoints = userPoints + 15;
} else {
  // console.log('WRONG !');
  alert('WRONG !');
  userPoints = userPoints + 6;
}

let drinkTea = prompt('Am I a Tea lover? no/yes');
while( drinkTea.toLowerCase() !== 'no' && drinkTea.toLowerCase() !== 'yes' && drinkTea.toLowerCase() !== 'n' && drinkTea.toLowerCase() !== 'y') {
  drinkTea = prompt('Am I a Tea lover? no/yes');
}
if ( drinkTea.toLowerCase()=== 'yes' || drinkTea.toLowerCase()=== 'y' ) {
  // console.log('NOPE ! .. Iam a Coffee lover , i drink tea sometime');
  alert('NOPE ! .. Iam a Coffee lover , i drink tea sometime');
  userPoints = userPoints + 4;
} else {
  // console.log('You\r right ... I am not a tea lover ');
  alert('You\r right ... I am not a tea lover ');
  userPoints = userPoints + 10;
}
let finalQuestion = prompt('Do you think I\'ll be a Great software developer? yes/no');
while( finalQuestion.toLowerCase() !== 'no' && finalQuestion.toLowerCase() !== 'yes' && finalQuestion.toLowerCase() !== 'n' && finalQuestion.toLowerCase() !== 'y') {
  finalQuestion = prompt('Do you think I\'ll be a Great software developer? yes/no');
}
if ( finalQuestion.toLowerCase()=== 'yes'|| finalQuestion.toLowerCase()=== 'y' ) {
  // console.log('Thank you so much for that <3 ');
  alert('Thank you so much for that <3 ');
  userPoints = userPoints + 15;
} else {
  // console.log('we will see :)');
  alert('we will see :)');
  userPoints = userPoints +1 ;
}

alert('Welcome Again  ' + userName + ' ,Your score : ' + userPoints+'/60');

document.write('YOUR SCORE IN THIS GAME ' + '<b>'+userPoints+'</b>'+'/60' +' Point');
console.log(userPoints);

