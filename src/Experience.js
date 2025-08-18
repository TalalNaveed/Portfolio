import { Calendar, MapPin } from "lucide-react"

function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-2xl shadow-md ${className}`}>
      {children}
    </div>
  )
}

function CardContent({ children, className = "" }) {
  return <div className={`p-6 ${className}`}>{children}</div>
}

export function ExperienceSection() {
  const experiences = [
    {
      title: "AI Intern",
      company: "Swftbox",
      location: "Abu Dhabi, United Arab Emirates",
      period: "June 2025 - August 2025",
      description:
        "Developed a full-stack AI chatbot platform with a ChatGPT-style interface powered by Google Gemini AI. Integrated real-time conversational UI, backend services, and analytics to deliver a scalable AI application.",
    },
    {
      title: "Quantum Machine Learning Research Assistant",
      company: "Center for Quantum and Topological Systems",
      location: "Abu Dhabi, United Arab Emirates",
      period: "July 2024 - February 2025",
      description:
        "Researched the robustness of quantum machine learning models against adversarial attacks. Developed and trained quantum neural networks, designing defense strategies to enhance resilience in quantum AI systems.",
    },
    {
      title: "Software Engineer Intern",
      company: "Pet Republic",
      location: "Abu Dhabi, United Arab Emirates",
      period: "August 2024 - December 2024",
      description:
        "Contributed to frontend development with React, usability testing, and design improvements. Helped revamp the company website, improving functionality, UI/UX, and customer experience.",
    },
  ]

  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-300/30 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6">
              Professional Journey
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Glimpse into my professional experience
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-300"></div>

              {experiences.map((experience, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white z-10"></div>

                  {/* Card content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                          <Calendar size={16} />
                          <span>{experience.period}</span>
                        </div>
                        <h3 className="font-semibold text-xl text-gray-900 mb-1">
                          {experience.title}
                        </h3>
                        <div className="flex items-center gap-2 text-purple-600 font-medium mb-3">
                          <span>{experience.company}</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span className="text-sm">
                              {experience.location}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {experience.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
