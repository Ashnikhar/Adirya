"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MenuIcon, X, ChevronDown } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isIndustriesHovered, setIsIndustriesHovered] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
     { href: "/blog", label: "Blogs" },
    {
      href: "/industries/doctors",
      label: "Industries",
      hasSubmenu: true,
      submenu: [
        { href: "/industries/doctors", label: "Doctors" },
        { href: "/industries/employers", label: "Employers" },
        { href: "/industries/insurance", label: "Insurance" },
        { href: "/industries/pharmaceuticals", label: "Pharmaceuticals" },
      ],
    },
    { href: "/products", label: "Products" },
    { href: "/success-stories", label: "Success Story" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-20 items-center justify-between px-4 md:px-6 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <Link className="flex items-center gap-2" href="/">
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#008080] to-[#00AAAA]" />
        <span className="text-xl font-bold text-white">Adirya Health</span>
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <div
            key={item.href}
            className="relative"
            onMouseEnter={() => item.hasSubmenu && setIsIndustriesHovered(true)}
            onMouseLeave={() => item.hasSubmenu && setIsIndustriesHovered(true)}
          >
            <Link
              className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                pathname === item.href || (item.hasSubmenu && pathname.startsWith("/industries"))
                  ? "text-[#008080]"
                  : "text-gray-300 hover:text-[#008080]"
              }`}
              href={item.href}
            >
              {item.label}
              {item.hasSubmenu && <ChevronDown className="h-4 w-4" />}
            </Link>

            {/* Submenu */}
            {item.hasSubmenu && isIndustriesHovered && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-sm border border-gray-800 rounded-lg shadow-lg">
                {item.submenu?.map((subItem) => (
                  <Link
                    key={subItem.href}
                    href={subItem.href}
                    className={`block px-4 py-3 text-sm transition-colors ${
                      pathname === subItem.href
                        ? "text-[#008080] bg-gray-800/50"
                        : "text-gray-300 hover:text-[#008080] hover:bg-gray-800/50"
                    }`}
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
      </Button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-gray-800 md:hidden">
          <nav className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  className={`block transition-colors ${
                    pathname === item.href ? "text-[#008080]" : "text-gray-300 hover:text-[#008080]"
                  }`}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.hasSubmenu && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.submenu?.map((subItem) => (
                      <Link
                        key={subItem.href}
                        className={`block text-sm transition-colors ${
                          pathname === subItem.href ? "text-[#008080]" : "text-gray-400 hover:text-[#008080]"
                        }`}
                        href={subItem.href}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
