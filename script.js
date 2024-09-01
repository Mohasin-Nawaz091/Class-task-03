let questions = [
    {
        question: "What is 2 + 2?",
        choices: ["2", "4", "3", "5"],
        correct: "4"
    },
    {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin", "Rome"],
        correct: "Paris"
    },
    {
        question: "What is 5 * 3?",
        choices: ["15", "10", "20", "25"],
        correct: "15"
    }
];

let currentQuestion = 0;
let score = 0;

const questionArea = document.getElementById('question-area');
const choices = document.querySelectorAll('.choice-btn');
const result = document.getElementById('result');
const nextBtn = document.getElementById('next-btn');
const scoreDisplay = document.getElementById('score');

function loadQuestion() {
    let q = questions[currentQuestion];
    questionArea.textContent = q.question;
    choices.forEach((btn, index) => {
        btn.textContent = q.choices[index];
    });
    result.textContent = '';
}

choices.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let userAnswer = e.target.textContent;
        if (userAnswer === questions[currentQuestion].correct) {
            result.textContent = 'Correct!';
            score++;
            scoreDisplay.textContent = 'Score: ' + score;
        } else {
            result.textContent = 'Try Again!';
        }
    });
});

nextBtn.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        alert("Quiz over! Your score: " + score);
        currentQuestion = 0;
        score = 0;
        scoreDisplay.textContent = 'Score: 0';
    }
    loadQuestion();
});

// Hover effect using mouseover
choices.forEach(btn => {
    btn.addEventListener('mouseover', () => {
        btn.style.backgroundColor = 'yellow';
    });
    btn.addEventListener('mouseout', () => {
        btn.style.backgroundColor = 'lightblue';
    });
});

// Keyboard interaction
document.addEventListener('keydown', (e) => {
    if (e.key === '1') choices[0].click();
    if (e.key === '2') choices[1].click();
    if (e.key === '3') choices[2].click();
    if (e.key === '4') choices[3].click();
});

// Load the first question when the page loads
loadQuestion();
