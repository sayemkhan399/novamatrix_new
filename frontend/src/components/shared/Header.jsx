import { ArrowUpRight, ChevronRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../../assets/Nova.svg";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/About" },
  { name: "Services", href: "/Services" },
  { name: "Portfolio", href: "/Portfolio" },
  { name: "Contact", href: "/Contact" },
];

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsSticky(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
        isSticky
          ? "bg-white/80 backdrop-blur-xl border-b shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="NovaMatrix home"
              className="h-12 w-auto md:h-16"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative text-sm font-medium text-gray-700 transition-colors hover:text-emerald-600"
              >
                {item.name}

                {/* Animated underline */}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-emerald-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* CTA */}
            <a
              href="#contact"
              className="hidden sm:flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f95d04] via-[#f32e25] to-[#f1093f]  px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
            >
              Start Project
              <ArrowUpRight size={16} />
            </a>

            {/* Mobile Button */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-200 bg-white/90 text-neutral-800 shadow-sm transition-colors hover:bg-emerald-50 md:hidden"
            >
              <Menu size={23} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-50 md:hidden transition-[visibility,opacity] duration-300 motion-reduce:transition-none ${
          menuOpen
            ? "visible pointer-events-auto opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div
          className="absolute inset-0 bg-neutral-950/40 transition-opacity"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />

        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`absolute right-0 top-0 flex h-dvh w-[min(88vw,24rem)] flex-col border-l border-emerald-100 bg-[#f7fffa] px-6 pb-6 pt-[max(1.5rem,env(safe-area-inset-top))] shadow-2xl transition-transform duration-300 ease-out motion-reduce:transition-none ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-emerald-100 pb-5">
            <a
              href="/"
              onClick={() => setMenuOpen(false)}
              aria-label="NovaMatrix home"
            >
              <img src={logo} alt="NovaMatrix" className="h-11 w-auto" />
            </a>
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">
                Menu
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200 bg-white text-neutral-700 transition-colors hover:bg-emerald-50"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          <nav aria-label="Main navigation" className="flex-1 pt-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-neutral-400">
              Explore
            </p>
            <div className="divide-y divide-emerald-100">
              {navigation.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex min-h-14 items-center justify-between gap-4 py-3 text-neutral-800 transition-colors hover:text-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                >
                  <span className="flex items-center gap-4">
                    <span className="w-6 font-mono text-xs text-emerald-600/70">
                      0{index + 1}
                    </span>
                    <span className="text-lg font-semibold">{item.name}</span>
                  </span>
                  <ChevronRight
                    size={18}
                    className="text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:text-emerald-600"
                  />
                </a>
              ))}
            </div>
          </nav>

          <div className="border-t border-emerald-100 pt-5">
            <p className="mb-4 text-sm text-neutral-600">
              Have a project in mind?
            </p>
            <a
              href="/Contact"
              onClick={() => setMenuOpen(false)}
              className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#f95d04] via-[#f32e25] to-[#f1093f] px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            >
              Start a project
              <ArrowUpRight size={17} />
            </a>
            <p className="mt-5 text-center text-xs text-neutral-400">
              © 2026 NovaMatrix
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
