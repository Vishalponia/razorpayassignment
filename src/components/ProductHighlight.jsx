
import React, { useEffect, useState } from "react";

export default function ProductHighlightStats() {
  // Counting animation hook
  const useCount = (end, duration = 2000) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
        setValue(start);

        if (start >= end) clearInterval(timer);
      }, stepTime);

      return () => clearInterval(timer);
    }, [end, duration]);

    return value;
  };

  
  const payments = useCount(1000); 
  const business = useCount(1000);
  const countries = useCount(135);
  const uptime = useCount(99);

  return (
    <section className="py-32 bg-gradient-to-b from-[#d7eaff] to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Section Title */}
        <h2
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r 
          from-blue-500 to-teal-400 text-transparent bg-clip-text leading-tight"
        >
          Trusted by businesses <br /> around the globe
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-20">

          {/* CARD 1 */}
          <div className="stat-card">
            <h3 className="stat-value text-3xl  text-gray-400">
              {(payments / 1000).toFixed(1)}B+
            </h3>
            <p className="stat-label text-2xl">Payments Processed</p>
          </div>

          {/* CARD 2 */}
          <div className="stat-card">
            <h3 className="stat-value text-3xl text-gray-400">{business.toLocaleString()}+</h3>
            <p className="stat-label text-2xl">Active Businesses</p>
          </div>

          {/* CARD 3 */}
          <div className="stat-card">
            <h3 className="stat-value text-3xl  text-gray-400">{countries}+</h3>
            <p className="stat-label text-2xl">Countries Supported</p>
          </div>

          {/* CARD 4 */}
          <div className="stat-card">
            <h3 className="stat-value text-3xl  text-gray-400">{uptime}.99%</h3>
            <p className="stat-label text-2xl">Uptime Guarantee</p>
          </div>
        </div>
      </div>

      <style>
        {`
          .stat-card {
            @apply bg-white/70 backdrop-blur-xl border border-slate-200
            rounded-3xl p-12 shadow-lg min-h-[240px]
            flex flex-col items-center justify-center 
            transition transform hover:-translate-y-1 hover:shadow-2xl;
          }

          .stat-value {
            @apply text-5xl font-extrabold 
            bg-gradient-to-r from-blue-500 to-teal-400 
            text-transparent bg-clip-text;
          }

          .stat-label {
            @apply text-slate-600 mt-2 text-lg font-medium;
          }
        `}
      </style>
    </section>
  );
}
