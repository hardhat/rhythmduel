// Player character.
import Actor from './actor.js'
// Listens for rhythm based commands and updates Actor class

export default class Player extends Actor {
    constructor ({ scene, sprite, x, y, health }) {
        super({ scene, sprite, x, y, health });

        this.scene = scene;
        this.scene.load.audio('1', [ 'assets/syllables/DO_woman.wav', 'assets/syllables/DO_woman.mp3', 'assets/syllables/DO_woman.ogg' ]);
        this.scene.load.audio('2', [ 'assets/syllables/WAH_woman.wav', 'assets/syllables/WAH_woman.mp3', 'assets/syllables/WAH_woman.ogg' ]);
        this.scene.load.audio('3', [ 'assets/syllables/UHUH_woman.wav', 'assets/syllables/WAH_woman.mp3', 'assets/syllables/WAH_woman.ogg' ]);
        this.scene.load.audio('4', [ 'assets/syllables/KATTA_woman.wav', 'assets/syllables/WAH_woman.mp3', 'assets/syllables/WAH_woman.ogg' ]);
    }

    create()
    {
      var syllable1 = this.scene.sound.add('1');
      var syllable2 = this.scene.sound.add('2');
      var syllable3 = this.scene.sound.add('3');
      var syllable4 = this.scene.sound.add('4');
      console.log('Do Wa Uhuh Katta');

      this.comboCount = 0;
      this.comboString = "";
      this.scene.input.keyboard.on('keydown-UP', function(event){
        console.log('key1');
        this.comboCount += 1;
        this.comboString += "1";
        console.log("Do");
        syllable1.play();
      }, this);
      this.scene.input.keyboard.on('keydown-DOWN', function(event){
        console.log('key3');
        this.comboCount += 1;
        this.comboString += "3";
        console.log("Wa");
        syllable2.play();
      }, this);
      this.scene.input.keyboard.on('keydown-LEFT', function(event){
        console.log('key4');
        this.comboCount += 1;
        this.comboString += "4";
        console.log("Uhuh");
        syllable3.play();
      }, this);
      this.scene.input.keyboard.on('keydown-RIGHT', function(event){
        console.log('key2');
        this.comboCount += 1;
        this.comboString += "2";
        console.log("Katta");
        syllable4.play();
      }, this);
      this.scene.input.keyboard.on('keydown-C', function(event){
        console.log(this.comboCount);
        if(this.comboCount == 4){
          console.log(this.comboString);
        }
      }, this);
      this.scene.input.keyboard.on('keydown-SPACE', function () {
          console.log("Quiet.");
          this.scene.sound.stopAll();
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
