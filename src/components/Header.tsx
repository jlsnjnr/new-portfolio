import { Flex, Image, Link, Text, useColorMode } from "@chakra-ui/react"
import { FaWhatsapp } from "react-icons/fa";
import User from '/user.png';

export const Header = () => {
  // const darkmode
  const { colorMode, toggleColorMode } = useColorMode();

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
        </Flex>

        <Link
          w={['150px', '240px']}
          h={['45px', '60px']}
          border="1px solid #fff"
          borderColor='white.50'
          bg='transparent'
          borderRadius={["10px", "15px"]}
          href='https://wa.me/5512997972034'
          target='_blank'
          display='flex'
          alignItems='center'
          justifyContent='center'
          gap='10px'
          _hover={{
            textDecoration: 'none'
          }}
        >
          <Text>Contato</Text>
          <FaWhatsapp />
        </Link>

        {/* feature: add darkmode */}
        {/* 
            <Button
              onClick={() => toggleColorMode()} id="alternar-modo-cor"
            >
              {colorMode === 'dark' ? <Text>☀️</Text> : <Text>🌑</Text>}
            </Button> 
          */}
      </Flex>
    </>
  )
}