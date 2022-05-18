import React, { useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";
import Loading from "../components/Loading";
import NavBar from "../components/NavBar";
import Bars from "../components/Bars";
import Counter from "../components/Counter";
import ExpertTeam from "../components/ExpertTeam";
import Testimonials from "../components/Testimonials";
import Partners from "../components/Partners";

const Pricing = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 400);
  return (
    <>
      {loading ? <Loading /> : null}
      <NavBar color={"white"} />
      <BreadCrumbs title={"About Us"} />
      <Bars />
      <Counter />
      <ExpertTeam />
      <Testimonials />
      <Partners />
      <Footer />
      <Copyright />
      <GoToTop />
    </>
  );
};

export default Pricing;
