import React from "react";
import "./ServicePage.css";
import bussines from "../../assets/ibrahim-boran-asiJSIcFlBE-unsplash.jpg";
import customer from "../../assets/blake-wisz-Xn5FbEM9564-unsplash.jpg";
import traveling from "../../assets/juliana-kozoski-IoQioGLrz3Y-unsplash.jpg";

const ServicePage = () => {
  return (
    <div className="servicepage-main">
      <div className="servicepage-bg">
        <h1>Service Center</h1>
      </div>
      <div className="recent-services">
        <h1>Advanced Service</h1>
        <p>You can solve and repair everything on your phone.</p>
        <div className="services-cards">
          <div className="card">
            <div className="image-div">
              <img src={bussines} alt="biznis" />
            </div>
            <h2>Business Services</h2>
            <p>
              Business services is a general term that describes work that
              supports a business but does not produce a tangible commodity.
              Information technology (IT) is an important business service that
              supports many other business services such as procurement,
              shipping and finance.
            </p>
          </div>
          <div className="card">
            <div className="image-div">
              <img src={customer} alt="musterija" />
            </div>
            <h2>Customers Services</h2>
            <p>
              Customer service is the support you offer your customers — both
              before and after they buy and use your products or services — that
              helps them have an easy, enjoyable experience with your brand. But
              customer service is more than solving a customer's problems and
              closing tickets.
            </p>
          </div>
          <div className="card">
            <div className="image-div">
              <img src={traveling} alt="putovanje" />
            </div>
            <h2>Traveling Services</h2>
            <p>
              Travel Services means arranging or booking vacation or travel
              packages, travel reservations or accommodations, tickets for
              domestic or foreign travel by air, rail, ship, bus, or other
              medium of transportation, or hotel or other lodging
              accommodations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
