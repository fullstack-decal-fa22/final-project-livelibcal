import { Box, Button, Heading,Checkbox } from "@chakra-ui/react";
import SliderMarkExample from "./Slider";
import location from "./location";
import { useState, useEffect } from "react";
import onToggle from './Slide'


const Form = (props) => {
const [lat, setLat] = useState(null);
const [lng, setLng] = useState(null);
const [status, setStatus] = useState(null);
const [loud, setLoud] = useState(100);
const [distance, setDistance] = useState(100)
const [busy, setBusy] = useState(100);
const [open, setOpen] = useState(true);
console.log(props.data)
useEffect(()=>{
    updateSearchParameters(
        props.data.open, 
        props.data.busy, 
        props.data.distance, 
        props.data.loud)
    getLocation()
    // do stuff here...
}, [])
//if(props.isLoggedIn){
    
//}

function updateSearchParameters(o, b, d, l){
    setOpen(o);
    setBusy(b);
    setDistance(d);
    setLoud(l);
}

    const applyAndClose = () =>{
        props.apply(open,busy,distance,loud,lat,lng)
        if (typeof props.func === 'function') {
            props.func()
        }
         
    }
    const getLocation = () => {
        if(!navigator.geolocation){setStatus("not supported")} else{
            setStatus("locating");

        
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
        }, () => {setStatus('unable to get location');});}};

    return(
       <Box marginLeft="2%" minW="400" backgroundColor={'blue.100'} padding="50px" borderRadius={"5px"} display="flex" flexDirection="column"
       alignContent="space-between" alignItems="stretch" gap="20px">
        <Button onClick={getLocation}>Get Location</Button>
        <p>{status}</p>
        {lat && <p>Latitude: {lat}</p>}
        {lng && <p>Longitude: {lng}</p>}
        <Checkbox defaultChecked onChange={(e) => setOpen(e.target.checked)}>Open</Checkbox>
<Box>Loudness <SliderMarkExample returnValue={setLoud} begin="Silent" middle="Lively" end="Loud"></SliderMarkExample>
</Box>
<Box>Distance <SliderMarkExample returnValue={setDistance} begin="Close" middle="Walkable" end="Bikable"></SliderMarkExample>
</Box>
<Box>Busyness <SliderMarkExample returnValue={setBusy} begin="Empty" middle="Average" end="Full"></SliderMarkExample>
</Box>
<Button onClick={applyAndClose}>Apply Filters</Button>

        </Box> 
    )
}

export default Form;