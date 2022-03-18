import axios from "axios";

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        country: 'ec',
        language: 'es',
        access_token: 'pk.eyJ1IjoibXNydWFsZXMiLCJhIjoiY2t6YWZ1em02MWNrNzJucHE5d2JuMTJ5cSJ9.rDK2AIwJ2j_iwkUzT2njaA',
        limit: 5
    }
})

export default searchApi