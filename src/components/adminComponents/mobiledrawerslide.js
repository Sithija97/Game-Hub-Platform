import React from "react";

function MobileleftSlider() {
  return (
    <>
      <ul className="mr-3">
        <li>
          {" "}
          <div className="mx-4 mr-5">
            <a href="index.html">
              <img src="assets/img/logo.png" alt="" className="img-fluid" />
            </a>
          </div>
        </li>
        <hr className="sidebar-divider my-0 mt-2" />
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseUser"
            aria-expanded="true"
            aria-controls="collapseUser"
          >
            <img
              className="img-profile rounded-circle mr-2"
              src="img/undraw_profile.svg"
              style={{ height: "40px" }}
            />

            <span className="font-weight-bold">
              <text className="text-truncate">Keerthanan</text>
            </span>
          </a>
          <div
            id="collapseUser"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Sales Details:</h6>
              <a className="dropdown-item" href="#">
                <i className="fas fa-user fa-sm fa-fw mr-5 text-gray-700"></i>
                <text className="text-gray-700">Profile</text>
              </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-cogs fa-sm fa-fw mr-5 text-gray-700"></i>
                <text className="text-gray-700">Settings</text>
              </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-list fa-sm fa-fw mr-5 text-gray-700"></i>
                <text className="text-gray-700">Activity Log</text>
              </a>
              <div className="dropdown-divider"></div>
              <a
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#logoutModal"
              >
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-5 text-gray-700"></i>
                <text className="text-gray-700">Logout</text>
              </a>
            </div>
          </div>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Informations</div>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            // data-toggle="collapse"
            // data-target="#collapseTwo"
            // aria-expanded="true"
            // aria-controls="collapseTwo"
          >
            <i className="fas fa-laugh-wink"></i>

            <span className="font-weight-bold">
              <text className="text-truncate ml-2">PORTFOLIO</text>
            </span>
          </a>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Components:</h6>
              <a className="collapse-item" href="buttons.html">
                Buttons
              </a>
              <a className="collapse-item" href="cards.html">
                Cards
              </a>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i className="fas fa-fw fa-table"></i>

            <span className="font-weight-bold">
              <text className="text-truncate ml-2">INVENTORY</text>
            </span>
          </a>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Inventories:</h6>
              <a
                className="collapse-item font-weight-bold text-dark"
                href="utilities-color.html"
              >
                Stocks
              </a>
            </div>
          </div>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">SUMMARY</div>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            // href="#"
            data-toggle="collapse"
            data-target="#collapseSales"
            aria-expanded="true"
            aria-controls="collapseSales"
          >
            <i className="fas fa-fw fa-folder"></i>

            <span className="font-weight-bold">
              <text className="text-truncate ml-2">SALES</text>
            </span>
          </a>
          <div
            id="collapseSales"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Sales Details:</h6>
              <a
                className="collapse-item font-weight-bold text-dark"
                href="login.html"
              >
                Details
              </a>
              <a
                className="collapse-item font-weight-bold text-dark"
                href="register.html"
              >
                Credit Sales
              </a>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            // href="#"
            data-toggle="collapse"
            data-target="#collapsePurchase"
            aria-expanded="true"
            aria-controls="collapsePurchase"
          >
            <i className="fas fa-fw fa-chart-area"></i>

            <span className="font-weight-bold">
              <text className="text-truncate ml-2">PURCHASE</text>
            </span>
          </a>
          <div
            id="collapsePurchase"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Purchase Details:</h6>
              <a
                className="collapse-item font-weight-bold text-dark"
                href="login.html"
              >
                Details
              </a>
              <a
                className="collapse-item font-weight-bold text-dark"
                href="register.html"
              >
                History
              </a>
              <div className="collapse-divider"></div>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseAcc"
            aria-expanded="true"
            aria-controls="collapseAcc"
          >
            <i className="fas fa-donate "></i>

            <span className="font-weight-bold">
              <text className="text-truncate ml-2">ACCOUNTING</text>
            </span>
          </a>
          <div
            id="collapseAcc"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Accounts Details:</h6>
              <a
                className="collapse-item font-weight-bold text-dark"
                href="login.html"
              >
                Sales
              </a>
              <a
                className="collapse-item font-weight-bold text-dark"
                href="register.html"
              >
                Purchase
              </a>
              <a
                className="collapse-item font-weight-bold text-dark"
                href="forgot-password.html"
              >
                Other Reports
              </a>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsestk"
            aria-expanded="true"
            aria-controls="collapsestk"
          >
            <i className="fas fa-flag"></i>

            <span className="font-weight-bold">
              <text className="text-truncate ml-2">STAKEHOLDERS</text>
            </span>
          </a>
          <div
            id="collapsestk"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Monitize Informations:</h6>
              <a
                className="collapse-item font-weight-bold text-dark"
                href="login.html"
              >
                Suppliers
              </a>
              <a
                className="collapse-item font-weight-bold text-dark"
                href="register.html"
              >
                Customers
              </a>
              <a
                className="collapse-item font-weight-bold text-dark"
                href="forgot-password.html"
              >
                Collaborators
              </a>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            // data-toggle="collapse"
            // data-target="#collapseProtree"
            // aria-expanded="true"
            // aria-controls="collapseProtree"
          >
            <i className="fas fa-info-circle"></i>

            <span className="font-weight-bold">
              <text className="text-truncate ml-2">PRODUCT TREE</text>
            </span>
          </a>
          <div
            id="collapseProtree"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Login Screens:</h6>
              <a className="collapse-item" href="login.html">
                Login
              </a>
              <a className="collapse-item" href="register.html">
                Register
              </a>
              <a className="collapse-item" href="forgot-password.html">
                Forgot Password
              </a>
              <div className="collapse-divider"></div>
              <h6 className="collapse-header">Other Pages:</h6>
              <a className="collapse-item" href="404.html">
                404 Page
              </a>
              <a className="collapse-item" href="blank.html">
                Blank Page
              </a>
            </div>
          </div>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
    </>
  );
}

export default MobileleftSlider;
