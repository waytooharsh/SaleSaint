import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import React from "react";
import logo40 from "./assets/images/logo40.png";
function Navigation() {
  const navStyle = {
    width: "98%",
    height: "44px",
    margin: "5px auto",
    borderRadius: "10px",
    boxShadow:
      "1px 1px 20px rgba(255,255,255,0.4) inset, 5px 5px 10px rgba(0,0,0,0.5)",
  };

  return (
    <>
      <Navbar bg="primary" variant="dark" style={navStyle}>
        <Container
          style={{
            margin: 2,
          }}
        >
          <Nav className="me-auto" style={{ margin: "auto" }}>
            <Image src={logo40} alt="logo" height="40"></Image>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
