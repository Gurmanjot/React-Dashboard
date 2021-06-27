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
const Sidebar = ({ sidebar, setSidebar }) => {
  return (
    <div
      className={`w-60 h-full relative top:0 bottom-0 left-0 bg-white overflow-y-auto md:no-scrollbar transform -translate-x-full md:translate-x-0  ${
        sidebar ? "translate-x-0" : "-translate-x-full"
      } transition duration-200 ease-in-out`}
    >
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
