
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-xl shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

         
          <div className="text-4xl font-bold text-blue-500 hover:text-blue-600 cursor-pointer">
            Razorpay
          </div>

         
          <nav className="hidden md:flex items-center gap-10 text-[20px] font-medium text-slate-700">
            <a className="hover:text-blue-500 transition cursor-pointer" href="#">Features</a>
            <a className="hover:text-blue-500 transition cursor-pointer" href="#">Pricing</a>
            <a className="hover:text-blue-500 transition cursor-pointer" href="#">Docs</a>
            <a className="hover:text-blue-500 transition cursor-pointer" href="#">About</a>
          </nav>

     
          <div className="hidden md:flex items-center gap-4">
            <button className="text-slate-700 hover:text-blue-500 cursor-pointer">Sign In</button>

            <button className="px-5 py-2 rounded-xl bg-gradient-to-r 
              from-sky-400 to-emerald-400 text-white font-semibold shadow-md
              hover:opacity-95 transition cursor-pointer">
              Get Started
            </button>
          </div>

       
          <button
            className="md:hidden text-slate-700"
            onClick={() => setOpen(true)}
          >
            <Menu size={32} />
          </button>
        </div>
      </header>

      {/* for Mobile View */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl 
        transform transition-transform duration-300 z-50 
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center px-5 py-4 border-b">
          <h2 className="text-xl font-semibold text-slate-800">Menu</h2>
          <button onClick={() => setOpen(false)}>
            <X size={32} />
          </button>
        </div>

        <div className="flex flex-col gap-6 px-6 py-6 text-lg font-medium text-slate-700">
          <a onClick={() => setOpen(false)} className="hover:text-blue-500">Features</a>
          <a onClick={() => setOpen(false)} className="hover:text-blue-500">Pricing</a>
          <a onClick={() => setOpen(false)} className="hover:text-blue-500">Docs</a>
          <a onClick={() => setOpen(false)} className="hover:text-blue-500">About</a>

       
          <button className="mt-4 text-slate-700 hover:text-blue-500 text-left">Sign In</button>
          <button className="px-5 py-3 rounded-xl bg-gradient-to-r 
            from-sky-400 to-emerald-400 text-white font-semibold shadow-md
            hover:opacity-95 transition cursor-pointer">
            Get Started
          </button>
        </div>
      </div>

      
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
