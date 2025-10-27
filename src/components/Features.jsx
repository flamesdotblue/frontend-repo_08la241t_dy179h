import React from 'react';
import { Clock, PiggyBank, Shield, BarChart3 } from 'lucide-react';

const features = [
  {
    title: 'Reduce manual work',
    desc: 'Automate routine tasks like scheduling, intake, routing, and follow‑ups so your team can focus on growth.',
    icon: Clock,
    color: 'from-sky-400/20 to-sky-500/10',
  },
  {
    title: 'Cut operating costs',
    desc: 'Scale support and operations without adding headcount. Pay for outcomes, not hours.',
    icon: PiggyBank,
    color: 'from-emerald-400/20 to-emerald-500/10',
  },
  {
    title: 'Enterprise‑grade security',
    desc: 'SOC2-ready practices, data encryption, and role-based access out of the box.',
    icon: Shield,
    color: 'from-fuchsia-400/20 to-fuchsia-500/10',
  },
  {
    title: 'Actionable analytics',
    desc: 'Track savings, resolution rates, and customer satisfaction in real time.',
    icon: BarChart3,
    color: 'from-amber-400/20 to-amber-500/10',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative -mt-10 bg-slate-900/60 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Built for small and mid-sized teams</h2>
          <p className="mt-3 text-white/70">Everything you need to launch reliable AI automations that save time and money from day one.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, desc, icon: Icon, color }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/10">
              <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${color} p-3` }>
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
