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
        src='https://lh3.googleusercontent.com/proxy/MP0be8qC1kRwMJM5wlpqyqzqk6Piw0wtv_Jnpu91xlyi-tmLSVexvlDXHGWyXXcl4Mckqhg3z0EzU-BenZ4aQGBAbiXVoq0'
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
