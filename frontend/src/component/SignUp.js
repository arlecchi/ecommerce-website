import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navigation from "./Navigation";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isRobotChecked, setIsRobotChecked] = useState(false);

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError("");

        
        if (!isRobotChecked) {
            setError("Please confirm you are not a robot");
            return;
        }

        try {
            const response = await axios.post("http://api.localhost:3200/sign-up", { email, password });
            if (response.data.success) {
                navigate("/"); // Redirect to home page after successful sign-up
            } else {
                setError("Sign-up failed. Please try again.");
                navigate("/");
            }
        } catch (err) {
            setError("Error signing up. Please try again.");
            navigate("/");
        }
    };

    return (
        <div className="login-card">
            <Navigation />
            <div className="div" >
                <div className="image" />
                <div className="create-an-account">
                    <div className="logo"/>
                    <div className="content">
                        <div className="frame-2">
                            <div className="text-wrapper-3">Create an account</div>
                            <p className="description">
                                Already have an account? <span className="text-primary" style={{ cursor: "pointer" }} onClick={() => navigate("/login")} >Login</span>
                            </p>
                        </div>
                        <div className="frame-3">
                            <form onSubmit={handleSignUp} id="form">
                                <div className="text-field">
                                    <div className="frame-4">User Name</div>
                                    <input className="text-field-2" type="text" id="username-input" required />
                                </div>
                                {error && <div className="alert alert-danger">{error}</div>}
                                
                                <div className="text-field">
                                    <label className="frame-4">Email Address</label>
                                    <input className="text-field-2" type="email" value={email} id="email-input" onChange={(e) => setEmail(e.target.value)} required />
                                </div>

                                <div className="text-field">
                                    <label className="frame-4">Password</label>
                                    <input className="text-field-2" type="password" value={password} id="password-input" onChange={(e) => setPassword(e.target.value)} required />
                                    <p className="error-message">
                                        Use 8 or more characters with a mix of letters, numbers &amp; symbols
                                    </p>
                                </div>

                                
                                <div className="not-a-robot-checkbox">
                                    <label htmlFor="notRobot" className="text-wrapper-7">I’m not a robot
                                    <input
                                    className="check-box"
                                        type="checkbox"
                                        id="notRobot"
                                        checked={isRobotChecked}
                                        onChange={(e) => setIsRobotChecked(e.target.checked)}
                                    />
                                    </label>
                                </div>
                                <div className="frame-5"></div>
                                <button type="submit" className="primaryBtn sign-btn px-4 py-2">Create an Account</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
