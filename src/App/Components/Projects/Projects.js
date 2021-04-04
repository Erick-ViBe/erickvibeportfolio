import {
  Text,
  Box,
  Flex,
} from '@chakra-ui/react'
import { ProjectCard } from './ProjectCard'

export const Projects = () => {
  return (
    <Box
      mb='999px'
    >
      <Text
        fontSize='5xl'
        align='center'
        id='Projects'
        mb='25px'
      >
        Projects
      </Text>
      <Flex
        marginX='10%'
        flexWrap='wrap'
        justifyContent='space-evenly'
        alignItems='center'
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Flex>
    </Box>
  )
}
