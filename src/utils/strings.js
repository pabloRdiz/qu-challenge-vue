export const splitText = (texto) => {
  const results = texto.split(",").map((item) => item.trim());
  return results;
};
