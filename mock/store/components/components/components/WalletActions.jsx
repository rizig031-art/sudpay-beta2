import { useStore } from "../store/useStore";
import { banks } from "../mock/mockData";

export default function WalletActions() {
  const { addTransaction, selectedBank, selectBank } = useStore();

  const actions = [
    { name: "Transfer Money", type: "Payment" },
    { name: "Buy Electricity", type: "Payment" },
    { name: "Buy Credit", type: "Payment" },
    { name: "Transfer to SudPay", type: "Recharge" },
    { name: "Top-up SudPay", type: "Recharge" },
    { name: "Transfer to Bank", type: "Payment" },
  ];

  const handleAction = (action) => {
    const amount = Math.floor(Math.random() * 5000 + 500); // Mock amount
    addTransaction({ id: Date.now(), type: action.type, amount, bank: selectedBank, date: new Date().toLocaleString() });
  };

  return (
    <div className="wallet-actions">
      <select value={selectedBank} onChange={(e) => selectBank(e.target.value)}>
        {banks.map((b) => <option key={b}>{b}</option>)}
      </select>
      {actions.map((a) => (
        <button key={a.name} onClick={() => handleAction(a)}>{a.name}</button>
      ))}
    </div>
  );
}
