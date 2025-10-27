import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <footer className="border-t border-white/10 bg-slate-950/80 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Flames Blue — AI Automation for SMEs
      </footer>
    </div>
  );
}
