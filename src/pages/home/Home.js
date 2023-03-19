import React from "react";
import { ChakraProvider, Grid, GridItem, Center } from "@chakra-ui/react";
import Header from "../../components/header/Header";
import SearchBar from "../../components/searchbar/SearchBar";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <ChakraProvider>
      <Grid
        templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"150px 1fr"}
        h="100vh"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem area={"header"}>
          <Header />
        </GridItem>
        <GridItem pl={50} pr={50} pt={100} pb={1} width="50%" area={"main"}>
          {/* Main */}
          <Center h="70%">
            <SearchBar />
          </Center>
        </GridItem>
        <GridItem pl={4} pr={4} pt={4} pb={4} area={"footer"}>
          <Footer />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default Home;
