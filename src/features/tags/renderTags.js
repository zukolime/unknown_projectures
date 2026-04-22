import { createResetButton } from '@/components/tags/createResetButton';
import { createTag } from '@/components/tags/createTag';

export const renderTags = (tags) => {
  const container = document.querySelector('.tags-filters');

  if (!container) return;

  container.innerHTML = '';

  const allTags = tags.flat();
  const deletedDuplicates = [...new Set(allTags)];

  const resetBtn = createResetButton();
  container.append(resetBtn);

  deletedDuplicates.forEach((tag) => {
    const tagItem = createTag(tag);
    container.append(tagItem);
  });
};
