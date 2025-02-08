document.addEventListener('DOMContentLoaded', start);

let currentSectionNum = 0;
const startBtn = document.querySelector('#start');
const mainEl = document.querySelector('main');

function start() {
    console.log("DOMContentLoaded");
    startBtn.addEventListener('click', startHunt);
}

function startHunt() {
    mainEl.removeChild(document.querySelector('main section'));
    let newSectionEl;
    currentSectionNum++;
    if (currentSectionNum % 2 === 0) {
        newSectionEl = createClueElement(currentSectionNum, "Question " + currentSectionEl, "answer");
    } else {
        newSectionEl = createQuestionElement(currentSectionNum, "Question " + currentSectionEl, "answer");
    }
    mainEl.appendChild(newSectionEl);
}

function createQuestionElement(number, question, answer) {
    const questionSectionEl = document.createElement("section");
    questionSectionEl.classList.add("question");
    questionSectionEl.dataset.number = number;

    const pEl = document.createElement("p");
    pEl.textContent = question;

    const newInputSectionEl = createInputSection();

    questionSectionEl.append(pEl, newInputSectionEl);
    return questionSectionEl;
}

function createClueElement(number, answer) {
    const clueSectionElement = document.createElement('section');
    clueSectionElement.classList.add("clue");
    clueSectionElement.dataset.number = number;

    const imgSectionEl = createImgSection(number);

    const newInputSectionEl = createInputSection();

    clueSectionElement.append(imgSectionEl, newInputSectionEl)
}

function createInputSection() {
    const inputSectionEl = document.createElement("section");
    inputSectionEl.classList.add("input-section");

    const inputEl = document.createElement("input");
    inputEl.setAttribute("name", "answer");
    inputEl.setAttribute("type", "text");
    inputEl.setAttribute("placeholder", "Answer");

    const btnEl = document.createElement("button");
    btnEl.classList.add("btn-red");
    btnEl.type = "button";
    btnEl.textContent = "Submit";

    inputSectionEl.append(inputEl, btnEl);
    return inputSectionEl;
}

function createImgSection(number) {
    const imgSectionEl = document.createElement('section');
    imgSectionEl.classList.add('img-section');

    imgSectionEl.appendChild(createImg(number, 1));
    imgSectionEl.appendChild(createImg(number, "+"));
    imgSectionEl.appendChild(createImg(number, 2));

    return imgSectionEl;
}

function createImg(number, imageNum) {
    const imgEl = document.createElement('img');
    imgEl.classList.add('img-200');
    if (imageNum == 1) {
        imgEl.setAttribute("src", "assets/img/clues/" + number + "/1.jpg");
        imgEl.setAttribute("alt", "location");
    } else if (imageNum == 2) {
        imgEl.setAttribute("src", "assets/img/clues/" + number + "/2.png");
        imgEl.setAttribute("alt", "symbol");
    } else if (imageNum === "+") {
        imgEl.setAttribute("src", "assets/img/clues/plus-64.png");
        imgEl.setAttribute("alt", "plus");
    }

    return imgEl;
}