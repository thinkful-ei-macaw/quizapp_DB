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
      correctAnswer: 'New Delhi',
      picture: 'https://media.gettyimages.com/photos/bahai-temple-picture-id145789857?s=2048x2048',
      description: 'Lotus Temple, Bahai house of worship in New Delhi, India'
    },
    {
      question: 'What group of animals is called a caravan?',
      answers: [
        'Camels',
        'Horses',
        'Giraffes',
        'Zebras'
      ],
      correctAnswer: 'Camels',
      picture: 'https://i2.wp.com/thelincolnite.co.uk/wp-content/uploads/2018/10/Camel-stock-Christmas-Lincoln-BIG.jpg?resize=900%2C505&ssl=1',
      description: 'A camel with his head turned to the left'
    },
    {
      question: 'What year did Steve Jobs die?',
      answers: [
        '2019',
        '2015',
        '2003',
        '2012'
      ],
      correctAnswer: '2012',
      picture: 'https://specials-images.forbesimg.com/imageserve/5b8576db31358e0429c734e3/416x416.jpg?background=000000&cropX1=211&cropX2=2381&cropY1=900&cropY2=3072',
      description: 'Steve Jobs smiling'
    },
    {
      question: 'What tech company bought Columbia Pictures?',
      answers: [
        'Sony',
        'Apple',
        'Microsoft',
        'Panasonic'
      ],
      correctAnswer: 'Sony',
      picture: 'https://i.ytimg.com/vi/FD5c_r0TJbE/maxresdefault.jpg',
      description: 'The Sony logo. Sony, make.believe'
    },
    {
      question: 'What planet has the strongest gravity?',
      answers: [
        'Jupiter',
        'Venus',
        'Pluto',
        'Saturn'
      ],
      correctAnswer: 'Jupiter',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jupiter%2C_image_taken_by_NASA%27s_Hubble_Space_Telescope%2C_June_2019_-_Edited.jpg/625px-Jupiter%2C_image_taken_by_NASA%27s_Hubble_Space_Telescope%2C_June_2019_-_Edited.jpg',
      description: 'The planet Jupiter.'
    }
  ],
 
  questionNumber: 0,
  score: 0,
  userAnswer: '',
};

/***********Generate Functions *************/

function generateStartView() {
  console.log('Generating Start View');
  return `
  <div id="start-view">
    <h2>How much do you really know?</h2>
      <form id="js-start-quiz">
        <button class="button" type="submit">Start Quiz</button>
      </form>
  </div>
  `;
}

function generateQuestionView() {
  console.log('Generating Question View');
  return `
    <div id="question-view">
      <p>
        <ul class="tracker">
          <li>Question ${store.questionNumber + 1} of ${store.questions.length}</li>
          <li>Current Score: ${store.score}/${store.questions.length}</li>
        </ul>
      </p>
      <form class="radio" action="/action_page.php">
        <h2>${store.questions[store.questionNumber].question}</h2>
        <ul class="radio">
          <li class="radio">
            <input type="radio" id="A" name="answer" value="${store.questions[store.questionNumber].answers[0]}">
            <label for="A">${store.questions[store.questionNumber].answers[0]}</label>
          </li>
          <li class="radio">
            <input type="radio" id="B" name="answer" value="${store.questions[store.questionNumber].answers[1]}">
            <label for="B">${store.questions[store.questionNumber].answers[1]}</label>
          </li>
          <li class="radio">
            <input type="radio" id="C" name="answer" value="${store.questions[store.questionNumber].answers[2]}">
            <label for="C">${store.questions[store.questionNumber].answers[2]}</label>
          </li>
          <li class="radio">
            <input type="radio" id="D" name="answer" value="${store.questions[store.questionNumber].answers[3]}">
            <label for="D">${store.questions[store.questionNumber].answers[3]}</label>
          </li>
        </ul>
        </form>
        <form id="js-question-submit">
          <button class="button" type="submit">Submit Answer</button>
        </form>
      </div>`;
}

function generateFeedbackViewCorrect() {
  console.log('Generating Feedback Correct view');
  return `
  <div id="feedback-view-correct">
    <ul class="tracker">
      <li>Question ${store.questionNumber + 1} of ${store.questions.length}</li>
      <li>Current Score: ${store.score}/${store.questions.length}</li>
    </ul>
    <h2>Your answer, ${store.userAnswer}, was Correct!</h2>
    <img src="${store.questions[store.questionNumber].picture}" alt="${store.questions[store.questionNumber].description}">
    <form id="js-next-question">
      <button type="submit">Continue</button>
    </form>
  </div>`;
}

function generateFeedbackViewIncorrect() {
  console.log('Generating Feedback Incorrect View');
  return `
  <div id="feedback-view-incorrect">
    <ul class="tracker">
      <li>Question ${store.questionNumber + 1} of ${store.questions.length}</li>
      <li>Current Score: ${store.score}/${store.questions.length}</li>
    </ul>
    <h2>
    Incorrect! The answer is ${store.questions[store.questionNumber].correctAnswer}.
    </h2>
    <img src="${store.questions[store.questionNumber].picture}" alt="${store.questions[store.questionNumber].description}">
    <h3>
    You answered ${store.userAnswer}.
    </h3>
    <form id="js-next-question">
      <button type="submit">Continue</button>
    </form>
  </div>`;
}

function generateFinalView() {
  console.log('Generating Final View');
  return `
  <div id="results-view">
    <h2>Final Score: ${store.score}/${store.questions.length}</h2>
    <h3>Would you like to try again?</h3>
    <form id="js-try-again">
      <button type="submit">Try Again</button>
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
  $('.js-quiz-app').on('submit', '#js-question-submit', (event) => {
    event.preventDefault();
    console.log('`handleAnswerSubmitted` ran');
    const selValue = $('input[type="radio"]:checked').val();
    console.log(selValue);
    store.userAnswer = selValue;
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