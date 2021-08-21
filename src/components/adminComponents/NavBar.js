import React from "react";

function NavBar() {
  return (
    <>
      <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 mr-4 ml-4 mt-4 static-top shadow">
        {/* <button
          id="sidebarToggleTop"
          class="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i class="fa fa-bars"></i>
        </button> */}
        


       



        <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div class="input-group">

          <div class="input-group-append mb-4 mr-4 mt-4 static-top shadow">
              {/* <button class="btn btn-primary" type="button"> */}
                <i class="fas fa-search fa-sm"></i>
              {/* </button> */}
            </div>
            <input
              type="text"
              class="form-control border-0 small"
              placeholder="Type in to search..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
         
          </div>
        </form>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown no-arrow d-sm-none">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="searchDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-search fa-fw"></i>
            </a>

            <div
              class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
              aria-labelledby="searchDropdown"
            >
              <form class="form-inline mr-auto w-100 navbar-search">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control bg-light border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-primary" type="button">
                      <i class="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>

          <li class="nav-item dropdown no-arrow mx-1">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="alertsDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-bell fa-fw text-gray-600"></i>

              <span class="badge badge-danger badge-counter">3+</span>
            </a>

            <div
              class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="alertsDropdown"
            >
              <h6 class="dropdown-header">Alerts Center</h6>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="mr-3">
                  <div class="icon-circle bg-primary">
                    <i class="fas fa-file-alt text-white"></i>
                  </div>
                </div>
                <div>
                  <div class="small text-gray-500">December 12, 2019</div>
                  <span class="font-weight-bold">
                  <text class="text-truncate text-gray-600">
                    A new monthly report is ready to download!
                  </text>
                  </span>
                </div>
              </a>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="mr-3">
                  <div class="icon-circle bg-success">
                    <i class="fas fa-donate text-white"></i>
                  </div>
                </div>
                <div>
                  <div class="small text-gray-500">December 7, 2019</div>
                  <text class="text-truncate text-gray-600">
                  $290.29 has been deposited into your account!
                  </text>
                </div>
              </a>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="mr-3">
                  <div class="icon-circle bg-warning">
                    <i class="fas fa-exclamation-triangle text-white"></i>
                  </div>
                </div>
                <div>
                  <div class="small text-gray-500">December 2, 2019</div>
                  <text class="text-truncate text-gray-600">
                  Spending Alert: We've noticed unusually high spending for your
                  account.
                  </text>
                </div>
              </a>
              <a class="dropdown-item text-center small text-gray-500" href="#">
                Show All Alerts
              </a>
            </div>
          </li>

          <li class="nav-item dropdown no-arrow mx-1">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="messagesDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-envelope fa-fw text-gray-600"></i>

              <span class="badge badge-danger badge-counter">7</span>
            </a>

            <div
              class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="messagesDropdown"
            >
               <div  id="padset" className="padset" >
              <h6 class="dropdown-header">Message Center</h6>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="dropdown-list-image mr-3">
                  <img
                    class="rounded-circle"
                    src="img/undraw_profile_1.svg"
                    alt="..."
                  />
                  <div class="status-indicator bg-success"></div>
                </div>
                <div class="font-weight-bold">
                  <div class="text-truncate text-gray-600">
                    Hi there! I am wondering if you can help me with a problem
                    I've been having.
                  </div>
                  <div class="small text-gray-600">Emily Fowler · 58m</div>
                </div>
              </a>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="dropdown-list-image mr-3">
                  <img
                    class="rounded-circle"
                    src="img/undraw_profile_2.svg"
                    alt="..."
                  />
                  <div class="status-indicator"></div>
                </div>
                <div>
                  <div class="text-truncate text-gray-700">
                    I have the photos that you ordered last month, how would you
                    like them sent to you?
                  </div>
                  <div class="small text-gray-600">Jae Chun · 1d</div>
                </div>
              </a>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="dropdown-list-image mr-3">
                  <img
                    class="rounded-circle"
                    src="img/undraw_profile_3.svg"
                    alt="..."
                  />
                  <div class="status-indicator bg-warning"></div>
                </div>
                <div>
                  <div class="text-truncate text-gray-700">
                    Last month's report looks great, I am very happy with the
                    progress so far, keep up the good work!
                  </div>
                  <div class="small text-gray-600">Morgan Alvarez · 2d</div>
                </div>
              </a>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="dropdown-list-image mr-3">
                  <img
                    class="rounded-circle"
                    src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                    alt="..."
                  />
                  <div class="status-indicator bg-success"></div>
                </div>
                <div>
                  <div class="text-truncate text-gray-700">
                    Am I a good boy? The reason I ask is because someone told me
                    that people say this to all dogs, even if they aren't
                    good...
                  </div>
                  <div class="small text-gray-600">Chicken the Dog · 2w</div>
                </div>
              </a>
              <a class="dropdown-item text-center small text-gray-500" href="#">
                Read More Messages
              </a>
            </div>
            </div>
          </li>

          <li class="nav-item dropdown no-arrow mx-1">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="messagesDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-fw fa-table text-gray-600"></i>

              <span class="badge badge-danger badge-counter">7</span>
            </a>

            <div
              class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="messagesDropdown"
            >
               <div  id="padset" className="padset" >
              <h6 class="dropdown-header">Message Center</h6>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="dropdown-list-image mr-3">
                  <img
                    class="rounded-circle"
                    src="img/undraw_profile_1.svg"
                    alt="..."
                  />
                  <div class="status-indicator bg-success"></div>
                </div>
                <div class="font-weight-bold">
                  <div class="text-truncate text-gray-600">
                    Hi there! I am wondering if you can help me with a problem
                    I've been having.
                  </div>
                  <div class="small text-gray-600">Emily Fowler · 58m</div>
                </div>
              </a>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="dropdown-list-image mr-3">
                  <img
                    class="rounded-circle"
                    src="img/undraw_profile_2.svg"
                    alt="..."
                  />
                  <div class="status-indicator"></div>
                </div>
                <div>
                  <div class="text-truncate text-gray-700">
                    I have the photos that you ordered last month, how would you
                    like them sent to you?
                  </div>
                  <div class="small text-gray-600">Jae Chun · 1d</div>
                </div>
              </a>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="dropdown-list-image mr-3">
                  <img
                    class="rounded-circle"
                    src="img/undraw_profile_3.svg"
                    alt="..."
                  />
                  <div class="status-indicator bg-warning"></div>
                </div>
                <div>
                  <div class="text-truncate text-gray-700">
                    Last month's report looks great, I am very happy with the
                    progress so far, keep up the good work!
                  </div>
                  <div class="small text-gray-600">Morgan Alvarez · 2d</div>
                </div>
              </a>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="dropdown-list-image mr-3">
                  <img
                    class="rounded-circle"
                    src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                    alt="..."
                  />
                  <div class="status-indicator bg-success"></div>
                </div>
                <div>
                  <div class="text-truncate text-gray-700">
                    Am I a good boy? The reason I ask is because someone told me
                    that people say this to all dogs, even if they aren't
                    good...
                  </div>
                  <div class="small text-gray-600">Chicken the Dog · 2w</div>
                </div>
              </a>
              <a class="dropdown-item text-center small text-gray-500" href="#">
                Read More Messages
              </a>
            </div>
            </div>
          </li>

          {/* <div class="topbar-divider d-none d-sm-block"></div> */}

          {/* <li class="nav-item dropdown no-arrow"> */}
            {/* <a
              class="nav-link dropdown-toggle"
              href="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                Douglas McGee
              </span>
              <img
                class="img-profile rounded-circle"
                src="img/undraw_profile.svg"
              />
            </a> */}

            {/* <div
              class="dropdown-menu dropdown-menu-right shadow animated--grow-in "
              aria-labelledby="userDropdown"
            >
              <div  id="padset" className="padset" >
              <a class="dropdown-item" href="#">
                <i class="fas fa-user fa-sm fa-fw mr-5 text-gray-700"></i>
                <text class="text-gray-700" >Profile</text>                
              </a>
              <a class="dropdown-item" href="#">
                <i class="fas fa-cogs fa-sm fa-fw mr-5 text-gray-700"></i>
                <text class="text-gray-700" >Settings</text>  
              </a>
              <a class="dropdown-item" href="#">
                <i class="fas fa-list fa-sm fa-fw mr-5 text-gray-700"></i>
                <text class="text-gray-700" >Activity Log</text>  
                </a>
              <div class="dropdown-divider"></div>
              <a
                class="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#logoutModal"
              >
                <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-700"></i>
                <text class="text-gray-700" >Logout</text>  
              </a>
              </div>
            </div> */}
          {/* </li> */}
        </ul>
        
        <div >
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
              <div  id="padset" className="padset" style={{transition: "1s",left: "0"}} >
              <a class="dropdown-item" href="#">
                <i class="fas fa-user fa-sm fa-fw mr-5 text-gray-600"></i>
                <span>
              <text class="text-truncate text-gray-600">
              Profile
              </text>
            </span>
              </a>
              <a class="dropdown-item" href="#">
                <i class="fas fa-cogs fa-sm fa-fw mr-5 text-gray-600"></i>
                
                <span>
              <text class="text-truncate text-gray-600">
              Components
              </text>
            </span>
              </a>
              <a class="dropdown-item" href="#">
                <i class="fas fa-list fa-sm fa-fw mr-5 text-gray-600"></i>
               
               <span>
              <text class="text-truncate text-gray-600">
              Utilities
              </text>
            </span>
              </a>
              <div class="dropdown-divider"></div>
              <a
                class="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#logoutModal"
              >
                <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-600"></i>
                
                <span>
              <text class="text-truncate text-gray-600">
              Logout
              </text>
            </span>
              </a>
              </div>

            </div>
          </div>

        </div>

      </nav>
    </>
  );
}

export default NavBar;
