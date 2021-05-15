// Main menu goes here.
//import Phaser from 'dist/phaser-arcade-physics.min.js'

// Options from main menu: play, about (shows credits) as buttons.

export default class MainMenu extends Phaser.Scene {
    constructor() {
        super('MainMenu');

        this.gamemode = false;
    }

	preload () {
        this.load.image('menu','assets/menu/menu.png');
        this.load.image('about', 'assets/menu/Button_About.png');
        this.load.image('rules', 'assets/menu/Button_Rules.png');
        this.load.image('new', 'assets/menu/Button_New.png');
        this.load.image('history', 'assets/menu/Button_History.png');
        this.load.image('dog', 'assets/menu/dog.png');
        this.load.image('goat', 'assets/menu/goatonapole.jpg');
        this.load.image('back', 'assets/menu/Button_Back.png');
        this.load.image('team', 'assets/menu/Button_GOAT.png');
        this.load.image('tojam', 'assets/menu/Button_ToJam.png');
        this.load.image('credits', 'assets/menu/credits.png');

    }

    create ()  {
        this.add.image(0, 0, 'menu').setOrigin(0, 0);

        // Should be replaced with gameObject.setInteractive(shape,callback) for buttons.
        this.input.on('pointerup', function(pointer) {
            var touchX = pointer.x;
            var touchY = pointer.y;

            this.scene.start('Bout');
        }, this);
    }

    update () {
        return;
    }

}
