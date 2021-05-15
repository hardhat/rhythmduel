// Non-Player character.
//import Actor from './actor.js'
// Calculates AI and updates Actor class

export default class Npc extends Actor {
    constructor ({game,x,y,asset,frame,health}) {
        super({game,x,y,asset,frame,health});
    }

    
    update ()
    {
        // Update AI based movement of the NPC relative to the attacking player.
    }
}
