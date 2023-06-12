import React from 'react';
import { Link } from 'react-router-dom';

export default function RestaurantsNavbar() {
    return (
      <div>
      <nav style={{ top: 0, left: 0, right: 0 }}
      className="navbar navbar-expand-lg navbar-light bg-light " >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/restaurants">
            All Restaurants
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/restaurants/seafood">
                  Seafood
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/restaurants/fastfood">
                  Fast Food
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/restaurants/fried">
                  Fried
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/restaurants/shawarma">
                  Shawarma
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/restaurants/oriental">
                  Oriental Food
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr className="border border-success" />
</div>
    );
  }
  