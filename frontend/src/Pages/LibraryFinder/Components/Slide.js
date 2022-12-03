import { useDisclosure, Button, Slide, Box, Lorem} from "@chakra-ui/react"
import Form from "./Form"


function SlideEx(props) {
    const { isOpen, onToggle } = useDisclosure()
  
    return (
      <>
        <Button onClick={onToggle}>Show Filters</Button>
        <Slide direction='left' in={isOpen} style={{ zIndex: 10 }}>
          <Box
            p='40px'
            color='black'
            mt='0'
            bg='dodgerblue'
            rounded='md'
            shadow='md'
            height='100%'
            width='33%'
          >
            <Form isLoggedIn={props.isLoggedIn} data={props.data} func={onToggle} apply={props.apply}></Form>
          </Box>
        </Slide>
      </>
    )
  }

export default SlideEx;