"use strict"

// Release 0 : a Bunch of Animals
class Animal {
  constructor(name) {
    this.name = name;
    this.warmBlood = true;
    this.numLegs = 4;
  }

  eat() {
    console.log(`${this.name} is eating : Nyam.. Nyam..`);
  }
  something(){
    return 99
  }

}

class Cat extends Animal {
  constructor(name) {
    super(name);
    this.superPower = new SuperPower(name);
  }

  // overidding & overloading
  eat(){
    let eat = super.eat()
    return eat + ' sdkk;sk; '
  }

}

class Bird extends Animal {
  constructor(name) {
    super(name);
    this.superPower = new SuperPower(name);
  }

  eat() {
    super.eat();
  }

  setNumLegs(numLegs) {
    this.numLegs = numLegs;
    console.log(`${this.name} has ${this.numLegs} legs, and happily running!`);
  }

}


// Release 1: Super Powered Animals
class SuperPower {
  constructor(name) {
    this.name = name;
  }
  use_laser_vision() {
    console.log(`${this.name} uses laser vision without any reasons!`);
  }
  be_invisible() {
    console.log(`${this.name} is invisible and starts doing pranks!`);
  }
}

// Driver code
let lion = new Cat('lion');
console.log(lion.name);
console.log(lion.warmBlood); // check attribute inheritance
console.log(lion.eat()); // check attribute inheritance
let garuda = new Bird('garuda');
console.log(garuda.warmBlood); // check attribute inheritance
garuda.eat();                       // check method inheritance
garuda.setNumLegs(2);                // set new number of legs
console.log(garuda.numLegs);        // check if the number of the legs is corrected
// check the super powers
lion.superPower.use_laser_vision();
garuda.superPower.be_invisible();
