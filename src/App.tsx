import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Palette, Code } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
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
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">DeepWare Studio</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Home</a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Services</a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Testimonials</a>
              <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">Start Project</a>
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-300">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="https://deepware.vercel.app/" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Home</a>
                <a href="https://deepware.vercel.app/#services" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Services</a>
                <a href="https://deepware.vercel.app/#testimonials" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Testimonials</a>
                <a href="https://deepware.vercel.app/register" className="block px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">Start Project</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white">
        <div className="absolute inset-0 bg-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Poster/Pamphlet Design
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
              Designing eye-catching and impactful posters and pamphlets that communicate your message effectively.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
      </section>

      {/* Main Content */}
      <main className="bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* What is Poster/Pamphlet Design */}
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-up">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                What is Poster/Pamphlet Design?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Poster and pamphlet design is the art of creating visually compelling printed materials that capture attention and deliver information effectively. It combines strategic layout, typography, color theory, and visual hierarchy to create designs that not only look beautiful but also serve their intended purpose—whether that's promoting an event, marketing a product, or communicating important information to your target audience.
              </p>
            </div>
          </div>
        </section>

        {/* Types of Designs */}
        <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Types of Designs
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
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
                <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Why Choose Us */}
        <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose DeepWare Studio
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
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
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="absolute inset-0 bg-blue-600/20"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Create Something Amazing?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's bring your vision to life with professional poster and pamphlet designs that make an impact.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Project
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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