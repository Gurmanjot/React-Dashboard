import {
  BellIcon,
  ChatIcon,
  CogIcon,
  SearchIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import React from "react";

const list = [
  { icon: ChatIcon, hasNotification: true },
  { icon: BellIcon, hasNotification: true },
  { icon: CogIcon, hasNotification: false },
];

const Header = ({ sidebar, setSidebar }) => {
  return (
    <div className="sticky top-0 px-6 h-16 flex flex-row justify-between items-center ">
      <div className="items-center flex flex-row">
        {/* Sidebar Icon */}
        <MenuIcon
          className="h-6 w-6 mr-4  md:hidden"
          onClick={() => setSidebar(!sidebar)}
        />
        {/* Search */}
        <div className="rounded-full px-6 py-2 w-96 bg-white flex flex-row">
          <SearchIcon className="h-6 w-6" />
          <h1 className="ml-2">Search here...</h1>
        </div>
      </div>
      {/* Menu Items */}
      <div className="flex flex-row items-center space-x-2">
        {React.Children.toArray(
          list.map(({ icon: Icon, hasNotification }, index) => {
            return (
              <div className="h-8 w-8 bg-white rounded-full relative inline-flex justify-center items-center">
                <Icon className="h-6 w-6" />
                <div
                  className={` h-2 w-2 rounded-full absolute top-0 right-0 bg-purple-400 ${
                    hasNotification ? "block" : "hidden"
                  } `}
                />
              </div>
            );
          })
        )}
        <div className="font-semibold text-black">Gurman Randhawa</div>
      </div>
    </div>
  );
};

export default Header;
