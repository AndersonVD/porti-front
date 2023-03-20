import React from "react";
import { ChakraProvider, Grid, GridItem, Center } from "@chakra-ui/react";

function SearchResults(props) {
  return (
    <div>
      {props.searchResults.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
