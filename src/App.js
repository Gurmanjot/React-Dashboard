import "./App.css";
import Sidebar from "./components/SideBar";
import Header from "./components/Header";
import { useState } from "react";
import BalanceCard from "./components/Cards/BalanceCard";
import IncomeExpenseCard from "./components/Cards/IncomeExpenseCard";
import Income from "./assets/images/IncomeIcon.png";
import Expense from "./assets/images/ExpenseIcon.png";

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
          <IncomeExpenseCard logo={Income} isIncome={true} />
          <IncomeExpenseCard logo={Expense} isIncome={false} />
        </div>
      </div>
    </div>
  );
}

export default App;
