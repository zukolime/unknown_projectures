export const addSliderButtons = (buttonsBox, container, clickFunc) => {
  if (buttonsBox) {
    buttonsBox.remove();
  }

  buttonsBox = document.createElement('div');
  buttonsBox.classList.add('buttons-slider');
  buttonsBox.innerHTML = `<button class="button button-left">
                            <svg
                              class="arrow"
                              transform="rotate(180)"
                            >
                              <use
                                href="../../src/assets/img/icons/sprite.svg#arrow-slider"
                              ></use>
                            </svg>
                          </button>
                          <button class="button button-right">
                            <svg class="arrow">
                              <use
                                href="../../src/assets/img/icons/sprite.svg#arrow-slider"
                              ></use>
                            </svg>
                        </button>`;

  container.after(buttonsBox);

  buttonsBox.addEventListener('click', clickFunc);

  return buttonsBox;
};

export const removeSliderButtons = (buttonsBox, clickFunc) => {
  if (buttonsBox) {
    buttonsBox.remove();
    buttonsBox.removeEventListener('click', clickFunc);
  }
};
