import {
  Text,
  Box,
  Flex,
} from '@chakra-ui/react'
import React from 'react'
import {
  PythonLogo,
  JavascriptLogo,
  CLogo,
  CPlusPlusLogo,
  GitHubLogo,
  DjangoLogo,
  FlaskLogo,
  MySQLLogo,
  LinuxLogo,
  ReactLogo,
  HerokuLogo,
} from './Devicons'

export const Skills = () => {
  return (
    <Box margin='35px'>
      <Text
        fontSize='5xl'
        align='center'
        id='Skills'
      >
        Skills
      </Text>
      <Flex
        marginX={{md: '15%', base: 'none'}}
        mt='10px'
        flexWrap='wrap'
        justifyContent='space-evenly'
        alignItems='center'
      >
        <PythonLogo />
        <JavascriptLogo />
        <DjangoLogo />
        <ReactLogo />
        <GitHubLogo />
        <LinuxLogo />
        <FlaskLogo />
        <MySQLLogo />
        <CLogo />
        <CPlusPlusLogo />
        <HerokuLogo />
      </Flex>
    </Box>
  )
}
