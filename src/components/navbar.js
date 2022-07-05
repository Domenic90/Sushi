import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Shimazu Sushi</span>
       <ul className="nav">
  
  <li className="nav-item">
    <a className="nav-link btn-dark text-light mr-2" href="login">Login</a>
    {/* provvisorio, non va bene perché essendo html e non jsx non è single page */}
  </li>
  <li className="nav-item">
    <a className="nav-link btn-dark text-light">Registrati</a>
  </li>
  
</ul>
      </div>
    
    </nav>
  );
}

export default Navbar;