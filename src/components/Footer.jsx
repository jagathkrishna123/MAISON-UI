function Footer() {
  return (
    <footer id="contact" className="bg-[#7F011F] text-[#F5EBD0]">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <div className="lg:col-span-2">
            <a href="/" className="text-3xl font-black tracking-tight">
              MAISON.
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#F5EBD0]/70">
              Thoughtfully curated essentials for people who believe
              that good design lives in the details.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-5">Explore</h3>
            <ul className="space-y-3 text-sm text-[#F5EBD0]/70">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="#collections" className="hover:text-white transition">Collections</a></li>
              <li><a href="#story" className="hover:text-white transition">Our Story</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-5">Get in touch</h3>
            <ul className="space-y-3 text-sm text-[#F5EBD0]/70">
              <li>
                <a href="mailto:hello@maison.example" className="hover:text-white transition">
                  Email us
                </a>
              </li>
              <li><a href="#contact" className="hover:text-white transition">Instagram ↗</a></li>
              <li><a href="#contact" className="hover:text-white transition">Pinterest ↗</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-[#F5EBD0]/20 flex flex-col sm:flex-row justify-between gap-3 text-xs text-[#F5EBD0]/60">
          <p>© 2026 MAISON. All rights reserved.</p>
          <p>Made with intention. Designed for everyday living.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;