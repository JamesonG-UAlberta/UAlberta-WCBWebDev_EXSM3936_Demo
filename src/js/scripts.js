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
const player = new Token("img/knight.jpg");
// Because we're updating based on frames, we set flags to determine what happens in each frame.
let moveDown = false;
let moveUp = false;
let moveLeft = false;
let moveRight = false;
// Modify the flags based on key events.
window.addEventListener("keydown", (e) => {
    if (e.key == "ArrowDown") {
        moveDown = true;
    }
    else if (e.key == "ArrowUp") {
        moveUp = true;
    }
    else if (e.key == "ArrowLeft") {
        moveLeft = true;
    }
    else if (e.key == "ArrowRight") {
        moveRight = true;
    }
});
window.addEventListener("keyup", (e) => {
    if (e.key == "ArrowDown") {
        moveDown = false;
    }
    else if (e.key == "ArrowUp") {
        moveUp = false;
    }
    else if (e.key == "ArrowLeft") {
        moveLeft = false;
    }
    else if (e.key == "ArrowRight") {
        moveRight = false;
    }
});
// Runs once when the window loads, and starts the game loop.
window.addEventListener("load", (e) => {
    // Game initialization.
    player.renderToken(2, 2);

    // Start loop.
    window.setInterval(() => {
        // Game loop, runs 10 times per second.

        // Move the player based on the flags.
        if (moveDown) {
            player.renderToken(player.x, player.y + 1);
        }
        if (moveUp) {
            player.renderToken(player.x, player.y - 1);
        }
        if (moveLeft) {
            player.renderToken(player.x - 1, player.y);
        }
        if (moveRight) {
            player.renderToken(player.x + 1, player.y);
        }
    }, 500);
});
