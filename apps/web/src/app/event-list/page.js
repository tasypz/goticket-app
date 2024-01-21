'use client';
import 'tailwindcss/tailwind.css';

import { useEffect, useState } from 'react';

export default function CreateEventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/get-events')
      .then((response) => response.json())
      .then((data) => {
        setEvents(data.events);
      })
      .catch((error) => {
        console.log('Error fetching events:', error);
      });
  }),
    [];
  return (
    <div className="mt-10 mx-5 mb-10">
      <h1 className="text-2xl font-bold mb-5">New Event</h1>
      <div className="grid grid-flow-row md:grid-cols-4 gap-x-4 gap-y-8 justify-items-center">
        {events.map((event) => (
          <div
            key={event.id}
            className="max-w-sm rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-md"
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{event.eventTitle}</div>
              <div className="border-t border-gray-200 my-4"></div>
              <p>{event.organizer}</p>
              <p>{event.eventType}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
