import React from "react";
import "./HeaderContent.css";
import CvComponent from "./CvComponent";
function HeaderContent() {
  return (
    <nav className="navigation header-content-background ">
      <div className="logo header-title mt-4">Contact and Info</div>
      <ul>
        <li className="mt-2 ms-5">
          <a href="#">grigore.emil.92@gmail.com</a>
        </li>
        <li className="mt-2 ms-5">
          <CvComponent />
        </li>
      </ul>
    </nav>
  );
}

export default HeaderContent;
