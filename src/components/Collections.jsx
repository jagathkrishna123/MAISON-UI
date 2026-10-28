
import { Link } from "react-router-dom";
import products from "../data/products";

function Collections() {
  return (
    <main className="min-h-screen bg-[#F5EBD0] px-6 py-14">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#7F011F]/70">
            The MAISON Edit
          </p>

          <h1 className="mt-4 font-serif text-4xl text-[#7F011F] sm:text-5xl">
            Our Collections
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-[#7F011F]/70">
            Discover thoughtfully selected menswear for every occasion.
          </p>
        </div>

        <p className="mb-6 border-b border-[#7F011F]/20 pb-4 text-sm text-[#7F011F]">
          All Products — {products.length} products
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="group"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-72 w-full rounded-xl object-cover transition duration-300 group-hover:scale-[1.02]"
              />

              <p className="mt-4 text-sm text-[#7F011F]/60">
                {product.category}
              </p>

              <h2 className="mt-2 text-lg font-medium text-[#7F011F]">
                {product.name}
              </h2>

              <div className="mt-2 flex gap-3">
                <p className="font-semibold text-[#7F011F]">
                  ₹{product.offerPrice.toLocaleString("en-IN")}
                </p>

                <p className="text-[#7F011F]/50 line-through">
                  ₹{product.price.toLocaleString("en-IN")}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}

export default Collections;
