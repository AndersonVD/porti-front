import React, { useState } from "react";
import {
  Input,
  Button,
  Flex,
  Box,
  RadioGroup,
  Radio,
  Image,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchOption, setSearchOption] = useState("all");
  const [results, setResults] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/${searchOption}`);
      setResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const clearData = () => {
    setSearchTerm("");
    setSearchOption("all");
    setResults(null);
  };

  return (
    <Flex flexDirection="column" alignItems="center">
      <Flex>
        <Box flex="1">
          <Input
            placeholder="Buscar"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </Box>
        <RadioGroup
          ml="2"
          onChange={(value) => setSearchOption(value)}
          value={searchOption}
        >
          <Flex direction="row" alignItems="center">
            <Radio value="g1">G1</Radio>
            <Radio value="meli">Mercado Livre</Radio>
            <Radio value="filmes">Filmes</Radio>
          </Flex>
        </RadioGroup>
        <Button ml="2" onClick={handleSearch}>
          Buscar
        </Button>
        <Button ml="2" onClick={clearData}>
          Limpar
        </Button>
      </Flex>
      {results && (
        <Box mt="4">
          <Text fontWeight="bold" mb="2">
            Resultados:
          </Text>
          {/* {results.map((result) => () */}
          <Stack>
            {results.map((result) => (
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant={"outline"}
                key={result.id}
                onClick={() => window.open(result.link)}
                _hover={{ cursor: "pointer" }}
              >
                <Image src={result.image} />
                <CardHeader>{result.title}</CardHeader>
                <CardBody>{result.time_ago}</CardBody>
              </Card>
            ))}
          </Stack>
        </Box>
      )}
    </Flex>
  );
};

export default SearchBar;
