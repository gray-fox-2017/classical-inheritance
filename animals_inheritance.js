"use strict";
//Super Class
class Animal{
    constructor(name,model, num_leg){
        this._name = name;
        this._model = model;
        this._num_leg = num_leg;
    }
    get Model(){
        return this._model;
    }
    get Name(){
        return this._name;
    }
    ColorAnimal(color){
        console.log(`The Animal name is -${this.Name}- and the Color is ${color}`);
    }
}
//Child Class
class Chicken extends Animal{
    constructor(name,model,num_leg,sound,SuperPower){
        super(name,model,num_leg);
        this.sound = sound;
        this.SuperPower =  SuperPower;
    }
    beep_Sound(){
        console.log(`The ${this._model}, and the name is ${this._name} going to sound ${this.sound}`);
    }

    count_Leg(){
        console.log(`The ${this._model}, have leg is ${this._num_leg}`);
    }
    superAbility(){
        console.log(`${this._name}, Ready to ${this.SuperPower}`);
    }
}

//Child Class
class Harimau extends Animal{
    constructor(name,model,num_leg,sound,SuperPower){
        super(name,model,num_leg);
        this.sound = sound;
    }
    count_leg(){
        this._num_leg = 4;
        console.log(`The ${this._model}, have leg is ${this._num_leg}`);
    }
    beep_Sound(){
        console.log(`The ${this._model}, and the name is ${this._name} going to sound ${this.sound}`)
    }
    superAbility(){
        console.log(`${this._name}, Ready to ${this.SuperPower}`);
    }

}


var chicken = new Chicken("ChickBob","Chicken","2","Krok krok","spining-mole");
chicken.beep_Sound();
chicken.ColorAnimal("White");
chicken.count_Leg();
chicken.superAbility();
console.log("\n");
var Tiger = new Harimau("TigerCross","Tiger","4","Goarrrr","Fang-Claw");
Tiger.beep_Sound();
Tiger.ColorAnimal("Black-Orange");
Tiger.count_leg();
Tiger.superAbility();