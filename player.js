// Player character.
import Actor from './actor.js'
// Listens for rhythm based commands and updates Actor class

export default class Player extends Actor {
    constructor ({ scene, sprite, x, y, health }) {
        super({ scene, sprite, x, y, health });
        this.sprite = sprite;
        this.scene = scene;
        this.x = x;
        this.y = y;
    }

    create()
    {
      this.comboCount = 0;
      this.comboString = "";
      this.damage = 0;
      this.scene.input.keyboard.on('keydown-UP', function(event) {
        console.log('key1');
        this.scene.showSyllable('do',this.comboString.length);
        this.comboCount += 1;
        this.comboString += "1";
        this.scene.syllable1.play();
      }, this);
      this.scene.input.keyboard.on('keydown-DOWN', function(event) {
        console.log('key3');
        this.scene.showSyllable('uhuh',this.comboString.length);
        this.comboCount += 1;
        this.comboString += "3";
        this.scene.syllable3.play();

      }, this);
      this.scene.input.keyboard.on('keydown-LEFT', function(event) {
        console.log('key4');
        this.scene.showSyllable('katta',this.comboString.length);
        this.comboCount += 1;
        this.comboString += "4";
        this.scene.syllable4.play();
      }, this);
      this.scene.input.keyboard.on('keydown-RIGHT', function(event) {
        console.log('key2');
        this.scene.showSyllable('wah',this.comboString.length);
        this.comboCount += 1;
        this.comboString += "2";
        this.scene.syllable2.play();
      }, this);
      this.scene.input.keyboard.on('keydown-C', function(event) {
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
          this.sprite.play('stewiewalk');
          this.sprite.flipX = true;
          this.scene.tweens.add({
              targets: this.sprite,
              x: this.sprite.x + 75,
              duration: 1000,
              delay: 0,
          });
          this.scene.time.addEvent({ delay: 1000, callback: function() {
              this.sprite.play('stewieidle');
          }, callbackScope: this, loop: false });
          this.comboString = "";
        } else if(this.comboString == this.patterns[1]){
          console.log('attack punch');
          this.sprite.play('stewiepunch');
          this.sprite.flipX = true;
          this.scene.time.addEvent({ delay: 1000, callback: function() {
              this.sprite.play('stewieidle');
          }, callbackScope: this, loop: false });
          this.comboString = "";
        } else if(this.comboString == this.patterns[2]){
          console.log('attack kick');
          this.sprite.play('stewiekick');
          this.sprite.flipX = true;
          this.scene.time.addEvent({ delay: 1000, callback: function() {
              this.sprite.play('stewieidle');
          }, callbackScope: this, loop: false });
          this.comboString = "";
        } else if(this.comboString == this.patterns[3]){
          console.log('retreat');
          this.sprite.play('stewiewalk');
          this.sprite.flipX = false;
          this.scene.tweens.add({
              targets: this.sprite,
              x: this.sprite.x - 75,
              duration: 1000,
              delay: 0,
          });
          this.scene.time.addEvent({ delay: 1000, callback: function() {
              this.sprite.play('stewieidle');
          }, callbackScope: this, loop: false });
          this.comboString = "";
        } else if(this.comboString == this.patterns[4]){
          console.log('shield');
          this.sprite.play('stewieshield');
          this.sprite.flipX = true;
          this.scene.time.addEvent({ delay: 1000, callback: function() {
              this.sprite.play('stewieidle');
          }, callbackScope: this, loop: false });
          this.comboString = "";
        } else if(this.comboString == this.patterns[5]){
          console.log('duck punch');
          this.sprite.play('stewiejump');
          this.sprite.flipX = true;
          this.comboString = "";
        } else if(this.comboString == this.patterns[6]){
          console.log('jump kick');
          this.sprite.play('stewiejumpkick');
          this.sprite.flipX = true;
          this.comboString = "";
        } else {
          console.log('invalid input');
          this.sprite.play('stewieidle');
        }
    }

    update ()
    {
      //console.log(this.x);
      //console.log(this.scene.npc.checkHit(this.x,this.y));
      if(this.scene.npc.checkHit(this.x,this.y)){
        this.damage = 3;
        console.log(this.damage);
      } /*else if(this.scene.npc.checkHit(this.x,this.y)){
        this.damage = 5;
        console.log(this.damage);
      } else if(this.scene.npc.checkHit(this.x,this.y)){
        this.damage = 2;
        console.log(this.damage);
      }*/
      if(this.comboCount == 4){
        this.patternCheck();
        console.log(this.comboString);
        this.comboCount = 0;
        this.comboString = "";
      }
    }
}
