// import React from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import Hero1 from "./components/Hero1"
// import Features from './components/Features'
// import ProductHighlight from './components/ProductHighlight'
// import Footer from './components/Footer'


// export default function App(){
// return (
// <div className="min-h-screen flex flex-col">
// <Navbar />
// <main className="flex-1">
// <Hero />
// <Hero1/>
// <section className="py-20 bg-gray-50">
// <div className="container-max px-6">
// <Features />
// </div>
// </section>
// <section className="py-20">
// <div className="container-max px-6 space-y-12">
// <ProductHighlight
// title="Payments for every business"
// subtitle="Accept payments online, in-person and via invoices. Seamless integration with SDKs and APIs."
// ctaText="Start Accepting Payments"
// reverse={false}
// />

// </div>
// </section>
// </main>
// <Footer />
// </div>
// )
// }



import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hero1 from "./components/Hero1";
import Features from "./components/Features";
import ProductHighlight from "./components/ProductHighlight";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 space-y-10"> {/* reduced spacing between sections */}
        
        <Hero />
        <Hero1 />

        {/* Features Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <Features />
          </div>
        </section>

        {/* Product Highlight Section moved completely inside component */}
        <ProductHighlight />

      </main>

      <Footer />
    </div>
  );
}
