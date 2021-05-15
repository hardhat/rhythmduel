// Player character.
import Actor from './actor.js'
// Listens for rhythm based commands and updates Actor class

var upKey;
var downKey;
var leftKey;
var rightKey;
var scene;
var comboCount = 0;



export default class Player extends Actor {
    constructor ({ scene, x, y, texture, frame, health }) {
        super({ scene, x, y, texture, frame, health });
        this.scene = scene;
    }



    create()
    {
      upKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
      downKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
      leftKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
      rightKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update ()
    {
      if(upKey.isDown){
        //console.log('yoy');
        comboCount = comboCount + 1;
      }
      if(downKey.isDown){
        //console.log('yay');
        comboCount = comboCount + 4;
      }
      if(leftKey.isDown){
        //console.log('yey');
        comboCount = comboCount + 3;
      }
      if(rightKey.isDown){
        //console.log('ysy');
        comboCount = comboCount + 2;
      }
      if( comboCount == 5){
        console.log('advance');
        comboCount = 0;
      }
    }
}
