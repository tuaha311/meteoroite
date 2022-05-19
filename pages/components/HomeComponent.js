import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const HomeComponent = () => {
  const StyledLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    outline: 0 !important;
    padding: 10px 15px;
    margin: 10px 15px;
  `;

  return (
    <div className="home-area">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="main-banner-content">
                  <h1>
                    Encourage innovation with trusted{" "}
                    <span className="color-text">Technology Solutions</span>
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua, magna aliqua. ipsum is simply dummy text of the
                    printing.
                  </p>
                  <div className="banner-btn">
                    <Link href="/about" className="nav-link" passHref>
                      <div className="default-btn-one">
                        <StyledLink>About Us</StyledLink>
                      </div>
                    </Link>
                    <span></span>

                    <Link href="/contact" className="nav-link" passHref>
                      <div className="default-btn" href="contact.html">
                        <StyledLink style={{ color: "white" }}>
                          Contact
                        </StyledLink>

                        <span></span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="banner-image">
                  <Image
                    src="/images/home-font.png"
                    alt="image"
                    width="750w"
                    height="640w"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grey-cr"></div>
    </div>
  );
};

export default HomeComponent;
