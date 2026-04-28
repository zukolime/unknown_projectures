export const createInfoMessage = (text, classNames) => {
  const el = document.createElement('span');
  el.className = `projects-text ${classNames}`;
  el.textContent = text;

  return el;
};
