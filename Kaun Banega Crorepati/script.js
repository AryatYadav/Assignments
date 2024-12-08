const questions = [
  {
      question: "Who is the first Prime Minister of India?",
      options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Subhas Chandra Bose"],
      correctAnswer: "Jawaharlal Nehru"
  },
  {
      question: "What is the highest mountain in the world?",
      options: ["K2", "Kangchenjunga", "Lhotse", "Mount Everest"],
      correctAnswer: "Mount Everest"
  },
  {
      question: "What is the largest planet in our solar system?",
      options: ["Mars", "Jupiter", "Saturn", "Neptune"],
      correctAnswer: "Jupiter"
  },
  // Add more questions here...
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const questionElement = document.querySelector(".question");
const optionsElement = document.querySelector(".options");
const scoreElement = document.getElementById("score");
const nextQuestionButton = document.querySelector(".next-question");
const feedbackElement = document.querySelector(".feedback");

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  optionsElement.innerHTML = ""; // Clear previous options
  currentQuestion.options.forEach(option => {
      const optionElement = document.createElement("div");
      optionElement.classList.add("option");
      optionElement.textContent = option;
      optionElement.addEventListener("click", () => checkAnswer(option));
      optionsElement.appendChild(optionElement);
  });
}

function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedOption === currentQuestion.correctAnswer) {
      score++;
      scoreElement.textContent = score;

      alert("Correct Answer!");
  } else {

      alert("Wrong Answer!");
  }
  nextQuestionButton.disabled = false;
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      displayQuestion();
      nextQuestionButton.disabled = true;
      feedbackElement.textContent = "";
      feedbackElement.classList.remove("wrong");
  } else {
      // End of quiz
      alert(`Quiz completed! Your final score is ${score}`);
      currentQuestionIndex = 0;
      score = 0;
      scoreElement.textContent = score;
      displayQuestion();
  }
}

nextQuestionButton.addEventListener("click", nextQuestion);

displayQuestion();