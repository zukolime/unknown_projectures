export const renderLinks = (links) => {
  return `
    <a href="${links.link_demo}" target="_blank" noopener noreferrer class="project-card__link">[ ДЕМО ]</a>
    <a href="${links.link_github}" target="_blank" noopener noreferrer class="project-card__link">[ ГИТХАБ ]</a>
  `;
};
