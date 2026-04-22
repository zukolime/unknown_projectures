import { remove } from '@/features/headerAnimation/lib/remove';
import { type } from '@/features/headerAnimation/lib/type';
import { COMMENTS, lastComment } from '@/features/headerAnimation/model/comments';
import { CONFIG } from '@/features/headerAnimation/model/config';
import { state } from '@/features/headerAnimation/model/state';
import { delay } from '@/utils/delay';

const el = document.querySelector('.header__comment');

const isMobile = window.matchMedia('(max-width: 920px)');
const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const run = async () => {
  for (let i = 0; i < COMMENTS.length; i++) {
    const current = COMMENTS[i];

    await delay(CONFIG.pause);

    await type(current, el);
    if (state.isStopped) return;

    await delay(CONFIG.pause);

    if (current === lastComment) return;

    await remove(current, el);
    if (state.isStopped) return;

    await delay(CONFIG.pause);
  }
};

const updateMode = () => {
  const shouldFallback = isMobile.matches || isReducedMotion.matches;

  state.isStopped = true;

  if (shouldFallback) {
    el.textContent = lastComment;
    return;
  }

  state.isStopped = false;
  run();
};

export const initTypingAnimation = () => {
  isMobile.addEventListener('change', updateMode);
  isReducedMotion.addEventListener('change', updateMode);

  updateMode();
};
