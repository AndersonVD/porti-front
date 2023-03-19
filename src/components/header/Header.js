import React from "react";
import {
  AlertDialog,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Box,
  Center,
  Flex,
  Heading,
} from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex align={"center"} justify={"-moz-initial"}>
      <Avatar
        size="md"
        name="Anderson"
        src="https://media.licdn.com/dms/image/C4E03AQG9JgtSfXlUxQ/profile-displayphoto-shrink_400_400/0/1622662719465?e=1684972800&v=beta&t=53iY3Uk4cmjma1ctCEr-bet_L_GV5FMaQ1UElPy9V_4"
      />
      <Heading size="md">Meu aplicativo</Heading>
    </Flex>
  );
};

export default Header;
