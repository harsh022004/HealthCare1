import React from "react";
import doctorImage from "../Photos/pngwing 1.png"; // Make sure to place images in src/assets/

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Healthcare</h2>
        <p>Reduce HbA1c | No More Medications</p>
        <p>If you are looking for a creative and fast way to join a healthcare team, we have the perfect solution.</p>
        <button>Book Consultation</button>
      </div>
      <img src={doctorImage} alt="Doctor with stethoscope" />
    </section>
  );
};

export default Hero;
