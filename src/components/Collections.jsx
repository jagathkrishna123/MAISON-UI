
import products from "../data/products";
import ProductCard from "../pages/ProductCard";

function Collections() {
  return (
    <main className="min-h-screen bg-[#F5EBD0]">
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">

        {/* Page Heading */}
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#7F011F]/70">
            The MAISON Edit
          </p>

          <h1 className="mt-4 font-serif text-4xl text-[#7F011F] sm:text-5xl lg:text-6xl">
            Our Collections
          </h1>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#7F011F]/70">
            Discover thoughtfully selected menswear, from everyday
            essentials to timeless pieces that define your style.
          </p>
        </div>

        {/* Product Count */}
        <div className="mb-7 flex items-center justify-between border-b border-[#7F011F]/15 pb-4">
          <p className="text-sm text-[#7F011F]">
            All Products
          </p>

          <p className="text-sm text-[#7F011F]/60">
            {products.length} products
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </section>
    </main>
  );
}

export default Collections;
