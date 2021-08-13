import React from "react";

function Contacts() {
  return (
    <>
      <div className="container-fluid" data-aos="fade-up">
        <div className="section-header">
          <h3>Contact Us</h3>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="map mb-4 mb-lg-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                frameborder="0"
                style={{ border: "0", width: "100%", height: "340px" }}
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-5 info">
                <i className="bi bi-geo-alt"></i>
                <p>A108 Adam Street, NY 535022</p>
              </div>
              <div className="col-md-4 info">
                <i className="bi bi-envelope"></i>
                <p>info@example.com</p>
              </div>
              <div className="col-md-3 info">
                <i className="bi bi-phone"></i>
                <p>+1 5589 55488 55</p>
              </div>
            </div>

            <div className="form">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="form-group col-lg-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="form-group col-lg-6 mt-3 mt-lg-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" title="Send Message">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
