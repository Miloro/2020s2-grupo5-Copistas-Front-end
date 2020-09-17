const axios = require('axios');

axios.defaults.baseURL = 'http://localhost:8080/api';

async function getLibros(titulo) {
    const { data: libros } = await axios.get('/libro?titulo=' + titulo);
    return libros;
}

async function getHojaDeRuta(idLibro) {
    const { data: hojaDeRuta } = await axios.get('/hojaderuta/libro/' + idLibro);
    return hojaDeRuta;
}

async function crearCliente(cliente) {
    const body = cliente;
    const res = await axios.post('/cliente', body);
    return res.data;
}

async function crearLibro(libro) {
    const body = libro;
    const res = await axios.post('/libro', body);
    return res.data;
}

export { getLibros, getHojaDeRuta, crearCliente, crearLibro }