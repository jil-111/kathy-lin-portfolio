"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, TrendingUp, Target, Lightbulb, Cog, Rocket, BarChart3, ArrowUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PfizerProject() {
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
            <Badge className="bg-teal-500 text-white">Featured Project</Badge>
            <Badge variant="outline" className="border-slate-600 text-slate-300">
              AI/ML
            </Badge>
            <Badge variant="outline" className="border-slate-600 text-slate-300">
              Healthcare
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Pfizer: Revolutionizing Sales Outreach with AI
          </h1>

          <p className="text-xl text-teal-400 mb-8 font-medium">
            Digital & Product Management Intern | April 2024 - August 2024
          </p>

          <div className="bg-white/5 p-8 rounded-lg border border-slate-700 backdrop-blur-sm">
            <p className="text-lg text-slate-300 leading-relaxed">
              Led the development of an AI-powered sales outreach platform that transformed how pharmaceutical sales
              teams connect with healthcare professionals, resulting in a 12% conversion uplift and 700+ new doctor
              acquisitions through intelligent content matching and automated personalization.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            The Problem: Content Irrelevance & Operational Drag
          </h2>
          <p className="text-lg text-slate-600 mb-12">
            Pfizer's sales representatives faced significant challenges in effectively reaching and engaging healthcare
            professionals.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Before Workflow */}
            <Card className="border-slate-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-slate-900 mb-6">Manual Workflow (Before)</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg">
                    <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Navigate to "Pfizer Pro"</p>
                      <p className="text-sm text-slate-600">Browse through hundreds of articles</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg">
                    <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Read & Select Articles</p>
                      <p className="text-sm text-slate-600">Time-consuming manual review process</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg">
                    <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Manual Content Sharing</p>
                      <p className="text-sm text-slate-600">Generic, non-personalized outreach</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-slate-100 rounded-lg">
                  <p className="text-sm text-slate-700 font-medium">Pain Points:</p>
                  <ul className="text-sm text-slate-600 mt-2 space-y-1">
                    <li>• Lack of personalized recommendations</li>
                    <li>• Time-intensive content discovery</li>
                    <li>• High potential for irrelevant content</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Impact Metrics */}
            <Card className="border-slate-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-slate-900 mb-6">Quantifying the Problem</h3>
                <div className="space-y-6">
                  <div className="text-center p-6 bg-red-50 rounded-lg">
                    <div className="text-3xl font-bold text-red-600 mb-2">~80</div>
                    <p className="text-slate-700 font-medium">Doctors reached per rep</p>
                    <p className="text-sm text-slate-600">Over 3 days of manual work</p>
                  </div>
                  <div className="text-center p-6 bg-red-50 rounded-lg">
                    <div className="text-3xl font-bold text-red-600 mb-2">Low</div>
                    <p className="text-slate-700 font-medium">Doctor engagement rates</p>
                    <p className="text-sm text-slate-600">Due to irrelevant content</p>
                  </div>
                  <div className="text-center p-6 bg-red-50 rounded-lg">
                    <div className="text-3xl font-bold text-red-600 mb-2">High</div>
                    <p className="text-slate-700 font-medium">Operational overhead</p>
                    <p className="text-sm text-slate-600">Manual content distribution</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-slate-50 p-8 rounded-lg">
            <p className="text-lg text-slate-700 leading-relaxed">
              These limitations revealed a clear opportunity:{" "}
              <strong>leverage AI to automate content personalization and streamline the sales outreach process</strong>
              , enabling representatives to focus on relationship building rather than manual content curation.
            </p>
          </div>
        </div>
      </section>

      {/* PM Process Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">My PM Process: From Ideation to Impactful Launch</h2>
          <p className="text-xl text-slate-300 mb-16">
            A systematic approach to understanding user needs, designing solutions, and driving adoption.
          </p>

          {/* Phase 1: Ideation & Discovery */}
          <Card className="mb-16 bg-white/5 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-teal-500 p-3 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Phase 1: Ideation & Discovery</h3>
                  <p className="text-slate-300">Deep empathy and understanding user needs</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-4 text-slate-300">
                  <div>
                    <h4 className="font-semibold text-white mb-2">User Research & Analysis</h4>
                    <ul className="space-y-2">
                      <li>• Conducted 15+ interviews with sales representatives</li>
                      <li>• Analyzed existing engagement data and content performance</li>
                      <li>• Mapped current user journey and identified pain points</li>
                      <li>• Created detailed user personas for both reps and doctors</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Key Insights</h4>
                    <ul className="space-y-2">
                      <li>• 73% of shared content was deemed irrelevant by doctors</li>
                      <li>• Reps spent 40% of their time on content curation</li>
                      <li>• Personalized content had 3x higher engagement rates</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="User Journey Map"
                    width={400}
                    height={300}
                    className="w-full rounded-lg mb-4"
                  />
                  <p className="text-sm text-slate-400">Sales rep user journey mapping and key persona insights</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Phase 2: MVP Development */}
          <Card className="mb-16 bg-white/5 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-teal-500 p-3 rounded-lg">
                  <Cog className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Phase 2: MVP Development & Validation</h3>
                  <p className="text-slate-300">Designing for core impact</p>
                </div>
              </div>

              <div className="space-y-12">
                {/* Feature 1 */}
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Digitalized, Structured Content Library</h4>
                    <div className="space-y-3 text-slate-300">
                      <p>
                        <strong>PM Role:</strong> Led UI design for content management, defined tagging taxonomy,
                        created user-friendly search/filter system.
                      </p>
                      <div className="bg-slate-800/50 p-4 rounded-lg">
                        <p className="text-sm font-medium text-white mb-2">Key Features:</p>
                        <ul className="text-sm space-y-1">
                          <li>• Smart tagging system (specialty, experience level, interests)</li>
                          <li>• Advanced search and filtering capabilities</li>
                          <li>• Content performance analytics</li>
                          <li>• Quick preview and sharing options</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700">
                    <Image
                      src="/placeholder.svg?height=250&width=400"
                      alt="Content Library Interface"
                      width={400}
                      height={250}
                      className="w-full rounded-lg mb-4"
                    />
                    <p className="text-sm text-slate-400">
                      Streamlined content discovery: The intuitive content library with smart tagging
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="order-2 lg:order-1">
                    <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700">
                      <Image
                        src="/placeholder.svg?height=250&width=400"
                        alt="Campaign Builder Interface"
                        width={400}
                        height={250}
                        className="w-full rounded-lg mb-4"
                      />
                      <p className="text-sm text-slate-400">
                        Automated personalization: Designing the campaign builder for targeted outreach
                      </p>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <h4 className="text-xl font-semibold text-white mb-4">Automated Campaign Tool</h4>
                    <div className="space-y-3 text-slate-300">
                      <p>
                        <strong>PM Role:</strong> Designed user flow for streamlined campaign builder, enabled easy
                        persona selection and content variations.
                      </p>
                      <div className="bg-slate-800/50 p-4 rounded-lg">
                        <p className="text-sm font-medium text-white mb-2">Key Features:</p>
                        <ul className="text-sm space-y-1">
                          <li>• Drag-and-drop campaign builder</li>
                          <li>• Doctor persona targeting</li>
                          <li>• Automated scheduling and follow-ups</li>
                          <li>• A/B testing capabilities</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">LLM-Powered Content Matching Algorithm</h4>
                    <div className="space-y-3 text-slate-300">
                      <p>
                        <strong>PM Role:</strong> Collaborated with engineering to design how AI recommendations are
                        surfaced within the workflow, reducing cognitive load.
                      </p>
                      <div className="bg-slate-800/50 p-4 rounded-lg">
                        <p className="text-sm font-medium text-white mb-2">AI Integration:</p>
                        <ul className="text-sm space-y-1">
                          <li>• Doctor profile analysis and content matching</li>
                          <li>• Chat history sentiment analysis</li>
                          <li>• Real-time content recommendations</li>
                          <li>• Continuous learning from engagement data</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700">
                    <Image
                      src="/placeholder.svg?height=250&width=400"
                      alt="AI Recommendations Interface"
                      width={400}
                      height={250}
                      className="w-full rounded-lg mb-4"
                    />
                    <p className="text-sm text-slate-400">
                      Intelligent content recommendations: Seamlessly integrating AI into the sales rep's workflow
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-teal-900/30 p-6 rounded-lg border border-teal-700">
                <h4 className="font-semibold text-white mb-2">Validation Results</h4>
                <p className="text-slate-300">
                  Initial MVP testing showed 15% improvement in click-through rates within the first month, validating
                  our core hypothesis about AI-driven personalization.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Phase 3: Launch & Iteration */}
          <Card className="bg-white/5 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-teal-500 p-3 rounded-lg">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Phase 3: Full Launch & Continuous Iteration</h3>
                  <p className="text-slate-300">Driving adoption through design communication</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-4 text-slate-300">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Launch Strategy</h4>
                    <ul className="space-y-2">
                      <li>• Created 5-minute demo video showcasing UI benefits</li>
                      <li>• Conducted live walkthroughs with sales teams</li>
                      <li>• Implemented in-app onboarding and tutorials</li>
                      <li>• Established feedback collection mechanisms</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Continuous Improvement</h4>
                    <ul className="space-y-2">
                      <li>• Monthly feedback check-ins with users</li>
                      <li>• Iterative UI/UX improvements based on usage data</li>
                      <li>• Enhanced recommendation algorithm accuracy</li>
                      <li>• Expanded content library and tagging system</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700">
                  <Image
                    src="/placeholder.svg?height=250&width=400"
                    alt="Feedback Loop Diagram"
                    width={400}
                    height={250}
                    className="w-full rounded-lg mb-4"
                  />
                  <p className="text-sm text-slate-400">
                    Driving adoption and continuous improvement through focused design communication and feedback
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <div className="bg-teal-500 p-3 rounded-lg">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900">Impact & Quantifiable Results</h2>
              <p className="text-xl text-slate-600">Driven by design innovation and user-centric approach</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border-teal-200 bg-teal-50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">12%</div>
                <p className="text-slate-700 font-medium">Conversion Uplift</p>
                <p className="text-sm text-slate-600 mt-2">Pre-funnel conversion improvement</p>
              </CardContent>
            </Card>

            <Card className="border-teal-200 bg-teal-50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">700+</div>
                <p className="text-slate-700 font-medium">Doctors Acquired</p>
                <p className="text-sm text-slate-600 mt-2">11% of target group signed up</p>
              </CardContent>
            </Card>

            <Card className="border-teal-200 bg-teal-50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">15%</div>
                <p className="text-slate-700 font-medium">CTR Improvement</p>
                <p className="text-sm text-slate-600 mt-2">Within 1 month of MVP validation</p>
              </CardContent>
            </Card>

            <Card className="border-teal-200 bg-teal-50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">89/100</div>
                <p className="text-slate-700 font-medium">User Satisfaction</p>
                <p className="text-sm text-slate-600 mt-2">200+ sales reps rating</p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-slate-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Key Performance Dashboard</h3>
              <div className="bg-slate-50 p-6 rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=600"
                  alt="KPI Dashboard"
                  width={600}
                  height={300}
                  className="w-full rounded-lg mb-4"
                />
                <p className="text-sm text-slate-600">
                  Tangible outcomes: Key performance indicators demonstrating product success
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Learnings Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8">Key Learnings & Takeaways</h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-white/5 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Product Management Insights</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span>
                      User-centric design and continuous iteration based on feedback drives adoption and satisfaction
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span>Cross-functional collaboration is essential for successful AI product integration</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span>Data-driven validation at each phase ensures product-market fit and measurable impact</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Technical & Strategic Learnings</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start space-x-3">
                    <Lightbulb className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span>
                      AI implementation requires careful UX design to maintain user trust and workflow efficiency
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Cog className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span>
                      Scalable architecture planning from MVP stage prevents technical debt in enterprise environments
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Rocket className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span>
                      Change management and training are crucial for successful product adoption in large organizations
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-teal-900/30 p-8 rounded-lg border border-teal-700">
            <h3 className="text-xl font-semibold text-white mb-4">Overall Impact</h3>
            <p className="text-slate-300 leading-relaxed">
              This project provided hands-on experience in shaping a product from ideation through launch, turning
              qualitative feedback and behavioral data into a focused product strategy while leading cross-functional
              teams in a high-stakes, enterprise environment. The success demonstrated the power of AI-driven
              personalization in B2B contexts and established a framework for future product innovations at Pfizer.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation to Other Projects */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Explore Other Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/projects/cancer-chatbot">
              <Card className="border-slate-200 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                    Cancer Patient Support Chatbot
                  </h3>
                  <p className="text-slate-600 mb-4">
                    AI-powered empathetic support for cancer patients and caregivers
                  </p>
                  <div className="flex items-center text-teal-600 font-medium">
                    View Project <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/projects/meavana">
              <Card className="border-slate-200 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                    MeaVana: Productivity Chrome Extension
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Browser extension for enhanced productivity and focus management
                  </p>
                  <div className="flex items-center text-teal-600 font-medium">
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
