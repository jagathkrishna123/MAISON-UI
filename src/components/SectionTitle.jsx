
// function SectionTitle({
//   title,
//   mainTitle,
//   description,
//   centered = false,
// }) {
//   return (
//     <div
//       className={`max-w-2xl ${
//         centered ? "mx-auto text-center" : "text-left"
//       }`}
//     >
//       {title && (
//         <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7F011F]/60">
//           {title}
//         </p>
//       )}

//       <h2 className="mt-4 font-serif text-3xl leading-tight text-[#7F011F] sm:text-4xl lg:text-5xl">
//         {mainTitle}
//       </h2>

//       {description && (
//         <p className="mt-5 text-sm leading-7 text-[#7F011F]/70 sm:text-base">
//           {description}
//         </p>
//       )}
//     </div>
//   );
// }

// export default SectionTitle;

function SectionTitle({ title, mainTitle, description }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-14">

      <p className="text-xs uppercase tracking-widest border border-[#7F011F]/30 w-fit mx-auto px-3 py-2 rounded-full">
        {title}
      </p>

      <h2 className="mt-5 text-6xl leading-snug">
        {mainTitle}
      </h2>

      <p className="mt-5 text-[#7F011F]/70">
        {description}
      </p>

    </div>
  );
}

export default SectionTitle;
