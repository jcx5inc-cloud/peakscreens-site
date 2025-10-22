'use client';

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
            {['advertisers','venues','network','specs','submit','faq','ratecard','pricing','book','contact'].map(id => (
              <button key={id} onClick={() => scrollToId(id)} className="hover:text-emerald-700 capitalize">{id.replace('-',' ')}</button>
            ))}
            <button onClick={() => (location.href='mailto:jcx5inc@gmail.com?subject=Book%20a%20PeakScreens%20Demo')} className="ml-2 px-3 py-1.5 rounded-xl bg-emerald-600 text-white">Book a demo</button>
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
              <button onClick={() => (location.href='mailto:jcx5inc@gmail.com?subject=Book%20a%20PeakScreens%20Demo')} className="px-5 py-3 rounded-xl bg-slate-900 text-white font-medium">Book a demo</button>
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
              <img src="https://picsum.photos/seed/apres/540/360" alt="Après-ski bar with TV screens" className="rounded-xl shadow-2xl object-cover h-48 w-full md:h-64"/>
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
            <button onClick={() => (location.href='mailto:jcx5inc@gmail.com?subject=PeakScreens%20Creative%20Specs%20Request')} className="mt-6 px-4 py-2 rounded-xl bg-emerald-600 text-white font-medium">Get creative specs</button>
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
            <button onClick={() => (location.href='mailto:jcx5inc@gmail.com?subject=Host%20PeakScreens%20at%20my%20venue')} className="mt-6 px-4 py-2 rounded-xl bg-slate-900 text-white font-medium">Host screens at my venue</button>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-bold">For Venues</h2>
            <p className="mt-3 text-slate-700">Enhance the vibe and unlock a new revenue stream. We provide hardware, installation, and full content management.</p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              <FeatureCard icon="🍻" title="Après Bars" desc="Dynamic highlights, local promos, and events."/>
              <FeatureCard icon="🚡" title="Gondola Lines" desc="Queue entertainment and sponsor messages."/>
              <FeatureCard icon="🏨" title="Hotel Lobbies" desc="Wayfinding, weather, and partner ads."/>
            </div>
          </div>
        </div>
      </section>

      {/* NETWORK */}
      <section id="network" className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold">Coverage & Placements</h2>
        <p className="mt-3 text-slate-700">Live across Summit County — growing weekly. Ask about specific venues and exclusives.</p>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {["Breckenridge", "Keystone", "Copper Mountain", "Arapahoe Basin", "Dillon", "Frisco"].map((place) => (
            <div key={place} className="rounded-2xl p-5 border bg-white border-slate-200 shadow-sm flex items-center justify-between">
              <span className="font-medium">{place}</span>
              <span className="text-xs text-slate-500">Bars · Gondolas · Hotels</span>
            </div>
          ))}
        </div>
      </section>

      {/* SPECS */}
      <section id="specs" className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold">Creative Specs</h2>
        <p className="mt-3 text-slate-700">We support industry-standard digital signage formats. Keep it bold, legible, and silent-friendly.</p>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm">
            <h3 className="font-semibold text-lg">Video</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc pl-5">
              <li>Resolution: 1920×1080 (1080p) or 3840×2160 (4K)</li>
              <li>Duration: 15s or 30s (recommend 15s)</li>
              <li>Format: MP4 (H.264), 24–30 fps</li>
              <li>Audio: Off by default — add subtitles or bold CTAs</li>
            </ul>
          </div>
          <div className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm">
            <h3 className="font-semibold text-lg">Static/Animation</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc pl-5">
              <li>Resolution: 1920×1080 (portrait upon request)</li>
              <li>Format: PNG/JPG (RGB) or MP4 for motion</li>
              <li>Safe area: 5% margins</li>
              <li>Text size: minimum 36–48 px for bar distances</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SUBMIT */}
      <section id="submit" className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm">
            <h3 className="font-semibold text-lg">Submit an Ad</h3>
            <form onSubmit={(e) => { e.preventDefault(); const f=e.currentTarget as any; const params=new URLSearchParams({ subject: `Ad submission — ${f.brand.value}`, body: `Brand: ${f.brand.value}\nContact: ${f.contact.value}\nSpot length: ${f.length.value}\nTarget: ${Array.from(f.querySelectorAll('input[name=target]:checked')).map((x: any)=>x.value).join(', ')}\nStart date: ${f.start.value}\nBudget: ${f.budget.value}\nAsset URL: ${f.asset.value}\nNotes: ${f.notes.value}`}); location.href=`mailto:jcx5inc@gmail.com?${params.toString()}`; }} className="mt-4 space-y-3 text-sm">
              <input name="brand" required placeholder="Brand / Advertiser" className="w-full rounded-xl border border-slate-300 px-3 py-2"/>
              <input name="contact" required placeholder="Contact name & email" className="w-full rounded-xl border border-slate-300 px-3 py-2"/>
              <div className="grid grid-cols-2 gap-3">
                <select name="length" className="rounded-xl border border-slate-300 px-3 py-2"><option>15s</option><option>30s</option></select>
                <input name="start" type="date" className="rounded-xl border border-slate-300 px-3 py-2"/>
              </div>
              <div>
                <div className="text-slate-600 mb-1">Targets</div>
                <div className="flex flex-wrap gap-3">
                  {['Breckenridge','Keystone','Copper','A-Basin','Dillon','Frisco'].map(v=> (
                    <label key={v} className="flex items-center gap-2 text-slate-700"><input type="checkbox" name="target" value={v}/> {v}</label>
                  ))}
                </div>
              </div>
              <input name="budget" placeholder="Budget (e.g., $1,500/wk)" className="w-full rounded-xl border border-slate-300 px-3 py-2"/>
              <input name="asset" placeholder="Asset URL (Dropbox/Drive)" className="w-full rounded-xl border border-slate-300 px-3 py-2"/>
              <textarea name="notes" placeholder="Notes or flight preferences" rows={4} className="w-full rounded-xl border border-slate-300 px-3 py-2"/>
              <button type="submit" className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-medium">Email submission</button>
            </form>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Ready to Launch</h2>
            <p className="mt-3 text-slate-700">Use this quick form to kick off your campaign. We’ll respond with a flight plan and asset review.</p>
            <div className="mt-6 rounded-2xl p-6 bg-white border border-slate-200 shadow-sm">
              <h4 className="font-semibold">Venue Application</h4>
              <form onSubmit={(e)=>{ e.preventDefault(); const f=e.currentTarget as any; const params=new URLSearchParams({ subject: `Venue partner — ${f.venue.value}`, body: `Venue: ${f.venue.value}\nLocation: ${f.location.value}\nContact: ${f.contact.value}\nScreens on site: ${f.screens.value}\nDaily foot traffic: ${f.traffic.value}\nNotes: ${f.notes.value}`}); location.href=`mailto:jcx5inc@gmail.com?${params.toString()}`; }} className="mt-4 space-y-3 text-sm">
                <input name="venue" required placeholder="Venue name" className="w-full rounded-xl border border-slate-300 px-3 py-2"/>
                <input name="location" required placeholder="City / neighborhood" className="w-full rounded-xl border border-slate-300 px-3 py-2"/>
                <div className="grid grid-cols-2 gap-3">
                  <input name="screens" placeholder="# of screens" className="rounded-xl border border-slate-300 px-3 py-2"/>
                  <input name="traffic" placeholder="Daily foot traffic" className="rounded-xl border border-slate-300 px-3 py-2"/>
                </div>
                <input name="contact" placeholder="Owner/GM contact & email" className="w-full rounded-xl border border-slate-300 px-3 py-2"/>
                <textarea name="notes" placeholder="Anything else we should know" rows={3} className="w-full rounded-xl border border-slate-300 px-3 py-2"/>
                <button type="submit" className="px-4 py-2 rounded-xl bg-slate-900 text-white font-medium">Email application</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm"><h3 className="font-semibold">How fast can we go live?</h3><p className="mt-2 text-slate-700 text-sm">Same day if assets meet specs and payment is set. Typical is 24–72 hours.</p></div>
          <div className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm"><h3 className="font-semibold">How often will my spot play?</h3><p className="mt-2 text-slate-700 text-sm">Depends on share of voice and venue foot traffic. We cap frequency for better spread across hours.</p></div>
          <div className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm"><h3 className="font-semibold">Can you make our ad?</h3><p className="mt-2 text-slate-700 text-sm">Yes—fast-turn creative starting at $300 for static, $750 for motion.</p></div>
          <div className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm"><h3 className="font-semibold">What formats do you accept?</h3><p className="mt-2 text-slate-700 text-sm">MP4 H.264 for video, PNG/JPG for static. 1080p landscape by default; portrait on request.</p></div>
        </div>
      </section>

      {/* RATE CARD */}
      <section id="ratecard" className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold">Rate Card</h2>
        <p className="mt-3 text-slate-700">Typical packages and inclusions. Custom quotes available for exclusives and event activations.</p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-700">
              <tr>
                <th className="text-left font-semibold p-3">Package</th>
                <th className="text-left font-semibold p-3">Price</th>
                <th className="text-left font-semibold p-3">Inventory</th>
                <th className="text-left font-semibold p-3">Share of Voice</th>
                <th className="text-left font-semibold p-3">Est. Plays / hr</th>
                <th className="text-left font-semibold p-3">Min. Flight</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t"><td className="p-3 font-medium">Starter (Local)</td><td className="p-3">$500 / venue / mo</td><td className="p-3">1 venue · :15s</td><td className="p-3">~10%</td><td className="p-3">~8</td><td className="p-3">4 weeks</td></tr>
              <tr className="border-t"><td className="p-3 font-medium">County Booster</td><td className="p-3">$1,500 / mo</td><td className="p-3">6+ venues · 2 resorts</td><td className="p-3">~12%</td><td className="p-3">10–12</td><td className="p-3">4–8 weeks</td></tr>
              <tr className="border-t"><td className="p-3 font-medium">Seasonal Takeover</td><td className="p-3">Custom</td><td className="p-3">Premium inventory & events</td><td className="p-3">25%+ (exclusives)</td><td className="p-3">Varies</td><td className="p-3">8–12 weeks</td></tr>
              <tr className="border-t bg-slate-50"><td className="p-3 font-medium">Add-ons</td><td className="p-3">From $300</td><td className="p-3" colSpan={4}>Creative production, rush setup, venue exclusivity, on-site activations</td></tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/rate-card" className="px-4 py-2 rounded-xl bg-slate-900 text-white">Open rate card</a>
          <a href="/media-kit" className="px-4 py-2 rounded-xl bg-white border border-slate-200">Open media kit</a>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold">Pricing</h2>
        <p className="mt-3 text-slate-700">Packages for locals to national brands. Rates vary by seasonality, inventory, and share of voice.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <Package name="Starter (Local)" price="$500 / venue / mo" bullets={["One venue, :15s spot", "Business hours only", "Monthly performance recap"]} />
          <Package name="County Booster" price="$1,500 / mo" bullets={["6+ venues across 2 resorts", "Dayparting included", "Brand-safe placement"]} highlight />
          <Package name="Seasonal Takeover" price="Custom" bullets={["Category exclusivity", "Premium inventory & events", "Full-funnel reporting"]} />
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="/media-kit" className="px-4 py-2 rounded-xl bg-white border border-slate-200">Open media kit</a>
          <a href="/rate-card" className="px-4 py-2 rounded-xl bg-slate-900 text-white">View full rate card</a>
        </div>
        <p className="text-xs text-slate-500 mt-3">*All packages subject to availability. Creative production available on request.</p>
      </section>

      {/* BOOKING */}
      <section id="book" className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold">Book a Call</h2>
        <p className="mt-3 text-slate-700">Grab 15 minutes with our team to scope your campaign.</p>
        <div className="mt-6 grid md:grid-cols-2 gap-6 items-start">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="aspect-video w-full rounded-xl border border-slate-200 overflow-hidden">
              <iframe title="Booking" src="https://calendly.com/peakscreens/demo?hide_gdpr_banner=1" className="w-full h-full"/>
            </div>
            <p className="text-xs text-slate-500 mt-2">If the scheduler doesn&apos;t load, email <a className="underline" href="mailto:jcx5inc@gmail.com">jcx5inc@gmail.com</a>.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Why a quick call?</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc pl-5">
              <li>Match you with the right venues and dayparts</li>
              <li>Confirm asset specs and creative needs</li>
              <li>Give you a same-day flight plan & quote</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Let&apos;s talk</h2>
            <p className="mt-3 text-slate-700">Tell us your goals and we&apos;ll propose a flight plan within 24 hours.</p>
            <div className="mt-6 rounded-2xl p-6 bg-white border border-slate-200 shadow-sm">
              <form onSubmit={(e) => { e.preventDefault(); const f=e.currentTarget as any; const name = f.name.value; const email = f.email.value; const msg = encodeURIComponent(f.message.value); const subject = encodeURIComponent(`PeakScreens inquiry from ${name}`); location.href = `mailto:jcx5inc@gmail.com?subject=${subject}&body=${msg}%0A%0AFrom:%20${encodeURIComponent(name)}%20(${encodeURIComponent(email)})`; }} className="space-y-3">
                <input name="name" required placeholder="Your name" className="w-full rounded-xl border border-slate-300 px-3 py-2"/>
                <input name="email" required type="email" placeholder="Your email" className="w-full rounded-xl border border-slate-300 px-3 py-2"/>
                <textarea name="message" required placeholder="What would you like to achieve?" rows={4} className="w-full rounded-xl border border-slate-300 px-3 py-2"/>
                <button type="submit" className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-medium">Send inquiry</button>
              </form>
              <p className="text-xs text-slate-500 mt-3">Prefer email? <a className="underline" href="mailto:jcx5inc@gmail.com">jcx5inc@gmail.com</a></p>
            </div>
          </div>
          <div className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm h-full">
            <h3 className="font-semibold text-lg">Tech & Operations</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc pl-5">
              <li>Remote content scheduling and instant updates</li>
              <li>Proof-of-play logs and shareable analytics</li>
              <li>Template library for promos, events, and safety alerts</li>
              <li>Full-service install: screens, mounts, and media players</li>
            </ul>
            <div className="mt-6 text-sm text-slate-600">
              Ready to deploy at <span className="font-medium">peakscreens.com</span>.
            </div>
          </div>
        </div>
      </section>

      {/* LEGAL */}
      <section id="legal" className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold">Legal</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <details id="legal-privacy" className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6">
            <summary className="font-semibold cursor-pointer select-none">Privacy Policy</summary>
            <div className="text-sm text-slate-700 mt-3 space-y-3">
              <p>We collect basic contact info you provide (name, email) and ad asset details for campaign setup. We don’t sell your data. Analytics are used to improve scheduling and reporting.</p>
              <p>For removal or data access, email <a className="underline" href="mailto:jcx5inc@gmail.com">jcx5inc@gmail.com</a>.</p>
            </div>
          </details>
          <details id="legal-terms" className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6">
            <summary className="font-semibold cursor-pointer select-none">Terms of Service</summary>
            <div className="text-sm text-slate-700 mt-3 space-y-3">
              <p>Placements are subject to availability and brand-safety review. Proof-of-play is provided via logs; impression estimates are directional. Payment due prior to flight unless agreed otherwise.</p>
              <p>Creative must meet specs and venue standards. Emergency messaging may pre-empt programming when required.</p>
            </div>
          </details>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white/70 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-600 flex flex-col md:flex-row items-center gap-3 md:gap-6">
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-emerald-600"><path d="M4 18l6-10 4 7 3-5 3 8H4z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            © {new Date().getFullYear()} PeakScreens. All rights reserved.
          </div>
          <div className="md:ml-auto flex items-center gap-4">
            <a className="hover:underline" href="#legal-privacy">Privacy</a>
            <a className="hover:underline" href="#legal-terms">Terms</a>
            <a className="hover:underline" href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
