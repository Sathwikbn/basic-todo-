const ForgotPassword = () => (
  <div className="space-y-6">
    <div>
      <h2 className="text-2xl font-semibold">Reset password</h2>
      <p className="text-sm text-slate-400">We will email you a reset link.</p>
    </div>
    <form className="space-y-4">
      <input
        className="w-full rounded-2xl bg-slate-800 px-4 py-3 text-sm"
        placeholder="Email"
        type="email"
      />
      <button className="w-full rounded-2xl bg-indigo-500 py-3 text-sm font-semibold">
        Send reset link
      </button>
    </form>
  </div>
);

export default ForgotPassword;
