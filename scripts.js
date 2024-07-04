// Define the exercises and their correct answers
const exercises = [
    { question: "3 + 4 =", answer: "7" },
    { question: "9 - 2 =", answer: "7" },
    { question: "5 * 3 =", answer: "15" },
    { question: "8 / 2 =", answer: "4" },
    { question: "2/3 + 1/4 =", answer: "11/12" },
    { question: "3/5 - 2/5 =", answer: "1/5" },
    { question: "4/7 * 2/3 =", answer: "8/21" },
    { question: "5/8 / 1/2 =", answer: "5/4" },
    { question: "7 + 6 =", answer: "13" },
    { question: "15 - 5 =", answer: "10" },
    { question: "6 * 4 =", answer: "24" },
    { question: "18 / 3 =", answer: "6" },
    { question: "1/2 + 2/5 =", answer: "9/10" },
    { question: "7/10 - 3/10 =", answer: "2/5" },
    { question: "3/4 * 4/5 =", answer: "3/5" },
    { question: "9/12 / 3/4 =", answer: "1" },
    { question: "8 + 5 =", answer: "13" },
    { question: "14 - 6 =", answer: "8" },
    { question: "9 * 7 =", answer: "63" },
    { question: "20 / 4 =", answer: "5" }
];

// Function to initialize exercises on the page
function initializeExercises() {
    const exercisesContainer = document.getElementById('exercises-container');
    exercises.forEach((exercise, index) => {
        const exerciseHTML = `
            <div class="exercise">
                <p>${index + 1}. ${exercise.question}</p>
                <input type="text" id="exercise${index + 1}" placeholder="Your answer">
                <button onclick="checkAnswer(${index})">Submit</button>
                <p id="result${index + 1}"></p>
            </div>
        `;
        exercisesContainer.insertAdjacentHTML('beforeend', exerciseHTML);
    });
}

// Function to check the answer for a specific exercise
function checkAnswer(index) {
    const answer = document.getElementById(`exercise${index + 1}`).value.trim().toLowerCase();
    const result = document.getElementById(`result${index + 1}`);
    if (answer === exercises[index].answer.toLowerCase()) {
        result.textContent = 'Correct!';
        result.style.color = 'green';
    } else {
        result.textContent = 'Try again.';
        result.style.color = 'red';
    }
}

// Initialize exercises when the page loads
window.addEventListener('DOMContentLoaded', () => {
    initializeExercises();
});
