var allQuestions = [ 
    'What is a String?', 
    'What is the definition of a Number?',
    'What is a Boolean?',
    'What does Null define?',
    'What is an Array?',
    'What is the purpose of a function?',
]

var timerEl = document.getElementById('myTimer');





function startGame() {
    
}

function nextQuestion() {

}

var inputWrong = document.getElementById('mybutton');
inputWrong.addEventListener('click', wrongAnswer); 

function wrongAnswer() {
    document.getElementById('mybutton').textContent = 'Try again'
    setTime()
}

// timer
function setTime() {
    //counts down from 00 seconds
    var timeLeft = 10;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
      }
    }, 1000);
  }