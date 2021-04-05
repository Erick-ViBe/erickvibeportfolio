import {
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'

export const SmallButton = ({icon, url}) => {
  return (
    <IconButton
      icon={icon}
      mr='15px'
      size='sm'
      borderWidth='1px'
      display={{md: 'none', base: 'flex'}}
      onClick={() => window.open(url, "_blank")}
      bg={useColorModeValue('gray.100', 'gray.900')}
      _hover={{
        bg: useColorModeValue('gray.300', 'gray.700')
      }}
    />
  )
}
