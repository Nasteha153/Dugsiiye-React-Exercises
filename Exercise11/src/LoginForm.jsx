import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();

    // Simple simulation of login validation
    if (username && password) {
      setIsLoggedIn(true);
    } else {
      alert("Please enter username and password");
    }
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      {!isLoggedIn ? (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>

          <input
            type="text"
            placeholder="Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br /><br />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /><br />

          <button type="submit">Login</button>
        </form>
      ) : (
        <div>
          <h2>Welcome, {username}</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default LoginForm;