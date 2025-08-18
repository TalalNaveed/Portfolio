import { Github, Linkedin, Mail } from "lucide-react";

// Simple Tailwind button
function Button({ children, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`font-semibold px-8 py-3 rounded-xl border transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Professional Headshot */}
          <div className="w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden shadow-lg">
            <img
              src="Profile.png"
              alt="Professional headshot"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6">
            Muhammad Talal Naveed
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Computer Science and Business student at{" "}
            <span className="text-purple-600 font-semibold">
              New York University Abu Dhabi
            </span>
          </p>

          {/* Resume Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              className="bg-purple-600 hover:bg-purple-900 text-white border-purple-600 hover:border-purple-700"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              View My Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <a
              href="https://github.com/TalalNaveed"
              className="text-gray-500 hover:text-purple-600 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/talal-naveed-0113a923a/"
              className="text-gray-500 hover:text-purple-600 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:mn3497@nyu.edu"
              className="text-gray-500 hover:text-purple-600 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
