import React from "react";
import "./thirdpage.css"; // Import CSS file for animations

const ThirdPage = ({ selectedValues, totalTimeTaken }) => {
  return (
    <div className="third-page-container">
      <div
        className="background-image"
        style={{
          backgroundImage: 'url("joy.jpg")',
        }}
      ></div>
      <div className="content-container">
        <h2 className="text-5xl text-center mt-10 font-extrabold">
          Congratulations you have completed the test in{" "}
          {totalTimeTaken.minutes} minutes {totalTimeTaken.seconds} seconds 😍
        </h2>
        <br />
        <br />
        <div className="h-[800px] w-1/2 m-auto text-2xl">
          <h5 className="font-bold">Options you Choose</h5>
          <br />
          <p className="text-left">
            {" "}
            1. Which programming language is most widely used in the world
          </p>
          <h5 className="ml-9">{selectedValues.common_language}</h5>
          <br />
          <br />
          <p className="text-left">
            2. What is the result of the following expression? 10 % 3
          </p>
          <h5 className="ml-9">{selectedValues.num}</h5>
          <br />
          <br />
          <p className="text-left">
            3. What is the purpose of the cout statement in C++?
          </p>
          <h5 className="ml-9">{selectedValues.cout}</h5>
          <br />
          <br />
          <p className="text-left">
            4. Which symbol is used for a single-line comment in C++?
          </p>
          <h5 className="ml-9">{selectedValues.comment}</h5>
          <br />
          <br />
          <p className="text-left">
            5. Which data type is used to store whole numbers in C++?
          </p>
          <h5 className="ml-9">{selectedValues.store}</h5>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
