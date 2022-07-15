import logo from './logo.svg';
import './App.css';
import { Movies } from './Components/Movies';
import { Box, Heading } from '@chakra-ui/react';

function App() {
  return (
    <Box className="App">
      <Heading>Movies App</Heading>
      <Movies/>
    </Box>
  );
}

export default App;
