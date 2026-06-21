import React from "react";
import Sidebar from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { MenuIcon } from "lucide-react";
const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/accounts": "Accounts",
  "/aicomposer": "AI Composer",
  "/scheduler": "Scheduler",
};
const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();
  const pageTitle = pageTitles[location.pathname] || "Dashboard";
  console.log(location.pathname);
  return (
    <div className="flex h-screen bg-gray-500">
      {/* mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <Sidebar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* top bar */}
        <header className="h-18 flex justify-between bg-white border-b border-slate-200 fles items-center px-4 md:px-8 gap-4">
          <button
            className="md:hidden p-2  text-red-500"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <MenuIcon className="size-12 text-gray-300" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-slate-800">{pageTitle}</h1>
            <p className="text-sm text-slate-500 hidden md:block">
              Manage and automate your social presece
            </p>
          </div>
        </header>

        {/* main content */}
        <main className="p-4 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
