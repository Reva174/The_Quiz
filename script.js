const quizData = {
  cars: [
    { q: "Which brand manufactures the Bugatti Chiron?", options: ["Ferrari", "Bugatti", "Lamborghini", "Porsche"], answer: 1 },
    { q: "Tesla cars primarily run on which power source?", options: ["Petrol", "Diesel", "Electricity", "Hybrid fuel"], answer: 2 },
    { q: "Which car brand uses a prancing horse logo?", options: ["Ferrari", "Ford", "Jaguar", "Audi"], answer: 0 },
    { q: "Which car is popularly known as a muscle car?", options: ["Dodge Challenger", "Mini Cooper", "Volkswagen Polo", "Toyota Prius"], answer: 0 },
    { q: "SUV stands for?", options: ["Sports Utility Vehicle", "Super Urban Vehicle", "Standard Utility Van", "Special Use Vehicle"], answer: 0 },
    { q: "Which company manufactures the Mustang?", options: ["Chevrolet", "Ford", "Dodge", "BMW"], answer: 1 },
    { q: "Which car brand is famous for luxury sedans?", options: ["Mercedes-Benz", "Suzuki", "Tata", "Kia"], answer: 0 },
    { q: "Which car is known for drifting culture?", options: ["Toyota Supra", "Honda City", "Hyundai i20", "Toyota Innova"], answer: 0 },
    { q: "Which country is BMW from?", options: ["Italy", "Germany", "USA", "Japan"], answer: 1 },
    { q: "Which company owns Lamborghini?", options: ["Volkswagen Group", "Ferrari", "Ford", "General Motors"], answer: 0 },
    { q: "Which fuel type is the most eco-friendly?", options: ["Petrol", "Diesel", "Electric", "CNG"], answer: 2 },
    { q: "Which car brand focuses heavily on safety?", options: ["Volvo", "Mazda", "Jeep", "Nissan"], answer: 0 },
    { q: "Which car is commonly used as a taxi in India?", options: ["Maruti Dzire", "BMW X5", "Audi A6", "Mini Cooper"], answer: 0 },
    { q: "Which transmission type allows automatic gear shifting?", options: ["Manual", "Automatic", "Clutch", "Differential"], answer: 1 },
    { q: "Which company manufactures electric car Model S?", options: ["Tesla", "Rivian", "Nissan", "BYD"], answer: 0 }
  ],
  bikes: [
    { q: "Which brand uses the slogan 'Ready to Race'?", options: ["Yamaha", "KTM", "Royal Enfield", "Honda"], answer: 1 },
    { q: "Which bike is known for long-ride comfort?", options: ["Royal Enfield Classic", "KTM RC", "Yamaha R15", "TVS Apache RR"], answer: 0 },
    { q: "Which bike is fully electric?", options: ["Ola S1", "Pulsar 220", "Apache RTR", "FZ-S"], answer: 0 },
    { q: "Which bike is famous for extreme top speed?", options: ["Kawasaki Ninja H2", "Splendor Plus", "Activa", "Avenger"], answer: 0 },
    { q: "Which company makes the Hayabusa?", options: ["Yamaha", "Suzuki", "Honda", "Kawasaki"], answer: 1 },
    { q: "Which bike is considered beginner-friendly?", options: ["Yamaha R15", "Hayabusa", "Ninja ZX-10R", "Ducati Panigale"], answer: 0 },
    { q: "ABS in bikes stands for?", options: ["Anti-lock Braking System", "Advanced Balance System", "Auto Brake Support", "Anti Brake Speed"], answer: 0 },
    { q: "Which brand is known for cruiser motorcycles?", options: ["Royal Enfield", "KTM", "TVS", "Hero"], answer: 0 },
    { q: "Which bike is commonly used for daily commuting?", options: ["Hero Splendor", "Ducati Monster", "BMW S1000RR", "Ninja H2"], answer: 0 },
    { q: "Which company manufactures the Pulsar series?", options: ["Bajaj", "TVS", "Hero", "Yamaha"], answer: 0 },
    { q: "Which bike brand is Japanese?", options: ["Yamaha", "KTM", "Royal Enfield", "BMW"], answer: 0 },
    { q: "Which bike category focuses on racing?", options: ["Sport bikes", "Cruisers", "Scooters", "Commuters"], answer: 0 },
    { q: "Which scooter is one of the most sold in India?", options: ["Honda Activa", "Vespa", "Aprilia SR", "Ather 450"], answer: 0 },
    { q: "Which engine type gives higher fuel efficiency?", options: ["Single cylinder", "Twin cylinder", "Four cylinder", "V8"], answer: 0 },
    { q: "Which bike brand focuses heavily on performance racing?", options: ["Kawasaki", "Hero", "TVS", "Bajaj"], answer: 0 }
  ]
};

