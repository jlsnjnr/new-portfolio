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
} from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
import { useAboutMe } from "../context/AboutMeContext";
import Im from "/im2.jpg";

export const AboutMe = () => {
  const { isOpen, onClose } = useAboutMe();

  return (
    <>
      <Modal size="2xl" isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mx={["5%", "0"]} bg="#0E0E0E">
          <ModalCloseButton />
          <ModalBody>
            <Flex
              py="30px"
              alignItems="center"
              justifyContent="space-between"
              gap="30px"
            >
              <Image
                display={["none", "block"]}
                h="350px"
                borderRadius="20px"
                my="30px"
                src={Im}
                alt="Im"
              />

              <Flex flexDir="column">
                <Heading
                  textAlign={["left", "left"]}
                  fontSize={["22px", "26px"]}
                  my="20px"
                >
                  Olá!👋
                </Heading>
                <Text
                  textAlign={["left", "left"]}
                  maxW={["100%", "390px"]}
                  color="#828282"
                  fontSize="16px"
                >
                  Tenho 4 anos de experiência trabalhando com desenvolvimento de
                  software. Iniciei minha jornada com PHP e, posteriormente,
                  migrei para o universo do JavaScript. No meu tempo livre,
                  busco constantemente aprimorar o melhor em mim. Sou apaixonado
                  por atividades físicas, seja praticando esportes, me
                  exercitando ou até mesmo estudando novas tecnologias :p. Ah, e
                  também sou um entusiasta do tênis!
                </Text>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
