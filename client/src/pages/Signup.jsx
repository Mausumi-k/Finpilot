import "./Signup.css";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Create Account</h1>
        <p>Join FinPilot today</p>

        <form>
          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button type="submit">
            Sign Up
          </button>
        </form>

        <p className="bottom-text">
        Already have an account?
        <Link to="/login"> Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;