import React from "react";
import { useState } from "react";
import "./Admin.scss";
import "firebase/compat/firestore";
import AdminAddCollections from "../components/AdminAddCollections";
import AdminEditCollections from "../components/AdminEditCollections";
function Admin() {
  return (
    <div id="adminContainer">
      {/*      <AdminAddCollections /> */}
      <AdminEditCollections />
    </div>
  );
}

export default Admin;
