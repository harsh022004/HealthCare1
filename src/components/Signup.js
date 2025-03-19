import React from "react";
import signupImage from "../Photos/chris-lee-70l1tDAI6rM-unsplash 1.png"; // Ensure image is in the Photos folder

const Signup = () => {
  return (
    <section className="auth">
      <div className="container">
        <div className="form-container">
          <h2>Get Started Now</h2>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <div className="checkbox-container">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms"> I agree to the terms & policy</label>
          </div>
          <button>Signup</button>
          <div className="social-login">
            <button className="google-btn">Sign up with Google</button>
            <button className="apple-btn">Sign up with Apple</button>
          </div>
          <p className="signin-link">Have an account? <a href="/login">Sign In</a></p>
        </div>
        <div className="image-container">
          <img src={signupImage} alt="Medical Signup" />
        </div>
      </div>
    </section>
  );
};

export default Signup;
