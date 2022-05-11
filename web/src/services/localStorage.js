const get = (key, defaultValue) => {
  const localStorageData = localStorage.getItem(key);
  if (localStorageData === null) {
    return defaultValue;
  } else {
    return JSON.parse(localStorageData);
  }
};

// Función que guarda una propiedad y su valor en el local storage
const set = (key, value) => {
  const localStorageData = JSON.stringify(value);
  localStorage.setItem(key, localStorageData);
};

// Función que limpia todo el local storage
const clear = () => {
  localStorage.clear();
};

const objectToExport = {
  get: get,
  set: set,
  clear: clear,
};

// Exportamos el objeto para que pueda ser usado desde App
export default objectToExport;
