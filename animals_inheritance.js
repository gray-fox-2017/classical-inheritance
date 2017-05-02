"use strict"

class SuperPower {
  constructor(name){
    this.name = name;
  }

  use_laser_vision (){
    return `${this.name} mengeluarkan laser vision!`
  }

  be_invisible(){
    return `${this.name} menghilang! invisible mode:on`
  }

  use_speedDash(){
    return `${this.name} lari secepat kilat!`
  }

  use_wingCutter(){
    return `${this.name} menggunakan wing cutter! slash slash!!`
  }
}

class Animal {
  constructor (name, warm_blooded=true, legs){
    this.name = name
    this.blood = warm_blooded;
    this.legs = legs
    this.superpower = new SuperPower(this.name);
  }

  animalBlood(){
    if(this.blood){
      return `${this.name} merupakan hewan berdarah panas`
    }
    return `${this.name} merupakan hewan berdarah dingin`
  }

  animalLegs(){
    return `${this.name} memiliki ${this.legs} kaki`
  }
}

class Frog extends Animal {
  constructor(name, warm_blooded, legs, food){
    super(name, warm_blooded, legs);
    this.food = food;
  }
}

class Chimpanze extends Animal {
  constructor(name, warm_blooded, legs, food){
    super(name, warm_blooded, legs);
    this.food = food;
  }
}

class Bat extends Animal {
  constructor(name, warm_blooded, legs){
    super(name, warm_blooded, legs);
  }
}

class Fox extends Animal {
  constructor(name, warm_blooded, legs, have_tail=true){
    super(name, warm_blooded, legs);
    this.have_tail = have_tail
  }
  haveTail(){
    if(this.have_tail){
      return `${this.name} memiliki ekor`
    }
    return `${this.name} tidak memiliki ekor`
  }
}

class Chicken extends Animal {
  constructor(name, warm_blooded, legs){
    super(name, warm_blooded, legs);
  }
}

// kodok
let frog = new Frog('Kodok', false, 4, 'serangga')
console.log(frog.animalBlood())
console.log(frog.animalLegs())
console.log(frog.superpower.use_laser_vision())

// simpanse
let simpanse = new Chimpanze('Simpanse', true, 2, 'buah-buahan')
console.log(simpanse.animalBlood())
console.log(simpanse.animalLegs())
console.log(simpanse.superpower.be_invisible())

// bat
let kelelawar = new Bat('Kelelawar', false, 2)
console.log(kelelawar.animalBlood())
console.log(kelelawar.superpower.use_wingCutter())

// Fox
let fox = new Fox('Rubah', true, 4, true)
console.log(fox.animalBlood())
console.log(fox.haveTail())
console.log(fox.superpower.use_speedDash())

// Chicken
let chicken = new Fox('Ayam', true, 4)
console.log(chicken.animalBlood())
console.log(chicken.animalLegs())
console.log(chicken.superpower.use_laser_vision())
