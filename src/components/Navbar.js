import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <li className="navbar-brand active">
        <a className="navbar-brand" href="#">
          Contact Keeper
        </a>
      </li>
      <div className="navbar-collapse collapse w-50 order-1 order-md-0 dual-collapse2">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#"></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
        </ul>
      </div>
      <div className="mx-auto order-0">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target=".dual-collapse2"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Right
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
