import { Button, Container, Navbar, Nav, Stack, Row } from "react-bootstrap";
import Search from "../search";
import { Link, Route, Router, Routes } from "react-router-dom";
import Login from "./login";
import Home from "./Home";

import logo from "../../img/logo.png"

const Header = () => {
  return (
    <Navbar className="bs-primary-bg-subtle">
      <Container className=" shadow-sm p-0 rounded" fluid>
        <Row className="col-2 p-0">
          <Navbar.Brand className="">
            <img className="d-block w-50 m-auto" src={logo}/>
          </Navbar.Brand>
        </Row>
        <Row className="col-7">
          <Search />
        </Row>

        <Row className="">
          <Nav>
            <Stack direction="horizontal" gap={1}>
              <Nav.Link
                className="bs-primary-border-subtle"
                as={Link}
                to="/login"
              >
                <Button variant="outline-success">Đăng nhập</Button>
              </Nav.Link>
              <Nav.Link as={Link} to="/signup">
                <Button>Đăng ký</Button>
              </Nav.Link>
            </Stack>
          </Nav>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;
