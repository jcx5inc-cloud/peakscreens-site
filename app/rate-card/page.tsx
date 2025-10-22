export const metadata = { title: "PeakScreens — Rate Card" };

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-extrabold mb-4">PeakScreens — Rate Card</h1>
      <p className="text-slate-600 mb-6">Tip: File → Print → “Save as PDF”.</p>

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="w-full text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="p-3 text-left">Package</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Inventory</th>
              <th className="p-3 text-left">Share of Voice</th>
              <th className="p-3 text-left">Est. Plays / hr</th>
              <th className="p-3 text-left">Min. Flight</th>
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

      <p className="mt-6 text-sm text-slate-500">Contact: jcx5inc@gmail.com • peakscreens.com</p>
    </main>
  );
}
