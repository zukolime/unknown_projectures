import { delay } from '@/utils/delay';

const comments = ['// внимательна к', 'нет, слишком избито', '...', '// а впрочем — вместо тысячи слов, мои проекты ниже ↓'];
const commentElement = document.querySelector('.header__comment');

const lastComment = comments.at(-1);

const CONFIG = {
  typeSpeed: 100,
  deleteSpeed: 25,
  pause: 500,
};

let isStopped = false;

const isMobile = window.matchMedia('(max-width: 920px)');
const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const type = async (current) => {
  for (let j = 0; j <= current.length; j++) {
    if (isStopped) return;
    commentElement.textContent = current.slice(0, j);
    await delay(CONFIG.typeSpeed);
  }
};

const remove = async (current) => {
  for (let j = current.length; j >= 0; j--) {
    if (isStopped) return;
    commentElement.textContent = current.slice(0, j);
    await delay(CONFIG.deleteSpeed);
  }
};

const runTypingAnimation = async () => {
  for (let i = 0; i < comments.length; i++) {
    const currentComment = comments[i];

    await delay(CONFIG.pause);

    await type(currentComment);
    if (isStopped) return;
    await delay(CONFIG.pause);

    if (currentComment === lastComment) return;

    await remove(currentComment);
    if (isStopped) return;
    await delay(CONFIG.pause);
  }
};

const updateMode = () => {
  const shouldFallback = isMobile.matches || isReducedMotion.matches;

  isStopped = true;

  if (shouldFallback) {
    commentElement.textContent = lastComment;
    return;
  }

  isStopped = false;
  runTypingAnimation();
};

isMobile.addEventListener('change', updateMode);
isReducedMotion.addEventListener('change', updateMode);

updateMode();
