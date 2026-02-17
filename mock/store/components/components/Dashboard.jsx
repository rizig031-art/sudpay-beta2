import { useStore } from "../store/useStore";
import WalletActions from "./WalletActions";
import TransactionHistory from "./TransactionHistory";
import QRScanner from "./QRScanner";

export default function Dashboard() {
  const { user, balance } = useStore();
  if (!user) return null;

  return (
    <div className="dashboard">
      <h1>Welcome, {user}</h1>
      <p>Balance: {balance} SDG</p>
      <WalletActions />
      <QRScanner />
      <TransactionHistory />
    </div>
  );
}
