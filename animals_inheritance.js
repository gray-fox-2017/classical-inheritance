"use strict"
class Animal {
  constructor(datas) {
    //name,num_leg,is_warm_blooded,has_tail,color
    this._name = datas.name;
    this._num_legs= datas.num_legs;
    this._has_tail = datas.has_tail;
    this._is_warm_blooded = datas.is_warm_blooded;
    this._color = datas.color;
    this._characteristic = datas.characteristic;
    this._breed = datas.breed;
    this.superpower = new SuperPower(this._name);
  }

  get is_warm_blooded() {
    return (this._is_warm_blooded? 'is' : 'is not')+' a warm blooded animal';
  }

  get has_tail() {
    return (this._has_tail? 'and a tail' : '');
  }

  getAnimalBody() {
    return `${this._name} is a ${this._characteristic} ${this._color} ${this._breed}! It ${this.is_warm_blooded} with ${this._num_legs} legs ${this.has_tail}`
  }
}
class SuperPower {
  constructor (nama) {
    this.nama = nama;
  }
  use_laser_vision() {
    return `${this.nama} use laser vision`;
  }
  use_lick() {
    return `${this.nama} use lick`;
  }
  be_invisible() {
    return `${this.nama} use invisible`;
  }
}
class Frog extends Animal {
  constructor(datas) {
    super(datas);
  }
}

class Dog extends Animal {
  constructor(datas) {
    super(datas);
  }
}

let lycaa = new Dog({name : 'Lycaa', breed : 'Toy Poodle',has_tail: true, is_warm_blooded: 'true',color : 'white',num_legs:4,characteristic: 'cute' });
let miko = new Dog({name : 'Miko', breed : 'Siberian Husky', has_tail: true, is_warm_blooded: 'true',color : 'gray',num_legs:4, characteristic : 'savage'});
let frog = new Frog({name: 'Frog', breed : 'Happy Frog', has_tail:false,is_warm_blooded: false, color : 'green', num_legs:2, characteristic : 'cool'});


console.log(lycaa.getAnimalBody());
console.log(miko.getAnimalBody());
console.log(frog.getAnimalBody());


console.log(lycaa.superpower.use_laser_vision());
console.log(miko.superpower.be_invisible());
console.log(frog.superpower.use_lick());
