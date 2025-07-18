"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Eye, Search, Filter, ArrowLeft, Mail, Reply, Trash2 } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Checkbox } from "@/components/ui/checkbox"

export default function InquiriesManagement() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [inquiriesList, setInquiriesList] = useState<any[]>([])
  const [selectedInquiry, setSelectedInquiry] = useState<any>(null)
  const [replyMessage, setReplyMessage] = useState("")
  const [selectedInquiries, setSelectedInquiries] = useState<number[]>([])

  useEffect(() => {
    const token = localStorage.getItem("adminToken")
    if (!token) {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const loadInquiries = () => {
    // Load inquiries from localStorage
    const savedInquiries = JSON.parse(localStorage.getItem("inquiries") || "[]")

    // Mock inquiries for demo - only include if no saved inquiries exist
    const mockInquiries =
      savedInquiries.length === 0
        ? [
            {
              id: 1,
              name: "Alice Johnson",
              email: "alice@example.com",
              subject: "Collaboration Opportunity",
              message:
                "Hi, I'm interested in collaborating on a web development project. I've been following your blog and really appreciate your insights on React and Next.js. Would you be open to discussing a potential partnership?",
              date: "2024-01-15",
              status: "unread",
              priority: "high",
            },
            {
              id: 2,
              name: "Bob Smith",
              email: "bob@example.com",
              subject: "Technical Question about React Hooks",
              message:
                "I read your article about React Hooks and have a question about useEffect cleanup. Could you provide more details about when and how to properly clean up side effects?",
              date: "2024-01-14",
              status: "replied",
              priority: "medium",
            },
            {
              id: 3,
              name: "Carol Davis",
              email: "carol@example.com",
              subject: "Guest Post Proposal",
              message:
                "Hello! I'm a frontend developer with 5 years of experience. I'd love to contribute a guest post about CSS Grid layouts. I've attached my portfolio for your review.",
              date: "2024-01-13",
              status: "unread",
              priority: "medium",
            },
            {
              id: 4,
              name: "David Wilson",
              email: "david@example.com",
              subject: "Bug Report - Contact Form",
              message:
                "I tried to submit the contact form on your website but it's not working properly. The form seems to hang after clicking submit. Thought you should know!",
              date: "2024-01-12",
              status: "unread",
              priority: "high",
            },
            {
              id: 5,
              name: "Emma Brown",
              email: "emma@example.com",
              subject: "Thank you for the tutorial",
              message:
                "Just wanted to say thank you for the amazing Next.js tutorial. It helped me land my first job as a React developer! Keep up the great work.",
              date: "2024-01-11",
              status: "replied",
              priority: "low",
            },
          ]
        : []

    const allInquiries = [...savedInquiries, ...mockInquiries]
    setInquiriesList(allInquiries)

    // Clear selections when inquiries change
    setSelectedInquiries([])
  }

  useEffect(() => {
    if (isAuthenticated) {
      loadInquiries()
    }
  }, [isAuthenticated])

  // Listen for data updates
  useEffect(() => {
    const handleDataUpdate = () => {
      if (isAuthenticated) {
        loadInquiries()
      }
    }

    window.addEventListener("dataUpdated", handleDataUpdate)
    window.addEventListener("inquiryDeleted", handleDataUpdate)

    return () => {
      window.removeEventListener("dataUpdated", handleDataUpdate)
      window.removeEventListener("inquiryDeleted", handleDataUpdate)
    }
  }, [isAuthenticated])

  const handleSelectInquiry = (inquiryId: number, checked: boolean) => {
    if (checked) {
      setSelectedInquiries([...selectedInquiries, inquiryId])
    } else {
      setSelectedInquiries(selectedInquiries.filter((id) => id !== inquiryId))
    }
  }

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedInquiries(filteredInquiries.map((inquiry) => inquiry.id))
    } else {
      setSelectedInquiries([])
    }
  }

  const handleBulkDelete = () => {
    if (selectedInquiries.length === 0) {
      alert("Please select inquiries to delete")
      return
    }

    if (confirm(`Are you sure you want to delete ${selectedInquiries.length} selected inquiries?`)) {
      const savedInquiries = JSON.parse(localStorage.getItem("inquiries") || "[]")
      const updatedInquiries = savedInquiries.filter((inquiry: any) => !selectedInquiries.includes(inquiry.id))
      localStorage.setItem("inquiries", JSON.stringify(updatedInquiries))

      // Reload inquiries immediately
      loadInquiries()

      // Dispatch events to notify other components
      window.dispatchEvent(new Event("dataUpdated"))
      window.dispatchEvent(new Event("inquiryDeleted"))

      alert(`${selectedInquiries.length} inquiries deleted successfully!`)
    }
  }

  const handleMarkAsRead = (id: number) => {
    setInquiriesList((prev) => prev.map((inquiry) => (inquiry.id === id ? { ...inquiry, status: "read" } : inquiry)))
  }

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this inquiry?")) {
      const savedInquiries = JSON.parse(localStorage.getItem("inquiries") || "[]")
      const updatedInquiries = savedInquiries.filter((inquiry: any) => inquiry.id !== id)
      localStorage.setItem("inquiries", JSON.stringify(updatedInquiries))

      // Reload inquiries immediately
      loadInquiries()

      // Dispatch events to notify other components
      window.dispatchEvent(new Event("dataUpdated"))
      window.dispatchEvent(new Event("inquiryDeleted"))

      alert("Inquiry deleted successfully!")
    }
  }

  const handleReply = () => {
    if (selectedInquiry && replyMessage.trim()) {
      // In a real app, you would send the reply via email API
      console.log("Sending reply to:", selectedInquiry.email)
      console.log("Reply message:", replyMessage)

      alert(`Reply sent successfully to ${selectedInquiry.email}!`)

      // Mark as replied and update status
      handleMarkAsRead(selectedInquiry.id)
      setInquiriesList((prev) =>
        prev.map((inquiry) => (inquiry.id === selectedInquiry.id ? { ...inquiry, status: "replied" } : inquiry)),
      )

      // Clear form and close dialog
      setReplyMessage("")
      setSelectedInquiry(null)
    } else {
      alert("Please enter a reply message.")
    }
  }

  const filteredInquiries = inquiriesList.filter(
    (inquiry) =>
      inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.subject.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const unreadCount = inquiriesList.filter((inquiry) => inquiry.status === "unread").length

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
                <h1 className="text-xl font-bold">Inquiries Management</h1>
                <p className="text-sm text-slate-500">Manage user inquiries and messages ({unreadCount} unread)</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {selectedInquiries.length > 0 && (
                <Button variant="destructive" size="sm" onClick={handleBulkDelete}>
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Selected ({selectedInquiries.length})
                </Button>
              )}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>All Inquiries</CardTitle>
                <CardDescription>User messages and contact requests ({filteredInquiries.length} total)</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    placeholder="Search inquiries..."
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
            {filteredInquiries.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-slate-500">
                  {searchTerm ? (
                    <>
                      <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>No inquiries found matching "{searchTerm}"</p>
                    </>
                  ) : (
                    <>
                      <Mail className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>No inquiries yet. Users can contact you via the contact form.</p>
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
                        checked={selectedInquiries.length === filteredInquiries.length && filteredInquiries.length > 0}
                        onCheckedChange={handleSelectAll}
                      />
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredInquiries.map((inquiry) => (
                    <TableRow key={inquiry.id}>
                      <TableCell>
                        <Checkbox
                          checked={selectedInquiries.includes(inquiry.id)}
                          onCheckedChange={(checked) => handleSelectInquiry(inquiry.id, checked as boolean)}
                        />
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{inquiry.name}</div>
                          <div className="text-sm text-slate-500">{inquiry.email}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="max-w-xs">
                          <div className="font-medium line-clamp-1">{inquiry.subject}</div>
                          <div className="text-sm text-slate-500 line-clamp-2">{inquiry.message}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            inquiry.status === "unread"
                              ? "destructive"
                              : inquiry.status === "replied"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {inquiry.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            inquiry.priority === "high"
                              ? "destructive"
                              : inquiry.priority === "medium"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {inquiry.priority}
                        </Badge>
                      </TableCell>
                      <TableCell>{inquiry.date}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                  setSelectedInquiry(inquiry)
                                  if (inquiry.status === "unread") {
                                    handleMarkAsRead(inquiry.id)
                                  }
                                }}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl">
                              <DialogHeader>
                                <DialogTitle>{inquiry.subject}</DialogTitle>
                                <DialogDescription>
                                  From {inquiry.name} ({inquiry.email}) on {inquiry.date}
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                  <p className="whitespace-pre-wrap">{inquiry.message}</p>
                                </div>
                                <div className="space-y-2">
                                  <label className="text-sm font-medium">Reply:</label>
                                  <Textarea
                                    placeholder="Type your reply..."
                                    value={replyMessage}
                                    onChange={(e) => setReplyMessage(e.target.value)}
                                    rows={4}
                                  />
                                </div>
                                <div className="flex justify-end space-x-2">
                                  <Button variant="outline" onClick={() => setSelectedInquiry(null)}>
                                    Close
                                  </Button>
                                  <Button onClick={handleReply}>
                                    <Reply className="h-4 w-4 mr-2" />
                                    Send Reply
                                  </Button>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => window.open(`mailto:${inquiry.email}?subject=Re: ${inquiry.subject}`)}
                          >
                            <Mail className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => handleDelete(inquiry.id)}>
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
