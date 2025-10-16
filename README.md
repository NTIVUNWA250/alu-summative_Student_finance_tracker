# 🎓 Student Finance Tracker

A lightweight, accessible web app for students to track personal expenses, analyze spending habits, and build financial awareness — all without needing an account or internet connection.

---

## 🎨 Theme

**Modern Academic** — clean lines, soft contrast, and intuitive navigation. Inspired by student dashboards and productivity tools, with SVG icons and responsive dropdown menus for mobile users.

---

## 🚀 Features

- ✅ Add, edit, and delete expense records
- ✅ Customizable categories with editable "Other" option
- ✅ Dashboard with total spend, top category, and last 7 days summary
- ✅ Search by description and live filtering
- ✅ Category breakdown cards for recent activity
- ✅ Regex-validated input with ARIA live feedback
- ✅ Responsive design for mobile and desktop
- ✅ LocalStorage-based data persistence (no backend required)
- ✅ Modular JS architecture for maintainability
- ✅ Keyboard navigation and accessibility support

---

## 🧱 Tech Stack

- **HTML5** – Semantic structure and accessibility
- **CSS3** – Responsive layout and clean styling
- **JavaScript (ES6 Modules)** – Modular logic and dynamic UI
- **LocalStorage** – Offline data storage

### 📁 Modular Files

| File | Purpose |
|------|---------|
| `form.js` | Handles record creation and editing |
| `records.js` | Displays all records with edit/delete |
| `dashboard.js` | Shows stats, search, and category breakdown |
| `state.js` | Manages record state and storage |
| `storage.js` | Abstracts localStorage access |
| `settings.js` | (Optional) User preferences like currency and theme |

---

---

## 🧪 Regex Catalog

| Pattern | Purpose | Example |
|--------|---------|---------|
| `^\d{4}-\d{2}-\d{2}$` | Date (YYYY-MM-DD) | `2025-10-17` |
| `^[A-Za-z\s]{3,30}$` | Category name | `Transportation` |
| `^\d+(\.\d{1,2})?$` | Amount (up to 2 decimals) | `45.50` |
| `^[\w\s\-]{3,50}$` | Description | `Bus fare to campus` |

All patterns are used in real-time validation with error feedback and ARIA alerts.

---

## 🎹 Keyboard Map

| Shortcut | Action |
|----------|--------|
| `Tab` | Navigate between input fields |
| `Enter` | Submit form |
| `Esc` | Close dropdown or modal |
| `Alt + D` | Focus dashboard summary |
| `Alt + N` | Focus new entry form |

---

## ♿ Accessibility Notes

- Semantic HTML with proper heading structure and form labels
- ARIA roles and `aria-live` regions for dynamic updates
- Focus management for modals and dropdowns
- Screen reader-friendly error messages and confirmations
- High-contrast theme toggle (coming soon)

---

## 📚 How It Works

Each record is stored as an object like:

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

## 🧪 How to Run Tests 

1. For manual testing:

    -Open index.html in your browser
    -Add/edit/delete records and verify dashboard updates
    -Use dev tools to inspect localStorage and DOM behavior
    -Test keyboard shortcuts and screen reader feedback

2. If you’re using a test framework:    Install dependencies (if applicable): ```bash npm install rearrange it in a good format'''

 ## 🧪 Live Server url: http://127.0.0.1:5500/work/alu-summative_Student_finance_tracker/index.html