"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { BarChart3, FileText, Users, MessageSquare, Plus, Edit, Trash2, Eye, LogOut, Settings } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function AdminDashboard() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [recentPosts, setRecentPosts] = useState<any[]>([])
  const [recentInquiries, setRecentInquiries] = useState<any[]>([])
  const [selectedPosts, setSelectedPosts] = useState<number[]>([])
  const [selectedInquiries, setSelectedInquiries] = useState<number[]>([])
  const [dashboardStats, setDashboardStats] = useState({
    totalPosts: 0,
    totalUsers: 1250,
    totalInquiries: 0,
    monthlyViews: 45600,
  })

  // Load data function
  const loadDashboardData = () => {
    // Load posts - get all posts and filter properly
    const savedPosts = JSON.parse(localStorage.getItem("blogPosts") || "[]")

    // Mock posts for demo - only include if no saved posts exist
    const mockPosts =
      savedPosts.length === 0
        ? [
            {
              id: 1,
              title: "Getting Started with Next.js 14",
              author: "John Doe",
              status: "published",
              category: "Web Development",
              views: 1250,
              date: "2024-01-15",
              lastModified: "2024-01-15",
            },
            {
              id: 2,
              title: "The Future of AI in Web Development",
              author: "Jane Smith",
              status: "draft",
              category: "AI & Technology",
              views: 0,
              date: "2024-01-12",
              lastModified: "2024-01-14",
            },
          ]
        : []

    const allPosts = [...savedPosts, ...mockPosts]
    setRecentPosts(allPosts.slice(0, 3)) // Show only first 3 posts

    // Load inquiries from localStorage
    const savedInquiries = JSON.parse(localStorage.getItem("inquiries") || "[]")

    // Mock inquiries - only include if no saved inquiries exist
    const mockInquiries =
      savedInquiries.length === 0
        ? [
            {
              id: 1,
              name: "Alice Johnson",
              email: "alice@example.com",
              subject: "Collaboration Opportunity",
              date: "2024-01-15",
              status: "unread",
            },
            {
              id: 2,
              name: "Bob Smith",
              email: "bob@example.com",
              subject: "Technical Question",
              date: "2024-01-14",
              status: "replied",
            },
            {
              id: 3,
              name: "Carol Davis",
              email: "carol@example.com",
              subject: "Guest Post Proposal",
              date: "2024-01-13",
              status: "unread",
            },
          ]
        : []

    const allInquiries = [...savedInquiries, ...mockInquiries]
    setRecentInquiries(allInquiries.slice(0, 3))

    // Update stats
    setDashboardStats((prev) => ({
      ...prev,
      totalPosts: allPosts.length,
      totalInquiries: allInquiries.length,
    }))

    // Clear selections when data changes
    setSelectedPosts([])
    setSelectedInquiries([])
  }

  useEffect(() => {
    const token = localStorage.getItem("adminToken")
    if (!token) {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  useEffect(() => {
    if (isAuthenticated) {
      loadDashboardData()
    }
  }, [isAuthenticated])

  // Listen for storage changes and custom events
  useEffect(() => {
    const handleDataUpdate = () => {
      if (isAuthenticated) {
        loadDashboardData()
      }
    }

    // Listen for storage changes (from other tabs)
    window.addEventListener("storage", handleDataUpdate)

    // Listen for custom events (from same tab)
    window.addEventListener("dataUpdated", handleDataUpdate)
    window.addEventListener("postDeleted", handleDataUpdate)
    window.addEventListener("inquiryDeleted", handleDataUpdate)

    return () => {
      window.removeEventListener("storage", handleDataUpdate)
      window.removeEventListener("dataUpdated", handleDataUpdate)
      window.removeEventListener("postDeleted", handleDataUpdate)
      window.removeEventListener("inquiryDeleted", handleDataUpdate)
    }
  }, [isAuthenticated])

  const handleLogout = () => {
    localStorage.removeItem("adminToken")
    router.push("/admin/login")
  }

  const handleSelectPost = (postId: number, checked: boolean) => {
    if (checked) {
      setSelectedPosts([...selectedPosts, postId])
    } else {
      setSelectedPosts(selectedPosts.filter((id) => id !== postId))
    }
  }

  const handleSelectInquiry = (inquiryId: number, checked: boolean) => {
    if (checked) {
      setSelectedInquiries([...selectedInquiries, inquiryId])
    } else {
      setSelectedInquiries(selectedInquiries.filter((id) => id !== inquiryId))
    }
  }

  const handleBulkDeletePosts = () => {
    if (selectedPosts.length === 0) {
      alert("Please select posts to delete")
      return
    }

    if (confirm(`Are you sure you want to delete ${selectedPosts.length} selected posts?`)) {
      const savedPosts = JSON.parse(localStorage.getItem("blogPosts") || "[]")
      const updatedPosts = savedPosts.filter((post: any) => !selectedPosts.includes(post.id))
      localStorage.setItem("blogPosts", JSON.stringify(updatedPosts))

      // Trigger immediate data refresh
      loadDashboardData()

      // Dispatch events to notify other components
      window.dispatchEvent(new Event("dataUpdated"))
      window.dispatchEvent(new Event("postDeleted"))

      alert(`${selectedPosts.length} posts deleted successfully!`)
    }
  }

  const handleBulkDeleteInquiries = () => {
    if (selectedInquiries.length === 0) {
      alert("Please select inquiries to delete")
      return
    }

    if (confirm(`Are you sure you want to delete ${selectedInquiries.length} selected inquiries?`)) {
      const savedInquiries = JSON.parse(localStorage.getItem("inquiries") || "[]")
      const updatedInquiries = savedInquiries.filter((inquiry: any) => !selectedInquiries.includes(inquiry.id))
      localStorage.setItem("inquiries", JSON.stringify(updatedInquiries))

      // Trigger immediate data refresh
      loadDashboardData()

      // Dispatch events to notify other components
      window.dispatchEvent(new Event("dataUpdated"))
      window.dispatchEvent(new Event("inquiryDeleted"))

      alert(`${selectedInquiries.length} inquiries deleted successfully!`)
    }
  }

  const handleDeleteSinglePost = (postId: number) => {
    if (confirm("Are you sure you want to delete this post?")) {
      const savedPosts = JSON.parse(localStorage.getItem("blogPosts") || "[]")
      const updatedPosts = savedPosts.filter((post: any) => post.id !== postId)
      localStorage.setItem("blogPosts", JSON.stringify(updatedPosts))

      // Trigger immediate data refresh
      loadDashboardData()

      // Dispatch events to notify other components
      window.dispatchEvent(new Event("dataUpdated"))
      window.dispatchEvent(new Event("postDeleted"))

      alert("Post deleted successfully!")
    }
  }

  const handleDeleteSingleInquiry = (inquiryId: number) => {
    if (confirm("Are you sure you want to delete this inquiry?")) {
      const savedInquiries = JSON.parse(localStorage.getItem("inquiries") || "[]")
      const updatedInquiries = savedInquiries.filter((inquiry: any) => inquiry.id !== inquiryId)
      localStorage.setItem("inquiries", JSON.stringify(updatedInquiries))

      // Trigger immediate data refresh
      loadDashboardData()

      // Dispatch events to notify other components
      window.dispatchEvent(new Event("dataUpdated"))
      window.dispatchEvent(new Event("inquiryDeleted"))

      alert("Inquiry deleted successfully!")
    }
  }

  if (!isAuthenticated) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">Admin Dashboard</h1>
                <p className="text-sm text-slate-500">Manage your blog content</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  View Site
                </Button>
              </Link>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <ThemeToggle />
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboardStats.totalPosts}</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboardStats.totalUsers.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+180 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Inquiries</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboardStats.totalInquiries}</div>
              <p className="text-xs text-muted-foreground">
                {recentInquiries.filter((i) => i.status === "unread").length} unread
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Views</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboardStats.monthlyViews.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Posts */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Posts</CardTitle>
                  <CardDescription>Manage your blog posts</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  {selectedPosts.length > 0 && (
                    <Button size="sm" variant="destructive" onClick={handleBulkDeletePosts}>
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete ({selectedPosts.length})
                    </Button>
                  )}
                  <Link href="/admin/posts/new">
                    <Button size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      New Post
                    </Button>
                  </Link>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        checked={selectedPosts.includes(post.id)}
                        onCheckedChange={(checked) => handleSelectPost(post.id, checked as boolean)}
                      />
                      <div className="flex-1">
                        <h4 className="font-medium line-clamp-1">{post.title}</h4>
                        <div className="flex items-center space-x-4 mt-1 text-sm text-slate-500">
                          <span>By {post.author}</span>
                          <span>{post.date}</span>
                          <span>{post.views || 0} views</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={post.status === "published" ? "default" : "secondary"}>{post.status}</Badge>
                      <Link href={`/admin/posts/edit/${post.id}`}>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button variant="ghost" size="sm" onClick={() => handleDeleteSinglePost(post.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                {recentPosts.length === 0 && (
                  <div className="text-center py-8 text-slate-500">
                    <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No posts yet. Create your first post!</p>
                  </div>
                )}
              </div>
              <div className="mt-4">
                <Link href="/admin/posts">
                  <Button variant="outline" className="w-full bg-transparent">
                    View All Posts ({dashboardStats.totalPosts})
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Recent Inquiries */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Inquiries</CardTitle>
                  <CardDescription>User messages and contact requests</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  {selectedInquiries.length > 0 && (
                    <Button size="sm" variant="destructive" onClick={handleBulkDeleteInquiries}>
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete ({selectedInquiries.length})
                    </Button>
                  )}
                  <Link href="/admin/inquiries">
                    <Button variant="outline" size="sm">
                      View All
                    </Button>
                  </Link>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentInquiries.map((inquiry) => (
                  <div key={inquiry.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        checked={selectedInquiries.includes(inquiry.id)}
                        onCheckedChange={(checked) => handleSelectInquiry(inquiry.id, checked as boolean)}
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-medium">{inquiry.name}</h4>
                          <Badge variant={inquiry.status === "unread" ? "destructive" : "secondary"}>
                            {inquiry.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-500 mt-1">{inquiry.subject}</p>
                        <p className="text-xs text-slate-400 mt-1">
                          {inquiry.email} • {inquiry.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Link href="/admin/inquiries">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button variant="ghost" size="sm" onClick={() => handleDeleteSingleInquiry(inquiry.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                {recentInquiries.length === 0 && (
                  <div className="text-center py-8 text-slate-500">
                    <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No inquiries yet.</p>
                  </div>
                )}
              </div>
              <div className="mt-4">
                <Link href="/admin/inquiries">
                  <Button variant="outline" className="w-full bg-transparent">
                    View All Inquiries ({dashboardStats.totalInquiries})
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
