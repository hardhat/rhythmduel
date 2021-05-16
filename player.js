// Player character.
import Actor from './actor.js'
// Listens for rhythm based commands and updates Actor class

export default class Player extends Actor {
    constructor ({ scene, sprite, x, y, health }) {
        super({ scene, sprite, x, y, health });

        this.scene = scene;
    }

    create()
    {
      this.comboCount = 0;
      this.comboString = "";
      this.scene.input.keyboard.on('keydown-UP', function(event){
        console.log('key1');
        this.comboCount += 1;
        this.comboString += "1";
      }, this);
      this.scene.input.keyboard.on('keydown-DOWN', function(event){
        console.log('key2');
        this.comboCount += 1;
        this.comboString += "3";
      }, this);
      this.scene.input.keyboard.on('keydown-LEFT', function(event){
        console.log('key3');
        this.comboCount += 1;
        this.comboString += "4";
      }, this);
      this.scene.input.keyboard.on('keydown-RIGHT', function(event){
        console.log('key4');
        this.comboCount += 1;
        this.comboString += "2";
      }, this);
      this.scene.input.keyboard.on('keydown-C', function(event){
        console.log(this.comboCount);
        if(this.comboCount == 4){
          console.log(this.comboString);
        }
      }, this);
    }

    patternCheck()
    {
        this.patterns = ["1112","1212","2121","2221","3334","2424","4434"]
        for(var i = 0; i < this.patterns.length; i++){
        }
        if(this.comboString == this.patterns[0]){
          console.log('advance');
          this.comboString = "";
        }
    }

    update ()
    {
      this.patternCheck();
      if(this.comboCount == 4){
        console.log(this.comboString);
        this.comboCount = 0;
        this.comboString = "";
      }
    }
}
