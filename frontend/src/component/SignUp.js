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
                <form onSubmit={handleSignUp}>
                    {error && <div className="alert alert-danger">{error}</div>}
                    
                    <div className="mb-3">
                        <label className="form-label">Email Address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    
                    <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    
                    <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                    <p className="text-center mt-3">
                        Already have an account? <span className="text-primary" style={{ cursor: "pointer" }} onClick={() => navigate("/login")} >Login</span>
                    </p>
                </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
