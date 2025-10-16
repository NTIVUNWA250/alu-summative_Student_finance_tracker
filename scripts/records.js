import { getRecords, deleteRecord } from './state.js';

const table = document.querySelector('#recordsTable tbody');
const searchInput = document.getElementById('search');

/**
 * Renders the records table
 * @param {Array} records - Array of transaction objects
 */
export function renderRecords(records) {
  table.innerHTML = '';
  records.forEach(r => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${r.description}</td>
      <td>${r.amount}</td>
      <td>${r.category}</td>
      <td>${r.date}</td>
      <td>
        <button onclick="location.href='form.html?id=${r.id}'">Edit</button>
        <button data-id="${r.id}" class="delete-btn">Delete</button>
      </td>
    `;
    table.appendChild(row);
  });

  table.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      removeRecord(id);
    });
  });
}

/**
 * Removes a record by ID and re-renders the table
 * @param {string} id - Record ID to delete
 */
export function removeRecord(id) {
  deleteRecord(id);
  renderRecords(getRecords());
}

/**
 * Initializes the records page
 */
export function initRecordsPage() {
  renderRecords(getRecords());

  searchInput.addEventListener('input', () => {
    try {
      const re = new RegExp(searchInput.value, 'i');
      const filtered = getRecords().filter(r =>
        re.test(r.description) || re.test(r.category)
      );
      renderRecords(filtered);
    } catch {
      renderRecords(getRecords());
    }
  });
}

initRecordsPage(); // Run on page load


