const quizData = [
    {
        question: "What is Python?",
        options: [
            "A. A high-level programming language",
            "B. A software framework",
            "C. A hardware device",
            "D. A database management system",
        ],
        correct: "A",
    },
    {
        question: "Which statement is used to define a function in Python?",
        options: [
            "A. define function",
            "B. def function",
            "C. func",
            "D. function()",
        ],
        correct: "B",
    },
    {
        question: "What is the output of the following code?\nprint(3 + 2 * 4)",
        options: ["A. 20", "B. 14", "C. 11", "D. 10"],
        correct: "C",
    },
    {
        question: "Which data type is used to store a sequence of characters in Python?",
        options: ["A. int", "B. str", "C. float", "D. list"],
        correct: "B",
    },
    {
        question: "How do you check the length of a list named 'my_list'?",
        options: [
            "A. my_list.length()",
            "B. length(my_list)",
            "C. len(my_list)",
            "D. my_list.size()",
        ],
        correct: "C",
    },
    {
        question: "What does the 'range()' function in Python return?",
        options: [
            "A. A list of numbers",
            "B. A single number",
            "C. A tuple",
            "D. A string",
        ],
        correct: "A",
    },
    {
        question: "In Python, what is the correct way to comment a single line of code?",
        options: [
            "A. /* comment */",
            "B. // comment",
            "C. # comment",
            "D. <!-- comment -->",
        ],
        correct: "C",
    },
    {
        question: "Which loop is used to iterate through a sequence in Python?",
        options: ["A. for loop", "B. while loop", "C. do-while loop", "D. repeat-until loop"],
        correct: "A",
    },
    {
        question: "What is the output of the following code?\nprint('Hello' + ' ' + 'World')",
        options: [
            "A. HelloWorld",
            "B. Hello World",
            "C. Hello+World",
            "D. Hello World!",
        ],
        correct: "B",
    },
    {
        question: "What is the correct way to import a module named 'math' in Python?",
        options: [
            "A. import Math",
            "B. import math",
            "C. import MATH",
            "D. import maths",
        ],
        correct: "B",
    },
    {
        question: "What is the output of the following code?\nnumbers = [1, 2, 3, 4, 5]\nprint(numbers[2:4])",
        options: [
            "A. [1, 2]",
            "B. [2, 3, 4]",
            "C. [3, 4]",
            "D. [4, 5]",
        ],
        correct: "C",
    },
    {
        question: "Which Python function is used to sort a list in ascending order?",
        options: [
            "A. sort()",
            "B. sorted()",
            "C. order()",
            "D. arrange()",
        ],
        correct: "B",
    },
    {
        question: "What is the purpose of the 'elif' keyword in Python?",
        options: [
            "A. It defines a new function",
            "B. It creates a loop",
            "C. It is short for 'else if' and used for multiple conditions",
            "D. It is used to comment code",
        ],
        correct: "C",
    },
    {
        question: "Which statement is used to raise an exception in Python?",
        options: [
            "A. raise exception",
            "B. throw exception",
            "C. throw new exception",
            "D. raise new exception",
        ],
        correct: "A",
    },
    {
        question: "In Python, what does the 'pop()' method do on a list?",
        options: [
            "A. Removes the last element from the list",
            "B. Removes the first element from the list",
            "C. Inserts a new element at the beginning of the list",
            "D. Inserts a new element at the end of the list",
        ],
        correct: "A",
    },
    {
        question: "What is the purpose of the 'pass' keyword in Python?",
        options: [
            "A. It defines a function without any implementation",
            "B. It terminates the program",
            "C. It comments out code",
            "D. It is used to skip iterations in a loop",
        ],
        correct: "A",
    },
    {
        question: "Which Python library is used for data analysis and manipulation?",
        options: [
            "A. pandas",
            "B. matplotlib",
            "C. numpy",
            "D. scipy",
        ],
        correct: "A",
    },
    {
        question: "What does the 'lambda' keyword in Python indicate?",
        options: [
            "A. A function without a name",
            "B. A recursive function",
            "C. A generator function",
            "D. A built-in function",
        ],
        correct: "A",
    },
    {
        question: "In Python, what is the purpose of 'try', 'except', and 'finally' blocks?",
        options: [
            "A. They are used for defining loops",
            "B. They are used for user input",
            "C. They are used for handling exceptions",
            "D. They are used for defining classes",
        ],
        correct: "C",
    },
    {
        question: "What is the output of the following code?\nprint(type(42))",
        options: [
            "A. int",
            "B. str",
            "C. float",
            "D. bool",
        ],
        correct: "A",
    },
    {
        question: "What does the 'enumerate()' function in Python do?",
        options: [
            "A. Returns the index of the first occurrence of a value in a list",
            "B. Iterates over a sequence and returns a tuple containing the index and value",
            "C. Returns the total number of elements in a list",
            "D. Sorts the elements of a list in descending order",
        ],
        correct: "B",
    },
    {
        question: "Which module in Python provides support for working with dates and times?",
        options: [
            "A. datetime",
            "B. time",
            "C. dateutil",
            "D. calendar",
        ],
        correct: "A",
    },
    {
        question: "What is the output of the following code?\nprint(bool([]))",
        options: [
            "A. True",
            "B. False",
            "C. None",
            "D. Error",
        ],
        correct: "B",
    },
    {
        question: "What is the purpose of the 'pass' statement in Python?",
        options: [
            "A. It defines a new function",
            "B. It creates a loop",
            "C. It is used as a placeholder for future code",
            "D. It is used to skip a single iteration in a loop",
        ],
        correct: "C",
    },
    {
        question: "Which Python data structure allows duplicate elements and is mutable?",
        options: [
            "A. set",
            "B. list",
            "C. tuple",
            "D. dictionary",
        ],
        correct: "B",
    },
    {
        question: "What is the purpose of the 'with' statement in Python?",
        options: [
            "A. It is used to define a context manager",
            "B. It defines a new function",
            "C. It is used for sorting lists",
            "D. It is used for handling exceptions",
        ],
        correct: "A",
    },
    {
        question: "In Python, what is the purpose of the 'random' module?",
        options: [
            "A. To generate random numbers",
            "B. To perform mathematical operations",
            "C. To manipulate strings",
            "D. To define classes",
        ],
        correct: "A",
    },
    {
        question: "What is the output of the following code?\nprint(5 > 2 and 3 > 1)",
        options: [
            "A. True",
            "B. False",
            "C. None",
            "D. Error",
        ],
        correct: "A",
    },
    {
        question: "Which Python statement is used to exit a loop prematurely?",
        options: [
            "A. exit",
            "B. stop",
            "C. break",
            "D. continue",
        ],
        correct: "C",
    },
    {
        question: "What is the output of the following code?\nprint('Python'.replace('P', 'J'))",
        options: [
            "A. Python",
            "B. Jython",
            "C. JYTHON",
            "D. PYthon",
        ],
        correct: "B",
    },

    {
        question: "What is the output of the following code?\nprint(10 / 3)",
        options: [
            "A. 3.3333333333333335",
            "B. 3.333",
            "C. 3",
            "D. 3.0",
        ],
        correct: "A",
    },
    {
        question: "Which method is used to remove an element by its value from a list in Python?",
        options: [
            "A. pop()",
            "B. remove()",
            "C. delete()",
            "D. discard()",
        ],
        correct: "B",
    },
    {
        question: "What is the purpose of the 'is' keyword in Python?",
        options: [
            "A. It is used to check if two lists have the same elements",
            "B. It is used to check if two variables reference the same object",
            "C. It is used to compare the lengths of two lists",
            "D. It is used to combine two conditions in an if statement",
        ],
        correct: "B",
    },
    {
        question: "Which Python module is used for regular expressions?",
        options: [
            "A. regex",
            "B. re",
            "C. regular",
            "D. rex",
        ],
        correct: "B",
    },
    {
        question: "What is the output of the following code?\nprint('Hello, World!'.split(','))",
        options: [
            "A. ['Hello', 'World']",
            "B. ['Hello', ', World']",
            "C. ['Hello, World!']",
            "D. ['Hello, ', 'World!']",
        ],
        correct: "A",
    },
    {
        question: "In Python, what is the purpose of the 'map()' function?",
        options: [
            "A. To generate a new list containing the results of applying a function to each element of an existing list",
            "B. To iterate over two or more lists simultaneously",
            "C. To remove elements from a list",
            "D. To combine multiple lists into a single list",
        ],
        correct: "A",
    },
    {
        question: "Which Python operator is used for exponentiation?",
        options: [
            "A. ^",
            "B. **",
            "C. ^^",
            "D. //",
        ],
        correct: "B",
    },
    {
        question: "What is the output of the following code?\nprint('python'.capitalize())",
        options: [
            "A. PYTHON",
            "B. Python",
            "C. python",
            "D. PYThon",
        ],
        correct: "B",
    },
    {
        question: "Which Python data type is ordered and immutable?",
        options: [
            "A. list",
            "B. tuple",
            "C. set",
            "D. dictionary",
        ],
        correct: "B",
    },
    {
        question: "What is the purpose of the 'filter()' function in Python?",
        options: [
            "A. To filter the elements of a list based on a given condition",
            "B. To merge two or more lists",
            "C. To repeat a block of code",
            "D. To sort a list in descending order",
        ],
        correct: "A",
    },
    {
        question: "What is the output of the following code?\nprint('Hello' * 3)",
        options: [
            "A. Hello",
            "B. HelloHelloHello",
            "C. 3Hello",
            "D. 3",
        ],
        correct: "B",
    },
    {
        question: "In Python, what is the purpose of the 'all()' function?",
        options: [
            "A. To return the largest item in an iterable",
            "B. To check if all elements in an iterable are True",
            "C. To return the sum of all elements in an iterable",
            "D. To convert an iterable into a list",
        ],
        correct: "B",
    },
    {
        question: "What does the 'pass' statement do in Python?",
        options: [
            "A. It defines a new function",
            "B. It creates a loop",
            "C. It is used to define a context manager",
            "D. It is used as a placeholder for future code",
        ],
        correct: "D",
    },
    {
        question: "Which Python data type is used to store a collection of key-value pairs?",
        options: [
            "A. list",
            "B. tuple",
            "C. set",
            "D. dictionary",
        ],
        correct: "D",
    },
    {
        question: "What is the purpose of the 'min()' function in Python?",
        options: [
            "A. To return the smallest item in an iterable",
            "B. To check if all elements in an iterable are True",
            "C. To return the sum of all elements in an iterable",
            "D. To convert an iterable into a list",
        ],
        correct: "A",
    },
    {
        question: "What is the output of the following code?\nprint('Hello, World!'[7:12])",
        options: [
            "A. World",
            "B. World!",
            "C. , Wor",
            "D. , World",
        ],
        correct: "D",
    },
    {
        question: "Which Python keyword is used to define a block of code that can be called later?",
        options: [
            "A. def",
            "B. block",
            "C. call",
            "D. function",
        ],
        correct: "A",
    },
    {
        question: "What is the purpose of the 'zip()' function in Python?",
        options: [
            "A. To combine two or more lists into a single list",
            "B. To iterate over two or more lists simultaneously",
            "C. To remove elements from a list",
            "D. To sort a list in descending order",
        ],
        correct: "B",
    },
    {
        question: "What is the output of the following code?\nprint(2 == '2')",
        options: [
            "A. True",
            "B. False",
            "C. None",
            "D. Error",
        ],
        correct: "B",
    },
    {
        question: "Which Python function is used to read input from the user?",
        options: [
            "A. get_input()",
            "B. read_input()",
            "C. input()",
            "D. user_input()",
        ],
        correct: "C",
    },
    {
        question: "What will be the output of the following code snippet?\nmy_list = [1, 2, 3, 4, 5]\nprint(my_list[-2])",
        options: [
            "A. 4",
            "B. 2",
            "C. 5",
            "D. 3",
        ],
        correct: "D",
    },
    {
        question: "In Python, which data type is used to represent a sequence of characters?",
        options: [
            "A. char",
            "B. string",
            "C. text",
            "D. chr",
        ],
        correct: "B",
    },
    {
        question: "What is the output of the following code snippet?\nprint(3 * 'abc')",
        options: [
            "A. abcabcabc",
            "B. abc abc abc",
            "C. abc 3",
            "D. abc*3",
        ],
        correct: "A",
    },
    {
        question: "Which Python function is used to find the length of an object?",
        options: [
            "A. length()",
            "B. size()",
            "C. count()",
            "D. len()",
        ],
        correct: "D",
    },
    {
        question: "What will be the output of the following code snippet?\nmy_tuple = (1, 2, 3, 4, 5)\nprint(my_tuple[1:4])",
        options: [
            "A. (2, 3, 4)",
            "B. (1, 2, 3)",
            "C. (2, 3)",
            "D. (1, 2, 3, 4)",
        ],
        correct: "A",
    },
    {
        question: "In Python, which operator is used for exponentiation?",
        options: [
            "A. ^",
            "B. **",
            "C. ^^",
            "D. //",
        ],
        correct: "B",
    },
    {
        question: "What is the output of the following code snippet?\nprint('Python'[1:-1])",
        options: [
            "A. Pyt",
            "B. ytho",
            "C. thon",
            "D. Pyth",
        ],
        correct: "C",
    },
    {
        question: "Which Python method is used to convert a string to lowercase?",
        options: [
            "A. lower()",
            "B. toLowerCase()",
            "C. convertToLower()",
            "D. lowercase()",
        ],
        correct: "A",
    },
    {
        question: "What will be the output of the following code snippet?\nmy_set = {1, 2, 3, 4, 5}\nprint(len(my_set))",
        options: [
            "A. 5",
            "B. 4",
            "C. 1",
            "D. 0",
        ],
        correct: "A",
    },
    {
        question: "In Python, which data type is used to represent a single, immutable (unchangeable) element?",
        options: [
            "A. int",
            "B. float",
            "C. bool",
            "D. tuple",
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