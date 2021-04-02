import React from 'react';
import {
  Flex,
  Box,
  Text,
  Image,
} from '@chakra-ui/react'

export const Hero = () => {
  return (
    <Flex
      marginX={{base: '5%', md: '15%'}}
      mt='70px'
      flexWrap='wrap'
      justifyContent='space-evenly'
      alignItems='center'
      id='Info'
      //flexDirection={{base: 'column-reverse', md: 'row'}}
    >
      <Image
        src='https://lh3.googleusercontent.com/proxy/cardGETPH3TMPvd3rYeZjDH-E15txL7LZ3rXNCFH6Cgl4jcPdmpMS-Bp43mAf3m-ZUIND-2S7SEWc6l8srIHycOb68G2ic4'
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
