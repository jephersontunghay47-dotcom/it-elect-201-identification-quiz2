/*
=====================================================
QUESTION BANK
=====================================================

ADD NEW QUESTIONS HERE.

Example:

{
    question: "What is a blueprint for creating objects?",
    answers: [
        "class"
    ]
},

If there are multiple acceptable answers:

{
    question: "What is another name for an attribute?",
    answers: [
        "field",
        "variable"
    ]
}

=====================================================
*/

const questionBank = [

    {
        question:
            "The naming convention Java expects for a class name, distinct from the one used for its attributes.",
        answers: [
            "PascalCase"
        ]
    },

    {
        question:
            "Whether a class can be perfectly valid while zero objects have ever been made from it.",
        answers: [
            "yes"
        ]
    },

    {
        question:
            "The exact file name a class declared as public class Jeepney must be saved in, capitalization  included.",
        answers: [
            "Jeepney.java"
        ]
    },

    {
        question:
            "Enumerate the three parts every minimal class declaration needs, and nothing else.",
        answers: [
            "keyword and name, the body, closing brace",
        ]
    },

    {
        question:
            "Attributes are declared inside the class body and outside every ______.",
        answers: [
            "method"
        ]
    },

    {
        question:
            "A reference variable that has been declared but never instantiated holds the value ______.",
        answers: [
            "null"
        ]
    },

    {
        question:
            "How many times was the Player class itself written, regardless of how many Player objects end up  existing?",
        answers: [
            "once",
        ]
    },

    {
        question:
            "Do two teams with different roster sizes require two different versions of the Player class?",
        answers: [
            "no"
        ]
    },

    {
        question:
            "The region of memory where every object actually lives once instantiated.",
        answers: [
            "heap"         
        ]
    },

    {
        question:
            "What Java calls the process of creating an object from a class using new. ",
        answers: [
            "instantiation"         
        ]
    },

    {
        question:
            " The error thrown at run time when a member is reached through a reference holding null.",
        answers: [
            "NullPointerException"         
        ]
    },

    {
        question:
            " List the three default values Java assigns to an attribute, depending on whether it is numeric,  boolean, or an object type.",
        answers: [
            "0, false, null"
        ]
    },

    {
        question:
            "A value that can be worked out from a class's other attributes should be ______ rather than stored. ",
        answers: [
            "computed"
        ]
    },

    {
        question:
            "Java's automatic reclaiming of objects that no reference points to any more is called ______. ",
        answers: [
            "garbage collection"
        ]
    },

    {
        question:
            "What does windSpeed hold at this moment, before anything is assigned to it? ",
        answers: [
            "0"
        ]
    },    

     {
        question:
            "What does stationName hold at this same moment?",
        answers: [
            "null"
        ]
    },    

     {
        question:
            "The operator used to reach a member of an object through a reference.",
        answers: [
            "the dot operator "
        ]
    },    

    {
        question:
            "What a reference variable holds at the moment it is declared but not yet assigned an object. ",
        answers: [
            "null"
        ]
    },    

    {
        question:
            "The class holding main that creates objects of another class and puts them to work.",
        answers: [
            "Main class"
        ]
    },    

    {
        question:
            "Give the three things new does when it runs.",
        answers: [
            "sets aside memory, assigns default values, returns a reference"
        ]
    },    

    {
        question:
            "When one object reference is copied into another, the result is two names for one object, never two  separate ______.",
        answers: [
            "objects"
        ]
    },    

    {
        question:
            "The compiler can catch a local variable that was never assigned, but the same mistake in an  attribute slips through and surfaces only at ______. ",
        answers: [
            "run time"
        ]
    },   

    {
        question:
            "A cooperative issues LoanAccount objects to track each borrower's outstanding balance. A staff member  wants a second variable that always reflects the exact same balance as an existing account, changing  exactly when that account's balance changes, without ever creating a second account Should the staff member create this second variable with a new LoanAccount(), or by assigning the  existing reference to it?",
        answers: [
            "assign the reference"
        ]
    },   

    {
        question:
            " If the staff member instead created it with a second new LoanAccount() and later changed its balance, would the original account's balance change too?",
        answers: [
            "no"
        ]
    },   

    {
        question:
            "Write the one line of code that assigns 12 to the memberCount attribute of an object referred to by  h.",
        answers: [
            "h.memberCount = 12;"
        ]
    },   

    {
        question:
            "The convention Java uses for attribute and method names, distinct from the one used for class  names.",
        answers: [
            "camelCase"
        ]
    },   

    {
        question:
            "What a comment that merely repeats what the code already says earns under this course's grading,  according to the unit.",
        answers: [
            "nothing"
        ]
    },   

    {
        question:
            "Name the two ways a class's attribute list commonly goes wrong.",
        answers: [
            "too few, too many"
        ]
    },   

    {
        question:
            "A header comment naming the author and the exercise belongs at the very ______ of the file.",
        answers: [
            "top"
        ]
    },   

    {
        question:
            " Good attribute names matter because the Viva-Voce criterion requires you to ______ your own code aloud. ",
        answers: [
            "explain"
        ]
    },   

    {
        question:
            "Which of the three proposed attributes fails the attribute test, because it belongs to something other than a Player? ",
        answers: [
            "commissioner's phone number"
        ]
    },   

    {
        question:
            "Suppose the programmer also wants to store pointsPerGame alongside pointsScored and  gamesPlayed. Does pointsPerGame pass the attribute test, given that it can be worked out from the  other two?",
        answers: [
            "no"
        ]
    },   

    {
        question:
            "What should the programmer do with pointsPerGame instead of storing it as a third attribute?",
        answers: [
            "compute it"
        ]
    },  

];


