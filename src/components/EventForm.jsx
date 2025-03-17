import { useState } from "react";

export default function EventForm({ setEvents }) {
  const [form, setForm] = useState({ title: "", date: "", location: "", category: "Religious" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents(prev => [...prev, { id: Date.now(), ...form }]);
    setForm({ title: "", date: "", location: "", category: "Religious" });
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <input placeholder="Event Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
      <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required />
      <input placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} required />
      <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
        <option>Religious</option>
        <option>Social</option>
        <option>Charity</option>
      </select>
      <button type="submit" className="btn">Add Event</button>
    </form>
  );
}
