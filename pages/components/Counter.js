import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Counter = () => {
    const [state, setState] = useState(true);
    return (
        <>
            {/* <CountUp end={1000} duration={5} onEnd={() => {
                setState(false);
            }} >
                {({ countUpRef, start }) => (
                    <VisibilitySensor active={state} onChange={start} delayedCall>
                        <span ref={countUpRef} />
                    </VisibilitySensor>
                )}
            </CountUp> */}

            <section className="counter-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 counter-item">
                            <div className="single-counter">
                                <div className="counter-contents">
                                    <h2>
                                        <span className="counter-number">
                                            <CountUp end={23} duration={5} onEnd={() => {
                                                setState(false);
                                            }} >
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor active={state} onChange={start} delayedCall>
                                                        <span ref={countUpRef} />
                                                    </VisibilitySensor>
                                                )}
                                            </CountUp>
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
                                            <CountUp end={500} duration={5} onEnd={() => {
                                                setState(false);
                                            }} >
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor active={state} onChange={start} delayedCall>
                                                        <span ref={countUpRef} />
                                                    </VisibilitySensor>
                                                )}
                                            </CountUp>
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
                                            <CountUp end={100} duration={5} onEnd={() => {
                                                setState(false);
                                            }} >
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor active={state} onChange={start} delayedCall>
                                                        <span ref={countUpRef} />
                                                    </VisibilitySensor>
                                                )}
                                            </CountUp>
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
                                            <CountUp end={300} duration={5} onEnd={() => {
                                                setState(false);
                                            }} >
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor active={state} onChange={start} delayedCall>
                                                        <span ref={countUpRef} />
                                                    </VisibilitySensor>
                                                )}
                                            </CountUp>
                                        </span>
                                        <span>+</span>
                                    </h2>
                                    <h3 className="counter-heading">5 Star Rating</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CountUp Each time component arrives on Screen */}

            {/* <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>

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
            </VisibilitySensor> */}
        </>
    );
};

export default Counter;
