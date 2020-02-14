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
  questionNumber: 1,
  score: 0
};

// first function. gets calledback. populates the intial screen
// with the general trivia quiz title and the start quiz button

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

// this function renders the html code that populates when
// it is called inside of handleQuizStart

function renderQuestionText(){
  console.log('Generating questions view')
  const questions = `
  <div id="js-question-view">
      <ul>
        <li>${store.questionNumber} of ${store.questions.length}</li>
        <li>${store.score}/${store.questions.length}</li>
      </ul>
        
      <form action="/action_page.php">
        <p>${store.questions[0].question}</p>
        <input type="radio" id="A" name="answer" value="${store.questions[0].answers[0]}">
        <label for="A">${store.questions[0].answers[0]}</label>
        <input type="radio" id="B" name="answer" value="${store.questions[0].answers[1]}">
        <label for="B">${store.questions[0].answers[1]}</label>
        <input type="radio" id="C" name="answer" value="${store.questions[0].answers[2]}">
        <label for="C">${store.questions[0].answers[2]}</label>
        <input type="radio" id="D" name="answer" value="${store.questions[0].answers[3]}">
        <label for="D">${store.questions[0].answers[3]}</label>
      </form>
      <form id="js-question-submit">
      <button type="submit">Submit Answer</button>
      </form>
    </div>`;
  $('.js-quiz-app').html(questions);
}

// this is the function that runs when the start quiz button
// is clicked or engaged by the keyboard

function handleQuizStart() {
  $('.js-quiz-app').on('submit', '#js-start-quiz', function(event) {
    event.preventDefault();
    console.log('`handleQuizStart` ran');
    renderQuestionText();
  });
}

// Retrieve answer identifier of user-checked radio btn
// Perform check: User answer === Correct answer?
// Update STORE and render appropriate section

function handleAnswerSubmitted() {
  $('.js-quiz-app').on('click', '#js-question-submit', () => {
    event.preventDefault();
    console.log('`handleAnswerSubmitted` ran')
    const selValue = $("input[type='radio']:checked").val();
    if (selValue === undefined) {} if (selValue === `${store.questions[0].correctAnswer}`) {
      renderFeedbackPageCorrect();
    } else if (selValue !== `${store.questions[0].correctAnswer}`) {
      renderFeedbackPageIncorrect();
    }
});
}

// this is the function that renders the html code that populates
// when it is called inside of whatever i call the function that
// happens when an answer is submitted. it will need to publish
// the feedback (correct) and provide a button to go
// to the next question

function renderFeedbackPageCorrect() {
  console.log('Generating feedback correct view');
  const correct = `
  <div id="feedback-view-correct">
  <ul>
    <li>${store.questionNumber} of ${store.questions.length}</li>
    <li>${store.score}/${store.questions.length}</li>
  </ul>
    <h2>Correct!</h2>
    <form action="/action_page.php">
    <p>${store.questions[0].question}</p>
    <input type="radio" id="A" name="answer" value="${store.questions[0].answers[0]}">
    <label for="A">${store.questions[0].answers[0]}</label>
    <input type="radio" id="B" name="answer" value="${store.questions[0].answers[1]}">
    <label for="B">${store.questions[0].answers[1]}</label>
    <input type="radio" id="C" name="answer" value="${store.questions[0].answers[2]}">
    <label for="C">${store.questions[0].answers[2]}</label>
    <input type="radio" id="D" name="answer" value="${store.questions[0].answers[3]}">
    <label for="D">${store.questions[0].answers[3]}</label>
  </form>
  <form id="js-next-question">
  <button type="submit">Next Question</button>
  </form>
</div>`;
$('.js-quiz-app').html(correct);
}

// this is the function that renders the html code that populates
// when it is called inside of whatever i call the function that
// happens when an answer is submitted. it will need to publish
// the feedback (incorrect), tell the user the correct answer
// and provide a button to go to the next question

function renderFeedbackPageIncorrect() {
  console.log('Generating feedback incorrect view');
  const incorrect = `
  <div id="feedback-view-correct">
  <ul>
    <li>${store.questionNumber} of ${store.questions.length}</li>
    <li>${store.score}/${store.questions.length}</li>
  </ul>
  <h2>Incorrect! The answer is ${store.questions[0].correctAnswer};</h2>
    <form action="/action_page.php">
    <p>${store.questions[0].question}</p>
    <input type="radio" id="A" name="answer" value="${store.questions[0].answers[0]}">
    <label for="A">${store.questions[0].answers[0]}</label>
    <input type="radio" id="B" name="answer" value="${store.questions[0].answers[1]}">
    <label for="B">${store.questions[0].answers[1]}</label>
    <input type="radio" id="C" name="answer" value="${store.questions[0].answers[2]}">
    <label for="C">${store.questions[0].answers[2]}</label>
    <input type="radio" id="D" name="answer" value="${store.questions[0].answers[3]}">
    <label for="D">${store.questions[0].answers[3]}</label>
  </form>
  <form id="js-next-question">
  <button type="submit">Next Question</button>
  </form>
</div>`;
$('.js-quiz-app').html(incorrect);
}

// this function should populate the next question when pressed

function generateNextQuestion() {}

function generateAnswerList(answers){
  //template generator 1
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