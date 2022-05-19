import React, { useState, useEffect } from "react";
import Image from "next/image";
import "../../styles/responsive.module.css";
import "../../styles/fontawesome.min.module.css";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  outline: 0 !important;
  color: #505060;
  padding: 10px 15px;
  margin: 10px 15px;
`;
const NavBar = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      // console.warn(scrollPosition);
    };
  }, []);
  return (
    <>
      {scrollPosition == 0 ? (
        <div
          className="navbar-area"
          style={{ height: "5rem", backgroundColor: `${props.color}` }}
        >
          <div
            className="meteoroite-responsive-nav index-navber-responsive"
            style={{ placeItems: "center" }}
          >
            <div className="container">
              <div className="meteoroite-responsive-menu">
                <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
                  <div className="container-fluid">
                    <Link className="navbar-brand" href="/" passHref>
                      <img
                        src="/images/meteoroite_logo.png"
                        className="white-logo"
                        alt="logo"
                        width="125px"
                        height="35px"
                      />
                    </Link>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarNavAltMarkup"
                      aria-controls="navbarNavAltMarkup"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarNavAltMarkup"
                    >
                      <div className="navbar-nav">
                        <Link href="/" className="nav-link " passHref>
                          <StyledLink>Home</StyledLink>
                        </Link>

                        <Link href="/about" className="nav-link" passHref>
                          <StyledLink>About Us</StyledLink>
                        </Link>

                        <Link href="/services" className="nav-link" passHref>
                          <StyledLink>Services</StyledLink>
                        </Link>

                        <Link href="/contact" className="nav-link" passHref>
                          <StyledLink>Contact</StyledLink>
                        </Link>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="meteoroite-nav index-navber">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link className="navbar-brand" href="/" passHref>
                  <img
                    src="/images/meteoroite_logo.png"
                    className="white-logo"
                    alt="logo"
                    width="125px"
                    height="35px"
                  />
                  {/* <img src="/images/meteoroite_logo.png" className="black-logo" alt="logo" width="200px" height="50px" /> */}
                </Link>
                <div
                  className="collapse navbar-collapse mean-menu"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link href="/" className="nav-link " passHref>
                        <StyledLink>Home</StyledLink>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about" className="nav-link" passHref>
                        <StyledLink>About Us</StyledLink>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Services <i className="fas fa-chevron-down"></i>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="/services" className="nav-link" passHref>
                            <StyledLink className="nav-link">
                              Services
                            </StyledLink>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/pricing" className="nav-link" passHref>
                            <StyledLink className="nav-link">
                              Pricing
                            </StyledLink>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    {/* <li className="nav-item">
                      <a href="#" className="nav-link">
                        Pages <i className="fas fa-chevron-down"></i>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a href="projects.html" className="nav-link">
                            Projects
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="single-projects.html" className="nav-link">
                            Projects Details
                          </a>
                        </li>
                        <li className="nav-item">
                          <Link href="/pricing" className="nav-link">
                            <StyledLink>Pricing</StyledLink>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <a href="faq.html" className="nav-link">
                            FAQ
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="coming-soon.html" className="nav-link">
                            Coming Soon
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="terms-condition.html" className="nav-link">
                            Terms & Conditions
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="privacy-policy.html" className="nav-link">
                            Privacy Policy
                          </a>
                        </li>
                      </ul>
                    </li> */}
                    {/* <li className="nav-item">
                      <a href="#" className="nav-link">
                        Blog <i className="fas fa-chevron-down"></i>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a href="blog-1.html" className="nav-link">
                            Blog Grid
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="single-blog.html" className="nav-link">
                            Blog Details
                          </a>
                        </li>
                      </ul>
                    </li> */}
                    <li className="nav-item">
                      <Link href="/contact" className="nav-link" passHref>
                        <StyledLink>Contact</StyledLink>
                      </Link>
                    </li>
                  </ul>
                  {/* <div className="other-option">
                    <button className="default-btn nav-btn-1">
                      <Link href="#" passHref style={{ color: "white" }}>
                        <StyledLink>
                          Log In <span></span>
                        </StyledLink>
                      </Link>
                    </button>
                    <Link className="default-btn" href="#0" passHref>
                      <StyledLink>
                        Get Quotes <span></span>
                      </StyledLink>
                    </Link>
                  </div> */}
                  <div className="other-option">
                    <a className="default-btn nav-btn-1" href="#0">
                      Log In <span></span>
                    </a>
                    <a className="default-btn" href="#0">
                      Get Quotes <span></span>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="navbar fixed-top navbar-light bg-light navbar-area"
          style={{ height: "5rem", placeItems: "center" }}
        >
          <div className="navbar-area">
            <div className="meteoroite-responsive-nav index-navber-responsive">
              <div className="container">
                <div className="meteoroite-responsive-menu">
                  <div className="logo">
                    <Link href="/" passHref>
                      <img
                        src="/images/meteoroite_logo.png"
                        className="white-logo"
                        alt="logo"
                        width="125px"
                        height="35px"
                      />
                      {/* <img src="/images/meteoroite_logo.png" className="black-logo" alt="logo" width="200px" height="50px" /> */}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="meteoroite-nav index-navber">
              <div className="container">
                <nav className="navbar navbar-expand-md navbar-light">
                  <Link className="navbar-brand" href="/" passHref>
                    <img
                      src="/images/meteoroite_logo.png"
                      className="white-logo"
                      alt="logo"
                      width="125px"
                      height="35px"
                    />
                    {/* <img src="/images/meteoroite_logo.png" className="black-logo" alt="logo" width="200px" height="50px" /> */}
                  </Link>
                  <div
                    className="collapse navbar-collapse mean-menu"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link href="/" className="nav-link" passHref>
                          <StyledLink>Home</StyledLink>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/about" className="nav-link" passHref>
                          <StyledLink>About Us</StyledLink>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Services <i className="fas fa-chevron-down"></i>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/services"
                              className="nav-link"
                              passHref
                            >
                              <StyledLink className="nav-link">
                                Services
                              </StyledLink>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/pricing" className="nav-link" passHref>
                              <StyledLink className="nav-link">
                                Pricing
                              </StyledLink>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      {/* <li className="nav-item">
                        <a href="#" className="nav-link">
                          Pages <i className="fas fa-chevron-down"></i>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="projects.html" className="nav-link">
                              Projects
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="single-projects.html" className="nav-link">
                              Projects Details
                            </a>
                          </li>
                          <li className="nav-item">
                            <Link href="/pricing" className="nav-link" passHref>
                              <StyledLink>Pricing</StyledLink>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <a href="faq.html" className="nav-link">
                              FAQ
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="coming-soon.html" className="nav-link">
                              Coming Soon
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="terms-condition.html" className="nav-link">
                              Terms & Conditions
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="privacy-policy.html" className="nav-link">
                              Privacy Policy
                            </a>
                          </li>
                        </ul>
                      </li> */}
                      {/* <li className="nav-item">
                        <a href="#" className="nav-link">
                          Blog <i className="fas fa-chevron-down"></i>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="blog-1.html" className="nav-link">
                              Blog Grid
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="single-blog.html" className="nav-link">
                              Blog Details
                            </a>
                          </li>
                        </ul>
                      </li> */}
                      <li className="nav-item">
                        <Link href="/contact" className="nav-link" passHref>
                          <StyledLink>Contact</StyledLink>
                        </Link>
                      </li>
                    </ul>
                    <div className="other-option">
                      <a className="default-btn nav-btn-1" href="#0">
                        Log In <span></span>
                      </a>
                      <a className="default-btn" href="#0">
                        Get Quotes <span></span>
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
