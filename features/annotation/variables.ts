let apple: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMatch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: Array<string> = [''];
// let colors: string[] = [''];
let myNumbers: number[] = [];
let booleans: boolean[] = [];

// Class
class Car {}

let car: Car = new Car();

// Object Literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber = (i: number): void => {
  console.log(i);
};

// When to use annotations
// 1) Function that returns the any type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

//  When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whoes type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
