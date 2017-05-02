"use strict"

class Animal {
  constructor(leg = 2, darah = true ) {
    this.leg = leg
    this.darah = darah
  }

}
class superPower {
  constructor() {
  }
  useLaser() {
    console.log('<==== BEAMMM !! ====>');
  }
  userInvi() {
    console.log('Semprotan Tidak Terlihatt !!!');
  }
}

class kodok extends Animal {
  constructor(leg, darah) {
    super(leg, darah)
    this.superPower = new superPower()
  }
}

class bat extends Animal {
  constructor(leg, darah) {
    super(leg, darah)
    this.superPower = new superPower()
  }
}
class simpase extends Animal {
  constructor(leg, darah) {
    super(leg, darah)
    this.superPower = new superPower()
  }
}
class rubah extends Animal {
  constructor(leg, darah) {
    super(leg, darah)
    this.superPower = new superPower()
  }
}
class ayam extends Animal {
  constructor(leg, darah) {
    super(leg, darah)
    this.superPower = new superPower()
  }
}
console.log("--------------KODOK----------------")
let kakiKodok = new kodok(4, false)
console.log("kaki : "+kakiKodok.leg); //2
console.log("hawa panas ? true : false : "+kakiKodok.darah); //false
kakiKodok.superPower.useLaser();
console.log("---------------BAT---------------")
let kakiBat = new bat()
console.log("kaki : "+kakiBat.leg); //2
console.log("hawa panas ? true : false : "+kakiBat.darah);
console.log("---------------SIMPANSE---------------")
let kakiSimpase = new simpase(4, true)
console.log("kaki : "+kakiSimpase.leg); //2
console.log("hawa panas ? true : false : "+kakiSimpase.darah);
console.log("-----------------RUBAH-------------")
let kakiRubah = new rubah(4, true)
console.log("kaki : "+kakiRubah.leg); //2
console.log("hawa panas ? true : false : "+kakiRubah.darah);
kakiKodok.superPower.userInvi();
console.log("----------------AYAM--------------")
let kakiAyam = new ayam()
console.log("kaki : "+kakiAyam.leg); //2
console.log("hawa panas ? true : false : "+kakiAyam.darah);
