import React from 'react';
import {
  Flex,
  Box,
  Text,
  Image,
} from '@chakra-ui/react'

export const Hero = () => {
  //https://drive.google.com/file/d/1m1UAI1-gR0yei3wJGPRdJSvd7uC5fkH6/view?usp=sharing
  return (
    <Flex
      marginX={{base: '5%', md: '15%'}}
      mt='70px'
      flexWrap='wrap'
      justifyContent='space-evenly'
      alignItems='center'
      id='Info'
    >
      <Image
        src='https://drive.google.com/thumbnail?id=1m1UAI1-gR0yei3wJGPRdJSvd7uC5fkH6'
        minW='60%'
        mb={{base: '25px', md:'none'}}
      />
      <Box>
        <Text
          my='auto'
          fontSize={{base:'4xl', md:'6xl'}}
          align='center'
        >
          Hi, my name is
          <br />
          Erick ViBe!!!
          <br />
          Im a Backend
          <br />
          Developer
        </Text>
      </Box>
    </Flex>
  )
}
