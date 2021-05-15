
//import Phaser from './dist/phaser-arcade-physics.min.js'
import Bout from './bout.js'
import MainMenu from './mainmenu.js'

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [MainMenu, Bout]
}

const game = new Phaser.Game(config);
