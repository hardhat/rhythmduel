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

    checkHit(){
      
    }


    update ()
    {
        // Update AI based movement of the NPC relative to the attacking player.
    }
}
