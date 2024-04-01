import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import Header from "./header/Header";
import WorkGallery from "./gallery/WorkGallery";

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const currentX = (event.pageX / window.innerWidth) * 100;
    const currentY = (event.pageY / window.innerHeight) * 100;
    //  if (currentX > 30 && currentX < 70) {
    setCursorPosition({
      x: (event.pageX / window.innerWidth) * 100,
      y: (event.pageY / window.innerHeight) * 100,
    });
    // }
  };
  const gradientSize = `${Math.min(50, cursorPosition.x)}%`;

  // const spotlightX = Math.min(100 - spotlightRadius, Math.max(0, cursorPosition.x - spotlightRadius));
  // const spotlightY = Math.min(100 - spotlightRadius, Math.max(0, cursorPosition.y - spotlightRadius));

  return (
    <>
      <Container fluid>
        <Row className="top-screen parent-row" onMouseMove={handleMouseMove}>
          <Col xs={0} md={2} className="black-background">
            {/* Left Section */}
          </Col>
          <Col
            md={8}
            xs={12}
            className="image-column background-image-container "
            style={{ overflow: "hidden" }}
          >
            <div className="background-image">
              <Header />
              <div
                className="spotlight"
                style={{
                  backgroundImage: `radial-gradient(circle at ${cursorPosition.x}% ${cursorPosition.y}%, transparent 10px, rgba(1,1,1,1) 600px`,
                  // backgroundImage: `radial-gradient(circle at ${cursorPosition.x}% ${cursorPosition.y}%, transparent 80px, rgba(0,0,0,0.75) ${gradientSize}`,
                }}
              ></div>
            </div>
          </Col>

          <Col md={2} xs={0} className="black-background">
            {/* Right Section */}
          </Col>
        </Row>

        <Row className="lower-screen parent-row">
          <Col md={2} xs={0} className="black-background">
            {/* Left Section */}
          </Col>
          <Col md={8} xs={12} className="black-background">
            <div className="work-gallery">Work gallery</div>
            <WorkGallery />
          </Col>
          <Col md={2} xs={0} className="black-background">
            {/* Right Section */}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
