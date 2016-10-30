var game = new Phaser.Game(890, 580, Phaser.AUTO, 'frame', {
    preload: preload,
    create: create,
    update: update
});

var emitter;
var bonusVideo;

var assets = [
    'A',
    '9',
    'Dragon_StickyWild',
    'envelope',
    'j',
    'Fan_Symbol',
    'Panda_Scatter',
    'q',
    'k',
    '99'
];

var gamefile = {
    "gamefile": {
        "bonusactivated": "true",
        "Symbols": ["A","9","envelope","Dragon_StickyWild","j","Fan_Symbol","Panda_Scatter","q","q","k","99","Panda_Scatter","j","k","Panda_Scatter"
        ]
    }
}



var jolly = 'parrot';

var paylines = [
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
    [2, 2, 2, 2, 2],
    [0, 1, 2, 1, 0],
    [2, 1, 0, 1, 2],
    [0, 0, 1, 0, 0],
    [2, 2, 1, 2, 2],
    [1, 0, 0, 0, 1],
    [1, 2, 2, 2, 1],
    [1, 0, 1, 0, 1],
    [1, 2, 1, 2, 1],
    [0, 1, 0, 1, 0],
    [2, 1, 2, 1, 2],
    [1, 1, 0, 1, 1],
    [1, 1, 2, 1, 1],
    [0, 1, 1, 1, 0],
    [2, 1, 1, 1, 2],
    [0, 1, 2, 2, 2],
    [2, 1, 0, 0, 0],
    [0, 2, 0, 2, 0],
    [2, 0, 2, 0, 2],
    [1, 0, 2, 0, 1],
    [1, 2, 0, 2, 1],
    [0, 0, 1, 2, 2],
    [2, 2, 1, 0, 0]
];

var reels;
var graphics;
var creditsText;
var scoreText;
var reelStop;
var music;
var winning;
var ckImage;

var credits = 1000;
var spinning = false;
var repeatCounter = 0;

// Symbol class

var Symbol = function(game, x, y, key, index) {
    Phaser.Sprite.call(this, game, x, y, key);
    this.scale.set(0.5);
    this.index = index;
    this.tweenY = this.y;
    this.solidID = 1;

    
};

Symbol.prototype = Object.create(Phaser.Sprite.prototype);
Symbol.prototype.constructor = Symbol;

Symbol.prototype.update = function() {
    this.y = this.tweenY % 1500;

    var middle = 600;
    var range = 130;
    if (this.y < middle - range) this.alpha = 1.0 - (middle - range - this.y) * 0.005;
    else if (this.y > middle + range) this.alpha = 1.0 - (this.y - middle - range) * 0.005;
    else this.alpha = 1.0;
};

var ff = []

