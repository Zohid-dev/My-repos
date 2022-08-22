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