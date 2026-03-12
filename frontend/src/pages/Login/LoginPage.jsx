import { useState } from "react";
import "../../Style/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <div className="loginPage_container">
      <form className="loginPage_form" onSubmit={handleSubmit}>
        <h2 className="loginPage_title">Login</h2>

        <input
          className="loginPage_input"
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="loginPage_input"
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="loginPage_button">Login</button>
      </form>
    </div>
  );
}

export default Login;