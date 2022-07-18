    //assigned variables
    var quizContainer = document.getElementById('quiz');
    var resultsContainer = document.getElementById('results');
    var submitButton = document.getElementById('submit');
    var startButton = document.getElementById('start-btn-btn');
    var scoresButton = document.getElementById('scores');
    var secondsLeft = 60;
    var countDown = document.getElementById('time-remaining')

    var questions= [
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




function checkAnswer(event){
        console.log(event.target.innerText);
    
    }

function setTime() {
    var interval = setInterval(function(){
        --secondsLeft;
       countDown.textContent= "Time remaining; " + secondsLeft + " seconds";
        if (secondsLeft === 0) {
             clearInterval(timerInterval);
            }
          }, 1000);
        }
document.getElementById("start-btn-btn").addEventListener("click", setTime);

function generateQuiz(){

//function for questions
function makeQuiz() {
    var output = [];
    var options = [];

   

            for(letter of questions[0].options) {
                options.push(
                    '<label>'
                        + '<button onclick= "checkAnswer(event)" value = "'+letter+'">'
                        + letter + '</button>'
                    + '</label>'
                );
            }
            output.push(
                '<div class = "question">' + questions[0].question + '</div>'
                + '<div class = "options">' + options.join('') + '</div>'
            );
        
console.log(output);


    quizContainer.innerHTML = output.join('');
    }



//show results
function showResults() {
    var answerContainer = quizContainer.querySelectorAll('.options');

    var userAnswer = '';
    var numCorrect = 0;

    for(var i=0; i<questions.length; i++){
        userAnswer = (answerContainer[i].querySelector('input[name = question '+i+']:checked')||{}).value;
        if(userAnswer === questions[i].correctAnswer){
            numCorrect++;
            answerContainer[i].style.color = 'lightgreen';
        }
        else{
            answerContainer[i].style.color = 'red';
        }
    }
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;

}


makeQuiz();
// submitButton.addEventListener('click', showResults);
}

startButton.addEventListener('click', generateQuiz);