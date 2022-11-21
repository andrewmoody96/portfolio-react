import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-col">
      <h1 className="text-center">Andrew Moody</h1>
      <nav className="flex flex-row justify-center">
        <button className="m-2 rounded-md bg-red-300">
          <Link className="p-2" to={"/"}>
            Home
          </Link>
        </button>
        <button className="m-2 rounded-md bg-red-300">
          <Link className="p-2" to={"/projects"}>
            Projects
          </Link>
        </button>
        <button className="m-2 rounded-md bg-red-300">
          <Link className="p-2" to={"/contact"}>
            Contact
          </Link>
        </button>
        <button className="m-2 rounded-md bg-red-300">
          <Link className="p-2" to={"/about"}>
            About Me
          </Link>
        </button>
      </nav>
    </header>
  );
}

export default Header;
