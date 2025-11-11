import React from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight, ShieldCheck, GaugeCircle, Sparkles, Workflow, Rocket, PhoneCall, CheckCircle2 } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <header className="relative h-[90vh] w-full overflow-hidden">
        {/* 3D Cover Background */}
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Overlays for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

        {/* Content */}
        <nav className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg" />
            <span className="text-lg font-semibold tracking-tight">AutomaDrive</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#solutions" className="hover:text-white transition">Solutions</a>
            <a href="#use-cases" className="hover:text-white transition">Use cases</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a href="#demo" className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 transition text-sm">Get a demo</a>
            <a href="#start" className="px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition text-sm font-medium inline-flex items-center gap-2">
              Start now <ArrowRight size={16} />
            </a>
          </div>
        </nav>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10 md:pt-16 lg:pt-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs backdrop-blur">
              <Sparkles size={14} className="text-cyan-300" />
              <span className="text-white/80">Automotive-grade automations</span>
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Automations that move at the speed of your brand
            </h1>
            <p className="mt-4 text-white/80 text-base md:text-lg max-w-2xl">
              We design, build, and run high‑performance automations for automotive and sports brands — from lead routing to post‑sale journeys. Reliable, compliant, and fast.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#demo" className="px-5 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition font-medium inline-flex items-center justify-center gap-2">
                Book a live demo <Rocket size={18} />
              </a>
              <a href="#use-cases" className="px-5 py-3 rounded-md bg-white/10 hover:bg-white/20 transition font-medium inline-flex items-center justify-center gap-2">
                Explore use cases <ArrowRight size={18} />
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-xs text-white/70">
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-400" /> SOC2-ready processes</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-400" /> 99.9% uptime SLAs</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-400" /> Enterprise onboarding</div>
            </div>
          </div>
        </div>
      </header>

      {/* Logos */}
      <section className="relative py-10 border-y border-white/10 bg-gradient-to-b from-black to-[#05070b]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm text-white/60 mb-6">Trusted by teams in automotive, motorsport, and mobility</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 opacity-80">
            {['Apex Labs','TorqueAI','Driveline','PolePosition','Flux Motors','Ion Fleet'].map((brand) => (
              <div key={brand} className="h-10 rounded-md bg-white/5 flex items-center justify-center text-white/70 text-sm">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="relative py-20 bg-gradient-to-b from-[#05070b] to-[#0a0f17]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold">Your pipeline, fully automated</h2>
            <p className="mt-3 text-white/70">From ad click to closed deal, orchestrate every touchpoint with bulletproof flows built on your stack.</p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard icon={<Workflow className="text-cyan-300" size={22} />} title="Lead routing" desc="Instant scoring, enrichment, and assignment across dealers and territories." />
            <FeatureCard icon={<GaugeCircle className="text-cyan-300" size={22} />} title="Real‑time alerts" desc="Notify reps when hot prospects engage: site, configurator, or showroom." />
            <FeatureCard icon={<ShieldCheck className="text-cyan-300" size={22} />} title="Compliance" desc="Consent capture, audit trails, and regional policies baked in by design." />
            <FeatureCard icon={<PhoneCall className="text-cyan-300" size={22} />} title="Post‑sale journeys" desc="Service reminders, upsell triggers, and ownership lifecycle messaging." />
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section id="use-cases" className="relative py-20 bg-[#0a0f17]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
                <span className="h-2 w-2 rounded-full bg-cyan-400" /> Popular plays
              </div>
              <h3 className="mt-4 text-3xl md:text-4xl font-semibold">High‑impact automations for revenue teams</h3>
              <ul className="mt-6 space-y-3 text-white/80">
                {[
                  'Send qualified leads to the right dealer in under 60 seconds',
                  'Alert SDRs when prospects view pricing or a build configurator',
                  'Sync test‑drive bookings bi‑directionally with your CRM',
                  'Trigger service journeys at mileage or telematics thresholds',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3"><CheckCircle2 className="text-emerald-400 mt-0.5" size={18} /> <span>{item}</span></li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="#demo" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white/10 hover:bg-white/20 transition">
                  See a tailored demo <ArrowRight size={18} />
                </a>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6 shadow-2xl">
              <div className="grid sm:grid-cols-2 gap-4">
                <Stat label="Avg. response time" value="< 60s" trend="+3x faster" />
                <Stat label="Lead conversion" value="+28%" trend="YoY" />
                <Stat label="Ops tickets" value="-41%" trend="after 90 days" />
                <Stat label="Uptime" value="99.9%" trend="SLA" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="start" className="relative py-20 bg-gradient-to-b from-[#0a0f17] to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-bold">Ready to put revenue on autopilot?</h3>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">We’ll audit your funnel, design a roadmap, and ship your first automations in two weeks.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#demo" className="px-6 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition font-medium inline-flex items-center justify-center gap-2">
              Get started <ArrowRight size={18} />
            </a>
            <a href="#pricing" className="px-6 py-3 rounded-md bg-white/10 hover:bg-white/20 transition font-medium">View pricing</a>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-white/10 bg-black/90">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-cyan-400 to-blue-600" />
            <span className="text-sm text-white/70">© {new Date().getFullYear()} AutomaDrive</span>
          </div>
          <div className="text-sm text-white/60 flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Security</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 shadow-lg hover:bg-white/[0.06] transition">
      <div className="h-10 w-10 rounded-md bg-white/10 flex items-center justify-center mb-3">
        {icon}
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="mt-1 text-sm text-white/70">{desc}</p>
    </div>
  )
}

function Stat({ label, value, trend }) {
  return (
    <div className="rounded-lg border border-white/10 bg-black/40 p-5">
      <div className="text-xs uppercase tracking-wide text-white/60">{label}</div>
      <div className="mt-2 text-3xl font-bold">{value}</div>
      <div className="mt-1 text-xs text-white/60">{trend}</div>
    </div>
  )
}

export default App
