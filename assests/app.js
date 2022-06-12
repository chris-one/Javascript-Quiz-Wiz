// var allQuestions = [ 
//     'What is a String?', 
//     'What is the definition of a Number?',
//     'What is a Boolean?',
//     'What does Null define?',
//     'What is an Array?',
//     'What is the purpose of a function?',
// ]

var startBtn = document.getElementById('beginButton');

var thePlayEl = document.querySelector('.container');


var timerEl = document.getElementById('myTimer');

function startGame() {
    thePlayEl.style.display = 'block';
    startBtn.style.display = 'none';
    setTime()
    nextQuestion()
}

function nextQuestion() {
    var random = Math.floor(Math.random() * ansQuest.length);
    let question = ansQuest
    console.log(question);
}

var ansQuest = [
    {
        question: "What is a String?",
        answer: {
            a: "A string is a sequence of one or more characters that may consist of letters, numbers, or symbols.",
            b: "Is what you tie your shoes with, so you don't trip over yourself in public.",
            c: "Strings are used to make clothing to wear, to cover yourself everyday.",
        },
        correctAnswer: 'a',
    },
    {
        question: "What is the a definiton of a Number?",
        answer: {
            a: "Is something we learned in elemantary to count to 10",
            b: "Are the wrong 7 digit's the girl gave you, that doesn't like you.",
            c: "The number data type is used to represent positive or negative number with or without decimal place.",
        },
        correctAnswer: 'c',
    }
]

// var inputWrong = document.getElementById('mybutton');
// inputWrong.addEventListener('click', wrongAnswer); 

// function wrongAnswer() {
    // document.getElementById('mybutton').textContent = 'Try again'
    // setTime()
// }

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

  startBtn.addEventListener('click', startGame);