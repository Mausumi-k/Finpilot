import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Welcome Back!</h1>
        <p>Login to continue using FinPilot</p>

        <form>
          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button type="submit">
            Login
          </button>
        </form>

        <p className="bottom-text">
        Don't have an account?
        <Link to="/signup"> Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;