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
                <a href="terms-condition.html">Terms & Conditions</a>
              </li>
              <li>
                {" "}
                <a href="privacy-policy.html">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Copyright;
