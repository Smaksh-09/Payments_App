import React from 'react';
import { ArrowRight, Smartphone, Shield, Clock, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

 export const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
        <h1 className="text-xl font-semibold">PayTM App</h1>
        <div className="space-x-4">
          <button 
            onClick={() => navigate('/signin')}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Login
          </button>
          <button 
            onClick={() => navigate('/signup')}
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Sign Up
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Send Money Instantly, <br />
            <span className="text-blue-600">Anywhere, Anytime</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the future of digital payments. Fast, secure, and seamless transactions at your fingertips.
          </p>
          <button 
            onClick={() => navigate('/signup')}
            className="group px-8 py-4 bg-black text-white rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
          >
            Get Started
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Features */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              Icon={Smartphone}
              title="Easy to Use"
              description="Simple and intuitive interface for hassle-free payments and money transfers"
            />
            <FeatureCard 
              Icon={Shield}
              title="Secure Payments"
              description="Bank-grade security with end-to-end encryption for all your transactions"
            />
            <FeatureCard 
              Icon={Clock}
              title="Instant Transfers"
              description="Send and receive money instantly, 24/7, with real-time notifications"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-black text-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <StatCard number="10M+" label="Active Users" />
              <StatCard number="₹100Cr+" label="Daily Transactions" />
              <StatCard number="99.9%" label="Uptime" />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">PayTM App</h3>
              <p className="text-gray-600">Making payments simple, fast, and secure.</p>
            </div>
            <FooterLinks 
              title="Product"
              links={['Features', 'Security', 'Business', 'Enterprise']}
            />
            <FooterLinks 
              title="Company"
              links={['About Us', 'Careers', 'Blog', 'Press']}
            />
            <FooterLinks 
              title="Resources"
              links={['Help Center', 'Contact', 'Privacy', 'Terms']}
            />
          </div>
          <div className="mt-8 pt-8 border-t text-center text-gray-600">
            <p>© 2024 PayTM App. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Helper Components
const FeatureCard = ({ Icon, title, description }) => (
  <div className="text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 mb-4">
      <Icon className="h-6 w-6 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const StatCard = ({ number, label }) => (
  <div>
    <div className="text-4xl font-bold mb-2">{number}</div>
    <div className="text-gray-300">{label}</div>
  </div>
);

const FooterLinks = ({ title, links }) => (
  <div>
    <h3 className="font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {links.map(link => (
        <li key={link}>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
