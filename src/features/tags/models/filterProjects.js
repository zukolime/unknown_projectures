export const filterProjects = (projects, activeFilters) => {
  if (activeFilters.size === 0) return projects;

  return projects.filter((project) => project.badges.some((badge) => activeFilters.has(badge.toLowerCase())));
};
