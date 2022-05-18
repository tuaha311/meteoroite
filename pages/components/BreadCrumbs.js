import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: white;
`;
const BreadCrumbs = (props) => {
  return (
    <div
      className="page-title-area item-bg1"
      style={
        props.img != null ? { backgroundImage: `url(${props.img})` } : null
      }
    >
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="page-title-content">
              <h2>{props.title}</h2>
              <ul>
                <Link href="/" passHref>
                  <StyledLink>Home</StyledLink>
                </Link>
                <span className="dot"></span>
                <li>{props.title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbs;
