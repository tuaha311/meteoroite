import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Counter = () => {
    return (
        <>
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                    <section className="counter-area section-padding">
                        {isVisible ? (
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 counter-item">
                                        <div className="single-counter">
                                            <div className="counter-contents">
                                                <h2>
                                                    <span className="counter-number">
                                                        <CountUp end={23} />
                                                    </span>
                                                    <span>+</span>
                                                </h2>
                                                <h3 className="counter-heading">Years of Experience</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 counter-item">
                                        <div className="single-counter">
                                            <div className="counter-contents">
                                                <h2>
                                                    <span className="counter-number">
                                                        <CountUp end={500} />
                                                    </span>
                                                </h2>
                                                <h3 className="counter-heading">Complete Projects</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 counter-item">
                                        <div className="single-counter">
                                            <div className="counter-contents">
                                                <h2>
                                                    <span className="counter-number">
                                                        <CountUp end={100} />
                                                    </span>
                                                    <span>+</span>
                                                </h2>
                                                <h3 className="counter-heading">Employees</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 counter-item">
                                        <div className="single-counter">
                                            <div className="counter-contents">
                                                <h2>
                                                    <span className="counter-number">
                                                        <CountUp end={300} />
                                                    </span>
                                                    <span>+</span>
                                                </h2>
                                                <h3 className="counter-heading">5 Star Rating</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : null}
                    </section>
                )}
            </VisibilitySensor>
        </>
    );
};

export default Counter;
