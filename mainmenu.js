// Main menu goes here.
//import Phaser from 'dist/phaser-arcade-physics.min.js'

// Options from main menu: play, about (shows credits) as buttons.

class MainMenu extends Phaser.State {
    constructor() {
        super();

        this.gamemode = false;
    }

	preload () {
        this.load.image('menu','assets/menu/menu.png');
	}

    create ()  {
        this.add.image(0, 0, 'menu').setOrigin(0, 0);
    }
    
    update () {
        return;
    }
}
