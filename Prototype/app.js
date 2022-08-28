//Create 2 objects: animal and cat, add move property to animal object, 
//cat object must inherit move property from object animal

class animal {
    constructor(name){
        this.name = name
    }
    move(){
        console.log(`${this.name} is running`);
        
    }
}

class Cat extends animal{


}
let cat = new Cat("Stewart")
cat.move()
