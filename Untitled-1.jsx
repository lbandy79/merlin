var userName = "Luke";
var userQuestion = "What time is it?";
var randomNumber = Math.floor(Math.random() * 8);
var merlin = "";
console.log(randomNumber);

//Check for a user name and prints greeting.
if (userName) {
  console.log("Hello, " + userName + "!")
}
else {
  console.log("Hello!")             
              }      

console.log("Merlin the Wise, " + userName + " wants to know, " + userQuestion);

//Assigns Merlin's prediction based on a random number.
switch (randomNumber) {
  case 0:
    merlin = 'It is certain.';
    break;
  case 1:
    merlin = 'It is decidedly so.'
    break;
  case 2:
    merlin = 'Reply hazy try again'
    break;
  case 3:
    merlin = 'Connot predict now. Magic is low.'
    break;
  case 4:
    merlin = 'My sorcery says yes.'
    break;
  case 5:
    merlin = 'Do not count on it.'
    break;
  case 6:
    merlin = 'Outlook not so good.'
    break;
  case 7:
    merlin = 'Signs point to yes.'
    break;
}

console.log(merlin);