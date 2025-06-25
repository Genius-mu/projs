let score1 = document.querySelector('.score1')
let score2 = document.querySelector('.score2')
let total_score = document.querySelector('.total_score')

let errorScore = -1;
let successScore = 1;

const boxes = document.querySelectorAll('.box');

boxes.forEach(el => {
    let rand = Math.random()
    console.log(rand);
    
    let txt = ''
    
    if(rand < 0.5) {
        txt = 'success'
    } else {
        txt = 'error'
    }

    el.setAttribute('data-text', txt)

    el.addEventListener('click', () => {
        el.textContent = txt;

        if(el.textContent == 'success') {
            alert('success')
            el.style.color = 'white'
            el.style.textShadow = '0 0 20px white'
            let s_score = successScore++;
            // console.log(s_score);
            score1.textContent = s_score;
            localStorage.setItem('su_score', JSON.stringify(s_score))
        } else {
            alert('failed')
            el.style.color = 'red'
            el.style.textShadow = '0 0 20px red'
            let e_score = errorScore--;
            // console.log(e_score);
            score2.textContent = e_score;
            localStorage.setItem('er_score', JSON.stringify(e_score))
        }
    })
})

total_score.addEventListener('click', () => {
    let s_value = localStorage.getItem('su_score')
    // console.log(s_value);

    let e_value = localStorage.getItem('er_score')
    // console.log(e_value);

    let real_score = (Number(s_value) + Number(e_value))
    // console.log(real_score);
    alert(real_score)
})