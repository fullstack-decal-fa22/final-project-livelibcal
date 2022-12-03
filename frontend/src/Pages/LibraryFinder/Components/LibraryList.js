import React, { useState,useEffect } from "react";
import LibraryBlock from "./LibraryBlock";
import {Button, Box, Stack, Show, HStack, Flex, Hide, Spacer} from '@chakra-ui/react';
import axios from "axios";
import SlideEx from "./Slide";
import Form from "./Form";


const LibaryList = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!
    const [list, setList] = useState([]);
    const [loud, setLoud] = useState(50);
    const [open, setOpen] = useState(true);
    const [distance, setDistance] = useState(50)
    const [busy, setBusy] = useState(50);
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [data, setData] = useState([]);

    useEffect(()=>{
        confirm();
        console.log(data)
    }, [data])

    useEffect(()=>{
        getListHelper()
    }, [])


    const update = (props) => {
        setList(posts => [props, ...posts]);
        console.log(data)
    }

    var posts = Array.isArray(list) && (list.length !== 0)  && list.map((i) => <LibraryBlock key={i} name={i}></LibraryBlock>);

     function getList(open, busy, distance, loud, lat, lng) {
        if(lat === null || lng === null) {
            distance = 100;
        }        
        // async function generateBlocks(){
        //     console.log(data)
        // for (const library of data) {
            
        //     update(library); 
        //     console.log(library)
        //  }}
        console.log("send api request with")
        console.log("isopen: "+ open  +" busy: "+busy +  "distance: " + distance + "loud: " + loud + "location: " + lat +", " +  lng+". ")
        console.log((loud < 50)? 1 : 0  )
        axios.get("http://localhost:3000/library/prefer",{params: {isOpen:open ? 1 : 0, isBusy:busy, isNear:distance, isQuiet:loud, latitude:lat, longitude:lng}})
        .then((data) => setData(data.data)).catch((error) => console.log(error));
    }
    //     setList([]);
    //     //sample data
    //     const libraries = ["moffit", "kresge", "mainstack", "business"]
    function confirm(){
        setList([])
        console.log(data)
        if (data === []){
            return
        } else{
        var copy = data.map((x) => x);
        copy.reverse();
        for(const library of copy) {
            update(library)
        }
    }
    }

    // }

    const getListHelper = () => {
        getList(open, busy, distance, loud, lat, lng)
    }
    async function updateSearchParameters(o, b, d, l, lat, lng){
        await setOpen(o);
        await setBusy(b);
        await setDistance(d);
        await setLoud(l);
        await setLat(lat);
        await setLng(lng);
        getList(o,b,d,l,lat,lng);
    }

    

   return (           <div> <Show below="1000px">
            <SlideEx data={{open:open, busy:busy, distance:distance, loud:loud}} apply={updateSearchParameters}></SlideEx>
            </Show>
        <Flex margin="10">
            <Show above='1000px'> 
            <Form data={{open:open, busy:busy, distance:distance, loud:loud}} minW="3000"  apply={updateSearchParameters}></Form>
            </Show>
           

             <Stack marginLeft="50px" width="100%" marginRight="200px" backgroundColor={'gray.100'} borderRadius="10px">
             {/* <Button variant='solid' colorScheme='blue' onClick={getListHelper}>Get Libaries</Button> */}
             {posts}</Stack>
        </Flex>
</div>
    );
}

export default LibaryList;