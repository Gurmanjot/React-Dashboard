import "./App.css";
import Sidebar from "./components/SideBar";
import Header from "./components/Header";
import { useState } from "react";
import BalanceCard from "./components/Cards/BalanceCard";

function App() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      <div className=" flex-1">
        <Header sidebar={sidebar} setSidebar={setSidebar} />
        {/* cards */}
        <div className="grid grid-cols-12 gap-6 p-8">
          <BalanceCard />
          <BalanceCard />
          <BalanceCard />
          <BalanceCard />
        </div>
      </div>
    </div>
  );
}

export default App;
