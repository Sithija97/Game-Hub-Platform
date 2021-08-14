import React from "react";

function PricingTable() {
  return (
    <>
      <div className="container">
        <div className="row flex-items-xs-middle flex-items-xs-center">
          <div className="col-xs-12 col-lg-4 pb-4">
            <div className="card text-xs-center">
              <div className="card-header">
                <h3 className="display-2">
                  <span className="currency">$</span>19
                  <span className="period">/month</span>
                </h3>
              </div>
              <div className="card-block text-center">
                <h4 className="card-title">Basic Plan</h4>
                <ul className="list-group">
                  <li className="list-group-item">Ultimate Features</li>
                  <li className="list-group-item">Responsive Ready</li>
                  <li className="list-group-item">Visual Composer Included</li>
                  <li className="list-group-item">24/7 Support System</li>
                </ul>
                <a href="#" className="btn btn-gradient mt-2">
                  Choose Plan
                </a>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-lg-4">
            <div className="card text-xs-center">
              <div className="card-header">
                <h3 className="display-2">
                  <span className="currency">$</span>29
                  <span className="period">/month</span>
                </h3>
              </div>
              <div className="card-block text-center">
                <h4 className="card-title">Regular Plan</h4>
                <ul className="list-group">
                  <li className="list-group-item">Ultimate Features</li>
                  <li className="list-group-item">Responsive Ready</li>
                  <li className="list-group-item">Visual Composer Included</li>
                  <li className="list-group-item">24/7 Support System</li>
                </ul>
                <a href="#" className="btn btn-gradient mt-2">
                  Choose Plan
                </a>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-lg-4">
            <div className="card text-xs-center">
              <div className="card-header">
                <h3 className="display-2">
                  <span className="currency">$</span>39
                  <span className="period">/month</span>
                </h3>
              </div>
              <div className="card-block text-center">
                <h4 className="card-title">Premium Plan</h4>
                <ul className="list-group">
                  <li className="list-group-item">Ultimate Features</li>
                  <li className="list-group-item">Responsive Ready</li>
                  <li className="list-group-item">Visual Composer Included</li>
                  <li className="list-group-item">24/7 Support System</li>
                </ul>
                <a href="#" className="btn btn-gradient mt-2">
                  Choose Plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PricingTable;
