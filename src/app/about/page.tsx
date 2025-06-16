"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp, Users, LineChart, IterationCw, Network, Rocket } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
    <div className="min-h-screen bg-[#FAF8F5] relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Sparse geometric shapes */}
        <div className="absolute top-20 right-20 w-16 h-16 border-2 border-[#00C2CB]/20 rounded-full animate-float-slow"></div>
        <div className="absolute top-40 left-16 w-8 h-8 bg-[#88BBDD]/30 rounded-full animate-pulse-glow"></div>
        <div className="absolute top-80 right-32 w-12 h-12 border border-[#FF6B6B]/30 rotate-45 animate-rotate-slow"></div>
        <div className="absolute top-96 left-1/4 w-6 h-6 bg-[#00C2CB]/40 rounded-full animate-float-medium"></div>
        <div className="absolute top-[600px] right-1/4 w-20 h-0.5 bg-gradient-to-r from-transparent via-[#88BBDD]/40 to-transparent animate-pulse-glow"></div>
        <div className="absolute top-[800px] left-20 w-10 h-10 border border-white/60 rounded-full animate-float-slow"></div>
        <div className="absolute top-[1000px] right-16 w-4 h-4 bg-[#FF6B6B]/50 rotate-45 animate-scale-pulse"></div>
        <div className="absolute top-[1200px] left-1/3 w-14 h-14 border-2 border-[#00C2CB]/20 rotate-12 animate-rotate-slow"></div>
        <div className="absolute top-[1400px] right-1/3 w-24 h-0.5 bg-gradient-to-l from-transparent via-white/50 to-transparent animate-float-medium"></div>
        <div className="absolute top-[1600px] left-16 w-6 h-6 bg-[#88BBDD]/40 rounded-full animate-pulse-glow"></div>
      </div>

      {/* Fixed Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-[#333333] font-['Poppins'] flex items-center">
              Kathy Lin
              <span className="w-2 h-2 bg-[#00C2CB] rounded-full ml-2"></span>
            </Link>

            <div className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-[#333333] hover:text-[#00C2CB] transition-colors font-medium font-['Inter']"
              >
                Home
              </Link>
              <Link href="/about" className="text-[#00C2CB] font-medium font-['Inter']">
                About Me
              </Link>
              <Link
                href="/#projects"
                className="text-[#333333] hover:text-[#00C2CB] transition-colors font-medium font-['Inter']"
              >
                Projects
              </Link>
              <Link
                href="/#contact"
                className="text-[#333333] hover:text-[#00C2CB] transition-colors font-medium font-['Inter']"
              >
                Let's Connect
              </Link>
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
                  href="/"
                  className="text-[#333333] hover:text-[#00C2CB] transition-colors font-medium text-left font-['Inter']"
                >
                  Home
                </Link>
                <Link href="/about" className="text-[#00C2CB] font-medium text-left font-['Inter']">
                  About Me
                </Link>
                <Link
                  href="/#projects"
                  className="text-[#333333] hover:text-[#00C2CB] transition-colors font-medium text-left font-['Inter']"
                >
                  Projects
                </Link>
                <Link
                  href="/#contact"
                  className="text-[#333333] hover:text-[#00C2CB] transition-colors font-medium text-left font-['Inter']"
                >
                  Let's Connect
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Page Hero/Banner Section */}
        <section className="pt-32 pb-20">
          <div
            className="text-center opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4 font-['Poppins']">About Kathy Lin</h1>
            <p className="text-lg md:text-xl text-[#666666] mb-8 font-['Inter']">
              Product Leader | Driving Innovation with AI & User-Centric Design
            </p>

            {/* Professional Photo */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Kathy Lin - Professional Photo"
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full border-4 border-[#00C2CB]/30 shadow-lg"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00C2CB]/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* My Professional Philosophy Section */}
        <section className="py-20">
          <div
            className="opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6 font-['Poppins']">
              My Professional Philosophy
            </h2>

            <div className="space-y-6">
              <p className="text-lg text-[#2D3748] leading-relaxed font-['Inter']">
                My journey in Product Management is driven by an unyielding fascination with the intersection of
                technology, human behavior, and tangible impact. With a Master of Human-Computer Interaction from UC
                Berkeley and a Bachelor's in Cognitive Science/Machine Learning from UC San Diego, I've cultivated a
                unique perspective that bridges deep technical understanding with profound user empathy.
              </p>

              <p className="text-lg text-[#2D3748] leading-relaxed font-['Inter']">
                My philosophy centers on building products that truly resonate and deliver measurable value. I thrive on
                translating complex problems into clear opportunities, guiding cross-functional teams to iterate
                rapidly, and constantly learning from data and user feedback. I believe in fostering collaborative
                environments where innovation flourishes and every decision is anchored in a deep understanding of
                customer needs and market dynamics.
              </p>

              <p className="text-lg text-[#2D3748] leading-relaxed font-['Inter']">
                I am passionate about leveraging cutting-edge advancements, particularly in AI and data science, to
                create intuitive and impactful solutions. My goal is to craft products that not only meet business
                objectives but also genuinely enhance human experiences and transform industries.
              </p>
            </div>
          </div>
        </section>

        {/* My Approach to Product Management Section */}
        <section className="py-20">
          <div
            className="opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6 font-['Poppins']">
              My Approach to Product Management
            </h2>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#00C2CB]/10 p-3 rounded-lg flex-shrink-0">
                  <Users className="h-6 w-6 text-[#00C2CB]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#333333] mb-2 font-['Poppins']">User-Centric Discovery</h3>
                  <p className="text-lg text-[#2D3748] leading-relaxed font-['Inter']">
                    I initiate projects by deeply understanding user needs through extensive research, persona
                    development, and journey mapping.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#88BBDD]/10 p-3 rounded-lg flex-shrink-0">
                  <LineChart className="h-6 w-6 text-[#88BBDD]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#333333] mb-2 font-['Poppins']">Data-Driven Validation</h3>
                  <p className="text-lg text-[#2D3748] leading-relaxed font-['Inter']">
                    Every decision is validated through rigorous A/B testing, analytics interpretation, and the
                    definition of clear, measurable KPIs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#FF6B6B]/10 p-3 rounded-lg flex-shrink-0">
                  <IterationCw className="h-6 w-6 text-[#FF6B6B]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#333333] mb-2 font-['Poppins']">Agile Execution</h3>
                  <p className="text-lg text-[#2D3748] leading-relaxed font-['Inter']">
                    I champion agile methodologies, working closely with engineering and design teams to facilitate
                    efficient sprint planning, backlog prioritization, and continuous delivery.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#00C2CB]/10 p-3 rounded-lg flex-shrink-0">
                  <Network className="h-6 w-6 text-[#00C2CB]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#333333] mb-2 font-['Poppins']">
                    Cross-Functional Leadership
                  </h3>
                  <p className="text-lg text-[#2D3748] leading-relaxed font-['Inter']">
                    My strength lies in fostering clear communication and aligning diverse stakeholders—from engineering
                    to sales—around a unified product vision.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#88BBDD]/10 p-3 rounded-lg flex-shrink-0">
                  <Rocket className="h-6 w-6 text-[#88BBDD]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#333333] mb-2 font-['Poppins']">Go-to-Market Strategy</h3>
                  <p className="text-lg text-[#2D3748] leading-relaxed font-['Inter']">
                    I develop comprehensive launch plans and adoption strategies, ensuring products successfully reach
                    their target users and achieve market traction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Milestones Section */}
        <section className="py-20">
          <div
            className="opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6 font-['Poppins']">
              Educational Milestones
            </h2>

            <div className="space-y-12">
              {/* Master's Degree */}
              <div className="relative pl-8 border-l-2 border-[#00C2CB]/30">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-[#00C2CB] rounded-full"></div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-[#333333] font-['Poppins']">
                    Master of Human-Computer Interaction
                  </h3>
                  <p className="text-lg text-[#666666] font-['Inter'] mb-2">
                    University of California, Berkeley, Berkeley, CA
                  </p>
                  <p className="text-base text-[#88BBDD] font-medium font-['Inter'] mb-4">Expected Dec 2025</p>
                  <p className="text-base text-[#2D3748] font-['Inter']">
                    <strong>Key takeaways:</strong> Comprehensive foundation in user-centric design, product management
                    frameworks, and front-end development.
                  </p>
                </div>
              </div>

              {/* Bachelor's Degree */}
              <div className="relative pl-8 border-l-2 border-[#00C2CB]/30">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-[#88BBDD] rounded-full"></div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-[#333333] font-['Poppins']">
                    Bachelor of Science in Cognitive Science/Machine Learning
                  </h3>
                  <p className="text-lg text-[#666666] font-['Inter'] mb-2">
                    University of California, San Diego, La Jolla, CA
                  </p>
                  <p className="text-base text-[#88BBDD] font-medium font-['Inter'] mb-4">Sep 2020 - Mar 2024</p>
                  <p className="text-base text-[#2D3748] font-['Inter']">
                    <strong>Key takeaways:</strong> Strong analytical and quantitative skills, foundational
                    understanding of human cognition and AI principles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership & Community Involvement Section */}
        <section className="py-20">
          <div
            className="opacity-0 animate-fade-in-up"
            style={{ animationDelay: "1.0s", animationFillMode: "forwards" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6 font-['Poppins']">
              Leadership & Community Involvement
            </h2>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#333333] mb-3 font-['Poppins']">Calpirg | Team Lead</h3>
              <p className="text-lg text-[#666666] font-['Inter'] mb-6">La Jolla, CA | Jan 2022 - Jun 2022</p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#00C2CB] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-[#2D3748] leading-relaxed font-['Inter']">
                    Led a 20-person team to deliver 3 outreach events, generating 1,000+ pledges and improving
                    participant engagement by 25% through structured campaign goals and feedback loops.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#00C2CB] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-[#2D3748] leading-relaxed font-['Inter']">
                    Coordinated recurring clean-up events with 50+ attendees each, advocating sustainable behavior and
                    driving grassroots community involvement.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-[#00C2CB]/5 rounded-lg">
                <p className="text-base text-[#2D3748] font-['Inter']">
                  <strong>PM Relevance:</strong> This experience honed my skills in team leadership, project
                  coordination, stakeholder management, and impact measurement—all critical competencies for effective
                  product management.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center text-[#666666] font-['Inter']">
          <p>&copy; 2024 Kathy Lin. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#00C2CB] hover:bg-[#00A8B5] text-white p-3 rounded-full shadow-lg z-50"
          size="sm"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(90deg); }
        }
        
        @keyframes rotate-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes scale-pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        
        .animate-rotate-slow {
          animation: rotate-slow 15s linear infinite;
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
