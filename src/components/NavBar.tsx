import {
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

import { User } from '../types/user';

const NavBar: React.FC<{ user?: User }> = ({ user }) => {
  if (user) {
    return (
      <VStack alignItems="flex-start" spacing="4" pt="10px" w="10%">
        <Menu>
          <MenuButton textTransform="capitalize"> {user.username}</MenuButton>
          <MenuList>
            <MenuItem>Edit Profile</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
        {user.isAdmin && <Flex>Run Searches</Flex>}
      </VStack>
    );
  } else {
    return (
      <VStack>
        <Flex>Signup</Flex>
        <Flex>Login</Flex>
      </VStack>
    );
  }
};
export default NavBar;
