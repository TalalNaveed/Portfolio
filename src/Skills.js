"use client"

import { useEffect, useState } from "react"
import { 
  Code2, Database, Globe, GitBranch, Layers, Package, 
  Server, Terminal, Palette, Cpu, Users 
} from "lucide-react"

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    const element = document.getElementById("skills")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["Python", "JavaScript", "TypeScript", "C++", "Visual Basic", "Assembly Language"],
    },
    {
      title: "Web Development",
      icon: <Globe className="w-6 h-6" />,
      skills: ["React", "Node.js", "Express.js", "Tailwind CSS", "HTML", "CSS"],
    },
    {
      title: "AI/ML",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["PyTorch", "PennyLane", "Qiskit", "Keras", "LangChain", "LangGraph"],
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["PostgreSQL", "MongoDB"],
    },
    {
      title: "Tools",
      icon: <Package className="w-6 h-6" />,
      skills: ["Git", "GitHub", "VS Code", "Photoshop", "Excel"],
    },
    {
      title: "Others",
      icon: <Users className="w-6 h-6" />,
      skills: ["Public Speaking", "Team Management", "Leadership", "Communication", "Problem Solving", "Time Management"],
    },
  ]

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden"
    >
      {/* Purple blurred circles */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-300/30 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header - Matches About Me */}
          <div className="text-center mb-20">
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6">
                Skills
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A comprehensive collection of technologies, programming languages, and tools I’ve used through academic projects, research, and hands-on development experience.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {skillCategories.map((category, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white/80 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-500"
                >
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                  </div>

                  {/* Skills */}
                  <ul className="grid grid-cols-2 gap-4 text-gray-700">
                    {category.skills.map((skill, sIdx) => (
                      <li
                        key={sIdx}
                        className="p-3 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors text-sm font-medium"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
