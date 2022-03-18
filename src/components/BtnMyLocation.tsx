import {useContext} from "react";
import {MapContext, PlacesContext} from "../context";


export const BtnMyLocation = () => {

    const { map, isMapReady } = useContext( MapContext )
    const { userLocation } = useContext( PlacesContext )

    const onClick = () => {

        if( !userLocation ) throw Error('La ubicacion del usuario no existe')
        if( !isMapReady ) throw Error('El mapa no esta cargado')

        map?.flyTo( {
            zoom: 14,
            center: userLocation
        } )
    }

    return (
        <button

        className="btn btn-primary"
        style={{
            position: "fixed",
            top: '20px',
            right: '20px',
            zIndex: 999
        }}
        onClick={ onClick }
        >
            My location
        </button>
    )

}

