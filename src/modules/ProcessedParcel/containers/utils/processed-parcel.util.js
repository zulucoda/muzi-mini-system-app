export const convertToQueryString = itemObject => {
  const result = [];
  for (let key in itemObject) {
    result.push(`${key}=${itemObject[key]}`);
  }
  return result.join('&');
};
