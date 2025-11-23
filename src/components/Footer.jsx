export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-300 py-12 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold text-white tracking-wide">Razorpay</h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            The next-gen platform designed to bring accuracy, reliability, and seamless performance to your workflow.
          </p>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Products</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer transition">AI Engine</li>
            <li className="hover:text-white cursor-pointer transition">Analytics Dashboard</li>
            <li className="hover:text-white cursor-pointer transition">Automation Suite</li>
            <li className="hover:text-white cursor-pointer transition">Security Layer</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer transition">About Us</li>
            <li className="hover:text-white cursor-pointer transition">Careers</li>
            <li className="hover:text-white cursor-pointer transition">Press</li>
            <li className="hover:text-white cursor-pointer transition">Blog</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer transition">Help Center</li>
            <li className="hover:text-white cursor-pointer transition">Documentation</li>
            <li className="hover:text-white cursor-pointer transition">API Status</li>
            <li className="hover:text-white cursor-pointer transition">Contact Support</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2025 Razorpay. All rights reserved.</p>

        <div className="flex gap-6 mt-4 sm:mt-0">
          <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer transition">Terms</span>
          <span className="hover:text-white cursor-pointer transition">Cookies</span>
        </div>
      </div>
    </footer>
  );
}