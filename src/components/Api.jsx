import { obtenerSession } from '../sesion';
const axios = require("axios");
axios.defaults.baseURL = "http://localhost:8080/";


function __getToken(){
    const token = obtenerSession().data.token;

  return{
      headers : { Authorization: `Bearer ${token}` }
  };

}

async function login(username, pass) {
 const body = {
    nombreUsuario : username,
    password : pass
  }

  const usuario = await axios.post("auth/login", body);
  return usuario;
}

async function crearColaborador(colaborador) {

  const body  = {
    nombre: colaborador.nombre,
    nombreUsuario : colaborador.nombreUsuario,
    email : colaborador.email,
    password : colaborador.password,
    roles: []
}
  const res = await axios.post("auth/colaborador", body, __getToken() );

  return res;
 }

async function getLibros(titulo) {
  const { data: libros } = await axios.get("api/libro?titulo=" + titulo, __getToken());
  return libros;
}

async function getHojaDeRuta(idLibro) {
  const { data: hojaDeRuta } = await axios.get("api/hojaderuta/libro/" + idLibro, __getToken());
  return hojaDeRuta;
}

async function getHojaDeRutaPorTituloDelLibro(tituloLibro) {
  const { data: hojaDeRuta } = await axios.get("api/hojaderuta/libro?titulo=" + tituloLibro, __getToken());
  return hojaDeRuta;
}

async function crearCliente(cliente) {
  const body = cliente;
  const res = await axios.post("api/cliente", body, __getToken());
  return res.data;
}

async function crearLibro(libro) {
  const body = libro;
  const res = await axios.post("api/libro", body, __getToken());
  return res.data;
}

async function crearHojaDeRuta(destinatario, solicitante, libro) {
  const body = {
    destinatario_id: destinatario,
    solicitante_id: solicitante,
    libro_id: libro,
  };
  const res = await axios.post("api/hojaderuta", body, __getToken());
  return res.data;
}

async function getClientePorDNI(dni) {
  const { data: clientes } = await axios.get("api/cliente?dni=" + dni, __getToken());
  return clientes;
}

async function getDashboard() {

  const { data: dashboard } = await axios.get("api/dashboard", __getToken());
  return dashboard;
}

async function agregarIteracionParaHojaDeRuta(idHojaDeRuta, iteracion) {
  const res = await axios.put(
    "api/hojaderuta/historial/" + idHojaDeRuta,
    iteracion,
    __getToken()
  );
  return res;
}

async function getAllLibros() {
  const { data: libros } = await axios.get(
    "api/libros",
    __getToken()
  );
  return libros;
}

async function editarLibro(lib, elemento, valor){
  const body ={
    ...lib,
    [elemento] : valor,
  }
  const { data: libro } = await axios.put("api/libro/" + lib.id, body, __getToken())
  return libro
}

async function tareasPendientesPara(nombreUsuario){

  const { data: tareas } = await axios.get("/api/hojaderuta/historial/colaborador?usuario=" + nombreUsuario, __getToken())
  return tareas
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
  getHojaDeRutaPorTituloDelLibro,
  crearColaborador,
  getAllLibros,
  editarLibro,
  tareasPendientesPara
};
