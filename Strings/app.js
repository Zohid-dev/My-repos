//Task1
let str = 'ahb acb aeb aeeb adcb axeb'

let re = /a.b/g;
console.log(str.match(re));

//Task2
let num = '2 + 3 223 2223'

let regexp = /2 \+ 3/
console.log(num.match(regexp));

//Task3
let date = new Date
let yy = date.getFullYear()
let mm = date.getMonth() + 1
let dd = date.getDate()
console.log(`The year: ${yy}; The month: ${mm}; The day: ${dd}`);