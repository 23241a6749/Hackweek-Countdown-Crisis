'use client'; // STEP 1: Make it a client component

import { useEffect, useState } from 'react';

// STEP 3: Function to calculate remaining time
const getRemainingTime = () => {
  const now = new Date();
  const hackweekEnd = new Date('2025-06-29T23:59:59');
  const diff = Math.max(0, Math.floor((hackweekEnd - now) / 1000));

  const days = Math.floor(diff / (24 * 60 * 60));
  const hours = Math.floor((diff % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((diff % (60 * 60)) / 60);
  const seconds = diff % 60;

  return { days, hours, minutes, seconds };
};

export default function Countdown() {
  const [remaining, setRemaining] = useState(getRemainingTime());

  // STEP 3: Update timer every second only in the browser
  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(getRemainingTime());
    }, 1000);

    return () => clearInterval(interval); // clean up
  }, []);

  return (
    <div className="flex items-center justify-center space-x-4 p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg">
      <TimeUnit label="Days" value={remaining.days} />
      <Separator />
      <TimeUnit label="Hours" value={remaining.hours} />
      <Separator />
      <TimeUnit label="Minutes" value={remaining.minutes} />
      <Separator />
      <TimeUnit label="Seconds" value={remaining.seconds} />
    </div>
  );
}

function TimeUnit({ label, value }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-white">{value.toString().padStart(2, '0')}</div>
      <div className="text-sm text-blue-100">{label}</div>
    </div>
  );
}

function Separator() {
  return <div className="text-2xl font-bold text-white">:</div>;
}
