// Hud - the heads up display

// Heads up display shows the status of each character.  What is their health meter?  What is their power up energy for a special move?

class Hud extends Phaser.Group {
    constructor ({game, player, npc}) {
        super(game);

        this.game=game;
        this.player=player;
        this.npc=npc;

        // this.bg = new Phaser.Image(this.game, 0, 0, 'hudBg');
        // this.width = 800;
        // this.healthbar = new Phaser.Sprite(this.game, 2, 2, 'healthbar');
        // this.healthbar.scale.setTo(0.995, 11);

        // this.score = 0;
        // this.scoreLabel = 'Score: ';
        // this.scoreText = new Phaser.Text(this.game, 20, 14, this.scoreLabel + this.score, {
        //     font: '13px Verdana',
        //     fill: 'white',
        //     align: 'center'

        // });

        // this.add(this.bg);
        // this.add(this.healthbar);
        // this.add(this.scoreText);
    }

    updateHealth ()
    {
        // this.healthbar.crop(new Phaser.Rectangle(0, 0, (this.player.health / this.player.maxHealth) * this.width, 10));
        // this.healthbar.updateCrop();
    }

    updateScore(amount)
    {
        // this.score += amount;
        // this.scoreText.text = this.scoreLabel + (this.score * 10);
    }
}