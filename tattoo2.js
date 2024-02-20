let colorPicker;
let sound;
let drawingEnabled = false;

function preload() {
  // Load your sound file with the correct relative path
  sound = loadSound('tattoo-34946.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);

  // Create a color picker and position it on the page
  colorPicker = createColorPicker('#000000');
  colorPicker.position(20, 20);
  
  // Set the sound to loop
  sound.setLoop(true);
}

function draw() {
  // Get the selected color from the color picker
  let selectedColor = colorPicker.color();

  // Set the stroke color to the selected color
  stroke(selectedColor);

  if (drawingEnabled) {
    // Add a drop shadow
    drawingContext.shadowOffsetX = 1;
    drawingContext.shadowOffsetY = 1;
    drawingContext.shadowBlur = 5;
    drawingContext.shadowColor = 'rgba(0, 0, 0, 0.5)';

    // Draw ellipse with drop shadow
    ellipse(mouseX, mouseY, 3, 3);
    noFill();

    // Reset drop shadow settings
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowBlur = 0;
    drawingContext.shadowColor = 'rgba(0, 0, 0, 0)';
  }
}

function mousePressed() {
  // Play the sound when the mouse is pressed
  if (!sound.isPlaying()) {
    sound.play();
    drawingEnabled = true;
  }
}

function mouseReleased() {
  // Stop the sound when the mouse is released
  if (sound.isPlaying()) {
    sound.stop();
    drawingEnabled = false;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const historyLink = document.getElementById("history-link");

  historyLink.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default link behavior

      // Open a new window with the history page
      window.open("history.html", "historyPopup", "width=600,height=400,scrollbars=yes");
  });
});
