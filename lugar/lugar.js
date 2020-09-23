const axios = require('axios');

const getLugarLatLong = async(dir) => {

    const encodedURI = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURI}`,
        headers: { 'x-rapidapi-key': 'd2a17c1f3emsha931bc24b2b43e1p1680c4jsn0e7e6cf24119' }
    });

    const resp = await instance.get();

    if (resp.data.Result.length === 0) {
        throw new Error('No hay resultados');
    }

    const data = resp.data.Result[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    }
}

module.export = {
    getLugarLatLong
}