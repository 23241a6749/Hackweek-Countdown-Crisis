import { useEffect, useState } from 'react';

export default function CommunityInfo() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchMessage = async () => {
      const res = await fetch('/cosc.json');
      const data = await res.json();
      setData(data);
    };

    fetchMessage();
  }, []);

  if (!data) {
    return (
      <div className="text-center text-gray-500 text-lg mt-10">
        Loading community info...
      </div>
    );
  }

  return (
    <div className="text-center mb-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{data.name}</h1>
      <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">{data.description}</p>
      <div className="space-y-3 text-gray-700">
        <div className="flex items-center justify-center">
          <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-lg">{data.date}</span>
        </div>
        <div className="flex items-center justify-center">
          <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-lg">{data.location}</span>
        </div>
        <div className="flex items-center justify-center">
          <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          <a href={data.url} className="text-blue-600 hover:text-blue-800 underline text-lg" target="_blank" rel="noopener noreferrer">
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
}
