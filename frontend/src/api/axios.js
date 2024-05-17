import axios from "axios";

// Crear una instancia de Axios con interceptores
const customAxios = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});

// Agregar un interceptor para modificar las solicitudes salientes
customAxios.interceptors.request.use(
  function (config) {
    // Obtener el token CSRF de la cookie
    const csrfToken = getCookie("XSRF-TOKEN=");

    // Modificar los headers de la solicitud para incluir el token CSRF
    if (csrfToken) {
      config.headers["X-XSRF-TOKEN"] = decodeURIComponent(csrfToken);
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Función para obtener el valor de una cookie por nombre
function getCookie(name) {
  const value = document.cookie;
  const parts = value.split(name);
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
}

export default customAxios;
