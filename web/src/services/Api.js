//componente que contiene el fetch
const dataApi = (data) => {
  return fetch("http://localhost:4000/card", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => data);
};

export default dataApi;
