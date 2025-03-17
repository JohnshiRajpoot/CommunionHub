import { useState } from "react";
import EventCard from "../components/EventCard";
import EventForm from "../components/EventForm";

const sampleEvents = [
  { id: 1, title: "Community Prayer", date: "2025-04-10", location: "Church Hall", category: "Religious" },
  { id: 2, title: "Food Donation Drive", date: "2025-03-20", location: "City Center", category: "Charity" }
];

export default function Events() {
  const [events, setEvents] = useState(sampleEvents);
  const [filter, setFilter] = useState("All");

  const filteredEvents = filter === "All" ? events : events.filter(event => event.category === filter);

  return (
    <div className="events-container">
      <h2>Upcoming Events</h2>
      <div className="filter">
        <label>Filter by category: </label>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option>All</option>
          <option>Religious</option>
          <option>Social</option>
          <option>Charity</option>
        </select>
      </div>

      {filteredEvents.map(event => <EventCard key={event.id} event={event} />)}

      <h2>Add New Event</h2>
      <EventForm setEvents={setEvents} />
    </div>
  );
}
