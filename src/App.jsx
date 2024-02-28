import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import FirstPage from "./components/firstPage";
import SecondPage from "./components/secondPage";
import ThirdPage from "./components/thirdPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/third" element={<ThirdPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
