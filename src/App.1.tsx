import { Box, Container, Flex } from "@chakra-ui/react";
import { AboutMe } from "./components/AboutMe";
import { BannerHome } from "./components/BannerHome";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { LastJobs } from "./components/LastJobs";
import { Services } from "./components/Services";
import { useRef, useContext } from "react";
import { ScrollContext } from "./utils/ScrollObserver";

export const App = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elContainer } = refContainer;

  if (elContainer) progress = Math.min(1, scrollY / elContainer.clientHeight);

  return (
    <>
      <Flex
        flexDir="column"
        backgroundSize="100%"
        backgroundPosition="600px -1300px"
        backgroundRepeat="no-repeat"
        backgroundImage="/Gradiente.png"
        position="relative"
      >
        <Box // @ts-ignore
          ref={elContainer}
          position="sticky"
          top="0"
          // minHeight={"100vh"}
          // h="30vh"
          // display="flex"
          // flex="1"
          // bg="red"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          style={{
            transform: `translateY(-${progress * 100}vh)`,
          }}
          maxW="container.lg"
          zIndex={-10}
          mx="auto"
        >
          <Box>
            <Header />
            <BannerHome />
          </Box>
        </Box>
        <Services />
        <LastJobs />
        <Contact />
        <Container maxW="container.lg" mx="auto">
          <Header />
        </Container>

        <AboutMe />
      </Flex>
    </>
  );
};
