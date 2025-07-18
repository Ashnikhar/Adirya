"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Edit, Trash2, Eye, Search, Filter, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Checkbox } from "@/components/ui/checkbox"

export default function PostsManagement() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [posts, setPosts] = useState<any[]>([])
  const [selectedPosts, setSelectedPosts] = useState<number[]>([])

  useEffect(() => {
    const token = localStorage.getItem("adminToken")
    if (!token) {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const loadPosts = () => {
    // Load posts from localStorage
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

    // Combine saved posts with mock posts (saved posts first)
    const allPosts = [...savedPosts, ...mockPosts]
    setPosts(allPosts)

    // Clear selections when posts change
    setSelectedPosts([])
  }

  useEffect(() => {
    if (isAuthenticated) {
      loadPosts()
    }
  }, [isAuthenticated])

  // Listen for data updates
  useEffect(() => {
    const handleDataUpdate = () => {
      if (isAuthenticated) {
        loadPosts()
      }
    }

    window.addEventListener("dataUpdated", handleDataUpdate)
    window.addEventListener("postDeleted", handleDataUpdate)

    return () => {
      window.removeEventListener("dataUpdated", handleDataUpdate)
      window.removeEventListener("postDeleted", handleDataUpdate)
    }
  }, [isAuthenticated])

  const handleSelectPost = (postId: number, checked: boolean) => {
    if (checked) {
      setSelectedPosts([...selectedPosts, postId])
    } else {
      setSelectedPosts(selectedPosts.filter((id) => id !== postId))
    }
  }

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedPosts(filteredPosts.map((post) => post.id))
    } else {
      setSelectedPosts([])
    }
  }

  const handleBulkDelete = () => {
    if (selectedPosts.length === 0) {
      alert("Please select posts to delete")
      return
    }

    if (confirm(`Are you sure you want to delete ${selectedPosts.length} selected posts?`)) {
      const savedPosts = JSON.parse(localStorage.getItem("blogPosts") || "[]")
      const updatedPosts = savedPosts.filter((post: any) => !selectedPosts.includes(post.id))
      localStorage.setItem("blogPosts", JSON.stringify(updatedPosts))

      // Reload posts immediately
      loadPosts()

      // Dispatch events to notify other components
      window.dispatchEvent(new Event("dataUpdated"))
      window.dispatchEvent(new Event("postDeleted"))

      alert(`${selectedPosts.length} posts deleted successfully!`)
    }
  }

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this post?")) {
      const savedPosts = JSON.parse(localStorage.getItem("blogPosts") || "[]")
      const updatedPosts = savedPosts.filter((post: any) => post.id !== id)
      localStorage.setItem("blogPosts", JSON.stringify(updatedPosts))

      // Reload posts immediately
      loadPosts()

      // Dispatch events to notify other components
      window.dispatchEvent(new Event("dataUpdated"))
      window.dispatchEvent(new Event("postDeleted"))

      alert("Post deleted successfully!")
    }
  }

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

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
              <Link href="/admin/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <div>
                <h1 className="text-xl font-bold">Posts Management</h1>
                <p className="text-sm text-slate-500">Create and manage blog posts</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {selectedPosts.length > 0 && (
                <Button variant="destructive" size="sm" onClick={handleBulkDelete}>
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Selected ({selectedPosts.length})
                </Button>
              )}
              <ThemeToggle />
              <Link href="/admin/posts/new">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  New Post
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>All Posts</CardTitle>
                <CardDescription>Manage your blog posts ({filteredPosts.length} total)</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    placeholder="Search posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-slate-500">
                  {searchTerm ? (
                    <>
                      <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>No posts found matching "{searchTerm}"</p>
                    </>
                  ) : (
                    <>
                      <Plus className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>No posts yet. Create your first post!</p>
                      <Link href="/admin/posts/new">
                        <Button className="mt-4">
                          <Plus className="h-4 w-4 mr-2" />
                          Create Post
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">
                      <Checkbox
                        checked={selectedPosts.length === filteredPosts.length && filteredPosts.length > 0}
                        onCheckedChange={handleSelectAll}
                      />
                    </TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Views</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPosts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell>
                        <Checkbox
                          checked={selectedPosts.includes(post.id)}
                          onCheckedChange={(checked) => handleSelectPost(post.id, checked as boolean)}
                        />
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium line-clamp-1">{post.title}</div>
                          <div className="text-sm text-slate-500">Modified: {post.lastModified}</div>
                        </div>
                      </TableCell>
                      <TableCell>{post.author}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{post.category}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={post.status === "published" ? "default" : "secondary"}>{post.status}</Badge>
                      </TableCell>
                      <TableCell>{post.views?.toLocaleString() || 0}</TableCell>
                      <TableCell>{post.date}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Link href={`/admin/posts/edit/${post.id}`}>
                            <Button variant="ghost" size="sm" title="Edit post">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </Link>
                          <Button variant="ghost" size="sm" onClick={() => handleDelete(post.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
