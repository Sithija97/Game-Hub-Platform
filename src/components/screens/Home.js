import React from "react";
import Header from "../homeComponents/Header";
import Reason from "../homeComponents/Reason";
import Services from "../homeComponents/Service";
import IntroHero from "../homeComponents/Introhero";
import AboutUs from "../homeComponents/Aboutus";
import Portfolio from "../homeComponents/Portfolio";
import Team from "../homeComponents/Team";
import Clients from "../homeComponents/Client";
import Contacts from "../homeComponents/Contact";
import Testimonial from "../homeComponents/Testimonial";
import Footer from "../homeComponents/Footer";
import IntroVideo from "../homeComponents/IntroVideo";
import PricingTable from "../homeComponents/PricingTable";

function Home() {
  return (
    <>
      <Header />,
      <section id="video" className="clearfix">
        <IntroVideo />
      </section>
      <IntroHero />,
      <AboutUs />,
      {/* <section id="team">
        <Team />
      </section>
      <section id="services" className="section-bg">
        <Services />
      </section>
      <section id="pricing" className="clearfix">
        <PricingTable />
      </section>
      <section id="why-us">
        <Reason />
      </section>
      <section id="testimonials" className="section-bg">
        <Testimonial />
      </section>
      <section id="portfolio" className="clearfix">
        <Portfolio />
      </section>
      <section id="clients" className="section-bg">
        <Clients />
      </section>
      <section id="contact">
        <Contacts />
      </section>
      <Footer /> */}
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}

export default Home;
