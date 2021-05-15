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

        var x=200;
        var y=400;
        var health=30;

        this.player = new Player({scene:this, x: x, y: y, texture: this.stewie, frame:1, health: health});
        x=600;
        this.npc = new Npc({scene:this, x:x, y:y, texture: this.candy, frame:1, health: health});
        this.hud = new Hud({scene: this, player: this.player, npc: this.npc});
    }

    create ()
    {
        this.add.image(0, 0, 'sky').setOrigin(0, 0);
        this.add.sprite(200, 400, this.player);
        this.add.sprite(600, 400, this.npc);
        this.player.create();
    }

    update ()
    {
      this.player.update();
        // Use actor for the animated figures.  Each player or npc has an actor.  This updates the player + npc.
    }
}
