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
  
    
   const question = store.questions[store.questionNumber];
    const questions = `
    <div id="question-view">
        <ul>
          <li>${store.questionNumber} of ${store.questions.length}</li>
          <li>${store.score}/${store.questions.length}</li>
        </ul>
      
        <form id="js-question-submit">
          <p>${question.question}</p>
          <input type="radio" id="A" name="answer" value="answer A">
          <label for="A">${question.answers[0]}</label>
          <input type="radio" id="B" name="answer" value="answer B">
          <label for="B">${question.answers[1]}</label>
          <input type="radio" id="C" name="answer" value="answer C">
          <label for="C">${question.answers[2]}</label>
          <input type="radio" id="D" name="answer" value="answer A">
          <label for="D">${question.answers[3]}</label>
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


function generateAnswerList(answers){
  //template generator 1
}
// Event handlers
function handleAnswerSubmitted() {
  $('body').on('submit', '#js-question-submit', (event) => {
    console.log('hello world');
    event.preventDefault();
    store.questionNumber++;
    if(store.questionNumber < store.questions.length){
      renderQuestionText();
    }else{
      renderFinalScore();
    };
   
    
    // Retrieve answer identifier of user-checked radio btn
    // Perform check: User answer === Correct answer?
    // Update STORE and render appropriate section
  });
}


function renderFinalScore(){
$('.js-quiz-app').html(`
<div>final score</div>`)
};
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