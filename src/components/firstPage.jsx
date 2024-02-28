import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./firstpage.css"; 

function FirstPage() {
  return (
    <>
      <div className="btn-1">
        <div
          className="background-image"
          style={{
            backgroundImage: 'url("exam.webp")',
          }}
        ></div>
        <NavLink to="/second">
          <button className="start-button">Start</button>
          <div className="line"></div>
        </NavLink>
      </div>
    </>
  );
}

export default FirstPage;
