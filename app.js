/* eslint-disable no-console */
/**
 * Example store structure
 */
'use strict';

// store.questions[0].answers[0]

const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What is the Capital of India?',
      answers: [
        'Bangladesh',
        'New Delhi',
        'Caracas',
        'Tehran'
      ],
      correctAnswer: 'New Delhi'
    },
    {
      question: 'What group of animals is called a caravan?',
      answers: [
        'Camels',
        'Horses',
        'Giraffes',
        'Zebras'
      ],
      correctAnswer: 'Camels'
    },
    {
      question: 'What year did Steve Jobs die?',
      answers: [
        '2019',
        '2015',
        '2003',
        '2012'
      ],
      correctAnswer: '2012'
    },
    {
      question: 'What tech company bought Columbia Pictures?',
      answers: [
        'Sony',
        'Apple',
        'Microsoft',
        'Panasonic'
      ],
      correctAnswer: 'Sony'
    },
    {
      question: 'What planet has the strongest gravity?',
      answers: [
        'Jupiter',
        'Venus',
        'Pluto',
        'Saturn'
      ],
      correctAnswer: 'Saturn'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};


function generateAnswerList(answers){
  //template generator 1
}



function renderStart(){
  console.log('Generating start view');
  const start = `
  <div id="start-view">
  <form id="js-start-quiz">
  <button type="submit">Start Quiz</button>
  </form>
</div>`;
  $('.js-quiz-app').html(start);
}

function renderQuestionText(){
  console.log('Generating questions view')
  for (let i = 0; i < store.questions.length; i++) {
    
    let currentScore = 0;
    let currentQuestion = 1;
    const questions = `
    <div id="question-view">
        <ul>
          <li>${currentQuestion} of ${store.questions.length}</li>
          <li>${currentScore}/${store.questions.length}</li>
        </ul>
        
        <form action="/action_page.php">
          <p>${store.questions[0].question}</p>
          <input type="radio" id="A" name="answer" value="answer A">
          <label for="A">${store.questions[0].answers[0]}</label>
          <input type="radio" id="B" name="answer" value="answer B">
          <label for="B">${store.questions[0].answers[1]}</label>
          <input type="radio" id="C" name="answer" value="answer C">
          <label for="C">${store.questions[0].answers[2]}</label>
          <input type="radio" id="D" name="answer" value="answer A">
          <label for="D">${store.questions[0].answers[3]}</label>
        </form>
        <form id="js-question-submit"></form>
        <button type="submit">Submit Answer</button>
      </div>`;
      $('.js-quiz-app').html(questions);
  }
}

// Event handlers
function handleAnswerSubmitted() {
  $('.user-controls').on('click', '.submit-answer', () => {
    
    // Retrieve answer identifier of user-checked radio btn
    // Perform check: User answer === Correct answer?
    // Update STORE and render appropriate section
  });
}

function handleQuizStart() {
  $('.js-quiz-app').on('submit', '#js-start-quiz', function(event) {
    event.preventDefault();
    console.log('`handleQuizStart` ran');
    renderQuestionText();
  });
}

function handleQuiz() {
  renderStart();
  handleQuizStart();
}


$(handleQuiz);
$(handleAnswerSubmitted);

/**
   *
   * Your app should include a render() function, that regenerates
   * the view each time the store is updated. See your course
   * material, consult your instructor, and reference the slides
   * for more details.
   *
   * NO additional HTML elements should be added to the index.html file.
   *
   * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
   *
   */