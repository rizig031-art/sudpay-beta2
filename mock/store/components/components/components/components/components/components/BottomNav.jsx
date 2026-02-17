import { motion } from "framer-motion";

export default function BottomNav() {
  return (
    <motion.div
      className="bottom-nav"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
    >
      <button>Dashboard</button>
      <button>Wallet</button>
      <button>Merchant</button>
      <button>Profile</button>
    </motion.div>
  );
}
