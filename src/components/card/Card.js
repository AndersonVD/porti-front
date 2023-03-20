import React from "react";
import {
  Image,
  Card,
  Stack,
  CardBody,
  CardFooter,
  Button,
  Text,
  Heading,
} from "@chakra-ui/react";
import ApiResults from "../../services/Api";

// create a function that returns a component for eact data in the array from the api
const CardItem = () => {
  const data = ApiResults();
  console.log(data);
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={data.image}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="md">The perfect latte</Heading>

          <Text py="2">
            Caffè latte is a coffee beverage of Italian origin made with
            espresso and steamed milk.
          </Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="blue">
            Buy Latte
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default CardItem;
