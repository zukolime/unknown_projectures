export const resetFilters = (container, activeFilters) => {
  activeFilters.clear();

  container.querySelectorAll('.tag-filter').forEach((el) => el.classList.remove('active'));
};
