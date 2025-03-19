import React from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
    const navigate = useNavigate();

    const handleNavigateAndScroll = (sectionId) => {
        navigate("/"); // Navigate to the homepage first
        
        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }, 100); // Short delay ensures the homepage loads before scrolling
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container">
                <a 
                    className="navbar-brand" 
                    onClick={() => handleNavigateAndScroll("home")} 
                    style={{ cursor: "pointer" }}
                >
                    MerchVerse
                </a>
                <li className="ms-auto me-2 d-flex align-items-center d-lg-none">
                    <button className="btnIcon mx-2">
                        <i className="bi bi-bag position-relative">
                            <div className="circleBadge position-absolute top-0 end-0 transform-translate-middle"></div>
                        </i>
                    </button>
                </li>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <button 
                                className="nav-link mx-2 active" 
                                onClick={() => handleNavigateAndScroll("home")} 
                                style={{ background: "none", border: "none", cursor: "pointer" }}
                            >
                                Home
                            </button>
                        </li>
                        <li className="nav-item">
                            <button 
                                className="nav-link mx-2" 
                                onClick={() => handleNavigateAndScroll("category")} 
                                style={{ background: "none", border: "none", cursor: "pointer" }}
                            >
                                Category
                            </button>
                        </li>
                        <li className="nav-item">
                            <button 
                                className="nav-link mx-2" 
                                onClick={() => handleNavigateAndScroll("product")} 
                                style={{ background: "none", border: "none", cursor: "pointer" }}
                            >
                                Product
                            </button>
                        </li>
                        <li className="d-lg-flex align-items-center d-none">
                            <button className="btnIcon mx-2">
                                <i className="bi bi-bag position-relative">
                                    <div className="circleBadge position-absolute top-0 end-0 transform-translate-middle"></div>
                                </i>
                            </button>
                        </li>
                    </ul>
                    <div className="d-flex btnWrapper mt-lg-0 mt-5">
                        <button className="w-100 secondaryBtn">Sign In</button>
                        <button className="w-100 primaryBtn">Login</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
