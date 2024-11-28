const rock = document.getElementById('rock');
const papper = document.getElementById('papper');
const scissor = document.getElementById('scissor');
const container2 = document.getElementById('container2');
const choice = document.getElementById('choice');
const circle = document.getElementsByClassName('circle');
const computerchoice = document.getElementById('computerchoice');

let yours = "";
let yourscore = 0;
let computerscore = 0;
let count = 0;

const sourceofimg = [
  "/images/rock3-removebg-preview.png",
  "/images/papper3-removebg-preview.png",
  "/images/scissor3-removebg-preview.png"
];

function disableEventListeners() {
  // Disable all the circle clicks by removing event listeners
  rock.removeEventListener("click", rockClickHandler);
  papper.removeEventListener("click", papperClickHandler);
  scissor.removeEventListener("click", scissorClickHandler);
}

function rockClickHandler() {
  yours = "rock";
  setTimeout(() => {
    choice.innerHTML = rock.outerHTML;
    circleclick();
  }, 3000);
}

function papperClickHandler() {
  yours = "papper";
  setTimeout(() => {
    choice.innerHTML = papper.outerHTML;
    circleclick();
  }, 3000);
}

function scissorClickHandler() {
  yours = "scissor";
  setTimeout(() => {
    choice.innerHTML = scissor.outerHTML;
    circleclick();
  }, 3000);
}

// Attach event listeners to each choice
rock.addEventListener("click", rockClickHandler);
papper.addEventListener("click", papperClickHandler);
scissor.addEventListener("click", scissorClickHandler);

function circleclick() {
  setTimeout(() => {
    const randomindex = Math.floor(Math.random() * sourceofimg.length);
    const computers = ['rock', 'paper', 'scissor'][randomindex];
    const randomimages = sourceofimg[randomindex];
    computerchoice.innerHTML = `<img src="${randomimages}">`;

    let result = '';
    if (yours === computers) {
      result = 'Both chose the same';
    } else if (yours === "rock" && computers === "scissor" ||
               yours === "papper" && computers === "rock" ||
               yours === "scissor" && computers === "papper") {
      result = "You win!";
      yourscore++;
    } else {
      result = "You lose";
      computerscore++;
    }

    const result2 = document.getElementById('result');
    result2.innerText = result;
    document.getElementById('playerscore').innerText = yourscore;
    document.getElementById('computerscore').innerText = computerscore;

    count++;

    // Check if the game has ended
    if (count >= 5) {
      const final = document.createElement('div');
      final.id = "final";
      if (yourscore > computerscore) {
        final.textContent = "Congratulations, you are the winner!";
      } else if (computerscore > yourscore) {
        final.textContent = "You lose!";
      } else {
        final.textContent = "It's a tie!";
      }
      setTimeout(() => {
        container2.appendChild(final);
        disableEventListeners();  // Disable the event listeners
      }, 1000);
    }
  }, 3000);
}
