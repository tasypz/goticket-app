'use client';
import { useState } from 'react';

export default function DateAndTime() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };
  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold">Date and time</h1>
      <p className="text-sm">
        Tell event-goers when your event starts and ends so they can make plans
        to attend.
      </p>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Date:</label>
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
          className="mt-1 p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Time:</label>
        <input
          type="time"
          value={time}
          onChange={handleTimeChange}
          className="mt-1 p-2 border border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
}
