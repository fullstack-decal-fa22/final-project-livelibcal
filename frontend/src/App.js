import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import login from '../src/Components/login'
import logout from '../src/Components/logout'
import { useEffect } from 'react';
//import {gapi} from 'gapi-script'
import logo from './logo.svg';
import './App.css';
import { ChakraProvider, Box } from '@chakra-ui/react'
import NavBar from './Pages/LibraryFinder/Components/NavBar.tsx'
import LibraryBlock from './Pages/LibraryFinder/Components/LibraryBlock.js'
import LibraryHeading from './Pages/LibraryFinder/Components/LibraryHeading';
import LibaryList from './Pages/LibraryFinder/Components/LibraryList';
import FindLibraries from './Pages/LibraryFinder/FindLibraries';
import SplitScreen from './Components/Homepage';
import SignupCard from './Components/Signup';
import Library from './Pages/LibraryFinder/Library';

const clientId = "673795091694-s12v6e4o1ibtj47ltqn9mpp6n4ikad4a.apps.googleusercontent.com"


function App() {
  // useEffect(() => { //useless for now 
  //   function start(){
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope:""
  //     })
  //   };
  //   gapi.load('client:auth2', start);
  // })

  return (
    <ChakraProvider>
    <Router>
    <Routes>
        <Route exact path='/'  element={<SplitScreen />}/>
        <Route exact path='/libraries'  element={<FindLibraries />} />
        <Route exact path='/login'  element={<SignupCard/>} />
        <Route exact path='/library/:id' element={<Library/>}/>
    </Routes>
    </Router>
    </ChakraProvider>
  );
  
}

export default App;
