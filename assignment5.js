//globals
var initialInterval = 5000;
var interval = initialInterval;
var intervalModifier = 1.1;

// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 900;
canvas.height = 600;
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function() {
    bgReady = true;
};
bgImage.src = "Images Comp125/waldoback_900600.jpg";

// Bug image
var bugReady = false;
var bugImage = new Image();
bugImage.onload = function() {
    bugReady = true;
};
bugImage.src = "Images Comp125/waldo6060.png";

// Create Reset and New Game
var resetSpeedButton = document.createElement("button");
resetSpeedButton.innerText = "Reset speed";
resetSpeedButton.onclick = function() {
    interval = initialInterval;
}
var newGameButton = document.createElement("button");
newGameButton.innerText = "New Game";
newGameButton.onclick = function() {
    interval = initialInterval;
    bugsCaught = 0;
    reset();
    then = Date.now();
}
document.body.appendChild(document.createElement("br"));
document.body.appendChild(resetSpeedButton);
resetSpeedButton.style.width = "150px";
resetSpeedButton.style.height = "30px";
resetSpeedButton.style.background = "yellow";
resetSpeedButton.style.borderRadius = "20px";
document.body.appendChild(newGameButton);
newGameButton.style.width = "150px";
newGameButton.style.height = "30px";
newGameButton.style.background = "yellow";
newGameButton.style.borderRadius = "20px";
newGameButton.style.textAlign = "center";

var bug = {};
var bugsCaught = 0;

// Handle mouse clicks
addEventListener("click", function(e) {
    if (e.clientX >= bug.x - 1 && bug.x + 60 >= e.clientX &&
        e.clientY >= bug.y - 1 && bug.y + 60 >= e.clientY) {
        bugsCaught++;
        reset();
        interval = interval / intervalModifier;
    }
}, false);

// Reset the game when the player catches a bug
var reset = function() {
    // Throw the bug somewhere on the screen randomly
    bug.x = 32 + (Math.random() * (canvas.width - 120));
    bug.y = 32 + (Math.random() * (canvas.height - 120));
};

// Draw everything
var render = function() {
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0);
    }

    if (bugReady) {
        ctx.drawImage(bugImage, bug.x, bug.y);
    }

    // Score
    ctx.fillStyle = "black";
    ctx.font = "24px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Waldos caught: " + bugsCaught, 650, 5);
};

var countDown = function() {
    var count = Math.round((interval / intervalModifier) / 1000);
    ctx.fillStyle = "black";
    ctx.font = "24px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Waldo interval: " + count + " " + "secs", 650, 35);
}

// The main game loop
var main = function() {
    var now = Date.now();
    var delta = now - then;

    if (delta > interval)
        reset();
    render();
    countDown();

    if (delta > interval)

        then = now;

    // Request to do this again ASAP
    requestAnimationFrame(main);
};
setTimeout(function() { reset(); }, interval / intervalModifier);


// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset();
main();