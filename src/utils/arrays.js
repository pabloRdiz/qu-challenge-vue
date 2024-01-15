export const sort = (arr, key) => {
  if (!key) return arr;
  return arr.slice().sort((a, b) => {
    if (a[key] < b[key]) {
      return -1;
    }
    if (a[key] > b[key]) {
      return 1;
    }
    return 0;
  });
};
