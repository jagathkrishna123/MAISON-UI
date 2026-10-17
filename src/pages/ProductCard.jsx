
function ProductCard({ product }) {
  return (
    <article className="group">
      <div className="relative overflow-hidden rounded-xl bg-[#F5EBD0]">
        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-full bg-[#F5EBD0] px-3 py-1 text-xs font-medium text-[#7F011F]">
          {product.category}
        </span>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-medium text-[#7F011F]">
          {product.name}
        </h3>

        <div className="mt-2 flex items-center gap-3">
          <span className="font-semibold text-[#7F011F]">
            ₹{product.offerPrice.toLocaleString("en-IN")}
          </span>

          <span className="text-sm text-[#7F011F]/50 line-through">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
        </div>

        <button className="mt-4 w-full border border-[#7F011F] py-3 text-sm font-medium text-[#7F011F] transition hover:bg-[#7F011F] hover:text-[#F5EBD0]">
          View Product
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
