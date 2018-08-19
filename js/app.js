// Enemies our player must avoid
// ---- Create the Enemy Object Constructor Function
const Enemy = function(pic) {
    this.sprite = 'images/enemy1.png';
    this.x = -100;
    this.y = (Math.floor(Math.random()*400)+70);
};
// ---- end Enemy constructor function

// ---- Create the enemy objects
function createEnemies() {
     let enemy1 = new Enemy(1);
     let enemy2 = new Enemy(2);
     let enemy3 = new Enemy(3);
     let enemy4 = new Enemy(4);
     let enemy5 = new Enemy(5);

     // Place all enemy objects in an array called allEnemies
     // Add delays to stagger entries to game screen
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
// Draw the enemy on the screen
Enemy.prototype.render = function() {
     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Update the enemy's position, required method for game
Enemy.prototype.update = function(dt) {
     // Parameter: dt, a time delta between ticks
     // You should multiply any movement by the dt parameter
     // which will ensure the game runs at the same speed for
     // all computers.
     this.x += (Math.random()*100)*dt;
     if(this.x >500) {
          this.x = -100;
          this.y = (Math.floor(Math.random()*400)+70);
     }
};

// ------- Create the Player Constructor Function -----
const Player = function() {
     this.sprite = 'images/mouseRun.png';
     this.x = 210;
     this.y = 510;
};
// ------- end Player constructor function ------------

// -----  Update player object to check for win / lose
Player.prototype.update = function(dt) {;
     // If player made it to the top of the board, display win
     if(player.y <= 50) {
          alert("You made it!!  Great Job! Play again :)");
          allEnemies.length = 0;
          player.y = 510;
          player.x = 210;
          createEnemies();
     };

     // Check for collision with any enemy objects on the screen.
     for(let enemy of allEnemies) {
          // if any part of the player is within the parameters of an enemy
          // display attack cat image and game over message
          if((player.x >= (enemy.x - 31)) && (player.x <= (enemy.x + 125)) &&
          (player.y >= (enemy.y -50)) && (player.y <= (enemy.y + 120))) {
               if(player.x < (enemy.x + 25)) {
               // if player collides from the left, reverse cat
               enemy.sprite = "images/catAttackReverse.png";
          } else {
               enemy.sprite = "images/catAttack.png";
          }
               // adjust the vertical display of the attack cat
               enemy.y -= 50;
               // create a delay for the image change to be visible
               // before the game-over alert
               setTimeout(function() {
                    alert("Awww, you lost, but you were a YUMMY Snack! Try again!");
                    // remove all enemies from the allEnemies array
                    allEnemies.length = 0;
                    // reset player position to start
                    player.y = 510;
                    player.x = 210;
                    // create new enemies for the next round
                    createEnemies();
          }, 0);
     };
     };
};


// Draw the player on the screen
Player.prototype.render = function() {
     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Update player position based on user input
Player.prototype.handleInput = function(dt) {
     switch (dt) {
          case "up":
               if(this.y > 25) {
                    this.y -= 25;
               } else {
                    // make sure the player stays on the screen
                    this.y = 0;
               }
               break;
          case "left":
               if(this.x > 25) {
                    this.x -= 25;
               } else {
                    // make sure the player stays on the screen
                    this.x = 0;
               }
               break;
          case "right":
               if(this.x < 420) {
                    this.x += 25;
               } else {
                    // make sure the player stays on the screen
                    this.x = 445;
               }
               break;
          case "down":
          if(this.y <= 480) {
               this.y += 25;
          } else {
               // make sure the player stays on the screen
               this.y = 510;
          }
               break;
     }
};



// Create the allEnemies array
const allEnemies = [];
// Create the enemies & add them to the allEnemies array
createEnemies();

// Create the player
let player = new Player();


// Create the listener event for player directional movement
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
