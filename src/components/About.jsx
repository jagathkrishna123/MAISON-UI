
import aboutData from "../data/aboutData";
import AboutCard from "../pages/AboutCard";

function About() {
  return (
    <main className="min-h-screen bg-[#F5EBD0] text-[#7F011F]">

      {/* Hero Section */}
      <section className="px-6 pb-16 pt-16 text-center sm:pb-20 sm:pt-24">

        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7F011F]/60">
          The Story Behind MAISON
        </p>

        <h1 className="mx-auto mt-6 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl lg:text-7xl">
          Style is personal.
          <br />
          <span className="italic">Make it yours.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#7F011F]/70 sm:text-base sm:leading-8">
          MAISON is built around a simple idea: menswear should
          feel effortless, look timeless, and reflect who you are.
          We bring together everyday essentials and considered
          designs to make getting dressed feel natural.
        </p>

      </section>

      {/* Brand Values */}
      <section className="bg-white/40 px-6 py-16 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-7xl">

          {/* Section Heading */}
          <div className="mb-10 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7F011F]/60">
              What We Believe
            </p>

            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="max-w-xl font-serif text-3xl sm:text-4xl lg:text-5xl">
                More than just what you wear.
              </h2>

              <p className="max-w-sm text-sm leading-7 text-[#7F011F]/65">
                Three principles guide everything we bring
                into the MAISON collection.
              </p>
            </div>
          </div>

          {/* Reusable Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {aboutData.map((item) => (
              <AboutCard
                key={item.id}
                item={item}
              />
            ))}

          </div>

        </div>

      </section>

      {/* Closing Section */}
      <section className="px-6 py-20 text-center sm:py-28">

        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7F011F]/60">
          The MAISON Philosophy
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl font-serif text-3xl leading-tight sm:text-5xl">
          Less noise. Better choices. Lasting style.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#7F011F]/70">
          Find pieces that fit your lifestyle and make your own
          statement, one outfit at a time.
        </p>

      </section>

    </main>
  );
}

export default About;
