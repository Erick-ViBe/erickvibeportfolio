import {
  Link,
  useColorModeValue,
} from '@chakra-ui/react'
import { Link as ScrollLink } from 'react-scroll'

const DrawerNavLink = ({to, onClose}) => (
  <ScrollLink
    activeClass='active'
    to={to}
    spy={true}
    smooth={true}
    duration={1000}
    offset={-90}
    onClick={onClose}
  >
    <Link
      px={2}
      py={1}
      rounded={'md'}
      w='90%'
      textAlign='center'
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.600'),
      }}
    >
        {to}
    </Link>
  </ScrollLink>
);

export default DrawerNavLink
