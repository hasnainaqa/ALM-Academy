"use client"
import { BookOpen, Menu, X } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <motion.header
      className="sticky top-0 z-50 bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-900 dark:to-teal-950 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
              <BookOpen className="w-8 h-8 text-white" />
            </motion.div>
            <span className="text-xl font-bold text-white group-hover:text-emerald-100 transition-colors">
              ALM Academy
            </span>
          </Link>

          <nav className="hidden md:flex space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={`${navigationMenuTriggerStyle()} text-white bg-emerald-500 hover:text-emerald-100 hover:bg-emerald-600/50 dark:hover:bg-emerald-800/50 transition-colors`}
                      >
                        {item.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <button
            className="md:hidden p-2 rounded-md text-white hover:bg-emerald-600/50 dark:hover:bg-emerald-800/50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-emerald-500 dark:bg-emerald-900 shadow-lg"
          >
            <nav className="container mx-auto px-4 py-4 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-white hover:text-emerald-100 hover:bg-emerald-600/50 dark:hover:bg-emerald-800/50 transition-colors px-4 py-2 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

