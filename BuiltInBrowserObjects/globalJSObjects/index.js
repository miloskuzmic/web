////Math//////
/*
Random
Create a function that builds an array of 10 random numbers between 1 and 50.
The function prints that array out in the console and then returns it.
*/
function randomNumbers() {
    var array = [];
    for (var i = 0; i < 10; i++){
        var randomNumberGenerator = Math.random() * 50;
        array[i] = randomNumberGenerator;
    }
    return array;
}
var random = randomNumbers();
console.log(random);
/*
Round
Create a function that uses the passed array of numbers and rounds all its
elements to two decimals.
Print out the modified array in the console.
Use the first function for generating the input array.
*/
function roundNumber(random) {
    var roundArray = [];
    for (var i = 0; i < random.length; i++){
        var roundNum = Math.round(random[i]);
        roundArray[i] = roundNum;
    }
    return roundArray;
}
var round = roundNumber(random);
console.log('Rounden array: ' + round);
/*
Floor
Create a function that uses the passed array of numbers and rounds all its
elements to the nearest integer.
Print out the modified array in the console.
Use the first function for generating the input array.
*/
function floorNumbers(random) {
    var floorNumber = [];
    for (var i = 0; i < random.length; i++){
        var floorNum = Math.floor(random[i]);
        floorNumber[i] = floorNum;
    }
    return floorNumber;
}
var floor = floorNumbers(random);
console.log('Floor numbers: ' + floor);
/*
Max
Create a function that finds and prints out the biggest element in the passed
array of numbers.
*/
function maxNum() {
    return Math.max(1, 2, 3, 5, 100, 23232, 123, 53443);
  }
  console.log(maxNum());

/////Date/////
function date() {
    var wholeDate = new Date();
    console.log(wholeDate);
    var currentTime = wholeDate.getHours() + ' : ' + wholeDate.getMinutes();
    console.log(currentTime);
    var currentDate = wholeDate.getDate() + '.' + (wholeDate.getMonth() + 1) + "." + wholeDate.getFullYear() + ".";
    console.log(currentDate);
}
date();