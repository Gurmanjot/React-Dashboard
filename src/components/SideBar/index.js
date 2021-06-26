import logo from "../../assets/images/Tagihlogo.png";
import {
  CurrencyDollarIcon,
  HomeIcon,
  ClipboardListIcon,
  CreditCardIcon,
  SwitchHorizontalIcon,
  CogIcon,
} from "@heroicons/react/outline";
import ListItem from "./listItem";

const list = [
  { icon: CurrencyDollarIcon, text: "DashBoard" },
  { icon: HomeIcon, text: "Balance" },
  { icon: ClipboardListIcon, text: "Invoices" },
  { icon: CreditCardIcon, text: "Cards" },
  { icon: SwitchHorizontalIcon, text: "Transaction" },
  { icon: CogIcon, text: "Settings" },
];
const Sidebar = () => {
  return (
    <div className="w-64 bg-white overflow-y-auto md:no-scrollbar">
      <img src={logo} alt="logo" className="mx-auto mt-3" />
      <div className="p-4">
        {list.map(({ icon, text }, index) => (
          <ListItem key={index} Icon={icon} text={text} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
