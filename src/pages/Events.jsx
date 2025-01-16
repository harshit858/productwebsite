import React from 'react';
import './Events.css';

function Events() {
  return (
    <div id="events" className="container">
      <h1>Upcoming Events</h1>
      <div className="event-item">
        <h2>Event 1</h2>
        <p>Details about Event 1.</p>
      </div>
      <div className="event-item">
        <h2>Event 2</h2>
        <p>Details about Event 2.</p>
      </div>
    </div>
  );
}

export default Events;
