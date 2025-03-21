import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>CommunionHub</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
      </div>
    </nav>
  );
}
