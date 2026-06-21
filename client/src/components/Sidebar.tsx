import React from "react";
import {
  LayoutDashboardIcon,
  UserIcon,
  CalendarDaysIcon,
  Wand2Icon,
  LogOut,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
const Sidebar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const { logout, user } = {
    logout: () => {
      window.location.href = "/";
    },
    user: {
      name: "ali salhab",
      email: "salhab@example.com",
    },
  };
  const location = useLocation();
  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboardIcon },
    { name: "Accounts", path: "/accounts", icon: UserIcon },
    { name: "AI Composer", path: "/aicomposer", icon: Wand2Icon },
    { name: "Scheduler", path: "/scheduler", icon: CalendarDaysIcon },
  ];
  return (
    <div
      className={`fixed  bg-white inset-y-0 w-[260px] shadow-2xl left-0 border-r border-slate-200 flex flex-col h-full transform transition-transform duration-300 ease-in-out z-50 md:relative md:translate-x-0 ${isOpen ? "translate-x-0 " : "-translate-x-full"} `}
      onClick={() => setIsOpen(false)}
    >
      {/* logo  */}
      <div className="p-6 pb-4">
        <div className="text-xl tracking-tight text-slate-800 flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="size-6" />
          <h1 className="text-lg font-bold text-slate-800">AliSalhb</h1>
        </div>
      </div>

      {/* nav section label  */}
      <div className="px-2 py-1">
        <span className="text-sm text-slate-500 uppercase tracking-wider">
          Menu
        </span>
      </div>
      {/* nav items  */}
      <nav className="flex-1 bg-red-50 px-2 space-y-4">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/dashboard"}
              onClick={() => {
                setIsOpen(false);
              }}
              className={`flex justify-between items-center  gap-3 px-3 py-2.5 rounded text-sm transition-all duration-200 border ${isActive ? "bg-red-100 border-red-400" : "border-transparent hover:bg-slate-100 hover:border-slate-300"}`}
            >
              <div className="flex items-center gap-2 text-sm font-medium">
                <item.icon
                  className={`size-4 shrink-0 ${isActive ? "text-red-400" : "text-slate-500"} hover:text-slate-700`}
                />
                {item.name}
              </div>
              {isActive && <span className="w-1 h-6 rounded bg-red-500 " />}
            </NavLink>
          );
        })}
      </nav>

      {/* user footer */}
      <div className="p-6 border-t border-slate-900">
        <div className="flex items-center gap-3 p-2 rounded-3xl">
          <div className="size-8  rounded-full bg-linear-to-br from-red-400 to-blue-500 text-white flex items-center justify-center">
            {user?.name?.charAt(0).toUpperCase() || "A"}
          </div>
          <div className=" flex-1">
            <div className="truncate font-bold text-slate-800">
              {user?.name || "User"}
            </div>
            <div>{user?.email || "user@example.com"}</div>
          </div>
        </div>

        <button
          onClick={logout}
          className="w-full mt-4 py-2 px-4 flex items-center justify-center bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200"
        >
          Logout
          <LogOut className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
