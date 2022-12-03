import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Center,
  Avatar,
  AvatarBadge,
  IconButton
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { ViewIcon, ViewOffIcon, SmallCloseIcon } from '@chakra-ui/icons';
import axios from 'axios';





export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);

  const [password, setPassword] = useState(false);

  const [email, setEmail] = useState(false);

  const [username, setUsername] = useState(false);

  const [showRequired, setShowRequired] = useState(false);

  const [showWrong, setShowWrong] = useState(false);

  async function checkToken() {
    console.log("checking token")
    if (window.sessionStorage.getItem('token')) {
      const res = await axios.get("http://localhost:3000/user/me", {headers: {
        'token': JSON.parse(window.sessionStorage.getItem('token')).token
      }}).catch(err => console.log(err));
      console.log(res)
      if (res.status === 200) {
        window.open("/libraries","_self")
      }
      else {
        return false
      }
    }
  }

  function postSignupInfo() {
    console.log(username +  email + password)
    if (!username || !email || !password) {
      console.log("Required!")
      setShowRequired(s => true);
    } else {
      axios.post("http://localhost:3000/user/signup", {username: username, email: email, password:password}).then(window.open("/libraries","_self"))
      setShowRequired(s => false);
    }
  }
  
  async function postLoginInfo(){
    console.log(email + password)
    if (!email || !password) {
      console.log("please fill the required!")
      setShowRequired(s => true);
    }
     else {
      const res = await axios.post("http://localhost:3000/user/login", {email: email, password:password}
      ).catch(err => setShowRequired(s => false) & setShowWrong(s => true));
      console.log(res)
      if (res.status === 200) {
        sessionStorage.setItem("token", JSON.stringify(res.data))
        window.open("/libraries","_self")
        setShowRequired(s => false);
      }
    }
  }

  return ( 
    checkToken(),
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign Up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            To see which library you should go to today
          </Text>
        </Stack>
        <Box color={'red.700'} alignSelf='center'>
          {showRequired ? <p>Please fill in the required!</p> : null}
          {showWrong ? <p>Please enter correct information!</p> : null}
        </Box>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
            <FormControl id="Username" isRequired>
              <FormLabel>User Name</FormLabel>
              <Input type="text"  onChange={event => setUsername(event.currentTarget.value)}/>
            </FormControl>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email Address</FormLabel>
              <Input type="email"  onChange={event => setEmail(event.currentTarget.value)}/>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'}  onChange={event => setPassword(event.currentTarget.value)}/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button onClick={postSignupInfo}
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign Up
              </Button>
              <Button onClick={postLoginInfo}
                loadingText="Submitting"
                size="lg"
                bg={'gray.200'}
                color={'white'}
                _hover={{
                  bg: 'gray.500',
                }}>
                Login
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}