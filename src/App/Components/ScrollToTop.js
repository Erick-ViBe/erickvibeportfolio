import {ArrowUpIcon} from '@chakra-ui/icons'
import {
  Box,
  useColorModeValue,
} from '@chakra-ui/react'
import useScrollPosition from '@react-hook/window-scroll'
import { Link as ScrollLink } from 'react-scroll'

export const ScrollToTop = () => {
  const scrollY = useScrollPosition(60)

  const hoverColors = useColorModeValue('gray.300', 'gray.700')

  return (
    <>
      {scrollY>500 && (
        <Box
          position='fixed'
          bottom={{base: '55px', md: '85px'}}
          right={{base: '13px', md: '25px'}}
          _hover={{
            bg: hoverColors
          }}
          cursor='pointer'
          borderRadius='md'
          padding='5px'
        >
          <ScrollLink
            activeClass='active'
            to={'Info'}
            spy={true}
            smooth={true}
            duration={1000}
            offset={-90}
          >
            <ArrowUpIcon
              boxSize={{base: '25px', md: '35px'}}
            />
          </ScrollLink>
        </Box>
      )}
    </>
  )
}
