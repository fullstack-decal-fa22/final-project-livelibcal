import React from 'react'
import { useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';


const containerStyle = {
  width: '400px',
  height: '400px'
};



function CustomGoogleMap(props) {
  const [lat, setLat] = useState(0);
const [lng, setLng] = useState(0);
const [status, setStatus] = useState("");
  const containerStyle = {
    width: props.w,
    height: props.h
  };
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyA9e-dLium79ojWmjgNhhCn5BoUByN7o9k"
  })
  const center = {
    lat: props.lat,
    lng: props.long
  };
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    //map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const getLocation = () => {
    if(!navigator.geolocation){setStatus("not supported")} else{
        setStatus("locating");

    
    navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
    }, () => {setStatus('unable to get location');});}};

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        onLoad={getLocation}
        onUnmount={onUnmount}
      >
        <Marker position={center}/>
        <Marker label="you" position={{lat:lat,lng:lng}}/>
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(CustomGoogleMap)