const questions = [
  {
    question: "What is the binary representation of the number 28?",
    options: ["11110", "11100", "11010", "11011"],
    answer: "11100",
  },
  {
    question: "What type of loop will always execute at least once?",
    options: ["for", "while", "do while"],
    answer: "do while",
  },
  {
    question: "Which of the following HTTP status codes means 'Not Found'?",
    options: ["200", "403", "404", "500"],
    answer: "404",
  },
  {
    question: "Quiz complete!",
    options: [],
    answer: "",
  },
];

let question_number = 0;
let correct = 0;

document.addEventListener("DOMContentLoaded", () => {
  load_question();
});

function load_question() {
  document.querySelector("#question").innerHTML =
    questions[question_number].question;
  const options = document.querySelector("#options");
  options.innerHTML = "";
  for (const option of questions[question_number].options) {
    options.innerHTML += `<button class="option">${option}</button>`;
  }
  document.querySelector(
    "#correct"
  ).innerHTML = `${correct} of ${question_number}`;

  document.querySelectorAll(".option").forEach((option) => {
    option.onclick = () => {
      if (option.textContent == questions[question_number].answer) {
        correct++;
      }
      question_number++;
      load_question();
    };
  });
}
