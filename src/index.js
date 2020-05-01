// var megumin = new Image();
//     // megumin.src="./images/meguminIdle.png";
// ctx.drawImage(megumin, x, y, 25, 25);

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var scoreContainer = document.getElementById("score");


let player;
let score = 0;
let gravity = 0.1;
let platforms = [];
let platDy = 700;

let interval = setInterval(update, 10);

window.onload = function() {
    player = new Player(200, 350);

    // Level One
    for (let i = 0; i < 40; i++) {
        let platform = new LevelOne(Math.random()*320, platDy);
        platDy -= 100;
        platforms.push(platform);
    }

    // Level Two
    for (let i = 0; i < 40; i++) {
        let platform = new LevelTwo(Math.random()*320, platDy);
        platDy -= 100;
        platforms.push(platform);
    }

    // Level Three
    for (let i = 0; i < 40; i++) {
        let platform = new LevelThree(Math.random()*320, platDy);
        platDy -= 100;
        platforms.push(platform);
    }

    // Level Four
    for (let i = 0; i < 40; i++) {
        let platform = new LevelFour(Math.random()*320, platDy);
        platDy -= 100;
        platforms.push(platform);
    }

    // Level Five
    for (let i = 0; i < 40; i++) {
        let platform = new LevelFive(Math.random()*320, platDy);
        platDy -= 100;
        platforms.push(platform);
    }

    // Level Six
    for (let i = 0; i < 40; i++) {
        let platform = new LevelSix(Math.random()*320, platDy);
        platDy -= 180;
        platforms.push(platform);
    }

    // Level Seven
    for (let i = 0; i < 40; i++) {
        let platform = new LevelSeven(Math.random()*320, platDy);
        platDy -= 180;
        platforms.push(platform);
    }

    // Level Eight
    for (let i = 0; i < 10000; i++) {
        let platform = new LevelEight(Math.random()*320, platDy);
        platDy -= 180;
        platforms.push(platform);
    }

}

class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 15;
        this.h = 15;
        this.dy = 0;
        this.dx = 0;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    update() {
        this.dy += gravity;
        this.x += this.dx
    }
}

class LevelOne {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 80;
        this.h = 10;
        this.wasAbove = false;
        this.visible = true;
        this.jumpedOn = false;
    }

    draw() {
        if (this.visible) {
            ctx.fillStyle = 'red';
            ctx.fillRect(this.x, this.y, this.w, this.h);
        }
    }

    update() {
        // if (this.x <= 0 || this.x + this.w >= 400) {
        //     this.dx = -(this.dx);
        // }

        // this.x += this.dx;
        if (this.y > 700) {
            platforms.shift();
            score += 1;
        }
        if (player.y < this.y-16) {
            this.over = true;
        }
        
        if (player.x < this.x + this.w && 
            player.x > this.x && 
            player.y < this.y + this.h 
            && player.y + player.h > this.y 
            && player.y < this.y 
            && this.over 
            && this.visible) {
            
            if (this.jumpedOn === false) {
                this.jumpedOn = true;
            }

            player.dy = -6;

        }

        this.y -= player.dy * 1.3;
    }
}

class LevelTwo {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 80;
        this.h = 10;
        this.dx = 0.31;
        this.wasAbove = false;
        this.visible = true;
        this.jumpedOn = false;
    }

    draw() {
        if (this.visible) {
            ctx.fillStyle = 'orange';
            ctx.fillRect(this.x, this.y, this.w, this.h);
        }
    }

    update() {

        // move the platforms
        if (this.x <= 0 || this.x + this.w >= 400) {
            this.dx = -(this.dx);
        }

        this.x += this.dx;

        if (this.y > 700) {
            platforms.shift();
            score += 1;
        }

        
        if (player.y < this.y-16) {
            this.over = true;
        }
        
        if (player.x < this.x + this.w && 
            player.x > this.x && 
            player.y < this.y + this.h 
            && player.y + player.h > this.y 
            && player.y < this.y 
            && this.over 
            && this.visible) {
            
            if (this.jumpedOn === false) {
                this.jumpedOn = true;
            }

            player.dy = -6;

        }

        this.y -= player.dy * 1.3;
    }
}

class LevelThree {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 70;
        this.h = 10;
        this.dx = 0.7;
        this.wasAbove = false;
        this.visible = true;
        this.jumpedOn = false;
    }

    draw() {
        if (this.visible) {
            ctx.fillStyle = 'yellow';
            ctx.fillRect(this.x, this.y, this.w, this.h);
        }
    }

    update() {
        if (this.x <= 0 || this.x + this.w >= 400) {
            this.dx = -(this.dx);
        }

        this.x += this.dx;
        if (this.y > 700) {
            platforms.shift();
            score += 1;
        }
        if (player.y < this.y-16) {
            this.over = true;
        }
        
        if (player.x < this.x + this.w && 
            player.x > this.x && 
            player.y < this.y + this.h 
            && player.y + player.h > this.y 
            && player.y < this.y 
            && this.over 
            && this.visible) {
            
            if (this.jumpedOn === false) {
                this.jumpedOn = true;
            }

            player.dy = -6;

        }

        this.y -= player.dy * 1.3;
    }
}

class LevelFour {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 70;
        this.h = 10;
        this.dx = Math.random()*1.3;
        this.wasAbove = false;
        this.visible = true;
        this.jumpedOn = false;
    }

    draw() {
        if (this.visible) {
            ctx.fillStyle = 'green';
            ctx.fillRect(this.x, this.y, this.w, this.h);
        }
    }

    update() {
        if (this.x <= 0 || this.x + this.w >= 400) {
            this.dx = -(this.dx);
        }

        this.x += this.dx;
        if (this.y > 700) {
            platforms.shift();
            score += 1;
        }
        if (player.y < this.y-16) {
            this.over = true;
        }
        
        if (player.x < this.x + this.w && 
            player.x > this.x && 
            player.y < this.y + this.h 
            && player.y + player.h > this.y 
            && player.y < this.y 
            && this.over 
            && this.visible) {
            
            if (this.jumpedOn === false) {
                this.jumpedOn = true;
            }

            player.dy = -6;

        }

        this.y -= player.dy * 1.3;
    }
}

