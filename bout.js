// Game level goes here.
//import Phaser from 'phaser'
import Player from './player.js'
import Npc from './npc.js'
import Hud from './hud.js'

// Shows level background.  Stretch goal: scroll side to side

export default class Bout extends Phaser.Scene {
    constructor () {
        super('Bout');
    }

    preload ()
    {
        this.load.image('sky', 'assets/example/sky.png');

        this.load.image('syllable-do','assets/hud/syllable-do.png');
        this.load.image('syllable-wah','assets/hud/syllable-wah.png');
        this.load.image('syllable-uhuh','assets/hud/syllable-uhuh.png');
        this.load.image('syllable-katta','assets/hud/syllable-katta.png');

        this.stewie = this.load.spritesheet('stewie', 'assets/sprites/stewie.png', { frameWidth: 48, frameHeight: 48 });
        this.candy = this.load.spritesheet('candy', 'assets/sprites/candy.png', { frameWidth: 48, frameHeight: 48 });

        this.load.image('healthbar', 'assets/hud/healthbar.png');
        this.load.image('hudBg', 'assets/hud/hud-bg.png');

        this.load.audio('1', [ 'assets/syllables/DO_woman.wav', 'assets/syllables/DO_woman.mp3', 'assets/syllables/DO_woman.ogg' ]);
        this.load.audio('2', [ 'assets/syllables/WAH_woman.wav', 'assets/syllables/WAH_woman.mp3', 'assets/syllables/WAH_woman.ogg' ]);
        this.load.audio('3', [ 'assets/syllables/UHUH_woman.wav', 'assets/syllables/WAH_woman.mp3', 'assets/syllables/WAH_woman.ogg' ]);
        this.load.audio('4', [ 'assets/syllables/KATTA_woman.wav', 'assets/syllables/WAH_woman.mp3', 'assets/syllables/WAH_woman.ogg' ]);
    }

    createAnim(texture)
    {
        var name = texture;
        // Animation set
        this.anims.create({
            key: name+'walk',
            frames: this.anims.generateFrameNumbers(name, { frames: [ 0, 1, 2, 3 ] }),
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: name+'idle',
            frames: this.anims.generateFrameNumbers(name, { frames: [ 5, 6, 7, 8 ] }),
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: name+'kick',
            frames: this.anims.generateFrameNumbers(name, { frames: [ 10, 11, 12, 13, 10 ] }),
            frameRate: 8,
            repeat: -1,
            repeatDelay: 2000
        });

        this.anims.create({
            key: name+'punch',
            frames: this.anims.generateFrameNumbers(name, { frames: [ 15, 16, 17, 18, 17, 15 ] }),
            frameRate: 8,
            repeat: -1,
            repeatDelay: 2000
        });

        this.anims.create({
            key: name+'jump',
            frames: this.anims.generateFrameNumbers(name, { frames: [ 20, 21, 22, 23 ] }),
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: name+'jumpkick',
            frames: this.anims.generateFrameNumbers(name, { frames: [ 20, 21, 22, 23, 25, 23, 22, 21 ] }),
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: name+'win',
            frames: this.anims.generateFrameNumbers(name, { frames: [ 30, 31 ] }),
            frameRate: 8,
            repeat: -1,
            repeatDelay: 2000
        });

        this.anims.create({
            key: name+'die',
            frames: this.anims.generateFrameNumbers(name, { frames: [ 35, 36, 37 ] }),
            frameRate: 8,
        });

        const keys = [ 'walk', 'idle', 'kick', 'punch', 'jump', 'jumpkick', 'win', 'die' ];
    }

    create ()
    {
        this.add.image(0, 0, 'sky').setOrigin(0, 0);

        this.createAnim('stewie');
        this.playerSprite = this.add.sprite(200,400);
        this.playerSprite.setScale(4);
        this.playerSprite.play('stewieidle');
        this.playerSprite.flipX = true;

        this.createAnim('candy');
        this.npcSprite = this.add.sprite(600,400);
        this.npcSprite.setScale(4);
        this.npcSprite.play('candyidle');

        var x=200;
        var y=400;
        var health=30;

        this.player = new Player({scene:this, sprite: this.playerSprite, x: x, y: y, health: health});
        x=600;
        this.npc = new Npc({scene: this, sprite: this.npcSprite, x:x, y:y, health: health});
        this.hud = new Hud({scene: this, player: this.player, npc: this.npc});

        this.createSounds();
        this.player.create();
        this.hud.create();
    }

    createSounds() {
        this.syllable1 = this.sound.add('1');
        this.syllable2 = this.sound.add('2');
        this.syllable3 = this.sound.add('3');
        this.syllable4 = this.sound.add('4');
        console.log('Do Wa Uhuh Katta');

        this.input.keyboard.on('keydown-SPACE', function () {
            console.log("Quiet.");
            this.sound.stopAll();
        }, this);
    }

    showSyllable(syllable,pos) {
        const posArray = [{x: 150,y: 300},{x:200,y:350},{x:150,y:300},{x:200,y:350}];

        var popup = this.add.sprite(posArray[pos].x, posArray[pos].y, 'syllable-'+syllable);

        this.tweens.add({
            targets: popup,
            y: 75,
            alpha: 0.05,
            duration: 1200,
            delay: 400
        });
        this.time.addEvent({ delay: 2000, callback: function() {
            popup.destroy();
        }, callbackScope: this, loop: false });
    }

    update ()
    {
      this.player.update();
      // Use actor for the animated figures.  Each player or npc has an actor.  This updates the player + npc.
      this.hud.update();
    }

}
