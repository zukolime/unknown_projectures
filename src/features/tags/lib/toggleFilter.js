export const toggleFilter = (set, value) => {
  if (set.has(value)) {
    set.delete(value);
  } else {
    set.add(value);
  }
};
