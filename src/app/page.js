'use client';
import Countdown from './components/Countdown';
import CommunityInfo from './components/CommunityInfo';

export default function HomePage() {
  return (
    <main className="bg-[#f0f0f0] p-5 rounded-lg min-h-screen flex flex-col items-center justify-center">
      <CommunityInfo />
      <Countdown />
    </main>
  );
}
