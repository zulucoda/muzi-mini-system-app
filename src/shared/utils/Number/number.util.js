export const isNumber = str => {
  if (str) {
    const num = Number.parseInt(str);
    return Number.isInteger(num);
  }
  return false;
};
