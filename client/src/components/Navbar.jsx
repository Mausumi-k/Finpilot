import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
    <h2>
     <Link to="/" className="logo">
    FinPilot
    </Link>
    </h2>

      <div>
        <div className="nav-buttons">
        <Link to="/login">
            <button className="btn">Login</button>
        </Link>

        <Link to="/signup">
            <button className="btn">Sign Up</button>
        </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

