"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowUp } from "lucide-react"
import Link from "next/link"

export default function CancerChatbotProject() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-white">
              Kathy Lin
            </Link>
            <Link href="/" className="text-slate-300 hover:text-teal-400 transition-colors">
              <ArrowLeft className="h-5 w-5 inline mr-2" />
              Back to Portfolio
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="outline" className="border-slate-600 text-slate-300">
              Healthcare AI
            </Badge>
            <Badge variant="outline" className="border-slate-600 text-slate-300">
              Research
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Empowering Patients: AI Chatbot for Cancer-Related Queries
          </h1>

          <p className="text-xl text-teal-400 mb-8 font-medium">Product Manager Intern | May 2025 - Aug 2025</p>

          <div className="bg-white/5 p-8 rounded-lg border border-slate-700 backdrop-blur-sm">
            <p className="text-lg text-slate-300 leading-relaxed">
              This project is currently in development. Detailed case study content will be added upon completion.
            </p>
          </div>
        </div>
      </section>

      {/* Placeholder Content */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-slate-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">The Problem</h3>
                <p className="text-slate-600">Content to be added...</p>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">My PM Process</h3>
                <p className="text-slate-600">Content to be added...</p>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Key Learnings</h3>
                <p className="text-slate-600">Content to be added...</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Navigation to Other Projects */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Explore Other Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/projects/pfizer">
              <Card className="bg-white/5 border-slate-700 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors">
                    Pfizer: AI-Powered Sales Outreach Platform
                  </h3>
                  <p className="text-slate-300 mb-4">
                    Revolutionizing pharmaceutical sales with intelligent automation
                  </p>
                  <div className="flex items-center text-teal-400 font-medium">
                    View Project <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/projects/meavana">
              <Card className="bg-white/5 border-slate-700 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors">
                    MeaVana: Productivity Chrome Extension
                  </h3>
                  <p className="text-slate-300 mb-4">
                    Browser extension for enhanced productivity and focus management
                  </p>
                  <div className="flex items-center text-teal-400 font-medium">
                    View Project <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-teal-500 hover:bg-teal-600 text-white p-3 rounded-full shadow-lg z-50"
          size="sm"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}
