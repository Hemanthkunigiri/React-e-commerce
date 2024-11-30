import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/reg", { email, password });
      if (response.data.success) {        
        alert(response.data.message || "Registration failed.");
      } else {
        alert("Registration successful! Please log in.");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const formStyle = {
    width: "300px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
  };

  const labelStyle = {
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold",
    fontSize: "14px"
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px"
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer"
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "24px",
    color: "#333"
  };

  return (
    <div style={formStyle}>
      <h2 style={headerStyle}>Register Page</h2>
      <form onSubmit={handleRegister}>
        <label style={labelStyle}>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <label style={labelStyle}>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        <input type="submit" value="REGISTER" style={buttonStyle} />
      </form>
    </div>
  );
};

export default SignUp;
