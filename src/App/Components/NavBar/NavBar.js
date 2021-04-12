import {
  Box,
  Flex,
  HStack,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon} from '@chakra-ui/icons';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import DrawerMenu from './DrawerMenu';
import NavLink from './NavLink';

const links = ['Intro', 'Skills', 'Projects']

export default function ResponsiveNavBar(){
  
  const {isOpen, onOpen, onClose} = useDisclosure()
  
  return (
      //bg={useColorModeValue('#508696', '#2f2f2f')}
      //bg={useColorModeValue('#508696', 'gray.900')}
    <Box
      px='5px'
      bg={useColorModeValue('gray.300', 'gray.900')}
      position='fixed'
      top='0px'
      w='100%'
      zIndex='5'
    >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <HamburgerIcon
          display={{md: 'none'}}
          ml='20px'
          w={6}
          h={6}
          _hover={{
            color: 'gray.500'
          }}
          onClick={onOpen}
        />
        <DrawerMenu isOpen={isOpen} onClose={onClose} links={links}/>
        <HStack spacing={8}>
          <Text ml='20px' fontSize='2xl'>Erick ViBe</Text>
          <HStack spacing={8} display={{base: 'none', md: 'flex'}}>
            {links.map(link => (
              <NavLink key={link} to={link} />
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={'center'} mr='10px'>
          <Box>
            <ColorModeSwitcher display={{base: 'none', md: 'flex'}}/>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}
