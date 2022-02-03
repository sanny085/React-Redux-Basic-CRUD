import * as React from 'react';
import { Container, Navbar } from 'react-bootstrap';

 
const Header: React.FC<any> = () => {
    return (
        <Navbar fixed="top" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    Daily Notes
                </Navbar.Brand>
            </Container>
      </Navbar>
  );
};

export default Header;
