const quizData = [
    {
        question: "Which data structure in Python is used to store elements in key-value pairs?",
        options: [
            "A. list",
            "B. tuple",
            "C. set",
            "D. dictionary",
        ],
        correct: "D",
    },
    {
        question: "What is the time complexity for searching an element in a dictionary?",
        options: [
            "A. O(1)",
            "B. O(log n)",
            "C. O(n)",
            "D. O(n log n)",
        ],
        correct: "A",
    },
    {
        question: "Which data structure in Python is used to store an ordered collection of elements?",
        options: [
            "A. list",
            "B. tuple",
            "C. set",
            "D. dictionary",
        ],
        correct: "A",
    },
    {
        question: "What is the time complexity for inserting an element at the end of a list?",
        options: [
            "A. O(1)",
            "B. O(log n)",
            "C. O(n)",
            "D. O(n log n)",
        ],
        correct: "A",
    },
    {
        question: "Which data structure in Python is used to store a collection of unique elements?",
        options: [
            "A. list",
            "B. tuple",
            "C. set",
            "D. dictionary",
        ],
        correct: "C",
    },
    {
        question: "What is the time complexity for removing an element from a set?",
        options: [
            "A. O(1)",
            "B. O(log n)",
            "C. O(n)",
            "D. O(n log n)",
        ],
        correct: "A",
    },
    {
        question: "In Python, how do you initialize an empty list?",
        options: [
            "A. list()",
            "B. []",
            "C. new List()",
            "D. emptyList[]",
        ],
        correct: "B",
    },
    {
        question: "What is the time complexity for searching an element in a list?",
        options: [
            "A. O(1)",
            "B. O(log n)",
            "C. O(n)",
            "D. O(n log n)",
        ],
        correct: "C",
    },
    {
        question: "Which data structure in Python is used to store a collection of elements with no duplicate values?",
        options: [
            "A. list",
            "B. tuple",
            "C. set",
            "D. dictionary",
        ],
        correct: "C",
    },
    {
        question: "What is the time complexity for inserting an element in the middle of a list?",
        options: [
            "A. O(1)",
            "B. O(log n)",
            "C. O(n)",
            "D. O(n log n)",
        ],
        correct: "C",
    },
    {
        question: "Which data structure in Python is used to store a sequence of elements that can be changed (mutable)?",
        options: [
            "A. list",
            "B. tuple",
            "C. set",
            "D. dictionary",
        ],
        correct: "A",
    },
    {
        question: "Which data structure in Python is used to store elements in the order they are inserted?",
        options: [
            "A. list",
            "B. tuple",
            "C. set",
            "D. dictionary",
        ],
        correct: "A",
    },
    {
        question: "What is the time complexity for inserting an element at the beginning of a list?",
        options: [
            "A. O(1)",
            "B. O(log n)",
            "C. O(n)",
            "D. O(n log n)",
        ],
        correct: "C",
    },
    {
        question: "Which data structure in Python is used to store an unordered collection of elements?",
        options: [
            "A. list",
            "B. tuple",
            "C. set",
            "D. dictionary",
        ],
        correct: "C",
    },
    {
        question: "What is the time complexity for removing an element from the beginning of a list?",
        options: [
            "A. O(1)",
            "B. O(log n)",
            "C. O(n)",
            "D. O(n log n)",
        ],
        correct: "C",
    },
    {
        question: "Which data structure in Python is used to store elements as key-value pairs with unique keys?",
        options: [
            "A. list",
            "B. tuple",
            "C. set",
            "D. dictionary",
        ],
        correct: "D",
    },
    {
        question: "What is the time complexity for searching an element in a set?",
        options: [
            "A. O(1)",
            "B. O(log n)",
            "C. O(n)",
            "D. O(n log n)",
        ],
        correct: "A",
    },
    {
        question: "In Python, how do you initialize an empty set?",
        options: [
            "A. set()",
            "B. {}",
            "C. new Set()",
            "D. emptySet{}",
        ],
        correct: "A",
    },
    {
        question: "What is the time complexity for searching an element in a tuple?",
        options: [
            "A. O(1)",
            "B. O(log n)",
            "C. O(n)",
            "D. O(n log n)",
        ],
        correct: "C",
    },
    {
        question: "Which data structure in Python is used to store elements in a sorted order?",
        options: [
            "A. list",
            "B. tuple",
            "C. set",
            "D. dictionary",
        ],
        correct: "A",
    },
    {
        question: "What is the time complexity for removing an element from a tuple?",
        options: [
            "A. O(1)",
            "B. O(log n)",
            "C. O(n)",
            "D. O(n log n)",
        ],
        correct: "C",
    },
    {
        question: "Which Python method is used to add elements to a set?",
        options: [
            "A. push()",
            "B. insert()",
            "C. add()",
            "D. append()",
        ],
        correct: "C",
    },
    {
        question: "What is the time complexity for searching an element in a dictionary?",
        options: [
            "A. O(1)",
            "B. O(log n)",
            "C. O(n)",
            "D. O(n log n)",
        ],
        correct: "A",
    },
    {
        question: "In Python, how do you initialize an empty dictionary?",
        options: [
            "A. dict()",
            "B. {}",
            "C. new Dictionary()",
            "D. emptyDict{}",
        ],
        correct: "A",
    },
    {
        question: "What is the time complexity for inserting an element in a set?",
        options: [
            "A. O(1)",
            "B. O(log n)",
            "C. O(n)",
            "D. O(n log n)",
        ],
        correct: "A",
    },
    {
        question: "Which Python method is used to remove elements from a set?",
        options: [
            "A. pop()",
            "B. remove()",
            "C. delete()",
            "D. discard()",
        ],
        correct: "B",
    },
    {
        question: "What is the time complexity for inserting an element in a dictionary?",
        options: [
            "A. O(1)",
            "B. O(log n)",
            "C. O(n)",
            "D. O(n log n)",
        ],
        correct: "A",
    },
    {
        question: "Which Python method is used to access elements in a dictionary?",
        options: [
            "A. get()",
            "B. access()",
            "C. fetch()",
            "D. retrieve()",
        ],
        correct: "A",
    },
    {
        question: "What is the time complexity for removing an element from a dictionary?",
        options: [
            "A. O(1)",
            "B. O(log n)",
            "C. O(n)",
            "D. O(n log n)",
        ],
        correct: "A",
    },
    {
        question: "Which Python method is used to check if a key exists in a dictionary?",
        options: [
            "A. check()",
            "B. exists()",
            "C. has_key()",
            "D. in",
        ],
        correct: "D",
    },
    {
        question: "What is the time complexity for updating an element in a list?",
        options: [
            "A. O(1)",
            "B. O(log n)",
            "C. O(n)",
            "D. O(n log n)",
        ],
        correct: "A",
    },
    {
        question: "Which Python method is used to check if a value exists in a set?",
        options: [
            "A. contains()",
            "B. in",
            "C. has_value()",
            "D. check()",
        ],
        correct: "B",
    },
    {
        question: "What is the time complexity for updating an element in a set?",
        options: [
            "A. O(1)",
            "B. O(log n)",
            "C. O(n)",
            "D. O(n log n)",
        ],
        correct: "C",
    },
    {
        question: "Which Python method is used to find the number of elements in a set?",
        options: [
            "A. length()",
            "B. size()",
            "C. count()",
            "D. len()",
        ],
        correct: "D",
    },
    {
        question: "What is the time complexity for updating an element in a dictionary?",
        options: [
            "A. O(1)",
            "B. O(log n)",
            "C. O(n)",
            "D. O(n log n)",
        ],
        correct: "A",
    },
    {
        question: "Which Python method is used to find the sum of elements in a list?",
        options: [
            "A. sum()",
            "B. total()",
            "C. add()",
            "D. calculate()",
        ],
        correct: "A",
    },
    {
        question: "What is the time complexity for updating an element in a tuple?",
        options: [
            "A. O(1)",
            "B. O(log n)",
            "C. O(n)",
            "D. O(n log n)",
        ],
        correct: "C",
    },
    {
        question: "Which Python method is used to find the maximum element in a set?",
        options: [
            "A. max()",
            "B. maximum()",
            "C. largest()",
            "D. get_max()",
        ],
        correct: "A",
    },
    {
        question: "What is the time complexity for updating an element in a dictionary?",
        options: [
            "A. O(1)",
            "B. O(log n)",
            "C. O(n)",
            "D. O(n log n)",
        ],
        correct: "A",
    },
    {
        question: "Which Python method is used to find the minimum element in a list?",
        options: [
            "A. min()",
            "B. minimum()",
            "C. smallest()",
            "D. get_min()",
        ],
        correct: "A",
    },
    {
        question: "What is the time complexity for updating an element in a set?",
        options: [
            "A. O(1)",
            "B. O(log n)",
            "C. O(n)",
            "D. O(n log n)",
        ],
        correct: "C",
    },
    {
        question: "Which Python method is used to find the average of elements in a list?",
        options: [
            "A. avg()",
            "B. mean()",
            "C. average()",
            "D. calculate_mean()",
        ],
        correct: "B",
    },
    {
        question: "Which data structure in Python is used to implement a Last-In-First-Out (LIFO) order?",
        options: [
            "A. list",
            "B. tuple",
            "C. set",
            "D. stack",
        ],
        correct: "D",
    },
    {
        question: "What is the time complexity for inserting an element at the top of a stack?",
        options: [
            "A. O(1)",
            "B. O(log n)",
            "C. O(n)",
            "D. O(n log n)",
        ],
        correct: "A",
    },
    {
        question: "Which data structure in Python is used to implement a First-In-First-Out (FIFO) order?",
        options: [
            "A. list",
            "B. tuple",
            "C. set",
            "D. queue",
        ],
        correct: "D",
    },
    {
        question: "What is the time complexity for inserting an element at the end of a queue?",
        options: [
            "A. O(1)",
            "B. O(log n)",
            "C. O(n)",
            "D. O(n log n)",
        ],
        correct: "A",
    },
    {
        question: "Which data structure in Python is used to implement a priority queue?",
        options: [
            "A. list",
            "B. tuple",
            "C. set",
            "D. heapq",
        ],
        correct: "D",
    },
    {
        question: "What is the time complexity for inserting an element into a priority queue?",
        options: [
            "A. O(1)",
            "B. O(log n)",
            "C. O(n)",
            "D. O(n log n)",
        ],
        correct: "B",
    },
    {
        question: "Which data structure in Python is used to store a collection of elements with no duplicates?",
        options: [
            "A. list",
            "B. tuple",
            "C. set",
            "D. dictionary",
        ],
        correct: "C",
    },
    {
        question: "What is the time complexity for searching an element in a set?",
        options: [
            "A. O(1)",
            "B. O(log n)",
            "C. O(n)",
            "D. O(n log n)",
        ],
        correct: "A",
    },
    {
        question: "In Python, how do you initialize an empty set?",
        options: [
            "A. set()",
            "B. {}",
            "C. new Set()",
            "D. emptySet{}",
        ],
        correct: "A",
    },
    {
        question: "Which data structure in Python is used to implement a graph?",
        options: [
            "A. list",
            "B. tuple",
            "C. set",
            "D. dictionary",
        ],
        correct: "D",
    },
    {
        question: "What is the time complexity for inserting an edge in a graph?",
        options: [
            "A. O(1)",
            "B. O(log n)",
            "C. O(n)",
            "D. O(n log n)",
        ],
        correct: "A",
    },
    {
        question: "Which data structure in Python is used to implement a linked list?",
        options: [
            "A. list",
            "B. tuple",
            "C. set",
            "D. LinkedList",
        ],
        correct: "D",
    },
    {
        question: "What is the time complexity for inserting an element at the end of a linked list?",
        options: [
            "A. O(1)",
            "B. O(log n)",
            "C. O(n)",
            "D. O(n log n)",
        ],
        correct: "A",
    },
    {
        question: "Which data structure in Python is used to implement a binary search tree?",
        options: [
            "A. list",
            "B. tuple",
            "C. set",
            "D. binarytree",
        ],
        correct: "D",
    },
    {
        question: "What is the time complexity for inserting an element in a binary search tree?",
        options: [
            "A. O(1)",
            "B. O(log n)",
            "C. O(n)",
            "D. O(n log n)",
        ],
        correct: "B",
    },
    {
        question: "Which data structure in Python is used to implement a heap?",
        options: [
            "A. list",
            "B. tuple",
            "C. set",
            "D. heapq",
        ],
        correct: "D",
    },
    {
        question: "What is the time complexity for inserting an element into a heap?",
        options: [
            "A. O(1)",
            "B. O(log n)",
            "C. O(n)",
            "D. O(n log n)",
        ],
        correct: "B",
    },
    {
        question: "Which data structure in Python is used to implement a hash table?",
        options: [
            "A. list",
            "B. tuple",
            "C. set",
            "D. dictionary",
        ],
        correct: "D",
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
