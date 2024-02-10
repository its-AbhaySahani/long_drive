import "./style.css";
import { useRef } from "react";
import axios from "axios";

const loginSignupPage = () => {

  const signupRef = useRef()

  const switchPage = (e) => {
    const switchers = document.querySelectorAll(".switcher");
    console.log(`Switchers: ${switchers[1]}`)
    switchers.forEach((item) =>
      item.parentElement.classList.remove("is-active")
    );
    console.log("THIS",this)
    e.target.parentElement.classList.add("is-active");
  };

  //signup handler
  const handleSignUp = () => {
    axios.post("http://localhost:5000/register", signupRef.current, {
      headers: {
        "Content-Type": "application/"
      }
    })
  }



  return (
    <section className="forms-section">
      <div className="forms">
        <div className="form-wrapper is-active">
          <button type="button" onClick={switchPage} className="switcher switcher-login">
            Login
            <span className="underline" />
          </button>
          <form className="form form-login">
            <fieldset>
              <legend>Please, enter your email and password for login.</legend>
              <div className="input-block">
                <label htmlFor="login-email">E-mail</label>
                <input id="login-email" type="email" required />
              </div>
              <div className="input-block">
                <label htmlFor="login-password">Password</label>
                <input id="login-password" type="password" required />
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
          <form className="form form-signup" ref={signupRef}>
            <fieldset>
              <legend>
                Please, enter your email, password and password confirmation for
                sign up.
              </legend>
              <div className="input-block">
                <label htmlFor="signup-username">Username</label>
                <input id="signup-username" type="username" required />
              </div>
              <div className="input-block">
                <label htmlFor="signup-name">Name</label>
                <input id="signup-name" type="name" required />
              </div>
              <div className="input-block">
                <label htmlFor="signup-email">E-mail</label>
                <input id="signup-email" type="email" required />
              </div>
              <div className="input-block">
                <label htmlFor="signup-password">Password</label>
                <input id="signup-password" type="password" required />
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
export default loginSignupPage;
