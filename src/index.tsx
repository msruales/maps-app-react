/* eslint import/no-webpack-loader-syntax: off */
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import MapsApp from "./MapsApp";

// @ts-ignore
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibXNydWFsZXMiLCJhIjoiY2t6YWZ1em02MWNrNzJucHE5d2JuMTJ5cSJ9.rDK2AIwJ2j_iwkUzT2njaA';

if ( !navigator.geolocation ) {
    alert('Tu navegador no tiene opcion de Geolocation');
    throw new Error('Tu navegador no tiene opcion de Geolocation')
}

ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById('root')
);