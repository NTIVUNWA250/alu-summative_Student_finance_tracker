# 🎓 Student Finance Tracker

A lightweight, accessible web app for students to track their personal expenses, analyze spending habits, and build financial awareness — all without needing an account or internet connection.

---

## 🚀 Features

- ✅ Add, edit, and delete expense records
- ✅ Customizable categories with editable "Other" option
- ✅ Dashboard with total spend, top category, and last 7 days summary
- ✅ Search by description and live filtering
- ✅ Category breakdown cards for recent activity
- ✅ Responsive design for mobile and desktop
- ✅ LocalStorage-based data persistence (no backend required)

---

## 🧱 Tech Stack

- **HTML5** – Semantic structure and accessibility
- **CSS3** – Responsive layout and clean styling
- **JavaScript (ES6 Modules)** – Modular logic and dynamic UI
- **LocalStorage** – Offline data storage
- **Modular Files**:
  - `form.js` – Handles record creation and editing
  - `records.js` – Displays all records with edit/delete
  - `dashboard.js` – Shows stats, search, and category breakdown
  - `state.js` – Manages record state and storage
  - `storage.js` – Abstracts localStorage access
  - `settings.js` – (Optional) User preferences like currency and theme

---

## 📦 Folder Structure

project-root/
│ 
 ├── index.html 
 ├── form.html 
 ├── records.html 
 ├── dashboard.html 
 ├── settings.html 
 │ 
 ├── styles/ 
 │ └── style.css 
 │ 
 ├── scripts/ 
 │ 
 ├── form.js 
 │ ├── records.js 
 │ ├── dashboard.js 
 │ ├── settings.js 
 │ ├── state.js 
 │ └── storage.js

 
---

## 🛠 Setup Instructions

1. Clone or download the repository
2. Open `index.html` or `dashboard.html` in your browser
3. Use the app — no installation or login required!

---

## 📚 How It Works

- Records are stored as objects like:

```js
{
  id: "rec_0001",
  description: "Lunch at cafeteria",
  amount: 12.50,
  category: "Food",
  date: "2025-09-29",
  createdAt: "...",
  updatedAt: "..."
}

