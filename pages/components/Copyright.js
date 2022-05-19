import React from "react";

function Copyright() {
  return (
    <div className="copyright-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <p>
              {" "}
              <i className="far fa-copyright"></i> 2022 Meteoroite - All Rights
              Reserved.
            </p>
          </div>
          <div className="col-lg-6 col-md-6">
            <ul>
              <li>
                {" "}
                <a
                  className="hover-underline"
                  href="terms-condition"
                  style={{ textDecoration: "none" }}
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="hover-underline"
                  href="privacy-policy"
                  style={{ textDecoration: "none" }}
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Copyright;
