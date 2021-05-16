// Player character.
import Actor from './actor.js'
// Listens for rhythm based commands and updates Actor class

var scene;
//var comboCount = 0;
var key1 = false;
var key2 = false;
var key3 = false;
var key4 = false;
//var comboString = "";

export default class Player extends Actor {
    constructor ({ scene, sprite, x, y, health }) {
        super({ scene, sprite, x, y, health });

        this.scene = scene;
        //this.comboCount = 0;
    }

    create()
    {
      this.comboCount = 0;
      this.comboString = "";
      this.scene.input.keyboard.on('keydown-UP', function(event){
        console.log('key1');
        this.comboCount += 1;
        this.comboString += "1";
        key1 = true;
      }, this);
      this.scene.input.keyboard.on('keydown-DOWN', function(event){
        console.log('key2');
        this.comboCount += 1;
        this.comboString += "3";
        key2 = true;
      }, this);
      this.scene.input.keyboard.on('keydown-LEFT', function(event){
        console.log('key3');
        this.comboCount += 1;
        this.comboString += "4";
        key3 = true;
      }, this);
      this.scene.input.keyboard.on('keydown-RIGHT', function(event){
        console.log('key4');
        this.comboCount += 1;
        this.comboString += "2";
        key4 = true;
      }, this);
      this.scene.input.keyboard.on('keydown-C', function(event){
        console.log(this.comboCount);
        if(this.comboCount == 4){
          console.log(this.comboString);
        }
      }, this);
    }

    update ()
    {
      if(this.comboCount == 4){
        console.log(this.comboString);
        this.comboCount = 0;
      }
    }
}
