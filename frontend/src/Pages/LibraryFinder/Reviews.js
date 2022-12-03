import {Box, Card, FormControl, FormLabel, Input, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, HStack} from "@chakra-ui/react"
import axios from "axios";
import { useState , useEffect, getElementById} from "react";
import ReviewBlock from "./ReviewBlock";
import { Rating } from 'react-simple-star-rating'

const Reviews = (props) => {
    const [list, setList] = useState([]);
    const [data, setData] = useState([]);
    const LibraryName = props.name;
    

    useEffect(()=>{
        getReviews()

    }, [])
    const [rating, setRating] = useState(5)
    var rattting
    const handleRating = (rate) => {
        rattting = rate;
    }
     var posts = data && data.map(i =>
        <ReviewBlock key={i.name+""+i.title} title={i.title} body={i.body} name={i.name} rate={i.rate}></ReviewBlock>)
     //list.map((i) => );
    //get request
    
    const update = (props) => {
        setList(posts => [props, ...posts]);
    }
    


    const SubmitReviewForm = () => {
        const UsernameForm = () => { 
        if(1 === null) {
            return (
                <FormControl id="Username" isRequired>
              <FormLabel>User name</FormLabel>
              <Input type="text"/>
            </FormControl>
            )
        } else {
            return (<Box></Box>)
        }
        }

 
        return(
                <Box>
                    <Heading lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>Submit a review here!</Heading>
                    <UsernameForm/>
                    <Rating
                    onClick={handleRating}
                    id="rating"
                    size={50}
                    transition
                    allowFraction
                    showTooltip
                    display="inline"
                  />
                  
            <FormControl id="text" isRequired>
              <FormLabel>Title</FormLabel>
              <Input type="text" id="title" />
            </FormControl>
            <FormControl id="text" isRequired>
              <FormLabel>Body</FormLabel>
              <Box border="10px"><textarea rows="4" cols="50" id="body"/></Box>
              
            </FormControl>
            <Button onClick={submitReview}>Submit Review</Button>
            </Box>

        )
    }
    
    function submitReview() {
        const title = document.getElementById('title').value;
        const body = document.getElementById('body').value;
        console.log(rattting)
        console.log(title)
        console.log(body)
        axios.post("http://localhost:3000/review/post/?library="+ LibraryName +"&title="+title +"&body=" + body + "&rate=" + rattting
        
        , {library: LibraryName, title: title, body:body, rate:rattting}).then(window.location.reload(false))

        
    }
    var dummyReviewList = [{name:"oski", title: "shit library", rating:2, body:"this libray is really loud, people shouting, people smell bad and hot and sweaty. i hate this library. "},
                                {name:"oski2", title: "ok library", rating:4, body:"not a bad lirbary, but gets busy"},
                                {name:"oski3", title: "ok library", rating:5, body:"i saw oski here, so this librarby is the best. "}]
    const getReviews = () => {
        setList([]);
        console.log("oski")
        axios.get("http://localhost:3000/review/",{params:{library:props.name}})
        .then((body) => setData(body.data))
       .catch((error) => console.log(error));
       
            
    for (const review of data) {
       update(review); 
       console.log(review)
    }

}

        return(
            <Box>
                <SubmitReviewForm></SubmitReviewForm>
                <Box flex-direction= "row">{posts}</Box>
            </Box>
            

)               
        }
export default Reviews

