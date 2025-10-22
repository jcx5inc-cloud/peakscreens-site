export const metadata = { title: "PeakScreens — Rate Card" };

export default function RateCardPage() {
  return (
    <main className="max-w-4xl mx-auto p-6 print:p-0">
      <header className="mb-6 border-b pb-4">
        <h1 className="text-3xl font-extrabold">PeakScreens — Rate Card</h1>
        <p className="text-slate-600">Rates vary by season, inventory, and SOV.</p>
        <p className="text-sm text-slate-500">Tip: File → Print → “Save as PDF”.</p>
      </header>

      <section className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm print:shadow-none">
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
            <tr className="border-t">
              <td className="p-3 font-medium">Starter (Local)</td>
              <td className="p-3">$500 / venue / mo</td>
              <td className="p-3">1 venue · :15s</td>
              <td className="p-3">~10%</td>
              <td className="p-3">~8</td>
              <td className="p-3">4 weeks</td>
            </tr>
            <tr className="border-t">
              <td className="p-3 font-medium">County Booster</td>
              <td className="p-3">$1,500 / mo</td>
              <td className="p-3">6+ venues · 2 resorts</td>
              <td className="p-3">~12%</td>
              <td className="p-3">10–12</td>
              <td className="p-3">4–8 weeks</td>
            </tr>
            <tr className="border-t">
              <td className="p-3 font-medium">Seasonal Takeover</td>
              <td className="p-3">Custom</td>
              <td className="p-3">Premium inventory & events</td>
              <td className="p-3">25%+ (exclusives)</td>
              <td className="p-3">Varies</td>
              <td className="p-3">8–12 weeks</td>
            </tr>
            <tr className="border-t bg-slate-50">
              <td className="p-3 font-medium">Add-ons</td>
              <td className="p-3">From $300</td>
              <td className="p-3" colSpan={4}>Creative production, rush setup, venue exclusivity, on-site activations</td>
            </tr>
          </tbody>
        </table>
      </section>

      <footer className="mt-6 text-sm text-slate-500">
        Contact: jcx5inc@gmail.com • peakscreens.com
      </footer>

      <style jsx global>{`
        @media print {
          html, body { background: white; }
          table { page-break-inside: avoid; }
          a { text-decoration: none; color: inherit; }
        }
      `}</style>
    </main>
  );
}
