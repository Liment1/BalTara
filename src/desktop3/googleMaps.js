import React from 'react'
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

const containerStyle = {
    width: '800px',
    height: '400px'
};
const apikey = process.env.REACT_APP_MAPS_API_KEY;
const options = { closeBoxURL: '', enableEventPropagation: true };

const onLoad = marker => {
    console.log('marker: ', marker)
}

function MyComponent({longLat}) {
    console.log(longLat);
    const center = {
        lat: longLat.lat,
        lng: longLat.long
    }

    const position = center;

    return (

        <LoadScript
            googleMapsApiKey= {apikey}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={20}
            >
                <Marker
                    onLoad={onLoad}
                    position={position}
                />
                <></>
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(MyComponent)