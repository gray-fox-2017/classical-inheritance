"use strict"

class Ability {
  constructor(name, legs) {
    this.name = name;
    this.legs = legs;
  }

  deathTwist () {
    if (this.name == 'ular') return `${this.name} melilit dengan kekuatan 2 Megaton dengan ${this.legs} Kaki`;
    else return `Sorry ${this.name}, it's not your ability`;
  }

  superClaw () {
    if (this.name == 'macan') return `${this.name} mencakar 3 gunung sekali tebas`;
    else return `Sorry ${this.name}, it's not your ability`;
  }

  superPop () {
    if (this.name == 'koala') return `${this.name} mengeluarkan bau tak sedap seantero stratosfer`;
    else return `Sorry ${this.name}, it's not your ability`;
  }

  superHorn () {
    if (this.name == 'badak') return `${this.name} dengan tanduknya menghancurkan satu benua`;
    else return `Sorry ${this.name}, it's not your ability`;
  }

}

class Animal {
  constructor(name, legs, blood, food) {
    this.name = name;
    this.legs = legs;
    this.blood = blood;
    this.food = food;
    this.ability = new Ability(this.name, this.legs)
  }
}

class Snake extends Animal {
  constructor(name, legs, blood, food, habitat) {
    super(name, legs, blood, food);
    this.habitat = habitat;
  }
}

class Tiger extends Animal {
  constructor(name, legs, blood, food, speed) {
    super(name, legs, blood, food);
    this.speed = speed;
  }
}

class Koala extends Animal {
  constructor(name, legs, blood, food, sleep) {
    super(name, legs, blood, food);
    this.sleep = sleep;
  }
}

class Rhino extends Animal {
  constructor(name, legs, blood, food, strength) {
    super(name, legs, blood, food);
    this.strength = strength;
  }
}

var ular = new Snake("ular",0, "cold", "karnivor", "rain forest");
var macan = new Tiger("macan",4, "warm", "karnivor", "100km/h");
var koala = new Koala("koala",4, "warm", "herbivore", "16h/day");
var badak = new Rhino("badak",4, "warm", "herbivore", "10 Megaton");

console.log(ular.ability.deathTwist());
// console.log(macan);
// console.log(koala);
// console.log(badak);
