import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navigation from "./Navigation";

const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError("");
        
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post("http://api.localhost:3200/sign-up", { email, password });
            if (response.data.success) {
                navigate("/"); // Redirect to home page after successful sign-up
            } else {
                setError("Sign-up failed. Please try again.");
            }
        } catch (err) {
            setError("Error signing up. Please try again.");
        }
    };

    return (
        <div className="create-account-card" style={{ background: "#FF0073" }}>
            <Navigation />
            <div className="div">
                <div className="image" />
                <div className="create-an-account">
                    <div className="logo"/>
                    <div className="content">
                        <div className="frame-2">
                            <div className="text-wrapper-3">Create an account</div>
                            <p className="text-center mt-3">
                                Already have an account? <span className="text-primary" style={{ cursor: "pointer" }} onClick={() => navigate("/login")} >Login</span>
                            </p>
                        </div>
                        <div className="frame-3">
                            <form onSubmit={handleSignUp}>

                                <div className="text-field">
                                    <div className="frame-4">User Name
                                    </div>
                                        <input className="text-field-2"
  
                                            type="text"
                                            required
                                        />
                                </div>
                                {error && <div className="alert alert-danger">{error}</div>}
                                
                                <div className="text-field">
                                    <label className="frame-4">Email Address</label>

                                    <input className="text-field-2"
                                        type="email" 
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)} 
                                        required 
                                    />
                                </div>

                                <div className="text-field">
                                    <label className="frame-4">Password</label>

                                    <input className="text-field-2"
                                        type="password" 

                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)} 
                                        required 
                                    />
                                    <p className="error-message">
                                    Use 8 or more characters with a mix of letters, numbers &amp;
                                    symbols
                                    </p>
                                </div>

                                <div className="text-field">
                                    <label className="frame-4">Confirm Password</label>

                                    <input className="text-field-2"
                                        type="password" 
                                        
                                        value={confirmPassword} 
                                        onChange={(e) => setConfirmPassword(e.target.value)} 
                                        required 
                                    />
                                </div>
                                <div className="not-a-robot-checkbox">
                                    <div className="frame-5">

                                    <div className="text-wrapper-7">I’m not a robot</div>
                                    </div>
                                </div>
                                
                                <button type="submit" className="btn btn-primary w-100">Sign Up</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
