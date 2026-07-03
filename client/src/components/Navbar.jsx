import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/login");

  };

  return (

    <nav>

      <h2>

        <Link
          to="/"
          className="logo"
        >
          FinPilot
        </Link>

      </h2>

      <div className="nav-buttons">

        {!token ? (

          <>

            <Link to="/login">
              <button className="btn">
                Login
              </button>
            </Link>

            <Link to="/signup">
              <button className="btn">
                Sign Up
              </button>
            </Link>

          </>

        ) : (

          <button
            className="btn"
            onClick={logout}
          >
            Logout
          </button>

        )}

      </div>

    </nav>

  );

}

export default Navbar;