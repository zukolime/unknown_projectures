export const createInfoMessage = (text) => {
  const el = document.createElement('span');
  el.className = 'projects-text';
  el.textContent = text;

  return el;
};
