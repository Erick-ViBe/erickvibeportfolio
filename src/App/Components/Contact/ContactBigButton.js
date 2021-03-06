import {
  Button,
  useColorModeValue,
} from '@chakra-ui/react'

export const BigButton = ({icon, url, content}) => {
  return (
    <Button
      mr='25px'
      leftIcon={icon}
      borderWidth='1px'
      borderColor={useColorModeValue('black', 'gray100')}
      size='lg'
      onClick={() => window.open(url, "_blank")}
      display={{base: 'none', md: 'flex'}}
      bg={useColorModeValue('gray.200', 'gray.900')}
      _hover={{
        bg: useColorModeValue('gray.300', 'gray.700')
      }}
    >{content}</Button>
  )
}
