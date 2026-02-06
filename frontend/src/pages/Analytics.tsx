const Analytics = () => (
  <div className="space-y-4">
    <h2 className="text-xl font-semibold">Analytics</h2>
    <div className="grid grid-cols-2 gap-4">
      <div className="rounded-2xl bg-slate-900 p-4">
        <p className="text-xs text-slate-400">Completion Rate</p>
        <p className="text-2xl font-semibold">84%</p>
      </div>
      <div className="rounded-2xl bg-slate-900 p-4">
        <p className="text-xs text-slate-400">Focus Time</p>
        <p className="text-2xl font-semibold">6h 40m</p>
      </div>
    </div>
    <div className="rounded-3xl bg-slate-900 p-6">
      <p className="text-sm text-slate-400">
        Visual productivity charts and streak trackers will be embedded here.
      </p>
    </div>
  </div>
);

export default Analytics;
