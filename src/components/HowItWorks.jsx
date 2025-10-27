import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: 'Discover',
    desc: 'We map your processes and identify high‑ROI automation opportunities.',
  },
  {
    title: 'Design',
    desc: 'We configure voice/chat agents and workflow logic tailored to your tools.',
  },
  {
    title: 'Deploy',
    desc: 'Launch in days, not months — with measurable outcomes from day one.',
  },
  {
    title: 'Optimize',
    desc: 'Continuous improvements using real‑time analytics and human feedback.',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">How it works</h2>
          <p className="mt-3 text-white/70">A simple path from idea to impact. We do the heavy lifting so you can move faster.</p>
        </div>

        <ol className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 font-semibold">{i + 1}</div>
                <span className="text-lg font-semibold">{s.title}</span>
              </div>
              <p className="text-sm text-white/70">{s.desc}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-emerald-300">
                <CheckCircle2 className="h-4 w-4" />
                <span className="text-xs">Guided onboarding included</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
