class Token {
    constructor(tokenImage) {
        this.tokenImage = tokenImage;
        this.renderedToken = null;
        this.x = null;
        this.y = null;
    }
    renderToken(x, y) {
        // Stop from leaving the arena if the coordinates are out of bounds.
        if (x >= 1 && x <= 10 && y >= 1 && y <= 10) {
            // If the token is on the board, remove it.
            if (this.renderedToken !== null) {
                this.renderedToken.remove(); // Without this, we wind up with "Snake".
            }
            // Set the stored coordinates so we can move by reference (current location +1, etc).
            this.x = x;
            this.y = y;
            // Build the token element.
            this.renderedToken = document.createElement("img");
            this.renderedToken.classList.add("token");
            this.renderedToken.setAttribute("src", this.tokenImage);
            // Place the token in the grid square indicated by x and y.
            document.querySelector(`table>tbody>tr:nth-of-type(${y})>td:nth-of-type(${x})`).appendChild(this.renderedToken);

        }
    }
}
class Character extends Token {
    constructor(tokenImage, hitPoints)
    {
        super(tokenImage);
        this.hitPoints = hitPoints;
    }
}
class Player extends Character {
    moveDown = false;
    moveUp = false;
    moveLeft = false;
    moveRight = false;
    init() {
        this.renderToken(2,2);
    }
    update() {
        if (this.moveDown) {
            player.renderToken(player.x, player.y + 1);
        }
        if (this.moveUp) {
            player.renderToken(player.x, player.y - 1);
        }
        if (this.moveLeft) {
            player.renderToken(player.x - 1, player.y);
        }
        if (this.moveRight) {
            player.renderToken(player.x + 1, player.y);
        }
        if(this.hitPoints == 0) {
            console.log("Game Over!");
        }
    }
}
class Enemy extends Character {
    init() {
        this.renderToken(9,9);
    }
    update() {
        // TODO: Random movement.
        enemy.renderToken(enemy.x, enemy.y);
    }
}

const player = new Player("img/knight.jpg", 3);
const enemy = new Enemy("img/bad.jpg", 1);
// Because we're updating based on frames, we set flags to determine what happens in each frame.

// Modify the flags based on key events.
window.addEventListener("keydown", (e) => {
    if (e.key == "ArrowDown") {
        player.moveDown = true;
    }
    else if (e.key == "ArrowUp") {
        player.moveUp = true;
    }
    else if (e.key == "ArrowLeft") {
        player.moveLeft = true;
    }
    else if (e.key == "ArrowRight") {
        player.moveRight = true;
    }
});
window.addEventListener("keyup", (e) => {
    if (e.key == "ArrowDown") {
        player.moveDown = false;
    }
    else if (e.key == "ArrowUp") {
        player.moveUp = false;
    }
    else if (e.key == "ArrowLeft") {
        player.moveLeft = false;
    }
    else if (e.key == "ArrowRight") {
        player.moveRight = false;
    }
});
// Runs once when the window loads, and starts the game loop.
window.addEventListener("load", (e) => {
    // Game initialization.
    player.init();
    enemy.init();

    // Start loop.
    window.setInterval(() => {
        // Game loop, runs 10 times per second.
        player.update();
        enemy.update();
    }, 500);
});
