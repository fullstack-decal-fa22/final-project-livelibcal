import React, { Component, useState, useEffect } from "react";
import { useParams,  } from "react-router-dom";
import NavBar from './Components/NavBar.tsx';
import dummyLibraryList from './dummyLibraryList';
import CustomGoogleMap from './GoogleMap.tsx';
import { Rating } from "react-simple-star-rating";
import {
    Box,
    chakra,
    Spacer,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Divider,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    DrawerOverlay,
    CircularProgress,
    CircularProgressLabel,
    HStack,
  } from '@chakra-ui/react';
import Reviews from "./Reviews";
import ReviewBlock from "./ReviewBlock";
import axios from "axios";
  
const dummyList = {
    moffit: {
        image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Moffitt_exterior.JPG"
        ,description: "The James K. Moffitt Undergraduate Library, simply known as Moffitt Library, is a library situated at the crossroads of the University of California, Berkeley, designed by American activist John Carl Warnecke in the late 1960s as a cutting-edge library for undergraduates."
        ,hours: "8am  to 10 pm"
    }
,
oskilibrary: {
      image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Moffitt_exterior.JPG"
      ,description: "The James K. Moffitt Undergraduate Library, simply known as Moffitt Library, is a library situated at the crossroads of the University of California, Berkeley, designed by American activist John Carl Warnecke in the late 1960s as a cutting-edge library for undergraduates."
      ,hours: "8am  to 10 pm"
  }
}



const Library = () => {
    const [loading, setloading] = useState(true);
    useEffect(()=>{getData()

    }, [])

    const { id } = useParams();
    const [props, SetData] = useState();
    const getData = () =>{
          axios.get("http://localhost:3000/library/", {params:{libname:id}}).then(setloading(false)).then((body) => (SetData(body.data))).catch((error) => console.log(error))

    }
    
  

    const content = props === undefined ?  <div>loading </div> :
        <div>
        <NavBar></NavBar>
        
        <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex><VStack divider={<StackDivider borderColor='gray.200' />}
  spacing={10}>
            
            <Box>
            <Image
              rounded={'md'}
              alt={'product image'}
                src={ props.image1_link}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            /></Box> <HStack>
        <Box>
      loudness
      
      <CircularProgress marginLeft="20px" size="100px" value={props.base_noise_level} color='green.400'>
  <CircularProgressLabel>{props.base_noise_level}</CircularProgressLabel>
</CircularProgress><Box width={'10px'}></Box>
</Box><Spacer /><Box>{props.busyness_info.analysis.venue_live_busyness_available ? "live ":"estimated "}
busyness 
<CircularProgress marginLeft="20px" size="100px"value={props.busyness_info.analysis.venue_live_busyness_available ? props.busyness_info.analysis.venue_live_busyness : props.busyness_info.analysis.venue_forecasted_busyness} color={props.busyness_info.analysis.venue_live_busyness_available ? 'green.400' : 'blue.400'}>
  <CircularProgressLabel>{props.busyness_info.analysis.venue_live_busyness_available ? props.busyness_info.analysis.venue_live_busyness : props.busyness_info.analysis.venue_forecasted_busyness}</CircularProgressLabel>
</CircularProgress></Box></HStack>

                        </VStack>
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {props.full_name}
              </Heading>
              <Text
                color={'gray.900'}
                fontWeight={300}
                fontSize={'2xl'}>
                              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={'gray.200'}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={'gray.500'}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                  {props.short_description}
                </Text>
                <Text fontSize={'lg'}>
                {props.long_description}
                </Text>
              </VStack>
              <Box>

  
                <HStack marginTop='20px'><Rating readonly initialValue={props.rating}></Rating>
      <Text color='blue.600' fontSize='2xl'>
 {props.total_reviews} reviews
      </Text></HStack>
              </Box>
              <Box>
                <Image
              marginTop={"0"}
              rounded={'md'}
              alt={'product image'}
                src={ props.image2_link}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '40%', sm: '200px', lg: '200px' }}
            />  
              </Box>
            </Stack>
  
           
           
          </Stack>
        </SimpleGrid>
        <CustomGoogleMap w='100%' h='500px' lat={props.latitude} long={props.longitude}></CustomGoogleMap>
        <Box height={"100px"}></Box>
<Reviews name={id}></Reviews>
{props.total_reviews} reviews
      </Container>
         </div>
    return <div>{content} </div>
    };

export default Library;