import { loadData } from './data/api';
import { filterByTag } from './features/tags/filterByTag';
import { renderTags } from './features/tags/renderTags';

import { initTypingAnimation } from '@/features/headerAnimation/initTypingAnimation';

import './styles/main.scss';

loadData().then((data) => {
  renderTags(data.map((d) => d.badges));
  filterByTag(data);
});

initTypingAnimation();
