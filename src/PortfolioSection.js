import { Github } from "lucide-react"

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

function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-medium transition-colors 
        bg-purple-600 text-white hover:bg-purple-700 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export function PortfolioSection() {
  const projects = [
    {
      title: "Full Stack Gemini Chatbot",
      description:
        "Full-stack MERN chatbot with ChatGPT-style UI, Gemini AI (via LangChain & LangGraph), real-time analytics, chat history, and feedback system.",
      image: "/chatbot.png",
      tags: ["MERN Stack", "LangChain", "Gemini API"],
      githubUrl: "https://github.com/TalalNaveed/mern-gemini-chatbot",
    },
    {
      title: "Quantum Machine Learning",
      description:
        "Analyzed and Explored Various Defense Strategies against a trainable Quanvolutional Neural Network for Research Work.",
      image: "/MachineLearning.jpeg",
      tags: ["PennyLane", "Pytorch", "Tensorflow", "Matplotlib"],
      githubUrl: "https://github.com/TalalNaveed/Quanvolutional-Neural-Network",
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive portfolio website with smooth animations and modern design.",
      image: "/creative-agency-portfolio.png",
      tags: ["React", "Tailwind CSS"],
      githubUrl: "https://github.com/TalalNaveed/Portfolio",
    },
  ]

  return (
    <section
      id="portfolio"
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
              Professional Work
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A glimpse into my creative journey – showcasing some of my projects
              that demonstrate technical expertise and design excellence.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-purple-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="flex items-center gap-2">
                        <Github size={16} />
                        Code
                      </Button>
                    </a>
                  </div>
                </div>
                <CardContent>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
