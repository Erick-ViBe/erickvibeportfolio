import {
  Text,
  Box,
  Flex,
} from '@chakra-ui/react'
import { ProjectCard } from './ProjectCard'
import { RawProjectsInfo } from './RawProjectsInfo'

export const Projects = () => {
  return (
    <Box
      mb={{base:'30px', md:'60px'}}
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
        mx='5%'
        flexWrap='wrap'
        justifyContent='space-evenly'
        alignItems='center'
      >
        {
          RawProjectsInfo.map((projectInfo) => {
            return (
              <ProjectCard
                photo={projectInfo.photo}
                title={projectInfo.title}
                content={projectInfo.content}
                github={projectInfo.github}
                project={projectInfo.project}
                docs={projectInfo.docs}
                key={projectInfo.title}
              />
            )
          })
        }
      </Flex>
    </Box>
  )
}
