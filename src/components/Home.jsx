import dessimage from "../assets/mens-fashion.png";
import SectionTitle from "./SectionTitle";

function Home() {
  const collections = [
    {
      title: "Everyday Essentials",
      category: "THE DAILY EDIT",
      image:
        "https://images.pexels.com/photos/7679455/pexels-photo-7679455.jpeg",
    },
    {
      title: "Timeless Classics",
      category: "SIGNATURE PIECES",
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800",
    },
    {
      title: "Modern Living",
      category: "CURATED FOR YOU",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800",
    },
  ];

  return (
    <main className="bg-[#F5EBD0] text-[#7F011F]">
      {/* Hero section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-20">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="text-xs uppercase tracking-[0.3em] mb-6">
              Designed for the everyday
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif leading-[1.08] tracking-tight">
              A little
              <br />
              more <span className="italic">you.</span>
            </h1>

            <p className="mt-6 max-w-md text-[#7F011F]/70 leading-7">
              Discover thoughtfully curated pieces that bring simplicity,
              character, and timeless style into your everyday life.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#collections"
                className="inline-flex items-center justify-center bg-[#7F011F] text-[#F5EBD0] px-7 py-4 text-sm font-medium hover:bg-[#5D0016] transition"
              >
                Explore Collection <span className="ml-3">↗</span>
              </a>

              <a
                href="#story"
                className="inline-flex items-center justify-center border border-[#7F011F]/30 px-7 py-4 text-sm font-medium hover:bg-[#7F011F] hover:text-[#F5EBD0] transition"
              >
                Our Story
              </a>
            </div>

            <div className="flex items-center gap-8 mt-12 pt-7 border-t border-[#7F011F]/15">
              <div>
                <p className="text-2xl font-semibold">100%</p>
                <p className="text-xs mt-1 text-[#7F011F]/60">
                  Thoughtfully curated
                </p>
              </div>

              <div className="h-10 w-px bg-[#7F011F]/20" />

              <div>
                <p className="text-2xl font-semibold">Timeless</p>
                <p className="text-xs mt-1 text-[#7F011F]/60">By design</p>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="order-1 md:order-2 relative">
            <img
              src={dessimage}
              alt="Elegant curated fashion collection"
              className="w-full h-[360px] sm:h-[480px] lg:h-[580px] object-cover rounded-2xl"
            />

            <div className="absolute bottom-5 left-5 bg-[#F5EBD0] px-5 py-4">
              <p className="text-xs uppercase tracking-widest">
                The new collection
              </p>
              <p className="text-lg font-serif mt-1">Season of simplicity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collection heading */}
      {/* Discover Your Style */}
      <section id="collections" className="bg-white/40 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Centered Section Heading */}
          <SectionTitle
            title="The MAISON Edit"
            mainTitle="Discover your style."
            description="Everyday essentials, timeless classics, and carefully selected pieces designed to make every outfit feel effortless."
          />

          {/* Collection Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {collections.map((item, index) => (
              <article key={item.title} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-[#E8DCC0]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[320px] sm:h-[360px] lg:h-[390px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D1015]/65 via-transparent to-transparent opacity-80" />

                  {/* Collection Number */}
                  <span className="absolute top-5 left-5 rounded-full bg-[#F5EBD0]/90 px-3 py-1.5 text-xs font-medium text-[#7F011F]">
                    0{index + 1}
                  </span>

                  {/* Bottom Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 text-[#F5EBD0]">
                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#F5EBD0]/80">
                      {item.category}
                    </p>

                    <div className="flex items-end justify-between gap-3 mt-3">
                      <h3 className="text-2xl sm:text-3xl font-serif">
                        {item.title}
                      </h3>

                      <span className="flex-shrink-0 w-11 h-11 rounded-full border border-[#F5EBD0]/60 flex items-center justify-center transition-all duration-300 group-hover:bg-[#F5EBD0] group-hover:text-[#7F011F]">
                        ↗
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-[#7F011F]/65">
                  {index === 0 &&
                    "The everyday pieces you will keep reaching for."}
                  {index === 1 &&
                    "Refined menswear that never goes out of style."}
                  {index === 2 &&
                    "Thoughtful details for a more considered wardrobe."}
                </p>
              </article>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="flex justify-center mt-12 lg:mt-16">
            <a
              href="#story"
              className="inline-flex items-center gap-3 rounded-full bg-[#7F011F] text-[#F5EBD0] px-7 py-4 text-sm font-medium transition-all duration-300 hover:bg-[#5D0016] hover:-translate-y-0.5"
            >
              Explore our collection
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Brand story */}
      <section
        id="story"
        className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28"
      >
        <SectionTitle
          title="Less, but better"
          mainTitle="Good design never needs to shout."
          description="We believe the best things are the ones that stay with you. Simple forms, considered details, and pieces that feel just right — today and for years to come."
        />
      </section>
    </main>
  );
}

export default Home;
