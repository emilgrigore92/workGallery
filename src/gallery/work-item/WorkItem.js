import React from "react";
import "./WorkItem.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
function WorkItem({ title, type, id, thumbnail }) {
  return (
    <>
      <Link to={`/projects/${id}`} className="grid-item">
        <Row
          className="upper-item"
          style={{
            backgroundImage: `url(${thumbnail})`,
          }}
        ></Row>
        <Row className="lower-item">
          <div className="work-item-description">{title}</div>
          <div className="work-item-heading">{type}</div>
        </Row>
      </Link>
    </>
  );
}
export default WorkItem;
