//Part 1 Cars

const car = {
    color: "black"
}
car.color = "green"

car.power = function (horsepower) {
    car.power = horsepower
}
car.power(120)
console.log(car);

//Part 2 Warehouse

const warehouse = {
    apples: 5,
    pears: 7
}

function adding () {
   console.log(warehouse.apples + warehouse.pears) 
}

adding()

//Part 3 My Name

const user = {
    firstName: "Zohid"
}

function fName(inputName) {
    if(inputName === user.firstName){
        alert(`Hello ${user.firstName}`);
    }else{
        alert("There is no such name");
    }
}

let getInput = prompt("What is your name?")
fName(getInput)

//Part 4 argument

function arg(a, b, c){
    console.log(typeof(a));
    console.log(typeof(b));
    console.log(typeof(c));
}

arg("Hello", 5, true)


//Part 5 Prime number

function isPrime(inputNumber){
    
    if (inputNumber === 1) {
        console.log(`${inputNumber} is not Prime`);
        
        
    }else if(inputNumber === 2){
        console.log(`${inputNumber} is Prime`);
    }else{
        for (let i = 2; i < inputNumber; i++) {
            if (inputNumber % i === 0) {
                
                console.log(`${inputNumber} is not Prime`);
            }
                console.log(`${inputNumber} is Prime`);
            
            
        }
    }
}
let input= +prompt('Enter a number')
isPrime(input)