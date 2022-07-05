import { useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../store/auth-context";

function Navbar(props) {
  const authCtx = useContext(AuthContext)
  const isLoggedIn = authCtx.isLoggedIn

  return (

    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Shimazu Sushi</span>
        <ul className="nav">
        { !isLoggedIn &&
          <li className="nav-item text-light">
            <Link to="/login">Login</Link>
            {/* <a className="nav-link text-light" href="#" onClick={props.onClickLogin}>{props.login}</a> */}
          </li>
        }
        { isLoggedIn &&
          <li className="nav-item">
            <a className="nav-link text-light" href="#">{props.logout}</a>
          </li>
        }
        </ul>
      </div>

    </nav>
  );
}

export default Navbar;