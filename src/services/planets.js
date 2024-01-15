const API = "https://swapi.dev/api/planets/";

export const getPlanets = async (page = 1) => {
  return fetch(`${API}?page=${page}`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return console.error(error);
    });
};
