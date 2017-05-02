"use strict"

class Animal {
  constructor(num_legs, nama, is_warm_blooded) {
    this.num_legs = num_legs;
    this.is_warm_blooded = is_warm_blooded;
    this.nama = nama;
  }

  tampil(){
    console.log(this.nama);
    console.log(this.num_legs);
    console.log(this.is_warm_blooded);
  }
}

class Frog extends Animal{
  constructor(habitat, num_legs,is_warm_blooded) {
    super(num_legs,is_warm_blooded);
    this.habitat = 'Frog live in jungle';
    this.superPower = new superPower();
  }
}

class Bat extends Animal {
  constructor(have_wings, num_legs,is_warm_blooded) {
    super(num_legs,is_warm_blooded);
    this.have_wings = 'Bat have wings';
    this.superPower = new superPower();
  }
}

class Chimpanzee extends Animal {
  constructor(habitat, num_legs,is_warm_blooded) {
    super(num_legs,is_warm_blooded);
    this.habitat = 'jungle';
    this.superPower = new superPower();
  }
}


class Fox extends Animal {
  constructor(have_tail, num_legs,nama,is_warm_blooded ) {
    super(num_legs,nama, is_warm_blooded);
    this.have_tail = have_tail;
    this.superPower = new superPower();
  }
}

class Chicken extends Animal {
  constructor(num_legs,nama,is_warm_blooded, spawn) {
    super(num_legs,nama,is_warm_blooded);
    this.spawn = spawn;
    this.superPower = new superPower();
  }
}

class superPower {
  constructor() {}

  use_laser_Vision(){
     console.log('this is my power ====================>>>>>>>>>>>>>>>>>>>>>>>>>');
  }

  be_invisible(){
     console.log('you can see me now!!!!');
  }

}


// let animal = new Animal(4,'Fox is warm blood');
// console.log(animal);

let fox = new Fox('nine tails',4,'FOX','Fox is warm blood');
let chicken = new Chicken(2,'Chicken','Chicken is warm blood','yes');
fox.superPower.use_laser_Vision();
fox.tampil();
chicken.tampil();
