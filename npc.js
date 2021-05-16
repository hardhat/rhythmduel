// Non-Player character.
import Actor from './actor.js'
// Calculates AI and updates Actor class

export default class Npc extends Actor {
    constructor ({scene,sprite,x,y,health}) {
        super({scene,sprite,x,y,health});
    }

    create(){
      this.hitboxX = this.sprite.x;
      this.hitboxY = this.sprite.y;
      this.hitboxXT = this.sprite.x + 20;
      this.hitboxYT = this.sprite.y + 20;
    }

    checkHit(x,y){
        this.any_collision = false;
        this.x_overlaps = (x < this.hitboxXT && x + 20 > this.hitboxX);
        this.y_overlaps = (y < this.hitboxYT && y + 20 > this.hitboxY);
        this.Collision = this.x_overlaps && this.y_overlaps;
        if(this.Collision){
            this.any_collision = true;
        }
        if(this.any_collision){
            return true;
        }
        return false;
    }


    update ()
    {
        // Update AI based movement of the NPC relative to the attacking player.
    }
}
