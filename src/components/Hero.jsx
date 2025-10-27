import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight, Shield, Bot } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft radial gradient to help text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0)_0%,rgba(2,6,23,0.35)_45%,rgba(2,6,23,0.85)_100%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-20 pb-28 text-center sm:pt-28">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <Shield className="h-3.5 w-3.5 text-emerald-300" />
          Trusted AI Automation for SMEs
        </div>

        <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Save time and money with your
          <span className="bg-gradient-to-r from-fuchsia-400 via-sky-300 to-amber-300 bg-clip-text text-transparent"> AI automation partner</span>
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          Launch voice and chat agents, automate workflows, and turn manual processes into always-on, cost‑effective systems.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a href="#get-started" className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-slate-900 shadow/30 shadow-white/10 transition hover:shadow-xl">
            <Rocket className="h-5 w-5" />
            Start free consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="#features" className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/15">
            <Bot className="h-5 w-5 text-violet-300" />
            Explore capabilities
          </a>
        </div>

        <div className="mt-10 grid w-full max-w-2xl grid-cols-2 gap-4 text-left text-sm text-white/70 sm:grid-cols-4">
          {[
            { kpi: '85% faster', note: 'response handling' },
            { kpi: '60% lower', note: 'ops costs' },
            { kpi: '24/7', note: 'coverage' },
            { kpi: 'Minutes', note: 'to deploy' },
          ].map((item) => (
            <div key={item.note} className="rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="text-sm font-semibold text-white">{item.kpi}</div>
              <div className="text-xs text-white/60">{item.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
