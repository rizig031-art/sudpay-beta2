import { useStore } from "../store/useStore";

export default function MerchantScreen() {
  const { transactions } = useStore();
  const total = transactions.reduce((sum, tx) => sum + tx.amount, 0);

  return (
    <div className="merchant-screen">
      <h2>Merchant Dashboard</h2>
      <p>Total received: {total} SDG (Mock)</p>
    </div>
  );
}
