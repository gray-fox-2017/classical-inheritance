"use strict"

class Animal {
  constructor(name, foodDemand, kind) {
    this.name = name;
    this.legsNum = 'four';
    this.foodDemand = foodDemand;
    this.kind = kind;
    this.superPow = new SuperPower();
  }
  print () {
    if (this.foodDemand[0]=='a'||this.foodDemand[0]=='e'||this.foodDemand[0]=='i'||this.foodDemand[0]=='o'||this.foodDemand[0]=='u') {
      console.log(`I have an ${this.foodDemand} pet with ${this.legsNum} legs named ${this.name}. It is a ${this.kind}. It ${this.superPow}`);
    }
    else {
      console.log(`I have a ${this.foodDemand} pet with ${this.legsNum} legs named ${this.name}. It is a ${this.kind}.`);
    }
  }
}

class Bull extends Animal {
  constructor(name, foodDemand, kind) {
    super(name, foodDemand, kind);
  }
  print() {
    super.print();
  }
}

class TRex extends Animal{
  constructor(name, foodDemand, kind) {
    super(name, foodDemand, kind);
    this.legsNum = 'two';
  }
  print() {
    super.print();
  }
}

class SuperPower {
  constructor() {

  }

  invis() {
    console.log('It can be invisible.')
  }

  superStr() {
    console.log('It has a super strength.')
  }
}

let bull = new Bull('Draco', 'herbivorous', 'bull')
let tRex = new TRex('Grax', 'carnivorous', 'T-Rex')
bull.print();
bull.superPow.superStr();
tRex.print();
tRex.superPow.invis();
