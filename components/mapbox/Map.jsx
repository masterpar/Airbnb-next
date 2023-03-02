import {useState} from "react";
import ReactMapGl from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';

function Map({ searchResults }) {

    //tarnsform the search object in the
    // { latitude: 51.5103, longitude: 7.49347 },

    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat
    }))

    // The latitude and longitude of the center of locations coordinates
    const center = getCenter(coordinates)

    const [viewPort, setViewPort] = useState({
        width: '100%',
        height: '50%',
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 10
    });


    return (
        <ReactMapGl
        mapStyle="mapbox://styles/masterpar/clen5fuql002f01thxkh6pzlq"
        mapboxAccessToken={process.env.mapbox_key}
        { ...viewPort}
        onMove={evt => setViewPort(evt.viewPort)}
        >


        </ReactMapGl>
    )
}

export default Map;
