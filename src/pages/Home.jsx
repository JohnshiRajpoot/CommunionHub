import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1>Connecting People Across Faiths & Interests</h1>
      <p>Join events that inspire and connect communities.</p>
      <Link to="/events" className="btn">Explore Events</Link>
    </div>
    
  );
}
