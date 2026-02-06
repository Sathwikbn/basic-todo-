const Dashboard = () => (
  <div className="space-y-6">
    <section className="rounded-3xl bg-slate-900 p-6 shadow-lg">
      <h2 className="text-lg font-semibold">Today at a glance</h2>
      <p className="mt-2 text-sm text-slate-400">
        AI suggestions, reminders, and focus sessions are surfaced here for quick action.
      </p>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="rounded-2xl bg-slate-800 p-4">
          <p className="text-xs uppercase text-slate-400">Tasks Due</p>
          <p className="text-2xl font-semibold">5</p>
        </div>
        <div className="rounded-2xl bg-slate-800 p-4">
          <p className="text-xs uppercase text-slate-400">Streak</p>
          <p className="text-2xl font-semibold">12 days</p>
        </div>
      </div>
    </section>
    <section className="rounded-3xl bg-slate-900 p-6 shadow-lg">
      <h3 className="text-lg font-semibold">Smart scheduling</h3>
      <p className="mt-2 text-sm text-slate-400">
        Drag tasks into the timeline, manage recurring routines, and review weekly balance.
      </p>
    </section>
  </div>
);

export default Dashboard;
