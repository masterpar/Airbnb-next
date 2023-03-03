import {useState} from "react";
import ReactMapGl, { Marker, Popup} from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';
import { MapPinIcon } from '@heroicons/react/24/solid'

function Map({ searchResults }) {

    //tarnsform the search object in the
    // { latitude: 51.5103, longitude: 7.49347 },

    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat
    }))

    const [selectedLocation, setSelectedLocation] = useState({});

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
            { searchResults.map((result) => (
                <div key={result.long}>
                    { console.log(result) }
                        <Marker
                            longitude={result.long}
                            latitude={result.lat}
                            anchor="bottom"
                            style={{ position: 'relative'}}

                        >
                            <MapPinIcon
                                onClick={() => setSelectedLocation(result)}
                                className="h-6 w-6 text-blue-400 absolute cursor-pointer
                                            animate-bounce"
                                aria-label="push-pin"
                            />
                        </Marker>

                {/*    The popup that should show if we click on Marker*/}
                    { selectedLocation.long === result.long ? (
                        <Popup
                            onClose={() => setSelectedLocation({})}
                            closeOnClick={true}
                            latitude={result.lat}
                            longitude={result.long}
                        >
                            { result.title}
                        </Popup>
                    ):
                        false
                    }
                </div>
            ))}

        </ReactMapGl>
    )
}

export default Map;
