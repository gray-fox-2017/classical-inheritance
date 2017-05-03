"use strict"
class Animal {
  constructor(name){
    this.name = name;
    this.num_legs = 2;
    this.superpower = new SuperPower()
  }
}

class Frog extends Animal {
  constructor(name,num_legs){
    super(name,num_legs);
    this.num_legs = num_legs;
    this.is_warm_blooded = true
  }
}

class Bat extends Animal{
  constructor(name,num_legs){
    super(name);
    this.is_warm_blooded = false
  }
}

class Chimpanzee extends Animal{
  constructor(name,num_legs){
    super(name);
    this.is_warm_blooded = false
  }
}

class Fox extends Animal{
  constructor(name,num_legs){
    super(name);
    this.num_legs = 4;
    this.is_warm_blooded = false
  }
}

class Chicken extends Animal{
  constructor(name,num_legs){
    super(name)
    this.is_warm_blooded = false
  }
}

class SuperPower{
  use_laser_vision(){
    console.log('booooooom');
  }
  be_invisible(){
    console.log('criiiiiing');
  }
}

let frog = new Frog ('frogie',4)
let bat = new Bat ('batie')
let chimpanzee = new Chimpanzee ('chimpie')
let fox = new Fox ('foxie')
let chicken = new Chicken ('chickie')

console.log(frog);
console.log(bat);
console.log(chimpanzee);
console.log(fox);
console.log(chicken);

fox.superpower.use_laser_vision()
frog.superpower.be_invisible()
chicken.superpower.use_laser_vision()
bat.superpower.be_invisible()
