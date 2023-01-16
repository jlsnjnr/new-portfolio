import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { FiCode, FiFigma } from "react-icons/fi";

export const Services = () => {
  return (
    <Box bg="#0E0E0E" borderRadius="40px" mt="120px">
      <Container maxW="container.lg" mx="auto">
        <Heading color="#B6B6B6" fontSize="38px" pt="60px">Serviços</Heading>

        <Flex
          bg="#08080A"
          flexDir="column"
          borderRadius="40px"
          py="30px"
          px="40px"
          gap="15px"
          backgroundPosition="right"
          backgroundRepeat='no-repeat'
          backgroundImage={['none', '/la.png']}
          my="50px"
        >
          <Flex
            align="center"
            justifyContent="center"
            bg="#6B09B2"
            w="65px"
            h="65px"
            borderRadius="20px"
          >
            <FiFigma size={26} />
          </Flex>
          <Heading fontSize={["20px", "30px"]}>WEB UI/MOBILE UI</Heading>
          <Text maxW="380px" color="#B6B6B6">
            Ui Design, criado para garantir um acesso simples e rápido ao
            conteúdo que o usuário procura.
          </Text>
        </Flex>

        <Flex
          bg="#08080A"
          flexDir="column"
          borderRadius="40px"
          py="30px"
          px="40px"
          gap="15px"
          backgroundPosition="right"
          backgroundRepeat='no-repeat'
          backgroundImage={['none', '/home.png']}
          my="50px"
        >
          <Flex
            align="center"
            justifyContent="center"
            bg="#6B09B2"
            w="65px"
            h="65px"
            borderRadius="20px"
          >
            <FiCode size={26} />
          </Flex>
          <Heading fontSize={["20px", "30px"]}>FRONT-END</Heading>
          <Text maxW="380px" color="#B6B6B6">
            Podemos dizer que tudo o que um usuário vê, interage ou clica é
            fruto de um trabalho de um desenvolvedor front end.
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};
