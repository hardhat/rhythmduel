// Game level goes here.
//import Phaser from 'phaser'
//import Player from './player.js'
//import Npc from './npc.js'
//import Hud from './hud.js'

// Shows level background.  Stretch goal: scroll side to side

class Bout extends Phaser.State {
    constructor () {
        super();

        this.player = new Player();
        this.npc = new Npc();
        this.hud = new Hud();
    }

    preload ()
    {
        this.load.image('sky', 'assets/example/sky.png');
        this.load.image('platform', 'assets/example/platform.png');
        this.load.image('star', 'assets/example/star.png');
        
        this.load.spritesheet('stewie', 'assets/sprites/stewie.png', { frameWidth: 48, frameHeight: 48 });
        this.load.spritesheet('candy', 'assets/sprites/candy.png', { frameWidth: 48, frameHeight: 48 });
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
