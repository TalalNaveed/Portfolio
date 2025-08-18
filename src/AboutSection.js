import { GraduationCap, Globe, Code, Brain, Target } from "lucide-react";
import { useEffect, useState } from "react";

// Simple Tailwind Card replacement
function Card({ children, className }) {
  return (
    <div
      className={`rounded-2xl border bg-white shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

function CardContent({ children, className }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-300/30 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6">
                About Me
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Passionate about technology, business, and creating impactful
                solutions
              </p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Image Section */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }`}
            >
              <div className="relative group">
                <img
                  src="/professional-design-workspace.png"
                  alt="Professional workspace"
                  className="relative w-full rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Text Content */}
            <div
              className={`space-y-8 transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Paragraph 1 */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I am an undergraduate student at{" "}
                  <span className="text-purple-600 font-semibold">
                    New York University Abu Dhabi
                  </span>
                  , pursuing a Bachelor of Science in Computer Science, Applied
                  Mathematics, and BOS. My interests lie at the intersection of
                  technology, business, and organizational strategy.
                </p>
              </div>

              {/* Paragraph 2 */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Through my academic journey and hands-on experience, I have
                  worked on projects ranging from web development and software
                  design to quantum machine learning research. I am particularly
                  passionate about creating impactful digital solutions that not
                  only function efficiently but also align with broader business
                  goals.
                </p>
              </div>

              {/* Paragraph 3 */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Currently based in Abu Dhabi, UAE, with close ties to my home
                  city of Lahore, Pakistan, I am eager to explore opportunities
                  that blend technical expertise with organizational leadership,
                  whether in industry, startups, or research-driven
                  environments.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Target className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      Junior
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                      University Year
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      3+
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                      Years Experience
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
