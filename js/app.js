// Enemies our player must avoid
const Enemy = function(pic) {
    this.sprite = 'images/enemy1.png';
    this.x = -100;
    this.y = (Math.floor(Math.random()*400)+70);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

function createEnemies() {
     let enemy1 = new Enemy(1);
     let enemy2 = new Enemy(2);
     let enemy3 = new Enemy(3);
     let enemy4 = new Enemy(4);
     let enemy5 = new Enemy(5);

     // Place all enemy objects in an array called allEnemies
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
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
     this.x += (Math.random()*100)*dt;
     if(this.x >500) {
          this.x = -100;
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
     this.sprite = 'images/mouseRun.png';
     this.x = 210;
     this.y = 510;
};

Player.prototype.update = function(dt) {;
     if(player.y <= 50) {
          alert("You made it!!  Great Job! Play again :)");
          allEnemies.length = 0;
          player.y = 510;
          player.x = 210;
          createEnemies();
     };
     for(let enemy of allEnemies) {
          if((player.x >= (enemy.x - 31)) && (player.x <= (enemy.x + 125)) &&
          (player.y >= (enemy.y -50)) && (player.y <= (enemy.y + 120))) {
               if(player.x < (enemy.x + 25)) {
               enemy.sprite = "images/catAttackReverse.png";
          } else {
               enemy.sprite = "images/catAttack.png";
          }
               enemy.y -= 50;

               setTimeout(function() {
                    alert("Awww, you lost, but you were a YUMMY Snack! Try again!");
                    allEnemies.length = 0;
                    player.y = 510;
                    player.x = 210;
                    createEnemies();
          }, 0);
     };
     };
};



Player.prototype.render = function() {
     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function(dt) {
     switch (dt) {
          case "up":
               if(this.y > 25) {
                    this.y -= 25;
               } else {
                    this.y = 0;
               }
               break;
          case "left":
               if(this.x > 25) {
                    this.x -= 25;
               } else {
                    this.x = 0;
               }
               break;
          case "right":
               if(this.x < 420) {
                    this.x += 25;
               } else {
                    this.x = 445;
               }
               break;
          case "down":
          if(this.y <= 480) {
               this.y += 25;
          } else {
               this.y = 510;
          }
               break;
     }
     console.log(this.x+", "+this.y);
     for(let enemy of allEnemies) {
     console.log(enemy.x+", "+enemy.y);
};
};



// Now instantiate your objects.
const allEnemies = [];
createEnemies();
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
