import React from 'react';
import {
  Flex,
  Box,
  Text,
  Image,
} from '@chakra-ui/react'
import myphoto from '../../Assets/MyVectorST.png'

export const Hero = () => {
  return (
    <>
      <Flex
        marginX='5%'
        mt='90px'
        flexWrap='wrap'
        justifyContent='space-evenly'
        alignItems='center'
        id='Intro'
      >
        <Image
          src={myphoto}
          minW='50%'
          boxSize={['80%', '80%', '50%', '50%']}
          transform= 'scaleX(-1)'
          mb={{base: '25px', md:'none'}}
        />
        <Box
          maxW={['80%', '80%', '45%', '45%']}
        >
          <Text
            my='auto'
            fontSize={['4xl', '5xl', '4xl', '6xl']}
            align='center'
          >
            Hi, i'm
            Erick ViBe
            <br />
            I'm a Backend
            <br />
            Developer
          </Text>
          <Text
            fontSize={['sm', 'md', 'lg', 'xl']}
            align='center'
          >
            Learning a little more every day, lover of technology, writing and reading code and tacos
          </Text>
        </Box>
      </Flex>
    </>
  )
}
