
// let seconds = 0;
// const timeLimit = 60;
// let timeUp = false;

// function checkTimeLimit() {
//   if (seconds >= timeLimit && !timeUp) {
//     timeUp = true;
//     clearInterval(timerInterval);
//     document.getElementById("stopTime").innerText = "⏰ Time's up! You didn't escape.";

//     document.getElementById("puzzle1").classList.add("hidden");
//     document.getElementById("puzzle2").classList.add("hidden");
//     document.getElementById("puzzle3").classList.add("hidden");
//   }
// }

// let timerInterval = setInterval(() => {
//   seconds++;
//   document.getElementById("timer").innerText = `⏱️ Time: ${seconds} seconds`;
//   checkTimeLimit(); 
// }, 1000);

// function checkColor() {
//   const guess = document.getElementById('colorGuess').value.toLowerCase();
//   const colorMsg = document.getElementById('colorMsg');
//   if (guess === "purple") {
//     colorMsg.innerText = "Correct! The magic glows purple.";
//     document.getElementById('puzzle3').classList.remove('hidden'); 
//   } else {
//     colorMsg.innerText = "Nope! Try a magical color...";
//   }
// }

// function checkLogic() {
//   const guess = document.getElementById('logicGuess').value.toLowerCase();
//   const logicMsg = document.getElementById('logicMsg');
//   if (guess === "earth") {
//     logicMsg.innerText = "Correct! Earth defeats all. Proceed!";
//     document.getElementById('puzzle2').classList.remove('hidden');
//   } else {
//     logicMsg.innerText = "Hmm... think what defeats fire, water, and air.";
//   }
// }
// function checkPattern() {
//   const guess = parseInt(document.getElementById('numberGuess').value);
//   const patternMsg = document.getElementById('patternMsg');

//   if (timeUp) {
//     patternMsg.innerText = "Too late! Time's up.";
//     return;
//   }

//   if (guess === 32) {
//     clearInterval(timerInterval);
//     document.getElementById('winMessage').classList.remove('hidden');
//     patternMsg.innerText = "Correct! The final lock clicks open!";
//     document.getElementById('stopTime').innerText = `🎉 You solved it in ${seconds} seconds!`;
//   } else {
//     patternMsg.innerText = "Incorrect. Think powers of 2.";
//   }
// }


let seconds = 0;
const timeLimit = 60;
let timeUp = false;

const timerInterval = setInterval(() => {
  seconds++;
  document.getElementById("timer").innerText = `Time: ${seconds} seconds`;
  if (seconds >= timeLimit && !timeUp) {
    timeUp = true;
    clearInterval(timerInterval);
    document.getElementById("stopTime").innerText = "Time's up! You didn't escape.";
    ["puzzle1", "puzzle2", "puzzle3"].forEach(id => document.getElementById(id).classList.add("hidden"));
  }
}, 1000);

function checkColor() {
  const guess = document.getElementById('colorGuess').value.trim().toLowerCase();
  const colorMsg = document.getElementById('colorMsg');
  if (guess === "purple") {
    colorMsg.innerText = "Correct! The magic glows purple.";
    document.getElementById('puzzle3').classList.remove('hidden');
  } else {
    colorMsg.innerText = "Nope! Try a magical color...";
  }
}

function checkLogic() {
  const guess = document.getElementById('logicGuess').value.trim().toLowerCase();
  const logicMsg = document.getElementById('logicMsg');
  if (guess === "earth") {
    logicMsg.innerText = "Correct! Earth defeats all. Proceed!";
    document.getElementById('puzzle2').classList.remove('hidden');
  } else {
    logicMsg.innerText = "Hmm... think what defeats fire, water, and air.";
  }
}

function checkPattern() {
  const guess = parseInt(document.getElementById('numberGuess').value);
  const patternMsg = document.getElementById('patternMsg');

  if (timeUp) {
    patternMsg.innerText = "Too late! Time's up.";
    return;
  }

  if (guess === 32) {
    clearInterval(timerInterval);
    document.getElementById('winMessage').classList.remove('hidden');
    patternMsg.innerText = "Correct! The final lock clicks open!";
    document.getElementById('stopTime').innerText = `You solved it in ${seconds} seconds!`;
  } else {
    patternMsg.innerText = "Incorrect. Think powers of 2.";
  }
}

