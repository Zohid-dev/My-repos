//Task 1

let arrMovies = ["Avengers", "The Net", "Matrix", "The Mask"]

// for(let i = 0; i < arrMovies.length; i++){
//     console.log(arrMovies[i]);
// }

// for (el of arrMovies){
//     console.log(el);
// }
// let k = 0
// while (k < arrMovies.length) {

//     console.log(arrMovies[k]);
//     k++
// }

// do {    
//     console.log(arrMovies[k]);
//     k++
// } while (k < arrMovies.length);

//Task 2 Given an array of car manufacturers, convert the array to a string and back to an array

let arrCars = ['Mercedes', 'BMW', 'Fiat']

let allCars = arrCars.toString()

let sameCars = allCars.split(",")

console.log(sameCars);

//Task 3 Given an array of the names of your friends, add the words hello to each element of the array

let myFriends = ['Tom', 'Mike', 'Joe']
let helloToFriends = myFriends.map((currentNumber) => 'Hello ' + currentNumber)

console.log(helloToFriends);

//Task 4 Convert numeric array to Boolean

let num = 5
let bool = Boolean(num)
console.log(bool);

//Task 5 Sort the array [1,6,7,8,3,4,5,6] in descending order

let arr = [1,6,7,8,3,4,5,6]
let sorting = arr.sort((a, b) => b - a)
console.log(sorting);

//Task 6 Filter array [1,6,7,8,3,4,5,6] by value> 3

let arr2 = [1,6,7,8,3,4,5,6]
let filtering = arr2.filter(eachElem => eachElem > 3)
console.log(filtering);

//Task 7 Write a function that takes two parameters - an array and a number 
//and outputs the index of an array element equal to a number

let arr3 = [1,6,7,8,3,4,5,6]
function elemToNum(array, num) {

    return array.map((i) => (i = num))
  
  }


//Task 8 Implement a loop that will print the number 'a' until it is less than 10

for(let num = 0; num < 10; num++){
    console.log("a");
}

//Task 9 Implement a loop that prints prime numbers to the console

for(let number = 2 ; number <= 10; number++){
    let isPrime = true;

for (let i = 2; i <= number-  1; i++){
    if(number % i === 0){
        isPrime = false;
        break
    }
}
if (isPrime) console.log(number);
}

//Task 10 Implement a loop that prints odd numbers to the console

for(let numb = 0; numb <= 50; numb++){
    if (numb % 2 !== 0) {
        console.log(numb);
        
    }
}