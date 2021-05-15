// Game level goes here.
//import Phaser from 'phaser'
import Player from './player.js'
import Npc from './npc.js'
import Hud from './hud.js'

// Shows level background.  Stretch goal: scroll side to side

export default class Bout extends Phaser.Scene {
    constructor (game) {
        super({key: 'Bout'});
        this.game = game;
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
        var asset=this.stewie;
        this.player = new Player({game, x, y, asset, health});
        x=600;
        asset = this.candy;
        this.npc = new Npc({game, x, y, asset, health});
        this.hud = new Hud({game: game, player: this.player, npc: this.npc});
    }

    create () 
    {
        // Load all assets here -- call out to actor to load the current player and enemy sprite sheets, hud for status
    }
    
    update ()
    {
        // Use actor for the animated figures.  Each player or npc has an actor.  This updates the player + npc.
    }
}
