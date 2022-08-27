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

let arrNum = [1, 0, 1, 0]
let arrBool = arrNum.map((eachElem) => {
    if (eachElem === 1) {
      return eachElem = true   
    }else{
        return eachElem = false
    }
})

console.log(arrBool);

//Task 5 Sort the array [1,6,7,8,3,4,5,6] in descending order

let arr = [1,6,7,8,3,4,5,6]
let sorting = arr.sort((a, b) => b - a)
console.log(sorting);