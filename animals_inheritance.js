"use strict"
class Animals {
  constructor(name) {
    this._name = name;
    this._num_legs = 2;
  }

  ShowName() {
    console.log(`Saya adalah hewan : ${this._name}`);
  }
}

//Katak
class Frog extends Animals {
  constructor(name) {
    super(name);
    this._num_legs = 4;
    this._warm_blodeed = false;
    this.superpower = new SuperPower(name);
  }

  ShowName() {
    console.log(`Saya adalah hewan : ${this._name} dan Jumlah Kaki ${this._num_legs}`);
  }
}

//Kelelawar
class Bat extends Animals {
  constructor(name) {
    super(name);
    this._num_legs = 2;
    this._warm_blodeed = false;
    this.superpower = new SuperPower (name);
  }

  ShowName() {
    console.log(`Saya adalah hewab : ${this._name} dan Jumlah Kaki ${this._num_legs}`);
  }
}


//Simpanse
class Chimpanzee extends Animals {
  constructor(name) {
    super(name);
    this._num_legs = 4;
    this._warm_blodeed = true;
    this.superpower = new SuperPower (name);
  }
  ShowName() {
    console.log(`Saya adala hewan : ${this._name} dan Jumlah Kaki ${this._num_legs}`);
  }
}

//Rubah
class Fox extends Animals {
  constructor(name) {
    super(name) ;
    this._num_legs = 4;
    this._warm_blodeed = true;
    this.superpower = new SuperPower (name)
  }

  ShowName() {
    console.log(`Saya adalah hewan : ${this._name} dan Jumlah Kaki ${this._num_legs}`);
  }
}

//Ayam
class Chicken extends Animals {
  constructor(name) {
    super(name);
    this._num_legs = 2;
    this._warm_blodeed = true;
    this.superpower = new SuperPower(name)
  }

  ShowName() {
    console.log(`Saya adalah hewan : ${this._name} dan Jumlah Kaki ${this._num_legs}`);
  }
}
 class SuperPower {
   constructor(name) {
     this._name = name;
   }

   UseLaserVision() {
     console.log(`${this._name} Gunakan Penglihatan Laser`);
   }

   beInvisible() {
     console.log(`${this._name} Tidak terlihat`);
   }
 }

 var singa = new Animals("Singa");
 singa.ShowName();
// singa.superpower.beInvisible();
// singa.superpower.UseLaserVision();

let kodok = new Frog('kodok');
kodok.ShowName();
kodok.superpower.beInvisible();
kodok.superpower.UseLaserVision();

let bat = new Bat('Bat 1');
bat.ShowName();
bat.superpower.beInvisible();
bat.superpower.UseLaserVision();
