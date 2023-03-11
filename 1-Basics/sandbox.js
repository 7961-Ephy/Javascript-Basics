let age = 25;
let year = 2002;

//log result to console
console.log(age,year);

//Overriding the value in the variable age
age = 30;

console.log(age);

const points = 100;

console.log(points);

//Strings
console.log("Hello, World");

let email = "ephykamau19@gmail.com";
console.log(email);

//String Concatenation
let fistName = "Ephy";
let lastName = "Kamau";

let fullName = fistName + " " + lastName;

console.log(fullName);

// getting characters
console.log(fullName[0]);


//string length
console.log(fullName.length);


//string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result);

let index = email.indexOf("@");
console.log(index);

//common String methods
let userEmail = "paulmwangi5@gmail.com";

let output = userEmail.lastIndexOf("i");

console.log(output);

output = userEmail.slice(4,10);

console.log(output);

output = userEmail.substr(4,10);

console.log(output);

output = userEmail.replace("p", "s");

console.log(output);

// Template Strings

const title = "Can't hurt me";
const author = "David Goggins";
const sales = 1000000;

let sentence = `The book "${title}" written by ${author} has ${sales} sales`;
console.log(sentence);

// Creating html Template
let html = `
<h2>${title}</h2>
<p>${author}</p>
<span>
`;
console.log(html);

//Numbers
//Math operators +, -, *, **, /, %

const pi = 3.142;
let radius =  7;

let area = pi * radius ** 2;

console.log(area)


//Arrays

let fruits = ['apples', 'bananas', 'mangoes'];

console.log(fruits[1]);

fruits[1] = "guavas";
console.log(fruits[1]);

let mixed = ['Ephy', 'Kamau', 1, 82, 123];
console.log(mixed);

console.log(fruits.length);

//array methods
let ordered = mixed.join('-');
console.log(ordered);

let newFruits = fruits.concat(['oranges', 'grapes']);
console.log(newFruits);

fruits.pop('mangoes');
console.log(fruits);

newFruits.push('pineapple');
console.log(newFruits)


newFruits.pop();
console.log(newFruits);

//Booleans and comparisons
console.log(true,false, "true", "false");

//Methods that return a boolean value
let names = ['Mugambi', 'Ephy', 'Zeenat'];
let query = names.includes('Derrick');
console.log(query);

//comparison operators
let myAge = 20;

console.log(myAge == 20);
console.log(myAge == 25);
console.log(myAge != 30);
console.log(myAge > 18);
console.log(myAge < 18);
console.log(myAge <= 18);
console.log(myAge >= 18);

console.log(myAge == '20');

console.log(myAge === '20'); //Utilizing strict equality
console.log(myAge === 20);
console.log(myAge !== 20);
console.log(myAge !== '20');


//Type Conversion
let marks = "100";

//marks = Number(marks);
console.log(marks + 1);

marks = Number(marks);
console.log(marks + 1);

















//
