import { CONFIG } from '@/features/headerAnimation/model/config';
import { state } from '@/features/headerAnimation/model/state';
import { delay } from '@/utils/delay';

export const type = async (text, el) => {
  for (let i = 0; i <= text.length; i++) {
    if (state.isStopped) return;

    el.textContent = text.slice(0, i);
    await delay(CONFIG.typeSpeed);
  }
};
