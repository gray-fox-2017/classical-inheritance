"use strict"
class Animal {
  constructor() {
    this.leg_numb = 4;
    this.mamals_stat = true;
  }

}

class Cat extends Animal {
  constructor(leg, mamals, food) {
    super(food);
    this.food = food;
    this.SuperPower = new SuperPower(this.food);
  }

  get review() {
    var isi = 'Class: Kucing\nJumlah Kaki: ' + this.leg_numb + '\nStatus Mamalia: ' + this.mamals_stat + '\nMakanan: ' + this.food + '\n' + this.SuperPower.reviewSP();
    return isi;
  }
}

class Otter extends Animal {
  constructor(leg, mamals, food) {
    super(food);
    this.food = food;
    this.SuperPower = new SuperPower(this.food);
  }

  get review() {
    var isi = 'Class: Otter\nJumlah Kaki: ' + this.leg_numb + '\nStatus Mamalia: ' + this.mamals_stat + '\nMakanan: ' + this.food + '\n' + this.SuperPower.reviewSP();
    return isi;
  }
}

class Chicken extends Animal {
  constructor(leg, mamals, food) {
    super(leg, mamals, food)
    this.mamals_stat = mamals;
    this.leg_numb = leg;
    this.food = food;
    this.SuperPower = new SuperPower(this.food);
  }

  get review() {
    var isi = 'Class: Chicken\nJumlah Kaki: ' + this.leg_numb + '\nStatus Mamalia: ' + this.mamals_stat + '\nMakanan: ' + this.food + '\n' + this.SuperPower.reviewSP();
    return isi;
  }
}

class Bobcats extends Animal {
  constructor(leg, mamals, food) {
    super(food);
    this.food = food;
    this.SuperPower = new SuperPower(this.food);
  }

  get review() {
    var isi = 'Class: Bobcats\nJumlah Kaki: ' + this.leg_numb + '\nStatus Mamalia: ' + this.mamals_stat + '\nMakanan: ' + this.food + '\n' + this.SuperPower.reviewSP();
    return isi;
  }
}

class Bulls extends Animal {
  constructor(leg, mamals, food) {
    super(food);
    this.food = food;
    this.SuperPower = new SuperPower(this.food);
  }

  get review() {
    var isi = 'Class: Bulls\nJumlah Kaki: ' + this.leg_numb + '\nStatus Mamalia: ' + this.mamals_stat + '\nMakanan: ' + this.food + '\n' + this.SuperPower.reviewSP();
    return isi;
  }
}

class SuperPower {
  constructor(food) {
    if (food === 'Tasty Kitten') {
      this.nightVision = true;
      this.invis = true;
      this.name = 'Kucing';

    } else if (food === 'Pelet Linsang') {
      this.nightVision = true;
      this.invis = false;
      this.name = 'Otter';

    } else if (food === 'Pur 512') {
      this.nightVision = false;
      this.invis = false;
      this.name = 'Ayam';

    } else if (food === 'Tikus liar') {
      this.nightVision = true;
      this.invis = true;
      this.name = 'Bobcats';

    } else if (food === 'Rumput') {
      this.nightVision = false;
      this.invis = true;
      this.name = 'Bulls';
    }
  }

  use_night_vision() {
    if (this.nightVision === true) {
      return 'mengaktifkan night vision pada ' + this.name;
    } else {
      return 'uh-oh, fungsi night vision tidak di temukan pada ' + this.name;
    }
  }

  be_invisible() {
    if (this.invis === true) {
      return 'mengaktifkan mode invisible pada ' + this.name;
    } else {
      return 'uh-oh, fungsi invisible tidak di temukan pada ' + this.name;
    }
  }

  reviewSP() {
    var out = []
    if (this.nightVision) {
      out.push('Night Vision');
    }
    if (this.invis) {
      out.push('invisible');
    }

    return 'Kekuatan super: ' + out.join(', ')
  }
}

var hewan = new Animal();
var ocha = new Cat(3,false, 'Tasty Kitten');
var linsang = new Otter(3, false, 'Pelet Linsang');
var kate = new Chicken(2,false,'Pur 512');
var charlotte = new Bobcats(3,true, 'Tikus liar');
var chicago = new Bulls(3, true, 'Rumput');

console.log(hewan);
console.log(ocha.review);
console.log(ocha.SuperPower.use_night_vision());
console.log(ocha.SuperPower.be_invisible());
console.log(linsang.review);
console.log(linsang.SuperPower.use_night_vision());
console.log(linsang.SuperPower.be_invisible());
console.log(kate.review);
console.log(kate.SuperPower.use_night_vision());
console.log(kate.SuperPower.be_invisible());
console.log(charlotte.review);
console.log(charlotte.SuperPower.use_night_vision());
console.log(charlotte.SuperPower.be_invisible());
console.log(chicago.review);
console.log(chicago.SuperPower.use_night_vision());
console.log(chicago.SuperPower.be_invisible());
