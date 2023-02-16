export const GenerateArray = (arr, items) => {
  const gh = [];
  for (let i = 0; i < arr.length; i++) {
    const random = Math.floor(Math.random() * 7);
    gh.push(items[random]);
  }
  return gh;
};
