import { useRef } from "react";
import axios from "axios";
import "./style.css";

const LoginSignupPage = () => {
  const signupRef = useRef();
  const loginRef = useRef();

  const switchPage = (e) => {
    const switchers = document.querySelectorAll(".switcher");
    switchers.forEach((item) =>
      item.parentElement.classList.remove("is-active")
    );
    e.target.parentElement.classList.add("is-active");
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        username: signupRef.current.username.value,
        name: signupRef.current.name.value,
        email: signupRef.current.email.value,
        password: signupRef.current.password.value,
      };
      const response = await axios.post("http://localhost:5000/register", formData);
      // Handle successful registration, e.g., redirect to login page
      console.log("Registration successful:", response.data);
    } catch (error) {
      console.error("Registration failed:", error);
      // Handle registration failure, e.g., display error message to the user
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        email: loginRef.current.email.value,
        password: loginRef.current.password.value,
      };
      const response = await axios.post("http://localhost:5000/login", formData);
      // Handle successful login, e.g., store token in local storage and redirect to dashboard
      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login failure, e.g., display error message to the user
    }
  };

  return (
    <section className="forms-section">
      <div className="forms">
        <div className="form-wrapper is-active">
          <button type="button" onClick={switchPage} className="switcher switcher-login">
            Login
            <span className="underline" />
          </button>
          <form className="form form-login" onSubmit={handleLogin}>
            <fieldset>
              <legend>Please, enter your email and password for login.</legend>
              <div className="input-block">
                <label htmlFor="login-email">E-mail</label>
                <input id="login-email" type="email" ref={loginRef} name="email" required />
              </div>
              <div className="input-block">
                <label htmlFor="login-password">Password</label>
                <input id="login-password" type="password" ref={loginRef} name="password" required />
              </div>
            </fieldset>
            <button type="submit" className="btn-login">
              Login
            </button>
          </form>
        </div>
        <div className="form-wrapper">
          <button type="button" onClick={switchPage} className="switcher switcher-signup">
            Sign Up
            <span className="underline" />
          </button>
          <form className="form form-signup" onSubmit={handleSignUp}>
            <fieldset>
              <legend>
                Please, enter your email, password, and password confirmation for sign up.
              </legend>
              <div className="input-block">
                <label htmlFor="signup-username">Username</label>
                <input id="signup-username" type="username" ref={signupRef} name="username" required />
              </div>
              <div className="input-block">
                <label htmlFor="signup-name">Name</label>
                <input id="signup-name" type="name" ref={signupRef} name="name" required />
              </div>
              <div className="input-block">
                <label htmlFor="signup-email">E-mail</label>
                <input id="signup-email" type="email" ref={signupRef} name="email" required />
              </div>
              <div className="input-block">
                <label htmlFor="signup-password">Password</label>
                <input id="signup-password" type="password" ref={signupRef} name="password" required />
              </div>
            </fieldset>
            <button type="submit" className="btn-signup">
              Continue
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginSignupPage;
