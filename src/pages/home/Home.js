import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "../../components/header/Header";

function Home() {
  return (
    <ChakraProvider>
      <Header />
      {/* <SearchBar> */}
      {/* <Footer /> */}
    </ChakraProvider>
  );
}

export default Home;
