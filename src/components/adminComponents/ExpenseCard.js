import React from "react";

function ExpenseCard({ expenseProps }) {
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
        <h5 className="m-0 font-weight-bold text-primary text-light mb-2">
          EXPENSE DETAILS
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
              <div className=" mb-0 font-weight-bold text-light pl-4">$ Cash</div>
            </div>
            <div className="col-auto">
              <span className=" mb-0 font-weight-bold text-light">
                {expenseProps.value1}
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
              <div className=" mb-0 font-weight-bold text-light pl-4">$ Credit</div>
            </div>
            <div className="col-auto">
              <span className=" mb-0 font-weight-bold text-light">
                {expenseProps.value2}
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
              <div className=" mb-0 font-weight-bold text-light pl-4">$ Check</div>
            </div>
            <div className="col-auto">
              <span className=" mb-0 font-weight-bold text-light">
                {expenseProps.value3}
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
                {expenseProps.value4}
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

export default ExpenseCard;
