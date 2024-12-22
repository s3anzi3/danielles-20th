import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css"; // Add this import for CSS
const generateRandomSnowflakes = () => {
    return Array.from({ length: 150 }).map((_, i) => {
        const style = {
            "--random-x": Math.random() * 100, // Horizontal position (0-100%)
            "--random-y": Math.random() * 100, // Vertical position (0-100%)
            "--random-size": 1 + Math.random() * 1.5, // Size multiplier (1-2.5rem)
            "--random-delay": Math.random() * 5, // Animation delay (0-5s)
        };
        return <div key={i} className="snowflake" style={style}>❄</div>;
    });
};

const Login = () => {
    const [middleName, setMiddleName] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (middleName.toLowerCase() === "judith") {
            navigate("/main");
        } else {
            alert("Access Denied: Incorrect middle name.");
        }
    };

    return (
        <div className="login-container" aria-hidden="true">
            {generateRandomSnowflakes()}
            <h1 className="login-title">Welcome</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Middle Name"
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                    className="login-input"
                />
                <button type="submit" className="login-button">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Login;
