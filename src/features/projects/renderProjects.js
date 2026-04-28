import { createProjectCard } from '@/components/projectCard/createProjectCard';
import { createInfoMessage } from '@/components/ui/createInfoMessage';

export const renderProjects = (projects) => {
  const container = document.querySelector('.projects');

  if (!container) return;

  container.innerHTML = '';

  if (projects.length === 0) {
    container.append(createInfoMessage('Ничего не найдено'));
    return;
  }

  projects.forEach((project, index) => {
    const projectCard = createProjectCard(project, index);

    setTimeout(() => {
      projectCard.classList.add('show');
    }, 100 * index);

    container.append(projectCard);
  });
};
