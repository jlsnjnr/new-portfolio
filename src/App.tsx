import { Button, Container, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { BannerHome } from "./components/BannerHome";


import { Header } from "./components/Header";

const App = () => {
  return (
    <>
      <Flex backgroundSize='100%' backgroundPosition="400px -941px" backgroundRepeat='no-repeat' backgroundImage='/Gradiente.png'>
        <Container maxW='container.lg' mx='auto'>
          <Header />
          <BannerHome />
        </Container>
      </Flex>
    </>
  )
}

export default App;