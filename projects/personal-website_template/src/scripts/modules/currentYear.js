export const currentYear = () => {
  const currentYear = document.querySelector('#current-year');
  if (!currentYear) return;

  currentYear.textContent = new Date().getFullYear();
};
