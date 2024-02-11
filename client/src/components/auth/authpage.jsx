import { useRef } from "react";
import axios from "axios";
import { useState, useContext } from "react";
import userContext from "../../context/userContext";
import {useNavigate} from "react-router-dom";
import "./style.css";

const LoginSignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    name: "",
  });

  const [user, setUser] = useContext(userContext);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

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
      const response = await axios.post("http://localhost:5000/register", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      
      });

      if (response.status === 200) {
        console.log("Registration successful:", response.data);
        setUser(response.data);
        Navigate("/dashboard");
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", formData);
      if(response.status === 200){
        setUser(response.data);
        console.log("Login successful:", response.data);
      }
    } catch (error) {
      console.error("Login failed:", error);
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
            </fieldset>
              <div className="input-block">
                <label htmlFor="login-username">Username</label>
                <input id="login-username" type="Text" name="username" value={formData.username} onChange={e=>setFormData({...formData, username: e.target.value})} required />
              </div>
              <div className="input-block">
                <label htmlFor="login-password">Password</label>
                <input id="login-password" type="password" name="password" value={formData.password} onChange={e=>setFormData({...formData, password: e.target.value})} required />
              </div>
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
            </fieldset>
              <div className="input-block">
                <label htmlFor="signup-username">Username</label>
                <input id="signup-username" type="Text" name="username" value={formData.username} onChange={e=>setFormData({...formData, username: e.target.value})} required />
              </div>
              <div className="input-block">
                <label htmlFor="signup-name">Name</label>
                <input id="signup-name" type="Text"  name="name" value={formData.name} onChange={e=>setFormData({...formData, name: e.target.value})} required />
              </div>
              <div className="input-block">
                <label htmlFor="signup-email">E-mail</label>
                <input id="signup-email" type="email"  name="email" value={formData.email} onChange={e=>setFormData({...formData, email: e.target.value})} required />
              </div>
              <div className="input-block">
                <label htmlFor="signup-password">Password</label>
                <input id="signup-password" type="password"  name="password" value={formData.password} onChange={e=>setFormData({...formData, password: e.target.value})} required />
              </div>
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
