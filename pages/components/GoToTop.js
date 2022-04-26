import React, { useState, useEffect } from 'react'
import { faFacebook, faTwitter, faLinkedin, faAnglesUp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



const GoToTop = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            // console.warn(scrollPosition);
        };

    }, []);

    const goTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <>

            {scrollPosition == 0 ? (<div className="go-top">
                <i><img src='arrow.png' style={{ padding: "5px" }} /></i>
                <i><img src='arrow.png' style={{ padding: "0px" }} /></i>
            </div>) :
                (<div className="go-top active" onClick={goTop}>

                    {/* <fa-icon class="fas fa-address-card" color="#2980B9" size="2em"></fa-icon> */}
                    {/* <i style={{ backgroundImage: `url("https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80")` }}></i> */}
                    <i><img src='arrow.png' style={{ padding: "5px" }} /></i>
                    <i><img src='arrow.png' style={{ padding: "0px" }} /></i>

                </div>)}
        </>
    )
}

export default GoToTop