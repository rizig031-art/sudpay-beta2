import { useState } from "react";
import { useStore } from "../store/useStore";
import { motion } from "framer-motion";

export default function LoginModal() {
  const [name, setName] = useState("");
  const { login } = useStore();

  const handleLogin = () => {
    if (name.trim()) login(name);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="modal-backdrop"
    >
      <div className="modal">
        <h2>Login to SudPay</h2>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
        <button onClick={handleLogin}>Login</button>
      </div>
    </motion.div>
  );
}