Symbol.prototype.spin = function(rand) {






    this.tweenY = this.y;

    var target = this.tweenY + 500;
    var start = game.add.tween(this).to({ tweenY: target }, 300, Phaser.Easing.Back.In, false, this.index * 200);
    var calv = game.add.tween(this).to({ tweenY: 800 }, 300, Phaser.Easing.Back.In, false, this.index * 200);

    var offset = 1700 + (this.index * 1800);
    target += offset + (rand * 150);
    var mid = game.add.tween(this).to({ tweenY: target }, offset / 3, Phaser.Easing.Linear.InOut);

    target += 500;
    var end = game.add.tween(this).to({ tweenY: target }, 300, Phaser.Easing.Back.Out);

    var isFirst = this.index == 0;
    var isNext1 = this.index == 1;
    var isNext2 = this.index == 2;
    var isNext3 = this.index == 3;
    var isLast = this.index == 4;

    var sym = this
    var thesym

    finalArray.push(this)

 
    mid.onComplete.add(function() {

        setTimeout(function() {
            if (isFirst) {

                


                if (Math.floor(sym.y) >= 400 && Math.floor(sym.y) <= 500 && sym.index == 0) {
                    sym.loadTexture(gamefile.gamefile.Symbols[0], 0)
                    sym.key = gamefile.gamefile.Symbols[0]
                }
                if (Math.floor(sym.y) >= 600 && Math.floor(sym.y) <= 700 && sym.index == 0) {
                    sym.loadTexture(gamefile.gamefile.Symbols[1], 0)
                    sym.key = gamefile.gamefile.Symbols[1]
                }
                if (Math.floor(sym.y) >= 750 && Math.floor(sym.y) <= 800 && sym.index == 0) {
                    sym.loadTexture(gamefile.gamefile.Symbols[2], 0)
                    sym.key = gamefile.gamefile.Symbols[2]
                }

            }

            if (isNext1) {

                if (Math.floor(sym.y) >= 400 && Math.floor(sym.y) <= 500 && sym.index == 1) {
                    sym.loadTexture(gamefile.gamefile.Symbols[3], 0)
                    sym.key = gamefile.gamefile.Symbols[3]
                }
                if (Math.floor(sym.y) >= 600 && Math.floor(sym.y) <= 700 && sym.index == 1) {
                    sym.loadTexture(gamefile.gamefile.Symbols[4], 0)
                    sym.key = gamefile.gamefile.Symbols[4]
                }
                if (Math.floor(sym.y) >= 750 && Math.floor(sym.y) <= 800 && sym.index == 1) {
                    sym.loadTexture(gamefile.gamefile.Symbols[5], 0)
                    sym.key = gamefile.gamefile.Symbols[5]
                }

            }

            if (isNext2) {

                
             
                if (Math.floor(sym.y) >= 400 && Math.floor(sym.y) <= 500 && sym.index == 2) {
                    sym.loadTexture(gamefile.gamefile.Symbols[6], 0)
                    sym.key = gamefile.gamefile.Symbols[6]
                }
                if (Math.floor(sym.y) >= 600 && Math.floor(sym.y) <= 700 && sym.index == 2) {
                    sym.loadTexture(gamefile.gamefile.Symbols[7], 0)
                    sym.key = gamefile.gamefile.Symbols[7]
                }
                if (Math.floor(sym.y) >= 750 && Math.floor(sym.y) <= 800 && sym.index == 2) {
                    sym.loadTexture(gamefile.gamefile.Symbols[8], 0)
                    sym.key =gamefile.gamefile.Symbols[8]
                }

            }

            if (isNext3) {

                
                if (Math.floor(sym.y) >= 400 && Math.floor(sym.y) <= 500 && sym.index == 3) {
                    sym.loadTexture(gamefile.gamefile.Symbols[9], 0)
                    sym.key = gamefile.gamefile.Symbols[9]
                }
                if (Math.floor(sym.y) >= 600 && Math.floor(sym.y) <= 700 && sym.index == 3) {
                    sym.loadTexture(gamefile.gamefile.Symbols[10], 0)
                    sym.key = gamefile.gamefile.Symbols[10]
                }
                if (Math.floor(sym.y) >= 750 && Math.floor(sym.y) <= 800 && sym.index == 3) {
                    sym.loadTexture(gamefile.gamefile.Symbols[11], 0)
                    sym.key = gamefile.gamefile.Symbols[11]
                }

            }

            if (isLast) {

             
                if (Math.floor(sym.y) >= 400 && Math.floor(sym.y) <= 500 && sym.index == 4) {
                    sym.loadTexture(gamefile.gamefile.Symbols[12], 0)
                    sym.key = gamefile.gamefile.Symbols[12]
                }
                if (Math.floor(sym.y) >= 600 && Math.floor(sym.y) <= 700 && sym.index == 4) {
                    sym.loadTexture(gamefile.gamefile.Symbols[13], 0)
                    sym.key = gamefile.gamefile.Symbols[13]
                }
                if (Math.floor(sym.y) >= 750 && Math.floor(sym.y) <= 800 && sym.index == 4) {
                    sym.loadTexture(gamefile.gamefile.Symbols[14], 0)
                    sym.key = gamefile.gamefile.Symbols[14]
                }

            }
        }, 180);



        // sym.loadTexture('einstein', 0)
        //  sym.key = '9'

    })
    end.onComplete.add(function() {
        // if (this.y == 600 && this.index == 4) {
        //      console.log("top")

        // }

        reelStop.play();


        


        if (isLast) {


            game.time.events.add(100, checkResults);

        }


    });

    start.chain(mid, end);
    start.start();
    
};

