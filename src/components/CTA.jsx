import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="get-started" className="relative overflow-hidden bg-slate-950 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15)_0%,rgba(56,189,248,0.12)_40%,rgba(255,186,8,0.08)_70%,rgba(2,6,23,0)_100%)]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h3 className="font-display text-3xl font-semibold sm:text-4xl">Ready to automate your operations?</h3>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          Book a free strategy session. We’ll evaluate your workflows and deliver a tailored automation roadmap.
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            placeholder="Work email"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-0 focus:border-white/20"
          />
          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-slate-900 transition hover:opacity-95">
            Get my roadmap
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <p className="mt-3 text-xs text-white/50">No sales pitch — just actionable insights specific to your business.</p>
      </div>
    </section>
  );
}
