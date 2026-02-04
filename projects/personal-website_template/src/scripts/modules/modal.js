export const modal = () => {
  const items = document.querySelectorAll(".feedback__item");
  const modal = document.querySelector(".feedback__modal");
  const closeBtn = document.querySelector(".feedback__modal-close");

  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const link = item.querySelector(".feedback__link");
      const imageUrl = link.getAttribute("href");
      openModal(imageUrl);
    });
  });

  const openModal = (imageUrl) => {
    modal.classList.add("show");
    modal.style.cssText = `     
    background: rgba(0, 0, 0, 0.9) url(${imageUrl}) no-repeat center / contain;                     
  `;
    document.documentElement.style.overflow = "hidden";
  };

  const closeModal = () => {
    modal.classList.remove("show");
    document.documentElement.style.overflow = "";
  };

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  closeBtn.addEventListener("click", () => {
    if (modal.classList.contains("show")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });
};
