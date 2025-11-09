import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        backgroundColor: "navy",
        color: "white"
      }}
    >
      <h2>My Company</h2>

      <div
        style={{
          display: "flex",
          gap: "15px"
        }}
      >
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
        <Link to="/services" style={{ color: "white", textDecoration: "none" }}>Services</Link>
        <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
