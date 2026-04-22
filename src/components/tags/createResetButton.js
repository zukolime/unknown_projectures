export const createResetButton = () => {
  const resetBtn = document.createElement('button');
  resetBtn.className = 'tag-filter reset-filter';
  resetBtn.textContent = '✕ Сброс';
  resetBtn.type = 'button';
  resetBtn.tabIndex = 0;

  return resetBtn;
};
