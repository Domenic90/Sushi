import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import AuthContext from "../store/auth-context";

function Navbar() {
  const navigate = useNavigate()
  const authCtx = useContext(AuthContext)
  const isLoggedIn = authCtx.isLoggedIn

  const logoutHandler = () => {
    authCtx.logout()
    navigate("/")
  }

  return (

    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Shimazu Sushi</span>
        <ul className="nav">
        { !isLoggedIn &&
          <li className="nav-item">
            <Link to="/login" className="text-light">Login</Link>
          </li>
        }
        { isLoggedIn &&
          <li className="nav-item">
            <button onClick={logoutHandler} className="btn-dark text-light">Logout</button>
          </li>
        }
        </ul>
      </div>

    </nav>
  );
}

export default Navbar;