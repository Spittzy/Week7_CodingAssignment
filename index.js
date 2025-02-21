//1.a
console.log('1.a-------------------');
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
var firstNumber = ages[0];

console.log(ages[ages.length - 1] - firstNumber);

//1.b
console.log('1.b-------------------');
ages.push(27);

console.log(ages[ages.length - 1] - firstNumber);

//1.c
console.log('1.c-------------------');

var total = 0;
for (let i = 0; i < ages.length; i++) {

    if (i < ages.length) {
        total += ages[i];
        console.log(total);
    }
    var average = (total / (ages.length));
}

console.log(average);

//2.a
console.log('2.a-------------------');

var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

let namesLengths = names.map(function (element) {
    return element.length;
});
var numOfLetters = 0;
for (let i = 0; i < namesLengths.length; i++) {
    if (i < namesLengths.length) {
        numOfLetters += namesLengths[i];
        console.log(numOfLetters);
    }
    var average = (numOfLetters / (namesLengths.length));
}
console.log(average);

//2.b
console.log('2.b-------------------');

var concatNames = '';
for (let i = 0; i < names.length; i++) {
    concatNames = concatNames.concat(names[i] + ' ');
    console.log(i, concatNames);

}

//3 How do you access the last element of any array?
//array[array.length-1]

//4 How do you access the first element of any array?
//array[0]
//5
console.log('5-------------------');

var nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);

}
console.log(nameLengths);

//6
console.log('6-------------------');

sumOfNumber = 0;
for (let i = 0; i < nameLengths.length; i++) {
    sumOfNumber += nameLengths[i];
}
console.log(sumOfNumber);

//7
console.log('7-------------------');

function concatenated(word, n) {
    let concatWord = word.repeat(n);
    console.log(concatWord);
}
concatenated('Oy', 5);

//8
console.log('8-------------------');

function fullName(firstName, lastName) {
    console.log(`${firstName} ${lastName}`);
}

fullName('Bobby', 'Dukes');

//9
console.log('9-------------------');

var listOfNumber = [10, 32, 94];
var sumOfArry = true;

function isGreaterThanOneHundred(array) {
    let sum = array.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0)
    if (sum > 100) {
        return true;
    } else {
        return false;
    }
}

console.log(isGreaterThanOneHundred(listOfNumber));

//10
console.log('10-------------------');

function averageOfArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (i < array.length) {
            sum += array[i];

        }
        return (sum / (array.length));
    }

}

averageOfArray(listOfNumber);
console.log(averageOfArray(listOfNumber));

//11
console.log('11-------------------');

/**
 * 
 * @param {array} array1 
 * @param {array} array2 
 * @returns returns true if array1 avg is greater than array 2 avg
 */
function ifTwoArray(array1, array2) {

    var sum1 = averageOfArray(array1);
    var sum2 = averageOfArray(array2);

    if (sum1 > sum2) {

        return true;

    }
    else {

        return false;
    }
}

console.log(ifTwoArray(listOfNumber, ages));

//12
console.log('12-------------------');

var isHotOutside = true;
var moneyInPocket = 10.20;

function willBuyDrink(boolean, number) {
    if (boolean === true) {
        if (number > 10.20) {
            return true;
        }
        else {
            return false;
        }

    } else {
        return false;
    }
}

console.log(willBuyDrink(isHotOutside, moneyInPocket));

//13
console.log('13-------------------');

var arrayOfWords = ["apple", "banana", "life", "at", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon"];

/**
 * 
 * @param {array} array array to reduce
 * @returns return the shortest word in the array
 */


function findShortestWord(array) {

    return array.reduce(function (shortest, words) {//words is being checked, shortest is the word found so far

        if (words.length < shortest.length) {
            return words;//return if current word is shorter
        }
        else {
            return shortest;//return the shortest word so far
        }


    });

}
console.log(names);
console.log(findShortestWord(names));

console.log(arrayOfWords);
console.log(findShortestWord(arrayOfWords));


