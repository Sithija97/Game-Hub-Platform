import React from "react";

function DrawerCard({ drawerProps }) {
  return (
    <div
      className="cardamount shadow mb-4"
      style={{
        background:
          "linear-gradient(90deg, rgb(91, 0, 111) 0%, rgb(65, 7, 135) 100%)",
      }}
    >
      <div
        className="card-header py-3 justify-content-between"
        style={{
          background:
            "linear-gradient(90deg, rgb(91, 0, 111) 0%, rgb(65, 7, 135) 100%)",
        }}
      >
        <h5 className="m-0 font-weight-bold text-primary text-light mb-2">
          DRAWER DETAILS
        </h5>

        <span className="font-weight-bold">
          <div
            className="row no-gutters align-items-center"
            style={{ marginBottom: "15px" }}
          >
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-light text-uppercase mb-1">
                {/* Total Sales */}
              </div>
              <div className=" mb-0 font-weight-bold text-light pl-4">
                $ Starting Balance
              </div>
            </div>
            <div className="col-auto">
              <span className=" mb-0 font-weight-bold text-light">
                {drawerProps.value1}
              </span>
            </div>
          </div>
        </span>
        <span className="font-weight-bold">
          <div
            className="row no-gutters align-items-center"
            style={{ marginBottom: "15px" }}
          >
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-light text-uppercase mb-1">
                {/* Cash */}
              </div>
              <div className=" mb-0 font-weight-bold text-light pl-4">
                $ Total Cash Sales
              </div>
            </div>
            <div className="col-auto">
              <span className=" mb-0 font-weight-bold text-light">
                {drawerProps.value2}
              </span>
            </div>
          </div>
        </span>
        <span className="font-weight-bold">
          <div
            className="row no-gutters align-items-center"
            style={{ marginBottom: "15px" }}
          >
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-light text-uppercase mb-1">
                {/* Cash */}
              </div>
              <div className=" mb-0 font-weight-bold text-light pl-4">
                $ Total Expense by Cash
              </div>
            </div>
            <div className="col-auto">
              <span className=" mb-0 font-weight-bold text-light">
                {drawerProps.value3}
              </span>
            </div>
          </div>
        </span>
        <span className="font-weight-bold">
          <div
            className="row no-gutters align-items-center"
            style={{ marginBottom: "15px" }}
          >
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-light text-uppercase mb-1">
                {/* Cash */}
              </div>
              <div className="h3 mb-0 font-weight-bold text-light">
                $ DRAWER BALANCE
              </div>
            </div>
            <div className="col-auto">
              <span className="h3 mb-0 font-weight-bold text-light">
                {drawerProps.value4}
              </span>
            </div>
          </div>
        </span>
      </div>

      <div className="card-body">
        <div className="chart-pie pt-4 pb-2"></div>
        <div className="mt-4 text-center small">
          <span className="mr-2"></span>
          <span className="mr-2"></span>
          <span className="mr-2"></span>
        </div>
      </div>
    </div>
  );
}

export default DrawerCard;
