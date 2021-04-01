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
      marginX='15%'
      mt='70px'
      flexWrap='wrap'
      justifyContent='space-evenly'
      alignItems='center'
      id='Info'
    >
      <Image
        src='https://lh3.googleusercontent.com/proxy/dbqWYj_FyspR2u4ZnXlErmW4zT3eRCFFmTNZ_SRp72gxNBr6EA8ZRFzQH1NnMYaYPwHu79yjy4IpKStc1ICipfrfClrCbSA'
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
