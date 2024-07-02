const startButton = document.getElementById('startButton');
const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submitButton');
const resultContainer = document.getElementById('result-container');
const header = document.querySelector('header');

startButton.addEventListener('click', e => {
    quizContainer.style.display = 'block';
});

submitButton.addEventListener('click', e => {
    e.preventDefault();

    const correctAnswers = [
        'c',
        'b',
        'c',
        'b'
    ];

    const selectedOne = document.querySelector('input[name="q1"]:checked').value;
    const selectedTwo = document.querySelector('input[name="q2"]:checked').value;
    const selectedThree = document.querySelector('input[name="q3"]:checked').value;
    const selectedFour = document.querySelector('input[name="q4"]:checked').value;

    let points = 0;

    if(correctAnswers.includes(selectedOne)){
        points += 25;
    }
    if(correctAnswers.includes(selectedTwo)){
        points += 25;
    }
    if(correctAnswers.includes(selectedThree)){
        points += 25;
    }
    if(correctAnswers.includes(selectedFour)){{
        points += 25;
    }}

    const result = document.getElementById('result');
    result.textContent = 'You have obtained ' + points + ' points out of 100.'

    const pass = document.getElementById('pass');
    if(points >= 75){
        pass.textContent = 'You have passed the test.';
        quizContainer.style.display = 'none';
        resultContainer.style.display = 'block';

    } else{
        pass.textContent = 'You have failed the test.';
        const body = document.querySelector('body');
        body.style.color = 'red';

        resultContainer.style.border = 'red solid 1px';

        const button = document.querySelectorAll('button');
        button.forEach(button =>{
            button.style.backgroundColor = 'red';

            quizContainer.style.display = 'none';
            resultContainer.style.display = 'block';
        
            setTimeout(() => {
                resultContainer.style.display = 'none';
                header.textContent = 'Access Denied'
        
            }, 7000);
        })
    }

})


