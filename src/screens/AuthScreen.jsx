import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../Comp/LoginForm/LoginForm";
import SignupForm from "../Comp/SignupForm/SignupForm";
import "./AuthScreen.css";


const AuthScreen = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const handleLoginClick = () => {


    setIsLogin(!isLogin);

  };
  return (
    <div className="auth-form-container">
    <div className="auth-form">
      <h2>{isLogin ? "Login" : "SignUp"}</h2>
      <p>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <span onClick={handleLoginClick} className="toggle-link" style={{color: "#004080", cursor: "pointer"}}>
          {isLogin ? "Sign up here" : "Login here"}
        </span>
      </p>
      {isLogin ? <LoginForm /> : <SignupForm />}
    </div>
  </div>
  );
};

export default AuthScreen;
