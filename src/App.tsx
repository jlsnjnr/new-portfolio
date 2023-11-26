import { Box, Container, Image } from "@chakra-ui/react";
import { AboutMe } from "./components/AboutMe";
import { BannerHome } from "./components/BannerHome";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { LastJobs } from "./components/LastJobs";
import { Services } from "./components/Services";
import { Parallax } from "react-scroll-parallax";

const App = () => {
  return (
    <>
      <Image
        src="/Gradiente.png"
        position="absolute"
        w={["100%", "30%"]}
        right={0}
      />

      <Parallax translateY={[-50, 50]}>
        <Container
          mx="auto"
          display="flex"
          overflow="visible"
          flexDir="column"
          maxW="container.lg"
          justifyContent={["space-evenly", "center"]}
          height="100vh"
        >
          <Header />
          <BannerHome />
        </Container>
      </Parallax>

      <Parallax>
        <Services />
        <LastJobs />
        <Contact />
        <Container zIndex={10} maxW="container.lg" mx="auto">
          <Header />
        </Container>
      </Parallax>

      <AboutMe />
    </>
  );
};

export default App;
