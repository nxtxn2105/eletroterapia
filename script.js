document.querySelectorAll('details').forEach((detail) => {
  const icon = detail.querySelector('summary span');
  if (!icon) return;
  detail.addEventListener('toggle', () => {
    icon.textContent = detail.open ? '−' : '+';
  });
});

