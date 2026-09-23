import { useState, useEffect } from "react";
import { X, ArrowUpRight } from "lucide-react";
import logo from "../../assets/Nova.svg";
import { RiMenu3Fill, RiMenu5Fill } from "react-icons/ri";
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
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
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
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-16 w-auto" />
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
              className="md:hidden rounded-xl p-2 text-gray-700 hover:bg-emerald-50"
              aria-label="Open menu"
            >
              <RiMenu3Fill size={30} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          onClick={() => setMenuOpen(false)}
        />

        {/* Full Screen Menu */}
        <div
          className={`relative flex h-full w-full flex-col bg-white backdrop-blur-2xl transition-all duration-500 ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
            <img src={logo} alt="Logo" className="h-14 w-auto" />

            <button
              onClick={() => setMenuOpen(false)}
              className="rounded-xl p-2 text-black hover:bg-white/10"
            >
              <RiMenu5Fill size={28} />
            </button>
          </div>

{/* Navigation */}
<nav className="flex flex-1 flex-col items-center justify-center gap-4 px-6">
  {navigation.map((item) => (
    <a
      key={item.name}
      href={item.href}
      onClick={() => setMenuOpen(false)}
      className="
        group
        relative
        w-full
        max-w-sm
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-gradient-to-r
        from-white
        to-slate-50
        px-6
        py-4
        text-center
        shadow-sm
        transition-all
        duration-300
        ease-out

        hover:-translate-y-1
        hover:scale-[1.02]
        hover:border-transparent
        hover:shadow-2xl
      "
    >
      {/* Gradient Background */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#f95d04]
          via-[#f32e25]
          to-[#f1093f]
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* Text */}
      <span
        className="
          relative
          z-10
          text-lg
          font-semibold
          text-slate-800
          transition-colors
          duration-300
          group-hover:text-white
        "
      >
        {item.name}
      </span>

      {/* Arrow */}
      <ArrowUpRight
        size={18}
        className="
          absolute
          right-5
          top-1/2
          z-10
          -translate-y-1/2
          opacity-0
          transition-all
          duration-300
          group-hover:translate-x-1
          group-hover:opacity-100
          text-white
        "
      />
    </a>
  ))}

  {/* CTA */}
  <a
    href="#contact"
    onClick={() => setMenuOpen(false)}
    className="
      mt-8
      flex
      items-center
      justify-center
      gap-2
      rounded-full
      bg-gradient-to-r
      from-[#f95d04]
      via-[#f32e25]
      to-[#f1093f]
      px-8
      py-4
      text-lg
      font-semibold
      text-white
      shadow-xl
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-2xl
      hover:shadow-orange-300/30
    "
  >
    Start Project
    <ArrowUpRight size={20} />
  </a>
</nav>

          {/* Footer */}
          <div className="pb-8 text-center text-sm text-black">
            © 2026 Nova Studio
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
