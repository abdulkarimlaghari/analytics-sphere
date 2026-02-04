import React, { useState, useEffect } from 'react';
import { Menu, X, BarChart3, Calculator, FileText, ArrowRight, Mail, Phone, MapPin, Send, ChevronDown } from 'lucide-react';

export default function AnalyticsSphere() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['home', 'services', 'about', 'testimonials', 'blog', 'contact'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInView = rect.top < window.innerHeight * 0.7 && rect.bottom > 0;
          setIsVisible(prev => ({ ...prev, [section]: isInView }));
          
          if (rect.top < 100 && rect.bottom > 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e) => {
  e.preventDefault();
  setFormStatus('sending');
  
  try {
    const response = await fetch('https://formspree.io/f/xdklyajp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    } else {
      setFormStatus('error');
    }
  } catch (error) {
    setFormStatus('error');
  }
};

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const services = [
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Data Analytics",
      description: "Advanced analytics to uncover insights and power smarter decisions.",
      features: ["Predictive modeling", "Data visualization", "Business intelligence", "Real-time dashboards"]
    },
    {
      icon: <Calculator className="w-12 h-12" />,
      title: "Accounting",
      description: "Streamlined accounting to manage your finances with clarity and control.",
      features: ["Financial reporting", "Bookkeeping", "Payroll management", "Compliance tracking"]
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Tax Consulting",
      description: "Effective tax strategies tailored to save you time and money.",
      features: ["Tax planning", "Filing assistance", "Audit support", "Tax optimization"]
    }
  ];

  const testimonials = [
    {
      quote: "Analytics Sphere transformed how we use data — incredible insights and service!",
      author: "Sarah Thompson",
      role: "COO, FinEdge Ltd"
    },
    {
      quote: "Their accounting and analytics support has been game-changing for our operations.",
      author: "Michael Rivera",
      role: "Founder, SmartRetail"
    },
    {
      quote: "Highly professional, responsive, and truly data-driven. Great team to work with!",
      author: "Priya Desai",
      role: "CTO, CloudNest"
    }
  ];

  const blogPosts = [
    {
      title: "The Power of Analytics in Finance",
      excerpt: "How businesses use analytics to make smarter financial decisions and drive growth.",
      date: "Jan 15, 2025",
      category: "Analytics"
    },
    {
      title: "Tax Season Tips for Small Businesses",
      excerpt: "Essential tax prep strategies that help you avoid penalties and maximize returns.",
      date: "Jan 10, 2025",
      category: "Tax"
    },
    {
      title: "How to Automate Accounting Tasks",
      excerpt: "Save time and reduce errors with automation tools built for modern accountants.",
      date: "Jan 5, 2025",
      category: "Accounting"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .gradient-text {
  background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}



        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }

        .hero-bg {
  background:
    radial-gradient(circle at 20% 50%, rgba(59,130,246,0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(6,182,212,0.12) 0%, transparent 50%);
}


        .glass-effect {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(96, 165, 250, 0.1);
        }

        .mesh-gradient {
          background: 
            radial-gradient(at 27% 37%, rgba(96, 165, 250, 0.08) 0px, transparent 50%),
            radial-gradient(at 97% 21%, rgba(167, 139, 250, 0.08) 0px, transparent 50%),
            radial-gradient(at 52% 99%, rgba(236, 72, 153, 0.08) 0px, transparent 50%),
            radial-gradient(at 10% 29%, rgba(96, 165, 250, 0.08) 0px, transparent 50%);
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur border-b border-slate-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold text-blue-400" style={{ fontFamily: "'Playfair Display', serif" }}>
  Analytics Sphere
</span>

            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'services', 'about', 'testimonials', 'blog', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
  activeSection === item ? 'text-blue-400' : 'text-slate-300'
}`}

                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors"

            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass-effect border-t border-slate-800">
            <div className="px-4 py-4 space-y-3">
              {['home', 'services', 'about', 'testimonials', 'blog', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left text-slate-300 hover:text-cyan-400 transition-colors py-2"

                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 hero-bg relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Turn <span className="gradient-text">Data</span> into <span className="gradient-text">Decisions</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto animate-slide-up stagger-1">
            Analytics & Accounting solutions tailored to your business goals.
          </p>
          <button
            onClick={() => scrollToSection('services')}
            className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20 animate-slide-up stagger-2"

          >
            <span>Explore Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="mt-16">
            <ChevronDown className="w-8 h-8 mx-auto text-slate-500" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
  Our <span className="text-blue-400">Services</span>
</h2>

            <p className="text-xl text-slate-400">Comprehensive solutions for modern businesses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-slate-800 border border-slate-700 rounded-2xl p-8 transition-all duration-300 hover:border-cyan-400 hover:shadow-md ${
  isVisible.services ? 'animate-slide-up' : 'opacity-0'
} stagger-${index + 1}`}

              >
                <div className="text-cyan-400 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {service.title}
                </h3>
                <p className="text-slate-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`${isVisible.about ? 'animate-slide-up' : 'opacity-0'}`}>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
  About <span className="text-blue-400">Us</span>
</h2>

              <p className="text-lg text-slate-300 mb-6">
                At Analytics Sphere Ltd, we combine the power of data and finance to deliver
                insight-driven solutions for modern businesses. Whether you're managing finances
                or optimizing data pipelines, we're here to help you grow.
              </p>
              <p className="text-lg text-slate-300 mb-8">
                Our team of analysts and accountants collaborate closely with clients to bring
                clarity, strategy, and smart decision-making to every challenge.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                  <div className="text-sm text-slate-400">Clients Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">98%</div>
                  <div className="text-sm text-slate-400">Satisfaction Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                  <div className="text-sm text-slate-400">Years Experience</div>
                </div>
              </div>
            </div>
            <div className={`${isVisible.about ? 'animate-slide-up stagger-2' : 'opacity-0'}`}>
              <div className="gradient-border rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                  alt="Data Analytics Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
  What Our <span className="text-blue-400">Clients</span> Say
</h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`glass-effect rounded-2xl p-8 transform transition-all duration-500 hover:-translate-y-2 ${
                  isVisible.testimonials ? 'animate-slide-up' : 'opacity-0'
                } stagger-${index + 1}`}
              >
                <div className="text-cyan-400 text-5xl mb-4">"</div>
                <p className="text-slate-300 mb-6 italic">{testimonial.quote}</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-slate-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
  From the <span className="text-blue-400">Blog</span>
