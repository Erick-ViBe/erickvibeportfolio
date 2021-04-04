import {ExternalLinkIcon} from '@chakra-ui/icons'
import {
  Text,
  Box,
  Image,
  Heading,
  Flex,
  IconButton,
  Tag,
} from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

export const ProjectCard = ({photo, title, content, github, project, tags}) => {
  return (
    <Box
      bg='gray.900'
      borderRadius='xl'
      borderWidth='1px'
      maxW={['sm', 'sm', '45%', 'md']}
      h='xl'
      overflow='hidden'
      alignItems='center'
      my='25px'
      mx='15px'
    >
      <Image
        src={photo}
        w='450px'
        h='250px'
        fit='cover'
      />
      <Flex
        flexDir='column'
        justifyContent='space-around'
        h='58%'
      >
        <Heading
          size='xl'
          align='center'
          as='h2'
          mt='10px'
        >
          {title}
        </Heading>
        <Text
          m='15px'
          fontSize='xl'
        >
          {content}
        </Text>
        <Flex
          mb='15px'
          justifyContent='space-evenly'
        >
          {
            tags.map((tag) => {
              return (
                <Tag key={tag}>{tag}</Tag>
              )
            })
          }
        </Flex>
        <Flex
          mb='15px'
          justifyContent='space-evenly'
        >
          <IconButton
            icon={<FaGithub />}
            onClick={() => window.open(github, "_blank")}
          />
          <IconButton
            icon={<ExternalLinkIcon />}
            onClick={() => window.open(project, "_blank")}
          />
        </Flex>
      </Flex>
    </Box>
  )
}