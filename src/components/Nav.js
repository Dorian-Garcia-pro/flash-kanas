import React from "react";
import "./Nav.scss";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [openNav, setopenNav] = useState(false);
  const myRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (myRef.current && !myRef.current.contains(event.target)) {
      setopenNav(false);
    }
  };

  return (
    <div ref={myRef} id="navMenu">
      <img
        src="/assets/icons/menu.svg"
        alt="menuburger"
        onClick={() => setopenNav((prev) => !prev)}
      />
      {openNav ? (
        <nav id="drawer">
          <ul>
            <li>
              <Link to="/kanas">Kanas</Link>
            </li>
            <li>
              <Link to="/quiz">Quiz</Link>
            </li>
            <li>
              <Link to="/histoires">Histoires</Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
}

export default Nav;
