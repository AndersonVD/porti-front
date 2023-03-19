import React from "react";
import { Avatar, Box, Flex, Spacer } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box>
      <Flex bg="gray.100" p={3} alignitems="center" justify={"space-between"}>
        <Spacer />
        <Avatar
          _hover={{ cursor: "pointer" }}
          onClick={() => {
            alert("clicou");
          }}
          size="md"
          name="Anderson"
          src="https://media.licdn.com/dms/image/C4E03AQG9JgtSfXlUxQ/profile-displayphoto-shrink_400_400/0/1622662719465?e=1684972800&v=beta&t=53iY3Uk4cmjma1ctCEr-bet_L_GV5FMaQ1UElPy9V_4"
        />
      </Flex>
    </Box>
  );
};

export default Header;
