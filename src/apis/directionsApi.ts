import axios from "axios";

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        language: 'es',
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoibXNydWFsZXMiLCJhIjoiY2t6YWZ1em02MWNrNzJucHE5d2JuMTJ5cSJ9.rDK2AIwJ2j_iwkUzT2njaA',
    }
})

export default directionsApi