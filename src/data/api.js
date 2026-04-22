export const loadData = async () => {
  try {
    const response = await fetch('/data.json');
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
