import { loadData } from '@/data/api';
import { initTypingAnimation } from '@/features/headerAnimation/initTypingAnimation';
import { initProjectsFilter } from '@/features/tags/initProjectsFilter';
import { renderTags } from '@/features/tags/renderTags';

import './styles/main.scss';

loadData().then((data) => {
  renderTags(data.map((d) => d.badges));
  initProjectsFilter(data);
});

initTypingAnimation();
