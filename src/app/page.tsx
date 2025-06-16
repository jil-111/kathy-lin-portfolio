"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, Mail, Linkedin, ChevronRight, ArrowRight, ArrowUp, FileText, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] relative overflow-hidden">
      {/* Fixed Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-[#333333] font-['Poppins'] flex items-center">
              Kathy Lin
              <span className="w-2 h-2 bg-[#00C2CB] rounded-full ml-2"></span>
            </Link>

            <div className="hidden md:flex space-x-8">
              <Link
                href="/about"
                className="text-[#333333] hover:text-[#00C2CB] transition-colors font-medium font-['Inter']"
              >
                About Me
              </Link>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-[#333333] hover:text-[#00C2CB] transition-colors font-medium font-['Inter']"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-[#333333] hover:text-[#00C2CB] transition-colors font-medium font-['Inter']"
              >
                Let's Connect
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-[#333333] p-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3">
                <Link
                  href="/about"
                  className="text-[#333333] hover:text-[#00C2CB] transition-colors font-medium text-left font-['Inter']"
                >
                  About Me
                </Link>
                <button
                  onClick={() => {
                    scrollToSection("projects")
                    setMobileMenuOpen(false)
                  }}
                  className="text-[#333333] hover:text-[#00C2CB] transition-colors font-medium text-left font-['Inter']"
                >
                  Projects
                </button>
                <button
                  onClick={() => {
                    scrollToSection("contact")
                    setMobileMenuOpen(false)
                  }}
                  className="text-[#333333] hover:text-[#00C2CB] transition-colors font-medium text-left font-['Inter']"
                >
                  Let's Connect
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Abstract Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Circles */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[#00C2CB]/30 rounded-full animate-float-slow"></div>
        <div className="absolute top-40 left-32 w-16 h-16 bg-[#FF6B6B]/20 rounded-full animate-pulse-glow"></div>
        <div className="absolute top-60 left-20 w-24 h-24 border border-[#88BBDD]/40 rounded-full animate-rotate-slow"></div>

        {/* Medium Circles */}
        <div className="absolute top-32 left-64 w-12 h-12 bg-[#00C2CB]/10 rounded-full animate-float-medium"></div>
        <div className="absolute top-80 left-48 w-20 h-20 border-2 border-[#FF6B6B]/30 rounded-full animate-scale-pulse"></div>
        <div className="absolute top-96 left-16 w-8 h-8 bg-[#00C2CB] rounded-full animate-pulse-glow"></div>

        {/* Small Circles */}
        <div className="absolute top-16 left-80 w-6 h-6 bg-[#88BBDD]/30 rounded-full animate-float-fast"></div>
        <div className="absolute top-72 left-72 w-4 h-4 bg-[#00C2CB]/60 rounded-full animate-pulse-glow"></div>
        <div className="absolute top-52 left-96 w-10 h-10 border border-[#FF6B6B]/40 rounded-full animate-rotate-slow"></div>

        {/* Squares */}
        <div className="absolute top-24 left-40 w-16 h-16 border-2 border-[#00C2CB]/40 rotate-45 animate-rotate-slow"></div>
        <div className="absolute top-88 left-60 w-12 h-12 bg-[#88BBDD]/15 rotate-12 animate-float-medium"></div>
        <div className="absolute top-44 left-88 w-8 h-8 bg-[#FF6B6B]/20 rotate-45 animate-scale-pulse"></div>
        <div className="absolute top-64 left-104 w-20 h-20 border border-white/60 rotate-12 animate-float-slow"></div>

        {/* Lines */}
        <div className="absolute top-36 left-24 w-32 h-0.5 bg-gradient-to-r from-transparent via-[#00C2CB]/50 to-transparent animate-pulse-glow"></div>
        <div className="absolute top-56 left-56 w-24 h-0.5 bg-gradient-to-r from-[#FF6B6B]/40 to-transparent rotate-45 animate-float-medium"></div>
        <div className="absolute top-76 left-32 w-40 h-0.5 bg-gradient-to-r from-transparent via-[#88BBDD]/50 to-transparent animate-pulse-glow"></div>

        {/* Additional scattered elements */}
        <div className="absolute top-12 left-120 w-14 h-14 border border-[#00C2CB]/30 rounded-full animate-float-slow"></div>
        <div className="absolute top-84 left-88 w-6 h-6 bg-[#FF6B6B]/25 rotate-45 animate-rotate-slow"></div>
        <div className="absolute top-48 left-112 w-3 h-3 bg-[#00C2CB] rounded-full animate-pulse-glow"></div>

        {/* Backdrop blur elements for depth */}
        <div className="absolute top-28 left-52 w-40 h-40 bg-[#00C2CB]/5 rounded-full backdrop-blur-sm animate-scale-pulse"></div>
        <div className="absolute top-68 left-24 w-32 h-32 bg-[#88BBDD]/5 rounded-full backdrop-blur-sm animate-float-slow"></div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-end px-4 py-20 pt-24 relative z-10">
        <div className="max-w-7xl mx-auto w-full">
          {/* Desktop Layout */}
          <div className="hidden lg:flex lg:justify-end lg:items-center lg:min-h-[calc(100vh-5rem)]">
            {/* Content Area (Right 60-70%) */}
            <div className="lg:w-[65%] flex flex-col justify-center space-y-8 text-right pr-8">
              {/* Professional Headshot */}
              <div
                className={`flex justify-end transition-all duration-1000 delay-300 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
              >
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt="Kathy Lin - Product Manager"
                    width={128}
                    height={128}
                    className="w-32 h-32 rounded-full border-4 border-[#00C2CB]/30 shadow-2xl shadow-[#00C2CB]/20"
                  />
                  <div
                    className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00C2CB]/20 to-transparent animate-pulse-glow"
                    style={{ animationDuration: "3s" }}
                  />
                </div>
              </div>

              {/* Main Headline */}
              <div
                className={`transition-all duration-1000 delay-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#333333] leading-tight font-['Poppins'] text-right">
                  Kathy Lin:{" "}
                  <span className="text-[#00C2CB] bg-gradient-to-r from-[#00C2CB] to-[#00E5D1] bg-clip-text text-transparent">
                    Product Leader
                  </span>
                </h1>
              </div>

              {/* Sub-Headline */}
              <div
                className={`transition-all duration-1000 delay-700 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
              >
                <p className="text-lg md:text-xl lg:text-2xl text-[#666666] leading-relaxed font-['Inter'] font-light text-right">
                  Driving Innovation with AI &amp; User-Centric Design
                </p>
              </div>

              {/* Descriptive Paragraph */}
              <div
                className={`transition-all duration-1000 delay-900 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
              >
                <p className="text-base md:text-lg text-[#718096] leading-relaxed font-['Inter'] text-right max-w-2xl ml-auto">
                  UC Berkeley MHCI Graduate with Experience at Pfizer, building AI-powered solutions and enhancing user
                  experiences that transform industries.
                </p>
              </div>

              {/* CTA Buttons */}
              <div
                className={`transition-all duration-1000 delay-1100 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
              >
                <div className="flex flex-col space-y-4 items-end">
                  <Button
                    size="lg"
                    className="bg-[#00C2CB] hover:bg-[#00A8B5] text-[#333333] px-10 py-4 text-lg font-semibold rounded-full shadow-lg shadow-[#00C2CB]/25 hover:shadow-xl hover:shadow-[#00C2CB]/40 transform hover:scale-105 transition-all duration-300 font-['Inter']"
                    onClick={() => scrollToSection("projects")}
                  >
                    Explore My Work
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white text-[#333333] hover:bg-gray-50 border-2 border-[#333333] hover:border-[#00C2CB] hover:text-[#00C2CB] px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-['Inter']"
                  >
                    <FileText className="mr-2 h-5 w-5" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] space-y-8 text-center px-4">
            {/* Professional Headshot */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=96&width=96"
                  alt="Kathy Lin - Product Manager"
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full border-4 border-[#00C2CB]/30 shadow-2xl shadow-[#00C2CB]/20 mx-auto"
                />
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00C2CB]/20 to-transparent animate-pulse-glow"
                  style={{ animationDuration: "3s" }}
                />
              </div>
            </div>

            {/* Main Headline */}
            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-[#333333] leading-tight font-['Poppins']">
                Kathy Lin:{" "}
                <span className="text-[#00C2CB] bg-gradient-to-r from-[#00C2CB] to-[#00E5D1] bg-clip-text text-transparent">
                  Product Leader
                </span>
              </h1>
            </div>

            {/* Sub-Headline */}
            <div
              className={`transition-all duration-1000 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <p className="text-lg md:text-xl text-[#666666] leading-relaxed font-['Inter'] font-light">
                Driving Innovation with AI & User-Centric Design
              </p>
            </div>

            {/* Descriptive Paragraph */}
            <div
              className={`transition-all duration-1000 delay-900 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <p className="text-base md:text-lg text-[#718096] leading-relaxed font-['Inter'] max-w-2xl mx-auto">
                UC Berkeley MHCI Graduate with Experience at Pfizer, building AI-powered solutions and enhancing user
                experiences that transform industries.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className={`transition-all duration-1000 delay-1100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <div className="flex flex-col space-y-4 items-center">
                <Button
                  size="lg"
                  className="bg-[#00C2CB] hover:bg-[#00A8B5] text-[#333333] px-8 py-3 text-lg font-semibold rounded-full shadow-lg shadow-[#00C2CB]/25 hover:shadow-xl hover:shadow-[#00C2CB]/40 transform hover:scale-105 transition-all duration-300 font-['Inter']"
                  onClick={() => scrollToSection("projects")}
                >
                  Explore My Work
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-[#333333] hover:bg-gray-50 border-2 border-[#333333] hover:border-[#00C2CB] hover:text-[#00C2CB] px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-['Inter']"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Journey & Expertise Section */}
      <section id="about" className="py-20 px-6 md:px-12 bg-[#FAF8F5] relative overflow-hidden">
        {/* Sparse Geometric Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-16 right-20 w-12 h-12 border border-[#00C2CB]/20 rounded-full animate-float-slow"></div>
          <div className="absolute top-40 left-16 w-6 h-6 bg-[#FF6B6B]/20 rounded-full animate-pulse-glow"></div>
          <div className="absolute top-80 right-32 w-8 h-8 border border-[#88BBDD]/30 rotate-45 animate-rotate-slow"></div>
          <div className="absolute top-96 left-1/4 w-4 h-4 bg-[#00C2CB]/40 rounded-full animate-float-medium"></div>
          <div className="absolute top-[500px] right-1/4 w-16 h-0.5 bg-gradient-to-r from-transparent via-[#88BBDD]/30 to-transparent animate-pulse-glow"></div>
          <div className="absolute top-[600px] left-20 w-10 h-10 border border-white/50 rounded-full animate-float-slow"></div>
          <div className="absolute top-[700px] right-16 w-3 h-3 bg-[#FF6B6B]/40 rotate-45 animate-scale-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] font-['Poppins']">My Journey & Expertise</h2>
          </div>

          {/* Two-Column Layout */}
          <div className="space-y-12">
            {/* Left Column: Professional Journey Timeline */}
            <div
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 opacity-0 animate-fade-in-up max-w-4xl mx-auto"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              <h3 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-8 font-['Poppins']">
                My Professional Journey
              </h3>

              {/* Timeline */}
              <div className="space-y-8">
                {/* Experience 1: MeaVana */}
                <div className="relative pl-8 border-l-2 border-[#00C2CB]/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-[#00C2CB] rounded-full"></div>
                  <div className="space-y-3">
                    <div className="text-[#00C2CB] font-bold text-lg font-['Inter']">May 2025 - Aug 2025</div>
                    <h4 className="text-xl font-semibold text-[#333333] font-['Poppins']">Product Manager</h4>
                    <p className="text-gray-700 font-['Inter']">MeaVana</p>
                    <ul className="text-gray-600 space-y-1 font-['Inter']">
                      <li>• Leading product development of Chrome extension for productivity enhancement</li>
                      <li>• Managing user research and feature prioritization for workflow optimization</li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium font-['Inter'] hover:scale-105 transition-transform duration-200">
                        Product Strategy
                      </span>
                      <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium font-['Inter'] hover:scale-105 transition-transform duration-200">
                        User Research
                      </span>
                      <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium font-['Inter'] hover:scale-105 transition-transform duration-200">
                        Chrome Extension
                      </span>
                    </div>
                  </div>
                </div>

                {/* Experience 2: Cancer Patient Lab */}
                <div className="relative pl-8 border-l-2 border-[#00C2CB]/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-[#88BBDD] rounded-full"></div>
                  <div className="space-y-3">
                    <div className="text-[#00C2CB] font-bold text-lg font-['Inter']">May 2025 - Aug 2025</div>
                    <h4 className="text-xl font-semibold text-[#333333] font-['Poppins']">Product Manager</h4>
                    <p className="text-gray-700 font-['Inter']">Cancer Patient Lab</p>
                    <ul className="text-gray-600 space-y-1 font-['Inter']">
                      <li>• Developing AI-powered chatbot for empathetic cancer patient support</li>
                      <li>• Managing product roadmap for 24/7 accessible patient care solutions</li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium font-['Inter'] hover:scale-105 transition-transform duration-200">
                        AI Chatbot
                      </span>
                      <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium font-['Inter'] hover:scale-105 transition-transform duration-200">
                        Healthcare
                      </span>
                      <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium font-['Inter'] hover:scale-105 transition-transform duration-200">
                        Product Roadmap
                      </span>
                    </div>
                  </div>
                </div>

                {/* Experience 3: Pfizer */}
                <div className="relative pl-8 border-l-2 border-[#00C2CB]/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-[#00C2CB] rounded-full"></div>
                  <div className="space-y-3">
                    <div className="text-[#00C2CB] font-bold text-lg font-['Inter']">Apr 2024 - Aug 2024</div>
                    <h4 className="text-xl font-semibold text-[#333333] font-['Poppins']">
                      Digital & Product Management Intern
                    </h4>
                    <p className="text-gray-700 font-['Inter']">Pfizer, Inc.</p>
                    <ul className="text-gray-600 space-y-1 font-['Inter']">
                      <li>• Launched AI sales outreach platform, driving 12% conversion uplift</li>
                      <li>• Acquired 700+ new HCPs, 11% monthly increase</li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium font-['Inter'] hover:scale-105 transition-transform duration-200">
                        AI Platform
                      </span>
                      <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium font-['Inter'] hover:scale-105 transition-transform duration-200">
                        LLM Integration
                      </span>
                      <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium font-['Inter'] hover:scale-105 transition-transform duration-200">
                        Sales Automation
                      </span>
                      <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium font-['Inter'] hover:scale-105 transition-transform duration-200">
                        User-Centric Design
                      </span>
                    </div>
                  </div>
                </div>

                {/* Experience 4: Maveric Studio */}
                <div className="relative pl-8 border-l-2 border-[#00C2CB]/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-[#FF6B6B] rounded-full"></div>
                  <div className="space-y-3">
                    <div className="text-[#00C2CB] font-bold text-lg font-['Inter']">Sep 2023 - Dec 2023</div>
                    <h4 className="text-xl font-semibold text-[#333333] font-['Poppins']">UX Researcher</h4>
                    <p className="text-gray-700 font-['Inter']">Maveric Studio</p>
                    <ul className="text-gray-600 space-y-1 font-['Inter']">
                      <li>• Improved user engagement by 6% through usability testing</li>
                      <li>• Contributed 3 new features to product roadmap</li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium font-['Inter'] hover:scale-105 transition-transform duration-200">
                        UX Research
                      </span>
                      <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium font-['Inter'] hover:scale-105 transition-transform duration-200">
                        Prototyping
                      </span>
                      <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium font-['Inter'] hover:scale-105 transition-transform duration-200">
                        Competitor Analysis
                      </span>
                    </div>
                  </div>
                </div>

                {/* Experience 5: Interactive Cognition Lab */}
                <div className="relative pl-8 border-l-2 border-[#00C2CB]/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-[#FF6B6B] rounded-full"></div>
                  <div className="space-y-3">
                    <div className="text-[#00C2CB] font-bold text-lg font-['Inter']">Dec 2022 - Mar 2024</div>
                    <h4 className="text-xl font-semibold text-[#333333] font-['Poppins']">Research Assistant</h4>
                    <p className="text-gray-700 font-['Inter']">Interactive Cognition Lab (UC San Diego)</p>
                    <ul className="text-gray-600 space-y-1 font-['Inter']">
                      <li>• Designed A/B tests (N=300), improving session length by 40%</li>
                      <li>• Synthesized user needs into personas for 3D therapy game</li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium font-['Inter'] hover:scale-105 transition-transform duration-200">
                        A/B Testing
                      </span>
                      <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium font-['Inter'] hover:scale-105 transition-transform duration-200">
                        Mixed-Method Research
                      </span>
                      <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium font-['Inter'] hover:scale-105 transition-transform duration-200">
                        Data Analysis
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Know More About Me CTA */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link href="/about">
                  <Button className="bg-[#00C2CB] hover:bg-[#00A8B5] text-[#333333] px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-['Inter'] font-semibold">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Know More About Me
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column: Core Expertise */}
            <div
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 opacity-0 animate-fade-in-up max-w-4xl mx-auto"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              <h3 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-8 font-['Poppins']">Core Expertise</h3>

              <div className="space-y-8">
                {/* Programming/Technical */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-6 h-6 text-[#00C2CB] mr-3">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                    <h4 className="text-xl md:text-2xl font-semibold text-[#333333] font-['Poppins']">Programming</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium font-['Inter'] hover:scale-105 transition-transform duration-200 mr-2 mb-2">
                      Python
                    </span>
                    <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium font-['Inter'] hover:scale-105 transition-transform duration-200 mr-2 mb-2">
                      HTML
                    </span>
                    <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium font-['Inter'] hover:scale-105 transition-transform duration-200 mr-2 mb-2">
                      C#
                    </span>
                    <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium font-['Inter'] hover:scale-105 transition-transform duration-200 mr-2 mb-2">
                      SQL
                    </span>
                    <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium font-['Inter'] hover:scale-105 transition-transform duration-200 mr-2 mb-2">
                      Java
                    </span>
                    <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium font-['Inter'] hover:scale-105 transition-transform duration-200 mr-2 mb-2">
                      R
                    </span>
                  </div>
                </div>

                {/* Methods/Methodologies */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-6 h-6 text-[#00C2CB] mr-3">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-xl md:text-2xl font-semibold text-[#333333] font-['Poppins']">Methods</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium font-['Inter'] hover:scale-105 transition-transform duration-200 mr-2 mb-2">
                      Agile
                    </span>
                    <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium font-['Inter'] hover:scale-105 transition-transform duration-200 mr-2 mb-2">
                      SCRUM
                    </span>
                    <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium font-['Inter'] hover:scale-105 transition-transform duration-200 mr-2 mb-2">
                      User Testing
                    </span>
                    <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium font-['Inter'] hover:scale-105 transition-transform duration-200 mr-2 mb-2">
                      A/B Testing
                    </span>
                    <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium font-['Inter'] hover:scale-105 transition-transform duration-200 mr-2 mb-2">
                      MVP Development
                    </span>
                    <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium font-['Inter'] hover:scale-105 transition-transform duration-200 mr-2 mb-2">
                      Roadmap Prioritization
                    </span>
                    <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium font-['Inter'] hover:scale-105 transition-transform duration-200 mr-2 mb-2">
                      Market Research
                    </span>
                  </div>
                </div>

                {/* Tools/Applications */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-6 h-6 text-[#00C2CB] mr-3">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-xl md:text-2xl font-semibold text-[#333333] font-['Poppins']">
                      Tools & Collaboration
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium font-['Inter'] hover:scale-105 transition-transform duration-200 mr-2 mb-2">
                      Jira
                    </span>
                    <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium font-['Inter'] hover:scale-105 transition-transform duration-200 mr-2 mb-2">
                      Figma
                    </span>
                    <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium font-['Inter'] hover:scale-105 transition-transform duration-200 mr-2 mb-2">
                      Mural
                    </span>
                    <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium font-['Inter'] hover:scale-105 transition-transform duration-200 mr-2 mb-2">
                      Google Analytics
                    </span>
                    <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium font-['Inter'] hover:scale-105 transition-transform duration-200 mr-2 mb-2">
                      Tableau
                    </span>
                    <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium font-['Inter'] hover:scale-105 transition-transform duration-200 mr-2 mb-2">
                      Excel
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#333333] mb-6 font-['Poppins']">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-['Inter']">
              Showcasing impactful product management work across AI, healthcare, and productivity domains
            </p>
          </div>

          {/* Project 1: Pfizer - Image Left, Text Right */}
          <div
            className="mb-32 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              {/* Image Area */}
              <div className="lg:col-span-3">
                <Link href="/projects/pfizer" onClick={() => window.scrollTo(0, 0)}>
                  <div className="relative group cursor-pointer">
                    <div className="bg-[#1A202C] rounded-xl shadow-2xl overflow-hidden transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:-translate-y-2">
                      <Image
                        src="/placeholder.svg?height=600&width=1200&text=Pfizer+AI+Platform"
                        alt="Pfizer AI-Powered Sales Outreach Platform"
                        width={1200}
                        height={600}
                        className="w-full h-64 md:h-80 lg:h-96 object-cover"
                      />
                    </div>
                    {/* Subtle glow effect on hover */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00C2CB]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </Link>
              </div>

              {/* Text Content Area */}
              <div className="lg:col-span-2 space-y-6 p-6 lg:p-8">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-3 font-['Poppins']">
                    Pfizer: AI-Powered Sales Outreach Platform
                  </h3>
                  <p className="text-base text-gray-600 mb-4 font-['Inter']">
                    Digital & Product Management Intern | AI Platform
                  </p>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed font-['Inter']">
                  Launched an AI-powered platform to personalize content delivery for healthcare professionals,
                  significantly boosting doctor acquisition and engagement through intelligent recommendations. Achieved
                  a 12% conversion uplift and acquired 700+ new doctors.
                </p>

                <Link href="/projects/pfizer" onClick={() => window.scrollTo(0, 0)}>
                  <Button className="bg-[#00C2CB] hover:bg-[#00A8B5] text-[#333333] px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-['Inter'] font-semibold">
                    View Details
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Project 2: Cancer Lab - Image Right, Text Left */}
          <div
            className="mb-32 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              {/* Text Content Area */}
              <div className="lg:col-span-2 space-y-6 p-6 lg:p-8 order-2 lg:order-1">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-3 font-['Poppins']">
                    Cancer Patient Lab: AI Chatbot for Patient Support
                  </h3>
                  <p className="text-base text-gray-600 mb-4 font-['Inter']">
                    Product Manager Intern | AI Chatbot Development
                  </p>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed font-['Inter']">
                  Leading the development of an AI-powered chatbot to provide empathetic and accurate answers to
                  cancer-related questions, enhancing patient understanding and reducing anxiety. Managing the product
                  roadmap for accessible 24/7 support for patients and caregivers during critical moments.
                </p>

                <Link href="/projects/cancer-chatbot" onClick={() => window.scrollTo(0, 0)}>
                  <Button className="bg-[#00C2CB] hover:bg-[#00A8B5] text-[#333333] px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-['Inter'] font-semibold">
                    View Details
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              {/* Image Area */}
              <div className="lg:col-span-3 order-1 lg:order-2">
                <Link href="/projects/cancer-chatbot" onClick={() => window.scrollTo(0, 0)}>
                  <div className="relative group cursor-pointer">
                    <div className="bg-[#1A202C] rounded-xl shadow-2xl overflow-hidden transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:-translate-y-2">
                      <Image
                        src="/placeholder.svg?height=600&width=1200&text=Cancer+Chatbot"
                        alt="Cancer Patient Support Chatbot"
                        width={1200}
                        height={600}
                        className="w-full h-64 md:h-80 lg:h-96 object-cover"
                      />
                    </div>
                    {/* Subtle glow effect on hover */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-l from-[#00C2CB]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Project 3: MeaVana - Image Left, Text Right */}
          <div
            className="mb-20 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              {/* Image Area */}
              <div className="lg:col-span-3">
                <Link href="/projects/meavana" onClick={() => window.scrollTo(0, 0)}>
                  <div className="relative group cursor-pointer">
                    <div className="bg-[#1A202C] rounded-xl shadow-2xl overflow-hidden transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:-translate-y-2">
                      <Image
                        src="/placeholder.svg?height=600&width=1200&text=MeaVana+Extension"
                        alt="MeaVana Productivity Chrome Extension"
                        width={1200}
                        height={600}
                        className="w-full h-64 md:h-80 lg:h-96 object-cover"
                      />
                    </div>
                    {/* Subtle glow effect on hover */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00C2CB]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </Link>
              </div>

              {/* Text Content Area */}
              <div className="lg:col-span-2 space-y-6 p-6 lg:p-8">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-3 font-['Poppins']">
                    MeaVana: Productivity Enhancement Chrome Extension
                  </h3>
                  <p className="text-base text-gray-600 mb-4 font-['Inter']">Product Manager | User Productivity</p>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed font-['Inter']">
                  Managing the product development of an intuitive Google Chrome extension focused on streamlining daily
                  workflows and minimizing digital distractions. Leading user research and feature prioritization to
                  empower users to achieve greater productivity through integrated task management and focus enhancement
                  tools.
                </p>

                <Link href="/projects/meavana" onClick={() => window.scrollTo(0, 0)}>
                  <Button className="bg-[#00C2CB] hover:bg-[#00A8B5] text-[#333333] px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-['Inter'] font-semibold">
                    View Details
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 font-['Poppins']">Let's Connect</h2>

          <p className="text-xl text-slate-700 mb-12 max-w-2xl mx-auto font-['Inter']">
            I'm actively seeking Product Manager opportunities at innovative tech companies. Let's discuss how I can
            contribute to your team's success.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button size="lg" className="bg-[#00C2CB] hover:bg-[#00A8B5] text-[#0A1128] px-8 py-3 font-['Inter']">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-[#00C2CB] text-[#00C2CB] hover:bg-[#00C2CB] hover:text-white px-8 py-3 font-['Inter']"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Me
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-[#00C2CB] text-[#00C2CB] hover:bg-[#00C2CB] hover:text-white px-8 py-3 font-['Inter']"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
          </div>

          <div className="text-slate-600 font-['Inter']">
            <p>kathy.lin@berkeley.edu</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#1A202C] border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-slate-400 font-['Inter']">
          <p>&copy; 2024 Kathy Lin. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#00C2CB] hover:bg-[#00A8B5] text-[#0A1128] p-3 rounded-full shadow-lg z-50"
          size="sm"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(90deg); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes rotate-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes scale-pulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; box-shadow: 0 0 20px rgba(0, 194, 203, 0.2); }
          50% { opacity: 1; box-shadow: 0 0 30px rgba(0, 194, 203, 0.4); }
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
        
        .animate-rotate-slow {
          animation: rotate-slow 12s linear infinite;
        }
        
        .animate-scale-pulse {
          animation: scale-pulse 4s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </div>
  )
}
