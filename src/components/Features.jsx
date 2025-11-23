import React from "react";
import {
  ShieldCheckIcon,
  BoltIcon,
  CreditCardIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    title: "Bank-grade Security",
    desc: "Fully PCI DSS Level-1 compliant infrastructure ensuring safe and encrypted transactions.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Instant Settlements",
    desc: "Move funds to your bank within seconds with real-time payout processing.",
    icon: BoltIcon,
  },
  {
    title: "All Payment Methods",
    desc: "Accept UPI, Cards, EMI, Netbanking, Wallets and more on a single platform.",
    icon: CreditCardIcon,
  },
  {
    title: "Advanced Analytics",
    desc: "Track payments, refunds and trends with a detailed reporting dashboard.",
    icon: ChartBarIcon,
  },
];

export default function Features() {
  return (
    <section className="py-10 bg-gradient-to-b from-[#e8f7ff] to-white">

     
      <h3 className="text-3xl font-bold text-center mb-14 text-slate-900">
        Why Businesses Trust Razorpay
      </h3>

   
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">

        {features.map((f, i) => (
          <div
            key={i}
            className="
              flex flex-col
              p-8 rounded-2xl
              bg-white border border-slate-200
              shadow-[0_4px_14px_rgba(0,0,0,0.06)]
              min-h-[260px]
              hover:shadow-[0_6px_20px_rgba(0,0,0,0.09)]
              transition-shadow duration-300
               bg-gradient-to-r 
            from-sky-400 to-emerald-400
            "
          >

     
            <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800">
              <f.icon className="w-8 h-8" />
            </div>

            {/* Title */}
            <h4 className="mt-6 text-lg font-semibold text-slate-900">
              {f.title}
            </h4>

            {/* Description */}
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}
