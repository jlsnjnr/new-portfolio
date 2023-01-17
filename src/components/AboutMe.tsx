import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react'
import { FaWhatsapp } from 'react-icons/fa';
import { useAboutMe } from '../context/AboutMeContext';
import Im from "/im2.jpg";

export const AboutMe = () => {
  const { isOpen, onClose } = useAboutMe();

  return (
    <>
      <Modal size="xl" isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mx={["5%", "0"]} bg="#0E0E0E">
          <ModalCloseButton />
          <ModalBody>
            <Flex alignItems='center' justifyContent='space-between' gap="30px">
              <Image display={["none", "block"]} h="350px" borderRadius="20px" my="30px" src={Im} alt="Im" />

              <Flex flexDir="column">
                <Heading textAlign={["center", "left"]} fontSize={["22px", "26px"]} my="20px">
                  Olá!👋
                </Heading>
                <Text textAlign={["center", "left"]} maxW={["100%", "390px"]} color="#828282" fontSize="16px">
                  Quer me conhecer um pouco mais? Eu trabalho com desenvolvimento de software a 3 anos, comecei com php e migrei para o JavaScript. No meu tempo livre sempre busco aprimorar o melhor em mim, gosto de me exercitar, praticar esportes, jogar e também estudar :p
                </Text>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )

}