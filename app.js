//using object literals
let person1 = {
    name: 'Amber',
    sayHello: () => console.log('Hi, my name is Amber!')
};

let person2 = {
    name: 'Ethan',
    sayHello: () => console.log('Hi, my name is Ethan!')
};

let person3 = {
    name: 'Kendra',
    sayHello: () => console.log('Hi, my name is Kendra!')
};

let person4 = {
    name: 'Adam',
    sayHello: () => console.log('Hi, my name is Adam!')
};

let person5 = {
    name: 'Rudy',
    sayHello: () => console.log('Hi, my name is Rudy!')
};

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();

//using old pseudoclasses (es5)
function Person (name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
}

Person.prototype.sayHello = function () {
    console.log(`Hi, my name is ${this.name}, I'm ${this.age} years old, and I live in ${this.city}`);
}

let p1 = new Person('Amber', 25, 'Colorado Springs');
let p2 = new Person('Ethan', 29, 'Colorado Springs');
let p3 = new Person('Kendra', 29, 'Colorado Springs');
let p4 = new Person('Adam', 34, 'Colorado Springs');
let p5 = new Person('Rudy', 31, 'Colorado Springs');

p1.sayHello();
p2.sayHello();
p3.sayHello();
p4.sayHello();
p5.sayHello();

//using es6 classes (just made it plural so it wouldn't error due to previous function declaration)
class Persons {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    sayHello = () => console.log(`Hi, my name is ${this.name}, I'm ${this.age} years old, and I live in ${this.city}`);
}

p1 = new Persons('Amber', 25, 'Colorado Springs');
p2 = new Persons('Ethan', 29, 'Colorado Springs');
p3 = new Persons('Kendra', 29, 'Colorado Springs');
p4 = new Persons('Adam', 34, 'Colorado Springs');
p5 = new Persons('Rudy', 31, 'Colorado Springs');

p1.sayHello();
p2.sayHello();
p3.sayHello();
p4.sayHello();
p5.sayHello();

//inheritance section
class Vehicle {
    constructor(mfr, wheels) {
        this.mfr = mfr;
        this.wheels = wheels;
    };

    aboutVehicle = () => console.log(`The vehicle was made by ${this.mfr} and has ${this.wheels} wheels.`);
}

class Truck extends Vehicle {
    constructor(mfr, wheels, doors, bed) {
        super(mfr, wheels);
        this.doors = doors;
        if(bed === 'yes') {
            this.type = 'truck';
        };
    };

    aboutVehicle = () => console.log(`The vehicle is a ${this.type} with ${this.doors} doors, was made by ${this.mfr}, and has ${this.wheels} wheels.`);
}

class Sedan extends Vehicle {
    constructor(mfr, wheels, size, mpg) {
        super(mfr, wheels);
        this.size = size;
        this.mpg = mpg;
    }

    aboutVehicle = () => console.log(`The vehicle is a ${this.size} sedan which gets ${this.mpg} mpg, was made by ${this.mfr}, and has ${this.wheels} wheels.`);
}

class Motorcycle extends Vehicle {
    constructor(mfr, wheels, handlebars, noDoors) {
        super(mfr, wheels);
        if(handlebars === 'yes') {
            this.type = 'motorcycle';
        };
        if(noDoors === 'yes') {
            this.doors = 0;
        };
    }

    aboutVehicle = () => console.log(`This vehicle is a ${this.type} with ${this.doors} doors, was made by ${this.mfr}, and has ${this.wheels} wheels.`);
}

//testing the classes, not part of the tasks in the readme

let car = new Vehicle('Chevy', 4);
let cbr = new Motorcycle('Honda', 2, 'yes', 'yes');
let taurus = new Sedan('Ford', 4, 'small', 38);
let f150 = new Truck('Ford', 4, 4, 'yes');

car.aboutVehicle();
cbr.aboutVehicle();
taurus.aboutVehicle();
f150.aboutVehicle();