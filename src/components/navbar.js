import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Sitemetadata from "./sitemetadata";

export default () => (
  <div>
    <Sitemetadata />
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">ZAIRZA</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/projects">PROJECTS</Nav.Link>
          <Nav.Link href="/team">MEET THE TEAM</Nav.Link>
          <Nav.Link href="/about">WHAT WE DO</Nav.Link>
          <Nav.Link href="/alumni">ALUMNI</Nav.Link>
          <Nav.Link href="/faq">FAQs</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);
