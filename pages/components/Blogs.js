import React from 'react'

function Blogs() {
    return (
        <section className="blog-section pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>Recent Blog & Article</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-item">
                            <div className="blog-image">
                                <a href="single-blog.html">
                                    <img src="/images/blog/blog-1.jpg" alt="image" />
                                </a>
                            </div>
                            <div className="single-blog-item">
                                <div className="blog-content">
                                    <h3>
                                        <a href="single-blog.html">
                                            The Biggest Trends in Technology We have Seen This Year
                                        </a>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt</p>
                                    <div className="blog-btn"> <a href="single-blog.html" className="default-btn blog-btn-one">Continue Reading <span></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-item">
                            <div className="blog-image">
                                <a href="single-blog.html">
                                    <img src="/images/blog/blog-2.jpg" alt="image" />
                                </a>
                            </div>
                            <div className="single-blog-item">
                                <div className="blog-content">
                                    <h3>
                                        <a href="single-blog.html">
                                            Why We Love Technology (And You Should, Too!)
                                        </a>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt</p>
                                    <div className="blog-btn">
                                        <a href="single-blog.html" className="default-btn blog-btn-one">Continue Reading <span></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-item">
                            <div className="blog-image">
                                <a href="single-blog.html">
                                    <img src="/images/blog/blog-3.jpg" alt="image" />
                                </a>
                            </div>
                            <div className="single-blog-item">
                                <div className="blog-content">
                                    <h3>
                                        <a href="single-blog.html">
                                            The 17 Most Misunderstood Facts About Technology
                                        </a>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt</p>
                                    <div className="blog-btn"> <a href="single-blog.html" className="default-btn blog-btn-one">Continue Reading <span></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Blogs