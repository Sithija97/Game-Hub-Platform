import React from "react";
import ChartContainer from "../adminComponents/ChartContainer";
import NavBar from "../adminComponents/NavBar";
import Slider from "../adminComponents/Slider";
import MobileleftSlider from "../adminComponents/mobiledrawerslide";
function Admin() {
  return (
    <>
      <body>
        <input type="checkbox" id="drawer-toggle" name="drawer-toggle" />
        <label
          htmlFor="drawer-toggle"
          id="drawer-toggle-label"
          style={{ top: "30px", marginLeft: "30px" }}
        ></label>
        <nav id="drawer">
          <MobileleftSlider />
        </nav>
        <div id="page-content">
          <div id="wrapper">
            <Slider />
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <NavBar />
                <div
                  className="container-fluid"
                  style={{
                    height: "100vh",
                    overflow: "scroll",
                  }}
                >
                  <ChartContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
      <body id="page-top">
        <div id="wrapper">
          <Slider />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <NavBar />
              <div
                className="container-fluid"
                style={{
                  height: "100vh",
                  overflow: "scroll",
                }}
              >
                <ChartContainer />
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Admin;
