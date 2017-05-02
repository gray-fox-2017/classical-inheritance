"use strict"

class SuperPower {
  constructor () {
  }

  use_laser_vision (name) {
    return `${name} has better laser vision that Superman!`;
  }

  be_invisible (name) {
    return `${name} has gone invisible. Sorry you've lost your pet.`;
  }

  greedy_gorilla (name) {
    return `${name} eats much faster than gorilla`;
  }

  flash (name) {
    return `${name} is faster than the Flash`;
  }

  chitchatty (name) {
    return `Your ${name} is noisier than my neighbor.`;
  }
}

class Animal {
  constructor (num_legs=2, is_warm_blooded=true,is_mammal=false) {
    this.num_legs = num_legs;
    this.is_warm_blooded = is_warm_blooded;
    this.is_mammal = is_mammal;
    this.superpower = new SuperPower();
  }
}

class Frog extends Animal {
  constructor (num_legs,is_warm_blooded,is_mammal) {
    super (num_legs, is_warm_blooded, is_mammal);
  }
}

class Bat extends Animal {
  constructor (num_legs,is_warm_blooded,is_mammal) {
    super (num_legs, is_warm_blooded, is_mammal);
  }
}

class Chimpanzee extends Animal {
  constructor (num_legs,is_warm_blooded,is_mammal) {
    super (num_legs, is_warm_blooded, is_mammal);
  }
}

class Fox extends Animal {
  constructor (num_legs,is_warm_blooded,is_mammal) {
    super (num_legs, is_warm_blooded, is_mammal);
  }
}

class Chicken extends Animal {
  constructor (num_legs,is_warm_blooded,is_mammal) {
    super (num_legs, is_warm_blooded, is_mammal);
  }
}

let animal = new Animal ();
let frog = new Frog (4, false, false);
let bat = new Bat (2, true, true);
let chimpanzee = new Chimpanzee (2, true, true);
let fox = new Fox(4, true, true);
let chicken = new Chicken (2,true,false);

console.log(frog.num_legs === 4);
console.log(frog.is_warm_blooded === false);
console.log(frog.is_mammal === false);

console.log(`Frog has ${frog.num_legs} legs.`);
console.log(frog.superpower.be_invisible('Froggy'));
console.log(bat.superpower.use_laser_vision('Batmal'));
console.log(chimpanzee.superpower.greedy_gorilla('Chimnopants'));
console.log(fox.superpower.be_invisible('The Flox'));
console.log(chicken.superpower.be_invisible('Chiki-Chiki-Boom-Boom'));
