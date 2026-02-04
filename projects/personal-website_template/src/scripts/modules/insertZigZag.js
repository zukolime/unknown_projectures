const createZigZag = (container) => {
  const template = document.getElementById("zigzag-template");
  const zigzag = template.content.cloneNode(true);
  container.after(zigzag);
};

export const insertZigZag = () => {
  const sections = document.querySelectorAll("section");

  for (let i = 0; i < sections.length - 1; i++) {
    createZigZag(sections[i]);
  }
};
