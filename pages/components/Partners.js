import React from 'react'
import Image from 'next/image'
import Carousel from 'react-elastic-carousel';
const Partners = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 3 },
        { width: 550, itemsToShow: 4 },
        { width: 768, itemsToShow: 5 },
        { width: 1200, itemsToShow: 6 }
    ];

    const carouselRef = React.useRef(null);
    const onNextStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
            // we hit the last item, go to first item
            carouselRef.current.goTo(0);
        }
    };
    const onPrevStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
            // we hit the first item, go to last item
            carouselRef.current.goTo(-1);
        }
    };

    return (
        <div className="partner-area bg-grey">
            <div className="container">
                <div id="partner-carousel" className="partner-carousel owl-carousel owl-theme owl-loaded">
                    <Carousel
                        // breakPoints={breakPoints}
                        itemsToShow={5}
                        ref={carouselRef}
                        onPrevStart={onPrevStart}
                        onNextStart={onNextStart}
                        disableArrowsOnEnd={false}
                        autoPlay={true}
                        showArrows={false}
                        renderPagination={() => {
                            return <div></div>
                        }}

                        data-interval={true}
                        onNextEnd={
                            (currentItem, nextItem) => {
                                if (currentItem.index === 7) {
                                    // we hit the last item, go to first item
                                    carouselRef.current.goTo(0)
                                }
                                // console.log(currentItem.index, "Current")
                                // console.log(nextItem, "Next")

                            }

                        }
                        transitionMs={3000}
                        // autoPlaySpeed={500}
                        enableAutoPlay={true}
                    // showEmptySlots
                    >
                        <div className="partner-slide-item">
                            <a href="#0">
                                <img src="/images/partner-logo/client-1.jpg" alt="partner-image" />
                            </a>
                        </div>
                        <div className="partner-slide-item">
                            <a href="#0">
                                <img src="/images/partner-logo/client-2.jpg" alt="partner-image" />
                            </a>
                        </div>
                        <div className="partner-slide-item">
                            <a href="#0">
                                <img src="/images/partner-logo/client-3.jpg" alt="partner-image" />
                            </a>
                        </div>
                        <div className="partner-slide-item">
                            <a href="#0">
                                <img src="/images/partner-logo/client-4.jpg" alt="partner-image" />
                            </a>
                        </div>
                        <div className="partner-slide-item">
                            <a href="#0">
                                <img src="/images/partner-logo/client-5.jpg" alt="partner-image" />
                            </a>
                        </div>
                        <div className="partner-slide-item">
                            <a href="#0">
                                <img src="/images/partner-logo/client-6.jpg" alt="partner-image" />
                            </a>
                        </div>
                        <div className="partner-slide-item">
                            <a href="#0">
                                <img src="/images/partner-logo/client-7.jpg" alt="partner-image" layout='fill' />
                            </a>
                        </div>
                        <div className="partner-slide-item">
                            <a href="#0">
                                <img src="/images/partner-logo/client-8.jpg" alt="partner-image" layout='fill' />
                            </a>
                        </div>
                        <div className="partner-slide-item">
                            <a href="#0">
                                <img src="/images/partner-logo/client-1.jpg" alt="partner-image" />
                            </a>
                        </div>
                        <div className="partner-slide-item">
                            <a href="#0">
                                <img src="/images/partner-logo/client-2.jpg" alt="partner-image" />
                            </a>
                        </div>
                        <div className="partner-slide-item">
                            <a href="#0">
                                <img src="/images/partner-logo/client-3.jpg" alt="partner-image" />
                            </a>
                        </div>
                        <div className="partner-slide-item">
                            <a href="#0">
                                <img src="/images/partner-logo/client-4.jpg" alt="partner-image" />
                            </a>
                        </div>
                        <div className="partner-slide-item">
                            <a href="#0">
                                <img src="/images/partner-logo/client-5.jpg" alt="partner-image" />
                            </a>
                        </div>
                        <div className="partner-slide-item">
                            <a href="#0">
                                <img src="/images/partner-logo/client-6.jpg" alt="partner-image" />
                            </a>
                        </div>
                        <div className="partner-slide-item">
                            <a href="#0">
                                <img src="/images/partner-logo/client-7.jpg" alt="partner-image" layout='fill' />
                            </a>
                        </div>
                        <div className="partner-slide-item">
                            <a href="#0">
                                <img src="/images/partner-logo/client-8.jpg" alt="partner-image" layout='fill' />
                            </a>
                        </div>

                    </Carousel>
                </div>
            </div>
        </div >

    )
}

export default Partners