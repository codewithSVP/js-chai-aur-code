# Projects from 'Chai aur Javascript'

## Project 1: Color Switcher

#### HTML:
``` html
<!-- Added this as an extra color switcher block -->
<span class="button" id="purple"></span>
```

#### CSS:
``` css
/* CSS property for added color block */
#purple {
  background: purple;
}
```

#### JS:
``` javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body')

buttons.forEach( function(button) {
  // console.log(button)
  button.addEventListener('click', function(event) {
    console.log(event)
    console.log(event.target)
    switch (event.target.id) {
      case "grey":
        body.style.backgroundColor = event.target.id
        break;
      case "white":
        body.style.backgroundColor = event.target.id
        break;
      case "blue":
        body.style.backgroundColor = event.target.id
        break;
      case "yellow":
        body.style.backgroundColor = event.target.id
        break;
      case "purple":
        body.style.backgroundColor = event.target.id
        break;
    }
  })
} )
```

## Project 2: BMI Calculator

#### JS:
``` javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height == '' || height <= 0 || isNaN(height)) {
    results.innerText = 'Please provide a valid height.';
  } else if (weight == '' || weight <= 0 || isNaN(weight)) {
    results.innerText = 'Please provide a valid weight.';
  } else {
    // bmi calculation formula: kg/m^2
    const bmi = (weight / (height ** 2 / 10 ** 4)).toFixed(2);

    // results.innerText = `Your BMI: ${bmi}`;

    if (bmi < 18.6) {
      results.innerText = `Your BMI: ${bmi} (Under-weight)`;
    } else if (bmi > 24.9) {
      results.innerText = `Your BMI: ${bmi} (Over-weight)`;
    } else {
      results.innerText = `Your BMI: ${bmi} (Normal Range)`;
    }
  }
});
```

## Project 3: Digital Clock

#### JS:
``` javascript
const clock = document.querySelector('#clock');

setInterval(function() {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerText = date.toLocaleTimeString()
}, 1000)
```

## Project 4: Guess the Number

#### JS:
``` javascript
let randomNum = Math.round(Math.random() * 100 + 1);

const submitBtn = document.querySelector('#submit');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (event) {
    event.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (guess == '' || guess < 1 || guess > 100 || isNaN(guess)) {
    alert('Please enter a valid number');
  } else {
    prevGuess.push(guess);
    if (numGuess == 11) {
      displayGuess(guess);
      displayMessage(`Game Over! The random number was: ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess == randomNum) {
    displayMessage('Congrats! YOu guessed it right.');
    endGame();
  } else if (guess < randomNum) {
    displayMessage('Guess higher!');
  } else {
    displayMessage('Guess lower!');
  }
}

function displayGuess(guess) {
  userInput.value = ''; // reset input value
  guessSlot.innerText += `${guess}, `;
  numGuess++;
  remaining.innerText = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerText = `${message}`;
}

function endGame() {
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
  startOver.appendChild(p)
  
  playGame = false
  newGame()
}

function newGame() {
  const newGameBtn = document.querySelector('#newGame')
  newGameBtn.addEventListener('click', function(event) {
    randomNum = Math.round(Math.random() * 100 + 1);
    prevGuess = []
    numGuess = 1
    guessSlot.innerText = ""
    remaining.innerText = `${11 - numGuess}`;
    userInput.removeAttribute('disabled')
    lowOrHi.innerText = ""
    startOver.removeChild(p)
    
    playGame = true
  })
}
```
## Project 5: Keyboard Checker

#### JS:
``` javascript
const insertDiv = document.querySelector('#insert');

window.addEventListener('keydown', (e) => {
  insertDiv.innerHTML = `
  <div class="color">
    <table>
      <tr>
        <th>Key</th>
        <th>Keycode</th>
        <th>Code</th>
      </tr>
      <tr>
        <td>${e.key === ' ' ? 'Space' : e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
      </tr>
    </table>
  </div>
  `;
});
```

## Project 6: Unlimited Colors

#### JS:
``` javascript
const randomColors = function () {
  const hex = '0123456789abcdef';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;

const startChangingColor = function () {
  intervalId = setInterval(changeIntColor, 1500);

  function changeIntColor() {
    document.body.style.backgroundColor = randomColors();
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
};
intervalId = null;

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);
```