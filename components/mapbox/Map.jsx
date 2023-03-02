import {useState} from "react";
import ReactMapGl from 'react-map-gl';

function Map() {

    const [viewPort, setViewPort] = useState({
        width: '100%',
        height: '50%',
        longitude: 100,
        latitude: 40,
        zoom: 5
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
