"use strict"

class Animal{

  constructor(name,num_legs,is_warn_blooded){
    this.name = name;
    this.num_legs = num_legs;
    this.is_warn_blooded = is_warn_blooded;
  }

  showAnimal(){
    console.log(`\nName: ${this.name}`)
    console.log(`Legs: ${this.num_legs}`)
    console.log(`is_warn_blooded: ${this.is_warn_blooded}`)
  }
}

class Snake extends Animal{

  constructor(name,num_legs,is_warn_blooded){
    super(name,num_legs,is_warn_blooded);
    this._superpower = new SuperPower();
  }

  get superpower(){
    return this._superpower;
  }
}

class Chicken extends Animal{
  constructor(name,num_legs,is_warn_blooded){
    super(name,num_legs,is_warn_blooded);
    this._superpower = new SuperPower();
  }

  get superpower(){
    return this._superpower;
  }
}

class SuperPower{

    constructor(){

    }

    use_laser_vision(){
      console.log("fire laser!!")
    }

    be_invisible(){
      console.log("pufftt!! invisible!!")
    }
}

var snake = new Snake('Snake','Gk ada cyin','No')
var chicken = new Chicken('Chicken',2,'Yes')

snake.showAnimal();
snake.superpower.use_laser_vision();
chicken.showAnimal();
chicken.superpower.be_invisible();
