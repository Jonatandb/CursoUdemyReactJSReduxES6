export const apiGet = (url) => () =>
  fetch(url).then((response) => response.json());
