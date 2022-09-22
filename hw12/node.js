// Question 2
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
let sum = 0;
let getNumber = () => {
  readline.question('Enter any number or type stop :', (answer) => {
      if (answer == 'stop') {
          console.log("Total is: " + sum);
          readline.close();
          return;
      }
      sum += parseFloat(answer);
      getNumber();
  });
};

getNumber();