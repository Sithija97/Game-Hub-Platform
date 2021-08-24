import React from "react";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 mr-4 ml-4 mt-4 static-top shadow">
        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div className="input-group">
            <div className="input-group-append mb-4 mr-4 mt-4 static-top shadow">
              <i className="fas fa-search fa-sm"></i>
            </div>
            <input
              type="text"
              className="form-control border-0 small"
              placeholder="Type in to search..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
          </div>
        </form>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown no-arrow d-sm-none">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="searchDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-search fa-fw"></i>
            </a>

            <div
              className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
              aria-labelledby="searchDropdown"
            >
              <form className="form-inline mr-auto w-100 navbar-search">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-light border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>

          <li className="nav-item dropdown no-arrow mx-1">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="alertsDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-bell fa-fw text-gray-600"></i>

              <span className="badge badge-danger badge-counter">3+</span>
            </a>

            <div
              className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="alertsDropdown"
            >
              <h6 className="dropdown-header">Alerts Center</h6>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="mr-3">
                  <div className="icon-circle bg-primary">
                    <i className="fas fa-file-alt text-white"></i>
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">December 12, 2019</div>
                  <div className="font-weight-bold">
                    <div className="text-truncate text-gray-600">
                      A new monthly report is ready to download!
                    </div>
                  </div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="mr-3">
                  <div className="icon-circle bg-success">
                    <i className="fas fa-donate text-white"></i>
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">December 7, 2019</div>
                  <div className="font-weight-bold">
                    <div className="text-truncate text-gray-600">
                      $290.29 has been deposited into your account!
                    </div>
                  </div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="mr-3">
                  <div className="icon-circle bg-warning">
                    <i className="fas fa-exclamation-triangle text-white"></i>
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">December 2, 2019</div>
                  <div className="font-weight-bold">
                    <div className="text-truncate text-gray-600">
                      Spending Alert: We've noticed unusually high spending for
                      your account.
                    </div>
                  </div>
                </div>
              </a>
              <a className="dropdown-item text-center small text-gray-500" href="#">
                Show All Alerts
              </a>
            </div>
          </li>

          <li className="nav-item dropdown no-arrow mx-1">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="messagesDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-envelope fa-fw text-gray-600"></i>

              <span className="badge badge-danger badge-counter">7</span>
            </a>

            <div
              className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="messagesDropdown"
            >
              <div id="padset" className="padset">
                <h6 className="dropdown-header">Message Center</h6>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="dropdown-list-image mr-3">
                    <img
                      className="rounded-circle"
                      src="img/undraw_profile_1.svg"
                      alt="..."
                    />
                    <div className="status-indicator bg-success"></div>
                  </div>
                  <div className="font-weight-bold">
                    <div className="text-truncate text-gray-600">
                      Hi there! I am wondering if you can help me with a problem
                      I've been having.
                    </div>
                    <div className="small text-gray-600">Emily Fowler · 58m</div>
                  </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="dropdown-list-image mr-3">
                    <img
                      className="rounded-circle"
                      src="img/undraw_profile_2.svg"
                      alt="..."
                    />
                    <div className="status-indicator"></div>
                  </div>
                  <div>
                    <div className="text-truncate text-gray-700">
                      I have the photos that you ordered last month, how would
                      you like them sent to you?
                    </div>
                    <div className="small text-gray-600">Jae Chun · 1d</div>
                  </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="dropdown-list-image mr-3">
                    <img
                      className="rounded-circle"
                      src="img/undraw_profile_3.svg"
                      alt="..."
                    />
                    <div className="status-indicator bg-warning"></div>
                  </div>
                  <div>
                    <div className="text-truncate text-gray-700">
                      Last month's report looks great, I am very happy with the
                      progress so far, keep up the good work!
                    </div>
                    <div className="small text-gray-600">Morgan Alvarez · 2d</div>
                  </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="dropdown-list-image mr-3">
                    <img
                      className="rounded-circle"
                      src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                      alt="..."
                    />
                    <div className="status-indicator bg-success"></div>
                  </div>
                  <div>
                    <div className="text-truncate text-gray-700">
                      Am I a good boy? The reason I ask is because someone told
                      me that people say this to all dogs, even if they aren't
                      good...
                    </div>
                    <div className="small text-gray-600">Chicken the Dog · 2w</div>
                  </div>
                </a>
                <a
                  className="dropdown-item text-center small text-gray-500"
                  href="#"
                >
                  Read More Messages
                </a>
              </div>
            </div>
          </li>

          <li className="nav-item dropdown no-arrow mx-1">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="messagesDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-fw fa-table text-gray-600"></i>

              <span className="badge badge-danger badge-counter">7</span>
            </a>

            <div
              className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="messagesDropdown"
            >
              <div id="padset" className="padset">
                <h6 className="dropdown-header">Message Center</h6>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="dropdown-list-image mr-3">
                    <img
                      className="rounded-circle"
                      src="img/undraw_profile_1.svg"
                      alt="..."
                    />
                    <div className="status-indicator bg-success"></div>
                  </div>
                  <div className="font-weight-bold">
                    <div className="text-truncate text-gray-600">
                      Hi there! I am wondering if you can help me with a problem
                      I've been having.
                    </div>
                    <div className="small text-gray-600">Emily Fowler · 58m</div>
                  </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="dropdown-list-image mr-3">
                    <img
                      className="rounded-circle"
                      src="img/undraw_profile_2.svg"
                      alt="..."
                    />
                    <div className="status-indicator"></div>
                  </div>
                  <div>
                    <div className="text-truncate text-gray-700">
                      I have the photos that you ordered last month, how would
                      you like them sent to you?
                    </div>
                    <div className="small text-gray-600">Jae Chun · 1d</div>
                  </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="dropdown-list-image mr-3">
                    <img
                      className="rounded-circle"
                      src="img/undraw_profile_3.svg"
                      alt="..."
                    />
                    <div className="status-indicator bg-warning"></div>
                  </div>
                  <div>
                    <div className="text-truncate text-gray-700">
                      Last month's report looks great, I am very happy with the
                      progress so far, keep up the good work!
                    </div>
                    <div className="small text-gray-600">Morgan Alvarez · 2d</div>
                  </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="dropdown-list-image mr-3">
                    <img
                      className="rounded-circle"
                      src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                      alt="..."
                    />
                    <div className="status-indicator bg-success"></div>
                  </div>
                  <div>
                    <div className="text-truncate text-gray-700">
                      Am I a good boy? The reason I ask is because someone told
                      me that people say this to all dogs, even if they aren't
                      good...
                    </div>
                    <div className="small text-gray-600">Chicken the Dog · 2w</div>
                  </div>
                </a>
                <a
                  className="dropdown-item text-center small text-gray-500"
                  href="#"
                >
                  Read More Messages
                </a>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
