import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";

export default function Navbar() {
  const { user } = { user: false };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-900/10">
      <div className="max-w-6xl mx-auto   h-20 flex justify-between items-center px-4">
        <Link
          to="/"
          onClick={() => scrollTo(0, 0)}
          className="flex flex-col items-center gap-2 transition-all duration-400   hover:bg-red-600 hover:rounded text-white px-3 py-2 hover:shadow-red-200 hover:shadow-md"
        >
          <img src="/logo.svg" alt="logo" className="size-7" />
          <Link to="/me">
            <span className="text-xl lg:text-2xl font-medium font-serif text-slate-800">
              Salhab
            </span>
          </Link>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-500 hover:animate-[pulse_5s_linear_1] ">
          <a
            href="#features"
            className="hover:text-slate-900 hover:bg-slate-100 px-2 py-1 rounded hover:p-2"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="hover:text-slate-900 hover:bg-slate-100 px-2 py-1 rounded hover:p-2"
          >
            How it works
          </a>
          <a
            href="#pricing"
            className="hover:text-slate-900 hover:bg-slate-100 px-2 py-1 rounded hover:p-2"
          >
            Pricing
          </a>
        </div>

        {user ? (
          <Link
            to="/dashboard"
            className="flex items-center gap-1.5 text-sm font-medium bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full shadow-sm hover:shadow-red-200 hover:shadow-md"
          >
            Go to Dashboard <ArrowRightIcon className="size-3.5" />
          </Link>
        ) : (
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="text-sm text-slate-600 hover:text-slate-900 hidden sm:block"
            >
              Sign In
            </Link>
            <Link
              to="/login"
              className="flex items-center gap-1.5 text-sm bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full shadow-sm hover:shadow-red-200 hover:shadow-md"
            >
              Get Started <ArrowRightIcon className="size-3.5" />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