/* ==============================
   QUIZ VARIABLES
============================== */

let questions = [];
let currentQuestion = 0;
let score = 0;
let answered = false;


/* ==============================
   NORMALIZE ANSWER
============================== */

function normalizeAnswer(answer) {
    return answer
        .toLowerCase()
        .trim()
        .replace(/\s+/g, " ");
}


/* ==============================
   SHUFFLE
============================== */

function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}


/* ==============================
   START QUIZ
============================== */

function startQuiz() {

    questions = shuffle(questionBank);

    currentQuestion = 0;
    score = 0;
    answered = false;

    document.getElementById("quiz").style.display = "block";
    document.getElementById("result").style.display = "none";

    showQuestion();
}


/* ==============================
   SHOW QUESTION
============================== */

function showQuestion() {

    const question = questions[currentQuestion];

    document.getElementById("questionNumber").textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    document.getElementById("question").textContent =
        question.question;

    document.getElementById("progressBar").style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    const input = document.getElementById("answerInput");

    input.value = "";
    input.disabled = false;

    document.getElementById("checkButton").style.display =
        "inline-block";

    document.getElementById("nextButton").style.display =
        "none";

    const feedback = document.getElementById("feedback");

    feedback.className = "feedback";
    feedback.style.display = "none";
    feedback.innerHTML = "";

    answered = false;

    input.focus();
}


/* ==============================
   CHECK ANSWER
============================== */

function checkAnswer() {

    if (answered) {
        return;
    }

    const input = document.getElementById("answerInput");

    const userAnswer = normalizeAnswer(input.value);

    if (userAnswer === "") {
        alert("Please type your answer first.");
        input.focus();
        return;
    }

    const question = questions[currentQuestion];

    const isCorrect = question.answers.some(
        answer => normalizeAnswer(answer) === userAnswer
    );

    const feedback = document.getElementById("feedback");

    if (isCorrect) {

        score++;

        feedback.className = "feedback correct";

        feedback.innerHTML =
            `<strong>Correct!</strong><br>
             Your answer: ${input.value}`;

    } else {

        feedback.className = "feedback wrong";

        feedback.innerHTML =
            `<strong>Incorrect.</strong><br>
             Correct answer:
             <strong>${question.answers[0]}</strong>`;
    }

    feedback.style.display = "block";

    input.disabled = true;

    document.getElementById("checkButton").style.display =
        "none";

    document.getElementById("nextButton").style.display =
        "inline-block";

    answered = true;
}


/* ==============================
   NEXT QUESTION
============================== */

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}


/* ==============================
   SHOW RESULT
============================== */

function showResult() {

    document.getElementById("quiz").style.display = "none";

    document.getElementById("result").style.display = "block";

    document.getElementById("score").textContent =
        `${score} / ${questions.length}`;

    const percentage =
        (score / questions.length) * 100;

    let message;

    if (percentage === 100) {

        message =
            "Perfect! You got everything correct.";

    } else if (percentage >= 80) {

        message =
            "Great job! Review the questions you missed.";

    } else if (percentage >= 60) {

        message =
            "Good effort. Keep reviewing the lesson.";

    } else {

        message =
            "Keep practicing and try the quiz again.";
    }

    document.getElementById("resultMessage").textContent =
        message;
}


/* ==============================
   ENTER KEY
============================== */

document.getElementById("answerInput").addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            if (!answered) {
                checkAnswer();
            } else {
                nextQuestion();
            }
        }
    }
);


/* ==============================
   START
============================== */

startQuiz();
