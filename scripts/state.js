import { load, save } from './storage.js';

let records = load();

export function getRecords() {
  return records;
}

export function addRecord(record) {
  records.push(record);
  save(records);
}

export function updateRecord(id, updated) {
  records = records.map(r => r.id === id ? { ...r, ...updated, updatedAt: new Date().toISOString() } : r);
  save(records);
}

export function deleteRecord(id) {
  records = records.filter(r => r.id !== id);
  save(records);
}
