import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  keyframes,
  usePrefersReducedMotion,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import { FiTrendingUp } from "react-icons/fi";

const spin = keyframes`
from { transform: rotate(0deg); }
to { transform: rotate(360deg); }
`;

export const LastJobs = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 20s linear`;

  return (
    <Container maxW="container.lg" mx="auto">
      <Heading color="#B6B6B6" fontSize="38px" pt="60px">
        Últimos Trabalhos
      </Heading>
      <Text color="#B6B6B6" pt="40px" maxW="530px">
        Cada trabalho contém uma grande dose de entusiasmo e conhecimento.
        Acompanhando sempre as últimas tendências, priorizando o design sólido e
        intuitivo para o cliente e usuário. Esse é o resultado.
      </Text>

      <SimpleGrid columns={[1, 3]} spacing={10} gap="10px" w="full" mt="50px" pos="relative">
        <Flex
          animation={animation}
          alignItems="center"
          justify="center"
          w="100px"
          h="100px"
          borderRadius="full"
          border="1px dashed #7206C2"
          pos="absolute"
          top="0"
          right="20px"
        >
          <Flex
            alignItems="center"
            justify="center"
            w="70px"
            h="70px"
            borderRadius="full"
            border="1px dashed #7206C2"
          />
        </Flex>
        <Box pos="absolute" top="35px" right="55px">
          <FiTrendingUp color="#7206C2" size={24} />
        </Box>

        <Flex flexDir="column">
          <Flex
            transition="0.5s"
            _hover={{ bg: "rgba(14, 14, 14, 0.5)" }}
            bg="#0E0E0E"
            borderRadius="10px"
            my="15px"
            h="283px"
          >
            <Image borderRadius="10px" w="full" objectFit='cover' src='/poke.png' />
          </Flex>

          <Flex
            transition="0.5s"
            _hover={{ bg: "rgba(14, 14, 14, 0.5)" }}
            bg="#0E0E0E"
            borderRadius="10px"
            my="15px"
            h="207px"
          >
            <Image borderRadius="10px" w="full" objectFit='cover' src='/dashgo.png' />
          </Flex>
        </Flex>

        <Flex flexDir="column">
          <Flex
            transition="0.5s"
            borderRadius="10px"
            maxW="100%"
            my="15px"
            h="207px"
            pos='relative'
          >
            <Image
              borderRadius="10px"
              w="full"
              objectFit='cover'
              src='/trip.png'
            />
            <Flex
              alignItems='center'
              justify='center'
              borderRadius="10px"
              transition="0.3s ease all"
              pos='absolute'
              w="full"
              h="207px"
              boxSizing="border-box"
              display='block'
              overflow="hidden"
              bg="rgba(14, 14, 14, 0.5)"
              _focusWithin={{
                marginTop: "-120px",
              }}
              _hover={{
                p: "50px",
              }}
            >
              <Heading
                transition="0.3s ease all"
                display='block'
                marginTop="70px"
              >
                link
              </Heading>
            </Flex>
          </Flex>
          <Flex
            transition="0.5s"
            _hover={{ bg: "rgba(14, 14, 14, 0.5)" }}
            bg="#0E0E0E"
            borderRadius="10px"
            maxW="100%"
            my="15px"
            h="283px"
          >
            <Image borderRadius="10px" w="full" objectFit='cover' src='/hbo-max.png' />
          </Flex>
        </Flex>

        <Flex flexDir="column">
          <Flex
            transition="0.5s"
            _hover={{ bg: "rgba(14, 14, 14, 0.5)" }}
            bg="#0E0E0E"
            borderRadius="10px"
            maxW="100%"
            my="15px"
            h="253px"
          >
            <Image borderRadius="10px" w="full" objectFit='cover' src='/dt-money.png' />
          </Flex>
          <Flex
            transition="0.5s"
            _hover={{ bg: "rgba(14, 14, 14, 0.5)" }}
            bg="#0E0E0E"
            borderRadius="10px"
            maxW="100%"
            my="15px"
            h="237px"
          >
            <Image borderRadius="10px" w="full" objectFit='cover' src='/ignews.png' />
          </Flex>
        </Flex>
      </SimpleGrid>
    </Container >
  );
};
