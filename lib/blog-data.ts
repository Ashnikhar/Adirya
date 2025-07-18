// Utility functions for managing blog data across the application

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  content?: string
  author: string
  date: string
  lastModified?: string
  category: string
  readTime: string
  image: string
  status: "published" | "draft"
  views: number
  tags?: string[]
}

// Get all published posts for public display
export function getPublishedPosts(): BlogPost[] {
  if (typeof window === "undefined") return []

  const savedPosts = JSON.parse(localStorage.getItem("blogPosts") || "[]")

  // Mock posts for demo
  const mockPosts: BlogPost[] = [
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
      status: "published",
      views: 1250,
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
      status: "published",
      views: 890,
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
      status: "published",
      views: 750,
    },
  ]

  // Combine saved posts with mock posts, filter only published ones
  const allPosts = [...savedPosts, ...mockPosts]
  return allPosts
    .filter((post) => post.status === "published")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// Get all posts for admin dashboard
export function getAllPosts(): BlogPost[] {
  if (typeof window === "undefined") return []

  const savedPosts = JSON.parse(localStorage.getItem("blogPosts") || "[]")

  const mockPosts: BlogPost[] = [
    {
      id: 1,
      title: "Getting Started with Next.js 14",
      excerpt: "Learn the fundamentals of Next.js 14...",
      author: "John Doe",
      date: "2024-01-15",
      lastModified: "2024-01-15",
      category: "Web Development",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=400",
      status: "published",
      views: 1250,
    },
    {
      id: 2,
      title: "The Future of AI in Web Development",
      excerpt: "Exploring how artificial intelligence...",
      author: "Jane Smith",
      date: "2024-01-12",
      lastModified: "2024-01-14",
      category: "AI & Technology",
      readTime: "8 min read",
      image: "/placeholder.svg?height=200&width=400",
      status: "draft",
      views: 0,
    },
  ]

  return [...savedPosts, ...mockPosts].sort(
    (a, b) => new Date(b.lastModified || b.date).getTime() - new Date(a.lastModified || a.date).getTime(),
  )
}

// Save a new post
export function savePost(post: Omit<BlogPost, "id"> & { id?: number }): BlogPost {
  const savedPosts = JSON.parse(localStorage.getItem("blogPosts") || "[]")

  const newPost: BlogPost = {
    ...post,
    id: post.id || Date.now(),
    lastModified: new Date().toISOString().split("T")[0],
  }

  const updatedPosts = [newPost, ...savedPosts.filter((p: BlogPost) => p.id !== newPost.id)]
  localStorage.setItem("blogPosts", JSON.stringify(updatedPosts))

  return newPost
}

// Delete a post
export function deletePost(id: number): void {
  const savedPosts = JSON.parse(localStorage.getItem("blogPosts") || "[]")
  const updatedPosts = savedPosts.filter((post: BlogPost) => post.id !== id)
  localStorage.setItem("blogPosts", JSON.stringify(updatedPosts))
}
