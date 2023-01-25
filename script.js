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

let currentquest = 0;
let currentCounter = 1;


function init() {
    document.getElementById('counter').innerHTML = questions.length;
    document.getElementById('current-counter').innerHTML = currentCounter;
    showQuest();
}


function showQuest() {

    if (currentquest >= questions.length) {
        // TODO End Screen
    } else {

        let question = questions[currentquest];
        document.getElementById('question').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
        document.getElementById('current-counter').innerHTML = currentCounter;
    }
}

function answer(selection) {
    let question = questions[currentquest];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`
    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).classList.add('text-bg-success');
    } else {
        document.getElementById(selection).classList.add('text-bg-danger');
        document.getElementById(idOfRightAnswer).classList.add('text-bg-success');
    }
    document.getElementById('next-button').disabled = false;
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