// Reel class
var finalArray = []
var symcount = 0;
var Reel = function(game, index) {
    Phaser.Group.call(this, game);


    // Fisher-Yates
    for (var i = assets.length - 1; i > 0; i--) {

        var j = game.rnd.integerInRange(0, i);
        var temp = assets[j];
        assets[j] = assets[i];
        assets[i] = temp;
    }

    for (var i = 0; i < assets.length; i++) {
        this.add(new Symbol(game, index * 168, i * 150, assets[i], index));
        // console.log(new Symbol(game, index*168, i*150, assets[i], index))
        finalArray.push(new Symbol(game, index * 168, i * 150, assets[i], index))
    }
};

Reel.prototype = Object.create(Phaser.Group.prototype);
Reel.prototype.constructor = Reel;

Reel.prototype.spin = function(rand) {
    this.forEach(function(symbol) {

        symbol.spin(rand);
    });
};

// Line Graphics class

var Line = function(game) {
    Phaser.Graphics.call(this, game);
    this.filters = [game.add.filter('Glow')];
    this.lines = [];
    this.drawing = false;
    this.perc = 0;
    this.all = false;
    this.index = 0;
    this.lastPos = [];
};

Line.prototype = Object.create(Phaser.Graphics.prototype);
Line.prototype.constructor = Line;

Line.prototype.update = function() {
    if (this.drawing && this.lines.length > 0) {
        if (this.all) {
            if (this.perc <= 1) {
                for (var i = 0; i < this.lines.length; i++) {
                    this.drawSingleLine(i);
                }
                this.perc += game.time.physicsElapsed * 0.5;
            } else {
                this.all = false;
                this.perc = 0;
                this.clear();
            }
        } else {
            if (this.perc <= 1) {
                this.drawSingleLine(this.index % this.lines.length);
                this.perc += game.time.physicsElapsed * 0.5;
            } else {
                this.index++;
                this.perc = 0;
                this.clear();
            }
        }
    }
};

Line.prototype.drawLines = function() {
    this.drawing = true;
    this.perc = 0;
    this.all = true;
    this.index = 0;
    this.lastPos = [];
    this.clear();
};

Line.prototype.stopDrawing = function() {
    this.drawing = false;
    this.clear();
};

Line.prototype.drawSingleLine = function(index) {
    if (this.perc == 0) this.lastPos[index] = { x: this.lines[index].x[0], y: this.lines[index].y[0] };

    this.moveTo(this.lastPos[index].x, this.lastPos[index].y);

    if (this.lines[index].included[Math.ceil(this.perc * 6)]) this.lineStyle(6, 0xffffff);
    else this.lineStyle(2, 0xffffff);

    var x = Math.round(game.math.catmullRomInterpolation(this.lines[index].x, this.perc));
    var y = Math.round(game.math.catmullRomInterpolation(this.lines[index].y, this.perc));
    this.lineTo(x, y);

    this.lastPos[index].x = x;
    this.lastPos[index].y = y;
}

// Glow shader

Phaser.Filter.Glow = function(game) {
    Phaser.Filter.call(this, game);

    this.fragmentSrc = [
        "precision lowp float;",
        "varying vec2 vTextureCoord;",
        "varying vec4 vColor;",
        'uniform sampler2D uSampler;',

        'void main() {',
        'vec4 sum = vec4(0);',
        'vec2 texcoord = vTextureCoord;',
        'for(int xx = -4; xx <= 4; xx++) {',
        'for(int yy = -3; yy <= 3; yy++) {',
        'float dist = sqrt(float(xx*xx) + float(yy*yy));',
        'float factor = 0.0;',
        'if (dist == 0.0) {',
        'factor = 2.0;',
        '} else {',
        'factor = 2.0/abs(float(dist));',
        '}',
        'sum += texture2D(uSampler, texcoord + vec2(xx, yy) * 0.002) * factor;',
        '}',
        '}',
        'gl_FragColor = sum * 0.025 + texture2D(uSampler, texcoord);',
        '}'
    ];
};

