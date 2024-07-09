document.addEventListener('DOMContentLoaded', function() {
    generateElementaryMathExercises();
    generateFunctionsEquationsExercises();
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateElementaryMathExercises() {
    const exercises = document.getElementById('elementary-math-exercises');
    if (exercises) {
        exercises.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            const a = getRandomInt(1, 10);
            const b = getRandomInt(1, 10);
            exercises.innerHTML += `<li>Solve for x: \\(${a}x + ${b} = 0\\)</li>`;
        }
        MathJax.typesetPromise();
    }
}

function generateFunctionsEquationsExercises() {
    const exercises = document.getElementById('functions-equations-exercises');
    if (exercises) {
        exercises.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            const a = getRandomInt(1, 10);
            const b = getRandomInt(1, 10);
            const c = getRandomInt(1, 10);
            exercises.innerHTML += `<li>Solve the quadratic equation: \\(${a}x^2 + ${b}x + ${c} = 0\\)</li>`;
        }
        MathJax.typesetPromise();
    }
}
