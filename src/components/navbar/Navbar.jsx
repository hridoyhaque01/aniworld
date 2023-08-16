import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full p-6 z-[99999]">
      <div className="max-w-[1200px] mx-auto">
        <nav className="flex items-center justify-between">
          <div className="uppercase">aniworld</div>
          <div>
            <div>
              <ul className="flex items-center gap-10 navbar">
                <li>
                  <NavLink to="/" className="hover:text-yellow">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/movies" className="hover:text-yellow">
                    Movies
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/series" className="hover:text-yellow">
                    Series
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/saved" className="hover:text-yellow">
                    Saved
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
