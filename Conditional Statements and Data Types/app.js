let str = "Hello"
let strn = "5"
let boolt = true
let boolf = false
let num = 3

// 1. Perform addition of various types (string + boolean, string + number, number + boolean)

// string + boolean: 
console.log(str + boolt); //returns Hellotrue in console

// string + number
console.log(str + num); //returns Hello3

// number + boolean
console.log(num + boolt) //returns 4 as true equals 1
console.log(num + boolf) //returns 3 as false equals 0

// 2. Perform multiplication of various types (string * boolean, string * number, number * boolean)

//string * boolean
console.log(str * boolt); // returns NaN

//string * number
console.log(str * num); // returns NaN
console.log(strn * num); //returns 15 as a number is written as a string

//number * boolean
console.log(num * boolt); // returns 3 as true equals 1
console.log(num * boolf); // returns 0 as false equals 0

// 3. Divide different types (string / boolean, string / number, number / Boolean)

//string / boolean
console.log(str / boolt); //returns NaN
console.log(strn / boolt); //returns 5 as true equals 1
console.log(strn / boolf); //returns Infinity as false equals 0

//string / number
console.log(str / num); //returns NaN
console.log(strn / num); //returns a number as a number is declared as string

//number / Boolean
console.log(num / boolt); //returns 3 as true equals 1
console.log(num / boolf); //returns Infinity as false equals 0

// 4. Perform explicit conversion (number, string, boolean)

console.log(Number(strn)) //string to number
console.log(num.toString()) //number to string
console.log(parseInt(strn)) //string to number
console.log(boolt.toString()); //boolean to string
console.log(String(num)); //number to string