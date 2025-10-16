import { addRecord, updateRecord, getRecords } from './state.js';

const form = document.querySelector('form');
const categorySelect = document.getElementById('category');
const customInput = document.getElementById('customCategory');

const params = new URLSearchParams(location.search);
const id = params.get('id');
const editing = Boolean(id);

if (editing) {
  const record = getRecords().find(r => r.id === id);
  if (record) {
    form.description.value = record.description;
    form.amount.value = record.amount;
    form.category.value = record.category;
t
    const defaultCategories = ['Food', 'Books', 'Transport', 'Entertainment', 'Fees', 'Other'];
    if (!defaultCategories.includes(record.category)) {
      categorySelect.value = 'Other';
      customInput.value = record.category;
      customInput.style.display = 'block';
    }

    form.date.value = record.date;
  }
}

categorySelect.addEventListener('change', () => {
  customInput.style.display = categorySelect.value === 'Other' ? 'block' : 'none';
});

form.addEventListener('submit', e => {
  e.preventDefault();

  if (categorySelect.value === 'Other' && !customInput.value.trim()) {
    alert('Please enter a custom category.');
    return;
  }

  const category = categorySelect.value === 'Other'
    ? customInput.value.trim()
    : categorySelect.value;

  const record = {
    description: form.description.value.trim(),
    amount: parseFloat(form.amount.value),
    category,
    date: form.date.value,
    id: editing ? id : generateId(),
    updatedAt: new Date().toISOString()
  };

  editing ? updateRecord(id, record) : addRecord(record);
  location.href = 'records.html';
});

function generateId() {
  return 'txn_' + Math.random().toString(36).slice(2, 10);
}

