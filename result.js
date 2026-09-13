const role =
    localStorage.getItem("selectedRole") || "software";


const answered =
    Number(
        localStorage.getItem("answeredQuestions")
    ) || 0;


const score =
    Number(
        localStorage.getItem("finalScore")
    ) || 0;


const resultRole =
    document.getElementById("result-role");

const answeredText =
    document.getElementById("answered");

const scoreText =
    document.getElementById("score");

const performanceText =
    document.getElementById("performance-level");

const answerReview =
    document.getElementById("answer-review");


const roleNames = {

    software: "Software Developer",

    frontend: "Frontend Developer",

    backend: "Backend Developer",

    python: "Python Developer"

};


resultRole.textContent =
    roleNames[role] || "Software Developer";


answeredText.textContent =
    answered;


scoreText.textContent =
    score + "%";


if (score >= 80) {

    performanceText.textContent =
        "Excellent! 🌟";

}

else if (score >= 60) {

    performanceText.textContent =
        "Good! 👍";

}

else {

    performanceText.textContent =
        "Needs Practice 💪";

}


const feedbackText =
    document.querySelector(".feedback");


if (score >= 80) {

    feedbackText.textContent =
        "Excellent work! Your answers show good detail. Keep practicing to build even more confidence.";

}

else if (score >= 60) {

    feedbackText.textContent =
        "Good job! Your answers have a solid foundation. Try adding more examples and details.";

}

else {

    feedbackText.textContent =
        "Keep practicing! Try giving longer, clearer answers with examples to improve your interview performance.";

}


for (let i = 0; i < 5; i++) {

    const savedAnswer =
        localStorage.getItem("answer" + i);


    const answerBox =
        document.createElement("div");


    answerBox.className =
        "review-item";


    const questionTitle =
        document.createElement("h3");


    questionTitle.textContent =
        "Question " + (i + 1);


    const answerText =
        document.createElement("p");


    answerText.textContent =
        savedAnswer ||
        "No answer provided.";


    answerBox.appendChild(
        questionTitle
    );


    answerBox.appendChild(
        answerText
    );


    answerReview.appendChild(
        answerBox
    );

}