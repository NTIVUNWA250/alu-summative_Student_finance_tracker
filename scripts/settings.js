document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('settingsForm');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const settings = {
      base: form.baseCurrency.value,
      rate1: parseFloat(form.conversionRate1.value),
      rate2: parseFloat(form.conversionRate2.value)
    };
    localStorage.setItem('finance:settings', JSON.stringify(settings));
    alert('Settings saved!');
  });

  const saved = JSON.parse(localStorage.getItem('finance:settings') || '{}');
  if (saved.base) form.baseCurrency.value = saved.base;
  if (saved.rate1) form.conversionRate1.value = saved.rate1;
  if (saved.rate2) form.conversionRate2.value = saved.rate2;
});
