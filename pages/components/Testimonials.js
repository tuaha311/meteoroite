import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";

const Testimonials = () => {
  // const [display, setDisplay] = useState(false)
  // useEffect(() => {
  //     setTimeout(() => {
  //         setDisplay(true)
  //     }, 2000);
  // })

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  const carouselRef = React.useRef(null);
  return (
    <section className="testimonial-section bg-grey section-padding">
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
        Testimonial
      </h6>
      <div className="container">
        <div
          className="section-title"
          // style={{
          //   fontSize: "40px",
          //   color: "#0b0b31",
          //   margin: "10px 0 0 0",
          //   fontWeight: "800",
          //   lineHeight: "1.4",
          //   fontFamily: "'Dosis', sans-serif",
          // }}
        >
          <h2>What Our Client Say</h2>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="testimonial-slider owl-carousel owl-theme">
              <Carousel
                // breakPoints={breakPoints}
                enableAutoPlay
                itemsToShow={3}
                ref={carouselRef}
                showArrows={false}
                renderPagination={() => {
                  return <div></div>;
                }}
                data-interval={true}
                onNextEnd={(currentItem, nextItem) => {
                  if (currentItem.index === 2) {
                    // we hit the last item, go to first item
                    carouselRef.current.goTo(0);
                  }
                  // console.log(currentItem.index, "Current")
                  // console.log(nextItem.index, "Next")
                }}
                transitionMs={3000}
              >
                {/* <!-- testimonials item --> */}
                <div
                  className="card"
                  style={{
                    marginLeft: "px",
                    marginRight: "5px",
                    width: "25rem",
                    height: "30rem",
                  }}
                >
                  <div className="single-testimonial">
                    <div className="rating-box">
                      <ul>
                        <li>
                          <i className="meteoroite-rating-star"></i>
                        </li>
                        <li>
                          <i className="meteoroite-rating-star"></i>
                        </li>
                        <li>
                          <i className="meteoroite-rating-star"></i>
                        </li>
                        <li>
                          <i className="meteoroite-rating-star"></i>
                        </li>
                        <li>
                          <i className="meteoroite-rating-star"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="testimonial-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. enim ad minim veniam, quis nostrud
                        exercitation.
                      </p>
                    </div>
                    <div className="avatar">
                      <img
                        src="images/client/testimonial-1.jpg"
                        alt="testimonial images"
                      />
                    </div>
                    <div className="testimonial-bio">
                      <div className="bio-info">
                        <h3>Stanley Tate</h3>
                        <span>Web Developer</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- testimonials item --> */}
                <div
                  className="card"
                  style={{
                    marginLeft: "px",
                    marginRight: "5px",
                    width: "25rem",
                    height: "30rem",
                  }}
                >
                  <div className="single-testimonial">
                    <div className="rating-box">
                      <ul>
                        <li>
                          <i className="meteoroite-rating-star"></i>
                        </li>
                        <li>
                          <i className="meteoroite-rating-star"></i>
                        </li>
                        <li>
                          <i className="meteoroite-rating-star"></i>
                        </li>
                        <li>
                          <i className="meteoroite-rating-star"></i>
                        </li>
                        <li>
                          <i className="meteoroite-rating-star"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="testimonial-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. enim ad minim veniam, quis nostrud
                        exercitation.
                      </p>
                    </div>
                    <div className="avatar">
                      <img
                        src="images/client/testimonial-2.jpg"
                        alt="testimonial images"
                      />
                    </div>
                    <div className="testimonial-bio">
                      <div className="bio-info">
                        <h3>Lana Shelton</h3>
                        <span>Architect</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- testimonials item --> */}
                <div
                  className="card"
                  style={{
                    marginLeft: "px",
                    marginRight: "5px",
                    width: "25rem",
                    height: "30rem",
                  }}
                >
                  <div className="single-testimonial">
                    <div className="rating-box">
                      <ul>
                        <li>
                          <i className="meteoroite-rating-star"></i>
                        </li>
                        <li>
                          <i className="meteoroite-rating-star"></i>
                        </li>
                        <li>
                          <i className="meteoroite-rating-star"></i>
                        </li>
                        <li>
                          <i className="meteoroite-rating-star"></i>
                        </li>
                        <li>
                          <i className="meteoroite-rating-star"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="testimonial-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. enim ad minim veniam, quis nostrud
                        exercitation.
                      </p>
                    </div>
                    <div className="avatar">
                      <img
                        src="images/client/testimonial-3.jpg"
                        alt="testimonial images"
                      />
                    </div>
                    <div className="testimonial-bio">
                      <div className="bio-info">
                        <h3>Mario Houston</h3>
                        <span>Social Worker</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- testimonials item --> */}
                <div
                  className="card"
                  style={{
                    marginLeft: "px",
                    marginRight: "5px",
                    width: "25rem",
                    height: "30rem",
                  }}
                >
                  <div className="single-testimonial">
                    <div className="rating-box">
                      <ul>
                        <li>
                          <i className="meteoroite-rating-star"></i>
                        </li>
                        <li>
                          <i className="meteoroite-rating-star"></i>
                        </li>
                        <li>
                          <i className="meteoroite-rating-star"></i>
                        </li>
                        <li>
                          <i className="meteoroite-rating-star"></i>
                        </li>
                        <li>
                          <i className="meteoroite-rating-star"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="testimonial-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. enim ad minim veniam, quis nostrud
                        exercitation.
                      </p>
                    </div>
                    <div className="avatar">
                      <img
                        src="images/client/testimonial-3.jpg"
                        alt="testimonial images"
                      />
                    </div>
                    <div className="testimonial-bio">
                      <div className="bio-info">
                        <h3>Mario Houston</h3>
                        <span>Social Worker</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- testimonials item --> */}
                <div
                  className="card"
                  style={{
                    marginLeft: "px",
                    marginRight: "5px",
                    width: "25rem",
                    height: "30rem",
                  }}
                >
                  <div className="single-testimonial">
                    <div className="rating-box">
                      <ul>
                        <li>
                          <i className="meteoroite-rating-star"></i>
                        </li>
                        <li>
                          <i className="meteoroite-rating-star"></i>
                        </li>
                        <li>
                          <i className="meteoroite-rating-star"></i>
                        </li>
                        <li>
                          <i className="meteoroite-rating-star"></i>
                        </li>
                        <li>
                          <i className="meteoroite-rating-star"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="testimonial-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. enim ad minim veniam, quis nostrud
                        exercitation.
                      </p>
                    </div>
                    <div className="avatar">
                      <img
                        src="images/client/testimonial-1.jpg"
                        alt="testimonial images"
                      />
                    </div>
                    <div className="testimonial-bio">
                      <div className="bio-info">
                        <h3>Stanley Tate</h3>
                        <span>Web Developer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
