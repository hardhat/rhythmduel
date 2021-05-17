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
      this.scene.input.keyboard.on('keydown-UP', this.doUp, this);
      this.scene.input.keyboard.on('keydown-DOWN', this.doDown, this);
      this.scene.input.keyboard.on('keydown-LEFT', this.doLeft, this);
      this.scene.input.keyboard.on('keydown-RIGHT', this.doRight, this);
      this.scene.input.keyboard.on('keydown-W', this.doUp, this);
      this.scene.input.keyboard.on('keydown-S', this.doDown, this);
      this.scene.input.keyboard.on('keydown-A', this.doLeft, this);
      this.scene.input.keyboard.on('keydown-D', this.doRight, this);
      this.scene.input.keyboard.on('keydown-C', function(event) {
        console.log(this.comboCount);
        if(this.comboCount == 4){
          console.log(this.comboString);
          this.updatePatternHint();
        }
      }, this);

      this.createPaternHint();
    }

    doUp(event) {
        this.scene.showSyllable('do',this.comboString.length);
        this.comboCount += 1;
        this.comboString += "1";
        this.scene.syllable1.play();
        this.updatePatternHint();
    }

    doRight(event) {
        this.scene.showSyllable('wah',this.comboString.length);
        this.comboCount += 1;
        this.comboString += "2";
        this.scene.syllable2.play();
        this.updatePatternHint();
    }

    doDown(event) {
        this.scene.showSyllable('uhuh',this.comboString.length);
        this.comboCount += 1;
        this.comboString += "3";
        this.scene.syllable3.play();
        this.updatePatternHint();
    }

    doLeft(event) {
        this.scene.showSyllable('katta',this.comboString.length);
        this.comboCount += 1;
        this.comboString += "4";
        this.scene.syllable4.play();
        this.updatePatternHint();
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
          this.x += 75;
          this.scene.time.addEvent({ delay: 1000, callback: function() {
              this.sprite.play('stewieidle');
          }, callbackScope: this, loop: false });
          this.comboString = "";
        } else if(this.comboString == this.patterns[1]){
          console.log('attack punch');
          this.sprite.play('stewiepunch');
          this.sprite.flipX = true;
          console.log(this.x);
          console.log(this.scene.npc.x);
          console.log(this.scene.npc.x-this.x);
          if(this.scene.npc.x - this.x <= 100){
            console.log('hit');
            this.damage = 2;
            this.scene.npc.health -= this.damage;
            console.log(this.scene.npc.health);
          }
          this.scene.time.addEvent({ delay: 1000, callback: function() {
              this.sprite.play('stewieidle');
          }, callbackScope: this, loop: false });
          this.scene.npc.isAlive();
          this.comboString = "";
        } else if(this.comboString == this.patterns[2]){
          console.log('attack kick');
          this.sprite.play('stewiekick');
          this.sprite.flipX = true;
          if(this.scene.npc.x - this.x <= 100){
            console.log('hit');
            this.damage = 3;
            this.scene.npc.health -= this.damage;
            console.log(this.scene.npc.health);
          }
          this.scene.time.addEvent({ delay: 1000, callback: function() {
              this.sprite.play('stewieidle');
          }, callbackScope: this, loop: false });
          this.scene.npc.isAlive();
          this.comboString = "";
        } else if(this.comboString == this.patterns[3]){
          console.log('retreat');
          this.sprite.play('stewiewalk');
          this.sprite.flipX = false;
          this.x -= 75;
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
          this.scene.time.addEvent({ delay: 1000, callback: function() {
              this.sprite.play('stewieidle');
          }, callbackScope: this, loop: false });
        } else if(this.comboString == this.patterns[6]){
          console.log('jump kick');
          this.sprite.play('stewiejumpkick');
          this.sprite.flipX = true;
          if(this.scene.npc.x - this.x <= 100){
            console.log('hit');
            this.damage = 5;
            this.scene.npc.health -= this.damage;
            console.log(this.scene.npc.health);
          }
          this.scene.time.addEvent({ delay: 1000, callback: function() {
              this.sprite.play('stewieidle');
          }, callbackScope: this, loop: false });
          this.scene.npc.isAlive();
          this.comboString = "";
        } else {
          console.log('invalid input');
          this.sprite.play('stewieidle');
        }
    }

    update ()
    {

      if(this.comboCount == 4){
        this.patternCheck();
        console.log(this.comboString);
        this.comboCount = 0;
        this.comboString = "";
        this.updatePatternHint();
      }
    }

    createPaternHint()
    {
        this.scene.hintText = [];
        for(var i=0; i<6; i++) {
            this.addFancyText(550,100+i*24);
        }
    }

    addFancyText(x,y) {
        var text = this.scene.add.text(x,y,'',{font: "20px Arial Black", fill: "#fff"});
        text.setStroke('#00f', 5);
        text.setShadow(2,2,'#333333',2,true,true);
        this.scene.hintText.push(text);
    }

    stringToArrows(start) {
        var result="";

        var i;
        for(i=0; i<start.length; i++) {
            switch(start.substring(i,i+1)) {
                case '1':
                    result+='^';
                    break;
                case '2':
                    result+='>';
                    break;
                case '3':
                    result+='v';
                    break;
                case '4':
                    result+='<';
                    break;
                default:
                    result+='*';
                    break;
            }
        }

        return result;
    }

    stringToAction(start) {
        const actions = {
        '1112': 'advance',
        '1212': 'punch',
        '2121': 'kick',
        '2221': 'retreat',
        '3334': 'jump',
        '2424': 'duck',
        '4434': 'jumpkick',
        };

        return actions[start];
    }

    candidates()
    {
        const actions = [
            '1112',
            '1212',
            '2121',
            '2221',
            '3334',
            '2424',
            '4434',
        ];

        var result = [];

        if(this.comboString == '') return result;

        for(const key of actions) {
            if(this.comboString == key.substr(0,this.comboString.length)) {
                result.push(key);
            }
        }
        return result;
    }

    candidateCount()
    {
        return this.candidates().length;
    }

    updatePatternHint()
    {
        if(this.comboString == "") {
            this.scene.hintText.forEach(element => {
                element.text='';
            });
            return;
        }
        this.scene.hintText[0].text = 'Pattern';
        this.scene.hintText[1].text = ": " + this.stringToArrows(this.comboString);

        var i=2;
        if(this.candidates().length>0) {
            this.candidates().forEach(element => {
                this.scene.hintText[i].text = this.stringToArrows(element) + " " + this.stringToAction(element);
                i++;
            });
        }

        if(i==2) {
            i=0;
        }

        while(i<6) {
            this.scene.hintText[i++].text='';
        }
    }
}
