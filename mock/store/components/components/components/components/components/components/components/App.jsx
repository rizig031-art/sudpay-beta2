import { useStore } from "./store/useStore";
import LoginModal from "./components/LoginModal";
import Dashboard from "./components/Dashboard";
import BottomNav from "./components/BottomNav";
import MerchantScreen from "./components/MerchantScreen";

export default function App() {
  const { user } = useStore();
  return (
    <div className="app">
      {!user && <LoginModal />}
      {user && <Dashboard />}
      <BottomNav />
      <MerchantScreen />
    </div>
  );
}
