export const metadata = { title: "PeakScreens — Media Kit" };

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-extrabold mb-4">PeakScreens — Media Kit</h1>
      <p className="text-slate-600 mb-6">Tip: File → Print → “Save as PDF”.</p>

      <h2 className="text-xl font-semibold mt-2">Why PeakScreens</h2>
      <ul className="list-disc pl-6 text-slate-700">
        <li>120+ active screens across bars, gondola lines, and hotel lobbies</li>
        <li>Target by resort, venue type, and daypart</li>
        <li>:15s / :30s spots · proof-of-play · shareable reporting</li>
        <li>Full-service installs: screens, mounts, media players</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">Creative Specs (summary)</h2>
      <ul className="list-disc pl-6 text-slate-700">
        <li>Video: 1920×1080 or 3840×2160, MP4 (H.264), 24–30fps, 15s/30s</li>
        <li>Static: 1920×1080 PNG/JPG (RGB); safe area 5% margins</li>
        <li>Audio off by default — add subtitles / bold CTAs</li>
      </ul>

      <p className="mt-6 text-sm text-slate-500">Contact: jcx5inc@gmail.com • peakscreens.com</p>
    </main>
  );
}
