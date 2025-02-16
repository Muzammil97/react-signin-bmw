import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, InputField, CheckBox } from "../Component";
import { auth } from "../../firebaseConfig";  // Import Firebase auth
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const SignupForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [agree, setAgree] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!agree) {
            setError("Please agree to the terms.");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await updateProfile(user, {
                displayName: name,
            });

            console.log("User signed up:", user);
            navigate("/dashboard");
        } catch (firebaseError) {
            console.error("Signup error:", firebaseError.message);
            setError(firebaseError.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="user-form-container">
            <div className="user-form">
                <div>
                    <InputField
                        label="Name"
                        type="text"
                        placeholder="Enter your name here"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
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
                <CheckBox label={'By Signing up you agree to recieve updates and speacial Offers.'} checked={agree} onChange={() => setAgree(!agree)} />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <Button label="Submit" type="submit" />
            </div>

            <div className="image-side">
                <img
                    src="https://cdni.iconscout.com/illustration/free/thumb/free-sign-up-form-illustration-download-in-svg-png-gif-file-formats--log-register-user-login-account-call-to-action-pack-design-development-illustrations-3798675.png?f=webp"
                    alt="Signup illustration"
                />
            </div>
        </form>
    );
};

export default SignupForm;