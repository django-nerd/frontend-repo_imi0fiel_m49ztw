import { Link, NavLink } from "react-router-dom";
import { Menu, Ticket, CalendarDays, BarChart3, User2 } from "lucide-react";
import { useState } from "react";

const navItems = [
  { to: "/", label: "Events", icon: Ticket },
  { to: "/schedule", label: "Schedule", icon: CalendarDays },
  { to: "/dashboard", label: "Dashboard", icon: BarChart3 },
  { to: "/profile", label: "Profile", icon: User2 },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkBase =
    "inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors";

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between rounded-2xl mt-4 mb-2 px-4 bg-[#2D2D44]/70 border border-white/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-[#6C5CE7] to-[#00CEC9] shadow-md" />
            <span className="text-white font-bold tracking-tight text-lg">NovaEvents</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `${linkBase} ${
                    isActive
                      ? "text-white bg-white/10 border border-white/10"
                      : "text-[#B2B6C8] hover:text-white hover:bg-white/5"
                  }`
                }
              >
                <Icon size={18} />
                {label}
              </NavLink>
            ))}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-2">
            <Link
              to="/tickets"
              className="hidden md:inline-flex bg-gradient-to-r from-[#6C5CE7] to-[#FD79A8] text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-[0_8px_24px_rgba(108,92,231,0.45)] hover:shadow-[0_10px_28px_rgba(253,121,168,0.35)] transition"
            >
              Get Tickets
            </Link>
            <button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/5 border border-white/10 text-white"
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {open && (
          <div className="md:hidden rounded-2xl border border-white/10 bg-[#2D2D44]/80 backdrop-blur-xl shadow-xl mb-4 overflow-hidden">
            <nav className="p-2 flex flex-col">
              {navItems.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg text-sm ${
                      isActive ? "bg-white/10 text-white" : "text-[#B2B6C8] hover:text-white"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <Link
                to="/tickets"
                onClick={() => setOpen(false)}
                className="mt-2 px-4 py-3 rounded-lg text-sm bg-gradient-to-r from-[#6C5CE7] to-[#FD79A8] text-white text-center"
              >
                Get Tickets
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
