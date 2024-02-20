// sketch.js
let sound;
let drawingEnabled = false;
let gif;
let gifVisible = false;

function preload() {
  // Load your sound file with the correct relative path
  sound = loadSound('tattoo-34946.mp3');
  gif = loadImage('safety3.gif'); // Replace 'your-image.gif' with your GIF file
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
}

function draw() {
  // Check if drawing is enabled
  if (drawingEnabled) {
    // Draw code here, for example, drawing an ellipse
    ellipse(mouseX, mouseY, 5, 5);
    fill(0);
    noStroke();
  }

  // Check if the GIF should be visible
  if (gifVisible) {
    // Calculate the position and size for the square in the center
    const squareSize = 500; // Adjust the size as needed
    const squareX = width / 2 - squareSize / 2;
    const squareY = height / 2 - squareSize / 2;

    // Display the GIF as a small square
    imageMode(CENTER);
    image(gif, squareX + squareSize / 2, squareY + squareSize / 2, squareSize, squareSize);
  }
}

function mousePressed() {
  // Check if sound is defined
  if (sound) {
    if (sound.isPlaying()) {
      // If the sound is playing, stop it and disable drawing
      sound.stop();
      drawingEnabled = false;
      gifVisible = false; // Hide the GIF
    } else {
      // If the sound is not playing, loop it, start playing it, enable drawing, and show the GIF after 5 seconds
      sound.loop();
      drawingEnabled = true;

      // Set a timer to show the GIF after 5 seconds
      setTimeout(() => {
        gifVisible = true;
      }, 5000);
    }
  }
}
