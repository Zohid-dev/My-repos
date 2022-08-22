//Part 1 Cars

const car = {
    color: "black"
}
car.color = "green"

function powerToCar(a) {
    car.power = a
}
powerToCar(120)
console.log(car);

//Part 2 Warehouse

const warehouse = {
    apples: 5,
    pears: 7
}

function adding(apple, pear) {
    warehouse.apples += apple;
    warehouse.pears += pear
    
}

adding(17, 20)

console.log(warehouse);