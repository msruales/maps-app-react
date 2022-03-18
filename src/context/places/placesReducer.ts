import {PlacesState} from "./PlacesProvider";
import {Feature} from "../../interfaces/places";

type PlacesAction =
    | { type: 'setUserLocation', payload: [number, number ] }
    | { type: 'setPlaces', payload: Feature[] }
    | { type: 'isLoadingPlaces' }

export const placesReducer = (state : PlacesState, action: PlacesAction ) : PlacesState => {

    switch (action.type){
        case 'setUserLocation':
            return {
                ...state,
                isLoading: false,
                userLocation: action.payload
            }
        case 'isLoadingPlaces':
            return {
                ...state,
                isLoadingPlaces: true,
                places: []
            }

        case 'setPlaces':
            return {
                ...state,
                isLoadingPlaces: false,
                places: action.payload
            }

        default:
            return state
    }

}