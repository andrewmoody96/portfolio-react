import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-col">
      <h1 className="text-center text-[#F7D08A] text-3xl font-audiowide">Andrew Moody</h1>
      <nav className="flex flex-row justify-center">
        <button className="m-2 rounded-md bg-[#6EA4BF]">
          <Link className="p-2 text-[#F2F3D9]" to={"/"}>
            Home
          </Link>
        </button>
        <button className="m-2 rounded-md bg-[#6EA4BF]">
          <Link className="p-2 text-[#F2F3D9]" to={"/projects"}>
            Projects
          </Link>
        </button>
        <button className="m-2 rounded-md bg-[#6EA4BF]">
          <Link className="p-2 text-[#F2F3D9]" to={"/contact"}>
            Contact
          </Link>
        </button>
        <button className="m-2 rounded-md bg-[#6EA4BF]">
          <Link className="p-2 text-[#F2F3D9]" to={"/about"}>
            About Me
          </Link>
        </button>
      </nav>
    </header>
  );
}

export default Header;
