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
        console.log('key3');
        this.comboCount += 1;
        this.comboString += "3";
      }, this);
      this.scene.input.keyboard.on('keydown-LEFT', function(event){
        console.log('key4');
        this.comboCount += 1;
        this.comboString += "4";
      }, this);
      this.scene.input.keyboard.on('keydown-RIGHT', function(event){
        console.log('key2');
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
        this.patterns = ["1112","1212","2121","2221","3334","2424","4434"];
        if(this.comboString == this.patterns[0]){
          console.log('advance');
          this.comboString = "";
        } else if(this.comboString == this.patterns[1]){
          console.log('attack punch');
          this.comboString = "";
        } else if(this.comboString == this.patterns[2]){
          console.log('attack kick');
          this.comboString = "";
        } else if(this.comboString == this.patterns[3]){
          console.log('retreat');
          this.comboString = "";
        } else if(this.comboString == this.patterns[4]){
          console.log('shield');
          this.comboString = "";
        } else if(this.comboString == this.patterns[5]){
          console.log('duck punch');
          this.comboString = "";
        } else if(this.comboString == this.patterns[6]){
          console.log('jump kick');
          this.comboString = "";
        } else {
          console.log('invalid input');
        }

    }

    update ()
    {
      if(this.comboCount == 4){
        this.patternCheck();
        console.log(this.comboString);
        this.comboCount = 0;
        this.comboString = "";
      }
    }
}
