function checkAnswer1() {
    const answer = document.getElementById('exercise1').value;
    const result = document.getElementById('result1');
    if (answer == 2) {
        result.textContent = 'Correct!';
        result.style.color = 'green';
    } else {
        result.textContent = 'Try again.';
        result.style.color = 'red';
    }
}

function checkAnswer2() {
    const answer = document.getElementById('exercise2').value;
    const result = document.getElementById('result2');
    if (answer.toLowerCase() === '2x') {
        result.textContent = 'Correct!';
        result.style.color = 'green';
    } else {
        result.textContent = 'Try again.';
        result.style.color = 'red';
    }
}
