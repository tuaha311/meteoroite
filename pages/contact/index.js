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

const Contact = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 250);

  return (
    <>
      {loading ? <Loading /> : null}
      <NavBar color={"#fff"} />
      <BreadCrumbs title={"Contact Us"} img={"contact.jpg"} />

      <section className="about-area bg-grey section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h6>Contact Information</h6>
                <div
                  className="section-title"
                  style={{
                    marginTop: "30px",
                  }}
                >
                  <h2>Find Us</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-content">
                <h5>USA Headquarter</h5>
                <p>
                  304 NW St Homestead, Florida, Melrose Street, Water Mill, 76B
                  Overlook Drive Chester, PA 19013, Flemingsburg USA.
                </p>
                <a className="hover-underline" href="tel:0802235678">
                  080 707 555-321
                </a>
                <br />
                <a className="hover-underline" href="mailto:demo@example.com">
                  demo@example.com
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-content">
                <h5>New York Office</h5>
                <p>
                  1540 Pecks Ridge Tilton Rd Flemingsburg, Kentucky(KY), 4104188
                  Fulton Street Blackwood, NJ 08012, London.
                </p>
                <a className="hover-underline" href="tel:0802235678">
                  080 707 555-321
                </a>
                <br />
                <a className="hover-underline" href="mailto:demo@example.com">
                  demo@example.com
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-content">
                <h5>Panama Office</h5>
                <p>
                  103 Richard Ave Ashville, Ohio, Water Mill,3468 16th Hwy
                  Pangburn, Arkansas(AR), Charolais Ashville, Virginia, Panama.
                </p>
                <a className="hover-underline" href="tel:0802235678">
                  080 707 555-321
                </a>
                <br />
                <a className="hover-underline" href="mailto:demo@example.com">
                  demo@example.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Form */}

      <section className="about-area section-padding">
        <div className="container">
          <div className="container">
            <div className="section-title">
              <h6>Contact Us</h6>
              <h2 style={{ marginTop: "30px" }}>Let&apos;s Talk</h2>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-10 offset-lg-1">
                <div className="contact-form-meteoroite">
                  <p className="form-message"></p>
                  <br />
                  <form
                    id="contact-form-meteoroite"
                    className="contact-form-meteoroite form"
                    action="mail.php"
                    method="POST"
                  >
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control-meteoroite"
                            required=""
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control-meteoroite"
                            required=""
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            required=""
                            className="form-control-meteoroite"
                            placeholder="Your Phone"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="subject"
                            id="subject"
                            className="form-control-meteoroite"
                            required=""
                            placeholder="Your Subject"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            className="form-control-meteoroite"
                            id="message"
                            cols="30"
                            rows="6"
                            required=""
                            placeholder="Your Message"
                            style={{ height: "150px" }}
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <button
                          type="submit"
                          className="default-btn submit-btn"
                          disabled
                        >
                          Send Message <span></span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Copyright />
      <GoToTop />
    </>
  );
};

export default Contact;
