import { useState } from "react";

const EventManagement = () => {
  const [events, setEvents] = useState([
    { id: 1, title: "Conference", date: "2024-07-01", location: "New York" },
    { id: 2, title: "Workshop", date: "2024-07-10", location: "San Francisco" },
    { id: 3, title: "Seminar", date: "2024-07-15", location: "Chicago" },
  ]);

  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    location: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({
      ...newEvent,
      [name]: value,
    });
  };

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.date && newEvent.location) {
      const nextId = events.length > 0 ? events[events.length - 1].id + 1 : 1;
      setEvents([...events, { ...newEvent, id: nextId }]);
      setNewEvent({ title: "", date: "", location: "" });
    } else {
      alert("Please enter all fields.");
    }
  };

  const handleDeleteEvent = (id) => {
    const updatedEvents = events.filter((event) => event.id !== id);
    setEvents(updatedEvents);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Event Management System</h2>

      {/* Form to add new event */}
      <div className="mb-4">
        <h5>Add New Event</h5>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={newEvent.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input
              type="date"
              className="form-control"
              id="date"
              name="date"
              value={newEvent.date}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              id="location"
              name="location"
              value={newEvent.location}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleAddEvent}
          >
            Add Event
          </button>
        </form>
      </div>

      {/* List of events */}
      <div>
        <h5>Events List</h5>
        <ul className="list-group">
          {events.map((event) => (
            <li
              key={event.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{event.title}</strong> - {event.date}, {event.location}
              </div>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDeleteEvent(event.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventManagement;
