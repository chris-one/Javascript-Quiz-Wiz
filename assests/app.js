var startBtn = document.getElementById('beginButton');

var questH2 = document.getElementById("question");

var thePlayEl = document.querySelector('.container');


var timerEl = document.getElementById('myTimer');

function startGame() {
    thePlayEl.style.display = 'block';
    startBtn.style.display = 'none';
    setTime()
    var reqNextQues = nextQuestion()
    let question = reqNextQues[0]
    let answer = reqNextQues[1]
    let solution = reqNextQues[2]

    questH2.textContent = question
}

function nextQuestion() {
    var random = Math.floor(Math.random() * ansQuest.length);
    let currentQuest = ansQuest[random]
    let question = currentQuest.question;
    let answer = currentQuest.answer;
    let solution = currentQuest.correctAnswer;
    return [question, answer, solution];
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
    },
    {
        question: "What is a Boolean?",
        answer: {
            a: "It's when my friend bo-leans to the side.",
            b: "A binary variable, having two possible values called “true” and “false.”.",
            c: "It a different way to spell bowling.",
        },
        correctAnswer: 'b',
    },
    {
        question: "What does Null define?",
        answer: {
            a: "Boring; dull. Dude, this party is completely null.",
            b: "Meaning no. Ex, Aye Nate can I borrow your car to go the store, NULL!",
            c: "Simply nothing, Null means there is no value.",
        },
        correctAnswer: 'c',
    },
    {
        question: "What is an Array?",
        answer: {
            a: "Its when nyou wake up in the morning and see a ray of sunshine.",
            b: "Is an ordered list of values.",
            c: "A loud call when you see your friend, Aye Ray!",
        },
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