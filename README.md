# The Quiz 🎯

An **interactive car and bike quiz** built with vanilla JavaScript. Test your automotive knowledge with categories, a timer, and a clean, engaging user interface.

Created as a fun learning project with an emphasis on interactive design and real-time feedback.

> "How well do you know cars and bikes?"

---

## ✨ Features

- 🚗 **Multiple Categories** - Cars, bikes, and more automotive questions
- ⏱️ **Timed Questions** - Answer within the time limit
- 🎯 **Instant Feedback** - Know immediately if you're right or wrong
- 📊 **Score Tracking** - See your final score and performance
- 🎨 **Clean UI** - Engaging, responsive interface
- 🔄 **Retake Quiz** - Play again anytime
- 📱 **Responsive Design** - Works on all devices

---

## 🛠️ Tech Stack

- **Frontend:** Vanilla JavaScript (ES6+)
- **Markup:** HTML5
- **Styling:** CSS3
- **No Framework** - Pure JavaScript for educational purposes

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server or build tools needed!

### Installation

```bash
# Clone the repository
git clone https://github.com/Reva174/The_Quiz.git

# Navigate to project directory
cd The_Quiz

# Open index.html in your browser
# Simply double-click index.html or use a local server
```

**Or use a local server:**
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js with http-server
npx http-server

# Then visit http://localhost:8000
```

---

## 📖 How to Play

1. **Start Quiz** - Click the "Start" button
2. **Choose Category** - Select from available categories (Cars, Bikes, etc.)
3. **Answer Questions** - Read the question and select your answer
4. **Watch Timer** - Answer before time runs out!
5. **Get Feedback** - See if you were correct instantly
6. **View Results** - Get your final score and performance stats
7. **Retake** - Try again to improve your score

---

## 📂 Project Structure

```
The_Quiz/
├── index.html           # Main HTML file
├── style.css            # Styling
├── script.js            # Quiz logic and interactivity
├── questions.js         # Question data
└── README.md
```

---

## 🎯 Quiz Categories

### 🚗 Cars
- General automotive knowledge
- Car models and manufacturers
- Car specifications
- Automotive history

### 🏍️ Bikes
- Motorcycle brands
- Bike specifications
- Motorcycle history
- Performance bikes

---

## ❓ Sample Questions Format

```javascript
const questions = [
  {
    id: 1,
    category: "cars",
    question: "What is the top speed of a Tesla Model S?",
    options: ["200 mph", "150 mph", "180 mph", "160 mph"],
    correct: 0,
    timeLimit: 15
  },
  // More questions...
];
```

---

## ⏰ Timer Functionality

- **Per Question Timer** - Each question has a time limit
- **Visual Countdown** - See seconds remaining
- **Auto-Submit** - Question automatically submitted when time expires
- **Customizable** - Adjust time limits per question

---

## 🎨 UI/UX Features

- **Progress Bar** - Visual indication of quiz progress
- **Category Selection** - Easy-to-use category buttons
- **Question Counter** - Know which question you're on
- **Answer Buttons** - Clear, clickable answer options
- **Score Display** - Final results with percentage
- **Color Feedback** - Green for correct, red for incorrect

---

## 📊 Scoring System

```
Total Score = (Correct Answers / Total Questions) × 100
Performance = Percentage-based rating
```

Example:
- 9/10 = 90% = Great job! 🌟
- 7/10 = 70% = Good effort! 👍
- 5/10 = 50% = Keep learning! 📚

---

## 🎓 Learning Outcome

This project demonstrates:
- ✅ **DOM Manipulation** - Dynamic content updates
- ✅ **Event Handling** - User interactions
- ✅ **Timer Logic** - SetInterval and countdown
- ✅ **Score Calculation** - Math and conditionals
- ✅ **Data Structure** - Questions array management
- ✅ **Responsive Design** - Works on all screen sizes

---

## 📱 Responsive Design

Works perfectly on:
- 🖥️ Desktop
- 💻 Laptop
- 📱 Mobile phones
- 📲 Tablets

---

## 🔮 Future Enhancements

- [ ] Add more categories (trucks, electric vehicles, luxury brands, etc.)
- [ ] Difficulty levels (Easy, Medium, Hard)
- [ ] Leaderboard with local storage
- [ ] Question images/screenshots
- [ ] Multiplayer mode
- [ ] Score history
- [ ] Achievements/badges
- [ ] Sound effects (optional)
- [ ] Detailed explanations for answers
- [ ] Admin panel to add questions
- [ ] Backend to store and sync scores

---

## 🤝 Contributing

Want to add more questions or improve the quiz?

1. Fork the repository
2. Add your questions to `questions.js`
3. Create a feature branch (`git checkout -b feature/YourFeature`)
4. Commit your changes (`git commit -m 'Add new questions or features'`)
5. Push to the branch (`git push origin feature/YourFeature`)
6. Open a Pull Request

---

## 📝 License

This project is open source under the MIT License.

---

## 👨‍👩‍👧‍👦 Project Background

Created as a fun learning project with my 7th-grade brother to make learning interactive and engaging. The project helped me understand:
- How to structure interactive applications
- The importance of user feedback
- Making learning fun through gamification
- Building responsive interfaces

---

## 🙋 Support & Feedback

Have questions or want to contribute questions?
- Open an issue on GitHub
- Submit a pull request with new questions
- Reach out to [@Reva174](https://github.com/Reva174)

---

## 🚀 Next Steps

To expand this quiz:
1. **Add More Questions** - Contribute to the question bank
2. **Create New Categories** - Add trucks, bikes, electric vehicles
3. **Implement Backend** - Save scores and track progress
4. **Add Images** - Show vehicle photos with questions
5. **Create Levels** - Easy, Medium, Hard difficulty

---

**Built with ❤️ to make learning fun.**

*Test your automotive knowledge. Challenge your friends. Improve your score.*

**Happy quizzing! 🏁**
