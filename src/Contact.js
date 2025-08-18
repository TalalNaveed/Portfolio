import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react"

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 left-16 w-28 h-28 bg-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-16 right-16 w-32 h-32 bg-purple-300/30 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          {/* Section Header */}
          <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6">
            Let&apos;s Connect!
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and exciting projects.  
            Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-center space-y-10">
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-left">
                <div className="font-medium text-gray-900">Email</div>
                <div className="text-gray-600">mn3497@nyu.edu</div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-left">
                <div className="font-medium text-gray-900">Location</div>
                <div className="text-gray-600">Abu Dhabi, UAE</div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-left">
                <div className="font-medium text-gray-900">Phone</div>
                <div className="text-gray-600">+971 502463392</div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-8">
            <h4 className="font-medium text-lg text-gray-900 mb-4">Follow Me</h4>
            <div className="flex gap-4 justify-center">
              <a
                href="https://github.com/TalalNaveed"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-200 hover:bg-purple-600 hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/talal-naveed-0113a923a/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-200 hover:bg-purple-600 hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
