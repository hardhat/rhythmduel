// Actor class generically draws the state of a player/npc.

// Options from main menu: play, about (shows credits) as buttons.

export default class Actor extends Phaser.GameObjects.Sprite {
    constructor ({scene,x,y,texture,frame,health}) {
        console.log('The passed Bout scene object');
        console.log(scene);

        super(scene, x, y, texture, frame);

        this.scene = scene;
        // this.anchor.setTo(0,0);
        // this.scale.setTo(4);
        this.health=health;
        this.maxHealth=health;

        //this.scene.physics.arcade.enable(this);
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