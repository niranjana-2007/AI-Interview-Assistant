const role =
    localStorage.getItem("selectedRole") || "software";


const roleText =
    document.getElementById("selected-role");

const interviewTitle =
    document.getElementById("interview-title");

const questionText =
    document.getElementById("question");

const answerBox =
    document.getElementById("answer");

const nextButton =
    document.querySelector(".next-button");

const feedbackText =
    document.getElementById("answer-feedback");

const progressFill =
    document.getElementById("progress-fill");

const answerCount =
    document.getElementById("answer-count");

const aiMessage =
    document.getElementById("ai-message");

const questionNumber =
    document.querySelector(".question-number");


const questions = {

    software: [

        "Tell me about yourself.",

        "What is a programming language?",

        "What is the difference between a compiler and an interpreter?",

        "What is object-oriented programming?",

        "Why do you want to become a software developer?"

    ],


    frontend: [

        "Tell me about yourself.",

        "What is HTML used for?",

        "What is CSS used for?",

        "What is the difference between HTML and CSS?",

        "Why are you interested in frontend development?"

    ],


    backend: [

        "Tell me about yourself.",

        "What is backend development?",

        "What is a database?",

        "What is an API?",

        "Why are you interested in backend development?"

    ],


    python: [

        "Tell me about yourself.",

        "What is Python?",

        "What is a variable in Python?",

        "What is the difference between a list and a tuple?",

        "Why do you want to become a Python developer?"

    ]

};


const roleNames = {

    software: "Software Developer",

    frontend: "Frontend Developer",

    backend: "Backend Developer",

    python: "Python Developer"

};


const roleName =
    roleNames[role] || "Software Developer";


roleText.textContent =
    roleName;

interviewTitle.textContent =
    roleName + " Interview";


const selectedQuestions =
    questions[role] || questions.software;


let currentQuestion = 0;

let answeredQuestions = 0;

let totalScore = 0;


progressFill.style.width = "20%";

nextButton.textContent =
    "Next Question";

answerCount.textContent =
    "Answered: 0 / 5";

aiMessage.textContent =
    "AI Interview Assistant is ready. Take your time!";


nextButton.addEventListener("click", function() {

    const answer =
        answerBox.value.trim();

    const answerLength =
        answer.length;


    if (answerLength === 0) {

        feedbackText.textContent =
            "Please enter an answer before continuing.";

        return;
    }


    answeredQuestions++;


    if (answerLength < 20) {

        totalScore += 0;

        feedbackText.textContent =
            "Your answer is a little short. Try adding more details.";

    }

    else if (answerLength < 80) {

        totalScore += 1;

        feedbackText.textContent =
            "Good start! Try adding an example to make your answer stronger.";

    }

    else {

        totalScore += 2;

        feedbackText.textContent =
            "Great! Your answer has good detail.";

    }


    answerCount.textContent =
        "Answered: " +
        answeredQuestions +
        " / 5";


    aiMessage.textContent =
        "Analyzing your answer...";


    localStorage.setItem(
        "answer" + currentQuestion,
        answer
    );


    currentQuestion++;


    if (currentQuestion < selectedQuestions.length) {

        questionText.textContent =
            selectedQuestions[currentQuestion];


        questionNumber.textContent =
            "Question " +
            (currentQuestion + 1) +
            " of 5";


        const progress =
            ((currentQuestion + 1) /
            selectedQuestions.length) * 100;


        progressFill.style.width =
            progress + "%";


        answerBox.value = "";

        feedbackText.textContent = "";

        aiMessage.textContent =
            "Ready for the next question. Give your best answer!";


        if (
            currentQuestion ===
            selectedQuestions.length - 1
        ) {

            nextButton.textContent =
                "Finish Interview";

        }

    }


    else {

        const finalScore =
            Math.round((totalScore / 10) * 100);


        localStorage.setItem(
            "answeredQuestions",
            answeredQuestions
        );


        localStorage.setItem(
            "finalScore",
            finalScore
        );


        window.location.href =
            "result.html";

    }

});