document.addEventListener('DOMContentLoaded', start);

let currentSectionNum = 0;
const startBtn = document.querySelector('#start');

function start() {
    startBtn.addEventListener('click', startHunt);
}

function startHunt(e) {
    currentSectionNum++;
    console.log(currentSectionNum);
    if (currentSectionNum % 2 === 0) {
        console.log("clue -> num " + currentSectionNum);
    } else {
        console.log("question -> num " + currentSectionNum);
    }
}

function createQuestionElement(number, question, answer) {
    const questionSectionEl = document.createElement("section");
    questionSectionEl.classList.add("question");
    questionSectionEl.dataset.number = number;

    const pEl = document.createElement("p");
    pEl.textContent = question;

    const inputSectionEl = createInputSection;


}

function createInputSection() {
    const inputSection = document.createElement("section");

    const inputEl = document.createElement("input");
    inputEl.setAttribute("name", "answer");
    inputEl.setAttribute("type", "text");
    inputEl.setAttribute("placeholder", "Answer");

    const btnEl = document.createElement("button");
    btnEl.classList.add("btn-red");
    btnEl.type = "button";
    btnEl.textContent = "Submit";

    inputSection.append(inputEl, btnEl);
    return inputSection;
}