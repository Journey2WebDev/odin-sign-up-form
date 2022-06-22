

// Animation to swap initial letters of title
function swapLetters(){
  console.log("Function started");
  let leftLetter = document.getElementById("leftLetter");
  let rightLetter = document.getElementById("rightLetter");

  leftLetter.style.left = "0px";
  rightLetter.style.left = "0px";

  let leftCoords = leftLetter.getBoundingClientRect();
  let rightCoords = rightLetter.getBoundingClientRect();

  let diff = Math.abs(leftCoords.left-rightCoords.left);

  leftLetter.style.left = diff + "px";
  rightLetter.style.left = -diff + "px";
};

// Waits 1 second after page loag to run animation
// without setTimeout, animation does not fully complete (reason unknown)
window.onload = function() {
  setTimeout(function(){
    swapLetters();
  } ,1000);
};


