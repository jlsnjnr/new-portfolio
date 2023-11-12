import { Box, Container, Flex } from "@chakra-ui/react";
import { AboutMe } from "./components/AboutMe";
import { BannerHome } from "./components/BannerHome";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { LastJobs } from "./components/LastJobs";
import { Services } from "./components/Services";
import { useRef, useContext } from "react";
import { ScrollContext } from "./utils/ScrollObserver";

const App = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elContainer } = refContainer;

  if (elContainer) progress = Math.min(1, scrollY / elContainer.clientHeight);

  return (
    <>
      <Flex
        flexDir="column"
        backgroundSize={["0", "30%"]}
        backgroundPosition="top right"
        backgroundRepeat="no-repeat"
        backgroundImage="/Gradiente.png"
        position="relative"
      >
        <Container // @ts-ignore
          ref={elContainer}
          position="sticky"
          top="0"
          style={{
            transform: `translateY(-${progress * 100}vh)`,
          }}
          mx="auto"
          py="40px"
          maxW="container.lg"
          zIndex={0}
        >
          <Header />
          <BannerHome />
        </Container>

        <Box bg="#171923" zIndex={10}>
          <Services />
          <LastJobs />
          <Contact />
          <Container maxW="container.lg" mx="auto">
            <Header />
          </Container>
          <AboutMe />
        </Box>
      </Flex>
    </>
  );
};

export default App;
