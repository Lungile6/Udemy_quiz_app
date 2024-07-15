const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices)

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Inside which HTML element do we put the Javascript?",
        answer1: "<script>",
        answer2: "<javascript>",
        answer3: "<js>",
        answer4: "<scripting>",
        correctAnswer: 1
    },
    {
        question: "How do you create a function in JavaScript?",
        answer1: "function myFunction()",
        answer2: "function:myFunction()",
        answer3: "function = myFunction()",
        answer4: "function myFunction()",
        correctAnswer: 4
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        answer1: "<script name='xxx.js'>",
        answer2: "<script href='xxx.js'>",
        answer3: "<script src='xxx.js'>",
        answer4: "<script type='xxx.js'>",
        correctAnswer: 3
    }
]

// Constants 

const CORRECT_BONUS = 10;
const MAX_QUESTION = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...question];
    console.log(availableQuestions)
    getNewQuestion();
};

getNewQuestion = () => {
    questionCounter++;
    
}

startGame();
