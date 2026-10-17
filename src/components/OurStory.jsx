
import { Link } from "react-router-dom";

function OurStory() {
  return (
    <section className="bg-[#F5EBD0] text-[#7F011F]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 lg:px-10 lg:py-24">

        {/* Left Content */}
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#7F011F]/60">
            The Story Behind MAISON
          </p>

          <h1 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            More than fashion.
            <br />
            <span className="italic">It's a statement.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-[#7F011F]/70">
            MAISON was created around a simple belief: great style
            should feel effortless. We bring together timeless
            menswear, thoughtful details, and everyday essentials
            to help you express your individuality.
          </p>

          <p className="mt-4 max-w-lg text-base leading-8 text-[#7F011F]/70">
            From everyday basics to refined classics, every piece
            is chosen with comfort, versatility, and confidence
            in mind.
          </p>

          <Link
            to="/collections"
            className="mt-8 inline-flex items-center gap-3 bg-[#7F011F] px-7 py-4 text-sm font-medium text-[#F5EBD0] transition hover:bg-[#5D0016]"
          >
            Explore Collections <span>↗</span>
          </Link>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1000"
            alt="Modern fashion editorial"
            className="h-[400px] w-full rounded-2xl object-cover sm:h-[500px] lg:h-[580px]"
          />
        </div>

      </div>
    </section>
  );
}

export default OurStory;
