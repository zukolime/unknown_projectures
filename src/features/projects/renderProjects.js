import { createEmptyState } from '@/components/emptyState/createEmptyState';
import { createProjectCard } from '@/components/projectCard/createProjectCard';

export const renderProjects = (projects) => {
  const container = document.querySelector('.projects');

  if (!container) return;

  if (projects.length === 0) {
    container.append(createEmptyState());
    return;
  }

  container.innerHTML = '';

  projects.forEach((project) => {
    const projectCard = createProjectCard(project);

    setTimeout(() => {
      projectCard.classList.add('show');
    }, 100);

    container.append(projectCard);
  });
};
