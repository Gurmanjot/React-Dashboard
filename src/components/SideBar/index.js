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
  CurrencyDollarIcon,
  HomeIcon,
  ClipboardListIcon,
  CreditCardIcon,
  SwitchHorizontalIcon,
  CogIcon,
];
const Sidebar = () => {
  return (
    <div className="w-64 bg-white">
      <img src={logo} alt="logo" className="mx-auto mt-3" />
      <div className="p-4">
        {list.map((data, index) => (
          <ListItem Icon={data} text={"dssdasadas"} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
