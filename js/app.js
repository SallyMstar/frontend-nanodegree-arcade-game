// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/mouseRun.png';
    this.x = -50;
    this.y = (Math.floor(Math.random()*400)+70);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
     this.x += (Math.floor(Math.random()*10));
     if(this.x >500) {
          this.x = -50;
          this.y = (Math.floor(Math.random()*400)+70);
     }
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
const Player = function() {
     this.sprite = 'images/cartoonElephantDance.png';
     this.x = 200;
     this.y = 425;
};

Player.prototype.update = function(dt) {};
Player.prototype.render = function() {
     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function(dt) {

};



// Now instantiate your objects.
let enemy1 = new Enemy();
let enemy2 = new Enemy();
let enemy3 = new Enemy();
let enemy4 = new Enemy();
let enemy5 = new Enemy();
let enemy6 = new Enemy();
let enemy7 = new Enemy();
let enemy8 = new Enemy();

// Place all enemy objects in an array called allEnemies
const allEnemies = [];
     allEnemies.push(enemy1);
setTimeout(function() {
     allEnemies.push(enemy2);
}, 2000);
// setTimeout(function() {
//      allEnemies.push(enemy3);
// }, 4000);
setTimeout(function() {
     allEnemies.push(enemy4);
}, 6000);
// setTimeout(function() {
//      allEnemies.push(enemy5);
// }, 8000);
setTimeout(function() {
     allEnemies.push(enemy6);
}, 10000);
// setTimeout(function() {
//      allEnemies.push(enemy7)
// }, 12000);
setTimeout(function() {
     allEnemies.push(enemy8);
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
