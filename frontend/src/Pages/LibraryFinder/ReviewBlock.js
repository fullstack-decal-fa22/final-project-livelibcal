import {Box, Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button} from "@chakra-ui/react"
import { Rating } from "react-simple-star-rating";
const ReviewBlock = (props) => {
    return(
      <Card maxW='sm'>
  <CardBody>

    <Stack mt='6' spacing='3'>
    <Heading lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '1xl', lg: '2xl' }}>{props.name}</Heading>
      <Heading size='md'>{props.title}</Heading>
      <Text>
        {props.body}
      </Text>
      <Rating readonly allowFraction initialValue={props.rate}></Rating>
      <Text color='blue.600' fontSize='2xl'>
        {props.rating}
      </Text> 
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
   
  </CardFooter>
</Card>
    )
}
export default ReviewBlock;