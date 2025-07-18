"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { CalendarDays, User, Clock, Search, ArrowLeft } from "lucide-react"
// import Link from "next/link"
// import { ThemeToggle } from "@/components/theme-toggle"
// import { MobileNav } from "@/components/mobile-nav"
import { getPublishedPosts } from  "@/lib/blog-data"
import {Header} from "@/components/header"
import { Footer } from "@/components/footer"




// Mock blog data
// const blogPosts = [
//   {
//     id: 1,
//     title: "Getting Started with Next.js 14",
//     excerpt:
//       "Learn the fundamentals of Next.js 14 and its new features including server components, improved routing, and enhanced performance optimizations.",
//     author: "John Doe",
//     date: "2024-01-15",
//     category: "Web Development",
//     readTime: "5 min read",
//     image: "/placeholder.svg?height=200&width=400",
//   },
//   {
//     id: 2,
//     title: "The Future of AI in Web Development",
//     excerpt:
//       "Exploring how artificial intelligence is transforming the way we build and maintain web applications, from code generation to automated testing.",
//     author: "Jane Smith",
//     date: "2024-01-12",
//     category: "AI & Technology",
//     readTime: "8 min read",
//     image: "/placeholder.svg?height=200&width=400",
//   },
//   {
//     id: 3,
//     title: "Building Responsive Designs with Tailwind CSS",
//     excerpt:
//       "Master the art of creating beautiful, responsive layouts using Tailwind CSS utility classes and modern design principles.",
//     author: "Mike Johnson",
//     date: "2024-01-10",
//     category: "CSS & Design",
//     readTime: "6 min read",
//     image: "/placeholder.svg?height=200&width=400",
//   },
//   {
//     id: 4,
//     title: "Understanding React Server Components",
//     excerpt:
//       "Deep dive into React Server Components and how they're changing the way we think about server-side rendering and client-side interactivity.",
//     author: "Sarah Wilson",
//     date: "2024-01-08",
//     category: "React",
//     readTime: "10 min read",
//     image: "/placeholder.svg?height=200&width=400",
//   },
//   {
//     id: 5,
//     title: "Database Optimization Techniques",
//     excerpt:
//       "Learn essential database optimization strategies to improve query performance and scale your applications effectively.",
//     author: "David Brown",
//     date: "2024-01-05",
//     category: "Database",
//     readTime: "7 min read",
//     image: "/placeholder.svg?height=200&width=400",
//   },
//   {
//     id: 6,
//     title: "Modern JavaScript ES2024 Features",
//     excerpt:
//       "Explore the latest JavaScript features and how they can improve your development workflow and code quality.",
//     author: "Lisa Chen",
//     date: "2024-01-03",
//     category: "JavaScript",
//     readTime: "9 min read",
//     image: "/placeholder.svg?height=200&width=400",
//   },
// ]

const categories = ["All", "Web Development", "AI & Technology", "CSS & Design", "React", "Database", "JavaScript"]

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "Getting Started with Next.js 14",
      excerpt:
        "Learn the fundamentals of Next.js 14 and its new features including server components, improved routing, and enhanced performance optimizations.",
      author: "John Doe",
      date: "2024-01-15",
      category: "Web Development",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      title: "The Future of AI in Web Development",
      excerpt:
        "Exploring how artificial intelligence is transforming the way we build and maintain web applications, from code generation to automated testing.",
      author: "Jane Smith",
      date: "2024-01-12",
      category: "AI & Technology",
      readTime: "8 min read",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      title: "Building Responsive Designs with Tailwind CSS",
      excerpt:
        "Master the art of creating beautiful, responsive layouts using Tailwind CSS utility classes and modern design principles.",
      author: "Mike Johnson",
      date: "2024-01-10",
      category: "CSS & Design",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 4,
      title: "Understanding React Server Components",
      excerpt:
        "Deep dive into React Server Components and how they're changing the way we think about server-side rendering and client-side interactivity.",
      author: "Sarah Wilson",
      date: "2024-01-08",
      category: "React",
      readTime: "10 min read",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 5,
      title: "Database Optimization Techniques",
      excerpt:
        "Learn essential database optimization strategies to improve query performance and scale your applications effectively.",
      author: "David Brown",
      date: "2024-01-05",
      category: "Database",
      readTime: "7 min read",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 6,
      title: "Modern JavaScript ES2024 Features",
      excerpt:
        "Explore the latest JavaScript features and how they can improve your development workflow and code quality.",
      author: "Lisa Chen",
      date: "2024-01-03",
      category: "JavaScript",
      readTime: "9 min read",
      image: "/placeholder.svg?height=200&width=400",
    },
  ])

  useEffect(() => {
    // Load published posts from localStorage
    const publishedPosts = getPublishedPosts()
    if (publishedPosts.length > 0) {
      setBlogPosts(publishedPosts)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      {/* <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <h1 className="text-xl font-bold">TechBlog</h1>
            </div>
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <Link href="/">
                <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <MobileNav />
            </div>
          </div>
        </div>
      </header> */}
      <Header />

      {/* Main Content */}

      <div className="container  width-full h-full mx-auto px-4 py-12 md:py-24" >
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Our Blog</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Discover insights, tutorials, and the latest trends in web development, AI, and technology. Stay updated
            with our expert content.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <Input placeholder="Search articles..." className="pl-10" />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button key={category} variant={category === "All" ? "default" : "outline"} size="sm">
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        <Card className="mb-12 overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=300&width=600"
                alt="Featured post"
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6 md:p-8">
              <Badge className="mb-4">Featured</Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex items-center space-x-4 text-sm text-slate-500 mb-6">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{blogPosts[0].author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CalendarDays className="h-4 w-4" />
                  <span>{blogPosts[0].date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{blogPosts[0].readTime}</span>
                </div>
              </div>
              <Button>Read Full Article</Button>
            </div>
          </div>
        </Card>
        

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-sm text-slate-500">{post.readTime}</span>
                </div>
                <CardTitle className="line-clamp-2 hover:text-blue-600 transition-colors">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CalendarDays className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <Button className="w-full bg-transparent" variant="outline">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Load More Articles
          </Button>
        </div>
      </div>

      {/* Newsletter Signup */}
      <section className="bg-white dark:bg-slate-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Stay Updated</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              Subscribe to our newsletter and never miss our latest articles and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <h3 className="text-xl font-bold">TechBlog</h3>
              </div>
              <p className="text-slate-400">Your go-to source for web development insights and technology trends.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    AI & Technology
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    CSS & Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Programming
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Newsletter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 TechBlog. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
      
      <Footer />
     
      
      

      
      
    </div>
  )
}