</h2>

            <p className="text-xl text-slate-400">Insights and tips from our experts</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className={`gradient-border rounded-2xl overflow-hidden group cursor-pointer transform transition-all duration-500 hover:-translate-y-1 ${
                  isVisible.blog ? 'animate-slide-up' : 'opacity-0'
                } stagger-${index + 1}`}
              >
                <div className="h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                  <div className="text-6xl opacity-20">{post.category === 'Analytics' ? '📊' : post.category === 'Tax' ? '📋' : '💼'}</div>
                </div>
                <div className="p-6">
                  <div className="text-xs text-cyan-400 mb-2">{post.category} • {post.date}</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">{post.excerpt}</p>
                  <button className="text-blue-400 text-sm font-semibold flex items-center group-hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
  Contact <span className="text-blue-400">Us</span>
</h2>

            <p className="text-xl text-slate-400">Let's talk about how we can help your business grow</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className={`${isVisible.contact ? 'animate-slide-up' : 'opacity-0'}`}>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-cyan-400 mt-1" />
                  <div>
                    <div className="font-semibold text-white mb-1">Email</div>
                    <a href="mailto:info@analyticssphere.co.uk" className="text-slate-400 hover:text-blue-400 transition-colors">
                      info@analyticssphere.co.uk
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-cyan-400 mt-1" />
                  <div>
                    <div className="font-semibold text-white mb-1">Phone</div>
                    <a href="tel:+442012345678" className="text-slate-400 hover:text-blue-400 transition-colors">
                      +44 20 1234 5678
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-cyan-400 mt-1" />
                  <div>
                    <div className="font-semibold text-white mb-1">Office</div>
                    <p className="text-slate-400">
                      123 Data Street<br />
                      London, UK EC1A 1BB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${isVisible.contact ? 'animate-slide-up stagger-2' : 'opacity-0'}`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows="5"
                    className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full group inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed"

                >
                  <span>{formStatus === 'sending' ? 'Sending...' : formStatus === 'success' ? 'Message Sent!' : 'Send Message'}</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <BarChart3 className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-bold gradient-text" style={{ fontFamily: "'Playfair Display', serif" }}>
                Analytics Sphere Ltd
              </span>
            </div>
            <div className="flex space-x-6 mb-4 md:mb-0">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="text-slate-400 text-sm">
              © 2026 Analytics Sphere Ltd. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}