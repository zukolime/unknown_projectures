const loadData = async () => {
  try {
    const response = await fetch('data.json');
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

const createProjectCard = (project) => {
  const article = document.createElement('article');
  article.className = 'project-card';
  article.tabIndex = 0;

  article.innerHTML = `
    <div class="project-card__device">
      <div class="project-card__screen">
        <img
          src="${project.img.src}"
          alt="${project.img.alt}"
          class="project-card__screen-image"
          width="420"
          height="420"
        />
      </div>

      <aside class="project-card__panel">
        <div class="project-card__controls">
          <span class="project-card__control"></span>
          <span class="project-card__control"></span>
          <span class="project-card__control"></span>
        </div>

        <div class="project-card__speaker">
          <span class="project-card__speaker-line"></span>
          <span class="project-card__speaker-line"></span>
          <span class="project-card__speaker-line"></span>
          <span class="project-card__speaker-line"></span>
          <span class="project-card__speaker-line"></span>
        </div>
      </aside>
    </div>

    <div class="project-card__info">
      <div class="project-card__badges">
      ${project.badges
        .map((badge) => {
          return `<span class="project-card__badge">${badge}</span>`;
        })
        .join('')}      
      </div>
      <h3 class="project-card__title">${project.title}</h3>
      <p class="project-card__description">
        ${project.description}
      </p>
      <div class="project-card__links">
        <a
          href="${project.links[0].link_demo}"
          target="_blank"
          class="project-card__link"
          >[ ДЕМО ]</a
        >
        <a
          href="${project.links[0].link_github}"
          target="_blank"
          class="project-card__link"
          >[ ГИТХАБ ]</a
        >
      </div>
    </div>

  `;

  return article;
};

const renderProjects = (projects) => {
  const container = document.querySelector('.projects');

  if (!container) return;

  container.innerHTML = '';

  projects.forEach((project) => {
    const projectCard = createProjectCard(project);
    container.append(projectCard);
  });
};

loadData()
  .then((data) => {
    renderProjects(data);
  })
  .catch((error) => console.log(error));
