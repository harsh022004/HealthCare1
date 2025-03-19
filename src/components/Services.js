import React from "react";
import service1 from "../Photos/Social Media Lots Of Followers Post Engagement (1).png";
import service2 from "../Photos/Empty Inbox 1.png";
import service3 from "../Photos/Business Startup Character Black Man.png";
import service4 from "../Photos/Business Business Trip.png";

const Services = () => {
  return (
    <section className="services">
      <div className="service1">
        <img src={service1} alt="Video Consultation" />
        <h3>Instant Video Consultation</h3>
        <p>Connect with a doctor instantly.</p>
      </div>
      <div className="service2">
        <img src={service2} alt="Find Doctors" />
        <h3>Find The Doctors Near You</h3>
        <p>Contact experienced doctors nearby.</p>
      </div>
      <div className="service3">
        <img src={service3} alt="Medicine Delivery" />
        <h3>24/7 Medicine</h3>
        <p>Medicine delivered to your doorstep.</p>
      </div>
      <div className="service4">
        <img src={service4} alt="Lab Tests" />
        <h3>Lab Tests</h3>
        <p>Simple and hassle-free lab tests.</p>
      </div>
    </section>
  );
};

export default Services;
