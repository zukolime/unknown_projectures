import { renderProjects } from '@/features/projects/renderProjects';

export const filterByTag = (data) => {
  const container = document.querySelector('.tags-filters');

  let activeFilters = [];
  let visibleData = data;

  container.addEventListener('click', (e) => {
    const filter = e.target.closest('.tag-filter');
    if (!filter) return;

    filter.classList.toggle('active');

    // Сброс всех фильтров и отображение всех проектов
    if (filter.classList.contains('reset-filter')) {
      const allTags = document.querySelectorAll('.tag-filter');
      activeFilters = [];

      allTags.forEach((tag) => tag.classList.remove('active'));
      renderProjects(data);
      return;
    }

    // фильтрация проектов на основе активных тегов
    if (filter.classList.contains('active')) {
      activeFilters = [...activeFilters, filter.value];
      visibleData = data.filter((projects) => projects.badges.some((badge) => activeFilters.includes(badge.toLowerCase())));
    } else {
      activeFilters.splice(activeFilters.indexOf(filter.value), 1);
      visibleData = data.filter((projects) => projects.badges.some((badge) => activeFilters.includes(badge.toLowerCase())));
    }

    return visibleData.length > 0 ? renderProjects(visibleData) : renderProjects(data);
  });

  return renderProjects(visibleData);
};
