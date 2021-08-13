import React from "react";

function IntroVideo() {
  return (
    <>
      <header style={{ marginBottom: "-10px" }}>
        {/* <div className="overlay"></div> */}
        <section >
          <div id="video" className="video" data-aos="zoom-out" data-aos-delay="200">
        <video
          playsinline="playsinline"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source
            src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
            type="video/mp4"
          />
        </video>
        </div>
        </section>

        {/* <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-100 text-white">
              <h1 className="display-3">Video Header</h1>
              <p className="lead mb-0">Using HTML5 Video and Bootstrap</p>
            </div>
          // </div>
        </div> */}
      </header>
    </>
  );
}

export default IntroVideo;
