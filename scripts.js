const createResetButton = () => {
  const resetBtn = document.createElement('button');
  resetBtn.className = 'tag-filter reset-filter';
  resetBtn.textContent = '✕ Сброс';
  resetBtn.type = 'button';
  resetBtn.tabIndex = 0;

  return resetBtn;
};

const createTag = (text) => {
  const tag = document.createElement('button');
  tag.className = 'tag-filter';
  tag.value = text.toLowerCase();
  tag.type = 'button';
  tag.tabIndex = 0;

  tag.innerHTML = text;

  return tag;
};

const renderTags = (tags) => {
  const container = document.querySelector('.tags-filters');

  if (!container) return;

  container.innerHTML = '';

  const allTags = tags.flat();
  const deletedDuplicates = [...new Set(allTags)];

  const resetBtn = createResetButton();
  container.append(resetBtn);

  deletedDuplicates.forEach((tag) => {
    const tagItem = createTag(tag);
    container.append(tagItem);
  });
};

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
          loading="lazy"
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
      <ul class="project-card__description">
        ${project.description.map((item) => `<li>${item}</li>`).join('')}
      </ul>
      <div class="project-card__links">
        <a
          href="${project.links.link_demo}"
          target="_blank"
          class="project-card__link"
          >[ ДЕМО ]</a
        >
        <a
          href="${project.links.link_github}"
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

  projects.forEach((project, index) => {
    const projectCard = createProjectCard(project);

    setTimeout(() => {
      projectCard.classList.add('show');
    }, 100);

    container.append(projectCard);
  });
};

const filteredByTag = (data) => {
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

loadData()
  .then((data) => {
    filteredByTag(data);
    renderTags(data.map((d) => d.badges));
  })
  .catch((error) => console.log(error));

// header comment
const comments = ['// внимательна к', '// нет, слишком избито', '...', '// а впрочем — вместо тысячи слов, мои проекты ниже ↓'];

const commentElement = document.querySelector('.header__comment');

const CONFIG = {
  typeSpeed: 100,
  deleteSpeed: 25,
  pause: 500,
};

const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isMobile = window.matchMedia('(max-width: 920px)').matches;

const shouldFallback = isReducedMotion || isMobile;

if (shouldFallback) {
  commentElement.textContent = comments.at(-1);
}

const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const type = async () => {
  for (let i = 0; i < comments.length; i++) {
    const current = comments[i];
    for (let j = 0; j <= current.length; j++) {
      commentElement.textContent = current.slice(0, j);
      await delay(CONFIG.typeSpeed);
    }
    await delay(CONFIG.pause);
  }
};

type();

// let currentCommentIndex = 0;
// let currentCharIndex = 0;

// const typeNextChar = () => {
//   if (currentCommentIndex >= comments.length) return;

//   const currentComment = comments[currentCommentIndex];

//   if (currentCharIndex < currentComment.length) {
//     commentElement.textContent += currentComment[currentCharIndex];
//     currentCharIndex++;
//     setTimeout(typeNextChar, 100);
//   } else {
//     const setTimeoutId = setTimeout(() => {
//       deleteNextChar();
//     }, 500);

//     if (comments.length - 1 === currentCommentIndex) clearTimeout(setTimeoutId);
//   }
// };

// const deleteNextChar = () => {
//   if (commentElement.textContent.length > 0) {
//     commentElement.textContent = commentElement.textContent.slice(0, -1);
//     setTimeout(deleteNextChar, 25);
//   } else {
//     currentCommentIndex++;
//     currentCharIndex = 0;

//     if (currentCommentIndex < comments.length) {
//       setTimeout(typeNextChar, 500);
//     }
//   }
// };

// typeNextChar();
