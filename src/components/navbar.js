function Navbar(props) {

  return (

    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Shimazu Sushi</span>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={props.onClickLogin}>{props.login}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={props.onClickRegistrazione} >{props.registrati}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">{props.logout}</a>
          </li>
        </ul>
      </div>

    </nav>
  );
}

export default Navbar;