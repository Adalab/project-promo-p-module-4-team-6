//componente que contiene el fetch
function dataApi(data) {
  return fetch('https://awesome-profile-cards.herokuapp.com/card/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json());
}

export default dataApi;
