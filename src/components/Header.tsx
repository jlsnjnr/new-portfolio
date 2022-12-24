import { Button, Flex, Image, Link, useColorMode } from "@chakra-ui/react"
import User from '/user.png';

export const Header = () => {
  // const darkmode
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Flex alignItems='center' justifyContent='space-between' my="40px">
        <Flex
          alignItems='center'
          gap='40px'
        >
          <Flex
            alignItems='center'
            justifyContent='center'
            w="100px"
            h="100px"
            borderRadius="full"
            backgroundColor="#110F0F"
          >
            <Image src={User} alt='User' />
          </Flex>

          <Link>Serviços</Link>
          <Link>Últimos trabalhos</Link>
        </Flex>

        <Flex alignItems='center' gap='20px'>
          <Button
            w='240px'
            h='60px'
            border="1px solid #fff"
            borderColor='white.50'
            bg='transparent'
            borderRadius="15px"
          >
            Contato
          </Button>

          {/* feature: add darkmode */}
          {/* 
            <Button
              onClick={() => toggleColorMode()} id="alternar-modo-cor"
            >
              {colorMode === 'dark' ? <Text>☀️</Text> : <Text>🌑</Text>}
            </Button> 
          */}
        </Flex>
      </Flex>
    </>
  )
}