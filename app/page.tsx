'use client';

async function sendViaFormSubmit(payload: Record<string, any>) {
  // Sends submissions to your Zoho email
  const endpoint = "https://formsubmit.co/ajax/jimmy@peakscreens.com";

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      _subject: payload.subject ?? "New message from peakscreens.com",
      _template: "table",
      _captcha: "false",
      ...payload,
    }),
  });

  // FormSubmit returns 200 with JSON {success:"..." } when OK
  return res.ok;
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Logo({ className = '', size = 28, word = true }: { className?: string; size?: number; word?: boolean }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-emerald-600">
        <path d="M3.5 16.5l5.5-9 3.5 6 3-4.5L21 19H4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      {word && <span className="font-extrabold tracking-tight">Peak<span className="text-emerald-700">Screens</span></span>}
    </div>
  );
}

function FeatureCard({ title, desc, icon }: { title: string; desc: string; icon: string }) {
  return (
    <div className="rounded-2xl p-6 shadow-sm bg-white/70 backdrop-blur border border-white/40">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-slate-600 mt-2 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold tracking-tight">{value}</div>
      <div className="text-slate-600 text-sm">{label}</div>
    </div>
  );
}

function Package({ name, price, bullets, highlight }: { name: string; price: string; bullets: string[]; highlight?: boolean }) {
  return (
    <div className={`rounded-2xl p-6 border ${highlight ? 'border-emerald-500 shadow-lg' : 'border-slate-200 shadow-sm'} bg-white`}>
      <h4 className="text-xl font-semibold">{name}</h4>
      <div className="mt-2 text-3xl font-bold">{price}</div>
      <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc pl-5">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
      <button onClick={() => scrollToId('ratecard')} className={`mt-6 w-full py-2.5 rounded-xl font-medium ${highlight ? 'bg-emerald-600 text-white' : 'bg-slate-900 text-white'}`}>Request rate card</button>
    </div>
  );
}

export default function Page() {
  return (
    <div>
      {/* NAV */}
      <header className="sticky top-0 z-30 bg-white/70 backdrop-blur border-b border-white/60">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-6">
          <Logo className="font-bold text-lg" />
          <nav className="ml-auto hidden md:flex items-center gap-6 text-sm">
            {/* Removed 'book' from the nav list */}
            {['advertisers','venues','network','specs','submit','faq','ratecard','pricing','contact'].map(id => (
              <button key={id} onClick={() => scrollToId(id)} className="hover:text-emerald-700 capitalize">{id.replace('-',' ')}</button>
            ))}
            {/* Book a demo now scrolls to contact instead of mailto */}
            <button onClick={() => scrollToId('contact')} className="ml-2 px-3 py-1.5 rounded-xl bg-emerald-600 text-white">Book a demo</button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-70" aria-hidden="true">
          <div className="absolute -top-20 -right-24 h-80 w-80 rounded-full bg-emerald-200 blur-3xl"/>
          <div className="absolute -bottom-10 -left-24 h-80 w-80 rounded-full bg-sky-200 blur-3xl"/>
        </div>
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Summit County&apos;s Mountain-Side <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-700 via-emerald-500 to-sky-600">Digital Ad Network</span>
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Get your brand in front of skiers, riders, and après crowds across Breckenridge, Keystone, Copper, A-Basin, and beyond—on bar TVs, gondolas, and hotel lobbies.
            </p>
            <div className="mt-6 flex gap-3">
              {/* Hero CTA now scrolls to contact instead of mailto */}
              <button onClick={() => scrollToId('contact')} className="px-5 py-3 rounded-xl bg-slate-900 text-white font-medium">Book a demo</button>
              <button onClick={() => scrollToId('pricing')} className="px-5 py-3 rounded-xl bg-white border border-slate-200 font-medium">See pricing</button>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <Stat value="120+" label="Active screens" />
              <Stat value="45+" label="Partner venues" />
              <Stat value="1.8M+" label="Monthly impressions" />
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <img src="https://picsum.photos/seed/apres/540/360" alt="Après-ski bar with TV screens" className="rounded-xl shadow-2xl object-cover h-48 w/full md:h-64"/>
              <div className="grid gap-3">
                <img src="https://picsum.photos/seed/gondola/540/360" alt="Gondola line signage screens" className="rounded-xl shadow-xl object-cover h-24 w-full md:h-32"/>
                <img src="https://picsum.photos/seed/lobby/540/360" alt="Hotel lobby screens" className="rounded-xl shadow-xl object-cover h-24 w-full md:h-32"/>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-3">Lifestyle imagery — representative of placements.</p>
          </div>
        </div>
      </section>

      {/* ADVERTISERS */}
      <section id="advertisers" className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">For Advertisers</h2>
            <p className="mt-3 text-slate-700">Own the mountain moment. Target by resort, venue type, and time of day. Flexible packages from local launches to seasonal brand takeovers.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <FeatureCard icon="🎯" title=":15 & :30 Spots" desc="High-impact placements optimized for dwell time, with frequency capping across a venue network."/>
              <FeatureCard icon="🕒" title="Dayparting" desc="Reach breakfast crowds, après, or late-night with time-based scheduling."/>
              <FeatureCard icon="📍" title="Geo Targeting" desc="Select specific resorts or neighborhoods across Summit County."/>
              <FeatureCard icon="📈" title="Reporting" desc="Shareable dashboards with play verification and impression estimates."/>
            </div>
          </div>
          <div className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm">
            <h3 className="font-semibold text-lg">Sample Weekly Flight</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc pl-5">
              <li>5 venues in Breck + 3 in Keystone</li>
              <li>12 hours/day during lift operations</li>
              <li>Spot length: 15s · Share of voice: 12%</li>
              <li>Estimated Impressions: 96,000/week</li>
            </ul>
            <button onClick={() => (location.href='mailto:jimmy@peakscreens.com?subject=PeakScreens%20Creative%20Specs%20Request')} className="mt-6 px-4 py-2 rounded-xl bg-emerald-600 text-white font-medium">Get creative specs</button>
          </div>
        </div>
      </section>

      {/* VENUES */}
      <section id="venues" className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm order-2 md:order-1">
            <h3 className="font-semibold text-lg">What you get</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc pl-5">
              <li>Pro screens & mounts — installed and maintained</li>
              <li>Hands-off programming with venue promos built-in</li>
              <li>Revenue share on paid ad slots</li>
              <li>Emergency & event messaging when you need it</li>
            </ul>
            <button onClick={() => (location.href='mailto:jimmy@peakscreens.com?subject=Host%20PeakScreens%20at%20my%20venue')} className="mt-6 px-4 py-2 rounded-xl bg-slate-900 text-white font-medium">Host screens at my venue</button>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-bold">For Venues</h2>
            <p className="mt-3 text-slate-700">Enhance the vibe and unlock a new revenue stream. We provide hardware, installation, and full content management.</p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              <FeatureCard icon="🍻" title="Après Bars" desc="Dynamic highlights, local promos, and events."/>
              <FeatureCard icon="🚡" title="Gondola Lines" desc="Queue entertainment and sponsor messages."/>
              <FeatureCard icon="🏨" title="
