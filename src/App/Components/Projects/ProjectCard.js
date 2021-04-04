import {ExternalLinkIcon} from '@chakra-ui/icons'
import {
  Text,
  Box,
  Image,
  Heading,
  Flex,
  IconButton,
} from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

export const ProjectCard = () => {
  return (
    <Box
      bg='gray.900'
      borderRadius='xl'
      borderWidth='1px'
      maxW='sm'
      overflow='hidden'
      alignItems='center'
      m='25px'
    >
      <Image src={'https://bit.ly/2Z4KKcF'} />
      <Heading
        size='xl'
        align='center'
        as='h2'
        mt='10px'
      >
        Project
      </Heading>
      <Text m='15px'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Flex
        mb='15px'
        justifyContent='space-evenly'
      >
        <IconButton icon={<FaGithub />} />
        <IconButton icon={<ExternalLinkIcon />} />
      </Flex>
    </Box>
  )
}
