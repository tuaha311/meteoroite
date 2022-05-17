import React, { useState, useEffect } from "react";
import Image from "next/image";
import "../../styles/responsive.module.css";
import "../../styles/fontawesome.min.module.css";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled.a`
   {
    cursor: pointer;
    text-decoration: none;
    padding: 10px 15px;
    margin: 10px 15px;
  }
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
          <div className="techmax-responsive-nav index-navber-responsive">
            <div className="container">
              <div className="techmax-responsive-menu">
                <div className="logo">
                  <Link href="/" passHref>
                    <img
                      src="/images/logo-black.png"
                      className="white-logo"
                      alt="logo"
                    />
                    {/* <img src="/images/logo-black.png" className="black-logo" alt="logo" /> */}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="techmax-nav index-navber">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link className="navbar-brand" href="/" passHref>
                  <img
                    src="/images/logo-black.png"
                    className="white-logo"
                    alt="logo"
                  />
                  {/* <img src="/images/logo-black.png" className="black-logo" alt="logo" /> */}
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
                            <StyledLink>Services</StyledLink>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/single-services" className="nav-link">
                            <StyledLink>Services Details</StyledLink>
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
                    <li className="nav-item">
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
                    </li>
                    <li className="nav-item">
                      <a href="contact.html" className="nav-link">
                        Contact
                      </a>
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
          style={{ height: "5rem" }}
        >
          <div className="navbar-area">
            <div className="techmax-responsive-nav index-navber-responsive">
              <div className="container">
                <div className="techmax-responsive-menu">
                  <div className="logo">
                    <Link href="/" passHref>
                      <img
                        src="/images/logo-black.png"
                        className="white-logo"
                        alt="logo"
                      />
                      {/* <img src="/images/logo-black.png" className="black-logo" alt="logo" /> */}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="techmax-nav index-navber">
              <div className="container">
                <nav className="navbar navbar-expand-md navbar-light">
                  <Link className="navbar-brand" href="/" passHref>
                    <img
                      src="/images/logo-black.png"
                      className="white-logo"
                      alt="logo"
                    />
                    {/* <img src="/images/logo-black.png" className="black-logo" alt="logo" /> */}
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
                              <StyledLink>Services</StyledLink>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <a href="single-services.html" className="nav-link">
                              Services Details
                            </a>
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
                      <li className="nav-item">
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
                      </li>
                      <li className="nav-item">
                        <a href="contact.html" className="nav-link">
                          Contact
                        </a>
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
