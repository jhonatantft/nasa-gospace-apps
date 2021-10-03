/* eslint-env jquery, browser */
$(document).ready(() => {

  // Place JavaScript code here...
  $('.card-slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  const questionDB = [
    {
      question : "1) What is the main gas in Mars' atmosphere?",
      a: 'Object-Oriented',
      b: 'Carbon dioxide',
      c: 'Assembly-language',
      d: 'High-level',
      ans: 'b'
    },
    // {
    //   question : '2) Which one of the following also known as Conditional Expression:' ,
    //   a: 'Alternative to if-else',
    //   b: 'Switch statement',
    //   c: 'If-then-else statement',
    //   d: 'Immediate if',
    //   ans: 'd'
    // },
    // {
    //   question : '3) In JavaScript, what is a block of statement?' ,
    //   a: 'Conditional block',
    //   b: 'Block that combines a number of statements into a single compound statement',
    //   c: 'Both conditional block and a single statement',
    //   d: 'Block that contains a single statement',
    //   ans: 'b'
    // },
    // {
    //   question : '4) Which built-in method removes the last element from an array and returns that element?' ,
    //   a: 'last()',
    //   b: 'get()',
    //   c: 'pop()',
    //   d: 'None of the above.',
    //   ans: 'c'
    // },
    // {
    //   question : '5) Which of the following function of Array object removes the first element from an array and returns that element?' ,
    //   a: 'reverse()',
    //   b: 'shift()',
    //   c: 'slice()',
    //   d: 'some()',
    //   ans: 'b'
    // }
  ];
  
  
  const questionEl = document.querySelector('.qestion');
  const labelA = document.querySelector('.ansa');
  const labelB = document.querySelector('.ansb');
  const labelC = document.querySelector('.ansc');
  const labelD = document.querySelector('.ansd');
  const ansList = document.querySelectorAll('.ansList');
  const submit = document.querySelector('#submit');
  const showscore = document.querySelector('#showscore');
  const questionBar = document.querySelector('.question-bar');
  
  let countQuest = 0;
  let score = 0;
  // console.log(questionDB[countQuest]);
  loadQuestion();
  function loadQuestion(){
    const Qdb = questionDB[countQuest];
    questionEl.innerText = Qdb.question;
    labelA.innerText = Qdb.a;
    labelB.innerText = Qdb.b;
    labelC.innerText = Qdb.c;
    labelD.innerText = Qdb.d;
  }
  const getCheckAnswer = () => {
    let answer;
    ansList.forEach((currentAns) =>{
      if(currentAns.checked){
        answer = currentAns.id;
      }
    });
    return answer;
  }
  const deselectAll = () => {
    ansList.forEach((currentAns) => currentAns.checked = false);
  
  }
  submit.addEventListener('click', function(e){
    const checkedAnswer = getCheckAnswer();
    if(checkedAnswer === questionDB[countQuest].ans){
      score++;
    }
    countQuest++;
    deselectAll();
    if(countQuest < questionDB.length){
      loadQuestion();
    }else{
      let wrongAwnswer = questionDB.length - score;
      // <button class="btn" onClick="location.reload()"><?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.04 122.88" style="enable-background:new 0 0 122.04 122.88" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0" d="M117.31,9.3v39.28H78.03l-4.63,0l3.27-3.28l11.45-11.45c-0.75-0.73-1.54-1.44-2.36-2.11 c-1.08-0.88-2.22-1.72-3.38-2.48l0,0c-6.02-3.93-13.21-6.21-20.94-6.21l-0.01,0v-0.01c-10.59,0-20.18,4.3-27.12,11.24 c-6.94,6.94-11.24,16.53-11.24,27.11h0.01v0.05h-0.01c0,10.59,4.3,20.19,11.24,27.12c6.94,6.94,16.53,11.24,27.11,11.24v-0.01 l0.08,0v0.01c3.7,0,7.39-0.54,10.93-1.59v0c1.95-0.58,3.87-1.33,5.71-2.22c9.39-4.54,16.65-12.8,19.87-22.87l0.43-1.33l23.61,0 l-0.47,2.3l-0.01,0.06v0.01c-0.81,3.84-2.01,7.62-3.54,11.24v0.01c-1.5,3.55-3.37,6.98-5.52,10.19 c-11.02,16.43-29.78,27.26-51.05,27.26h-0.02v-0.01c-16.96,0-32.33-6.88-43.43-17.99v-0.01C6.89,93.77,0.02,78.42,0.01,61.47 l-0.01,0v-0.05l0.01,0c0-16.96,6.88-32.32,18-43.43l0,0C29.11,6.89,44.46,0.02,61.41,0.01V0l0.06,0v0.01 c8.71,0,17.01,1.83,24.51,5.1c1.21,0.53,2.43,1.1,3.6,1.71c5.48,2.83,10.47,6.46,14.83,10.74l9.61-9.61l3.27-3.27V9.3L117.31,9.3 L117.31,9.3z"/></g></svg>Play again </button></div>`;
      
      showscore.innerHTML = `<h3>You scored</h3>
      <div class="scoreBoard">
      <span class="scoreCount">${score} / ${questionDB.length} </span>
      <div class="wrongAwnswer">Wrong Answer: ${wrongAwnswer}</div>
      <button class="btn" onClick="location.reload()">Play again </button></div>`;
      showscore.classList.remove('scoreArea');
      questionBar.classList.add('hidden');
      document.body.classList.add('score-color--white');
    }
  });
});
