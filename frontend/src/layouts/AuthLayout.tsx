import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const AuthLayout = () => (
  <div className="min-h-screen bg-surface-dark flex items-center justify-center px-6">
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md rounded-3xl bg-slate-900 p-8 shadow-xl"
    >
      <Outlet />
    </motion.div>
  </div>
);

export default AuthLayout;
