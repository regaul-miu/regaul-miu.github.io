// Question 1
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('What is your Name? ', name => {
  console.log(`Welcome ${name}`);
  readline.question('Your Age? ', age => {
      (age < 16) ? console.log("You are not allowed to drive in IOWA ") : console.log("You're allowed to get a drivers license in Iowa");
      readline.close();
  });
});