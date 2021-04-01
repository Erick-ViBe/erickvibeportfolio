import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
} from '@chakra-ui/react';
import DrawerNavLink from './DrawerNavLink';
import { ColorModeSwitcher } from './ColorModeSwitcher';

export default function DrawerMenu({ isOpen, onClose, links }){
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        color='green'
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>

            <DrawerBody>
              <Stack as={'nav'} spacing={4} align='center'>
                {links.map(link => (
                  <DrawerNavLink onClose={onClose} to={link} key={link} />
                ))}
                <ColorModeSwitcher />
              </Stack>
            </DrawerBody>

            <DrawerFooter>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}