class LevelFive {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 70;
        this.h = 10;
        this.dx = 1;
        this.wasAbove = false;
        this.visible = true;
        this.jumpedOn = false;
    }

    draw() {
        if (this.visible) {
            ctx.fillStyle = 'blue';
            ctx.fillRect(this.x, this.y, this.w, this.h);
        }
    }

    update() {
        if (this.x <= 0 || this.x + this.w >= 400) {
            this.dx = -(this.dx);
        }

        this.x += this.dx;
        if (this.y > 700) {
            platforms.shift();
            score += 1;
        }
        if (player.y < this.y-16) {
            this.over = true;
        }
        
        if (player.x < this.x + this.w && 
            player.x > this.x && 
            player.y < this.y + this.h 
            && player.y + player.h > this.y 
            && player.y < this.y 
            && this.over 
            && this.visible) {
            
            if (this.jumpedOn === false) {
                this.jumpedOn = true;
            }

            player.dy = -6;

        }

        this.y -= player.dy * 1.3;
    }
}

class LevelSix {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 60;
        this.h = 10;
        this.dx = 1.2;
        this.wasAbove = false;
        this.visible = true;
        this.jumpedOn = false;
    }

    draw() {
        if (this.visible) {
            ctx.fillStyle = 'purple';
            ctx.fillRect(this.x, this.y, this.w, this.h);
        }
    }

    update() {
        if (this.x <= 0 || this.x + this.w >= 400) {
            this.dx = -(this.dx);
        }

        this.x += this.dx;

        if (this.y > 700) {
            platforms.shift();
            score += 1;
        }
        if (player.y < this.y-16) {
            this.over = true;
        }
        
        if (player.x < this.x + this.w && 
            player.x > this.x && 
            player.y < this.y + this.h 
            && player.y + player.h > this.y 
            && player.y < this.y 
            && this.over 
            && this.visible) {
            
            if (this.jumpedOn === false) {
                this.jumpedOn = true;
                let currentPlatIndex = platforms.indexOf(this);
                platforms.splice(currentPlatIndex, 1);
                score += 1;
            }

            player.dy = -6;

        }

        this.y -= player.dy * 1.3;
    }
}

class LevelSeven {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 80;
        this.h = 10;
        this.dx = 3;
        this.wasAbove = false;
        this.visible = true;
        this.jumpedOn = false;
    }

    draw() {
        if (this.visible) {
            ctx.fillStyle = 'pink';
            ctx.fillRect(this.x, this.y, this.w, this.h);
        }
    }

    update() {
        if (this.x <= 0 || this.x + this.w >= 400) {
            this.dx = -(this.dx);
        }

        this.x += this.dx;

        if (this.y > 700) {
            platforms.shift();
            score += 1;
        }
        if (player.y < this.y-16) {
            this.over = true;
        }
        
        if (player.x < this.x + this.w && 
            player.x > this.x && 
            player.y < this.y + this.h 
            && player.y + player.h > this.y 
            && player.y < this.y 
            && this.over 
            && this.visible) {
            
            if (this.jumpedOn === false) {
                this.jumpedOn = true;
                let currentPlatIndex = platforms.indexOf(this);
                platforms.splice(currentPlatIndex, 1);
                score += 1;
            }

            player.dy = -6;

        }

        this.y -= player.dy * 1.3;
    }
}

class LevelEight {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 50;
        this.h = 10;
        this.dx = 6;
        this.wasAbove = false;
        this.visible = true;
        this.jumpedOn = false;
    }

    draw() {
        if (this.visible) {
            ctx.fillStyle = 'black';
            ctx.fillRect(this.x, this.y, this.w, this.h);
        }
    }

    update() {
        if (this.x <= 0 || this.x + this.w >= 400) {
            this.dx = -(this.dx);
        }

        this.x += this.dx;

        if (this.y > 700) {
            platforms.shift();
            score += 1;
        }
        if (player.y < this.y-16) {
            this.over = true;
        }
        
        if (player.x < this.x + this.w && 
            player.x > this.x && 
            player.y < this.y + this.h 
            && player.y + player.h > this.y 
            && player.y < this.y 
            && this.over 
            && this.visible) {
            
            if (this.jumpedOn === false) {
                this.jumpedOn = true;
                let currentPlatIndex = platforms.indexOf(this);
                platforms.splice(currentPlatIndex, 1);
                score += 1;
            }

            player.dy = -6;

        }

        this.y -= player.dy * 1.3;
    }
}



function keyDownHandler(e) {
    if (e.keyCode === 68) {
        player.dx = 6.5;
    }
    if (e.keyCode === 65) {
        player.dx = -6.5;
    }
}

function keyUpHandler(e) {
    if (e.keyCode === 68) {
        player.dx = 0;
    }
    if (e.keyCode === 65) {
        player.dx = 0;
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false)

let nextLevel = false;

function gameOver() {
    
}


function update() {
    if (player.dy >= 14) {
        gameOver()
        alert("GAME OVER");
        document.location.reload();
        clearInterval(interval);
    }
    scoreContainer.innerText = score
    ctx.fillStyle = '#e0e0e0';
    ctx.fillRect(0, 0, 400, 700);

    player.draw();
    player.update();

    for (let i = 0; i < platforms.length; i++) {
        platforms[i].draw();
        platforms[i].update();
    }
}

