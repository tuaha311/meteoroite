import React, { useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";

//**importing Components
import Loading from "../components/Loading";
import NavBar from "../components/NavBar";
import Overview from "../components/Overview";
import Services from "../components/Services";

const ServicesPage = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 350);

  return (
    <>
      {loading ? <Loading /> : null}
      <NavBar color={"white"} />
      <BreadCrumbs title={"Services"} />
      <Services />
      <section className="services-section pt-0 pb-100 mt-n1">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-services-item">
                <div className="services-icon">
                  <i
                    className="meteoroite-icon"
                    style={{
                      content: `url("/images/icons/seo.png")`,
                    }}
                  ></i>
                </div>
                <h3>SEO Optimization</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt dolore magna aliqua
                </p>
                <div className="services-btn-link">
                  <a href="#0" className="services-link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-services-item">
                <div className="services-icon">
                  <i
                    className="meteoroite-icon"
                    style={{
                      content: `url("/images/icons/optimization.png")`,
                      //   webkitFilter: "grayscale(100%)",
                      //   filter: "grayscale(100%)",
                    }}
                  ></i>
                </div>
                <h3>App Optimization</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt dolore magna aliqua
                </p>
                <div className="services-btn-link">
                  <a href="#0" className="services-link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-services-item">
                <div className="services-icon">
                  <i
                    className="meteoroite-icon"
                    style={{
                      content: `url("/images/icons/data-recovery.png")`,
                    }}
                  ></i>
                </div>
                <h3>Data Recovery</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt dolore magna aliqua
                </p>
                <div className="services-btn-link">
                  <a href="#0" className="services-link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Overview />
      <Footer />
      <Copyright />
      <GoToTop />
    </>
  );
};

export default ServicesPage;
