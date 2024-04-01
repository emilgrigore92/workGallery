import React, { useState } from "react";
import "./Header.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import HeaderContent from "./HeaderContent";
import CvComponent from "./CvComponent";
function Header({ type }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="header"
      style={{ position: type ? "relative" : "absolute" }}
    >
      {/* <Container fluid>
        <Row>
          <Col xs={3} className="mt-4">
            <div className="d-flex flex-column align-items-center">
              <a class="navbar-brand" href="/">
                <img src="/graphic.png" alt="..." height="50" />
              </a>
              <nav className="navigation navigation-text">
                Your friendly neighborhood developer
              </nav>
            </div>
          </Col>
          <Col xs={3} className="mt-4 ms-5">
            <div className="logo header-title">Services</div>
            <nav className="navigation">
              <ul>
                <li className="mt-2 ms-5">
                  <a href="#">Hybris projects consultation</a>
                </li>
                <li className="mt-2 ms-5">
                  <a href="#">Website development</a>
                </li>
              </ul>
            </nav>
          </Col>
          <Col xs={4} className="mt-4 ms-5">
            <div className="logo header-title">Contact and Info</div>
            <nav className="navigation">
              <ul>
                <li className="mt-2 ms-5">
                  <a href="#">grigore.emil.92@gmail.com</a>
                </li>
                <li className="mt-2 ms-5">
                  <a href="#">CV</a>
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
      </Container> */}

      <Container fluid>
        <Row>
          <Col xs={12} className="mt-4">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex flex-column">
                <a className="navbar-brand" href="/">
                  <img src="/graphic.png" alt="..." height="50" />
                </a>
                <nav className="navigation navigation-text">
                  Your friendly neighborhood developer
                </nav>
              </div>
              <Button
                onClick={toggleCollapse}
                variant="outline-light"
                className="d-block d-lg-none" // Show only on small screens
              >
                {/* Three horizontal lines */}
                <div className="hamburger-icon">
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
              </Button>

              <nav className="navigation d-none d-lg-block">
                <div className="logo header-title">Contact and Info</div>

                <ul>
                  <li className="mt-2 ms-5">
                    <a href="#">grigore.emil.92@gmail.com</a>
                  </li>
                  <li className="mt-2 ms-5">
                    <CvComponent />
                  </li>
                </ul>
              </nav>
            </div>
            {/* <div className={`collapse ${isOpen ? "show" : ""}`}>
              <nav className="navigation mt-3">
                <ul>
                  <li className="mt-2 ms-5">
                    <a href="#">Services</a>
                  </li>
                  <li className="mt-2 ms-5">
                    <a href="#">Contact and Info</a>
                  </li>
                </ul>
              </nav>
            </div> */}
            {isOpen && (
              <div className="d-block d-lg-none">
                <HeaderContent />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
