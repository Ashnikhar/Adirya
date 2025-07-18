"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MobileThemeToggle } from "./mobile-theme-toggle"

interface MobileNavProps {
  isAdminPage?: boolean
}

export function MobileNav({ isAdminPage = false }: MobileNavProps) {
  const [open, setOpen] = React.useState(false)

  const publicLinks = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  const adminLinks = [
    { href: "/admin/dashboard", label: "Dashboard" },
    { href: "/admin/posts", label: "Posts" },
    { href: "/admin/inquiries", label: "Inquiries" },
    { href: "/", label: "View Site" },
  ]

  const links = isAdminPage ? adminLinks : publicLinks

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <div className="flex flex-col space-y-4 mt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">B</span>
                </div>
                <span className="font-bold">TechBlog</span>
              </div>
              <MobileThemeToggle />
            </div>

            <nav className="flex flex-col space-y-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-2 py-1 text-lg hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {!isAdminPage && (
              <div className="pt-4 border-t">
                <Link href="/admin/login" onClick={() => setOpen(false)}>
                  <Button className="w-full">Admin Login</Button>
                </Link>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
