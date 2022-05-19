import VisibilitySensor from "react-visibility-sensor";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled.a`
  cursor: pointer;
  text-decoration: none;
`;
function Bars() {
  return (
    <section className="about-area bg-grey section-padding">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="about-content">
              <div className="about-content-text">
                <h6>About Our Company</h6>
                <h2>
                  Providing your business with a quality IT service is our
                  passion.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  enim ad minim veniam, nostrud
                </p>

                <div className="skills">
                  <div className="skill-item">
                    <h6>
                      IT Consulting <em>90%</em>
                    </h6>
                    <div className="skill-progress">
                      <VisibilitySensor
                        partialVisibility
                        offset={{ bottom: 200 }}
                      >
                        {({ isVisible }) =>
                          isVisible ? (
                            <div
                              className="progres"
                              data-value="90%"
                              style={{ width: "90%" }}
                            ></div>
                          ) : (
                            <div
                              className="progres"
                              data-value="1%"
                              style={{ width: "1%" }}
                            ></div>
                          )
                        }
                      </VisibilitySensor>
                    </div>
                  </div>
                  <div className="skill-item">
                    <h6>
                      Virtual Workstation <em>75%</em>
                    </h6>
                    <div className="skill-progress">
                      <VisibilitySensor
                        partialVisibility
                        offset={{ bottom: 200 }}
                      >
                        {({ isVisible }) =>
                          isVisible ? (
                            <div
                              className="progres"
                              data-value="75%"
                              style={{ width: "75%" }}
                            ></div>
                          ) : (
                            <div
                              className="progres"
                              data-value="1%"
                              style={{ width: "1%" }}
                            ></div>
                          )
                        }
                      </VisibilitySensor>
                    </div>
                  </div>
                  <div className="skill-item">
                    <h6>
                      Managed IT Service <em>80%</em>
                    </h6>
                    <div className="skill-progress">
                      <VisibilitySensor
                        partialVisibility
                        offset={{ bottom: 200 }}
                      >
                        {({ isVisible }) =>
                          isVisible ? (
                            <div
                              className="progres"
                              data-value="80%"
                              style={{ width: "80%" }}
                            ></div>
                          ) : (
                            <div
                              className="progres"
                              data-value="1%"
                              style={{ width: "1%" }}
                            ></div>
                          )
                        }
                      </VisibilitySensor>
                    </div>
                  </div>
                </div>
                <div className="about-btn-box" style={{ marginTop: "5vh" }}>
                  <Link href="/about" passHref>
                    <StyledLink className="default-btn project-btn-1">
                      Learn More<span></span>
                    </StyledLink>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 col-md-12 col-sm-12">
            <div className="about-image">
              <div className="years-design">
                <h2>27</h2>
                <h5>Years Experience</h5>
              </div>
              <img src="images/about.jpg" alt="About image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bars;
