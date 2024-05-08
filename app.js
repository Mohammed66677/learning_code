
console.log("Hello World!!!!")
const name = 'Awwal';
const gender = 'Male';
console.log('My name is: ', name);
console.log('My gender is: ', gender);
console.log('My name is: %s and my gender is %s',  name, gender);
let personName = 'John'; // Declaring a variable 'name' and assigning a string value
  const age = 30;    // Declaring a constant 'age' with a numeric value

console.log(personName);
console.log('the age is ', age);

let hour = 10;
if (hour < 12) {
  console.log('Good morning!'); // Output: Good morning!
} else {
  console.log('Good afternoon');
}

for (let i = 0; i < 5; i++) {
  console.log(i); // Output: 0, 1, 2, 3, 4
}

// function greet(name) {
//   console.log(`Hello, ${name}!`);
// }
// greet('Alice'); // Output: Hello, Alice!
  // Scope example
  function checkScope() {
    if (true) {
      var varVariable = 'Inside if'; // var has function scope
      let letVariable = 'Inside if'; // let has block scope
    }
    console.log(varVariable); // Output: Inside if
    console.log(letVariable); // Throws ReferenceError: letVariable is not defined
  }
  // checkScope();

  function greet(name) {
    if (name) {
      console.log(`Hello, ${name}. How are you today.`);
    }
    else {
      console.log('Bye!')
    }

  }
  if (name) {
    console.log(`Hello, ${name}. How are you today.`);
  }
  else {
    console.log('Bye!')
  }
  if (name) {
    console.log(`Hello, ${name}. How are you today.`);
  }
  else {
    console.log('Bye!')
  }
  if (name) {
    console.log(`Hello, ${name}. How are you today.`);
  }
  else {
    console.log('Bye!')
  }
  if (name) {
    console.log(`Hello, ${name}. How are you today.`);
  }
  else {
    console.log('Bye!')
  }
  

  greet('Awwal');
  greet('Idris');
  greet('Jamal');
  greet();

  // var person = Adam;
  // console.log('Hello', person)

  // var a;
  // a = 10
  // var b = 20;
  // var sum = a+b;

  // var a, b, sum;
  // a = 10, b = 20, sum;
  // a = 10;
  // b = 20;
  // console.log(sum);

  // let age = 25;
  // let year = 2022;

  // console.log(age,year);

  // age = 30;
  // console.log(age);

  const points = 100;
  
  console.log(points);

  var score = 75;
  console.log(score);

  //strings
  console.log('hello,world');

  let email = 'auwal@gmail.com';
  console.log(email);

  //string concatenation
  let firstName = 'Basit';
  let secondName = 'Adam';

  let fullName = firstName + ' ' + secondName;
  console.log(fullName);

//string length
 console.log(fullName.length);

 //string methods/function
 console.log(fullName.toUpperCase());
 let result = (fullName.toLowerCase());
 console.log(result);

 let index = email.indexOf('@');  //this is called an argument/parameters(when you pass a value into the method like this)
 console.log(index)

var num = 1;
var newNum = num++ ; //num = num + 1;
console.log(newNum);

var num = 1;
var newNum = num--; // mum= num - 1;
console.log(newNum);

var num = 1;
var newNum = --num; // num = 1-1
console.log(newNum);

var totalCost = 1 + 3 * 4;
console.log(totalCost);

var totalCost = (1 + 3) * 4;
console.log(totalCost);

var resultOfComputation = (2*4) * 4 + 2;
console.log(resultOfComputation);


  // Scope example
  function checkScope() {
    if (true) {
      var varVariable = 'Inside if'; // var has function scope
      let letVariable = 'Inside if'; // let has block scope
    }
    console.log(varVariable); // Output: Inside if
    console.log(letVariable); // Throws ReferenceError: letVariable is not defined
  }

  // // Object example
  // let person = {
  //   name: 'Alice',
  //   age: 25,
  //   hobbies: ['reading', 'painting']
  // };
  // console.log(person.name); // Output: Alice

  //Array example
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits[0]);

// 
















