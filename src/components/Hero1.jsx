import React from "react";

export default function Hero() {
  return (
    <section className="pt-28 pb-10 bg-gradient-to-b from-[#c3d6e0] to-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h1 className="text-6xl md:text-8xl font-extrabold text-slate-900 leading-tight">
          Accept Payments
          <span className="block bg-gradient-to-r from-sky-500 to-emerald-500 text-transparent bg-clip-text">
            Without Limits
          </span>
        </h1>

        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Empower your business with seamless payment solutions. Built for scale, 
          designed for simplicity. Accept payments anytime, anywhere.
        </p>

       
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <div className="badge-fintech">Instant Setup</div>
          <div className="badge-fintech">Global Reach</div>
          <div className="badge-fintech">Bank-Level Security</div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
          <button className="px-8 py-3 rounded-xl bg-gradient-to-r 
            from-sky-500 to-emerald-500 text-white font-semibold shadow-lg hover:opacity-95">
            Start Free Trial
          </button>

          <button className="px-8 py-3 rounded-xl bg-white border border-slate-300 
            text-slate-700 font-semibold hover:bg-slate-50">
            View Demo
          </button>
        </div>

        <p className="mt-10 text-slate-400 text-sm">
          Trusted by 10,000+ businesses worldwide
        </p>
      </div>
    </section>
  );
}
