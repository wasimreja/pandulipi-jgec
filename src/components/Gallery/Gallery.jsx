import React, { useState } from "react";
import { Routes, NavLink, Route } from "react-router-dom";
import Album from "./Album";
import "./style.css";

const Gallery = () => {
  return (
    <div id="canvas" className="min-h-screen">
      <h1 className="text-center text-5xl p-10 text-[#fff]">Events Gallery</h1>
      <div
        id="navigation"
        className="flex flex-wrap gap-20  justify-center mt-3"
      >
      </div>
      <Routes>
        <Route exact path="/" element={<Album />} />
      </Routes>
      <div className="p-5" />
    </div>
  );
};

export default Gallery;
