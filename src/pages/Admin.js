import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Admin.scss";
import "firebase/compat/firestore";
import AdminAddCollections from "../components/AdminAddCollections";
import AdminEditCollections from "../components/AdminEditCollections";
function Admin() {
  const location = useLocation();
  const routes = [
    { name: "Créer", route: "/admin/creer" },
    { name: "Modifier", route: "/admin/modifier" },
  ];

  const pageAdmin = () => {
    switch (location.pathname) {
      case "/admin/creer":
        return <AdminAddCollections />;

      case "/admin/modifier":
        return <AdminEditCollections />;

      default:
        return <AdminAddCollections />;
    }
  };

  return (
    <div id="adminMainContainer">
      <div id="navMenuDesktopAdmin">
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

      {pageAdmin()}
    </div>
  );
}

export default Admin;
