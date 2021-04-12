import {
  Flex,
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa'
import { BigButton } from './ContactBigButton'
import { SmallButton } from './ContactSmallButton'
//import { ScrollToTop } from './ScrollToTop'

export const Contact = () => {
  
  
  return (
    <Flex
      position='fixed'
      bottom='0px'
      w='100%'
      h={{md: '85px', base: '55px'}}
      justifyContent='flex-end'
      alignItems='center'
    >
      <BigButton
        icon={<FaGithub />}
        url='https://github.com/Erick-ViBe'
        content='GitHub'
      />
      <BigButton
        icon={<FaLinkedin />}
        url='https://www.linkedin.com/in/erick-vicencio-benitez-3b663120b/'
        content='Linkedin'
      />
      <BigButton
        icon={<FaTelegram />}
        url='https://t.me/VibErick'
        content='Telegram'
      />
      <SmallButton
        icon={<FaGithub />}
        url='https://github.com/Erick-ViBe'
      />
      <SmallButton
        icon={<FaLinkedin />}
        url='https://www.linkedin.com/in/erick-vicencio-benitez-3b663120b/'
      />
      <SmallButton
        icon={<FaTelegram />}
        url='https://t.me/VibErick'
      />
    </Flex>
      //<ScrollToTop />
  )
}
