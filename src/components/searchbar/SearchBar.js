import React from "react";

import {
  Input,
  Box,
  InputGroup,
  InputRightElement,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

const SearchBar = () => {
  return (
    <Box>
      <InputGroup>
        <InputRightElement
          children={<Search2Icon justifyItems={"center"} color={"red.200"} />}
        />
        <Input
          placeholder="Search"
          size="lg"
          variant="filled"
          colorScheme="teal"
          justifyContent={"center"}
          padding={5}
          borderRadius={35}
          onAbort={console.log("abort")}
          //   onChange={handleChange}
          // value={search}
        />
      </InputGroup>
      <RadioGroup>
        <Radio> radio </Radio>
        <Radio> radio </Radio>
        <Radio> radio </Radio>
      </RadioGroup>
    </Box>
  );

  // Custon radios buttons https://chakra-ui.com/docs/components/radio
};

export default SearchBar;
