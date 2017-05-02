"use strict"

class Animal{

  constructor(name,leg=2,darah=false){
    this.name = name;
    this.leg = leg;
    this.darah = darah;
  }

  show(){
    console.log(`\nNama: ${this.name}`)
    console.log(`Jumlah Kaki: ${this.leg}`)
    console.log(`Jenis Darah Panas : ${this.darah}`)
  }
}

class Chicken extends Animal{

  constructor(name,leg,darah){
    super(name,leg,darah);
    this.superpower = new superPower();
  }


}

class Fox extends Animal{
  constructor(name,leg,darah){
    super(name,leg,darah);
    this.superpower = new superPower();
  }


}

class superPower{

    constructor(){

    }

    userLaser(){
      console.log("Menggunakan Laser");
    }

    beInvisible(){
      console.log("Menghilang Misterius");
    }
}

var chicken= new Chicken('Chicken',2,'No')
var fox = new Fox('Fox','Tidak Punya Kaki','Yes')

chicken.show();
chicken.superpower.userLaser();
fox.show();
fox.superpower.beInvisible();
