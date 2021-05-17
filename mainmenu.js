// Main menu goes here.

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

        this.load.audio('1', [ 'assets/syllables/DO_woman.wav', 'assets/syllables/DO_woman.mp3', 'assets/syllables/DO_woman.ogg' ]);
        this.load.audio('2', [ 'assets/syllables/WAH_woman.wav', 'assets/syllables/WAH_woman.mp3', 'assets/syllables/WAH_woman.ogg' ]);
        this.load.audio('3', [ 'assets/syllables/UHUH_woman.wav', 'assets/syllables/WAH_woman.mp3', 'assets/syllables/WAH_woman.ogg' ]);
        this.load.audio('4', [ 'assets/syllables/KATTA_woman.wav', 'assets/syllables/WAH_woman.mp3', 'assets/syllables/WAH_woman.ogg' ]);
    }

    create ()  {
        this.normalButtonList = [];
        /* add buttons to list */
        this.add.image(0, 0, 'menu').setOrigin(0, 0); /* sets upper left corner of image to UL of game */
        var newGameButton = this.add.image(400,300,'new');
        newGameButton.setInteractive(); /* makes button clickable */
        newGameButton.on('clicked', function(item) {
            this.scene.start('Bout'); /* actually starts battle */
        },this);
        this.normalButtonList.push(newGameButton); /* puts button in list of buttons */
        
        var aboutButton = this.add.image(100,475,'about'); /* adds button to lower left */
        aboutButton.setInteractive();
        aboutButton.on('clicked', function(item) {
            this.hideNormalButtons();

            var aboutWindow = this.add.image(400,300,'credits'); /* shows the fox. Anchor is center of image. in center of screen. */
            aboutWindow.setInteractive();
            aboutWindow.on('clicked',this.deleteItem,this);
        },this); /* end of .on('clicked') */
        this.normalButtonList.push(aboutButton);



        var jamButton = this.add.image(700,475,'tojam'); // adds button to lower right. 
        jamButton.setInteractive();
        console.log("before");
        jamButton.on('clicked',function(item) {
            this.hideNormalButtons();
            console.log("middle");
         /*   
            /*jamButton.on('pointerup', openExternalLink, this);
             
            console.log("after");*/
        }, this);
/*
        function openExternalLink ()
        {
            var url = 'https://tojam.ca';
            console.log("open");

            var s = window.open(url, '_blank')
            
           if (s && s.focus)
            {
                s.focus();
            }
            else if (!s)
            {
                window.location.href = url;
            } 
        };*/


        //  If a Game Object is clicked on, this event is fired.
        //  We can use it to emit the 'clicked' event on the game object itself.
        this.input.on('gameobjectup', function (pointer, gameObject)
        {
            gameObject.emit('clicked', gameObject);
        }, this); 

        this.createSounds();
    }

    hideNormalButtons() { /* hides and deactivates normal buttons */
        this.normalButtonList.forEach(button => {
            button.setVisible(false);
            button.input.enabled = false;
        });
    }

    showNormalButtons() { /* resets normal buttons */
        this.normalButtonList.forEach(button => {
            button.setVisible(true);
            button.input.enabled = true;
        });
    }

    deleteItem(item) { /* deletes passed in object and resets to normal */
        item.off('clicked',this.deleteItem);
        item.input.enabled = false;
        item.setVisible(false);
        this.showNormalButtons();
    }

    createSounds() {
        var syllable1 = this.sound.add('1');
        var syllable2 = this.sound.add('2');
        var syllable3 = this.sound.add('3');
        var syllable4 = this.sound.add('4');
        console.log('Do Wa Uhuh Katta');
    
        this.input.keyboard.on('keydown-SPACE', function () {
            console.log("Quiet.");
            this.sound.stopAll();
        }, this);
    
        this.input.keyboard.on('keydown-A', function () {
            console.log("Do");
            syllable1.play();
        }, this);
    
        this.input.keyboard.on('keydown-W', function () {
            console.log("Wa");
            syllable2.play();
        }, this);
    
        this.input.keyboard.on('keydown-S', function () {
            console.log("Uhuh");
            syllable3.play();
        }, this);
    
        this.input.keyboard.on('keydown-D', function () {
            console.log("Katta");
            syllable4.play();
        }, this);
    }

    update () {
        return;
    }

}
