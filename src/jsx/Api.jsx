const axios = require('axios');

axios.defaults.baseURL = 'http://localhost:8080/api';

async function getLibros(titulo) {
    axios.get('/libro?titulo=' + titulo).then(result => {
        console.log(result)
    }).catch(console.log)
}

export { getLibros }