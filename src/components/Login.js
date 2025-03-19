import React from "react";
import loginImage from "../Photos/chris-lee-70l1tDAI6rM-unsplash 2.png"; // Ensure image is in the Photos folder

const Login = () => {
  return (
    <section className="login">
      <div className="container">
        <div className="form-container">
          <h2>Welcome back!</h2>
          <h4>Enter your credentials to access your account</h4>
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <div className="checkbox-container">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember"> Remember me for 30 days</label>
          </div>
          <button>Login</button>
          <div className="social-login">
            <button className="google-btn">Login with Google</button>
            <button className="apple-btn">Login with Apple</button>
          </div>
          <p className="signin-link">Don’t have an account? <a href="/signup">Sign Up</a></p>
        </div>
        <div className="image-container">
          <img src={loginImage} alt="Medical Login" />
        </div>
      </div>
    </section>
  );
};

export default Login;
