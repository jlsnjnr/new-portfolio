import { Button, Flex, Heading, Image, Link, Text } from "@chakra-ui/react"
import Bg from '/Bg.png';

export const BannerHome = () => {
  return (
    <Flex alignItems='center' gap="60px 40px">
      <Flex pos="relative" flexDirection='column'>
        <Text pos="absolute" left="-25px" style={{ transform: 'rotate(-45deg)' }} color="#7206C2" fontWeight="bold">Olá</Text>
        <Heading fontSize='46px' my="20px">Bem vindo(a)! 👋</Heading>
        <Text maxW="390px" color="#828282" fontSize="16px">
          Meu nome é Joelson, mas todos me chamam de Júnior. Atualmente tenho 20 anos e trabalho focado como desenvolvedor front-end. Aqui você vai encontrar um pouco das minhas experiências.
        </Text>

        <Flex my="50px" alignItems='center' gap='90px'>
          <Button w="200px" h="50px" background="#7206C2">Um pouco sobre mim</Button>
          <Link>Baixar CV</Link>
        </Flex>
      </Flex>
      <Image ml='auto' maxW='400px' src={Bg} alt='Background' />
    </Flex>
  )
}