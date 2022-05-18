import React from "react";
import "../../styles/fontawesome.min.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const ExpertTeam = () => {
  return (
    <section className="team-area section-padding">
      <h6
        className="section-title"
        style={{
          fontSize: "16px",
          fontWeight: "700",
          color: " #FF9800",
          letterSpacing: "0.5px",
          textTransform: "uppercase",
        }}
      >
        Expert Team Member
      </h6>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2>Expert Team</h2>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-team-box">
              <div className="team-image">
                <img src="/images/team/team-1.jpg" alt="team" />
                <div className="team-social-icon">
                  <a href="#" className="social-color-1">
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                  </a>
                  <a href="#" className="social-color-2">
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                  </a>
                  <a href="#" className="social-color-3">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </a>
                </div>
              </div>
              <div className="team-info">
                <h3>Lewis Lucas</h3>
                <span>IT Manager</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-team-box">
              <div className="team-image">
                <img src="/images/team/team-2.jpg" alt="team" />
                <div className="team-social-icon">
                  <a href="#" className="social-color-1">
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                  </a>
                  <a href="#" className="social-color-2">
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                  </a>
                  <a href="#" className="social-color-3">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </a>
                </div>
              </div>
              <div className="team-info">
                <h3>Arturo Fuller</h3>
                <span>Service Manager</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-team-box">
              <div className="team-image">
                <img src="/images/team/team-3.jpg" alt="team" />
                <div className="team-social-icon">
                  <a href="#" className="social-color-1">
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                  </a>
                  <a href="#" className="social-color-2">
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                  </a>
                  <a href="#" className="social-color-3">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </a>
                </div>
              </div>
              <div className="team-info">
                <h3>Velma Cain</h3>
                <span>Managing Director</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-team-box">
              <div className="team-image">
                <img src="/images/team/team-4.jpg" alt="team" />
                <div className="team-social-icon">
                  <a href="#" className="social-color-1">
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                  </a>
                  <a href="#" className="social-color-2">
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                  </a>
                  <a href="#" className="social-color-3">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </a>
                </div>
              </div>
              <div className="team-info">
                <h3>Marc Gibbs</h3>
                <span>Executive Assistant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertTeam;
