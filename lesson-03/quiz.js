const quizData = [
    {
        question: "What is the capital of France?",
        options: ["A. London", "B. Paris", "C. Rome", "D. Berlin"],
        correct: "B",
    },
    {
        question: "What is 5 + 3?",
        options: ["A. 4", "B. 8", "C. 12", "D. 2"],
        correct: "B",
    },
    {
        question: "What is 8 + 4?",
        options: ["A. 4", "B. 8", "C. 12", "D. 2"],
        correct: "C",
    },
    {
        question: "What is the capital of Britain?",
        options: ["A. London", "B. Paris", "C. Rome", "D. Berlin"],
        correct: "A",
    },
    // Add more questions here
];

let currentQuestion = 0;
let userAnswers = [];

const quizContainer = document.getElementById("quiz-container");
const quizResult = document.getElementById("quiz-result");
const resultText = document.getElementById("result-text");

function showQuestion() {
    const quizQuestionElement = document.querySelector(".quiz-question");
    const quizOptionsElement = document.querySelector(".quiz-options");
    const currentQuizData = quizData[currentQuestion];

    quizQuestionElement.textContent = currentQuizData.question;

    quizOptionsElement.innerHTML = "";

    currentQuizData.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.textContent = option;
        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = "option";
        radioInput.value = String.fromCharCode(65 + index); // A, B, C, D...
        if (userAnswers[currentQuestion] === radioInput.value) {
            radioInput.checked = true; // Check the selected radio button
        }
        li.appendChild(radioInput);
        quizOptionsElement.appendChild(li);
    });

    // Show or hide "Previous" button
    const previousBtn = document.getElementById("previous-btn");
    previousBtn.style.display = currentQuestion === 0 ? "none" : "inline-block";

    // Show or hide "Save & Next" button
    const saveNextBtn = document.getElementById("save-next-btn");
    saveNextBtn.textContent =
        currentQuestion === quizData.length - 1 ? "Final Submit" : "Save & Next";
}

function saveAndNextQuestion() {
    const selectedOption = document.querySelector(
        'input[type="radio"]:checked'
    );

    if (selectedOption) {
        userAnswers[currentQuestion] = selectedOption.value;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

function showResult() {
    const correctAnswers = calculateCorrectAnswers();
    const percentage = ((correctAnswers / quizData.length) * 100).toFixed(2);

    quizContainer.style.display = "none";
    quizResult.style.display = "block";
    resultText.textContent = `You got ${correctAnswers} out of ${quizData.length} questions correct. Your score: ${percentage}%`;
}

function calculateCorrectAnswers() {
    let correctCount = 0;
    for (let i = 0; i < quizData.length; i++) {
        if (userAnswers[i] === quizData[i].correct) {
            correctCount++;
        }
    }
    return correctCount;
}

showQuestion();
