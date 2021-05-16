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
        this.load.image('platform', 'assets/example/platform.png');
        this.load.image('star', 'assets/example/star.png');

        this.stewie = this.load.spritesheet('stewie', 'assets/sprites/stewie.png', { frameWidth: 48, frameHeight: 48 });
        this.candy = this.load.spritesheet('candy', 'assets/sprites/candy.png', { frameWidth: 48, frameHeight: 48 });
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
        this.player = this.add.sprite(200,400);
        this.player.setScale(4);
        this.player.play('stewieidle');

        this.createAnim('candy');
        this.npc = this.add.sprite(600,400);
        this.npc.setScale(4);
        this.npc.play('candyidle');
        
        var x=200;
        var y=400;
        var health=30;

        this.player = new Player({scene:this, sprite: this.playerSprite, x: x, y: y, health: health});
        x=600;
        this.npc = new Npc({scene: this, sprite: this.npcSprite, x:x, y:y, health: health});
        this.hud = new Hud({scene: this, player: this.player, npc: this.npc});

        this.player.create();
    }

    update ()
    {
      this.player.update();
        // Use actor for the animated figures.  Each player or npc has an actor.  This updates the player + npc.
    }

}
