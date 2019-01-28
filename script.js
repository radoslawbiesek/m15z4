// Exercise 1
const a = 'Hello';
const b = 'World';

console.log(`${a}, ${b}!`);

// Exercise 2
const multiply = (a, b = 1) => a * b;

// Exercise 3
const average = (...nums) => { 
    let sum = 0;
    nums.forEach(num => sum += num);
    return sum / nums.length;
};

// Exercise 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average(...grades);

// Exercise 5
const strangeArr = [1, 4, 'Iwona', false, 'Nowak'];
let [, , firstname, , lastname] = strangeArr;