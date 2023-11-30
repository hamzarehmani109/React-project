import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

function Header() {
  const navData = [
    {
      title: 'Home'
    },
    {
      title: 'About'
    },
    {
      title: 'GlobalCard'
    },
    {
      title: 'GlobalVariables'
    },
    {
      title: 'Contact'
    },
    {
      title: 'ContactUs'
    },
    {
      title: 'Card'
    },

  ];

  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto"><a href="index.html">Service</a></h1>

        <nav id="navbar" className="navbar">
          <ul className="navbar">
            {navData.map((data, index) => (
              <li key={index}>
                <Link
                  to={`/${data.title.toLowerCase()}`}
                  className="nav-link"
                  activeClassName="active"
                >
                  {data.title}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/get-started" className="getstarted nav-link">
                Get Started
              </Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}

export default Header;
