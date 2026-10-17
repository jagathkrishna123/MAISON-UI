
function AboutCard({ item }) {
  return (
    <article className="group rounded-2xl border border-[#7F011F]/10 bg-white/50 p-7 transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl sm:p-8">

      {/* Card Header */}
      <div className="flex items-center justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7F011F] text-xl text-[#F5EBD0]">
          {item.icon}
        </span>

        <span className="text-sm font-medium tracking-widest text-[#7F011F]/40">
          {item.number}
        </span>
      </div>

      {/* Card Content */}
      <h3 className="mt-8 font-serif text-2xl text-[#7F011F]">
        {item.title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-[#7F011F]/70">
        {item.description}
      </p>

      {/* Decorative Bottom Line */}
      <div className="mt-7 h-1 w-10 rounded-full bg-[#7F011F]/30 transition-all duration-300 group-hover:w-20 group-hover:bg-[#7F011F]" />

    </article>
  );
}

export default AboutCard;
