//Heading
let task = 'This is Week 3 Task 1 - JavaScript String Methods';
console.log(task);

//JavaScript String Length
let randomWord = "supercalifragilisticexpialidocious";
let length = randomWord.length;
console.log(".....Below is an example of string length.....")
console.log("The word " + randomWord + " has " + length + " letters in it.");

//JavaScript String toUpperCase()
let randomWord2 = randomWord.toUpperCase();
console.log(".....Below is an example of toUpperCase().....")
console.log('Conversion to uppercase: ' + randomWord2);

//JavaScript String toLowerCase()
let randomWord3 = randomWord2.toLowerCase();
console.log(".....Below is an example of toLowerCase().....")
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
console.log(".....Below is an example of concat().....")
console.log(count);

//Javascript String charAt()
console.log(".....Below is an example of charAt().....");
console.log("The word being used: supercalifragilisticexpialidocious");
let char = randomWord.charAt(0);
console.log("character at 0: " + char);
char = randomWord.charAt(1);
console.log("character at 1: " + char);
char = randomWord.charAt(2);
console.log("character at 2: " + char);
char = randomWord.charAt(3);
console.log("character at 3: " + char);
char = randomWord.charAt(4);
console.log("character at 4: " + char);