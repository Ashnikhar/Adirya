import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black py-20 border-t border-gray-800">
      <div className="container mx-auto px-6 md:px-12 max-w-screen-xl">

        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#008080] to-[#00AAAA]" />
              <span className="text-2xl font-bold text-white">Adirya Health</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming healthcare through AI-powered solutions.
            </p>
            <div className="flex gap-3">
              <div className="w-9 h-9 bg-gray-800 rounded-full"></div>
              <div className="w-9 h-9 bg-gray-800 rounded-full"></div>
              <div className="w-9 h-9 bg-gray-800 rounded-full"></div>
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Useful Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><Link href="/industries" className="text-gray-400 hover:text-white transition">Industries</Link></li>
              <li><Link href="/insurance" className="text-gray-400 hover:text-white transition">Insurance</Link></li>
              <li><Link href="/conference" className="text-gray-400 hover:text-white transition">Conference & Seminars</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Product Help */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Product Help</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition">Terms & Conditions</Link></li>
              <li><Link href="/refund" className="text-gray-400 hover:text-white transition">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Address */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Address</h3>
            <div className="space-y-5 text-sm text-gray-400">
              <div>
                <h4 className="text-[#008080] font-semibold">INDIA</h4>
                <p>Webel IT Park, Phase 2, 4th Floor, DH Block/Newtown, Action Area I, Newtown, West Bengal 700156</p>
              </div>
              <div>
                <h4 className="text-[#008080] font-semibold">USA</h4>
                <p>2954 West Washington Street, Suite 850 Chicago, Illinois 60612</p>
              </div>
              <div>
                <h4 className="text-[#008080] font-semibold">UAE</h4>
                <p>Dubai International Financial Centre Level 14, The Gate, Dubai 74777</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © 2024 CarePlix Healthcare Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-3">
            <div className="w-9 h-9 bg-gray-800 rounded-full"></div>
            <div className="w-9 h-9 bg-gray-800 rounded-full"></div>
            <div className="w-9 h-9 bg-gray-800 rounded-full"></div>
            <div className="w-9 h-9 bg-gray-800 rounded-full"></div>
          </div>
        </div>

      </div>
    </footer>
  )
}
