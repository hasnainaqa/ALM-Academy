import Link from "next/link"
import { Users } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Users className="w-8 h-8 text-emerald-400" />
              <span className="text-xl font-bold text-white">Alif Laam Meem Academy</span>
            </div>
            <p className="text-sm">Dedicated to spreading the knowledge of the Holy Quran worldwide.</p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-sm hover:text-emerald-400 transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-sm hover:text-emerald-400 transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-sm">Email: info@aliflaammeem.com</li>
              <li className="text-sm">Phone: +92 317 6456606</li>
              <li className="text-sm">168 D Block, Old Satellite Town, Sargodha</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Alif Laam Meem Academy. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-emerald-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

