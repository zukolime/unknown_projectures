export const renderBadges = (badges) => {
  return badges.map((badge) => `<span class="project-card__badge">${badge}</span>`).join('');
};
