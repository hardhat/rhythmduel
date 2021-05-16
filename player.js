// Player character.
import Actor from './actor.js'
// Listens for rhythm based commands and updates Actor class

var upKey;
var downKey;
var leftKey;
var rightKey;
var scene;
var comboCount = 0;
var up = false;
var down = false;
var right = false;
var left = false;

export default class Player extends Actor {
    constructor ({ scene, x, y, texture, frame, health }) {
        super({ scene, x, y, texture, frame, health });
        this.scene = scene;

    }

    create()
    {
      this.scene.input.keyboard.on('keydown-UP', function(event){
        console.log('yoy');
      });
      this.scene.input.keyboard.on('keydown-DOWN', function(event){
        console.log('yey');
      });
      this.scene.input.keyboard.on('keydown-LEFT', function(event){
        console.log('yry');
      });
      this.scene.input.keyboard.on('keydown-RIGHT', function(event){
        console.log('yay');
      });
    }

    update ()
    {
      if( comboCount == 5){
        console.log('advance');
        comboCount = 0;
      }
    }
}
