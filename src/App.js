import axios from "axios";
import React, { useEffect, useState } from "react";
import ClickCounter from "./components/ClickCounter";
import Movie from "./components/Movie";
import "./App.css";
import Movies from "./components/Movies";
import Menu from "./components/Menu";

import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Youtube from "./components/Youtube";
function Home() {
  return <h2>홈 컴포넌트</h2>;
}
function About() {
  return <h2>개발자 소개</h2>;
}
function App(props) {
  return (
    <>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/popular" element={<Movies apiPath="popular" />}></Route>
          <Route
            path="/upcoming"
            element={<Movies apiPath="upcoming" />}
          ></Route>
          <Route
            path="/now_playing"
            element={<Movies apiPath="now_playing" />}
          ></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/ClickCounter" element={<ClickCounter />}></Route>
          <Route path="/youtube" element={<Youtube />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}
export default App;