Phaser.Filter.Glow.prototype = Object.create(Phaser.Filter.prototype);
Phaser.Filter.Glow.prototype.constructor = Phaser.Filter.Glow;

// Main game functions

function preload() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    for (var i = 0; i < assets.length; i++) {
        game.load.image(assets[i], 'assets/' + assets[i] + '.png');
    }
    game.load.image('button', 'assets/button_up.png');
    game.load.bitmapFont('kenfuture', 'assets/kenfuture.png', 'assets/kenfuture.fnt');
    game.load.audio('reelstop', 'assets/reelstop.wav');
    game.load.audio('music', 'assets/chopin.ogg');
    game.load.audio('winning', 'assets/winning.wav');

    game.load.image('1', 'assets/9.png');
    game.load.image('einstein', 'assets/9.png');

    game.load.image('a', 'assets/A.png');
    game.load.image('scatter', 'assets/Panda_Scatter.png');

    game.load.image('A', 'assets/A.png');
    game.load.image('9', 'assets/9.png');
    game.load.image('Dragon_StickyWild', 'assets/Dragon_StickyWild.png');
    game.load.image('envelope', 'assets/envelope.png');
    game.load.image('j', 'assets/j.png');
    game.load.image('Fan_Symbol', 'assets/Fan_Symbol.png');
    game.load.image('Panda_Scatter', 'assets/Panda_Scatter.png');
    game.load.image('q', 'assets/q.png');
    game.load.image('k', 'assets/k.png');
    game.load.image('99', 'assets/99.png');

    game.load.image('corona', 'assets/particles/blue.png');


    game.load.video('space', 'assets/video/wormhole.mp4', 'canplaythrough', true);

    game.load.image('space', 'assets/misc/starfield.png', 890, 580);
    game.load.image('logo', 'assets/sprites/phaser2.png');
    

}

function create() {

    game.world.setBounds(0, 0, 800, 1500);
    game.camera.y = 380;

    reels = game.add.group();
    for (var i = 0; i < 5; i++) {
        reels.add(new Reel(game, i));
    }
    reels.x = 25;

    graphics = game.world.add(new Line(game));

    var button = game.add.button(690, 910, 'button', clickSpinButton);
    button.alpha = 0.7;
    var buttonText = game.add.bitmapText(765, 922, 'kenfuture', 'SPIN', 32);
    buttonText.alpha = 0.8;

    creditsText = game.add.bitmapText(25, 405, 'kenfuture', 'Balance: ' + credits, 32);
    scoreText = game.add.bitmapText(25, 925, 'kenfuture', 'ReelNRG: 0', 32);

    reelStop = game.add.audio('reelstop');
    music = game.add.audio('music');
    winning = game.add.audio('winning');

    ckImage = game.add.image(100, 0, '1')

    game.add.sprite(0, 0, 'einstein');

    

    emitter = game.add.emitter(game.world.centerX, 1000, 200);

    emitter.makeParticles('corona');

    emitter.setRotation(0, 0);
    emitter.setAlpha(0.3, 0.8);
    emitter.setScale(1, 1);
    emitter.gravity = -200;

    //  false means don't explode all the sprites at once, but instead release at a rate of one particle per 100ms
    //  The 5000 value is the lifespan of each particle before it's killed
    

    video = game.add.video('space');

    //  game.add.tileSprite(1, 380, 890, 580, 'space');

    // var sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');

    // sprite.anchor.setTo(1, 1);
    // sprite.alpha = 0;

    // //  Create our tween. This will fade the sprite to alpha 1 over the duration of 2 seconds
    // var tween = game.add.tween(sprite).to( { alpha: 1 }, 2000, "Linear", true, 0, -1);

    // //  And this tells it to yoyo, i.e. fade back to zero again before repeating.
    // //  The 3000 tells it to wait for 3 seconds before starting the fade back.
    // tween.yoyo(true, 3000);

    


}

