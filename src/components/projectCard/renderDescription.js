export const renderDescription = (items) => {
  return items.map((item) => `<li>${item}</li>`).join('');
};
