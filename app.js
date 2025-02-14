document.addEventListener('DOMContentLoaded', start);

let currentSectionNum = 0;
const startBtn = document.querySelector('#start');
const mainEl = document.querySelector('main');

function start() {
    console.log("DOMContentLoaded");
    startBtn.addEventListener('click', nextStep);
}

function nextStep() {
    mainEl.innerHTML="";
    let newSectionEl;
    currentSectionNum++;

    if (currentSectionNum <= Object.keys(answers).length ) {
        if (currentSectionNum % 2 === 0) {
            newSectionEl = createSectionElement("clue", currentSectionNum);
        } else {
            newSectionEl = createSectionElement("question", currentSectionNum);
        }
    } else {
        newSectionEl = createLastSection();
    }

    mainEl.appendChild(newSectionEl);
}

function createSectionElement(type, number) {
    const sectionEl = document.createElement("section");
    sectionEl.classList.add("card");
    sectionEl.dataset.number = number;

    if (type === "question") {
        sectionEl.classList.add("question");

        const pEl = document.createElement("p");
        pEl.textContent = questions[number];

        sectionEl.appendChild(pEl);
    } else if (type === "clue") {
        sectionEl.classList.add("clue");

        const imgSectionEl = createImgSection(number);

        sectionEl.appendChild(imgSectionEl);
    }

    const newInputSectionEl = createInputSection();
    sectionEl.appendChild(newInputSectionEl);

    return sectionEl;
}

function createLastSection() {
    const sectionEl = document.createElement("section");
    sectionEl.id = "last-screen";
    sectionEl.classList.add("card");

    const pEl = document.createElement("p");
    pEl.textContent = "Congratulations! You solved the treasure hunt, you are a true heart hunter! Enjoy the rest of this magical day!";

    sectionEl.appendChild(pEl);
    return sectionEl;
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
    btnEl.addEventListener('click', checkAnswer);

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
    if (imageNum == 1) {
        imgEl.setAttribute("src", "assets/img/clues/" + number + "/1.jpg");
        imgEl.setAttribute("alt", "location");
        imgEl.classList.add("picture");
    } else if (imageNum == 2) {
        imgEl.setAttribute("src", "assets/img/clues/" + number + "/2.png");
        imgEl.setAttribute("alt", "symbol");
        imgEl.classList.add("picture");
    } else if (imageNum === "+") {
        imgEl.setAttribute("src", "assets/img/clues/plus-64.png");
        imgEl.setAttribute("alt", "plus");
        imgEl.classList.add("plus");
    }

    return imgEl;
}

function checkAnswer(e) {
    const questNum = e.target.parentElement.parentElement.dataset.number;
    const inputEl = document.querySelector('.input-section input');

    if (inputEl.value === answers[questNum]) {
        nextStep();
    } else {
        if (!inputEl.classList.contains('error')) {
            inputEl.classList.add('error');

            const errorMsg = document.createElement("p");
            errorMsg.classList.add('error-message');
            errorMsg.textContent = "Wrong answer! Try again."

            inputEl.parentElement.appendChild(errorMsg);
        }
    }
}

const questions = {
    1: "Cupid has what name in Greek mythology?",
    3: "When was February 14 first declared to be Valentine's Day?",
    5: "What was Valentine’s profession?",
    7: "In which country did giving chocolate keys become a Valentine’s Day tradition to symbolize unlocking the giver’s heart?",
}

const answers = {
    1: "Eros",
    2: "lOvE",
    3: "1537",
    4: "holIDAy",
    5: "priest",
    6: "CupID",
    7: "Italy",
    8: "HEaRt"
}