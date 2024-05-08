//common string methods

//let email = 'auwal@gamil.com'

// let result = email.lastIndexOf('a');

// let result = email.slice(0,2)

// let result = email.substr(4,6);   //substring

//let result = email.replace('a', 'b');

//let result = email.replace('a', 'm');  //basically it replaces the first letter 
//console.log(result);

let radius = 10;
const pi = 3.14;
//console.log(radius,pi);

//maths operators +, -, *,/, **(to the power of), %

//console.log(10/2);
//let result = radius % 3;
//let result = pi * radius**2;

//order of operation  B I D M A S
//NB THE I IN THE ACCRONYM MEANS INDICIES(**)

//let result = 5 * (10-3)**2
//console.log(result);

//let likes = 10;
// likes = likes+1;
//likes++  //this is a shorthand operation
//likes--;
//for example likes+10 the shorthand value is below
//NB they're called short hand notation

//likes += 10;
//likes -= 5;
//likes *= 2;
//likes /=2;
//console.log(likes);

//NaN - Not a number
//console.log(5 * 'hello');

//concatenation
// let result = 'the blog has' + likes +' likes';
// console.log(result);

//template strings
// const title = 'Best reads of 2024';
// const author = 'mohammed';
// const likes = 30;



//concatenation ways
// let result = 'the blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(result);

//template ways     //NB A template string is created using backticks
// let result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

//creating html templates
// let html = `
//  <h2>${title}</h2>
//  <p>By ${author} </p>
//  <span>This blog has ${likes} likes</span>
// `;

// console.log(html);

//ARRAY  //Arrays are used to store a collection of data that are related to each other
let ninjas = ['Naruto','Kakashi','Obito'];
// ninjas[1] = 'ken'  //this is how you over ride kakashi in  the array
// console.log(ninjas[1]);  //[1] is used to get the second position. Remember js is 0 base ie. (0,1,2)

// let ages = [20,25,30,35];
// console.log(ages[2]);

// let random = ['Adam','crytal',30,20];
// console.log(random);

// console.log(ninjas.length);

//array methods

//let result = ninjas.join('-');  //it can be changed for example you can you a comma or anything instaed of Dash symbol
//let result = ninjas.indexOf('Obito');
//let result = ninjas.concat(['ken','crystal']);   //concatenation is joining thins together
//let result = ninjas.push('ken')  // it alters the original value by adding 1 to it
//result = ninjas.pop();   //changes the original value by taking off the end value. it returns the value it popped off the array
//console.log(result)
//console.log(ninjas);


//Null and Undefined
//let age = null;
//console.log(age, age+3, `the age is $(age)`);

//booleans & comparison
console.log(true,false, "true","false");
let email = 'mohammed@gmail.com';
let names = ['mario','Ummar','Binta'];

//let result = email.includes('@');
//let result = names.includes('Lingard');

//console.log(result);
//method can return booleans

//comparison operators
let age = 25;
console.log(age==25); 
console.log(age==30);  //== its asking if its equal 
console.log(age !=25);  // != means NOT EQUAL TO
console.log(age>20);
console.log(age <20);
console.log(age<=25); 
console.log(age >=25);














