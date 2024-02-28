import React, { useState, useEffect } from "react";
import ThirdPage from "./thirdPage";

const SecondPage = () => {
  const [time, setTime] = useState(300);
  const [showThirdPage, setShowThirdPage] = useState(false);
  const [totalTimeTaken, setTotalTimeTaken] = useState(5);
  const [selectedValues, setSelectedValues] = useState({
    common_language: "Not Selected",
    num: "Not Selected",
    cout: "Not Selected",
    comment: "Not Selected",
    store: "Not Selected",
  });

  const handleSubmit = (e) => {
    setShowThirdPage(true);
    const totalTimeTaken = 300 - time; // Total time taken in seconds
    // Convert total time taken to minutes:seconds format
    const totalTimeTakenMinutes = Math.floor(totalTimeTaken / 60);
    const totalTimeTakenSeconds = totalTimeTaken % 60;
    // Pass the total time taken as props to ThirdPage component
    setTotalTimeTaken({
      minutes: totalTimeTakenMinutes,
      seconds: totalTimeTakenSeconds,
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        clearTimeout(timer);
        handleSubmit();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedValues({ ...selectedValues, [name]: value });
  };

  return (
    <div>
      {!showThirdPage && (
        <div>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: 'url("question.jpg")',
              backgroundSize: "cover",
              zIndex: -1,
            }}
          ></div>
          <h3 className="font-bold text-center text-xl">
            Given time is{" "}
            <span className="text-blue-900">
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </span>{" "}
            to attempt all questions otherwise selected answers will be
            submitted automatically
          </h3>
          <div className="mt-5 ml-8">
            <form onSubmit={handleSubmit}>
              <div className="text-2xl">
                <p>
                  1. Which programming language is most widely used in the world
                </p>
                <input
                  type="radio"
                  id="html"
                  name="common_language"
                  value="HTML"
                  onChange={handleInputChange}
                />{" "}
                <label htmlFor="html">HTML</label>
                <br />
                <input
                  type="radio"
                  id="css"
                  name="common_language"
                  value="CSS"
                  onChange={handleInputChange}
                />{" "}
                <label for="css">CSS</label>
                <br />
                <input
                  type="radio"
                  id="javascript"
                  name="common_language"
                  value="JavaScript"
                  onChange={handleInputChange}
                />{" "}
                <label for="javascript">JavaScript</label>
                <br />
                <input
                  type="radio"
                  id="python"
                  name="common_language"
                  value="Python"
                  onChange={handleInputChange}
                />{" "}
                <label for="python">Python</label>
                <br />
                <br />
                <p>2. What is the result of the following expression? 10 % 3</p>
                <input
                  type="radio"
                  id="num7"
                  name="num"
                  value="3"
                  onChange={handleInputChange}
                />{" "}
                <label for="num7">3</label>
                <br />
                <input
                  type="radio"
                  id="num8"
                  name="num"
                  value="1"
                  onChange={handleInputChange}
                />{" "}
                <label for="num8">1</label>
                <br />
                <input
                  type="radio"
                  id="num10"
                  name="num"
                  value="0"
                  onChange={handleInputChange}
                />{" "}
                <label for="num10">0</label>
                <br />
                <input
                  type="radio"
                  id="num6"
                  name="num"
                  value="2"
                  onChange={handleInputChange}
                />{" "}
                <label for="num6">2</label>
                <br />
                <br />
                <p>3. What is the purpose of the cout statement in C++?</p>
                <input
                  type="radio"
                  id="output"
                  name="cout"
                  value="To display output to the console"
                  onChange={handleInputChange}
                />{" "}
                <label for="outout">To display output to the console</label>
                <br />
                <input
                  type="radio"
                  id="input"
                  name="cout"
                  value="To read input from the user"
                  onChange={handleInputChange}
                />{" "}
                <label for="input">To read input from the user</label>
                <br />
                <input
                  type="radio"
                  id="declare"
                  name="cout"
                  value="To declare a constant"
                  onChange={handleInputChange}
                />{" "}
                <label for="declare">To declare a constant</label>
                <br />
                <input
                  type="radio"
                  id="perform"
                  name="cout"
                  value="To perform mathematical calculations"
                  onChange={handleInputChange}
                />{" "}
                <label for="perform">
                  To perform mathematical calculations
                </label>
                <br />
                <br />
                <p>4. Which symbol is used for a single-line comment in C++?</p>
                <input
                  type="radio"
                  id="slash"
                  name="comment"
                  value="//"
                  onChange={handleInputChange}
                />{" "}
                <label for="slash"> // </label>
                <br />
                <input
                  type="radio"
                  id="astersik"
                  name="comment"
                  value="/*"
                  onChange={handleInputChange}
                />{" "}
                <label for="astersik"> /* </label>
                <br />
                <input
                  type="radio"
                  id="hash"
                  name="comment"
                  value="#"
                  onChange={handleInputChange}
                />{" "}
                <label for="hash"> # </label>
                <br />
                <input
                  type="radio"
                  id="sign"
                  name="comment"
                  value="--"
                  onChange={handleInputChange}
                />{" "}
                <label for="sign"> -- </label>
                <br />
                <br />
                <p>5. Which data type is used to store whole numbers in C++?</p>
                <input
                  type="radio"
                  id="float"
                  name="store"
                  value="Float"
                  onChange={handleInputChange}
                />{" "}
                <label for="float">Float</label>
                <br />
                <input
                  type="radio"
                  id="char"
                  name="store"
                  value="Char"
                  onChange={handleInputChange}
                />{" "}
                <label for="char">Char</label>
                <br />
                <input
                  type="radio"
                  id="int"
                  name="store"
                  value="Int"
                  onChange={handleInputChange}
                />{" "}
                <label for="int">Int</label>
                <br />
                <input
                  type="radio"
                  id="double"
                  name="store"
                  value="Double"
                  onChange={handleInputChange}
                />{" "}
                <label for="double">Double</label>
                <br />
                <br />
                {/* Add similar radio inputs for other questions */}
              </div>
              <button
                type="submit"
                className="rounded-lg bg-blue-500 text-2xl w-40 pb-3 pt-3 text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      {showThirdPage && (
        <ThirdPage
          selectedValues={selectedValues}
          totalTimeTaken={totalTimeTaken}
        />
      )}
    </div>
  );
};

export default SecondPage;
