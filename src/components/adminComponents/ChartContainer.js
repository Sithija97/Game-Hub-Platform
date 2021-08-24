import React from "react";
import DataTable from "./DataTable";
import DrawerCard from "./DrawerCard";
import ExpenseCard from "./ExpenseCard";
import MultiAxisLine from "./MultiAxisLine";
import SalesCard from "./SalesCard";

function ChartContainer() {
  const salesProps = {
    value1: "21,230.00",
    value2: "1,000,000.00",
    value3: "1,000,000.00",
    value4: "12.900,000.00",
  };
  const expenseProps = {
    value1: "26,230.00",
    value2: "1,000,000.00",
    value3: "1,000,000.00",
    value4: "8.800,000.00",
  };
  const drawerProps = {
    value1: "216,230.00",
    value2: "2,000,000.00",
    value3: "6,000,000.00",
    value4: "8.800,000.00",
  };
  return (
    <>
      <div
        className="row"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div className="col-xl-4 col-lg-5 ">
          <h1 className="h4 mb-4 text-gray-900 font-weight-bold ">
            Whats's Happening Today
          </h1>
          <SalesCard salesProps={salesProps} />
        </div>

        <div className="col-xl-4 col-lg-5 ">
          <div className="mb-5 "></div>
          <ExpenseCard expenseProps={expenseProps} />
        </div>
      </div>
      <div
        className="row"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div className="col-xl-7 col-lg-6">
          <DrawerCard drawerProps={drawerProps} />
        </div>
      </div>

      <div
        className="row"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div className="col-xl-8 col-lg-6">
          <h1 className="h4 mb-4 text-gray-900 font-weight-bold pt-4 ">
            SALES SUMMARY
          </h1>

          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between"></div>

            <div className="card-body">
              <div
                className="chart-area"
                style={{ bottom: "65px", width: "80%", height: "80%" }}
              >
                <MultiAxisLine />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="row"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div className="col-xl-8 col-lg-7">
          <h1 className="h4 mb-4 text-gray-900 font-weight-bold ">WEAK STOCK</h1>
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between"></div>

            <div className="card-body" style={{ overflow: "hidden" }}>
              <div className="chart-area" style={{ bottom: "20px", width: "80%" }}>
                <div className="table-responsive">
                  <DataTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChartContainer;
