'use client';

import { useState } from 'react';

export default function BasicInfo() {
  const [eventTitle, setEventTitle] = useState('');
  const [organizer, setOrganizer] = useState('');
  const [eventType, setEventType] = useState('type');

  const handleSaveClick = async () => {
    try {
      const response = await fetch(
        'http://localhost:3001/api/save-event-data',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            eventTitle,
            organizer,
            eventType,
          }),
        },
      );

      const result = await response.json();
      if (result.success) {
        console.log('Event data saved successfully!');
        // Optionally, you can redirect or perform any other action after saving
      } else {
        console.error('Failed to save event data');
      }
    } catch (error) {
      console.error('Error saving event data:', error);
    }
  };
  return (
    <div>
      <h1 className="text-3xl font-bold">Basic Info</h1>
      <p className="text-sm">
        Name your event and tell event-goers why they should come. Add details
        that highlight what makes it unique.
      </p>
      <div className="mt-8">
        <div>
          <p className="text-sm font-bold mb-3">Event title</p>
          <input
            type="text"
            className="w-full py-2 pl-2 pr-4 text-sm text-gray-800 bg-white focus:outline-[#1e0a3c] focus:bg-white focus:text-gray-900 border border-gray-300"
            placeholder="Be clear and descriptive."
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
          />
        </div>
        <div>
          <p className="text-sm font-bold mb-3 mt-3">Organizer</p>
          <input
            type="text"
            className="w-full py-2 pl-2 pr-4 text-sm text-gray-800 bg-white focus:outline-[#1e0a3c] focus:bg-white focus:text-gray-900 border border-gray-300"
            placeholder="Tell attendees who is organizing this event."
            value={organizer}
            onChange={(e) => setOrganizer(e.target.value)}
          />
        </div>
        <div>
          <p className="text-sm font-bold mb-3 mt-3">Type event</p>
          <select
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            name="type"
            className="w-full py-2 pl-2 pr-4 text-sm text-gray-800 bg-white focus:outline-[#1e0a3c] focus:bg-white focus:text-gray-900 border border-gray-300"
          >
            <option value="type">Type</option>
            <option value="concert">Concert</option>
            <option value="festival">Festival</option>
            <option value="social gathering">Social Gathering</option>
            <option value="seminar">Seminar</option>
            <option value="networking event">Networking Event</option>
            <option value="tournament">Tournament</option>
          </select>
        </div>
        <div>
          <button onClick={handleSaveClick}>Save Event Data</button>
        </div>
      </div>
    </div>
  );
}
