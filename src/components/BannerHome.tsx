import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import Bg from "/Bg.png";
import Atom from "/Atom.png";
import Code from "/Code.png";
import FigmaLogo from "/FigmaLogo.png";
import Lightbulb from "/Lightbulb.png";
import { FiInstagram, FiLinkedin, FiGithub, FiYoutube } from "react-icons/fi";
import { useAboutMe } from "../context/AboutMeContext";

export const BannerHome = () => {
  const { onOpen } = useAboutMe();

  return (
    <Flex
      mt={["40px", ""]}
      flexDir={["column", "row"]}
      alignItems="center"
      gap="60px 40px"
    >
      <Flex pos="relative" flexDirection="column">
        <Text
          pos="absolute"
          left={["0", "-25px"]}
          style={{ transform: "rotate(-45deg)" }}
          color="#7206C2"
          fontWeight="bold"
        >
          Olá
        </Text>
        <Heading
          textAlign={["center", "left"]}
          fontSize={["26px", "46px"]}
          my="20px"
        >
          Bem vindo(a)! 👋
        </Heading>
        <Text
          textAlign={["center", "left"]}
          maxW={["100%", "390px"]}
          color="#828282"
          fontSize={["14px", "16px"]}
        >
          Meu nome é Joelson, mas todos me chamam de Júnior. Atualmente tenho 21
          anos e trabalho focado como desenvolvedor mobile. Aqui você vai
          encontrar um pouco das minhas experiências.
        </Text>

        <Flex
          my={["20px", "50px"]}
          alignItems="center"
          justifyContent={["center", "flex-start"]}
          flexDir={["column", "row"]}
          gap={["30px", "90px"]}
        >
          <Button
            transition="0.5s"
            _hover={{ backgroundColor: "#6507ad" }}
            onClick={onOpen}
            w={["180px", "200px"]}
            h="50px"
            background="#7206C2"
          >
            Um pouco sobre mim
          </Button>
          <Link download href="/Curriculo.pdf">
            Baixar CV
          </Link>
        </Flex>

        <Flex justifyContent={["center", "flex-start"]} gap="6">
          <Link href="https://www.instagram.com/jnrandradx/" target="_blank">
            <FiInstagram size={26} color="#7206C2" />
          </Link>
          <Link href="https://www.linkedin.com/in/jlsnjnr/" target="_blank">
            <FiLinkedin size={26} color="#7206C2" />
          </Link>
          <Link href="https://github.com/jlsnjnr" target="_blank">
            <FiGithub size={26} color="#7206C2" />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCFIt7cxHoaKYFrUleWYLTHQ"
            target="_blank"
          >
            <FiYoutube size={26} color="#7206C2" />
          </Link>
        </Flex>
      </Flex>

      <Box ml="auto" display={["none", "block"]} position="relative">
        <Image
          mx={["auto", "0"]}
          maxW={["0%", "400px"]}
          src={Bg}
          alt="Background"
        />
        <Flex
          className="image"
          align="center"
          justifyContent="center"
          bg="#D9D9D9"
          w="60px"
          h="60px"
          borderRadius="full"
          top="20"
          right="1"
          pos="absolute"
        >
          <Image src={Atom} alt="Atom icon" />
        </Flex>
        <Flex
          className="image"
          align="center"
          justifyContent="center"
          bg="#D9D9D9"
          w="60px"
          h="60px"
          borderRadius="full"
          left={["0", "-5"]}
          bottom="20"
          pos="absolute"
        >
          <Image src={Code} alt="Code icon" />
        </Flex>
        <Flex
          className="image"
          align="center"
          justifyContent="center"
          bg="#D9D9D9"
          w="60px"
          h="60px"
          borderRadius="full"
          left="5"
          top="20"
          pos="absolute"
        >
          <Image src={FigmaLogo} alt="Figma Logo icon" />
        </Flex>
        <Flex
          className="image"
          align="center"
          justifyContent="center"
          bg="#D9D9D9"
          w="60px"
          h="60px"
          borderRadius="full"
          right="20"
          bottom="5"
          pos="absolute"
        >
          <Image src={Lightbulb} alt="Light bulb icon" />
        </Flex>
      </Box>
    </Flex>
  );
};
