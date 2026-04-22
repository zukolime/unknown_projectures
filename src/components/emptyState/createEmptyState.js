export const createEmptyState = (text = 'Ничего не найдено') => {
  const el = document.createElement('div');
  el.className = 'projects-empty';
  el.textContent = text;

  return el;
};
