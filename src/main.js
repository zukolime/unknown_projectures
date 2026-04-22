import { loadData } from './data/api.js';
import './features/headerAnimation/typingAnimation.js';
import { filterByTag } from './features/tags/filterByTag.js';
import { renderTags } from './features/tags/renderTags.js';

import './styles/main.scss';

loadData().then((data) => {
  renderTags(data.map((d) => d.badges));
  filterByTag(data);
});