let questions = [];
let current = 0;
let score = 0;
let timeLeft = 10;
let timer;

function startGame(category) {
  questions = quizData[category];
  current = 0;
  score = 0;

  document.getElementById("categoryScreen").classList.add("hidden");
  document.getElementById("quizScreen").classList.remove("hidden");
  document.getElementById("categoryTitle").innerText = category === "cars" ? "🚗 Supercars Quiz" : "🏍️ Bikes Quiz";

  loadQuestion();
}

function loadQuestion() {
  if (current >= questions.length) {
    endGame();
    return;
  }

  timeLeft = 10;
  updateTimerDisplay();
  updateProgress();

  const q = questions[current];
  document.getElementById("question").innerText = q.q;
  document.getElementById("questionNumber").innerText = `Question ${current + 1}/${questions.length}`;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(index);
    optionsDiv.appendChild(btn);
  });

  clearInterval(timer);
  timer = setInterval(updateTimer, 1000);
}

function updateProgress() {
  const progress = ((current) / questions.length) * 100;
  document.getElementById("progressFill").style.width = progress + "%";
}

function updateTimer() {
  timeLeft--;
  updateTimerDisplay();

  if (timeLeft === 0) {
    clearInterval(timer);
    showCorrectAnswer(-1);
    setTimeout(() => {
      current++;
      loadQuestion();
    }, 2000);
  }
}

function updateTimerDisplay() {
  document.getElementById("timer").innerText = `⏱️ ${timeLeft}s`;
}

function checkAnswer(selectedIndex) {
  clearInterval(timer);
  const correctIndex = questions[current].answer;

  showCorrectAnswer(selectedIndex);

  if (selectedIndex === correctIndex) {
    score++;
  }

  setTimeout(() => {
    current++;
    loadQuestion();
  }, 2000);
}

function showCorrectAnswer(selectedIndex) {
  const buttons = document.querySelectorAll("#options button");
  const correctIndex = questions[current].answer;

  buttons.forEach((btn, index) => {
    btn.classList.add("disabled");
    btn.onclick = null;

    if (index === correctIndex) {
      btn.classList.add("correct");
    } else if (index === selectedIndex) {
      btn.classList.add("incorrect");
    }
  });
}

function endGame() {
  document.getElementById("quizScreen").classList.add("hidden");
  document.getElementById("resultScreen").classList.remove("hidden");

  const percentage = (score / questions.length) * 100;
  let emoji, message;

  if (percentage === 100) {
    emoji = "🏆";
    message = "Perfect! You're a legend!";
  } else if (percentage >= 80) {
    emoji = "🎉";
    message = "Excellent work! Almost perfect!";
  } else if (percentage >= 60) {
    emoji = "😊";
    message = "Good job! Keep learning!";
  } else if (percentage >= 40) {
    emoji = "🤔";
    message = "Not bad! Practice makes perfect!";
  } else {
    emoji = "📚";
    message = "Keep studying! You'll get better!";
  }

  document.getElementById("resultEmoji").innerText = emoji;
  document.getElementById("scoreText").innerText = `${score} / ${questions.length}`;
  document.getElementById("scoreMessage").innerText = message;
}