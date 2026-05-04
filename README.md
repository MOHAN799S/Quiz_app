# 🧠 Quiz Application

A full-stack quiz platform built with React + Vite and a Node.js/Express backend. Users open the app and instantly start a quiz — no login, no signup, just questions. Every session serves a fresh randomized set of 10 programming questions pulled from a MongoDB bank of 100+.

---

## 🔗 Live Demo

[quiz-app-x8ib.onrender.com](https://quiz-app-x8ib.onrender.com/)

---

## ✨ Features

- 🎲 **Randomized question sets** — 10 unique questions selected randomly per session from a bank of 100+ programming questions
- 🔀 **No repeated order** — question sequence differs on every attempt, keeping assessments fresh and integrity-proof
- ⚡ **Optimized performance** — sub-2-second page load across mobile, tablet, and desktop breakpoints
- 📱 **Fully responsive** — consistent experience across 3 device breakpoints
- 🚪 **No login required** — open the app and start quizzing instantly
- 📊 **Score summary** — results shown at the end of each session

---

## 🛠️ Tech Stack

### Frontend
| Technology | Usage |
|---|---|
| **React.js** | Component-based UI and quiz state management |
| **Vite** | Fast development server and optimized production build |
| **CSS3** | Responsive styling across all breakpoints |

### Backend
| Technology | Usage |
|---|---|
| **Node.js** | Server-side runtime |
| **Express.js** | REST API routing |
| **MongoDB** | Question bank storage |
| **Mongoose** | MongoDB object modeling |

---

## 🏗️ Architecture

```
Client (React + Vite)
        │
        │  GET /api/quiz  (fetch 10 random questions)
        ▼
Server (Node.js + Express.js)
        │
        │  $sample aggregation (random 10 from 100+)
        ▼
Database (MongoDB)
  └── questions collection
```

---

## 📡 API Endpoint

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/quiz` | Returns 10 randomly sampled questions from MongoDB |

**Sample response:**
```json
[
  {
    "_id": "64abc123",
    "question": "What does the '===' operator check in JavaScript?",
    "options": ["Value only", "Type only", "Value and Type", "Neither"],
    "answer": "Value and Type"
  }
]
```

---


## ⚙️ How to Run Locally

### Prerequisites
- Node.js v18+
- MongoDB (local or MongoDB Atlas)
- npm

### 1. Clone the repository
```bash
git clone https://github.com/MOHAN799S/Quiz_app.git
cd Quiz-app
```

### 2. Set up environment variables

Create a `.env` file in the `server/` directory:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 3. Install and run the backend
```bash
cd server
npm install
npm run dev
```

### 4. Install and run the frontend
```bash
cd client
npm install
npm run dev
```

> Frontend runs at `http://localhost:5173` (Vite default) — backend at `http://localhost:5000`

---

## 💡 Key Concepts Demonstrated

- **MERN Stack** — end-to-end full-stack JavaScript development
- **Vite** — faster HMR and optimized builds compared to Create React App
- **MongoDB aggregation** — `$sample` operator for true server-side randomization
- **React state management** — tracking current question, selected answers, score, and session progress
- **REST API design** — single clean GET endpoint serving all quiz data
- **Responsive CSS** — sub-2-second load time optimized across mobile, tablet, and desktop
- **Separation of concerns** — decoupled frontend and backend communicating via API

---

## 🔮 Future Improvements

- [ ] Category filter — attempt quizzes by language or topic
- [ ] Timer per question — add time pressure for each answer
- [ ] Detailed result page — review correct answers after submission
- [ ] Score history — store past session results in localStorage
- [ ] Difficulty levels — easy, medium, hard question sets

---

## 🚀 Deployment

- **Frontend + Backend** — hosted on [Render](https://render.com/)
- **Database** — MongoDB Atlas

---

## 👤 Author

**Mohan Lakshman Sangidi**
-GitHub: MOHAN799S(https://github.com/MOHAN799S)
-LinkedIn: Mohan Lakshman Sangidi (https://www.linkedin.com/in/mohan-lakshman-sangidi-287322256/)
- Live: [quiz-app-x8ib.onrender.com](https://quiz-app-x8ib.onrender.com/)


---

⭐ **If you found this helpful, give it a star!**
