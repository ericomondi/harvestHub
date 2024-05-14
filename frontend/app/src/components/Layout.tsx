import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footbar";
import "../styles/style.css";
import "../styles/bootstrap.min.css";
import "../styles/lightbox.min.css"
import "../styles/owl.carousel.min.css"

import "../scripts/easing.min.js"
import "../scripts/waypoints.min.js";
// import "../scripts/lightbox.min.js";
import "../scripts/owl.carousel.min.js";
import "../scripts/main.js";



function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
