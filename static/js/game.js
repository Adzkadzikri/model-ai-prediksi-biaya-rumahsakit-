const questions = [
    {
        question: "Apa yang harus dilakukan untuk mencegah demam berdarah?",
        options: ["Minum obat antibiotik", "Pengendalian nyamuk", "Makan makanan pedas", "Tidur siang"],
        answer: 1
    },
    {
        question: "Berapa kali sehari orang dewasa sehat harus minum air?",
        options: ["1-2 gelas", "3-4 gelas", "8-10 gelas", "15 gelas"],
        answer: 2
    },
    {
        question: "Apa penyebab utama hipertensi?",
        options: ["Kurang tidur", "Diet tinggi garam", "Terlalu banyak olahraga", "Minum kopi"],
        answer: 1
    },
    {
        question: "Berapa lama waktu tidur yang direkomendasikan untuk orang dewasa?",
        options: ["4-5 jam", "6-7 jam", "8-9 jam", "10-11 jam"],
        answer: 2
    },
    {
        question: "Apa yang harus dilakukan jika terkena luka bakar ringan?",
        options: ["Oleskan mentega", "Bilas dengan air dingin", "Tutup rapat", "Gosok dengan sabun"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionEl = document.getElementById('question');
    const optionsEl = document.getElementById('options');
    const nextBtn = document.getElementById('next-btn');

    if (currentQuestion < questions.length) {
        const q = questions[currentQuestion];
        questionEl.textContent = q.question;
        optionsEl.innerHTML = '';
        q.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.textContent = option;
            btn.onclick = () => checkAnswer(index);
            optionsEl.appendChild(btn);
        });
        nextBtn.style.display = 'none';
    } else {
        showResult();
    }
}

function checkAnswer(selected) {
    const q = questions[currentQuestion];
    const options = document.querySelectorAll('.options button');
    options.forEach(btn => btn.disabled = true);

    if (selected === q.answer) {
        score++;
        options[selected].style.backgroundColor = 'green';
    } else {
        options[selected].style.backgroundColor = 'red';
        options[q.answer].style.backgroundColor = 'green';
    }

    document.getElementById('score').textContent = `Skor: ${score}`;
    document.getElementById('next-btn').style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestion++;
    loadQuestion();
}

function showResult() {
    const quizEl = document.getElementById('quiz');
    const scoreEl = document.getElementById('score');
    const restartBtn = document.getElementById('restart-btn');

    quizEl.innerHTML = `<h2>Quiz Selesai!</h2><p>Skor akhir Anda: ${score}/${questions.length}</p>`;
    scoreEl.style.display = 'none';
    restartBtn.style.display = 'inline-block';
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('score').textContent = 'Skor: 0';
    document.getElementById('score').style.display = 'block';
    document.getElementById('restart-btn').style.display = 'none';
    loadQuestion();
}

document.getElementById('next-btn').addEventListener('click', nextQuestion);
document.getElementById('restart-btn').addEventListener('click', restartQuiz);

// Load first question
loadQuestion();
