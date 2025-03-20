import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navigation from "./Navigation";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError("");
        

        

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
        <div className="login-card" >
            <Navigation />
            <div className="div">
                <div className="image" />
                <div className="create-an-account">
                    <div className="logo"/>
                    <div className="content">
                        <div className="frame-2">
                            <div className="text-wrapper-3">Login</div>
                        </div>
                        <div className="frame-3">
                            <form onSubmit={handleSignUp}>
                                <div className="text-field">
                                    <div className="frame-4">User Name</div>
                                    <input className="text-field-2" type="text" required />
                                </div>
                                {error && <div className="alert alert-danger">{error}</div>}
                                

                                <div className="text-field">
                                    <label className="frame-4">Password</label>
                                    <input className="text-field-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                    <p className="description">
                                    Don’t have an account? <span className="text-primary" style={{ cursor: "pointer" }} onClick={() => navigate("/sign-up")} >Sign Up</span>
                                    </p>
                                </div>

                                
                                
                                <button type="submit" className="primaryBtn sign-btn px-4 py-2">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
