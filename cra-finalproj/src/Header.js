import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="Header">
      <div className="container page-box body">
        <div className="row">
          <div className="col-sm-3">
            <Link to="/" className="pages">Home</Link>
            <Link to="/about"className="pages">About</Link>
            <Link to="/packages"className="pages">Packages</Link>
            <Link to="/resorts"className="pages">Resorts</Link>
            <Link to="/destinations"className="pages">Destinations</Link>
            <Link to="/cities"className="pages">Cities</Link>
            <Link to="/careers"className="pages">Careers</Link>
            <Link to="/contact"className="pages">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;