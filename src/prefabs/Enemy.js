class Enemy extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame/*, speechBubble*/) {
        super(scene, x, y, texture, frame/*, speechBubble*/);

        //Add object to existing scene
        scene.add.existing(this);

        //Enemy Speed (divided by 5 to slow them down a bit)
        this.mvmtX = 15 / 5;
        this.mvmtY = 5.5 / 5;

        // scene.load.image('speechBubble', '../../assets/Speech_Bubble.png');
        // this.speechBubble = scene.add.sprite(150, 100, this.x-120, this.y-80, 'speechBubble').setOrigin(0,0);
        // this.speechBubble = speechBubble;
        this.insultTextConfig = { fontFamily: 'Helvetica', fontSize: '20px', backgroundColor: '#FFFFFF00', color: '#FFFFFF', align: 'left' };
        this.enemyInsult = scene.add.text(this.x, this.y-20, this.genInsult(), this.insultTextConfig).setOrigin(0.5,0);
        this.enemyInsult.alpha = 0;
       // this.speechBubble.alpha = 0;
    }

    // preload() {
    //     this.load.path = './assets/';
    //     this.load.image('speechBubble', 'Speech_Bubble.png')
    // }

    genInsult() {
        let insults = ['HEY, watch it buddy!', 'BRO?!', 'seriously...', '*hard sigh*', '&%$#%$#!!!', '???']; //feel free to add more phrases
        let rndInsult = insults[Math.floor(Math.random()*insults.length)];
        return rndInsult;
    }

    displayInsult() {
        // this.speechBubble.alpha = 1;
        this.enemyInsult.alpha = 1;    
    }

    destroyInsult() {
        // this.speechBubble.destroy();
        this.enemyInsult.destroy();
    }

    update() {
        //Move Enemy
        this.x -= this.mvmtX;
        this.y += this.mvmtY;

        //Move Speech Bubble
        // this.speechBubble.x -= this.mvmtX;
        // this.speechBubble.y += this.mvmtY;

        //Move Insult text
        this.enemyInsult.x -= this.mvmtX;
        this.enemyInsult.y += this.mvmtY;

    }
}