export const switchHeader = () => {
  const header = document.querySelector(".header");
  const scrollThreshold = 50;

  document.addEventListener("scroll", () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add("header--scrolled");
    } else {
      header.classList.remove("header--scrolled");
    }
  });
};
