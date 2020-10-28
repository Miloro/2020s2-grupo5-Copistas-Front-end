const axios = require("axios");

axios.defaults.baseURL = "http://localhost:8080/";

async function login(username, pass) {
 const body = {
    nombreUsuario : username,
    password : pass
  }

  const usuario = await axios.post("auth/login", body);
  return usuario;
}

async function getLibros(titulo) {
  const { data: libros } = await axios.get("api/libro?titulo=" + titulo);
  return libros;
}

async function getHojaDeRuta(idLibro) {
  const { data: hojaDeRuta } = await axios.get("api/hojaderuta/libro/" + idLibro);
  return hojaDeRuta;
}

async function crearCliente(cliente) {
  const body = cliente;
  const res = await axios.post("api/cliente", body);
  return res.data;
}

async function crearLibro(libro) {
  const body = libro;
  const res = await axios.post("api/libro", body);
  return res.data;
}

async function crearHojaDeRuta(destinatario, solicitante, libro) {
  const body = {
    destinatario_id: destinatario,
    solicitante_id: solicitante,
    libro_id: libro,
  };
  const res = await axios.post("api/hojaderuta", body);
  return res.data;
}

async function getClientePorDNI(dni) {
  const { data: clientes } = await axios.get("api/cliente?dni=" + dni);
  return clientes;
}

async function getDashboard() {
  const { data: dashboard } = await axios.get("api/dashboard");
  return dashboard;
}

async function agregarIteracionParaHojaDeRuta(idHojaDeRuta, iteracion) {
  const res = await axios.put(
    "api/hojaderuta/historial/" + idHojaDeRuta,
    iteracion
  );
  return res;
}

export {
  getLibros,
  getHojaDeRuta,
  crearCliente,
  crearLibro,
  crearHojaDeRuta,
  getClientePorDNI,
  getDashboard,
  agregarIteracionParaHojaDeRuta,
  login,
};
