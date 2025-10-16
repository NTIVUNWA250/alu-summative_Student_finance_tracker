import { getRecords, deleteRecord } from './state.js';

document.addEventListener('DOMContentLoaded', () => {
  const stats = document.getElementById('stats-container');
  const searchInput = document.createElement('input');
  const searchButton = document.createElement('button');
  const resultsContainer = document.createElement('div');
  const categoryList = document.createElement('ul');

  searchInput.type = 'text';
  searchInput.placeholder = 'Search by description';
  searchButton.textContent = 'Search';
  resultsContainer.id = 'dashboard-records';
  categoryList.id = 'category-breakdown';

  stats.before(searchInput, searchButton);
  stats.after(resultsContainer);
  stats.after(categoryList);

  function renderStats(records) {
    const total = records.length;
    const sum = records.reduce((acc, r) => acc + Number(r.amount), 0).toFixed(2);

    const categoryCounts = {};
    records.forEach(r => {
      categoryCounts[r.category] = (categoryCounts[r.category] || 0) + 1;
    });

    const topCategory = Object.entries(categoryCounts)
      .sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A';

    const today = new Date();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(today.getDate() - 7);

    const last7 = records.filter(r => new Date(r.date) >= sevenDaysAgo);
    const last7Total = last7.reduce((sum, r) => sum + Number(r.amount), 0).toFixed(2);

    stats.innerHTML = `
      <div><strong>Total Records</strong><br>${total}</div>
      <div><strong>Total Amount</strong><br>$${sum}</div>
      <div><strong>Top Category</strong><br>${topCategory}</div>
      <div><strong>Last 7 Days</strong><br>$${last7Total}</div>
    `;

    // Category breakdown
    const categorySums = {};
    last7.forEach(r => {
      categorySums[r.category] = (categorySums[r.category] || 0) + Number(r.amount);
    });

    categoryList.innerHTML = '<h4>Last 7 Days by Category</h4>';
    Object.entries(categorySums).forEach(([cat, amt]) => {
      const li = document.createElement('li');
      li.textContent = `${cat}: $${amt.toFixed(2)}`;
      categoryList.appendChild(li);
    });
  }

  function renderRecords(records) {
    resultsContainer.innerHTML = '';
    if (records.length === 0) {
      resultsContainer.textContent = 'No records found.';
      return;
    }

    records.forEach(r => {
      const card = document.createElement('div');
      card.className = 'record-card';
      card.innerHTML = `
        <p><strong>${r.description}</strong></p>
        <p>Amount: $${r.amount}</p>
        <p>Category: ${r.category}</p>
        <p>Date: ${r.date}</p>
        <button data-id="${r.id}">Delete</button>
      `;
      resultsContainer.appendChild(card);
    });

    resultsContainer.querySelectorAll('button[data-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        deleteRecord(id);
        updateDashboard();
      });
    });
  }

  function updateDashboard() {
    const records = getRecords();
    renderStats(records);
    renderRecords(records);
  }

  searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim().toLowerCase();
    const filtered = getRecords().filter(r =>
      r.description.toLowerCase().includes(query)
    );
    renderRecords(filtered);
  });

  updateDashboard();
});


