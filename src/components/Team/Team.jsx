import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CoreTeam2k24 from "./CoreTeam2k24";
import WebTeam from "./WebTeam";

const Team = () => {
  const [checked, setChecked] = useState(false);
  const handleClick = () => setChecked(!checked);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };
  const clickAndScroll = () => {
    handleClick();
    scrollToTop();
  };
  return (
    <div className="flex flex-col items-center w-screen bg-[#252b42] pb-5">
      <CoreTeam2k24 />
      <WebTeam />
      <NavLink to="/team2k23">
        <button
          onClick={clickAndScroll}
          type="button"
          className="m-10 border-2 border-white text-white inline-flex justify-center items-center py-3 px-8 xl:py-4 xl:px-10  xl:text-2xl text-center transition-all hover:scale-110 hover:bg-white hover:text-[#252B42]"
        >
          Show 2k23 Team
        </button>
      </NavLink>
    </div>
  );
};

export default Team;