function update() {

}

function clickSpinButton() {
    finalArray = []
    if (spinning || credits < 100) return;

    spinning = true;

    music.play();
    updateCredits(-100);
    graphics.stopDrawing();
    scoreText.text = 'Winnings:';

    reels.forEach(function(reel) {
        var rand = game.rnd.integerInRange(0, 9);

        reel.spin(rand);
    });
}

function checkResults() {
    var results = [];
    for (var i = 0; i < 3; i++)
        results[i] = [];

    graphics.lines = [];

    music.stop();
    var score = 0;
    reels.forEach(function(reel) {
        reel.forEach(function(symbol) {
            if (symbol.y == 450){
                results[0][symbol.index] = symbol;
                console.log( symbol.key  )
                
                // if( symbol.key  == 'scatter'){
                //     console.log(symbol.key)
                //     symbol.destroy();
                // }
                
            }
                
            else if (symbol.y == 600)
                results[1][symbol.index] = symbol;
            else if (symbol.y == 750)
                results[2][symbol.index] = symbol;
        });
    });

    //check if there is a bonus
    skatterRound = $.grep(finalArray, function(element, index){
      return element.key == 'Panda_Scatter' && element.y == 450 || element.key == 'Panda_Scatter' && element.y == 600 || element.key == 'Panda_Scatter' && element.y == 750 ;
    });

    if ( skatterRound.length > 2) {
        emitter.start(false, 1000, 100);
        // video.play(true);

        // //  x, y, anchor x, anchor y, scale x, scale y
        //  video.addToWorld(0, 420, 0.1, 0.1, 1,1);
    }

    for (var i = 0; i < paylines.length; i++) {
        var symbol = results[paylines[i][0]][0].key;



        var j = 1;
        for (; j < paylines[i].length; j++) {
            var current = results[paylines[i][j]][j].key;

            if (symbol == jolly) {
                symbol = current;
            } else {
                if (current != symbol && current != jolly)
                    break;
            }
        }

        if (j >= 3) {
            var lineX = [];
            var lineY = [];
            var included = [];
            for (var k = 0; k < paylines[i].length; k++) {
                var sprite = results[paylines[i][k]][k];

                if (k == 0) {
                    lineX.push(sprite.x + sprite.width / 2 + 25 - 100);
                    lineY.push(sprite.y + sprite.height / 2);
                    included.push(true);
                }

                lineX.push(sprite.x + sprite.width / 2 + 25);
                lineY.push(sprite.y + sprite.height / 2);
                included.push(k < j);

                if (k == 4) {
                    lineX.push(sprite.x + sprite.width / 2 + 25 + 100);
                    lineY.push(sprite.y + sprite.height / 2);
                    included.push(k < j);
                }
            }
            graphics.lines.push({ x: lineX, y: lineY, included: included });
            score += Math.pow(10, j);
        }

    }

    graphics.drawLines();
    scoreText.text = 'Score: ' + score;
    if (score > 0) updateCredits(score);
    spinning = false;
}

function updateCredits(amount) {
    if (amount > 0) winning.play();

    credits += amount;
    creditsText.text = 'Crediti: ' + credits;

    var updateText = game.add.bitmapText(40 + creditsText.width, 405, 'kenfuture', (amount < 0 ? '' : '+') + amount, 32);
    var updateTween = game.add.tween(updateText).to({ alpha: 0, y: updateText.y - 10 }, 1000, Phaser.Easing.Linear.InOut, true);
    updateTween.onComplete.add(function() {
        updateText.destroy();
    });
}