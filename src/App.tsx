import React, { useRef, useContext, useEffect, useState } from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
import { AboutMe } from "./components/AboutMe";
import { BannerHome } from "./components/BannerHome";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { LastJobs } from "./components/LastJobs";
import { Services } from "./components/Services";
import { ScrollContext } from "./utils/ScrollObserver";

const App = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elContainer } = refContainer;

  useEffect(() => {
    if (elContainer) {
      setContainerHeight(elContainer.clientHeight);
    }
  }, [elContainer]);

  if (containerHeight !== 0) {
    progress = Math.min(1, scrollY / containerHeight);
  }

  const containerStyle = {
    transform: `translateY(-${progress * 100}vh)`,
    position: "sticky",
    top: 0,
    zIndex: 1,
  };

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
          // @ts-ignore
          style={containerStyle}
          mx="auto"
          display="flex"
          flexDir="column"
          maxW="container.lg"
          justifyContent={["space-evenly", "center"]}
          height="100vh"
        >
          <Header />
          <BannerHome />
        </Container>

        <Box bg="#171923" zIndex={999}>
          <Services />
          <LastJobs />
          <Contact />
          <Container zIndex={999} maxW="container.lg" mx="auto">
            <Header />
          </Container>
          <AboutMe />
        </Box>
      </Flex>
    </>
  );
};

export default App;
