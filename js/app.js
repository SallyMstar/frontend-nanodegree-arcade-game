// Enemies our player must avoid
var Enemy = function(pic) {
    this.sprite = 'images/enemy1.png';
    this.x = -100;
    this.y = (Math.floor(Math.random()*400)+70);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
     this.x += (Math.floor(Math.random()*10)*dt);
     if(this.x >500) {
          this.x = -100;
          this.y = (Math.floor(Math.random()*400)+70);
     }
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

const Prize = function() {
     this.sprite = 'images/Key.png';
     this.x = 70;
     this.y = 70;
};

// Draw the enemy on the screen, required method for game
Prize.prototype.render = function() {
     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Prize.prototype.update = function(dt) {
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
const Player = function() {
     this.sprite = 'images/mouseRun.png';
     this.x = 210;
     this.y = 510;
};

Player.prototype.update = function(dt) {;
     }
Player.prototype.render = function() {
     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function(dt) {
     switch (dt) {
          case "up":
               this.y -= 25;
               break;
          case "left":
               this.x -= 25;
               break;
          case "right":
               this.x += 25;
               break;
          case "down":
               this.y += 25;
               break;
     }
     console.log(this.x+", "+this.y);
};



// Now instantiate your objects.
let enemy1 = new Enemy(1);
let enemy2 = new Enemy(2);
let enemy3 = new Enemy(3);
let enemy4 = new Enemy(4);
let enemy5 = new Enemy(5);
let prize = new Prize();

// Place all enemy objects in an array called allEnemies
const allEnemies = [];
     allEnemies.push(enemy1);
setTimeout(function() {
     allEnemies.push(enemy2);
}, 2000);
setTimeout(function() {
     allEnemies.push(enemy3);
}, 6000);
setTimeout(function() {
     allEnemies.push(enemy4);
}, 10000);
setTimeout(function() {
     allEnemies.push(enemy5);
}, 14000);

// Place the player object in a variable called player
let player = new Player();




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
