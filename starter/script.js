"use strict";
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
// let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// let dolphinsAvgScore = calcAverage(44, 23, 71);
// let koalasAvgScore = calcAverage(65, 54, 49);
// console.log(dolphinsAvgScore, koalasAvgScore);

// function checkWinner(dolphinsAvg, koalasAvg) {
//   if (dolphinsAvgScore >= koalasAvgScore * 2) {
//     // console.log(`Dolphins win with ${dolphinsAvgScore} vs ${koalasAvgScore}`);
//     return `Dolphins win with ${dolphinsAvgScore} vs ${koalasAvgScore}`;
//   } else if (koalasAvgScore >= dolphinsAvgScore * 2) {
//     // console.log(`Koalas win with ${koalasAvgScore} vs ${dolphinsAvgScore}`);
//     return `Koalas win with ${koalasAvgScore} vs ${dolphinsAvgScore}`;
//   } else {
//     // console.log(`No one is a winner.`);
//     return `No one is a winner.`;
//   }
// }
// let winner = checkWinner(dolphinsAvgScore, koalasAvgScore);
// console.log(`The first winner is ${winner}`);

// dolphinsAvgScore = calcAverage(85, 54, 41);
// koalasAvgScore = calcAverage(23, 34, 27);
// winner = checkWinner(180, 84);
// console.log(`The second winner is ${winner}`);

// //ARRAYS
// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]); //logs item as per position stated 0-n
// console.log(friends.length); //logs number of items in the array
// console.log(friends[friends.length - 1]); //logs last item in the array

// friends[2] = "Jay"; //replaces numbered item in the array
// console.log(friends);
// // friends = ["Bob", "Alice"]; //cannot replace a whole array

// const firstName = "Jonas";
// const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
// console.log(jonas);
// console.log(jonas.length);

// //Exercise with arrays
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];

// console.log(calcAge(years)); //NaN; cannot do operations with arrays

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// const friends = ["Michael", "Steven", "Peter"];
// const newlength = friends.push("Jay"); //add elements at the end
// console.log(friends);
// console.log(newlength);

// friends.unshift("John"); //add elements at the front
// console.log(friends);

// friends.pop(); //remove last element of the array
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); //remove first element of the array
// console.log(friends);

// console.log(friends.indexOf("Steven")); //tells you the position of a certain element
// console.log(friends.indexOf("Bob"));

// friends.push(23);
// console.log(friends.includes("Steven"));
// console.log(friends.includes(23));

// if (friends.includes("Steven")) {
//   console.log("You have a friend called Steven");
// }

//CODING CHALLENGE #2
// const calcTip = function (bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else if (bill < 50 || bill > 300) {
//     return bill * 0.2;
//   }
// };
// // const calcTip = (bill) => {
// //   if (bill >= 50 && bill <= 300) {
// //     return bill * 0.15;
// //   } else if (bill < 50 || bill > 300) {
// //     return bill * 0.2;
// //   }
// // };
// let tip = calcTip(100);
// console.log(tip);

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);

// const totalbill = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totalbill);

// OBJECTS
// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schemdtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schemdtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };
// console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas["lastName"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);
// console.log(jonas."last" + nameKey);

// const interestedIn = prompt(
//   "What do you want to know about Jonas? (Choose between firstName, lastName, age, job and friends"
// );

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! What do you want to know about Jonas? (Choose between firstName, lastName, age, job and friends"
//   );
// }

// jonas.location = "Portugal";
// // jonas["twitter"] = "@jonasschmedtman";
// jonas.twitter = "@jonasschmedtmann";
// console.log(jonas);

// //Challenge
// //'Jonas has 3 friends, and his best friend is called Michael'
// console.log(
//   jonas.firstName +
//     " has " +
//     jonas.friends.length +
//     " friends, and his best friend is " +
//     jonas.friends[0] +
//     "."
// );
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}.`
// );

//OBJECT METHODS
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schemdtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicence: true,
// calcAge: function (birthYear) {
//   return 2037 - birthYear;
// },
// calcAge: function () {
//   // console.log(this);
//   return 2037 - this.birthYear;
// },

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicence ? "a" : "no"} driving licence.`;
//   },
// };
// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.age)
// console.log(jonas.age);
// //CHALLENGE
// //"Jonas is a 46-year old teacher, and he has a/no driving licence."

// // if (jonas.hasDriversLicence === true) {
// //   console.log(
// //     `${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and he has a driving licence.`
// //   );
// // } else {
// //   console.log(
// //     `${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and he has no driving licence.`
// //   );
// // }
// console.log(jonas.getSummary());

//CODING CHALLENGE #3
// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   // bmi: this.mass / this.height ** 2,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// mark.calcBMI();
// console.log(mark.bmi);
// // const markBMI = mark.calcBMI();

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// john.calcBMI();
// console.log(john.bmi);

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi}).`
//   );
// } else {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi}).`
//   );
// }

//THE FOR LOOP
// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");
// console.log("Lifting weights repetition 7");
// console.log("Lifting weights repetition 8");
// console.log("Lifting weights repetition 9");
// console.log("Lifting weights repetition 10");

// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 30; rep++) {
// //   console.log(`Lifting weights repetition ${rep}`);
// // }

// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];

// const types = [];
// // console.log(jonas[0]);
// // console.log(jonas[1]);
// // ...
// // console.log(jonas[4]);
// //jonas[5] does NOT exist

// for (let i = 0; i < jonas.length; i++) {
//   //Reading from jonas array
//   console.log(jonas[i], typeof jonas[i]);
//   //Filling types array
//   //   types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);
// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// //CONTINUE and BREAK
// console.log("---ONLY STRINGS---");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue;
//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log("---BREAK WITH NUMBER---");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === "number") break;
//   console.log(jonas[i], typeof jonas[i]);
// }

//LOOPING BACKWARDS AND LOOPS IN LOOPS
// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];
// //0, 1, ..., 4
// //4, 3, ..., 0
// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

//LOOP IN LOOP
// for (let ex = 1; ex < 4; ex++) {
//   console.log(`--- Starting exercise ${ex} ---`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${ex}: Lifting weights repetition ${rep}`);
//   }
// }

//THE WHILE LOOP
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: Lifting weights repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}.`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log(`Loop is about to end...`);
// }

//CODING CHALLENGE #4
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const calcTip = function (bill) {
//     if (bill >= 50 && bill <= 300) {
//       return bill * 0.15;
//     } else if (bill < 50 || bill > 300) {
//       return bill * 0.2;
//     }
//   };
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   if (i === bills.length - 1) {
//     console.log(tips);
//   }
//   const total = bills[i] + tips[i];
//   totals.push(total);
//   if (i === bills.length - 1) {
//     console.log(totals);
//   }
// }

//Extra challenge
// const calcAvg = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum / arr.length;
// };
// const avgTotal = calcAvg(totals);
// console.log(avgTotal);
