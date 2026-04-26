import  { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Code } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }else {
    document.documentElement.classList.remove("dark");
    setIsDarkMode(false);
  }
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDarkMode; // calculate new state
  setIsDarkMode(nextTheme);
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen text-gray-100 selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">DenveX</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="https://www.denvex.in/" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Home</a>
              <a href="https://www.denvex.in/#services" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Services</a>
              <a href="https://www.denvex.in/#testimonials" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Testimonials</a>
              <a href="https://www.denvex.in/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">Start Project</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-300 p-2">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-white/5 bg-[#020617]">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="https://www.denvex.in/" className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200">Home</a>
                <a href="https://www.denvex.in/#services" className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200">Services</a>
                <a href="https://www.denvex.in/#testimonials" className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200">Testimonials</a>
                <a href="https://www.denvex.in/register" className="block px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">Start Project</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 leading-tight tracking-tight text-white">
              Poster & Pamphlet <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Design</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-12 max-w-3xl mx-auto text-gray-400 leading-relaxed">
              Designing eye-catching and impactful posters and pamphlets that communicate your message effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
                What is Poster/Pamphlet Design?
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Poster and pamphlet design is the art of creating visually compelling printed materials that capture attention and deliver information effectively. It combines strategic layout, typography, color theory, and visual hierarchy to create designs that not only look beautiful but also serve their intended purpose—whether that's promoting an event, marketing a product, or communicating important information to your target audience.
              </p>
            </div>
          </div>
        </section>

        {/* Types of Designs */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20 animate-fade-up">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
                Types of Designs
              </h2>
              <p className="text-xl text-gray-400">
                We specialize in creating diverse design solutions for every need
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Event Posters",
                  description: "Dynamic designs for concerts, conferences, festivals, and corporate events that grab attention and drive attendance."
                },
                {
                  title: "Marketing Pamphlets",
                  description: "Persuasive tri-fold and bi-fold brochures that showcase your products and services with compelling visual storytelling."
                },
                {
                  title: "Informational Brochures",
                  description: "Clear, organized layouts for educational content, company overviews, and instructional materials that inform and engage."
                },
                {
                  title: "Product Launch Designs",
                  description: "High-impact promotional materials that build excitement and communicate key features for new product launches."
                }
              ].map((item, index) => (
                <div key={index} className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 animate-fade-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Why Choose Us */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20 animate-fade-up">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
                Why Choose DenveX
              </h2>
              <p className="text-xl text-gray-400">
                Your success is our priority—here's what sets us apart
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Creative Excellence",
                  description: "Award-winning designs that stand out in crowded markets and leave lasting impressions on your audience."
                },
                {
                  title: "Strategic Approach",
                  description: "Data-driven design decisions that align with your brand goals and target audience preferences for maximum ROI."
                },
                {
                  title: "Fast Turnaround",
                  description: "Efficient workflow processes that deliver high-quality results within tight deadlines without compromising quality."
                },
                {
                  title: "Unlimited Revisions",
                  description: "We work closely with you until the design perfectly matches your vision and exceeds your expectations."
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 animate-fade-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-blue-600/5"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-up bg-white/5 backdrop-blur-md border border-white/10 p-12 rounded-3xl">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-8 leading-tight">
                Ready to Create <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Something Amazing?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Let's bring your vision to life with professional poster and pamphlet designs that make an impact.
              </p>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdHXVClcLzomQqmURl2nBidO5EcRkr3l8mdL6sD6frg6PjoWg/viewform?usp=header" 
                className="inline-flex items-center px-10 py-5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              >
                Start Your Project
                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;