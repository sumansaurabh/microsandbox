import React, { useState, useEffect } from 'react';
import {
  Menu, X, ChevronDown, ChevronUp, Play, Shield, Zap, Home,
  Package, Cpu, Check, Globe, Moon, Sun, MessageCircle,
  ArrowUp, Star, Github, Twitter, Linkedin, Mail
} from 'lucide-react';

/**
 * MicroSandbox Landing Page
 *
 * A modern, high-converting landing page built with React + TailwindCSS
 * Features: Responsive design, dark/light mode, animations, multi-language support
 *
 * CUSTOMIZATION SECTIONS:
 * 1. Hero Section - Update headline, subheading, CTA
 * 2. Features Section - Modify feature list
 * 3. Screenshots Section - Add your demo images/videos
 * 4. Testimonials - Add customer reviews
 * 5. Pricing Plans - Update tiers and prices
 * 6. FAQ Section - Add your questions
 * 7. Footer - Update company info and links
 */

const MicroSandboxLandingPage = () => {
  // ============================================
  // STATE MANAGEMENT
  // ============================================
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isYearly, setIsYearly] = useState(false);
  const [language, setLanguage] = useState('en');
  const [openFaq, setOpenFaq] = useState(null);
  const [email, setEmail] = useState('');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  // ============================================
  // SCROLL EFFECTS
  // ============================================
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  // ============================================
  // TRANSLATIONS (Multi-language support)
  // ============================================
  const translations = {
    en: {
      nav: {
        features: 'Features',
        demo: 'Demo',
        pricing: 'Pricing',
        docs: 'Docs',
        blog: 'Blog'
      },
      hero: {
        headline: 'Execute Untrusted Code Safely',
        subheading: 'Easy secure execution of untrusted user/AI code in isolated microVMs. Lightning-fast startup, hardware-level isolation, self-hosted.',
        ctaPrimary: 'Get Started Free',
        ctaSecondary: 'View Documentation'
      }
    },
    es: {
      nav: {
        features: 'Características',
        demo: 'Demo',
        pricing: 'Precios',
        docs: 'Documentación',
        blog: 'Blog'
      },
      hero: {
        headline: 'Ejecuta Código No Confiable de Forma Segura',
        subheading: 'Ejecución segura y fácil de código de usuario/IA no confiable en microVMs aisladas. Inicio ultrarrápido, aislamiento a nivel de hardware, autoalojado.',
        ctaPrimary: 'Comenzar Gratis',
        ctaSecondary: 'Ver Documentación'
      }
    }
  };

  const t = translations[language];

  // ============================================
  // DATA: FEATURES
  // ============================================
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Strong Isolation',
      description: 'Hardware-level VM isolation with microVMs. No shared kernels, no container escape vulnerabilities.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Instant Startup',
      description: 'Boot times under 200ms. Start executing code in milliseconds, not seconds.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Your Infrastructure',
      description: 'Self-hosted with full control. No vendor lock-in, complete data privacy.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'OCI Compatible',
      description: 'Works with standard container images. Use Docker Hub or any OCI registry.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'AI-Ready',
      description: 'Built-in MCP support for seamless AI integration. Perfect for Claude and other AI tools.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Multi-Language SDKs',
      description: 'SDKs for Python, JavaScript, Rust, Go, and 25+ other languages.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  // ============================================
  // DATA: USE CASES
  // ============================================
  const useCases = [
    {
      title: 'AI Code Execution',
      description: 'Let AI agents write and execute code safely without risking your infrastructure.',
      icon: '🤖',
      stats: '< 200ms startup'
    },
    {
      title: 'Data Analysis',
      description: 'Run untrusted data processing scripts with privacy-focused isolation.',
      icon: '📊',
      stats: 'Full isolation'
    },
    {
      title: 'Code Playgrounds',
      description: 'Build interactive coding environments for education and training.',
      icon: '💻',
      stats: 'Multi-language'
    },
    {
      title: 'Web Automation',
      description: 'Execute browser automation scripts in secure, contained environments.',
      icon: '🌐',
      stats: 'Self-hosted'
    }
  ];

  // ============================================
  // DATA: TESTIMONIALS
  // ============================================
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO, AI Startup',
      avatar: '👩‍💻',
      quote: 'MicroSandbox transformed how we run AI-generated code. The security and speed are unmatched.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'DevOps Engineer',
      avatar: '👨‍💼',
      quote: 'Finally, a solution that combines container convenience with VM security. Setup was incredibly easy.',
      rating: 5
    },
    {
      name: 'Emily Watson',
      role: 'Security Architect',
      avatar: '👩‍🔬',
      quote: 'The hardware-level isolation gives us confidence to execute untrusted code in production.',
      rating: 5
    }
  ];

  // ============================================
  // DATA: PRICING PLANS
  // ============================================
  const pricingPlans = [
    {
      name: 'Open Source',
      price: { monthly: 0, yearly: 0 },
      description: 'Perfect for getting started',
      features: [
        'Self-hosted deployment',
        'Unlimited sandboxes',
        'All SDK access',
        'Community support',
        'Open source license'
      ],
      cta: 'Get Started',
      popular: false,
      link: 'https://github.com/microsandbox/microsandbox'
    },
    {
      name: 'Pro',
      price: { monthly: 49, yearly: 470 },
      description: 'For professional teams',
      features: [
        'Everything in Open Source',
        'Priority support',
        'Advanced monitoring',
        'Custom environments',
        'SLA guarantee',
        'Team collaboration'
      ],
      cta: 'Start Free Trial',
      popular: true,
      link: '#contact'
    },
    {
      name: 'Enterprise',
      price: { monthly: 'Custom', yearly: 'Custom' },
      description: 'For large organizations',
      features: [
        'Everything in Pro',
        'Dedicated support',
        'Custom integrations',
        'On-premise deployment',
        'Training & onboarding',
        'Custom SLA',
        'Volume discounts'
      ],
      cta: 'Contact Sales',
      popular: false,
      link: '#contact'
    }
  ];

  // ============================================
  // DATA: FAQ
  // ============================================
  const faqs = [
    {
      question: 'What is MicroSandbox?',
      answer: 'MicroSandbox is a secure code execution platform that uses lightweight microVMs to run untrusted code with hardware-level isolation. It combines the speed of containers with the security of traditional VMs.'
    },
    {
      question: 'How is this different from Docker containers?',
      answer: 'Unlike Docker containers that share the host kernel, MicroSandbox uses microVMs with complete kernel isolation. This prevents container escape attacks while maintaining fast startup times under 200ms.'
    },
    {
      question: 'Which programming languages are supported?',
      answer: 'We provide SDKs for Python, JavaScript, Rust, Go, Java, C++, and 25+ other languages. You can use any OCI-compatible container image as your execution environment.'
    },
    {
      question: 'Can I use this in production?',
      answer: 'Absolutely! MicroSandbox is production-ready and used by companies to safely execute AI-generated code, user submissions, and automation scripts. We provide enterprise support and SLAs.'
    },
    {
      question: 'How does pricing work?',
      answer: 'The core platform is open source and free to self-host. We offer Pro and Enterprise plans with additional features like priority support, advanced monitoring, and custom integrations.'
    },
    {
      question: 'What about performance?',
      answer: 'MicroVMs start in under 200ms with minimal overhead. You can run thousands of concurrent sandboxes on a single host with resource isolation and limits.'
    }
  ];

  // ============================================
  // DATA: BLOG POSTS (Resources)
  // ============================================
  const blogPosts = [
    {
      title: 'Why MicroVMs are the Future of Secure Code Execution',
      excerpt: 'Exploring the security benefits of hardware-level isolation vs containers.',
      date: '2025-09-15',
      category: 'Security',
      readTime: '5 min read',
      image: '📖'
    },
    {
      title: 'Building AI Agents with MicroSandbox',
      excerpt: 'A complete guide to integrating MicroSandbox with Claude and other AI tools.',
      date: '2025-09-10',
      category: 'Tutorial',
      readTime: '8 min read',
      image: '🤖'
    },
    {
      title: 'Performance Benchmarks: MicroVMs vs Containers vs VMs',
      excerpt: 'Comprehensive performance comparison with real-world benchmarks.',
      date: '2025-09-05',
      category: 'Technical',
      readTime: '10 min read',
      image: '⚡'
    }
  ];

  // ============================================
  // DATA: PARTNER LOGOS
  // ============================================
  const partners = [
    { name: 'GitHub', logo: '🐙' },
    { name: 'Docker', logo: '🐳' },
    { name: 'Anthropic', logo: '🧠' },
    { name: 'OpenAI', logo: '🤖' },
    { name: 'AWS', logo: '☁️' },
    { name: 'Google Cloud', logo: '🌩️' }
  ];

  // ============================================
  // FORM HANDLERS
  // ============================================
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // TODO: Add your newsletter signup logic here
    console.log('Newsletter signup:', email);
    alert(`Thanks for subscribing! Email: ${email}`);
    setEmail('');
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // TODO: Add your contact form logic here
    console.log('Contact form:', contactForm);
    alert(`Thanks for reaching out, ${contactForm.name}! We'll get back to you soon.`);
    setContactForm({ name: '', email: '', message: '' });
  };

  const handleAnalyticsEvent = (eventName, data) => {
    // TODO: Add your analytics tracking here (Google Analytics, Mixpanel, etc.)
    console.log('Analytics event:', eventName, data);
  };

  // ============================================
  // RENDER
  // ============================================
  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">

        {/* ============================================
            STICKY NAVIGATION BAR
            ============================================ */}
        <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  MicroSandbox
                </span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <button onClick={() => scrollToSection('features')} className="hover:text-purple-600 dark:hover:text-purple-400 transition">
                  {t.nav.features}
                </button>
                <button onClick={() => scrollToSection('demo')} className="hover:text-purple-600 dark:hover:text-purple-400 transition">
                  {t.nav.demo}
                </button>
                <button onClick={() => scrollToSection('pricing')} className="hover:text-purple-600 dark:hover:text-purple-400 transition">
                  {t.nav.pricing}
                </button>
                <a href="https://docs.microsandbox.dev" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 dark:hover:text-purple-400 transition">
                  {t.nav.docs}
                </a>
                <button onClick={() => scrollToSection('blog')} className="hover:text-purple-600 dark:hover:text-purple-400 transition">
                  {t.nav.blog}
                </button>
              </div>

              {/* Right Side: Language, Dark Mode, CTA */}
              <div className="hidden md:flex items-center space-x-4">
                {/* Language Selector */}
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="en">🇺🇸 EN</option>
                  <option value="es">🇪🇸 ES</option>
                </select>

                {/* Dark Mode Toggle */}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>

                {/* CTA Button */}
                <button
                  onClick={() => {
                    scrollToSection('pricing');
                    handleAnalyticsEvent('cta_click', { location: 'nav' });
                  }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Get Started
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center space-x-2">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                  aria-label="Toggle mobile menu"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 animate-fade-in">
              <div className="px-4 py-4 space-y-3">
                <button onClick={() => scrollToSection('features')} className="block w-full text-left py-2 hover:text-purple-600 dark:hover:text-purple-400 transition">
                  {t.nav.features}
                </button>
                <button onClick={() => scrollToSection('demo')} className="block w-full text-left py-2 hover:text-purple-600 dark:hover:text-purple-400 transition">
                  {t.nav.demo}
                </button>
                <button onClick={() => scrollToSection('pricing')} className="block w-full text-left py-2 hover:text-purple-600 dark:hover:text-purple-400 transition">
                  {t.nav.pricing}
                </button>
                <a href="https://docs.microsandbox.dev" target="_blank" rel="noopener noreferrer" className="block w-full text-left py-2 hover:text-purple-600 dark:hover:text-purple-400 transition">
                  {t.nav.docs}
                </a>
                <button onClick={() => scrollToSection('blog')} className="block w-full text-left py-2 hover:text-purple-600 dark:hover:text-purple-400 transition">
                  {t.nav.blog}
                </button>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="en">🇺🇸 English</option>
                  <option value="es">🇪🇸 Español</option>
                </select>
                <button
                  onClick={() => {
                    scrollToSection('pricing');
                    handleAnalyticsEvent('cta_click', { location: 'mobile_nav' });
                  }}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition"
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* ============================================
            HERO SECTION
            ============================================ */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900 -z-10"></div>

          {/* Animated Background Circles */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

          <div className="max-w-7xl mx-auto relative">
            <div className="text-center animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 px-4 py-2 rounded-full mb-8">
                <Star className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="text-sm font-semibold text-purple-900 dark:text-purple-200">
                  Open Source • Trusted by 1000+ Developers
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent leading-tight">
                {t.hero.headline}
              </h1>

              {/* Subheading */}
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                {t.hero.subheading}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <button
                  onClick={() => {
                    window.open('https://github.com/microsandbox/microsandbox', '_blank');
                    handleAnalyticsEvent('cta_click', { location: 'hero', action: 'get_started' });
                  }}
                  className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>{t.hero.ctaPrimary}</span>
                  <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => {
                    window.open('https://docs.microsandbox.dev', '_blank');
                    handleAnalyticsEvent('cta_click', { location: 'hero', action: 'view_docs' });
                  }}
                  className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  {t.hero.ctaSecondary}
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { value: '< 200ms', label: 'Boot Time' },
                  { value: '25+', label: 'SDK Languages' },
                  { value: '100%', label: 'Open Source' },
                  { value: '1000+', label: 'GitHub Stars' }
                ].map((stat, index) => (
                  <div key={index} className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            PARTNER LOGOS
            ============================================ */}
        <section className="py-12 px-4 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-gray-500 dark:text-gray-400 mb-8 text-sm uppercase tracking-wider">
              Trusted by teams at
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {partners.map((partner, index) => (
                <div key={index} className="flex items-center space-x-2 text-2xl grayscale hover:grayscale-0 transition-all duration-300">
                  <span>{partner.logo}</span>
                  <span className="text-gray-600 dark:text-gray-400 font-semibold text-sm">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            FEATURES SECTION
            ============================================ */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Everything you need to execute untrusted code safely and efficiently
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            USE CASES SECTION
            ============================================ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Perfect For Any Use Case
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                From AI agents to data analysis, MicroSandbox adapts to your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-5xl">{useCase.icon}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-bold">{useCase.title}</h3>
                        <span className="bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-xs px-3 py-1 rounded-full font-semibold">
                          {useCase.stats}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            DEMO / SCREENSHOT SECTION
            ============================================ */}
        <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                See It In Action
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Watch how easy it is to execute code securely with MicroSandbox
              </p>
            </div>

            {/* Video/Demo Placeholder */}
            <div className="max-w-5xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
                  {/* Video Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <button className="group/play bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-8 transition-all duration-300 hover:scale-110">
                      <Play className="w-16 h-16 text-white group-hover/play:scale-110 transition-transform" />
                    </button>
                  </div>

                  {/* Code Example Overlay */}
                  <div className="p-6 bg-gray-950/50 backdrop-blur-sm">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-gray-400 text-sm ml-4">example.py</span>
                    </div>
                    <pre className="text-sm text-gray-300 overflow-x-auto">
                      <code>{`import asyncio
from microsandbox import PythonSandbox

async def main():
    async with PythonSandbox.create(name="demo") as sb:
        exec = await sb.run("print('Hello from MicroSandbox!')")
        print(await exec.output())

asyncio.run(main())`}</code>
                    </pre>
                  </div>
                </div>
              </div>

              {/* Feature Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {[
                  { icon: '⚡', title: 'Lightning Fast', desc: 'Sub-200ms startup time' },
                  { icon: '🔒', title: 'Fully Isolated', desc: 'Hardware-level security' },
                  { icon: '🎯', title: 'Simple API', desc: 'Just a few lines of code' }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            TESTIMONIALS SECTION
            ============================================ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Loved by Developers
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                See what our users are saying about MicroSandbox
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                >
                  {/* Stars */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-3">
                    <div className="text-4xl">{testimonial.avatar}</div>
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            PRICING SECTION
            ============================================ */}
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                Choose the plan that's right for your team
              </p>

              {/* Monthly/Yearly Toggle */}
              <div className="inline-flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-1">
                <button
                  onClick={() => setIsYearly(false)}
                  className={`px-6 py-2 rounded-full font-semibold transition ${!isYearly ? 'bg-white dark:bg-gray-700 shadow' : 'text-gray-600 dark:text-gray-400'}`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={`px-6 py-2 rounded-full font-semibold transition ${isYearly ? 'bg-white dark:bg-gray-700 shadow' : 'text-gray-600 dark:text-gray-400'}`}
                >
                  Yearly <span className="text-green-600 text-xs ml-1">(Save 20%)</span>
                </button>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                    plan.popular
                      ? 'border-purple-500 dark:border-purple-400 shadow-xl'
                      : 'border-gray-200 dark:border-gray-700'
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-6">
                    {typeof plan.price[isYearly ? 'yearly' : 'monthly'] === 'number' ? (
                      <>
                        <span className="text-5xl font-bold">
                          ${isYearly ? plan.price.yearly : plan.price.monthly}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400 ml-2">
                          /{isYearly ? 'year' : 'month'}
                        </span>
                      </>
                    ) : (
                      <span className="text-5xl font-bold">{plan.price.monthly}</span>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => {
                      if (plan.link.startsWith('http')) {
                        window.open(plan.link, '_blank');
                      } else {
                        scrollToSection('contact');
                      }
                      handleAnalyticsEvent('pricing_cta', { plan: plan.name });
                    }}
                    className={`w-full py-3 rounded-xl font-bold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg transform hover:scale-105'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>

            {/* Enterprise Note */}
            <div className="text-center mt-12">
              <p className="text-gray-600 dark:text-gray-400">
                Need a custom solution? <button onClick={() => scrollToSection('contact')} className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">Contact us</button> for enterprise pricing.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================
            CASE STUDY / SUCCESS STORY
            ============================================ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div>
                  <div className="inline-block bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    Case Study
                  </div>
                  <h3 className="text-3xl font-bold mb-4">
                    How AI Startup Scaled to 10M+ Code Executions
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Learn how a leading AI company used MicroSandbox to safely execute millions of AI-generated code snippets per day while maintaining sub-second response times.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      '99.9% uptime with zero security incidents',
                      '3x faster than their previous container solution',
                      '$50K saved in infrastructure costs annually'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="text-purple-600 dark:text-purple-400 font-semibold hover:underline flex items-center space-x-2">
                    <span>Read Full Story</span>
                    <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                  </button>
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 rounded-2xl p-12 text-center">
                    <div className="text-6xl mb-4">📈</div>
                    <div className="text-4xl font-bold mb-2">10M+</div>
                    <div className="text-gray-600 dark:text-gray-400">Daily Executions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            FAQ SECTION
            ============================================ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Everything you need to know about MicroSandbox
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex justify-between items-center p-6 text-left"
                  >
                    <span className="font-bold text-lg pr-8">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-6 h-6 text-purple-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            BLOG / RESOURCES SECTION
            ============================================ */}
        <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Latest from Our Blog
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Insights, tutorials, and updates from the MicroSandbox team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                    {post.image}
                  </div>

                  <div className="p-6">
                    {/* Category & Read Time */}
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Date & Read More */}
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <button className="text-purple-600 dark:text-purple-400 font-semibold text-sm hover:underline flex items-center space-x-1">
                        <span>Read More</span>
                        <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* View All Button */}
            <div className="text-center mt-12">
              <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 px-8 py-3 rounded-xl font-bold hover:shadow-lg transition">
                View All Articles
              </button>
            </div>
          </div>
        </section>

        {/* ============================================
            NEWSLETTER SECTION
            ============================================ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Get the latest updates, tutorials, and tips delivered to your inbox
            </p>

            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 rounded-xl focus:outline-none focus:ring-4 focus:ring-white/50 text-gray-900"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  onClick={() => handleAnalyticsEvent('newsletter_signup', { email })}
                >
                  Subscribe
                </button>
              </div>
              <p className="text-purple-100 text-sm mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </section>

        {/* ============================================
            CONTACT FORM SECTION
            ============================================ */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Have questions? We'd love to hear from you.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  onClick={() => handleAnalyticsEvent('contact_form_submit', contactForm)}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* ============================================
            FOOTER
            ============================================ */}
        <footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">MicroSandbox</span>
                </div>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Easy secure execution of untrusted user/AI code. Built with ❤️ by developers, for developers.
                </p>
                <div className="flex space-x-4">
                  <a href="https://github.com/microsandbox/microsandbox" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" aria-label="GitHub">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" aria-label="Twitter">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="https://discord.gg/T95Y3XnEAK" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" aria-label="Discord">
                    <MessageCircle className="w-6 h-6" />
                  </a>
                  <a href="mailto:contact@microsandbox.dev" className="text-gray-400 hover:text-white transition" aria-label="Email">
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Product Links */}
              <div>
                <h4 className="font-bold text-white mb-4">Product</h4>
                <ul className="space-y-2">
                  <li><button onClick={() => scrollToSection('features')} className="hover:text-white transition">Features</button></li>
                  <li><button onClick={() => scrollToSection('pricing')} className="hover:text-white transition">Pricing</button></li>
                  <li><a href="https://docs.microsandbox.dev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Documentation</a></li>
                  <li><a href="https://github.com/microsandbox/microsandbox" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a></li>
                </ul>
              </div>

              {/* Resources Links */}
              <div>
                <h4 className="font-bold text-white mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li><button onClick={() => scrollToSection('blog')} className="hover:text-white transition">Blog</button></li>
                  <li><a href="#" className="hover:text-white transition">Tutorials</a></li>
                  <li><a href="#" className="hover:text-white transition">Case Studies</a></li>
                  <li><a href="https://discord.gg/T95Y3XnEAK" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Community</a></li>
                </ul>
              </div>

              {/* Company Links */}
              <div>
                <h4 className="font-bold text-white mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white transition">About</a></li>
                  <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition">Contact</button></li>
                  <li><a href="#" className="hover:text-white transition">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                © 2025 MicroSandbox. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition">Privacy</a>
                <a href="#" className="text-gray-400 hover:text-white transition">Terms</a>
                <a href="#" className="text-gray-400 hover:text-white transition">Security</a>
              </div>
            </div>
          </div>
        </footer>

        {/* ============================================
            STICKY CTA BUTTON (Mobile)
            ============================================ */}
        <div className="md:hidden fixed bottom-4 left-4 right-4 z-40 animate-fade-in">
          <button
            onClick={() => {
              scrollToSection('pricing');
              handleAnalyticsEvent('cta_click', { location: 'sticky_mobile' });
            }}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <Zap className="w-5 h-5" />
            <span>Get Started Free</span>
          </button>
        </div>

        {/* ============================================
            BACK TO TOP BUTTON
            ============================================ */}
        {showBackToTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-20 md:bottom-8 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-200 z-40 animate-fade-in"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        )}

        {/* ============================================
            CHAT WIDGET PLACEHOLDER
            ============================================ */}
        <button
          className="fixed bottom-20 md:bottom-8 right-20 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-200 z-40 border border-gray-200 dark:border-gray-700"
          aria-label="Chat with us"
          onClick={() => alert('Chat widget integration placeholder - Add your live chat service here (Intercom, Drift, etc.)')}
        >
          <MessageCircle className="w-6 h-6" />
        </button>

        {/* ============================================
            PROMO COUNTDOWN TIMER (Optional)
            ============================================ */}
        {/* Uncomment to enable countdown timer */}
        {/* <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full shadow-xl z-50 animate-fade-in">
          <div className="flex items-center space-x-3">
            <span className="font-bold">🔥 Limited Offer:</span>
            <span>50% OFF - Ends in 23:59:59</span>
          </div>
        </div> */}
      </div>

      {/* ============================================
          CUSTOM ANIMATIONS & STYLES
          ============================================ */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default MicroSandboxLandingPage;
