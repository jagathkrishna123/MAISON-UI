import { ShoppingBag, Menu, Search } from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-[#F5EBD0] text-[#7F011F] border-b border-[#7F011F]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="text-2xl font-black tracking-tight">
          MAISON<span className="text-[#7F011F]/50">.</span>
        </a>

        {/* Navigation links */}
        <div className="hidden md:flex items-center gap-9 text-sm font-medium">
          <a href="/" className="hover:opacity-60 transition">Home</a>
          <a href="#collections" className="hover:opacity-60 transition">Collections</a>
          <a href="#story" className="hover:opacity-60 transition">Our Story</a>
          <a href="#contact" className="hover:opacity-60 transition">Contact</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button aria-label="Search" className="hidden sm:block hover:opacity-60">
            <Search size={20} />
          </button>

          <button aria-label="Shopping bag" className="hover:opacity-60">
            <ShoppingBag size={21} />
          </button>

          <button aria-label="Open menu" className="md:hidden">
            <Menu size={24} />
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;