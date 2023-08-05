import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-main">
      <div className="about-background">
        <h1>About Site</h1>
      </div>
      <div className="about-text">
        <div className="about-description">
          <h1>Our History</h1>
          <p>
            Trippy is owned and managed by Trippy .In Pvt. Ltd., a leading brand
            in web designing services and e-commerce solutions. Trippy .In Pvt.
            Ltd. is counted for its expertise in web solutions and its top
            ranking business portals. Our invincible expertise and rich
            experience has raised our spirit to reach ahead from our client's
            expectation. Commendable success rate of other portals managed by
            Trippy is a live paradigm of our work excellence.
          </p>
        </div>
        <div className="about-description">
          <h1>Our Mission</h1>
          <p>
            Our mission is to touch the horizon where our capabilities may
            successfully meet with the requirements of our clients, that too
            with ultimate transparency and cost-effectiveness.
          </p>
        </div>
        <div className="about-description">
          <h1>Our Vision</h1>
          <p>
            To show the seeds of par-excellence services with customer centric
            approach and reap the trust of worldwide clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
