import React from "react";

function Header() {
  return (
    <>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex justify-content-between">
          <div className="logo">
            <a href="index.html">
              <img src="assets/img/logo.png" alt="" className="img-fluid" />
            </a>
          </div>

          <div id="leftalign" className="leftalign">
            <nav id="navbar" className="navbar">
              <ul>
                <li>
                  <a className="nav-link scrollto active" href="#hero">
                    Home
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="#services">
                    Services
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto " href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="#team">
                    Team
                  </a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Drop Down</span>{" "}
                    <i className="bi bi-chevron-down"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Drop Down 1</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">
                        <span>Deep Drop Down</span>{" "}
                        <i className="bi bi-chevron-right"></i>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Deep Drop Down 1</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 2</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 3</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 4</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 5</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Drop Down 4</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="nav-link scrollto" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
              {/* <i className="bi bi-list mobile-nav-toggle"></i> */}
            </nav>
          </div>

          <div className="nav-item dropdown no-arrow">
            <a
               className="nav-link dropdown-toggle"
               href="#"
               id="userDropdown"
               role="button"
               data-toggle="dropdown"
               aria-haspopup="true"
               aria-expanded="false"
            >
              <i className="bi bi-list mobile-nav-toggle"></i>
            </a>

            <div
             className="dropdown-menu dropdown-menu-right"
             aria-labelledby="userDropdown"
            >
              <a className="dropdown-item" href="#hero">
                <i className="fa-fw mr-2 text-gray-400"></i>
                Profile
              </a>
              <a className="dropdown-item" href="#about">
                <i className="fa-fw mr-2 text-gray-400"></i>
                About
              </a>
              <a className="dropdown-item" href="#services">
                <i className="fa-fw mr-2 text-gray-400"></i>
                Services
              </a>
              <a className="dropdown-item" href="#portfolio">
                <i className="fa-fw mr-2 text-gray-400"></i>
                Portfolio
              </a>
              <a className="dropdown-item" href="#team">
                <i className="fa-fw mr-2 text-gray-400"></i>
                Team
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
