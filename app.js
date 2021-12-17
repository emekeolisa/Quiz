const correctAnswers = ['B', 'A', 'C', 'A', 'B', 'C', 'C', 'A', 'A', 'C', 'A', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');




// const data = localStorage.getItem('userAns')
// const newData = JSON.parse(data)
// console.log(newData)

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    let totalScore = 130;
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value,form.q7.value,form.q8.value,form.q9.value,form.q10.value,form.q11.value,form.q12.value,form.q13.value];
    console.log(userAnswers)
    localStorage.setItem('userAns', userAnswers);
    // console.log(userAns);

    

    // check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) {
            score += 10
        }
        console.log(score);
    });

    // show result on page
    window.scrollTo(0,0);
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        percent = Math.round(output/totalScore*100);
        result.querySelector('span').textContent = `${percent}%`
        if (output === score) {
            clearInterval(timer)
        } else {
            output++;
        }
    }, 10)

    

    

});