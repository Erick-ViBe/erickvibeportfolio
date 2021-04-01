import React from 'react';
import {
  Flex,
  Button,
  IconButton,
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa'

export const Contact = () => {
  //const [ScrollToTop, SetScrollToTop] = React.useState(false)

  //if(window.pageYOffset > 300){
    //SetScrollToTop(true)
  //}else{
    //SetScrollToTop(false)
  //}
  
  return (
    <Flex
      position='fixed'
      bottom='0px'
      w='100%'
      h={{md: '85px', base: '55px'}}
      justifyContent='flex-end'
      alignItems='center'
    >
      <Button
        mr='25px'
        leftIcon={<FaGithub />}
        size='lg'
        onClick={() => window.open('https://github.com/Erick-ViBe', "_blank")}
        display={{base: 'none', md: 'flex'}}
      >GitHub</Button>
      <Button
        mr='25px'
        leftIcon={<FaLinkedin />}
        size='lg'
        onClick={() => window.open('https://www.linkedin.com/in/sergio-erick-vicencio-benitez-733268162/', "_blank")}
        display={{base: 'none', md: 'flex'}}
      >Linkedin</Button>
      <Button
        mr='25px'
        leftIcon={<FaTelegram />}
        size='lg'
        onClick={() => window.open('https://t.me/VibErick', "_blank")}
        display={{base: 'none', md: 'flex'}}
      >Telegram</Button>
      <IconButton
        icon={<FaGithub />}
        mr='15px'
        size='sm'
        display={{md: 'none', base: 'flex'}}
        onClick={() => window.open('https://github.com/Erick-ViBe', "_blank")}
      />
      <IconButton
        icon={<FaLinkedin />}
        mr='15px'
        size='sm'
        display={{md: 'none', base: 'flex'}}
        onClick={() => window.open('https://www.linkedin.com/in/sergio-erick-vicencio-benitez-733268162/', "_blank")}
      />
      <IconButton
        icon={<FaTelegram />}
        mr='15px'
        size='sm'
        display={{md: 'none', base: 'flex'}}
        onClick={() => window.open('https://t.me/VibErick', "_blank")}
      />
    </Flex>
      //{ ScrollToTop && <Button mr='25px'>D</Button> }
  )
}
