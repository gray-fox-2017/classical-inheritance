"use strict"

class Animal {
  constructor(name, num_legs = 2, is_warm_blooded = true){
    this.name = name;
    this.num_legs = num_legs;
    this.is_warm_blooded = is_warm_blooded;
  }
  talk() {
    console.log(`I'am ${this.name} is a king of the forest`);
    console.log(`with ${this.num_legs} legs I can ran faster`);
    if(this.is_warm_blooded == true){
      console.log(`Yes ${this.is_warm_blooded} I'am warm blood!!!`);
    }else {
      return false;
    }
  }
}


class Frog extends Animal {
  constructor(name, num_legs, is_warm_blooded) {
    super(name, num_legs, is_warm_blooded)
    this._super = new SuperPower(name);
  }

  get super(){
    return this._super;
  }

  ability(){
    console.log(`Has two World`);
  }
}


class Bat extends Animal {
  constructor(name, num_legs, is_warm_blooded) {
    super(name, num_legs, is_warm_blooded)
    this._super = new SuperPower(name);
  }

  get super(){
    return this._super;
  }

  ability(){
    console.log(`My ability, Could Fly in the dark`);
  }
}

class Chimpanzee extends Animal {
  constructor(name, num_legs, is_warm_blooded) {
    super(name, num_legs, is_warm_blooded)
    this._super = new SuperPower(name);
  }

  get super(){
    return this._super;
  }

  ability(){
    console.log(`My ability Could hanging in the forrest`);
  }
}

class Fox extends Animal {
  constructor(name, num_legs, is_warm_blooded) {
    super(name, num_legs, is_warm_blooded)
    this._super = new SuperPower(name);
  }

  get super(){
    return this._super;
  }

  ability(){
    console.log(`My ability, I'am smart hunter`);
  }
}

class Chicken extends Animal {
  constructor(name, num_legs, is_warm_blooded) {
    super(name, num_legs, is_warm_blooded)
    this._super = new SuperPower(name);
  }

  get super(){
    return this._super;
  }

  ability(){
    console.log(`My ability Could produce Eggs`);
  }
}

class SuperPower {
  constructor(name){
    this.name = name;
  }

  use_laser_vision () {
    console.log(`You can fill my laser eye!!! **BoooooM@#$$#@`);
  }

  be_invisible () {
    console.log(`This is me ${this.name} of coursee you can't see me HAhhahahahahhaa!!! I'am invisible`);
  }
}

let chicken = new Chicken('petok', 2, true);
let fox = new Fox('foxy', 4, true)
chicken.talk();
chicken.ability();
chicken.super.use_laser_vision();
chicken.super.be_invisible();
console.log("---------------");
fox.talk();
fox.ability();
fox.super.use_laser_vision();
fox.super.be_invisible();
