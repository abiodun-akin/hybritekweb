import {
  ChevronDown,
  Globe,
  Menu,
  MessageSquare,
  ShieldCheck,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
import farmconnectAnalytics from "./FarmConnect/farmconnect-analytics.png";
import farmconnectDashboard from "./FarmConnect/farmconnect-dashboard.png";
import farmconnectLanding from "./FarmConnect/farmconnect-landing.png";
import farmconnectMarketplace from "./FarmConnect/farmconnect-marketplace.png";
import logo from "./FarmConnect/logo.png";

const HybritekWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-100">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Hybritek / FarmConnect logo"
              className="w-10 h-10 rounded-md object-cover"
            />
            <span className="text-xl font-bold tracking-tight text-slate-800">
              HYBRITEK{" "}
              <span className="text-emerald-600 font-medium">CONSULT</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10 text-sm font-medium">
            <a href="#about" className="hover:text-emerald-600 transition">
              About
            </a>

            {/* Projects Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsProjectsOpen(true)}
                onMouseLeave={() => setIsProjectsOpen(false)}
                className="flex items-center space-x-1 hover:text-emerald-600 transition py-8"
              >
                <span>Projects</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isProjectsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isProjectsOpen && (
                <div
                  onMouseEnter={() => setIsProjectsOpen(true)}
                  onMouseLeave={() => setIsProjectsOpen(false)}
                  className="absolute top-20 left-0 w-64 bg-white border border-slate-100 shadow-2xl rounded-xl p-2 animate-in fade-in slide-in-from-top-2"
                >
                  <a
                    href="#farmconnect"
                    className="group block p-4 hover:bg-emerald-50 rounded-lg transition"
                  >
                    <p className="text-emerald-700 font-bold mb-1">
                      FarmConnect
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      The operating layer for local agricultural trade.
                    </p>
                  </a>
                </div>
              )}
            </div>

            <a href="#services" className="hover:text-emerald-600 transition">
              Services
            </a>
            <a href="#products" className="hover:text-emerald-600 transition">
              Products
            </a>
            <a
              href="#contact"
              className="bg-emerald-600 text-white px-6 py-2.5 rounded-full hover:bg-emerald-700 transition shadow-lg shadow-emerald-200"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-bold mb-8 uppercase tracking-widest">
              <Zap className="w-3 h-3" />
              <span>Digital Trust Infrastructure</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-[1.1]">
              Building the <span className="text-emerald-600">Trust Layer</span>{" "}
              for African Industry.
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-10">
              Hybritek Consult engineers digital platforms that transform
              fragmented market interactions into structured, trusted, and
              recurring business relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#farmconnect"
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition"
              >
                View Flagship Project
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition"
              >
                Start a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Hybritek Consult builds digital trust infrastructure and marketplace
            operating layers that reduce friction and enable resilient,
            recurring business relationships across African industries. We
            partner with governments, NGOs and private sector organisations to
            design, build and govern ecosystem platforms.
          </p>
        </div>
      </section>

      {/* Flagship Project: FarmConnect */}
      <section id="farmconnect" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                <div className="flex items-center space-x-3 mb-6">
                  <img
                    src={logo}
                    alt="FarmConnect logo"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <h3 className="text-2xl font-bold text-slate-800">
                    FarmConnect
                  </h3>
                </div>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  A multi-sided agri-commerce platform connecting farmers,
                  vendors, and service providers. Positioned as an ecosystem
                  "operating layer," it reduces friction through integrated
                  discovery and verification.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Globe className="w-5 h-5" />,
                      text: "Targeted discovery and matching",
                    },
                    {
                      icon: <MessageSquare className="w-5 h-5" />,
                      text: "In-platform messaging for deal cycles",
                    },
                    {
                      icon: <ShieldCheck className="w-5 h-5" />,
                      text: "Profile verification trust-layer",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-3 text-sm font-medium text-slate-700"
                    >
                      <span className="text-emerald-500">{item.icon}</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10 pt-8 border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                    Current Status
                  </p>
                  <p className="text-sm font-medium text-slate-700">
                    Pre-beta incubation: Ready for controlled scaling with the
                    UNDP timbuktoo programme.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6">
                Proof of Concept: Market Access Engineering
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-8">
                FarmConnect addresses the full relationship lifecycle—from
                identity onboarding to subscription-ready payment flows. It is
                built on a modular architecture to support regional scale and
                ecosystem resilience.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={farmconnectLanding}
                  alt="FarmConnect landing"
                  className="w-full rounded-2xl border border-slate-100 object-cover"
                />
                <img
                  src={farmconnectDashboard}
                  alt="FarmConnect dashboard"
                  className="w-full rounded-2xl border border-slate-100 object-cover"
                />
                <img
                  src={farmconnectAnalytics}
                  alt="FarmConnect analytics"
                  className="w-full rounded-2xl border border-slate-100 object-cover"
                />
                <img
                  src={farmconnectMarketplace}
                  alt="FarmConnect marketplace"
                  className="w-full rounded-2xl border border-slate-100 object-cover"
                />
              </div>
              <div className="mt-6">
                <p className="text-sm font-bold text-slate-700 mb-2">
                  Documentation & Writeups
                </p>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>
                    <a
                      href="./FarmConnect/07_STRONG_PRODUCT_REPRESENTATION.md"
                      className="text-emerald-600 hover:underline"
                    >
                      Product writeup — Strong Product Representation
                    </a>
                  </li>
                  <li>
                    <a
                      href="./FarmConnect/08_DEMO_REVIEW_AND_BETA_GUIDANCE.md"
                      className="text-emerald-600 hover:underline"
                    >
                      Demo review & beta guidance
                    </a>
                  </li>
                  <li>
                    <a
                      href="./FarmConnect/09_ONE_PAGE_SUBMISSION_MEMO.md"
                      className="text-emerald-600 hover:underline"
                    >
                      One-page submission memo
                    </a>
                  </li>
                  <li>
                    <a
                      href="./FarmConnect/03_IMPACT_AND_MEL_FRAMEWORK.md"
                      className="text-emerald-600 hover:underline"
                    >
                      Impact & MEL framework
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Core Service Pillars</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Specialized digital infrastructure solutions for emerging
              agricultural value chains.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AgriTech Strategy",
                desc: "Designing ecosystem platforms that turn fragmented interactions into recurring business relationships.",
                icon: <Zap className="w-6 h-6" />,
              },
              {
                title: "Full-Stack Development",
                desc: "Modular architecture using React, Node.js, and event-driven components for regional scalability.",
                icon: <Globe className="w-6 h-6" />,
              },
              {
                title: "Ecosystem Governance",
                desc: "Implementing moderation and trust layers to ensure safety and compliance in digital marketplaces.",
                icon: <ShieldCheck className="w-6 h-6" />,
              },
            ].map((service, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl border border-slate-100 hover:border-emerald-100 hover:bg-emerald-50/50 transition group"
              >
                <div className="w-12 h-12 bg-slate-50 text-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-6 bg-slate-900 text-white overflow-hidden relative"
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Start a Consultation
          </h2>
          <p className="text-emerald-200/60 mb-12 text-lg">
            Ready to build your digital trust infrastructure? Let's discuss your
            ecosystem governance needs.
          </p>
          <form className="grid md:grid-cols-2 gap-6 text-left">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Full Name
              </label>
              <input
                type="text"
                className="w-full bg-slate-800 border-none rounded-xl p-4 focus:ring-2 focus:ring-emerald-500 transition"
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Business Email
              </label>
              <input
                type="email"
                className="w-full bg-slate-800 border-none rounded-xl p-4 focus:ring-2 focus:ring-emerald-500 transition"
                placeholder="name@company.com"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Project Detail
              </label>
              <textarea
                className="w-full bg-slate-800 border-none rounded-xl p-4 h-32 focus:ring-2 focus:ring-emerald-500 transition"
                placeholder="Tell us about your ecosystem needs..."
              />
            </div>
            <button className="md:col-span-2 bg-emerald-500 py-5 rounded-xl font-bold text-white hover:bg-emerald-400 transition text-lg shadow-xl shadow-emerald-900/20">
              Send Message
            </button>
          </form>
        </div>
        {/* Background Decal */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[120px] -mr-48 -mt-48" />
      </section>
    </div>
  );
};

export default HybritekWebsite;
