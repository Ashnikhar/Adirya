"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Save, Eye, Upload, X } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

const categories = [
  "Web Development",
  "AI & Technology",
  "CSS & Design",
  "React",
  "Database",
  "Programming",
  "Tutorial",
]

export default function EditPost() {
  const router = useRouter()
  const params = useParams()
  const postId = params.id as string
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    tags: "",
    status: "draft",
    featuredImage: "",
  })
  const [tags, setTags] = useState<string[]>([])

  useEffect(() => {
    const token = localStorage.getItem("adminToken")
    if (!token) {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  useEffect(() => {
    if (isAuthenticated && postId) {
      // Load the post data
      const savedPosts = JSON.parse(localStorage.getItem("blogPosts") || "[]")
      const mockPosts = [
        {
          id: 1,
          title: "Getting Started with Next.js 14",
          excerpt:
            "Learn the fundamentals of Next.js 14 and its new features including server components and improved routing.",
          content: "This is a comprehensive guide to Next.js 14...",
          author: "John Doe",
          status: "published",
          category: "Web Development",
          tags: ["nextjs", "react", "web development"],
          views: 1250,
          date: "2024-01-15",
          lastModified: "2024-01-15",
        },
        {
          id: 2,
          title: "The Future of AI in Web Development",
          excerpt:
            "Exploring how artificial intelligence is transforming the way we build and maintain web applications.",
          content: "Artificial Intelligence is revolutionizing web development...",
          author: "Jane Smith",
          status: "draft",
          category: "AI & Technology",
          tags: ["ai", "web development", "future"],
          views: 0,
          date: "2024-01-12",
          lastModified: "2024-01-14",
        },
      ]

      const allPosts = [...savedPosts, ...mockPosts]
      const post = allPosts.find((p) => p.id.toString() === postId)

      if (post) {
        setFormData({
          title: post.title || "",
          excerpt: post.excerpt || "",
          content: post.content || "",
          category: post.category || "",
          tags: "",
          status: post.status || "draft",
          featuredImage: post.image || "",
        })
        setTags(post.tags || [])
      } else {
        alert("Post not found!")
        router.push("/admin/posts")
      }
      setLoading(false)
    }
  }, [isAuthenticated, postId, router])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && formData.tags.trim()) {
      e.preventDefault()
      if (!tags.includes(formData.tags.trim())) {
        setTags([...tags, formData.tags.trim()])
        setFormData((prev) => ({ ...prev, tags: "" }))
      }
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleSave = (status: string) => {
    const postData = {
      id: Number.parseInt(postId),
      ...formData,
      status,
      tags: tags,
      author: "Admin",
      date: new Date().toISOString().split("T")[0],
      lastModified: new Date().toISOString().split("T")[0],
      views: 0,
      readTime: `${Math.ceil(formData.content.length / 200)} min read`,
      image: "/placeholder.svg?height=200&width=400",
    }

    // Get existing posts from localStorage
    const existingPosts = JSON.parse(localStorage.getItem("blogPosts") || "[]")

    // Update or add the post
    const updatedPosts = existingPosts.filter((p: any) => p.id !== Number.parseInt(postId))
    updatedPosts.unshift(postData)

    // Save back to localStorage
    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts))

    // Dispatch custom event to notify dashboard
    window.dispatchEvent(new Event("dataUpdated"))

    console.log("Updating post:", postData)
    alert(`Post ${status === "published" ? "published" : "saved as draft"} successfully!`)
    router.push("/admin/posts")
  }

  if (!isAuthenticated || loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <div>Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/admin/posts">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Posts
                </Button>
              </Link>
              <div>
                <h1 className="text-xl font-bold">Edit Post</h1>
                <p className="text-sm text-slate-500">Update your blog post</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" onClick={() => handleSave("draft")}>
                <Save className="h-4 w-4 mr-2" />
                Save Draft
              </Button>
              <Button variant="outline">
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Button>
              <ThemeToggle />
              <Button onClick={() => handleSave("published")}>Update & Publish</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Post Content</CardTitle>
                  <CardDescription>Edit your blog post content</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      placeholder="Enter post title..."
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      className="text-lg"
                    />
                  </div>

                  <div>
                    <Label htmlFor="excerpt">Excerpt</Label>
                    <Textarea
                      id="excerpt"
                      placeholder="Brief description of your post..."
                      value={formData.excerpt}
                      onChange={(e) => handleInputChange("excerpt", e.target.value)}
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      placeholder="Write your post content here..."
                      value={formData.content}
                      onChange={(e) => handleInputChange("content", e.target.value)}
                      rows={15}
                      className="font-mono"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Featured Image</CardTitle>
                  <CardDescription>Upload a featured image for your post</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-600 mb-2">Drag and drop an image here, or click to browse</p>
                    <Button variant="outline">Choose File</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Post Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="status">Status</Label>
                    <Select value={formData.status} onValueChange={(value) => handleInputChange("status", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="published">Published</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tags</CardTitle>
                  <CardDescription>Add tags to help categorize your post</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Input
                      placeholder="Type a tag and press Enter"
                      value={formData.tags}
                      onChange={(e) => handleInputChange("tags", e.target.value)}
                      onKeyDown={handleAddTag}
                    />
                    {tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                            {tag}
                            <X className="h-3 w-3 cursor-pointer" onClick={() => removeTag(tag)} />
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>SEO Settings</CardTitle>
                  <CardDescription>Optimize your post for search engines</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="metaTitle">Meta Title</Label>
                    <Input
                      id="metaTitle"
                      placeholder="SEO title..."
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="metaDescription">Meta Description</Label>
                    <Textarea
                      id="metaDescription"
                      placeholder="SEO description..."
                      value={formData.excerpt}
                      onChange={(e) => handleInputChange("excerpt", e.target.value)}
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
