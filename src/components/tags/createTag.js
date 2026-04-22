export const createTag = (text) => {
  const tag = document.createElement('button');
  tag.className = 'tag-filter';
  tag.value = text.toLowerCase();
  tag.type = 'button';
  tag.tabIndex = 0;

  tag.innerHTML = text;

  return tag;
};
