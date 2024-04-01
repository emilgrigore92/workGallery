import React, { useEffect, useState } from "react";
import "./WorkGallery.css";
import WorkItem from "./work-item/WorkItem";
import workList from "../helper/WorkHelper.js";
function WorkGallery() {
  // useEffect(() => {
  //   fetch("http://localhost:8009/projects")
  //     .then((response) => response.json())
  //     .then((json) => setWorkItems(json))
  //     .catch((error) => console.error(error));
  // }, []);
  return (
    <div className="grid-container">
      {workList.map((item, index) => (
        <WorkItem
          title={item.title}
          thumbnail={item.thumbnail}
          type={item.type}
          id={item.projectId}
          key={index}
        ></WorkItem>
      ))}
    </div>
  );
}

export default WorkGallery;
