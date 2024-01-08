import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    // Implement your signup logic here, e.g., make an API call
    console.log("Username:", username);
    console.log("Password:", password);
    // After successful signup, navigate to the home page or login page
    // You might want to redirect the user to the appropriate page after signup
    navigate("/");
  };

  return (
    <div className="Signup">
      <h1>Signup</h1>
      <form onSubmit={submit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>
      <br />
      <p>OR</p>
      <br />
      <Link to="/">Login Page</Link>
    </div>
  );
}

export default Signup;
