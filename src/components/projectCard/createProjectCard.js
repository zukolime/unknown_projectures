import { renderBadges } from '@/components/projectCard/renderBadges';
import { renderDescription } from '@/components/projectCard/renderDescription';

export const createProjectCard = (project, index) => {
  const article = document.createElement('article');
  article.className = 'project-card';
  article.tabIndex = 0;

  article.innerHTML = `
  <a href="${project.links.link_demo}" target="_blank" rel="noopener noreferrer" class="project-card__link" title="Открыть проект ${project.title} в новой вкладке">
    <div class="project-card__device">
      <div class="project-card__screen">
        <img
          src="${project.img.src}"
          alt="${project.img.alt}"
          loading="${index < 2 ? 'eager' : 'lazy'}"
          decoding="async"
          class="project-card__screen-image"
          width="420"
          height="420"
        />
      </div>

      <aside class="project-card__panel">
        <div class="project-card__controls">
        ${'<span class="project-card__control"></span>'.repeat(3)}             
        </div>

        <div class="project-card__speaker">
        ${'<span class="project-card__speaker-line"></span>'.repeat(5)}         
        </div>
      </aside>
    </div>

    <div class="project-card__info">
      <div class="project-card__badges">
      ${renderBadges(project.badges)}      
      </div>
      <h3 class="project-card__title">${project.title}</h3>
      <ul class="project-card__description">
        ${renderDescription(project.description)}
      </ul>
    </div>
  </a>
  `;

  return article;
};
