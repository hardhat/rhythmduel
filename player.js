// Player character.
//import Actor from './actor.js'
// Listens for rhythm based commands and updates Actor class

class Player extends Actor {
    constructor ({ game, x, y, asset, frame, health }) {
        super({ game, x, y, asset, frame, health });
        
        this.game.input.onDown.add(() => {
            if(this.alive) {
                let {x,y} = this.game.input.activePointer.position;
                this.diff.x=x-this.position.x;
                this.diff.y=y-this.position.y;
            }
        });

        this.game.input.onUp.add(() => {
            if (this.alive) {
                this.frame = 1;
            }
        });
    }
   
    update ()
    {
        if(this.game.input,activePointer.isDown) {
            let { x, y } = this.game.input.activePointer.position;

            let left = x < this.lastPos.x;
            let right = x > this.lastPos.x;
            let diff = Math.abs(x - this.lastPos.x);

            this.position.x = x - this.diff.x;
            this.position.y = y - this.diff.y;

            if (this.position.x < 0.02 * this.game.world.width) {
                this.position.x = 0.02 * this.game.world.width;
            }

            if (this.position.x > 0.98 * this.game.world.width) {
                this.position.x = 0.98 * this.game.world.width;
            }

            if (this.position.y < 0.09 * this.game.world.height) {
                this.position.y = 0.09 * this.game.world.height;
            }

            if (this.position.y > 0.94 * this.game.world.height) {
                this.position.y = 0.94 * this.game.world.height;
            }

            if (diff > 3) {
                if (left) {
                    this.frame = 0;
                } else if (right) {
                    this.frame = 2;
                }
            } else {
                if (this.game.time.elapsedMS >= 16) {
                    this.frame = 1;
                }
            }

            this.lastPos.x = x;
            this.lastPos.y = y;
        }
    }
}