"use strict"

class Animals {
  constructor(name, num_legs, is_warm_blooded) {
    this.name = name;
    this.num_legs = num_legs || 0;
    this.is_warm_blooded = is_warm_blooded;
  }
  is_eating(){
    console.log(`${this.name} is eating peacefully`);
  }

  is_sleeping(){
    console.log(`${this.name} is sleeping`);
  }
}

class Cat extends Animals {
  constructor(name, num_legs, is_warm_blooded, fur_colour) {
    super(name, num_legs, is_warm_blooded)
    this.fur_colour = fur_colour;
    this.superpower = new superPower(this.name);
  }
  is_sleeping(){
    super.is_sleeping();
  }

  is_eating(){
    super.is_eating();
  }
}

class Catfish extends Animals{
  constructor(name, num_legs, is_warm_blooded) {
    super(name, num_legs, is_warm_blooded)
    this.superpower = new superPower(this.name);
  }

  is_sleeping(){
    super.is_sleeping();
  }

  is_eating(){
    super.is_eating();
  }
}

class superPower {
  constructor(name) {
    this.name = name;
  }

  use_laser_vision(){
    console.log(`${this.name} use laser vision`)
  }

  be_invisible(){
    console.log(`${this.name} now invisible`);
  }
}

let Kate = new Cat("Kate",4,true,"Red");
let Lele = new Catfish("Lele", 0, false)
console.log(Kate.num_legs);
console.log(Kate.is_warm_blooded);
console.log(Kate.fur_colour);
Kate.superpower.use_laser_vision();
Kate.is_sleeping();
console.log(Lele.is_warm_blooded);
console.log(Lele.num_legs);
Lele.superpower.be_invisible();
