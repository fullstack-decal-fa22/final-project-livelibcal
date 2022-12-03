import NavBar from './Components/NavBar.tsx'
import { ChakraProvider, Box, Button } from '@chakra-ui/react'
import LibraryHeading from './Components/LibraryHeading';
import LibaryList from './Components/LibraryList';
import Form from './Components/Form';
import SlideEx from './Components/Slide';

function FindLibraries() {
  return (

    <div>
    <NavBar></NavBar>
    <LibraryHeading></LibraryHeading>
    <LibaryList></LibaryList>
    </div>

  );
  
}

export default FindLibraries;
