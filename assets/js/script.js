//assigned variables
var questionsCont = document.getElementById('quizContainer');
var questionTitle = document.getElementById("question-title");
var option1 = document.getElementById("opt0");
var option2 = document.getElementById("opt1");
var option3 = document.getElementById("opt2");
var option4 = document.getElementById("opt3");
var answer = document.getElementById("checkAnswer");
    // var resultsContainer = document.getElementById('results');
    // var submitButton = document.getElementById('submit');
var startButton = document.getElementById('start-btn-btn');
var startCont = document.getElementById('quiz-header')
var scoresButton = document.getElementById('scores');
var secondsLeft = 60;
var timeLeft = document.getElementById('timeLeft');
var timer = document.getElementById("timer");
var timeleft = 0;


var questions = [
      {
        question: 'Commonly used data types DO NOT include: ',
        options: [ 'strings', 'booleans', 'alerts', 'numbers'],
        correctAnswer: 2
        
      },

      {
          question: 'The condition in an if/else statement is enclosed within _______.',
          options: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
          correctAnswer: 2
      },

      {
          question: 'Arrays in JavaScript can be used to store ______.',
          options: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
          correctAnswer: 3
      }, 

      {
          question: 'String values must be enclosed within _______ when being assigned to variables.',
          options: ['commas', 'curly brackets', 'quotas', 'parentheses'],
          correctAnswer: 2
      },

      {
          question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
          options: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
          correctAnswer: 3
      }
     
    ];

    // console.log(questions);
var questionIndex = 0;
var correctAns = 0;
var questionNum = 0;
var scoreResult;


//to check if answer is right or wrong
function checkAnswer(correctAnswer){
        // console.log(event.target.innerText);
        if(questions[questionIndex].answer === questions[questionIndex].options[answer]) {
            correctAns++;
            answer.textContent = "Right";
        } else {
            secondsLeft -= 10;
            timeLeft.textContent = secondsLeft;
            answer.textContent = "Wrong";
        }
        questionIndex++
        if(questionIndex < questions.length) {
            nextQuestion();
        } else {
            timesUp();
        }
    
    }

function option1() { checkAnswer(0);}
function option2() { checkAnswer(1);}
function option3() { checkAnswer(2);}
function option4() { checkAnswer(3);}


//Timer for quiz
function setTime() {

    questionIndex = 0;
    secondsLeft = 60;
    timeLeft.textContent = secondsLeft;

    var interval = setInterval(function(){
        secondsLeft--;
        timeLeft.textContent= secondsLeft
        if (secondsLeft === 0) {
             clearInterval(interval);
             if(questionIndex < questions.length -1) {
                 timesUp();
             }
            }
          }, 1000);
          makeQuiz();
        };
//  document.getElementById("start-btn-btn").addEventListener("click", setTime);

function timesUp() {
    finalScore.textContent = correctAns;
}


//function for questions
function makeQuiz() {
   nextQuestion();
}   

function nextQuestion() {
            questionTitle.textContent = questions[questionIndex].question;
            option1.textContent = questions[questionIndex].options[0];
            option2.textContent = questions[questionIndex].options[1];
            option3.textContent = questions[questionIndex].options[2];
            option4.textContent = questions[questionIndex].options[3];
    }
console.log(questions[questionIndex].question);
console.log(questions[questionIndex].options);
// console.log(nextQuestion);

//show results
// function showResults() {
//     var answerContainer = quizContainer.querySelectorAll('.options');

//     var userAnswer = '';
//     var numCorrect = 0;

//     for(var i=0; i<questions.length; i++){
//         userAnswer = (answerContainer[i].querySelector('input[name = question '+i+']:checked')||{}).value;
//         if(userAnswer === questions[i].correctAnswer){
//             numCorrect++;
//             answerContainer[i].style.color = 'lightgreen';
//         }
//         else{
//             answerContainer[i].style.color = 'red';
//         }
//     }
//     resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;

// }




startButton.addEventListener('click', setTime);