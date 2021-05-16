// Non-Player character.
import Actor from './actor.js'
// Calculates AI and updates Actor class

export default class Npc extends Actor {
    constructor ({scene,sprite,x,y,health}) {
        super({scene,sprite,x,y,health});
    }

    
    update ()
    {
        // Update AI based movement of the NPC relative to the attacking player.
    }
}
