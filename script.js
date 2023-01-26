let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Wofür steht CSS?",
        "answer_1": "Cascadian-Style-Sheet",
        "answer_2": "Charlies-Surfer-Shop",
        "answer_3": "Central-Source-Sequence",
        "answer_4": "Cyber-Space-Security",
        "right_answer": 1
    },
    {
        "question": "Wofür steht HTML?",
        "answer_1": "Half Time Menu Lunch",
        "answer_2": "Horst Tina Marcel Lauch",
        "answer_3": "Heftig Toller Massen Lauf",
        "answer_4": "HyperText Markup Language",
        "right_answer": 4
    },
    {
        "question": "Wie schreibt man Kommentare in JavaScript?",
        "answer_1": "// Ich bin ein Kommentar",
        "answer_2": "*/ Ich bin ein Kommentar",
        "answer_3": "<--- Ich bin ein Kommentar",
        "answer_4": "/* Ich bin ein Kommentar",
        "right_answer": 1
    },
    {
        "question": "Was benötigt man eher zum Programieren?",
        "answer_1": "Toast mir Salami und Käse",
        "answer_2": "Notebook",
        "answer_3": "Stift und Zeichenblock",
        "answer_4": "Ein Auto auf der Straße",
        "right_answer": 2
    }
];

let rightquestions = 0;

let currentquest = 0;
let currentCounter = 1;

let audio_right_answer = new Audio('audio/right.mp3');
let audio_wrong_answer = new Audio('audio/wrong.mp3');


function init() {
    document.getElementById('counter').innerHTML = questions.length;
    document.getElementById('counter1').innerHTML = questions.length;
    document.getElementById('current-counter').innerHTML = currentCounter;
    showQuest();
}


function showQuest() {

    if (gameIsOver()) {
        showEndScreen();
    } else {
        progressBar();
        showNextQuestion();
    }
}

function gameIsOver() {
    return currentquest >= questions.length;
}

function answer(selection) {
    let question = questions[currentquest];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`
    if (rightAnswerSelected(selectedQuestionNumber)) {
        rightAnswer(selection);
    } else {
        wrongAnswer(selection, idOfRightAnswer);
    }
    document.getElementById('next-button').disabled = false;
}

function rightAnswerSelected(selectedQuestionNumber) {
    let question = questions[currentquest];
    return selectedQuestionNumber == question['right_answer'];
}

function rightAnswer(selection) {
    document.getElementById(selection).classList.add('text-bg-success');
    rightquestions++;
    audio_right_answer.play();
}

function wrongAnswer(selection, idOfRightAnswer) {
    document.getElementById(selection).classList.add('text-bg-danger');
    document.getElementById(idOfRightAnswer).classList.add('text-bg-success');
    audio_wrong_answer.play();
}

function nextQuestion() {
    currentquest++;
    currentCounter++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuest();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').classList.remove('text-bg-success');
    document.getElementById('answer_1').classList.remove('text-bg-danger');
    document.getElementById('answer_2').classList.remove('text-bg-success');
    document.getElementById('answer_2').classList.remove('text-bg-danger');
    document.getElementById('answer_3').classList.remove('text-bg-success');
    document.getElementById('answer_3').classList.remove('text-bg-danger');
    document.getElementById('answer_4').classList.remove('text-bg-success');
    document.getElementById('answer_4').classList.remove('text-bg-danger');
}

function progressBar() {
    let percent = (currentquest + 1) / questions.length
    percent = percent * 100;
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width:${percent}%`;
}

function showNextQuestion() {
    let question = questions[currentquest];
    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    document.getElementById('current-counter').innerHTML = currentCounter;
}

function showEndScreen() {
    document.getElementById('end-card').style = '';
    document.getElementById('quest-cards').style = 'display: none';
    document.getElementById('amount-of-right-answers').innerHTML = rightquestions;
    document.getElementById('card-img-top').style = 'display: none';
    document.getElementById('div-container-landscape').style = 'display: none';
}

function restartQuiz() {
    document.getElementById('end-card').style = 'display: none';
    document.getElementById('quest-cards').style = '';
    document.getElementById('card-img-top').style = 'display: unset';
    document.getElementById('div-container-landscape').style = 'width: 100%';
    currentCounter = 1;
    currentquest = 0;
    rightquestions = 0;
    init();
}