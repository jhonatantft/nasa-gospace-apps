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
      a: 'Oxygen',
      b: 'Carbon  dioxide',
      c: 'Carbon monoxide',
      d: 'Helium',
      ans: 'b'
    },
    {
      question : '2) How long is Mars in diameter?' ,
      a: 'Alternative to if-else',
      b: 'Switch statement',
      c: 'If-then-else statement',
      d: '6.779 km',
      ans: 'd'
    },
    {
      question : '3) The solar system is composed of eight planets, which move around a central star, the Sun. Mark the alternative that indicates the position of Mars in the solar system, taking the Sun as its starting point' ,
      a: 'Conditional block',
      b: 'Mars is the fourth planet from the Sun',
      c: 'Both conditional block and a single statement',
      d: 'Block that contains a single statement',
      ans: 'b'
    },
    {
      question : '4) Mars is located between the planets:' ,
      a: 'last()',
      b: 'get()',
      c: 'Earth and Jupiter',
      d: 'None of the above.',
      ans: 'c'
    },
    {
      question : '5) Using the diameter as a reference, we can say that Mars is:' ,
      a: 'reverse()',
      b: 'The second smallest planet in the solar system',
      c: 'slice()',
      d: 'some()',
      ans: 'b'
    },
    {
      question : '6) Using the diameter as a reference, we can say that Mars is:' ,
      a: 'reverse()',
      b: 'Mission focused on astrobiology , including the search for signs of ancestral microbial life',
      c: 'slice()',
      d: 'some()',
      ans: 'b'
    }
  ];

  // const cardSlider = document.querySelector('.card-slider');

  
  let score = 0;

  const questionEl = document.querySelectorAll('.qestion');
  questionEl.forEach((el, index) => {
    const card = el.parentElement.parentElement;
    const labelA = card.querySelector('.ansa-' + index);
    const labelB = card.querySelector('.ansb-' + index);
    const labelC = card.querySelector('.ansc-' + index);
    const labelD = card.querySelector('.ansd-' + index);
    const ansList = card.querySelectorAll('.ansList');
    const submit = card.querySelector('#submit-' + index);
    const showscore = card.querySelector('#showscore-' + index);
    const questionBar = card.querySelector('.question-bar');
    
    let countQuest = 0;
    // loadQuestion();

    // function loadQuestion(){
    //   const Qdb = questionDB[index];
    //   el.innerText = Qdb.question;
    //   labelA.innerText = Qdb.a;
    //   labelB.innerText = Qdb.b;
    //   labelC.innerText = Qdb.c;
    //   labelD.innerText = Qdb.d;
    // }
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
      if(checkedAnswer === (questionDB[index].ans + '-' + index)){
        score++;
      }
      countQuest++;
      deselectAll();
      // if(countQuest < questionDB.length){
      //   loadQuestion();
      // }else{
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

        const coinsElement = document.querySelector('#walletCoins');
        coinsElement.innerHTML = score;
      // }
    });
  });

  const updateWalletButton = document.querySelector('#updateWallet');
  updateWalletButton.addEventListener('click', function () {
    const csrf = document.querySelector('.wallet-coins input');
    const token = csrf.value;

    const totalCoins = document.querySelector('.total-wallet-coins span.wallet').innerHTML || 0;

    const newTotalCoins = Number(totalCoins) + Number(score);
    fetch('/challenges/score', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': token
      },
      body: JSON.stringify({
        score: newTotalCoins
      })
    }).then(res => {
      console.log('Request complete! response: ', res);
      location.reload();
    });
  });
});
