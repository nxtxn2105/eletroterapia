document.querySelectorAll('details').forEach((detail) => {
  const plus = detail.querySelector('.plus');
  if (!plus) return;
  detail.addEventListener('toggle', () => {
    plus.textContent = detail.open ? '−' : '+';
  });
});

