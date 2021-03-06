import {
  Flex,
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTelegram, FaRegFileAlt } from 'react-icons/fa'
import { BigButton } from './ContactBigButton'
import { SmallButton } from './ContactSmallButton'
import Resume from '../../../Assets/Resume.pdf'

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
        icon={<FaRegFileAlt />}
        url={Resume}
        content='Resume'
      />
      <BigButton
        icon={<FaGithub />}
        url='https://github.com/Erick-ViBe'
        content='GitHub'
      />
      <BigButton
        icon={<FaLinkedin />}
        url='https://www.linkedin.com/in/erick-vicencio-benitez/'
        content='Linkedin'
      />
      <BigButton
        icon={<FaTelegram />}
        url='https://t.me/VibErick'
        content='Telegram'
      />
      <SmallButton
        icon={<FaRegFileAlt />}
        url={Resume}
      />
      <SmallButton
        icon={<FaGithub />}
        url='https://github.com/Erick-ViBe'
      />
      <SmallButton
        icon={<FaLinkedin />}
        url='https://www.linkedin.com/in/erick-vicencio-benitez/'
      />
      <SmallButton
        icon={<FaTelegram />}
        url='https://t.me/VibErick'
      />
    </Flex>
      //<ScrollToTop />
  )
}
