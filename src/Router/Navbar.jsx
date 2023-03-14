import { Box, Image, useColorMode, Button, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { BsSunFill, BsMoonFill, } from 'react-icons/bs';
import logo from '../images/logo.png';
import './Navbar.css'

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  console.log(colorMode)

  return <>
    <Box w='100%' display='flex' px={{ sm: '10px', lg: '30px' }} py={{ sm: '10px' }} justifyContent='space-between' alignItems='center'>
      <NavLink to='/'>
        <Box display="flex" alignItems="center" gap='10px'>
          <Image width={{ sm: "50px" }} objectFit={'cover'} src={logo} />
          <p style={{
            fontWeight: "bold"
          }}
            className="logotxt"
          >Z O S T E L</p>
        </Box>
      </NavLink>
      <Box display={'flex'}>
        <Box display={{ base: 'none', md: 'flex' }} className='navlinks' alignItems='center'>
          <Text mx={2}>
            <NavLink to='/destination'>
              Destinations
            </NavLink>
          </Text>
          <Text mx={2}>
            <NavLink >
              Zostel
            </NavLink>
          </Text>
          <Text mx={2}>Zostel Homes</Text>
          <Text mx={2}>Zostel Plus</Text>
          <Text mx={2}>Franchise</Text>
          <Text mx={2}>Join us</Text>
          <Text mx={2}>Blog</Text>
        </Box>
        <Box>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <BsMoonFill /> : <BsSunFill fontSize={'1.4rem'} />}
          </Button>
        </Box>
      </Box>
    </Box>
  </>
}

export default Navbar;