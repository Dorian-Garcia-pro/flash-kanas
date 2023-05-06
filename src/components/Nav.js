import React from "react";
import "./Nav.scss";
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const myRef = useRef(null);
  const location = useLocation();

  const handleClickOutside = (event) => {
    if (myRef.current && !myRef.current.contains(event.target)) {
      setOpenNav(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const routes = [
    { name: "Kanas", route: "/kanas" },
    { name: "Quizs", route: "/quiz" },
    /*     { name: "Quiz Daz", route: "/quiz/daz" }, */
    { name: "Histoires", route: "/histoires" },
    { name: "Grammaire", route: "/grammaire" },
  ];

  return (
    <>
      <div id="navMenu">
        <img
          src="/assets/icons/menu.svg"
          alt="menuburger"
          onClick={() => setOpenNav((prev) => !prev)}
        />
        {openNav ? (
          <nav ref={myRef} id="drawer">
            <ul>
              {routes.map((route, index) => (
                <li key={route.route}>
                  <Link to={route.route}>{route.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
      <div id="navMenuDesktop">
        <nav id="drawerDesktop">
          <ul>
            {routes.map((route, index) => (
              <li key={route.route}>
                <Link
                  to={route.route}
                  className={location.pathname === route.route ? "active" : ""}
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Nav;
