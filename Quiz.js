// JavaScript source code

const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const resultDiv = document.getElementById("result");

let shuffleQuestions, currentQuestionIndex, score;

const questions = [
    //question 1
    {
        question: "Do you want to work closely with engineers in your desired profession?",
        answer:
            [
                { text: "yes", correct: true },
                { text: "no", correct: false }
            ],
    },
    //question 2
    {
        question: "Are you willing to do the math that is required to be an engineer or work with engineers?",
        answer:
            [
                { text: "yes", correct: true },
                { text: "no", correct: false }
            ],
    },
    //question 3
    {
        question: "Are you interested in working with important data to find patterns and make predictions for business?",
        answer:
            [
                { text: "yes", correct: true },
                { text: "no", correct: false }
            ],
    },
    //question 4
    {
        question: "Are you interested in working with important data to find patterns and make predictions for business?",
        answer:
            [
                { text: "yes", correct: true },
                { text: "no", correct: false }
            ],
    },
    //question 5
    {
        question: "Would you be interested in learning about protecting and/or the hacking of computers, networks, and the transmission of data?",
        answer:
            [
                { text: "yes", correct: true },
                { text: "no", correct: false }
            ],
    },
    //question 6
    {
        question: "Would you be interested in teaching computer science material to others and/or students?",
        answer:
            [
                { text: "very interested", correct: true },
                { text: "kind of interested", correct: false },
                { text: "not interested at all", correct: false }
            ],
    },
    //question 7
    {
        question: "Would you be interested in applying your computer science degree to the financial sector?",
        answer:
            [
                { text: "yes", correct: true },
                { text: "no", correct: false }
            ],
    },
    //question 8
    {
        question: "Are you interested in learning the process of building educational tutors and programs?",
        answer:
            [
                { text: "yes", correct: true },
                { text: "no", correct: false }
            ],
    }
];

startQuiz();

function startQuiz()
{
    score = 0;
    questionContainer.style.display = "flex";
    shuffleQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    nextButton.classList.remove("hide");
    restartButton.ClassList.add("hide");
    resultDiv.classList.add("hide");
    setNextQuestion();
}

function setNextQuestion()
{
    resetState();
    showQuestion(shuffleQuestions[currentQuestionIndex]);
}

function showQuestion(question)
{
    questionElement.innerText = question.question;
    question.answer.forEach((answer, index) => {
        const inputGroup = document.createElement("div");
        inputGroup.classList.add("input-group");

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.id = "answer" + index;
        radio.name = "answer";
        radio.value = index;

        const label = document.createElement("label");
        label.htmlFor = "answer" + index;
        label.innerText = answer.text;

        inputGroup.appendChild(radio);
        inputGroup.appendChild(label);
        answerButtons.appendChild(inputGroup);
    });
}

function resetState()
{
    while (answerButtons.firstChild)
    {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

nextButton.addEventListener("click", () => {
    const answerIndex = Array.from(
        answerButtons.querySelectorAll("input")
    ).findIndex((radio) => radio.checked);
    if (answerIndex !== -1) {
        if (shuffleQuestions[currentQuestionIndex].answers[answerIndex].correct) {
            score++;
        }

        currentQuestionIndex++;
        if (shuffleQuestions.length > currentQuestionIndex) {
            setNextQuestion();
        }
        else {
            endQuiz();
        }
    }
    else
    {
        alert("Please select an answer.");
    }
});

restartButton.addEventListener("click", startQuiz);

function endQuiz()
{
    questionContainer.style.display = "none";
    nextButton.classList.add("hide");
    restartButton.classList.remove("hide");
    resultDiv.classList.remove("hide");
    resultDiv.innerText = `Your final score: ${score} / ${shuffleQuestions.length}`;
}