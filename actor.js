// Actor class generically draws the state of a player/npc.

// Options from main menu: play, about (shows credits) as buttons.

class Actor extends Phaser.Sprite {
    constructor ({game,x,y,asset,frame,health}) {
        super(game, x, y, asset, frame);

        this.game = game;
        this.anchor.setTo(0,0);
        this.scale.setTo(4);
        this.health=heath;
        this.maxHealth=health;

        this.game.physics.arcade.enable(this);
        this.lastPos={x,y};
        this.diff={x:0, y:0};
        // this.attacks = this.game.add.group();
        // this.attacks.enableBody = true;
        // this.attackSpeed = 500;
    }

    update()
    {
        // Animation events both the player sprite and any attack particle event. 
    }
}