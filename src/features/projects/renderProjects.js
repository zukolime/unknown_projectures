import { createProjectCard } from '@/components/projectCard';

export const renderProjects = (projects) => {
  const container = document.querySelector('.projects');

  if (!container) return;

  container.innerHTML = '';

  projects.forEach((project) => {
    const projectCard = createProjectCard(project);

    setTimeout(() => {
      projectCard.classList.add('show');
    }, 100);

    container.append(projectCard);
  });
};
