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
                  Bem vindo(a)! 👋
                </Heading>
                <Text textAlign={["center", "left"]} maxW={["100%", "390px"]} color="#828282" fontSize="16px">
                  Meu nome é Joelson, mas todos me chamam de Júnior. Atualmente tenho 20
                  anos e trabalho focado como desenvolvedor front-end. Aqui você vai
                  encontrar um pouco das minhas experiências.
                </Text>

                <Button
                  rightIcon={<FaWhatsapp />}
                  w={['150px', '180px']}
                  h={['45px', '50px']}
                  border="1px solid #fff"
                  borderColor='white.50'
                  bg='transparent'
                  borderRadius={["10px", "15px"]}
                  my="20px"
                  mx={["auto", "0"]}
                >
                  Contato
                </Button>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )

}