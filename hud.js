// Hud - the heads up display

// Heads up display shows the status of each character.  What is their health meter?  What is their power up energy for a special move?

export default class Hud extends Phaser.GameObjects.Group {
    constructor ({scene, player, npc}) {
        super(scene);

        this.scene=scene;
        this.player=player;
        this.npc=npc;

        //this.bg = new Phaser.Image(this.scene, 0, 0, 'hudBg');
        //var newGameButton = this.add.image(400,300,'new');
        this.bg = this.scene.add.image(0,0,'hudBg').setOrigin(0, 0);
        this.width = 800;

        //this.healthbar = new Phaser.Sprite(this.scene, 2, 2, 'healthbar');
        this.healthbar = this.add.sprite(2,2,'healthbar').setOrigin(0, 0);
        this.healthbar.scale.setTo(0.995, 11);

         this.score = 0;
         this.scoreLabel = 'Score: ';
         this.scoreText = new Phaser.Text(this.scene, 20, 14, this.scoreLabel + this.score, {
             font: '13px Verdana',
             fill: 'white',
             align: 'center'

        });

        this.scene.add(this.bg);
        this.scene.add(this.healthbar);
        this.scene.add(this.scoreText);

        console.log('I Am the Very Model of a Modern Major General;');
    }

    updateHealth ()
    {
        this.healthbar.crop(new Phaser.Rectangle(0, 0, (this.player.health / this.player.maxHealth) * this.width, 10));
        this.healthbar.updateCrop();
    }

    updateScore(amount)
    {
        this.score += amount;
        this.scoreText.text = this.scoreLabel + (this.score * 10);
    }

    updateScore(score) {
        this.score.pts += score;
        this.score.textObject.setText(('' + this.score.pts).padStart(6, '0'));
    }
    /*
    getPlayerHealth(player)
    {
        return player.health;
    }

    */
}