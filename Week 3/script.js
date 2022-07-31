//Week 3 Task 1

//Heading
let task = 'This is Week 3 Task 1 - JavaScript String Methods';
console.log(task);

//JavaScript String Length
let randomWord = "supercalifragilisticexpialidocious";
let length = randomWord.length;
console.log(".....Below is an example of string length.....");
console.log("The word " + randomWord + " has " + length + " letters in it.");

//JavaScript String toUpperCase()
let randomWord2 = randomWord.toUpperCase();
console.log(".....Below is an example of toUpperCase().....");
console.log('Conversion to uppercase: ' + randomWord2);

//JavaScript String toLowerCase()
let randomWord3 = randomWord2.toLowerCase();
console.log(".....Below is an example of toLowerCase().....");
console.log('Conversion to lowercase: ' + randomWord3);

//Replacing String Content
let htmlText = "Tonight, I am writing HTML for my website!";
let cssText = htmlText.replace("HTML", "CSS");
let jsText = cssText.replace("CSS", "JavaScript");
console.log(".....Below is an example of replacing string content.....");
console.log(htmlText);
console.log(cssText);
console.log(jsText);

//JavaScript String Concat()
let number1 = "One";
let number2 = "Two";
let number3 = "Three";
let number4 = "Four";
let number5 = "Five";
let count = number1.concat(" ", number2, " ", number3, " ", number4, " ", number5);
console.log(".....Below is an example of concat().....");
console.log(count);

//Javascript String charAt()
console.log(".....Below is an example of charAt().....");
console.log("The word being used: supercalifragilisticexpialidocious");
let char = randomWord.charAt(0);
console.log("Character at 0: " + char);
char = randomWord.charAt(1);
console.log("Character at 1: " + char);
char = randomWord.charAt(2);
console.log("Character at 2: " + char);
char = randomWord.charAt(3);
console.log("Character at 3: " + char);
char = randomWord.charAt(4);
console.log("Character at 4: " + char);

//************************************************************************************

//Week 3 Task 2

let task2 = 'This is Week 3 Task 2 - JavaScript Numberm Number Methods and Array Methods';
console.log(task2);

//Creation of string array
let cars = ['Holden', 'Ford', 'Nissan', 'Toyota'];
console.log(cars);

//Find Method
console.log('.....Below is an example of the find method.....');
console.log(cars.find((car) => car === 'Holden'));
console.log(cars.find((car) => car === 'Mazda'));

//Find Index Method - elements that are not found will return '-1'
console.log('.....Below is an example of the find index method.....');
console.log(cars.findIndex((car) => car === 'Toyota'));
console.log((firstIndex = cars.findIndex((car) => car === 'Mazda')));

//Push Method - adds an element to the end of an array & returns new length of array
console.log('.....Below is an example of the push method.....');
console.log(cars.push('Mazda'));
console.log(cars);

//Pop Method - removed the last element of an array & returns the removed element
console.log('.....Below is an example of the pop method.....');
console.log(cars.pop());
console.log(cars);

//Creation of the number array
let numbers = [7, 3, 5, 8, 9, 5];

//Sort Method
console.log('.....Below is an example of the sort method.....');
console.log(numbers.sort());

//Slice Method - cuts out part of the array 
console.log('.....Below are examples of the slice method.....');
console.log(cars.slice(1,2));
console.log(cars);

//Slice Method - one parameter will cut out the rest of the array
console.log(cars.slice(1));
console.log(cars.slice(-1));

//Foreach Method
console.log('.....Below is an example of the foreach method.....');
cars.forEach((car) => (console.log(car)));

//Concat Method
console.log('.....Below is an example of the concat method.....');
let cars2 = ['BMW', 'Renault', 'Suburu', 'Audi']
let allCars = cars.concat(cars2);
console.log(allCars);

//toString Method - returns a number as a string
console.log('.....Below is an example of the toString Method.....');
let x = 13579;
console.log(x.toString());

//toExponential Method
console.log('.....Below is an example of the toExponential Method.....');
let y = 2.468109;
console.log('y = ' + y.toString());
console.log('e0: ' + y.toExponential(0));
console.log('e2: ' + y.toExponential(2));
console.log('e4: ' + y.toExponential(4));
console.log('e6: ' + y.toExponential(6));

//toFixed Method
console.log('.....Below is an example of the toFixed Method.....');
let z = 7.49;
console.log('It costs exactly $' + z + ' for a 2L carton of milk.');
console.log('Paying with cash, the cost is rounded up to $' + z.toFixed(1));



