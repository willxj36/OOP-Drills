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
    }
}