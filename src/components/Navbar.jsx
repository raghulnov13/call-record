import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">📞 Bharat FIH CRM</div>
      <div className="navbar-right">
        <Link to="/">Report</Link>
        <Link to="/logs">Call Log</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
