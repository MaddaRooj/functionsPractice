console.log('functions.js');

let firstName = 'Brenda';
let lastName = 'Long';

// console.log(`${firstName} ${lastName}`);

function displayName(lastName, firstName){
    return(`${firstName} ${lastName} is awesome!`);
}

let myNewName = displayName('cat', 'fish');
console.log("myNewName", myNewName);

let myNewestName = displayName('bacon', 'crispy');
console.log('myNewestName', myNewestName);

let myRealName = displayName('Joor', 'Addam');
console.log('myRealName', myRealName);


// Practice ChickenMonkey----------------------------------------------------------------------------------
// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log('ChickenMonkey')
    }
    else if (currentNumber % 7 === 0) {
        console.log('Monkey');
    }
    else if (currentNumber % 5 === 0) {
        console.log('Chicken');
    }
    else {
        console.log(currentNumber);
    }
}


// Practice: Take a Number - Battle of the Bands--------------------------------------------------------------
// A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to sign up because the grand prize is $20,000. To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.

// Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.

let bandNumber = 0;

function takeNumber(band){
    bandNumber++;
    return (`${bandNumber}. ${band}`);
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console


// Practice: Cookout---------------------------------------------------------------------------------------

const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill (currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;
    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};

foods.forEach(function(item){
    grill(item);
    if (foods.cooked === true){
        cookedFood.push('item');
    }
})
console.log(cookedFood);

