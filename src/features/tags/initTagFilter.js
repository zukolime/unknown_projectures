import { renderProjects } from '@/features/projects/renderProjects';
import { resetFilters } from '@/features/tags/lib/resetFilters';
import { toggleFilter } from '@/features/tags/lib/toggleFilter';
import { filterProjects } from '@/features/tags/models/filterProjects';

export const initProjectsFilter = (data) => {
  const container = document.querySelector('.tags-filters');

  if (!container) return;

  const activeFilters = new Set();

  const handleClick = (e) => {
    const btn = e.target.closest('.tag-filter');
    if (!btn) return;

    if (btn.classList.contains('reset-filter')) {
      resetFilters(container, activeFilters);
      renderProjects(data);
      return;
    }

    const value = btn.value;

    toggleFilter(activeFilters, value);
    btn.classList.toggle('active');

    const filtered = filterProjects(data, activeFilters);

    renderProjects(filtered.length ? filtered : data);
  };

  container.addEventListener('click', handleClick);

  renderProjects(data);
};
