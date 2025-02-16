import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, InputField } from "../Component";
import { auth } from "../../firebaseConfig"; // Import Firebase auth
import { signInWithEmailAndPassword } from "firebase/auth"; // Import signin method

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          await signInWithEmailAndPassword(auth, email, password);
          console.log("User logged in successfully!");
          navigate("/dashboard");
      } catch (firebaseError) {
          console.error("Login error:", firebaseError.message);
          setError(firebaseError.message);
      }
  };

  return (
      <form onSubmit={handleSubmit} className="user-form-container">
          <div className="user-form">
              <div>
                  <InputField
                      label="Email id"
                      type="email"
                      placeholder="Enter your email id here"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputField
                      label="Password"
                      type="password"
                      placeholder="Enter your password here"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                  />
              </div>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <Button label="Submit" type="submit" />
          </div>

          <div className="image-side">
              <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/user-login-illustration-download-in-svg-png-gif-file-formats--password-profile-businessman-pack-business-illustrations-5857593.png"
                  alt="Sign In illustration"
              />
          </div>
      </form>
  );
};

export default LoginForm;