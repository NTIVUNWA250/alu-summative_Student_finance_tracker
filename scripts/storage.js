const KEY = 'finance:record';

export function load() {
  return JSON.parse(localStorage.getItem(KEY) || '[]');
}

export function save(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}