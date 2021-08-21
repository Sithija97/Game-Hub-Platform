import React from "react";
import CardsSection from "../adminComponents/CardsSection";
import ChartContainer from "../adminComponents/ChartContainer";
import NavBar from "../adminComponents/NavBar";
import Slider from "../adminComponents/Slider";

function Admin() {
  return (
    <>
      <body id="page-top">
        <div id="wrapper">
          <Slider />
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <NavBar />
              <div
                class="container-fluid"
                style={{
                  // background: "blue",
                  // maxHeight: "44rem",
                  height:"100vh",
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
