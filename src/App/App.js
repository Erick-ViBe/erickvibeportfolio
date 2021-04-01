import React from 'react';
import './App.css'
import {
  Divider,
} from '@chakra-ui/react';
import ResponsiveNavBar from './Components/NavBar/NavBar';
import { Hero } from './Components/Hero';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';

function App() {
  return (
    <>
      <ResponsiveNavBar />
      <Hero />
      <Divider my='25px' variant='dashed' />
      <Skills />
      <Divider my='25px' variant='dashed' />
      <Projects />
      <Divider my='25px' variant='dashed' />
      <Contact />
    </>
  );
}

export default App;
