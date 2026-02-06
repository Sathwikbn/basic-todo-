import { NavLink, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { to: "/", label: "Dashboard" },
  { to: "/tasks", label: "Tasks" },
  { to: "/calendar", label: "Calendar" },
  { to: "/analytics", label: "Analytics" },
  { to: "/settings", label: "Settings" }
];

const MainLayout = () => (
  <div className="min-h-screen bg-surface-dark text-white flex flex-col">
    <header className="px-6 py-4 flex items-center justify-between border-b border-slate-800">
      <div>
        <p className="text-sm text-slate-400">Advanced To-Do</p>
        <h1 className="text-xl font-semibold">Your productivity hub</h1>
      </div>
      <button className="rounded-full bg-indigo-500 px-4 py-2 text-sm font-semibold">
        Sync Now
      </button>
    </header>
    <main className="flex-1 px-6 py-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Outlet />
      </motion.div>
    </main>
    <nav className="flex justify-around border-t border-slate-800 bg-slate-950 py-3">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `text-sm ${isActive ? "text-indigo-400" : "text-slate-400"}`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  </div>
);

export default MainLayout;
