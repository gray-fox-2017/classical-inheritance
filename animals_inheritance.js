"use strict"
class SuperPower {
  constructor(name) {
    this.name = name;
  }

  camouflage() {
    if(this.name == 'lizard') {
      console.log(`${this.name} blends with its surroundings!`)
    } else console.log(`Poor ${this.name} sticks out so much`)
  }

  reborn() {
    if(this.name == 'phoenix') {
      console.log(`${this.name} dies and rises from its ashes`)
    }
  }

  overhead_kick() {
    if(this.name == 'goat') {
      console.log(`${this.name} does an overhead kick!`)
    }
  }
}

class Animal {
  constructor(name, age, foodSource, legs) {
    this.name = name;
    this.age = age;
    this.foodSource = foodSource;
    this.legs = 2;
    this.superpower = new SuperPower(name);
  }

  num_legs() {
    console.log(`${this.name} has ${this.legs} legs!`)
  }

  is_carnivore() {
    if(this.foodSource == 'carnivore') {
      console.log(`${this.name} is a ${this.foodSource}`)
    } else {
      console.log(`No, ${this.name} is not a carnivore!`)
    }
  }

  is_winged() {
    if(this.winged) {
      console.log(`${this.name} flies away!`)
    } else console.log(`${this.name} has no wings`)
  }
}

class Goat extends Animal {
  constructor(name, age, foodSource, legs) {
    super(name, age, foodSource, legs);
    this.foodSource = 'herbivore';
    this.legs = 4;
  }
}

class Lizard extends Animal {
  constructor(name, age, foodSource, legs) {
    super(name, age, foodSource, legs);
    this.foodSource = 'omnivore';
    this.legs = 4;
  }
}

class Phoenix extends Animal {
  constructor(name, age, foodSource, legs) {
    super(name, age, foodSource, legs);
    this.winged = true;
  }
}

class Pigeon extends Animal {
  constructor(name, age, foodSource, legs) {
    super(name, age, foodSource, legs);
    this.foodSource = 'omnivore';
    this.legs = 2;
    this.winged = true;
  }
}
let goat = new Goat('goat', 2, 'herbivore', 4)

// console.log(goat)
goat.num_legs();
goat.is_carnivore();
goat.is_winged()
goat.superpower.reborn();

let phoenix = new Phoenix('phoenix', 100, 'carnivore', 2)

phoenix.is_winged();
phoenix.superpower.reborn();
