import React from "react";

function IntroHero() {
  return (
    <>
       <section id="hero" className="clearfix">
        <div className="container" data-aos="fade-up">
          <div className="hero-img" data-aos="zoom-out" data-aos-delay="200">
            <img src="assets/img/hero-img.svg" alt="" className="img-fluid" />
          </div>

          <div className="hero-info" data-aos="zoom-in" data-aos-delay="100">
            <h2>
              We provide
              <br />
              <span>solutions</span>
              <br />
              for your business!
            </h2>
            <div>
              <a href="#about" className="btn-get-started scrollto">
                Get Started
              </a>
              <a href="#services" className="btn-services scrollto">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default IntroHero;
