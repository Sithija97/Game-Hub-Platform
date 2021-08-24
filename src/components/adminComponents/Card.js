import React from "react";

function Card({ commonProps }) {
  return (
    <div
      className="cardamount shadow mb-4"
      style={{
        background:
          "linear-gradient(90deg, rgba(98,45,217,1) 0%, rgba(65,7,135,1) 100%)",
      }}
    >
      <div
        className="card-header py-3 justify-content-between"
        style={{
          background:
            "linear-gradient(90deg, rgba(98,45,217,1) 0%, rgba(65,7,135,1) 100%)",
        }}
      >
        <h6 className="m-0 font-weight-bold text-primary text-light mb-2">
          SALES DETAILS
        </h6>

        <span className="font-weight-bold">
          <div
            className="row no-gutters align-items-center"
            style={{ marginBottom: "15px" }}
          >
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-light text-uppercase mb-1"></div>
              <div className=" mb-0 font-weight-bold text-light">
                $ {commonProps.myProp1}
              </div>
            </div>
            <div className="col-auto">
              <span className=" mb-0 font-weight-bold text-light">
                1 000 000.00
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
              <div className="text-xs font-weight-bold text-light text-uppercase mb-1"></div>
              <div className=" mb-0 font-weight-bold text-light">$ CREDIT</div>
            </div>
            <div className="col-auto">
              <span className=" mb-0 font-weight-bold text-light">
                1 000 000.00
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
              <div className="text-xs font-weight-bold text-light text-uppercase mb-1"></div>
              <div className=" mb-0 font-weight-bold text-light">$ CHECK</div>
            </div>
            <div className="col-auto">
              <span className=" mb-0 font-weight-bold text-light">
                1 000 000.00
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
              <div className="h3 mb-0 font-weight-bold text-light">$ TOTAL</div>
            </div>
            <div className="col-auto">
              <span className="h3 mb-0 font-weight-bold text-light">
                1 000 000.00
              </span>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
}

export default Card;
