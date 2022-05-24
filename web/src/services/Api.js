//componente que contiene el fetch
const dataApi = (data) => {
  return fetch('https://project-module-4-team-6.herokuapp.com/card', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => data);
};

export default dataApi;
