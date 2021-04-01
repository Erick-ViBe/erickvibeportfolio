import {
  Link,
  useColorModeValue,
} from '@chakra-ui/react'
import { Link as ScrollLink } from 'react-scroll'

const NavLink = ({ to }) => (
  <ScrollLink
    activeClass='active'
    to={to}
    spy={true}
    smooth={true}
    duration={1000}
    offset={-90}
  >
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        //bg: useColorModeValue('gray.200', 'gray.700'),
        //bg: useColorModeValue('#b5d0da', '#464646'),
        bg: useColorModeValue('#b5d0da', 'gray.700'),
      }}
    >
      {to}
    </Link>
  </ScrollLink>
);

export default NavLink
