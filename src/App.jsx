import React from "react";
import Logo from "./images/logos/Logo.svg";
import Search from "./images/icons/search.svg";
import Bell from "./images/icons/bell.svg";
import { NavLink, Route, Routes } from "react-router-dom";
import { Home, MovieShows, Substraction, Support } from "./pages";

const App = () => {
  return (
    <div className="bg-black">
      <div className=" container mx-auto bg-[#1A1A1A]">
        <div className=" bg-opacity-15  w-full  bg-transparent backdrop-blur-md">
          <header className="flex justify-between">
            <NavLink className="flex items-center pl-32" to={"/home"}>
              <img src={Logo} alt="" />{" "}
            </NavLink>
            <div className="buttons m-3 hidden space-x-1 rounded-lg border-black bg-black p-2 md:flex">
              <button className="  font-manrope leading-1.5 box-border rounded-lg border border-black bg-black px-5 py-[10px] text-left text-base font-medium tracking-normal text-white hover:bg-[#1A1A1A] focus:bg-[#1A1A1A]">
                <NavLink to={"/home"}>Home</NavLink>
              </button>
              <button className="  font-manrope leading-1.5 box-border rounded-lg border border-black bg-black px-5 py-[10px] text-left text-base font-medium tracking-normal text-white hover:bg-[#1A1A1A] focus:bg-[#1A1A1A]">
                <NavLink to={"/movie"}>Movie & Shows</NavLink>
              </button>
              <button className="  font-manrope leading-1.5 box-border rounded-lg border border-black bg-black px-5 py-[10px] text-left text-base font-medium tracking-normal text-white hover:bg-[#1A1A1A] focus:bg-[#1A1A1A]">
                <NavLink to={"/support"}>Support</NavLink>
              </button>
              <button className="  font-manrope leading-1.5 box-border rounded-lg border border-black bg-black px-5 py-[10px] text-left text-base font-medium tracking-normal text-white hover:bg-[#1A1A1A] focus:bg-[#1A1A1A]">
                <NavLink to={"/substraction"}>Substraction</NavLink>
              </button>
            </div>
            <div className="notification flex space-x-7 pr-32">
              <img src={Search} alt="" />
              <img src={Bell} alt="" />
            </div>
          </header>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/movie" element={<MovieShows />} />
            <Route path="/support" element={<Support />} />
            <Route path="/substraction" element={<Substraction />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
