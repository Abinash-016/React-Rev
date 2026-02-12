import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "1234") {
      login(email, "admin");
      navigate("/dashboard", { replace: true });
    }else if (email === "user@gmail.com" && password === "1234") {
      login(email, "user");
      navigate("/dashboard", { replace: true });
    }else {
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button type="submit">Login</button>
    </form>
  )
}


export default Login;
