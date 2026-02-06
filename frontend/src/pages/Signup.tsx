const Signup = () => (
  <div className="space-y-6">
    <div>
      <h2 className="text-2xl font-semibold">Create your workspace</h2>
      <p className="text-sm text-slate-400">
        Join Advanced To-Do and unlock smart scheduling and collaboration.
      </p>
    </div>
    <form className="space-y-4">
      <input className="w-full rounded-2xl bg-slate-800 px-4 py-3 text-sm" placeholder="Name" />
      <input
        className="w-full rounded-2xl bg-slate-800 px-4 py-3 text-sm"
        placeholder="Email"
        type="email"
      />
      <input
        className="w-full rounded-2xl bg-slate-800 px-4 py-3 text-sm"
        placeholder="Password"
        type="password"
      />
      <button className="w-full rounded-2xl bg-indigo-500 py-3 text-sm font-semibold">
        Create Account
      </button>
    </form>
  </div>
);

export default Signup;
