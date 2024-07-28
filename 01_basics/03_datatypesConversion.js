let score = "33";
console.log(score)
console.log(typeof score);
console.log(typeof (score))

let valueInNumber = Number(score);
console.log(typeof (valueInNumber))


let score1 = "33abc";
console.log(score1)                    // string
console.log(typeof score1);

let valueInNumber1 = Number(score1);
console.log(typeof (valueInNumber1))   // number
console.log(valueInNumber1)            // NaN


let score3 = undefined;
console.log(score3)
console.log(typeof score3);            

let valueInNumber3 = Number(score3);
console.log(typeof (valueInNumber3))  
console.log(valueInNumber3)            


let score4 = false;
console.log(score4)
console.log(typeof score4);            

let valueInNumber4 = Number(score4);
console.log(typeof (valueInNumber4))   
console.log(valueInNumber4)            

// "33" = 33
// "33abc" = NaN
// true = 1; false = 0;

// let isLoggedIn = 1;

// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn)

// let isLoggedIn = "";

// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn)

let isLoggedIn = "Priyam";

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn)

// true = 1; false = 0;
// "" = flase;
// "Priyam" = true;

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Priyam"
let str2 = " Agarwal"

let str3 = str1 + str2
 console.log(str3);

console.log("1" + 2);           // 12
console.log(typeof("1" + 2))    // string
console.log(1 + "2");           // 12 
console.log(typeof(1 + "2"))    // string
console.log("1" + 2 + 2);       // 122
console.log(1 + 2 + "2");       // 32 (by defined format)

console.log( (3 + 4) * 5 % 3);

console.log(+true);
// console.log(true+); // Not Possible
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
++gameCounter;
console.log(gameCounter);
