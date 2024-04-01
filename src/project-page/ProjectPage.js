import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Header from "../header/Header";
import "../App.css";
import workList from "../helper/WorkHelper.js";
import "./ProjectPage.css";

function ProjectPage() {
  const { id } = useParams();

  // Use the id in your component logic
  // const [workItem, setWorkItem] = useState(null);
  // useEffect(() => {
  //   console.log(id);
  //   fetch(`http://localhost:8009/projects/${id}`)
  //     .then((response) => response.json())
  //     .then((json) => setWorkItem(json))
  //     .catch((error) => console.error(error));
  // }, [id]);

  return (
    <>
      <Container
        fluid
        style={{ height: "100vh", backgroundColor: "rgba(17, 24, 37, 255)" }}
      >
        <Row className="lower-screen parent-row">
          <Col md={2} xs={0} className="blue-background">
            {/* Left Section */}
          </Col>
          <Col md={8} xs={12} className="blue-background ">
            <Header type="relative" />
          </Col>

          <Col md={2} xs={0} className="blue-background">
            {/* Right Section */}
          </Col>
        </Row>

        <Row className="top-screen parent-row">
          <Col md={2} xs={0} className="blue-background">
            {/* Left Section */}
          </Col>
          <Col md={8} xs={12} className="blue-background d-flex flex-column">
            <Row>
              <Col xs={6} className="logo" style={{ position: "relative" }}>
                <img src={`${workList[id - 1].thumbnail}`} alt="Logo" />;
              </Col>
              <Col md={4} xs={0}>
                <Row>
                  <div
                    style={{
                      color: "#7F89E2",

                      position: "relative",
                    }}
                  >
                    Project
                  </div>
                </Row>

                <Row>
                  <div className="title" style={{ position: "relative" }}>
                    {workList[id - 1].title}
                  </div>
                </Row>
              </Col>
            </Row>
            <Row style={{ position: "relative" }}>
              <div
                className="description"
                dangerouslySetInnerHTML={{
                  __html: workList[id - 1].description,
                }}
              >
                {/* {workItem && workItem.description} */}
              </div>
            </Row>
          </Col>
          <Col md={2} xs={0} className="blue-background">
            {/* Right Section */}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProjectPage;
