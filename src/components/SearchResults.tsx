import {useContext, useState} from "react";
import {MapContext, PlacesContext} from "../context";
import LoadingPlaces from "./LoadingPlaces";
import {Feature} from "../interfaces/places";

export const SearchResults = () => {

    const { isLoadingPlaces, places, userLocation  } = useContext( PlacesContext )
    const [activeId, setActiveId] = useState('')
    const { map, getRouteBetweenPoints } = useContext( MapContext )

    const onClick = ( place: Feature ) => {
        setActiveId( place.id )
        const [lng, lat] = place.center
        map?.flyTo({
            zoom: 14,
            center: [lng, lat]
        })
    }

    const getRoute = ( place: Feature ) => {
        const [lng, lat ] = place.center
        if( !userLocation ) return
        getRouteBetweenPoints( userLocation , [lng, lat])
    }
    if ( isLoadingPlaces ) {

        return <LoadingPlaces />
    }

    if ( places.length === 0 ) {

        return  <></>
    }
    return (
        <ul className="list-group mt-3">

            {
                places.map( place => (
                    <li
                        key={ place.id }
                        onClick={ () => onClick( place ) }
                        className={`list-group-item list-group-item-action pointer ${ (activeId === place.id ) ? 'active' : ''}`}
                    >
                        <h6>{ place.text_es }</h6>
                        <p
                            className="text-muted"
                            style={{
                                fontSize: '12px'
                            }}
                        >
                            { place.place_name }
                        </p>
                        <button
                            onClick={() => getRoute( place )}
                            className={`btn btn-sm ${ (activeId === place.id) ? 'bnt-outline-light' : 'btn-outline-primary' }`}>
                            Direcciones
                        </button>
                    </li>
                ))
            }

        </ul>
    )
}
export default SearchResults