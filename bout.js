// Game level goes here.

// Shows level background.  Stretch goal: scroll side to side

class MainMenu extends Phaser.Scene {
    constructor() {
        this.player = new Player();
        this.npc = new NPC();
        this.hud = new Hud();
    }

    create() 
    {
        // Load all assets here -- call out to actor to load the current player and enemy sprite sheets, hud for status
    }
    
    update ()
    {
        // Use actor for the animated figures.  Each player or npc has an actor.  This updates the player + npc.
    }
}