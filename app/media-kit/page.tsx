export const metadata = { title: "PeakScreens — Media Kit" };

export default function MediaKitPage() {
  return (
    <main className="max-w-4xl mx-auto p-6 print:p-0">
      <header className="mb-6 border-b pb-4">
        <h1 className="text-3xl font-extrabold">PeakScreens — Media Kit</h1>
        <p className="text-slate-600">Summit County’s mountain-side digital ad network.</p>
        <p className="text-sm text-slate-500">Tip: File → Print → “Save as PDF”.</p>
      </header>

      <section className="space-y-4 text-slate-700">
        <h2 className="text-xl font-semibold">Why PeakScreens</h2>
        <ul className="list-disc pl-6">
          <li>120+ active screens across bars, gondola lines, and hotel lobbies</li>
          <li>Target by resort (Breck, Keystone, Copper, A-Basin), venue type, and daypart</li>
          <li>:15s and :30s spots · proof-of-play logs · shareable reporting</li>
          <li>Full-service installs: screens, mounts, media players, and content management</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">Sample Weekly Flight</h2>
        <ul className="list-disc pl-6">
          <li>5 venues in Breck + 3 in Keystone</li>
          <li>12 hours/day during lift operations</li>
          <li>Spot length: 15s · Share of voice: 12%</li>
          <li>Estimated impressions: ~96,000 / week</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">Creative Specs (summary)</h2>
        <ul className="list-disc pl-6">
          <li>Video: 1920×1080 or 3840×2160, MP4 (H.264), 24–30fps, 15s/30s</li>
          <li>Static: 1920×1080 PNG/JPG (RGB), safe area 5% margins</li>
          <li>Audio off by default — add subtitles/bold CTAs</li>
        </ul>
      </section>

      <footer className="mt-6 text-sm text-slate-500">
        Contact: jcx5inc@gmail.com • peakscreens.com
      </footer>

      <style jsx global>{`
        @media print {
          html, body { background: white; }
          a { text-decoration: none; color: inherit; }
        }
      `}</style>
    </main>
  );
}
