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
      correctAnswer: 'Jupiter'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

// first function. gets calledback. populates the intial screen
// with the general trivia quiz title and the start quiz button

/***********Generate Functions *************/

function generateStartView() {
  console.log('Generating Start View');
  return `
  <div id="start-view">
  <h3>How much do you really know?</h3>
  <form id="js-start-quiz">
    <button type="submit">Start Quiz</button>
  </form>
  </div>
  `;
}

function generateQuestionView() {
  console.log('Generating Question View');
  const question = store.questions[store.questionNumber];
  return `
    <div id="question-view">
      <ul>
        <li>Question ${store.questionNumber + 1} of ${store.questions.length}</li>
        <li>Current Score: ${store.score}/${store.questions.length}</li>
      </ul>
      
      <form action="/action_page.php">
        <h3>${question.question}</h3>
        <input type="radio" id="A" name="answer" value="${question.answers[0]}">
        <label for="A">${question.answers[0]}</label>
        <input type="radio" id="B" name="answer" value="${question.answers[1]}">
        <label for="B">${question.answers[1]}</label>
        <input type="radio" id="C" name="answer" value="${question.answers[2]}">
        <label for="C">${question.answers[2]}</label>
        <input type="radio" id="D" name="answer" value="${question.answers[3]}">
        <label for="D">${question.answers[3]}</label>
        </form>
        <form id="js-question-submit">
          <button type="submit">Submit Answer</button>
        </form>
      </div>`;
}

function generateFeedbackViewCorrect() {
  console.log('Generating Feedback Correct view');
  return `
  <div id="feedback-view-correct">
    <ul>
      <li>Question ${store.questionNumber + 1} of ${store.questions.length}</li>
      <li>Current Score: ${store.score}/${store.questions.length}</li>
    </ul>
    <h2>Correct!</h2>

    <form id="js-next-question">
      <button type="submit">Next Question</button>
    </form>
  </div>`;
}

function generateFeedbackViewIncorrect() {
  console.log('Generating Feedback Incorrect View');
  return `
  <div id="feedback-view-incorrect">
    <ul>
      <li>Question ${store.questionNumber + 1} of ${store.questions.length}</li>
      <li>Current Score: ${store.score}/${store.questions.length}</li>
    </ul>
    <h2>Incorrect! The answer is ${store.questions[store.questionNumber].correctAnswer}.</h2>

    <form id="js-next-question">
      <button type="submit">Next Question</button>
    </form>
  </div>`;
}

function generateFinalView() {
  console.log('Generate Final View');
  return `
  <div>
    <h2>final score: ${store.score}</h2>
    <form id="js-try-again">
      <button type="submit">Try Again?</button>
    </form>
  </div>
  `;
}

/***********Render Functions **********/

function renderStart(){
  console.log('`renderStart` ran');
  $('.js-quiz-app').html(generateStartView());
}

function renderQuestionView(){
  console.log('Rendering Question');
  $('.js-quiz-app').html(generateQuestionView());
}

function renderFeedbackViewCorrect() {
  console.log('Rendering Feedback Correct View');
  $('.js-quiz-app').html(generateFeedbackViewCorrect());
}

function renderFeedbackViewIncorrect() {
  console.log('Rendering Feedback Incorrect View');
  $('.js-quiz-app').html(generateFeedbackViewIncorrect());
}

function renderFinalView(){
  console.log('Rendering Final View');
  $('.js-quiz-app').html(generateFinalView());
}



/***********Handle Functions **********/

// this is the function that runs when the start quiz button
// is clicked or engaged by the keyboard

function handleQuizStart() {
  $('.js-quiz-app').on('submit', '#js-start-quiz', function(event) {
    event.preventDefault();
    console.log('`handleQuizStart` ran');
    renderQuestionView();
  });
}

// Retrieve answer identifier of user-checked radio btn
// Perform check: User answer === Correct answer?
// Update STORE and render appropriate section

function handleAnswerSubmitted() {
  $('.js-quiz-app').on('submit', '#js-question-submit', () => {
    event.preventDefault();
    console.log('`handleAnswerSubmitted` ran');
    const selValue = $('input[type="radio"]:checked').val();
    console.log(selValue);
    if (selValue === `${store.questions[store.questionNumber].correctAnswer}` && selValue !== undefined) {
      store.score++;
      renderFeedbackViewCorrect();
    } else if (selValue !== `${store.questions[store.questionNumber].correctAnswer}` && selValue !== undefined) {
      renderFeedbackViewIncorrect();
    }
  });
}

function handleNextQuestion() {
  $('.js-quiz-app').on('submit', '#js-next-question', (event) => {
    event.preventDefault();
    store.questionNumber++;
    if (store.questionNumber < store.questions.length){
      console.log('Rendering Next question');
      renderQuestionView();
    } else {
      renderFinalView();
    }
  });
}

function handleTryAgain() {
  $('.js-quiz-app').on('submit', '#js-try-again', (event) =>{
    event.preventDefault();
    store.quizStarted = false;
    store.score = 0;
    store.questionNumber = 0;
    console.log('`handleTryAgain` ran');
    renderStart();
  });
}

function handleQuiz() {
  renderStart();
  handleQuizStart();
  handleNextQuestion();
  handleAnswerSubmitted();
  handleTryAgain();
}

$(handleQuiz);

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