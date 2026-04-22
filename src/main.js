import { initProjectsFilter } from '@/features/tags/initProjectsFilter';
import { loadData } from './data/api';
import { renderTags } from './features/tags/renderTags';

import { initTypingAnimation } from '@/features/headerAnimation/initTypingAnimation';

import './styles/main.scss';

loadData().then((data) => {
  renderTags(data.map((d) => d.badges));
  initProjectsFilter(data);
});

initTypingAnimation();
