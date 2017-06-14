// Functional programming assignment #1

/**
 * This assignment requires that you write IMPERATIVE and FUNCTIONAL versions of the
 * same code.
 *
 * For IMPERATIVE, you should avoid passing functions as parameters.
 * For FUNCTIONAL, you should avoid for loops and mutating variables.
 */

//let planets = require('./planets');
//let settlers = require('./settlers');
let reportcard = require('./reportcard');
let items = require('./items');
let animals = require('./animals');

/**
 * Problem #1
 *
 * Write a function that returns the subjects from a student's report card. Use the REPORTCARD
 * dataset as an input.
 */

// IMPERATIVE SOLUTION BY MAC

function subjectImperative(rc) {
    let subjects = [];
    for (let i = 0; i < rc.length; i++) {
        subjects.push(rc[i].subject);
    }
    return subjects;
}

console.log(subjectImperative(reportcard)); // returns array of strings of school subjects from reportcard.

// DONE.

// FUNCTIONAL SOLUTION BY MAC

function subjectFunctional(rc) {
    return rc.subject;
}

console.log(reportcard.map(subjectFunctional)); // returns array of strings of school subjects from report card.

// DONE.

/**
 * Problem #2
 * 
 * Write a function that applies a sales tax of 10% to the prices of all items in the array. The function
 * should return an array of items (not only their prices).
 *
 * Use the ITEMS dataset as an input.
 */

// IMPERATIVE SOLUTION BY MAC

function SalesTax(things) {
    let newarray = [];
    for (let i = 0; i < things.length; i++) {
        things[i].price = things[i].price * 1.10;
        newarray.push(things[i]);
    }
    return newarray;
}

console.log(SalesTax(items)); // returns array of items with sales tax applied to price.

// DONE.

// FUNCTIONAL SOLUTION BY MAC

function salestaxfunc(thing) {
    thing.price = thing.price * 1.10;
    return thing;
}

console.log(items.map(salestaxfunc)); // returns array of items with sales tax applied to prices.

// DONE.

/**
 * Problem #3
 *
 * Write a function that returns an array of the same size as an input array but filled with zeroes. For 
 * example, the array [5, 9, 'hello'] would return [0, 0, 0].
 */

//IMPERATIVE SOLUTION BY MAC™

function AllZeroes(strs) {
    for (let i = 0; i < strs.length; i++) {
        if (strs[i] !== 0) {
            strs[i] = 0
        }
        else { strs[i] = 0 }
    }
    return strs;
}

console.log(AllZeroes(['pigs', 3, 'different ones', ' ', true])); // returns array of zeroes.

// DONE.

//FUNCTIONAL SOLUTION BY MAC™

function zeroes(thing) {
    return 0;
}

let array = [1, 2, 3, 4, 5]
console.log(array.map(zeroes)); // prints an array of zeroes.

// DONE.

/**
 * Problem #4
 *
 * Write a function that returns an abbreviation for the provided phrase. The abbreviation should consist of
 * a capitalized version of the first letter in each word.
 */

//IMPERATIVE SOLUTION BY MAC™

function abbrev(words) {
    let abbreviation = [];
    let array = words.split(" ");
    for (i = 0; i < array.length; i++) {
        let letters = array[i].split('');
        abbreviation.push(letters[0].toUpperCase());
    }
    return abbreviation.join('');
}

let phrase = 'Move-in after completion.'
console.log(abbrev(phrase)); // takes phrase and returns abbreviation.

// DONE.

//FUNCTIONAL SOLUTION BY MAC™

function stringsplit(string) {
    return string.split(' ');
}

function abbreviation(word) {
    let upper = word[0].toUpperCase();
    return upper;
}

let newphrase = 'Be right back.'
console.log(stringsplit(newphrase).map(abbreviation).join('')); // returns BRB.

// DONE.

/**
 * Problem #5
 *
 * Write a function that removes all punctuation from a provided sentence (exclamation marks, periods, and 
 * commas). 
 */

//IMPERATIVE SOLUTION BY MAC™

function removePunc(string) {
    let split = string.split('');
    let array = [];
    for (let i = 0; i < split.length; i++) {
        if (split[i] !== '.' && split[i] !== ',' && split[i] !== '!' && split[i] !== '?') {
            array.push(split[i]);
        }
    }
    return array.join('');
}

let sentence = 'Hello, John! The weather sure is nice, today. What are you up to?'
console.log(removePunc(sentence)); // returns sentence without punctuation.

//FUNCTIONAL SOLUTION BY MAC™

function stringsplit(string) {
    let array = string.split('');
    return array;
}

function puncRemoval(characters) {
    if (characters !== '.' && characters !== ',' && characters !== '!' && characters !== '?') {
        return characters;
    }
}

let newsentence = 'Hello, John! The weather sure is nice, today. What are you up to?'
console.log(stringsplit(newsentence).map(puncRemoval).join('')); // returns sentence without punctuation.

// DONE.

/**
 * Problem #6
 *
 * Write a function that accepts an array of numbers and returns an array of boolean values reflecting whether
 * each number is negative (true if yes, false if no).
 */

//IMPERATIVE SOLUTION BY MAC™

function isItNegative(array) {

    // let newarray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            array[i] = true;
        } else {
            array[i] = false;
        }
    }
    return array;
}

console.log(isItNegative([-1, -2, 1])); // returns (true, true, false)
console.log(isItNegative([-1, 0, 1])); // returns (true, false, false)

// DONE.

//FUNCTIONAL SOLUTION BY MAC™

function negative(nmbr) {
    if (nmbr < 0) {
        nmbr = true;
    } else {
        nmbr = false;
    }
    return nmbr;
}

let array1 = [-1, 1, -2, 2, 0, -3, 1];
console.log(array1.map(negative)); // returns [ true, false, true, false, false, true, false ]

// DONE.

/**
 * Problem #7
 *
 * Write a function that accepts an array of farm animals and returns the distance of each animal from the barn
 * (specified as a number). Use the ANIMALS array as an input for this problem, and assume the barn is at (0, 0).
 *
 * You will need to use the Pythagorean theorem to solve this!
 * https://en.wikipedia.org/wiki/Pythagorean_theorem#Other_forms_of_the_theorem
 */

//IMPERATIVE SOLUTION BY MAC™

function barndistance(array) {
    let distances = []; // push results to this array
    for (let i = 0; i < array.length; i++){
        distances.push(Math.sqrt((array[i].x * array[i].x) + (array[i].y * array[i].y)));
    };
    return distances;
};

console.log(barndistance(animals)); // returns an array of distances for each animal

// DONE.

//FUNCTIONAL SOLUTION BY MAC™

function square(nmbr) {
    return nmbr * nmbr;
}

function findDistance(obj) {
    return Math.sqrt(square(obj.x) + square(obj.y));
}

console.log(animals.map(findDistance)); // returns an array of distances from the barn.

// DONE.