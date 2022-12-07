// "use strict";
// let hasDriversLicence = false;
// const passTest = true;
// if (passTest) hasDriversLicence = true;
// if (hasDriversLicence) console.log("I can drive");

// const interface = "Audio";
// const private = 534;
// const if = 23;

//BASIC FUNCTION LESSON

// function logger() {
//   console.log("My name is Juno");
// }
// //calling / running / invoking the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number("23");

// const markWeight1 = 86;
// const markHeight1 = 176;

// const markWeight2 = 90;
// const markHeight2 = 170;

// function bmi(height, weight) {
//   return height / weight;
// }

// const markBmi1 = bmi(markHeight1, markWeight1);
// const markBmi2 = bmi(markHeight2, markWeight2);

// //FUNCTION DECLARATION
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);
// console.log(age1);

// //FUNCTION EXPRESSION
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);
// console.log(age1, age2);

//ARROW FUNCTION
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   //   return retirement;
//   return `${firstName} retires in ${retirement} years.`;
// };
// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1980, "Bob"));

//FUNCTIONS CALLING OTHER FUNCTIONS
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

// // const calcAge = function (birthYear) {
// //   return 2037 - birthYear;
// // };

// // const yearsUntilRetirement = function (birthYear, firstName) {
// //   const age = calcAge(birthYear);
// //   const retirement = 65 - age;

// //   if (retirement > 0) {
// //     console.log(`${firstName} retires in ${retirement} years.`);
// //     return retirement;
// //   } else {
// //     console.log(`${firstName} has already retired.`);
// //     return -1;
// //   }
// // };
// // console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1950, "Mike"));

//FIRST CODING CHALLENGE - FUNCTIONS
let totalScore = (score1, score2, score3) => score1 + score2 + score3;
let dolphinsScore = totalScore(44, 23, 71);
let koalasScore = totalScore(65, 54, 49);
console.log(dolphinsScore, koalasScore);
let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
let dolphinsAvgScore = calcAverage(44, 23, 71);
let koalasAvgScore = calcAverage(65, 54, 49);
console.log(dolphinsAvgScore, koalasAvgScore);

function checkWinner(dolphinsAvgScore, koalasAvgScore) {
  if (dolphinsAvgScore >= koalasAvgScore * 2) {
    console.log(`Dolphins win with ${dolphinsAvgScore} vs ${koalasAvgScore}`);
    return `Dolphins win with ${dolphinsAvgScore} vs ${koalasAvgScore}`;
  } else if (koalasAvgScore >= dolphinsAvgScore * 2) {
    console.log(`Koalas win with ${koalasAvgScore} vs ${dolphinsAvgScore}`);
    return `Koalas win with ${koalasAvgScore} vs ${dolphinsAvgScore}`;
  } else {
    // console.log(`No one is a winner.`);
    return `No one is a winner.`;
  }
}
let winner = checkWinner(46, 56);
console.log(winner);

// dolphinsScore = totalScore(85, 54, 41);
// koalasScore = totalScore(23, 34, 27);
dolphinsAvgScore = calcAverage(85, 54, 41);
koalasAvgScore = calcAverage(23, 34, 27);
winner = checkWinner(180, 84);
console.log(winner);
